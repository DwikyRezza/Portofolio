# THE PORTFOLIO INTERACTION KERNEL FOR Dwiky Rezza
Version: 2.0 (Interactive Hero Framework)

## 0. STATUS CHANGE
- The previous raw text-only brutalist system is deprecated.
- The portfolio is now governed as a high-end interactive landing surface with technical credibility, cinematic motion, and controlled visual depth.
- Old constraints that banned gradients, motion layers, blur, orbital previews, canvas particles, or animation orchestration no longer apply.

## 1. CORE INTENT
- The landing page must communicate engineering capability through motion, hierarchy, and real project signals.
- The first viewport is the primary product experience. It must render the hero, typed role loop, orbital project showcase, particle field, and logo loop without requiring scroll.
- Visual style should feel premium and technical, not generic SaaS, not template portfolio, and not text-only documentation.

## 2. LAYOUT SYSTEM
- The hero uses a two-column desktop distribution: 45 percent content and 55 percent interactive project showcase.
- The right project showcase is an overflow-hidden viewport. Moving orbital elements must never create page-level horizontal scroll.
- Mobile may collapse the columns into a vertical stack, but the CTA, typed role, and project previews must remain visible and usable.
- Use `min-h-[100dvh]` for viewport stability. Avoid `h-screen`.

## 3. ANIMATION AUTHORITY
- GSAP and Framer Motion are authorized for production animation pipelines.
- Client animation islands must be explicit with `"use client"` and must clean up timers, observers, animation frames, and external animation handles where applicable.
- Continuous motion must support predictable performance: transform-based movement, bounded canvas work, and no layout-thrashing scroll listeners.
- Reduced-motion support is required for any future major animation that is not essential to understanding the page.

## 4. COMPONENT BOUNDARIES
- Reusable animation primitives live in `src/components/animations`.
- Page composition stays in `src/app/[lng]/page.tsx` unless the page becomes too large to reason about safely.
- Animation CSS may live beside the component that owns it. Global CSS remains reserved for tokens and project-wide base rules.
- Runtime routing remains file-local. Do not introduce `middleware.ts` for locale control unless explicitly approved.

## 5. VISUAL LANGUAGE
- The default theme is dark technical: near-black background, white typography, cyan-teal accent, restrained glass and glow effects.
- The accent color is `#71eaee` and should remain the primary action and system highlight color.
- Mini-browser project previews are approved as the primary project visual metaphor.
- Particles, edge fades, blur, and depth shadows are allowed when they clarify hierarchy and stay performant.

## 6. TYPOGRAPHY AND COPY
- Hero copy must be short, direct, and human: greeting, name, capability, role loop, CTA.
- Project preview copy should name real systems and recognizable engineering domains.
- Avoid filler claims such as "innovative", "cutting edge", "world class", or other unsupported marketing language.

## 7. ORBITAL PROJECT SHOWCASE
- The orbital showcase must rotate continuously at a slow linear pace, targeting one full revolution every 30 to 40 seconds.
- The center identity node anchors the motion with `dwiky.dev`.
- Six to eight project previews are allowed. The visible window should expose roughly three mini-browser frames while the rest cycle outside the clipped right column.
- Orbital items must be transform-positioned and contained inside the 55 percent wrapper.

## 8. LOGO LOOP
- The base footer logo loop is approved as a single marquee layer.
- Horizontal direction, speed control, edge fading, and hover behavior are part of the allowed animation vocabulary.
- Do not add a second marquee on the same page unless the information architecture changes.

## 9. BUILD INTEGRITY
- TypeScript strict mode must pass.
- Next production build must pass before claiming completion.
- Do not add new dependencies unless package.json is checked first and the install is explicitly necessary.
- Do not touch `.env`, credentials, tokens, SSH keys, API keys, or secret files.

## 10. GIT AND OPERATIONS
- Do not run `git push`, `git reset --hard`, `git clean`, or delete branches without explicit approval.
- Explain the impact before risky Git operations.
- Prefer scoped changes to the landing page, animation primitives, and this governance file.
