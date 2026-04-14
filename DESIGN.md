# Design Brief

## Direction

Harvest Clarity — Professional B2B vegetable wholesaler information site with warm agricultural soul and editorial clarity.

## Tone

Clean editorial minimalism with intentional warmth: cream + terracotta foundation rejects rustic cliché in favor of professional agricultural character grounded in B2B trust.

## Differentiation

Agricultural grid layout with intentional surface zone separation — card-based product catalog with harvest-inspired clay accents creates memorable visual rhythm across all sections.

## Color Palette

| Token      | OKLCH        | Role                            |
| ---------- | ------------ | ------------------------------- |
| background | 0.96 0.015 75 | Warm cream, primary canvas      |
| foreground | 0.2 0.03 50  | Deep clay-brown text            |
| card       | 0.98 0.01 75 | Subtle elevation for content    |
| primary    | 0.45 0.12 30 | Deep terracotta, CTAs & focus   |
| accent     | 0.5 0.1 160  | Soft sage, secondary highlights |
| muted      | 0.92 0.02 75 | Subtle backgrounds              |

## Typography

- Display: Lora — Editorial warmth for headlines & hero text
- Body: DM Sans — Professional clarity for all body copy & UI
- Scale: hero `text-6xl font-bold tracking-tight`, h2 `text-4xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Soft shadow hierarchy: `shadow-subtle` (1px, 5% opacity) for card borders, `shadow-elevated` (4px, 8% opacity) for interactive hover states. No heavy shadows; depth via background color stepping and intentional z-layers.

## Structural Zones

| Zone    | Background        | Border              | Notes                                |
| ------- | ----------------- | ------------------- | ------------------------------------ |
| Header  | bg-card           | border-b border-border | Subtle lift with `shadow-subtle`     |
| Content | bg-background     | —                   | Alternating bg-card/bg-muted sections |
| Footer  | bg-muted/40       | border-t border-border | Lower contrast for visual rest       |

## Spacing & Rhythm

Spacious density with 2rem section gaps: 6px border-radius for subtle softness, 1.5rem padding inside cards, 0.75rem micro-spacing between controls. Section-to-section breathing room maintains editorial clarity.

## Component Patterns

- Buttons: terracotta bg-primary with hover `shadow-elevated`, rounded-sm for agricultural precision
- Cards: bg-card with `shadow-subtle`, rounded-sm, alternating 2-column/3-column grid for product catalog
- Badges: bg-accent/40 text-accent uppercase 12px tracking-widest for product tags

## Motion

- Entrance: Staggered fade-in on scroll for product cards (200ms stagger, 0.3s duration)
- Hover: `transition-smooth` on all interactive elements, slight `shadow-elevated` lift on card hover
- Decorative: Subtle pulse on hero CTA button (ambient, never aggressive)

## Constraints

- Typography: Serif display headlines paired with sans-serif body only (no serif body)
- Color: No gradients; depth via layering and shadows exclusively
- Shape: Consistent rounded-sm (6px) across all components — no mixed radii

## Signature Detail

Deep terracotta primary with warm cream background creates agricultural authenticity without rustic kitsch — B2B credibility through intentional minimalism.
