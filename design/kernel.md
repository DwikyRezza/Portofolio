# THE PORTFOLIO CONSTITUTION FOR Dwiky Rezza
Version: 1.1 (System Design Constraint Specification)

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

## 15. CONSTITUTIONAL PRIORITY ORDER (CONFLICT RESOLVER)
In the event of an architectural or layout constraint conflict, the AI agent must enforce implementation strictly based on this priority matrix:
- LEVEL 1 (HIGHEST) — Runtime Safety: Zero-flicker routing, build compilation success, type-safety, and unbroken navigation execution.
- LEVEL 2 — Structural Determinism: Explicit file-local reasoning, folder co-location, and deterministic AI agent readability.
- LEVEL 3 — Visual Integrity: Adherence to the 4px spacing rhythm, 1px structural hairline borders, and typography scale rules.
- LEVEL 4 (LOWEST) — Content Philosophy: Anti-generic engineering tone and domain-honest narratives.

## 16. DELIBERATE INFRASTRUCTURE REDUCTION
- The restriction against `middleware.ts` is explicitly recognized as a deliberate architectural trade-off designed to lower total system entropy and maximize file-local predictability. It is an intentional project constraint, not a framework limitation.

## 15. CONSTITUTIONAL PRIORITY SYSTEM & INTRA-LEVEL TIE BREAKER
In the event of an architectural, technical, or design constraint conflict, the AI agent must compute implementations based on this strict hierarchical matrix:

- LEVEL 1A — Runtime Execution Safety (HIGHEST): Zero-flicker routing, absolute navigation predictability, and fluid state synchronization.
- LEVEL 1B — Build Integrity Safety: Compilation success, strict TypeScript compliance, and zero build-time warnings.
- LEVEL 2 — Structural Determinism: Explicit file-local reasoning, folder co-location, and local encapsulation.
- LEVEL 3 — Visual System Integrity: Adherence to the 4px spacing rhythm, 1px structural hairline borders, and typography roles.
- LEVEL 4 (LOWEST) — Content Philosophy: Anti-generic engineering tone and domain-honest narratives.

### INTRA-LEVEL TIE BREAKER RULES:
- Level 1A always overrides Level 1B in raw execution strategy; runtime behavior stability must never be compromised for speculative build-time patterns.
- Level 2 (Structural Determinism) strictly overrides Level 3 (Visual Integrity) when layout stability or file readability is threatened.
- Level 4 (Content Philosophy) is entirely subordinate and must never override any structural, visual, or runtime integrity constraints.

## 16. VERIFIABLE ARCHITECTURAL TRADEOFF GUARANTEES
The explicit restriction against `middleware.ts` is a deliberate architectural trade-off. This structural reduction enforces the following verified system behaviors:
- Guaranteed File-Local Reasoning: The entry routing path must be fully understood by reading `src/app/page.tsx` alone.
- No Hidden Routing Graphs: No network-layer transformations can mutate downstream route delivery covertly.
- Deterministic AI Navigation Model: AI agents are restricted to explicit filesystem boundaries, completely eliminating unexpected cross-layer routing regressions.

## 17. ADDITIVE LAYOUT RESPONSIBILITY SEPARATION (OPTION A)
- Layout inheritance in the Next.js App Router is strictly additive. To prevent double-wrapping and breaking sticky layouts, responsibilities are separated as follows:
- `src/app/layout.tsx` [PURE SYSTEM SHELL]: Strictly limited to injecting the `<html>` and `<body>` structures and loading `globals.css`. It must contain zero UI elements, layout wrappers, or structural constraints.
- `src/app/[lng]/layout.tsx` [FULL UI COMPOSITION ENGINE]: Owns the layout boundaries, typography inheritance, 12-column grid system, and the Sticky Detail Inspector container.

## 18. GLOBAL CSS TOKEN ISOLATION BOUNDARY
- `src/app/globals.css` is restricted strictly as a Pure Token Layer utilizing Tailwind CSS v4 `@theme` bindings.
- It must only contain primitive spacing systems, design color tokens, custom font-weight mapping, and uniform radii definition. 
- Writing specific component layouts or utility overrides inside this file is strictly prohibited. Component-specific presentation must be handled purely by Tailwind utility classes within the feature modules.

## 19. FRAMEWORK CORRECTNESS ESCAPE HATCH
- To prevent AI agent over-compliance freeze or the generation of unnatural workarounds, runtime framework correctness takes absolute precedence.
- If a strict constitutional rule literally conflicts with standard Next.js App Router framework behavior, the agent must prefer framework correctness over a literal interpretation of the law.

## 19. BOUNDED FRAMEWORK ESCAPE HATCH
- To prevent AI agent over-compliance freeze or the generation of unnatural workarounds, runtime framework feasibility conflicts take precedence over literal rules.
- **Strict Boundary**: This escape hatch ONLY applies to low-level runtime compilation and technical feasibility constraints. It is strictly FORBIDDEN from overriding the core architectural intent (e.g., local explicit control planes, server-only redirect patterns, and monochrome constraints). 
- If an agent utilizes this escape hatch, it must explicitly document the technical trade-off within a localized code comment without violating the structural priority system.

## 20. FORBIDDEN PATTERN RUNTIME DETECTION (ANTI-DRIFT GUARD)
The system strictly outlaws the following execution patterns to maintain total structural integrity. AI agents must flag any occurrence of these patterns as an absolute architectural failure:
- **Pattern Alpha (Client-Side Gatekeeping)**: Using `"use client"`, `useEffect`, or `useRouter` at the root routing gateway layer (`src/app/page.tsx`).
- **Pattern Beta (Global Implicit Inversion)**: Injecting any global `middleware.ts` configuration at the root or edge layer of the repository.
- **Pattern Gamma (Layout Leaks & Double Wrappers)**: Introducing padding, margins, visual elements, or page-specific styling containers inside the pure system shell (`src/app/layout.tsx`).
- **Pattern Delta (CSS Creep)**: Defining custom utility layout classes or element-specific selectors directly inside the design token registry (`src/app/globals.css`).