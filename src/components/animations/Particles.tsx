'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
};

type ParticlesProps = {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  particleBaseSize?: number;
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
};

export default function Particles({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors = ['#ffffff'],
  particleBaseSize = 100,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let frame = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles: Particle[] = Array.from({ length: particleCount }, (_, index) => {
      const radius = particleSpread;
      return {
        x: (Math.random() - 0.5) * radius,
        y: (Math.random() - 0.5) * radius,
        z: Math.random() * radius,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        vz: (Math.random() - 0.5) * speed,
        size: particleBaseSize * (0.4 + Math.random() * sizeRandomness),
        color: particleColors[index % particleColors.length],
      };
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (particle: Particle) => {
      const rotation = disableRotation ? 0 : frame * 0.00008;
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      const x = particle.x * cos - particle.z * sin;
      const z = particle.x * sin + particle.z * cos;
      const depth = cameraDistance / (cameraDistance + z);
      const hoverX = moveParticlesOnHover && pointerRef.current.active ? pointerRef.current.x * particleHoverFactor : 0;
      const hoverY = moveParticlesOnHover && pointerRef.current.active ? pointerRef.current.y * particleHoverFactor : 0;
      return {
        x: width / 2 + (x + hoverX) * 72 * depth,
        y: height / 2 + (particle.y + hoverY) * 72 * depth,
        scale: depth,
      };
    };

    const draw = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.x += particle.vx * 0.016;
        particle.y += particle.vy * 0.016;
        particle.z += particle.vz * 0.016;

        const limit = particleSpread / 2;
        if (particle.x > limit || particle.x < -limit) particle.vx *= -1;
        if (particle.y > limit || particle.y < -limit) particle.vy *= -1;
        if (particle.z > particleSpread || particle.z < 0) particle.vz *= -1;

        const projected = project(particle);
        const radius = Math.max(0.6, (particle.size / 100) * projected.scale);
        context.beginPath();
        context.fillStyle = alphaParticles
          ? particle.color.replace(')', `, ${Math.max(0.2, projected.scale)})`).replace('rgb', 'rgba')
          : particle.color;
        context.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
        context.fill();
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [alphaParticles, cameraDistance, disableRotation, moveParticlesOnHover, particleBaseSize, particleColors, particleCount, particleHoverFactor, particleSpread, sizeRandomness, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      onPointerEnter={() => {
        pointerRef.current.active = true;
      }}
      onPointerLeave={() => {
        pointerRef.current.active = false;
      }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerRef.current.x = (event.clientX - rect.left) / rect.width - 0.5;
        pointerRef.current.y = (event.clientY - rect.top) / rect.height - 0.5;
      }}
    />
  );
}
