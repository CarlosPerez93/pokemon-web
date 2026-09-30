---
name: Field Guide & Research Codex
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#5c3f40'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0037'
  primary: '#b80035'
  on-primary: '#ffffff'
  primary-container: '#e11d48'
  on-primary-container: '#fffaf9'
  inverse-primary: '#ffb3b6'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#815100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffaf9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  data-metric:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system approaches the domain through the lens of a high-spec biological field terminal and natural science expedition archive. It avoids cartoonish, juvenile clichés in favor of a utilitarian, highly curated aesthetic that balances scientific precision with vibrant athletic energy. The interface prioritizes catalog efficiency, tactile specimen inspection, and rapid categorical filtering.

The design movement combines **Minimalism** with subtle **Tactile Precision and Micro-Glass accents**. The layout acts as an unobtrusive scientific viewport: high-density tabular metadata, crisp structural boundaries, muted slate-zinc foundations, and vivid biological type accents that inject life into systematic data displays. Interactions emphasize precision—subtle spring transitions, localized element-tinted ambient glows, and sharp typography that reinforces the feeling of handling a bespoke modern researcher's handheld deck.

## Colors

The foundation is built on an expansive neutral architecture spanning crisp optical whites, slate boundaries, and deep midnight tones for high contrast across both light and dark operational modes.

### Brand Accents
- **Primary (`#E11D48`)**: Field crimson. Used for definitive actions, primary status triggers, capture indicators, and core identity marks.
- **Secondary (`#4F46E5`)**: Field indigo. Applied to analytical overlays, research tags, scientific cross-references, and navigational pill active states.
- **Tertiary (`#F59E0B`)**: Electric amber. Designates expedition alerts, special-tier status markers, regional variants, and legendary classifications.
- **Neutral (`#0F172A`)**: Obsidian slate. Provides high-density foreground typography, dark-mode terminal surfaces, and structural anchor elements.

### Semantic Type Palette
These biological tokens serve as contextual functional tints:
- **Fire**: `#F97316` | **Water**: `#0EA5E9` | **Grass**: `#10B981`
- **Electric**: `#FACC15` | **Psychic**: `#EC4899` | **Dragon**: `#6366F1`
- **Ghost**: `#7C3AED` | **Poison**: `#A855F7` | **Ground**: `#D97706`
- **Ice**: `#38BDF8` | **Steel**: `#94A3B8` | **Fairy**: `#F472B6`

### Application Guidelines
- Surface tiers rely on slate steps: Base canvas (`#F8FAFC` light / `#0F172A` dark), Raised container (`#FFFFFF` light / `#1E293B` dark), and Inset data panels (`#F1F5F9` light / `#0B1120` dark).
- Hairline borders utilize `#E2E8F0` in light mode and `#334155` in dark mode.
- Specimen background glows must never exceed 12% opacity in light mode and 20% in dark mode, derived dynamically from the primary elemental type color.

## Typography

The pairing reflects scientific editorial precision: **Space Grotesk** serves as the authoritative, geometric display voice for specimen titles, indices, index numbers, and analytical counters. **Plus Jakarta Sans** provides a highly readable, clear engine for field notes, natural lore, biological properties, and operational controls.

### Implementation Rules
- **Taxonomic Index Numbers (e.g., `#0025`)**: Set in `data-metric` or `label-caps` using `Space Grotesk` with tabular figures enabled (`font-variant-numeric: tabular-nums`) and slight tracking (`letter-spacing: 0.04em`).
- **Section & Header Identifiers**: Primary headings should use a tight tracking (`-0.02em`) to maintain an engineered, high-density look.
- **Uppercase Data Labels**: Micro-headers (`label-caps`) must always use `text-transform: uppercase` with wide tracking (`letter-spacing: 0.08em`) to mimic field gear instrumentation markings.

## Layout & Spacing

The structural layout utilizes a responsive 12-column fluid grid system bounded by a maximum viewport container width of 1440px to ensure specimens maintain ergonomic readability on ultrawide monitors.

### Grid & Breakpoints
- **Mobile (< 640px)**: 4 columns, `margin-sm` (16px), `gutter-sm` (16px). Single-column specimen list or 2-column compact grid cards.
- **Tablet (640px - 1024px)**: 8 columns, `margin` (24px), `gutter` (20px). 2-to-3 column specimen card distribution; filter drawers collapse into sliding bottom sheets.
- **Desktop (1024px+)**: 12 columns, `margin` (32px), `gutter` (24px). Accommodates persistent left-rail navigation or category filter trees alongside a 3-or-4 column specimen grid.

### Spatial Rhythm
- Apply `space-md` for standard component internal padding and `space-sm` for compact field badges.
- Use `space-lg` to separate modular research sections within specimen dossiers (e.g., physical attributes, combat radar charts, evolutionary trees).

## Elevation & Depth

Visual hierarchy is constructed through **tonal layering and low-contrast perimeter definition**, avoiding heavy skeuomorphic drop shadows. Depth mimics precision-layered glass screens and matte lab decks.

### Level 0 (Ground Canvas)
- **Light**: `#F8FAFC` flat surface.
- **Dark**: `#0F172A` flat surface.
- No border, no shadow.

### Level 1 (Resting Cards & Filter Bars)
- **Light**: `#FFFFFF` surface with a 1px solid `#E2E8F0` border. Ambient shadow: `0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)`.
- **Dark**: `#1E293B` surface with a 1px solid `#334155` border. Ambient shadow: `0 1px 3px rgba(0, 0, 0, 0.25)`.

### Level 2 (Hovered Cards & Dropdowns)
- **Light**: Subtle Y-axis lift (`-2px`). Shadow: `0 10px 20px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)`. Specimen cards project a faint 15% opacity radial glow based on the specimen's dominant elemental type.
- **Dark**: Y-axis lift (`-2px`). Shadow: `0 12px 24px -4px rgba(0, 0, 0, 0.4)`. Type glow at 22% opacity.

### Level 3 (Sticky Nav, Floating Modals, Command Drawers)
- Surface backdrop blur: `backdrop-filter: blur(12px)`.
- **Light**: Background `rgba(255, 255, 255, 0.85)` with a `#E2E8F0` hairline bottom border.
- **Dark**: Background `rgba(15, 23, 42, 0.85)` with a `#334155` hairline bottom border.
- Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.

## Shapes

The design uses a balanced geometric baseline (Level 2: Rounded). This ensures the interface feels contemporary, tactile, and durable—reminiscent of ergonomic handheld field hardware rather than toy-like bubbles.

### Scale Application
- **Base Components (`0.5rem` / `8px`)**: Input fields, buttons, small status counters, filter checkboxes, and data pill containers.
- **Specimen Cards (`1rem` / `16px`)**: Standard field guide cards, metric panels, and visual graphs.
- **Dossiers & Modals (`1.5rem` / `24px`)**: Deep-dive analytics sheets, main search palette, and specimen portrait frames.
- **Micro-Indicators & Badges**: Fully rounded circular profiles (`9999px`) for type badges, state dots, and favorite triggers.

## Components

### Buttons
- **Primary**: Solid `#E11D48` background, `#FFFFFF` text, `0.5rem` border radius, high-weight `Space Grotesk` label. Hover brings a subtle brightness bump and scale (`1.01`).
- **Secondary / Action**: Surface-tinted slate outline (`1px solid #CBD5E1` in light, `#334155` in dark), clear typography, transparent background shifting to `10%` accent background on hover.
- **Icon / Utility (e.g., Favorite Trigger)**: Circular or `0.5rem` square container, `backdrop-filter: blur(8px)`, neutral slate border, housing an SVG star/heart icon that transitions to active Crimson upon click with a micro-pop scale animation.

### Type Badges
- Pill-shaped tags (`border-radius: 9999px`) featuring a 6px elemental status micro-dot or icon alongside the type name.
- Tinted background formula: 12% opacity of the respective type hex code; text set to full-strength darkened/lightened contrast variant of the type token.
- Typographic style: `label-badge` (12px, semi-bold, uppercase tracking).

### Field Guide Cards
- Built with a resting Level 1 elevation, featuring an understated `rounded-xl` boundary and a 1px border outline.
- Layout: Top header displaying the index badge (`#0001`) and interactive favorite toggle; centered high-resolution official artwork suspended over an ambient radial glow tinted to the Pokémon's primary type; bottom segment housing name in `headline-sm`, followed by dual-type badge pills and base stat micro-bars.
- Interactions: Hover elevates to Level 2 with a `-2px` vertical displacement.

### Search Trigger & Inputs
- **Global Search Trigger**: High-polish pill/box resembling a field database console. Houses a magnifying reticle icon, quick keyboard shortcut marker (`⌘K`), and placeholder text ("Search Pokémon, ability, moves...").
- **Form Inputs**: Crisp `#FFFFFF` (or `#1E293B`) background, 1px `#CBD5E1` border, focusing to a 2px outer ring in Crimson (`#E11D48`) without disruptive layout shifts.

### Sticky Navigation
- Slim, compact viewport anchor with blurred glass substrate (`backdrop-filter: blur(12px)`).
- Left: Architectural logomark and monospace research build version (`v2.4-FIELD`).
- Center: Segmented navigation pills with sliding background highlights.
- Right: Quick-search modal trigger and a dual-state Light/Dark toggle switch with haptic-like sliding icons (Sun/Moon).

### State Indicators
- **Skeleton Cards**: Shimmer animation passing diagonally over subtle slate frames (`#E2E8F0` to `#F1F5F9` in light; `#1E293B` to `#334155` in dark) with precise silhouettes of artwork frames and text strips.
- **Empty State**: Centered circular wireframe radar/compass motif with rotating concentric vector lines, accompanied by `headline-md` ("Specimen Unindexed") and an action button to reset active filters.
- **Connection / Error Banner**: Slim inline alert bar with an amber-red hairline border, high-contrast monospace status code (`STATUS: OFFLINE_CACHE_ACTIVE`), and a retry interaction button.