"use client";

import { useEffect, useRef, useState } from "react";

type SectionId = "identity" | "corefit";

interface InspectorBlock {
  overview: string;
  challenge: string;
  architecture: string;
  metrics: { value: string; label: string }[];
  stack: string;
}

const INSPECTOR: Record<SectionId, InspectorBlock> = {
  identity: {
    overview: "ENGINEERING PORTFOLIO // DWIKY REZZA // SYSTEM STATUS: ACTIVE",
    challenge:
      "REDUCE SYSTEM ENTROPY ACROSS DECOUPLED FRONTEND AND INFRASTRUCTURE LAYERS WITHOUT INTRODUCING IMPLICIT CONTROL FLOW.",
    architecture:
      "FILE-LOCAL REASONING ENFORCED. ROUTING, STATE, AND PRESENTATION ARE STRICTLY SEPARATED PER THE GOVERNANCE KERNEL.",
    metrics: [
      { value: "2023", label: "Inception" },
      { value: "12-COL", label: "Grid" },
      { value: "v1.5", label: "Governance" },
    ],
    stack: "DART // FLUTTER // PYTHON // YOLOv8 // NEXT.JS",
  },
  corefit: {
    overview: "COREFIT // MOBILE PERSISTENCE RUNTIME // SQFLITE + DART ISOLATE",
    challenge:
      "GUARANTEE PERSISTENCE SAFETY ACROSS FOREGROUND TASKS AND OS-INITIATED PROCESS RECLAMATION.",
    architecture:
      "SQFLITE SERIALIZES ON A BACKGROUND DART ISOLATE. THE MAIN ISOLATE READS THROUGH A SINGLE MUTATION QUEUE, ELIMINATING INTERLEAVED WRITES.",
    metrics: [
      { value: "60 FPS", label: "Performance" },
      { value: "v2.3.3", label: "Engine" },
      { value: "0.0", label: "Mutation SLOP" },
    ],
    stack: "DART // FLUTTER // SQFLITE // FOREGROUND TASK",
  },
};

const SECTION_ORDER: SectionId[] = ["identity", "corefit"];

function registerSection(
  map: React.MutableRefObject<Map<string, HTMLElement>>,
  id: string
) {
  return (el: HTMLElement | null) => {
    if (el) map.current.set(id, el);
    else map.current.delete(id);
  };
}

export default function Page() {
  const [activeSection, setActiveSection] = useState<SectionId>("identity");
  const sectionEls = useRef<Map<string, HTMLElement>>(new Map());
  const ratioMap = useRef<Map<string, { ratio: number; time: number }>>(
    new Map()
  );
  const pendingSection = useRef<SectionId>("identity");
  const dwellTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const now = performance.now();
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.section;
          if (!id) continue;
          ratioMap.current.set(id, {
            ratio: entry.intersectionRatio,
            time: now,
          });
        }

        // Deterministic winner: highest intersectionRatio.
        // Tie-break: most recent trigger event time.
        let winner: SectionId | null = null;
        let bestRatio = -1;
        let bestTime = -1;
        for (const id of SECTION_ORDER) {
          const record = ratioMap.current.get(id);
          if (!record) continue;
          if (
            record.ratio > bestRatio ||
            (record.ratio === bestRatio && record.time > bestTime)
          ) {
            bestRatio = record.ratio;
            bestTime = record.time;
            winner = id as SectionId;
          }
        }

        if (!winner) return;

        // State stabilization: 150ms dwell window to suppress scroll thrash.
        if (winner !== pendingSection.current) {
          pendingSection.current = winner;
          if (dwellTimer.current) clearTimeout(dwellTimer.current);
          dwellTimer.current = setTimeout(() => {
            setActiveSection(pendingSection.current);
          }, 150);
        }
      },
      { threshold: 0.4 }
    );

    sectionEls.current.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      if (dwellTimer.current) clearTimeout(dwellTimer.current);
    };
  }, []);

  const inspector = INSPECTOR[activeSection];

  return (
    <div className="grid min-h-screen grid-cols-12 bg-white">
      {/* Left Panel: Scrollable Content Stream */}
      <main className="col-span-7 min-h-screen">
        {/* IDENTITY SECTION */}
        <section
          ref={registerSection(sectionEls, "identity")}
          data-section="identity"
          className="flex flex-col gap-12 px-12 py-16"
        >
          <header className="flex flex-col gap-4 border-b border-black pb-8">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              [01] Identity Manifesto
            </p>
            <h1 className="text-4xl font-black tracking-tight text-black md:text-6xl">
              MUHAMMAD DWIKY YANUAREZZA
            </h1>
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              UNDERGRADUATE INFORMATION TECHNOLOGY STUDENT AT TELKOM UNIVERSITY
              SURABAYA
            </p>
          </header>

          <div className="flex flex-col gap-8">
            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                System Architecture
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                Every module boundary is a load-bearing contract. Coupling is
                admitted in compile time, not deferred to runtime. State
                transitions stay deterministic; side effects are quarantined to
                the layer that owns them. The 12-column grid is a constraint,
                not a decoration. Structural determinism outranks visual
                freedom.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Computer Vision
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                Detection pipelines hit thermal throttling and queue depth
                limits long before model size becomes the wall. YOLOv8
                inference on edge hardware trades peak accuracy for sustained
                frame rate. Quantization collapses batch normalization;
                preprocessing absorbs the precision loss upstream so the
                detector never receives a degraded frame.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Mobile Persistence
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                Background processes are reclaimed by the OS without
                negotiation. Every navigation is a serialization checkpoint
                and every restore must complete inside one frame on the main
                isolate. State that cannot survive process death was never
                owned; persistence is the only truth the runtime will not
                silently revoke.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Engineering Ethos
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                No claim ships on narrative. Every assertion resolves to a
                measurable constraint: a latency budget, a memory ceiling, a
                frame-time floor. This portfolio reads as a system log, not a
                brochure.
              </p>
            </article>
          </div>
        </section>

        {/* COREFIT SECTION */}
        <section
          ref={registerSection(sectionEls, "corefit")}
          data-section="corefit"
          className="flex flex-col gap-12 border-t border-black px-12 py-16"
        >
          <header className="flex flex-col gap-4 border-b border-black pb-8">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              [02] CoreFit System Dossier
            </p>
            <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
              SQFLITE + DART BACKGROUND ISOLATE
            </h2>
          </header>

          <div className="flex flex-col gap-8">
            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Isolate Boundary
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                SQLite runs off the main isolate through sqflite&apos;s worker
                channel. The main isolate never blocks on disk I/O. Writes are
                marshalled across the boundary as a single mutation queue; the
                foreground task appends, the isolate drains. Interleaving is
                structurally impossible.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Foreground Task Lifecycle
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                The OS reclaims foreground time under memory pressure. Each
                task tick serializes its delta to disk before yielding. On
                restoration, the queue replays from the last committed
                checkpoint, never from memory. A dropped frame is tolerable;
                a dropped write is a contract violation.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Mutation SLOP Constraint
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                Write slop is held to zero. Every transaction is idempotent and
                keyed on a stable row identity, so a replayed queue produces
                the same final state regardless of how many times it drains.
                Throughput is bounded by disk sync latency, accepted as the
                trade for durability.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Failure Mode
              </p>
              <p className="max-w-prose text-base leading-relaxed text-zinc-600">
                Disk-full and permission revocation surface as queue
                saturation, not as silent data loss. The inspector pins the
                mutation counter at 0.0 slop precisely because the queue
                refuses to advance past an uncommitted write.
              </p>
            </article>
          </div>
        </section>
      </main>

      {/* Right Panel: Sticky Detail Inspector */}
      <aside className="sticky top-0 col-span-5 h-screen border-l border-black bg-white">
        <div className="flex h-full flex-col gap-8 overflow-y-auto px-8 py-16">
          {/* Status Header */}
          <div className="flex items-center justify-between border-b border-zinc-200 pb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              Detail Inspector
            </p>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-black">
              <span className="h-2 w-2 bg-glide-teal" />
              {activeSection}
            </span>
          </div>

          {/* [01] Overview */}
          <section className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              [01] Overview
            </p>
            <p className="text-base font-medium leading-snug text-black">
              {inspector.overview}
            </p>
          </section>

          {/* [02] Challenge */}
          <section className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              [02] Challenge
            </p>
            <p className="text-sm leading-relaxed text-zinc-600">
              {inspector.challenge}
            </p>
          </section>

          {/* [03] Architecture */}
          <section className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              [03] Architecture
            </p>
            <p className="text-sm leading-relaxed text-zinc-600">
              {inspector.architecture}
            </p>
          </section>

          {/* [04] Metrics */}
          <section className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              [04] Metrics
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-zinc-200 pt-6">
              {inspector.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-2">
                  <p className="text-2xl font-black tracking-tight text-black">
                    {m.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-zinc-400">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* [05] Stack */}
          <section className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              [05] Stack
            </p>
            <p className="font-mono text-sm leading-relaxed text-black">
              {inspector.stack}
            </p>
          </section>
        </div>
      </aside>
    </div>
  );
}
