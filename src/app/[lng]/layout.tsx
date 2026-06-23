// Stateless structural container.
//
// The 12-column view distribution is intentionally NOT imposed here. The page
// composite (src/app/[lng]/page.tsx) internalizes the full grid so that the
// Content Stream (left) and the Sticky Detail Inspector (right) share a single
// stateful client tree. Splitting them across this layout's columns would
// orphan the synchronous binding that drives the Level 1 deterministic scroll
// state machine. Per kernel §17 (additive layout, no double-wrapping) and
// §19 (bounded framework escape hatch), grid ownership is delegated downward
// to the runtime orchestrator. This file remains a pure stateless shell.
export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
