'use client';
import { useCallback, useEffect, useMemo, useRef, useState, memo, type CSSProperties, type ReactNode } from 'react';
import './LogoLoop.css';

type LogoLoopItem = {
  node?: ReactNode;
  src?: string;
  alt?: string;
};

type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (logo: LogoLoopItem, index: number) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };
const toCssLength = (value?: number | string) => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

const useResizeObserver = (callback: () => void, elements: React.RefObject<HTMLElement>[]) => {
  useEffect(() => {
    if (!window.ResizeObserver) { callback(); return; }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => observers.forEach(obs => obs?.disconnect());
  }, [callback, elements]);
};

export const LogoLoop = memo(({ logos, speed = 120, direction = 'left', width = '100%', logoHeight = 28, gap = 32, pauseOnHover = true, hoverSpeed = 0, fadeOut = false, fadeOutColor, scaleOnHover = false, renderItem, ariaLabel = 'Partner logos', className, style }: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null); const trackRef = useRef<HTMLDivElement | null>(null); const seqRef = useRef<HTMLUListElement | null>(null);
  const [seqWidth, setSeqWidth] = useState(0); const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES); const [isHovered, setIsHovered] = useState(false);
  const offsetRef = useRef(0); const velocityRef = useRef(0); const lastTimestampRef = useRef<number | null>(null);
  const isVertical = direction === 'up' || direction === 'down';

  const targetVelocity = useMemo(() => Math.abs(speed) * (direction === 'left' || direction === 'up' ? 1 : -1) * (speed < 0 ? -1 : 1), [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = isVertical ? (containerRef.current?.clientHeight ?? 0) : (containerRef.current?.clientWidth ?? 0);
    const sequenceWidth = isVertical ? (seqRef.current?.getBoundingClientRect?.().height ?? 0) : (seqRef.current?.getBoundingClientRect?.().width ?? 0);
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM));
    }
  }, [isVertical]);

  useResizeObserver(updateDimensions, [containerRef, seqRef]);

  useEffect(() => {
    const track = trackRef.current; if (!track || seqWidth <= 0) return;
    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      const target = isHovered && pauseOnHover ? hoverSpeed : targetVelocity;
      velocityRef.current += (target - velocityRef.current) * (1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU));
      offsetRef.current = ((offsetRef.current + velocityRef.current * deltaTime) % seqWidth + seqWidth) % seqWidth;
      track.style.transform = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [seqWidth, isHovered, targetVelocity, hoverSpeed, pauseOnHover, isVertical]);

  return (
    <div ref={containerRef} className={`logoloop ${isVertical ? 'logoloop--vertical' : ''} ${fadeOut ? 'logoloop--fade' : ''} ${scaleOnHover ? 'logoloop--scale-hover' : ''} ${className || ''}`} style={{ width: toCssLength(width) || '100%', '--logoloop-gap': `${gap}px`, '--logoloop-logoHeight': `${logoHeight}px`, ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }), ...style } as CSSProperties} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} aria-label={ariaLabel}>
      <div ref={trackRef} className="logoloop__track">
        {Array.from({ length: copyCount }).map((_, cIdx) => (
          <ul ref={cIdx === 0 ? seqRef : undefined} key={cIdx} className="logoloop__list" aria-hidden={cIdx > 0}>
            {logos.map((logo, lIdx) => (
              <li key={`${cIdx}-${lIdx}`} className="logoloop__item">
                {renderItem ? renderItem(logo, lIdx) : logo.node || <img src={logo.src} alt={logo.alt || ''} />}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
});
LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
