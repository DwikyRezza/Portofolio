"use client";

import { motion } from "framer-motion";
import TextType from "@/components/animations/TextType";
import LogoLoop from "@/components/animations/LogoLoop";
import Particles from "@/components/animations/Particles";

const projectPreviews = [
  {
    name: "CoreBusiness",
    signal: "ERP runtime",
    lines: ["orders.sync()", "tenant ledger", "role matrix"],
  },
  {
    name: "Network IDS",
    signal: "packet anomaly",
    lines: ["flow window", "signature delta", "alert queue"],
  },
  {
    name: "Smart Village",
    signal: "civic platform",
    lines: ["resident data", "service desk", "geo reports"],
  },
  {
    name: "IoT Monitoring",
    signal: "edge telemetry",
    lines: ["sensor mesh", "MQTT stream", "threshold map"],
  },
  {
    name: "Inventory System",
    signal: "stock control",
    lines: ["SKU ledger", "warehouse bin", "audit trail"],
  },
  {
    name: "Data Analytics",
    signal: "decision layer",
    lines: ["batch model", "KPI surface", "trend compare"],
  },
];

const loopLogos = [
  { node: <span className="font-mono text-sm text-white/72">NEXT.JS</span> },
  { node: <span className="font-mono text-sm text-white/72">FLUTTER</span> },
  { node: <span className="font-mono text-sm text-white/72">PYTHON</span> },
  { node: <span className="font-mono text-sm text-white/72">TYPESCRIPT</span> },
  { node: <span className="font-mono text-sm text-white/72">FIREBASE</span> },
  { node: <span className="font-mono text-sm text-white/72">SUPABASE</span> },
  { node: <span className="font-mono text-sm text-white/72">GSAP</span> },
  { node: <span className="font-mono text-sm text-white/72">FRAMER MOTION</span> },
];

function ProjectPreview({
  project,
  index,
}: {
  project: (typeof projectPreviews)[number];
  index: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 h-36 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-white/16 bg-zinc-950/88 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      style={{
        transform: `rotate(${index * 60}deg) translateX(clamp(340px, 39vw, 520px)) rotate(-${index * 60}deg) translate(-50%, -50%)`,
      }}
    >
      <div className="flex h-8 items-center justify-between border-b border-white/10 bg-white/[0.04] px-3">
        <span className="h-1.5 w-10 rounded-full bg-white/18" />
        <span className="font-mono text-[10px] text-white/38">secure.local</span>
      </div>
      <div className="flex h-[calc(100%-2rem)] flex-col justify-between p-4">
        <div>
          <p className="font-mono text-[10px] uppercase text-cyan-200/70">
            {project.signal}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-tight text-white">
            {project.name}
          </h3>
        </div>
        <div className="space-y-1.5">
          {project.lines.map((line) => (
            <div key={line} className="flex items-center gap-2">
              <span className="h-px w-5 bg-cyan-200/35" />
              <span className="font-mono text-[11px] text-white/54">{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrbitalProjectShowcase() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#050505] to-transparent" />

      <div className="absolute left-1/2 top-1/2 z-10 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/14 bg-white/[0.04] shadow-[0_0_80px_rgba(113,234,238,0.16)] backdrop-blur-md">
        <div className="text-center">
          <p className="font-mono text-xs uppercase text-cyan-200/60">identity</p>
          <p className="mt-1 text-xl font-semibold text-white">dwiky.dev</p>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[min(84vw,880px)] w-[min(84vw,880px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(84vw,880px)] w-[min(84vw,880px)] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {projectPreviews.map((project, index) => (
          <ProjectPreview key={project.name} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#050505] text-white">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[1080px] w-[1080px] -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-[1080px] w-[1080px]">
            <Particles
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleColors={["#ffffff"]}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              particleHoverFactor={1}
              alphaParticles={false}
              sizeRandomness={1}
              cameraDistance={20}
              disableRotation={false}
            />
          </div>
        </div>
      </div>

      <section className="relative z-10 grid min-h-[100dvh] grid-cols-1 overflow-hidden lg:grid-cols-[45%_55%]">
        <div className="flex min-h-[72dvh] flex-col justify-center px-6 py-24 sm:px-10 lg:min-h-[100dvh] lg:px-16 xl:px-20">
          <div className="max-w-[620px]">
            <p className="text-sm font-medium text-white/58">
              Welcome to my portfolio
            </p>
            <h1 className="mt-6 max-w-[11ch] text-5xl font-black leading-[0.96] text-white sm:text-6xl xl:text-7xl">
              Hi, I&apos;m Dwiky.
            </h1>
            <p className="mt-6 max-w-[540px] text-xl leading-relaxed text-white/72 sm:text-2xl">
              Building digital products and solving real-world problems.
            </p>
            <TextType
              text={["[Backend Engineer]", "[Flutter Developer]", "[System Designer]"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="mt-6 block min-h-9 font-mono text-xl text-cyan-200 sm:text-2xl"
            />
            <a
              href="#projects"
              className="mt-10 inline-flex h-12 items-center rounded-md bg-[#71eaee] px-6 text-sm font-bold text-black transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white active:translate-y-px"
            >
              View Projects
            </a>
          </div>
        </div>

        <div
          id="projects"
          className="relative min-h-[520px] overflow-hidden border-t border-white/10 lg:min-h-[100dvh] lg:border-l lg:border-t-0"
        >
          <OrbitalProjectShowcase />
        </div>
      </section>

      <footer className="relative z-20 -mt-20 border-t border-white/10 bg-[#050505]/84 px-0 py-6 backdrop-blur-md">
        <LogoLoop
          logos={loopLogos}
          speed={120}
          direction="left"
          fadeOut
          fadeOutColor="#050505"
          gap={48}
          logoHeight={22}
          pauseOnHover={false}
          ariaLabel="Technology stack"
        />
      </footer>
    </main>
  );
}
