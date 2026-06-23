# THE PORTFOLIO CONSTITUTION FOR Dwiky Rezza
Version: 1.5 (System Design Constraint Specification — Hardened)

## 0. MENTAL MODEL & INTENT
- Do not think of this page as a landing page or a personal website.
- Think of it as: an architect's project board, a technical dossier, and an engineering portfolio archive.
- The user must feel like they are reviewing serious production work on a monochrome drafting table rather than browsing a marketing site.
- The interface must communicate precision, technical depth, and absolute confidence. Avoid startup-template aesthetics, Dribbble/Behance designs, and generic SaaS patterns.

## 1. THE ANTI-GENERIC CLAUSE (COPY BLUEPRINT)
- Each project entry must feel like an engineering dossier or a technical briefing, not a marketing advertisement.
- ABSOLUTELY AVOID: Vague marketing language, generic feature bullets, startup jargon, and phrases like "innovative solution", "cutting-edge technology", or "user-friendly interface".
- STRICTLY PREFER: Architecture decisions, engineering constraints, tradeoffs, low-level infrastructure details, and measurable outcomes.
- Write raw technical realities: focus on race conditions, memory overheads, thread starvation, data synchronization strategies, and persistence safety.

## 2. SPACING & GRID RHYTHM SYSTEM
- Maintain a strict 4px mathematical rhythm across the entire codebase.
- Allowed Spacing Values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px (Tailwind equivalents: p-1, p-2, p-3, p-4, p-6, p-8, p-12, p-16).
- Avoid any arbitrary or odd spacing values. The page layout must feel mathematically aligned, calculated, and unyielding.

## 3. STRUCTURAL LANGUAGE & BORDERS
- Borders are the primary visual separators.
- Allowed Border Tokens: `border-black` for heavy structural layout cuts, `border-zinc-200` for inner technical metadata divisions.
- Avoid drop shadows, blurs, or gradients as layout separators.
- Every logical section must be separated using solid, deliberate engineering lines, not empty cards floating on a canvas.

## 4. TYPOGRAPHY SYSTEM (THE PRIMARY INSTRUMENT)
Strictly enforce this type hierarchy:
- Primary Headings & Project Names: `text-4xl` to `text-6xl`, `font-black` (or custom weight 800+), tight tracking (`tracking-tight`). It must feel heavy, structural, and unyielding.
- Body Narrative: `text-zinc-600`, `text-sm` or `text-base`, constrained to `max-w-prose` for optimal reading density.
- Metadata, Labels, & Indexing: `text-xs`, strictly `uppercase`, `tracking-widest`, `text-zinc-400`.

## 5. THE STICKY INSPECTOR TERMINAL STRUCTURE
The right side must function as a 'Sticky Detail Inspector' panel that stays fixed in view as the user scrolls. To prevent visual emptiness, it must follow a strict engineering report structure:
- [01 OVERVIEW]: High-contrast category, title, and tracking status.
- [02 CHALLENGE]: The engineering constraints and raw technical blockers encountered.
- [03 ARCHITECTURE]: Detailed narrative on structural choices and tradeoffs made.
- [04 METRICS]: A strict 3-column block showing bold, real-world execution data points.
- [05 STACK]: Infrastructure mapping using concise monospace indicators.
- [06 EXTERNAL LINK]: The singular primary action.

## 6. CHROMATIC CONTROL & THE LIGHTNING TEAL
- The entire application is strictly monochrome (pure white background, rich black text, structural zinc lines).
- The color Electric Teal (`#71eaee`) is reserved EXCLUSIVELY for primary action buttons (CTA) and active structural indicators. No other color may compete with it. The user’s eyes must naturally land on this focal point first.
- All interactions must feel mechanical and intentional: prefer 150-200ms duration, `ease-out`, positional shifts, and hard shadow transitions. Avoid smooth floating, glows, glassmorphism, or neumorphism.

## 7. INTERACTION TRUTH SYSTEM
- Only one active project can exist at any time.
- Switching projects must be instantaneous (no loading state, no skeleton UI).
- No optimistic UI, no fake transitions.
- State change must feel like "switching a control panel", not navigating a website.

## 8. LAYOUT DETERMINISM
- The layout must not introduce visual creativity beyond defined structure.
- No additional decorative elements are allowed.
- No icons unless structurally meaningful (status, indicator, external link).
- If unsure, choose simplicity over embellishment.

## 9. ENGINEERING REALISM ENFORCEMENT
- All technical descriptions must reflect real system constraints.
- No fictional buzzwords or abstract innovation claims.
- Prefer describing failure modes, edge cases, and system limitations.
- Every system must imply tradeoffs (latency vs memory, accuracy vs throughput, etc).

## 10. VISUAL FAILURE CONTROL
- The interface must never collapse into a cold, text-only document.
- Every section must maintain strict visual hierarchy through calculated spacing, sharp borders, and logical grouping.
- If content feels visually empty, reinforce the structural lines and density of the layout; do not attempt to fix it using generic decorative elements.

## 11. SCROLL BEHAVIOR MODEL
- The left panel functions as a scroll-driven content stream.
- The right panel acts strictly as a persistent state inspector.
- Scrolling must feel like navigating a secure technical archive, not browsing a standard commercial website.
- The user should feel like they are "reading through system logs and blueprints", not "scrolling web pages".

## 12. CONTENT DENSITY CONTROL
- Avoid over-explaining engineering systems; prefer compact, high-impact technical statements over verbose paragraphs.
- Every sentence must carry absolute engineering meaning, metrics, or architectural constraints.
- Remove filler language, marketing padding, and fluff completely.

## 13. LOCALIZED APPLICATION-LAYER ROUTING CONTROL
- Global implicit control planes (e.g., `middleware.ts`) are strictly prohibited to maintain absolute file-local reasoning and predictability for AI agents.
- All routing and localization gatekeeping must live exclusively within the explicit local control plane of the filesystem layer (`src/app/page.tsx`).
- The gateway redirect must implement the Direct Server Redirect Pattern using the native Next.js `redirect()` throw signal within a Pure Server Component. 
- Client-side navigation triggers (`useEffect`, `useRouter`) or temporary intermediate render states are strictly banned at the routing entry point.

## 14. HONEST LEVEL-OF-ABSTRACTION CONSTRAINT
- Technical descriptions must strictly adapt to the project's native domain; do not force low-level distributed system vocabulary onto high-level engineering layers.
- For Mobile & Frontend Domains: Prioritize constraints regarding rendering latency, frame drop optimization, battery overheads, and local memory lifecycle state.
- For AI, Vision, & Backend Domains: Prioritize constraints regarding thread isolation, processing concurrency, queue resource exhaustion, and state serialization guarantees.

## 15. CONSTITUTIONAL PRIORITY SYSTEM & INTRA-LEVEL TIE BREAKER
In the event of an architectural, technical, or design constraint conflict, the AI agent must compute implementations based on this strict hierarchical matrix:

- LEVEL 1A — Runtime Execution Safety (HIGHEST PRIORITY): Guarantees zero-flicker routing, absolute navigation predictability, correct state transitions, and stable runtime behavior. Any decision affecting user-facing execution flow MUST prioritize this level above all others.
- LEVEL 1B — Build Integrity Safety: Ensures compilation success, strict TypeScript compliance, type correctness, and absence of build-time warnings or errors. This level governs static correctness of the system.
- LEVEL 2 — Structural Determinism: Enforces explicit file-local reasoning, strict folder co-location, predictable module boundaries, and elimination of hidden or implicit control flows.
- LEVEL 3 — Visual System Integrity: Enforces 4px spacing rhythm, 1px hairline border system, typography hierarchy rules, and deterministic visual layout structure.
- LEVEL 4 (LOWEST PRIIVITY) — Content Philosophy: Governs anti-generic writing style, engineering tone enforcement, and domain-honest narrative constraints. This level is strictly non-structural and non-executable.

### INTRA-LEVEL TIE BREAKER RULES:
- LEVEL 1A overrides LEVEL 1B in execution strategy decisions: Runtime stability and user-facing navigation correctness must never be sacrificed for compile-time optimizations or speculative type strictness patterns.
- LEVEL 2 overrides LEVEL 3 when structural stability is at risk: File locality, module clarity, and deterministic folder structure take precedence over visual presentation consistency.
- LEVEL 4 must never override any higher-level constraint under any circumstance: Content philosophy is purely descriptive and must never influence runtime, structural, or visual system decisions.

## 16. VERIFIABLE ARCHITECTURAL TRADEOFF GUARANTEES
The explicit restriction against `middleware.ts` is an intentional architectural trade-off, not a framework limitation. This constraint enforces a deliberate reduction in system complexity and guarantees the following verifiable system properties:
- Guaranteed File-Local Reasoning: The complete routing and entry behavior of the system can be fully understood by inspecting `src/app/page.tsx` and associated server components without requiring external control plane context.
- No Hidden Routing Graphs: The system contains no edge-layer or network-layer transformations that mutate or intercept routing behavior outside the explicit App Router structure.
- Deterministic AI Navigation Model: AI agents operate strictly within filesystem-defined boundaries, eliminating ambiguity caused by global middleware interception layers or implicit routing logic injection.
- Reduced System Entropy by Design: The absence of middleware enforces a single, traceable control flow path, improving predictability, debuggability, and AI-assisted code generation stability.

## 17. ADDITIVE LAYOUT RESPONSIBILITY SEPARATION (OPTION A)
- Layout inheritance in the Next.js App Router is strictly additive. To prevent double-wrapping and breaking sticky layouts, responsibilities are separated as follows:
- `src/app/layout.tsx` [PURE SYSTEM SHELL]: Strictly limited to injecting the `<html>` and `<body>` structures and loading `globals.css`. It must contain zero UI elements, layout wrappers, or structural constraints.
- `src/app/[lng]/layout.tsx` [FULL UI COMPOSITION ENGINE]: Owns the layout boundaries, typography inheritance, 12-column grid system, and the Sticky Detail Inspector container.

## 18. GLOBAL CSS TOKEN ISOLATION BOUNDARY
- `src/app/globals.css` is restricted strictly as a Pure Token Layer utilizing Tailwind CSS v4 `@theme` bindings.
- It must only contain primitive spacing systems, design color tokens, custom font-weight mapping, and uniform radii definition. 
- Writing specific component layouts or utility overrides inside this file is strictly prohibited. Component-specific presentation must be handled purely by Tailwind utility classes within the feature modules.

## 19. BOUNDED FRAMEWORK ESCAPE HATCH (DETERMINISTIC VALIDATION)
- To prevent AI agent over-compliance freeze or the generation of unnatural workarounds, runtime framework feasibility conflicts take precedence over literal rules.
- **Deterministic Trigger**: This escape hatch ONLY applies when a violation is strictly required for framework compliance OR build execution correctness verified directly by Next.js runtime behavior. It is strictly FORBIDDEN from being activated based on subjective interpretation or convenience.
- **Strict Boundary**: This escape hatch is entirely banned from overriding core architectural intents (local explicit control planes, server-only redirect patterns, and monochrome constraints).
- If an agent utilizes this escape hatch, it must explicitly document the technical compilation trade-off within a localized code comment.

## 20. FORBIDDEN PATTERN RUNTIME DETECTION & SEVERITY CLASSIFICATION
The system enforces an explicit severity classification matrix to govern anti-drift constraints. Any detected violation must be categorized and handled according to the following deterministic protocols:

### SEV-1 (FATAL) — CORE ROUTING & AUTHORITY BOUNDARY
- **Patterns**: Pattern Alpha (Client-Side Gatekeeping via `"use client"`, `useEffect`, or `useRouter` inside `src/app/page.tsx`) or Pattern Beta (Global Implicit Inversion via adding `middleware.ts`).
- **Enforcement Action**: Immediate execution halt. The implementation is an absolute architectural failure and must be rewritten from scratch.

### SEV-2 (CRITICAL) — LAYOUT STRUCTURE VIOLATION
- **Pattern**: Pattern Gamma (Layout Leaks & Double Wrappers via introducing padding, margins, structural containers, or page-specific visual styling inside the pure system shell `src/app/layout.tsx`).
- **Enforcement Action**: Immediate execution halt. The agent is strictly FORBIDDEN from directly mutating the directory tree. It must issue a Mandatory Refactor Instruction to the developer, blocking any further code generation until the presentation container is stripped from the root shell and co-located down to `src/app/[lng]/layout.tsx` by human or approved scaffold automation.

### SEV-3 (WARNING) — CODESPACE & CSS CREEP
- **Pattern**: Pattern Delta (CSS Creep via defining custom utility layout classes or specific element selectors inside the design token registry `src/app/globals.css`).
- **Enforcement Action**: Flag a non-fatal warning during code generation. The agent must refactor the injected style back into inline Tailwind utility classes inside the presentation layer.

### SEV-4 (STYLE DRIFT) — TYPOGRAPHY INCONSISTENCY
- **Pattern**: Deviating from the strict typography scale or mapping font-weight values outside the allowed 4px spacing/design scales.
- **Enforcement Action**: Auto-correct values to the nearest legal design token defined in the system.