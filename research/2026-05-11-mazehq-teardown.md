# MazeHQ Site Teardown

Date: 2026-05-11
Reference: https://mazehq.com/

## Goal

Reverse engineer the Maze homepage so its layout system, interaction patterns, and visual language can inform a portfolio homepage rebuild without copying content. The target adaptation is a recruiter-facing Cloud Security Engineer - AI Trainer resume portfolio, so only structural and visual patterns should transfer.

## Source Inputs

- Live homepage: https://mazehq.com/
- HTML breakdown: `mazehq_html_breakdown.txt`
- Stylesheet: `/public/theme/styles.css?v=1.0.47`
- Bundled libraries: `/public/theme/libs.min.js?v=1.0.47`
- App bundle: `/public/theme/scripts.min.js?v=1.0.47`

## High-Level Composition

Maze uses a long-form landing page with a very controlled section cadence.

1. Fixed header with compact nav and CTA.
2. Hero with strong headline, short explainer, CTA pair, and animated visual system.
3. Trust/logo strip immediately after the hero.
4. Problem framing blocks that alternate between concise copy and visual proof.
5. Scroll-linked process sections with sticky or pinned visual modules.
6. Product proof sections showing backlog, remediation, and decision flow.
7. Social proof and resource sections.
8. Final CTA and dense footer.

This page is not built as a generic card stack. It alternates between quiet copy bands and dense, animated modules, which keeps the long page from flattening into repeated sections.

## Design System

### Typography

The CSS defines custom faces:

- `Roobert`
- `HelveticaNeue`
- `PPSupplySans`

The pattern is:

- geometric or neutral sans for UI copy
- a more expressive display face for hero emphasis
- large headlines with tight line-height and high contrast against a dark surface

### Color

Core tokens extracted from the stylesheet:

- Background: `#0F1523`
- Primary text: `#D6D8D8`
- Accent cyan: `#00E7FB`
- Accent magenta: `#E628FF`

Visual usage:

- dark navy background, not pure black
- soft gray body text rather than white
- cyan and magenta gradients reserved for emphasis, highlights, and motion accents
- translucent panels and blurred glass overlays layered over the dark base

### Surfaces

Repeated component style:

- rounded containers
- subtle borders
- translucent dark fills
- blur or glow behind important UI fragments
- dense spacing in hero and proof modules, then more generous whitespace in copy-led sections

### Responsive Breakpoints

Observed breakpoint ranges:

- mobile: up to `659px`
- tablet: `660px` to `1023px`
- desktop: `1024px+`

The mobile layout is not a simple shrink. Several effects reduce or switch behavior by breakpoint, especially for motion-heavy modules and sticky layouts.

## Frontend Stack Signals

### Libraries in `libs.min.js`

- `imagesLoaded`
- `Swiper`

### Libraries in `scripts.min.js`

- `GSAP 3.13.0`
- `ScrollTrigger`
- `Observer`
- `ScrollToPlugin`
- `DrawSVGPlugin`
- `SplitText`
- `Three.js`
- `lil-gui` for debug tooling

### Implications

Maze is using a hybrid system:

- GSAP handles nearly all scroll choreography and section reveals.
- Three.js powers hero/background particle or object scenes.
- Swiper handles slider-driven content.
- A custom page controller coordinates navigation, AJAX-like page transitions, and section setup.

## Interaction Model

### Scroll and Section Choreography

The main app bundle is built around GSAP `ScrollTrigger` timelines.

Observed patterns:

- pinned sections for story progression
- scrubbed timelines tied to scroll progress
- section enter and leave triggers
- responsive `matchMedia` handling for desktop versus mobile behavior
- explicit timeline labels for story phases

This is not lightweight reveal-on-scroll animation. Maze is sequencing section states as miniature scroll narratives.

### Header and Body State

The controller toggles body classes on scroll, including states equivalent to:

- scrolled or not scrolled
- scrolling direction
- past viewport thresholds
- past header height

This drives header compaction and global state changes without requiring per-section JS.

### Smooth Scrolling and Anchor Navigation

The bundle includes GSAP `ScrollToPlugin` and custom hash-click handling. Internal links scroll to targets with controlled offsets rather than relying on default browser anchor behavior.

### Text Animation

`SplitText` is used to animate headings by words or lines. The effect is typically:

- hero or section title split into words or lines
- staggered entrance
- supporting copy follows with a shorter fade or translate

### SVG and Diagram Motion

`DrawSVGPlugin` is used for line-path reveals in diagrams and icon systems. This supports animated process visuals and flow-line illustration.

### Carousels and Sliding Content

`Swiper` powers at least some slider or content-strip interactions, with modules visible for:

- keyboard support
- mousewheel
- navigation
- pagination
- scrollbar
- parallax
- autoplay
- thumbs
- free mode
- creative and card-style effects

### Pointer and Gesture Tracking

GSAP `Observer` and related handlers are present for:

- drag and pointer tracking
- scroll normalization
- hover tracking
- touch and wheel gesture handling

### Background and 3D Graphics

Three.js is used for particle systems and procedural scene objects. The script includes:

- shader materials
- particle textures
- point-cloud generation
- scene/camera/renderer setup
- scroll-driven 3D object transforms

This explains the animated hero and model-driven section visuals.

## Component Motifs

### Header

Classes suggest a structured header system:

- `.s-header`
- `.s-menu`

Patterns:

- fixed or sticky positioning
- compact nav and CTA
- hidden or toggled mobile menu
- body-state-driven style changes on scroll

### Hero / Welcome Module

Key classes:

- `.module--welcome`
- `.m-welcome`

Patterns:

- oversized headline
- short subhead
- primary CTA cluster
- animated visual asset to the side or behind
- trust signals close below

### Alert / Badge / Hotspot System

Key classes and animations:

- `.c-alert`
- `.a-badge`
- `.hotspot`
- keyframes such as `hotspot-inner`, `hotspot-outer`, `badge-pulse-*`, `bell-shake`, `bell-heart`

Patterns:

- pulsing attention markers
- alert pills and badges for status communication
- layered micro-animations within larger modules

### Client / Logo Strip

Key class:

- `.c-clients`

Pattern:

- a horizontally arranged trust band placed early on the page

### Graph / Process Modules

Key class:

- `.m-graph__step`

Pattern:

- staged flow diagrams
- step framing tied to scroll progress
- explanatory copy linked to visual state changes

## What Makes The Page Feel Distinct

1. The page alternates between narrative density and visual density.
2. The hero is not isolated; it immediately hands off to proof and trust.
3. Motion is structural, not decorative. Many elements exist to explain a process state.
4. The dark surface system is softened with blur, gradients, and muted text, avoiding harsh contrast.
5. The page relies on sectional pacing more than novelty widgets.

## What To Borrow For The Portfolio

### Strongly Transferable

1. Fixed compact header with a cleaner scroll state.
2. Hero built from a high-trust headline, concise role summary, primary CTA, and ambient visual motif.
3. Early proof strip immediately after the hero.
4. Alternating section rhythm: copy band, proof module, process band, evidence band, CTA.
5. More intentional use of blur panels, gradients, and edge glows.
6. Word or line-level entrance animation for section titles.
7. A recruiter-focused “how I work” section expressed as a process diagram rather than prose blocks.

### Transfer Carefully

1. Hotspots and animated diagnostics motifs should become security-signal visuals, not product screenshots.
2. Sticky scroll sequences should stay lightweight enough for a portfolio and not bury the actual resume content.
3. Three.js is not required unless there is already a good technical reason to carry that complexity.

### Do Not Transfer

1. Product marketing copy structure that assumes SaaS funnel conversion.
2. Client logo treatment unless the portfolio has real employer or project credibility to support it.
3. Maze’s exact copy, iconography, or feature framing.

## Homepage Adaptation Plan

Translate the Maze structure into a recruiter-first portfolio page:

1. Header
   - keep compact and sticky
   - nav should stay minimal: Home, Research, Projects, Contact

2. Hero
   - large headline naming the role directly
   - one concise summary paragraph
   - two CTA actions: review projects and contact
   - add a visual background field inspired by Maze’s gradient and signal motifs

3. Proof band
   - replace logo strip with resume-valid proof tiles
   - examples: cloud security, AI evaluation, detection engineering, research depth

4. Process / strengths section
   - replace SaaS workflow visuals with a step-based “Assess, Prioritize, Validate, Explain” diagram
   - keep it recruiter-readable in under 20 seconds

5. Research and project evidence
   - use stronger panel design and alternating layout
   - each project should read like outcome, scope, tooling, signal

6. Final CTA
   - short, direct, and contact-oriented

## Implementation Notes For This Repo

Given the current Vite + React app, the Maze influence should be expressed primarily through:

- `src/pages/Home.tsx` section restructuring
- `src/index.css` visual-system expansion
- light motion using the repo’s existing frontend approach

Recommended constraints:

- do not reintroduce framework/process/meta commentary into public copy
- keep all text resume-appropriate
- prefer CSS and existing motion patterns before adding heavy runtime dependencies
- use a static visual motif instead of full Three.js unless a later sprint explicitly justifies it

## Concrete Build Translation

For the next homepage pass, the target state should be:

1. A darker, more atmospheric hero shell with layered gradient/glow background.
2. A tighter headline block with stronger visual hierarchy.
3. A horizontal signal band under the hero.
4. One process-diagram section with Maze-like pacing but portfolio-appropriate content.
5. Stronger evidence cards with more contrast and less generic grid repetition.
6. Better mobile compression so the section rhythm still works under `1024px`.

## Summary

Maze’s distinguishing value is not any single widget. It is the combination of:

- controlled section cadence
- scroll-bound narrative modules
- dark, glassy visual language
- high-contrast headline system
- proof placed immediately after claim

That combination can be adapted effectively to the portfolio homepage without copying Maze’s product framing or introducing unnecessary technical complexity.