# Comprehensive CSS Extraction Report — VirtueByte WordPress → Next.js

> Extracted from live Elementor CSS files: `post-8.css` (global kit), `post-38.css` (home), `post-62.css` (header), `post-127.css` (about), `post-133.css` (services), `post-139.css` (contact), `post-206.css` (footer).

---

## 1. GLOBAL DESIGN TOKENS (from `post-8.css` — Elementor Kit)

### 1.1 Color Palette

| Token | Variable | Hex Value | Usage |
|---|---|---|---|
| Primary | `--e-global-color-primary` | `#462D84C7` | Primary (with alpha) |
| Secondary | `--e-global-color-secondary` | `#462D84` | Secondary purple |
| Text | `--e-global-color-text` | `#E0E0E0` | Body text |
| Accent | `--e-global-color-accent` | `#F6921E` | Orange accent (buttons, icons, highlights) |
| Purple BG | `--e-global-color-aaf0a03` | `#462D84` | Footer overlay, body bg |
| Card BG / Border | `--e-global-color-8856f78` | `#E5A2FF0A` | Semi-transparent purple (cards, borders) |
| White | `--e-global-color-f756773` | `#FFFFFF` | Headings, button text |
| Black | `--e-global-color-e7b7218` | `#000000` | — |
| Gold/Stars | `--e-global-color-17b567c` | `#E8AB38` | Testimonial stars |
| Warm Orange | `--e-global-color-379be64` | `#DA753F` | — |
| Orange (alt) | `--e-global-color-af46af6` | `#F6921E` | Counter numbers, button gradients |
| Transparent | `--e-global-color-5d941e7` | `#FFFFFF00` | Gradient fade-to endpoints |

### 1.2 Typography System

| Token | Font Family | Size | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| `3bcdba6` | Fira Sans | 72px | 600 | 1.2em | Hero XL heading |
| `350fe71` (H1) | Fira Sans | 56px | 600 | 1.2em | H1 / Page banners |
| `25fd04a` (H2) | Fira Sans | 36px | 600 | 1.3em | H2 / Section headings |
| `704e0d9` (H3) | — | 28px | 600 | 1.4em | H3 |
| `1d45331` (H4) | Fira Sans | 24px | 600 | 1.3em | H4 / Blog titles |
| `aedfcd0` (H5) | Fira Sans | 18px | 600 | 1.4em | Footer column headings |
| `a0b1a84` (H6) | — | 13px | 600 | 1.4em | Small labels |
| `4b6810d` (Buttons) | Lato | 16px | 600 | 1.3em | Buttons, uppercase |
| `9e15f7d` (Meta) | Lato | 14px | 400 | 1.3em | Blog meta dates |
| Text (Body) | Lato | 18px | 400 | — | Body text |
| Secondary | Outfit | 30px | 600 | 1.3em | — |
| Accent (Links) | Lato | 17px | 500 | — | Links |

#### Responsive Typography Overrides

**Tablet (≤1024px):** Font sizes inherit from variables (same as desktop).

**Mobile (≤767px):**
| Token | Mobile Size |
|---|---|
| Body text | 16px |
| Links | 16px |
| Hero XL (`3bcdba6`) | 36px |
| H1 (`350fe71`) | 32px |
| H2 (`25fd04a`) | 26px |
| H3 (`704e0d9`) | 22px |
| H4 (`1d45331`) | 18px |
| H5 (`aedfcd0`) | 16px |
| H6 (`a0b1a84`) | 13px |
| Buttons (`4b6810d`) | 15px |
| Meta (`9e15f7d`) | 13px |

### 1.3 Layout

| Property | Value |
|---|---|
| Container max-width | `1280px` |
| Tablet container max | `1024px` |
| Mobile container max | `767px` |
| Widget spacing | `20px` |

### 1.4 Body Base Styles

```css
body {
  background-color: #462D84; /* var(--e-global-color-aaf0a03) */
  color: #E0E0E0; /* var(--e-global-color-text) */
  font-family: "Lato", Sans-serif;
  font-size: 18px;
  font-weight: 400;
}

a {
  color: #E0E0E0;
  font-family: "Lato", Sans-serif;
  font-size: 17px;
  font-weight: 500;
}
```

---

## 2. GLOBAL BUTTON STYLES (from `post-8.css`)

### 2.1 Default Button

```css
.elementor-button {
  background-color: transparent;
  font-family: "Lato", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  text-shadow: 1px 1px 0px rgba(1.5, 1.5, 1.5, 0.26);
  color: #FFFFFF;
  background-image: radial-gradient(at bottom right, #F6921E 20%, #F6921E 80%);
  border-style: solid;
  border-width: 1px;
  border-color: #F6921E;
  border-radius: 15px;
  padding: 15px 30px;
}
```

### 2.2 Button Hover

```css
.elementor-button:hover,
.elementor-button:focus {
  background-color: transparent;
  color: #FFFFFF;
  background-image: radial-gradient(at bottom right, #F6921E 20%, #F6921E 80%);
  box-shadow: 0px 5px 5px 0px rgba(251, 0, 252, 0.56);
  border-style: solid;
  border-width: 1px;
  border-color: #F6921E;
}
```

### 2.3 Service Card Button (override)

```css
/* Applied to "Explore" / "Read More" buttons inside cards */
.service-card .elementor-button {
  font-family: "Lato", Sans-serif; /* inherited */
  border-radius: 12px;
  padding: 13px 26px;
}
```

---

## 3. HEADER (from `post-62.css` — Template #62)

### 3.1 Header Container

```css
.header {
  min-height: 70px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #E5A2FF0A;
  background-color: #FFFFFF;
  padding: 0;
  z-index: 2;
  /* Sticky behavior applied via Elementor settings */
}

/* Tablet */
@media (max-width: 1024px) {
  .header {
    padding: 0 20px;
  }
}
```

### 3.2 Logo

```css
.header-logo img {
  width: 93%;
}

/* Desktop width: 26.316% of header */
/* Tablet: 30% */
/* Mobile: 70% */

@media (max-width: 1024px) {
  .header-logo img { width: 100%; }
}

/* Mobile nav logo */
@media (max-width: 1024px) {
  .nav-logo img {
    max-width: 160px;
    max-height: 60px;
  }
}

@media (max-width: 767px) {
  .nav-logo img {
    max-width: 140px;
    max-height: 50px;
  }
}
```

### 3.3 Navigation Menu

```css
/* Nav container */
.nav-container {
  /* Desktop width: 80% */
  justify-content: flex-end;
  align-items: center;
  margin-top: 11px;
}

/* Desktop nav links */
.nav-link {
  font-family: "Lato", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  color: #000000;
  padding: 0 15px;
}

.nav-link:hover,
.nav-link:focus,
.nav-link:active,
.nav-link.active {
  color: #F6921E; /* accent */
}

/* Submenu indicator icon */
.submenu-indicator {
  font-size: 15px;
  color: #000000;
}

/* Submenu dropdown panel */
.submenu-panel {
  background-color: #462D84;
  border: 1px solid #E5A2FF0A;
  border-radius: 10px;
  min-width: 220px;
  padding: 10px;
}

/* Submenu links */
.submenu-link {
  background-color: #462D84;
  font-family: "Lato", Sans-serif;
  font-size: 17px;
  font-weight: 500;
  padding: 12px;
  color: #FFFFFF;
}

.submenu-link:hover {
  color: #F6921E;
}
```

### 3.4 Mobile Hamburger

```css
/* Hamburger appears at ≤1024px */
.hamburger-button {
  border: none;
  float: right;
}

@media (max-width: 1024px) {
  .hamburger-button {
    padding: 20px;
    width: 65px;
    border-radius: 8px;
  }

  .hamburger-icon {
    background-color: #FFFFFF;
  }

  .menu-close-button {
    padding: 12px;
    margin: 12px;
    width: 60px;
    border-radius: 8px;
    color: #FFFFFF;
  }

  /* Mobile menu container */
  .mobile-menu {
    background-color: #F9F9F9;
    max-width: 350px;
  }

  .mobile-nav-link {
    color: #000000;
    padding: 10px 15px;
  }

  .mobile-submenu-link {
    padding: 15px;
  }

  .nav-logo {
    margin: 15px 0 5px 10px;
    padding: 5px;
  }
}

@media (max-width: 767px) {
  .mobile-menu {
    background-color: #FFFEFE;
  }

  .mobile-nav-link {
    color: #380D0D;
  }

  /* Header: center-justified, gap 0 */
  .header {
    justify-content: center;
  }

  /* Logo: 70%, Nav: 30% */
}
```

---

## 4. HOME PAGE SECTIONS (from `post-38.css`)

### 4.1 Hero Section (`5c451577`)

```css
.hero-section {
  min-height: 85vh;
  flex-direction: row;
  overflow: hidden;
  padding: 0;
}

.hero-section::before {
  /* Video overlay */
  background-color: #403068;
  opacity: 0.9;
}

/* Hero heading */
.hero-heading {
  font-family: "Fira Sans", Sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.2em;
  color: #FFFFFF;
  margin-left: 35px;
}

.hero-heading > span {
  color: #F6921E; /* accent */
}

/* Hero description */
.hero-description {
  font-size: 18px;
  line-height: 24px;
  color: #E0E0E0;
  margin-left: 35px;
}

.hero-description p {
  margin-block-end: 0;
}

/* Hero CTA button wrapper */
.hero-button-wrapper {
  margin-left: 35px;
}

.hero-button .button-wrapper {
  flex-direction: row-reverse; /* icon on right */
}

/* Hero content area: 55% desktop, hero image: 43% */

/* Tablet */
@media (max-width: 1024px) {
  .hero-section {
    padding: 150px 20px 80px 20px;
  }
  .hero-heading {
    font-size: 56px;
    margin-left: 0;
  }
  .hero-description {
    margin-left: 0;
    line-height: 1.2em;
    letter-spacing: 0.4px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .hero-section {
    padding: 50px 20px;
  }
  .hero-heading {
    font-size: 36px;
  }
  .hero-description {
    line-height: 1.4em;
  }
}
```

### 4.2 Partners Section (`67a0b64`)

```css
.partners-section {
  flex-direction: row;
  column-gap: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: 40px;
  background-color: #E5A2FF0A;
}

.partners-section::before {
  /* Gradient overlay */
  background-image: linear-gradient(180deg, #E5A2FF00 0%, #F6921E2E 100%);
}

/* Partners grid: 4 columns */
.partners-logo-grid {
  grid-template-columns: repeat(4, 1fr);
}

.partner-logo-1 img { width: 90%; height: 100px; }
.partner-logo-2 img { width: 90%; height: 90px; }
.partner-logo-3 img { height: 70px; }
.partner-logo-4 img { width: 90%; height: 90px; }

/* Tablet */
@media (max-width: 1024px) {
  .partners-section {
    flex-direction: column-reverse;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .partners-section {
    padding: 20px;
    align-content: center;
  }
  .partners-logo-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 33px 0;
  }
  .partner-logo img { height: 90px; }
}
```

### 4.3 Services Section (`1ee62007`)

```css
.services-section {
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
}

.services-section::before {
  /* Background gradient overlay */
  background-image: radial-gradient(
    at center right,
    #F6921E 0%,        /* accent */
    #FFFFFF00 50%       /* transparent */
  );
  opacity: 0.1;
}

/* Section heading - "Boost your vision..." */
.services-heading {
  font-family: "Fira Sans", Sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3em;
  color: #FFFFFF;
}

/* Tablet */
@media (max-width: 1024px) {
  .services-section {
    padding: 80px 20px;
  }
  .services-heading { text-align: center; }
}

/* Mobile */
@media (max-width: 767px) {
  .services-section {
    padding: 50px 20px;
  }
  .services-heading {
    text-align: start;
    font-size: 26px;
  }
}
```

### 4.4 Service Cards (Shared Pattern — Used on Home, Services, About, Products)

```css
.service-card {
  border: 1px solid #E5A2FF0A;
  border-radius: 20px;
  padding: 0;
  background-color: #E5A2FF0A;
}

.service-card::before {
  /* Gradient overlay */
  background-image: radial-gradient(
    at top left,
    #F6921E 0%,       /* accent orange */
    #FFFFFF00 50%      /* transparent */
  );
  opacity: 0.2;
}

.service-card:hover {
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.41);
}

/* Card image container */
.service-card .image-container {
  border-radius: 11px;
}

.service-card img {
  height: 274px; /* first card, varies */
  border-radius: 20px;
}

/* Card content */
.service-card .content {
  padding: 0 20px;
  text-align: start;
}

.service-card .title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4em;
  color: #FFFFFF;
}

.service-card .description {
  font-size: 18px;
}

/* Card button */
.service-card .button-wrapper {
  padding-bottom: 30px;
  align-self: center;
}

.service-card .button {
  border-radius: 12px;
  padding: 13px 26px;
}

/* Mobile */
@media (max-width: 767px) {
  .service-card .title { font-size: 21px; }
  .service-card .button-wrapper { padding-bottom: 20px; }
}
```

### 4.5 Service Cards Grid

```css
/* Home: 3 cols × 2 rows */
.services-grid {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

/* Tablet: 2 columns */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 column */
@media (max-width: 767px) {
  .services-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
```

### 4.6 Technology Prowess Section (`287ff809`)

```css
.tech-section {
  flex-direction: row;
  gap: 50px;
  padding: 50px 0;
  background-color: #E5A2FF0A;
}

.tech-section::before {
  background-image: radial-gradient(
    at center right,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Heading */
.tech-heading {
  font-family: "Fira Sans", Sans-serif;
  /* Uses H2 token: 36px/600/1.3em */
  color: #FFFFFF;
}

/* Tech stack image */
.tech-image-container {
  margin: 0;
  padding: 0;
  border-radius: 2px;
}

.tech-image {
  border-radius: 7px;
}

/* Tablet */
@media (max-width: 1024px) {
  .tech-section {
    flex-direction: column;
    padding: 80px 20px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .tech-section {
    padding: 50px 20px;
  }
  .tech-heading { text-align: start; }
}
```

### 4.7 Milestones Section (`e74214a`)

```css
.milestones-section {
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
  background-color: #E5A2FF0A;
}

.milestones-section::before {
  background-image: radial-gradient(
    at top center,
    #FFFFFF00 0%,
    #F6921E 50%
  );
  opacity: 0.1;
}

/* Counter cards grid: 4 columns */
.milestones-grid {
  grid-template-columns: repeat(4, 1fr);
  margin-top: -20px;
}

/* Counter card */
.counter-card {
  background-color: #422C80;
  margin: 10px;
  padding: 30px;
  border: 1px solid;
  border-radius: 22px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.counter-number {
  color: #F6921E; /* var(--e-global-color-af46af6) */
  font-family: "Fira Sans", Sans-serif;
  font-size: 61px;
  font-weight: 600;
  line-height: 1.3em;
}

.counter-title {
  justify-content: center;
  color: #E0E0E0;
  font-family: "Lato", Sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.3em;
}

/* Mobile */
@media (max-width: 767px) {
  .milestones-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .counter-card {
    margin: 0;
    padding: 20px 0;
    border-radius: 11px;
  }
  .counter-number { font-size: 26px; }
  .counter-title { font-size: 13px; }
}
```

### 4.8 Client Logos / Carousel Section (`7a42fe75`)

```css
.clients-section {
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
  background-color: #E5A2FF0A;
}

.clients-section::before {
  background-image: radial-gradient(
    at top center,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Carousel inner gradient container */
.clients-carousel-wrapper {
  gap: 60px;
}

/* Client heading */
.clients-heading {
  font-family: "Fira Sans", Sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3em;
  color: #FFFFFF;
  text-align: center;
}

/* Swiper carousel */
.client-slider-bg {
  background-color: #FFFFFF00; /* transparent */
}

.client-card {
  background-color: #FFFFFF00; /* transparent */
  min-height: 70px;
  box-shadow: none;
  margin-right: 50px;
}

.client-logo {
  opacity: 0.7;
}

.client-logo:hover {
  opacity: 1;
}

/* Slides per view: 5 desktop / 4 tablet / 2 mobile */

/* Mobile */
@media (max-width: 767px) {
  .clients-heading {
    font-size: 26px;
    text-align: start;
  }
}
```

### 4.9 Products Section (`f047295`)

```css
.products-section {
  flex-direction: column;
  gap: 60px;
  padding: 50px 0;
}

.products-section::before {
  background-image: radial-gradient(
    at center left,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Products row: 2 cards side by side */
.products-row {
  flex-direction: row;
  margin-top: -23px;
}

/* Product card (same pattern as service card) */
/* Desktop: each card ~30% width, rest is spacers */

/* Mobile */
@media (max-width: 767px) {
  .products-section {
    flex-direction: column-reverse;
    padding: 0 20px;
  }
}
```

### 4.10 Testimonials Section (`26235b7`)

```css
.testimonials-section {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 50px 0 100px 0;
  background-image: url("...World-map-03-ai-copy-min.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.testimonials-section::before {
  background-image: radial-gradient(
    at top center,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* "Testimonial" label */
.testimonial-label-icon {
  color: #F6921E;
}
.testimonial-label-text {
  color: #FFFFFF;
}

/* Testimonial slider card */
.testimonial-card {
  background-color: #462D84;
  margin: 0 10px;
  padding: 30px;
  border: 1px solid #FFFFFFB0;
  border-radius: 20px;
  box-shadow: none;
}

.testimonial-content {
  font-size: 18px;
  color: #FFFFFF;
}

/* Star rating */
.testimonial-stars {
  color: #E8AB38; /* gold */
}
.testimonial-stars li:not(:last-child) {
  margin-right: 5px;
}

/* Author info */
.author-name {
  color: #FFFFFF;
  margin-bottom: 0;
}

.author-designation {
  color: #FFFFFF;
}

.author-image {
  height: 70px;
  width: 70px;
}

/* Watermark icon */
.watermark-icon {
  bottom: 30px;
  right: 30px;
  color: #F6921E;
}

/* Swiper pagination */
.testimonial-pagination {
  bottom: -50px;
}
.testimonial-pagination span {
  width: 8px;
  height: 8px;
}
.testimonial-pagination span:not(:last-child) {
  margin-right: 12px;
}
.testimonial-pagination .bullet-active {
  width: 8px;
  height: 8px;
  transform: scale(1.2);
}

/* Slides per view: 3 desktop / 2 tablet / 1 mobile */

/* Tablet */
@media (max-width: 1024px) {
  .testimonials-section {
    padding: 80px 20px 120px 20px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .testimonials-section {
    padding: 50px 20px;
  }
}
```

### 4.11 Difference Section (`7580624`)

```css
.difference-section {
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: hidden;
  padding: 50px 0;
  background-color: #E5A2FF0A;
}

.difference-section::before {
  background-image: radial-gradient(
    at top center,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* 3-column layout: left (32%) | center image (36%) | right (32%) */

/* Left icon boxes */
.diff-icon-box-left {
  margin-right: -35px;
  z-index: 1;
  align-items: center;
  text-align: end;
  gap: 15px;
}

/* Right icon boxes */
.diff-icon-box-right {
  margin-left: -35px;
  z-index: 1;
  align-items: center;
  text-align: start;
  gap: 15px;
}

/* Icon (stacked view) */
.diff-icon.stacked {
  background-color: #F7941D;
  color: #FFFFFF;
  font-size: 36px;
}

.diff-icon.framed,
.diff-icon.default {
  color: #F7941D;
  border-color: #F7941D;
}

/* Center image container */
.diff-center-image-container {
  border: 0 1px solid #E5A2FF0A;
  border-radius: 100px;
  padding: 20px 40px;
  background-color: #E5A2FF0A;
}

.diff-center-image {
  padding: 20px;
  opacity: 0.9;
  border-radius: 20px;
}

/* Mobile */
@media (max-width: 767px) {
  .diff-icon-box-left,
  .diff-icon-box-right {
    margin: 0;
    text-align: start;
  }
  .diff-center-image-container {
    padding: 30px;
  }
  .diff-center-image {
    padding: 0;
  }
  .difference-section {
    gap: 20px;
  }
}
```

### 4.12 CTA Section (`ff6817d`)

```css
.cta-section {
  flex-direction: column;
  padding: 50px 0;
}

/* CTA inner card */
.cta-card {
  flex-direction: row;
  border-radius: 20px;
  padding: 40px;
  background-color: #E5A2FF0A;
}

.cta-card::before {
  background-image: linear-gradient(180deg, #F6921E 0%, #E5A2FF0A 100%);
  opacity: 0.5;
}

/* CTA heading */
.cta-heading {
  /* Uses H2 token */
  color: #FFFFFF;
}

/* CTA description */
.cta-description {
  font-size: 18px;
}

/* CTA content area: 55%, image area: 45% */

/* Tablet */
@media (max-width: 1024px) {
  .cta-section { padding: 0 20px; }
  .cta-card { flex-direction: column-reverse; }
}

/* Mobile */
@media (max-width: 767px) {
  .cta-section { padding: 50px 20px; }
  .cta-card { padding: 20px; }
}
```

### 4.13 Blog Section (`4d07d375`)

```css
/* Hidden on all devices currently, but styles exist */
.blog-section {
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
}

.blog-section::before {
  background-image: radial-gradient(
    at center left,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Blog card */
.blog-card {
  background-color: #E5A2FF0A;
  border: 1px solid #E5A2FF0A;
  border-radius: 20px;
}

.blog-card-thumbnail {
  border-radius: 20px;
  padding: 0;
}

.blog-card-body {
  box-shadow: 0px 0px 30px 0px rgba(69, 69, 69, 0.11);
}

.blog-card .entry-title {
  text-align: left;
  margin: 10px 0 15px 0;
  color: #FFFFFF;
}

.blog-card .entry-content {
  text-align: left;
  margin: 0 0 30px 0;
  color: #E0E0E0;
}

.blog-card .btn {
  background-color: transparent;
  padding: 13px 26px;
  color: #FFFFFF;
  background-image: radial-gradient(at top left, #F6921E 20%, #F6921E 80%);
  border: 1px solid #F6921E;
  border-radius: 12px;
}

.blog-card .btn:hover {
  background-image: radial-gradient(at bottom right, #F6921E 0%, #F6921E 100%);
}
```

---

## 5. PAGE BANNER (Shared across About/Services/Contact — from `post-127.css`, `post-133.css`, `post-139.css`)

```css
.page-banner {
  min-height: 450px;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #E5A2FF0A;
  margin-top: -100px; /* overlaps under sticky header */
  padding: 180px 0 50px 0;
  background-image: url("...sub-page-hero-img.webp");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

.page-banner::before {
  background-image: radial-gradient(
    at bottom center,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Banner heading (H1) */
.page-banner-title {
  text-align: center;
  font-family: "Fira Sans", Sans-serif;
  font-size: 56px; /* H1 token */
  font-weight: 600;
  line-height: 1.2em;
  color: #FFFFFF;
}

/* Breadcrumb */
.breadcrumb {
  text-align: center;
  color: #FFFFFF;
}

.breadcrumb-icon {
  color: #F6921E;
  font-size: 14px;
}

/* Tablet */
@media (max-width: 1024px) {
  .page-banner {
    background-position: bottom center;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .page-banner {
    min-height: 400px;
    background-position: center center;
  }
}
```

---

## 6. ABOUT PAGE SECTIONS (from `post-127.css`)

### 6.1 About Intro Section (`1ce45474`)

```css
.about-intro {
  flex-direction: row;
  gap: 50px;
  padding: 50px 0;
}

.about-intro::before {
  background-image: radial-gradient(
    at center left,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Image container */
.about-image-container::before {
  background-image: radial-gradient(
    at center center,
    #E5A2FF0A 65%,
    #FFFFFF00 50%
  );
  opacity: 1;
}

.about-image {
  max-width: 89%;
  border-radius: 20px;
  text-align: center;
}

/* Heading */
.about-heading {
  /* H2: Fira Sans, 36px, 600, 1.3em */
  text-align: start;
  color: #FFFFFF;
}

/* Body text */
.about-description {
  text-align: justify;
}

/* Tablet */
@media (max-width: 1024px) {
  .about-intro {
    flex-direction: column;
    padding: 80px 20px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .about-intro {
    padding: 50px 20px;
  }
  .about-image { max-width: 100%; }
}
```

### 6.2 Vision & Mission Cards (`ce858f7`)

```css
.vision-mission-section {
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: hidden;
  padding: 80px 0 50px 0;
  background-color: #E5A2FF0A;
}

.vision-mission-section::before {
  background-image: radial-gradient(
    at top center,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Vision/Mission cards use same service-card pattern */
.vision-card,
.mission-card {
  border: 1px solid #E5A2FF0A;
  border-radius: 20px;
  background-color: #E5A2FF0A;
}

.vision-card::before,
.mission-card::before {
  background-image: radial-gradient(at top left, #F6921E 0%, #FFFFFF00 50%);
  opacity: 0.2;
}

.vision-card:hover,
.mission-card:hover {
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.41);
}

.vision-card img {
  height: 297px;
  border-radius: 20px;
}

.vision-card .content {
  padding: 0 20px 20px 20px;
}

.vision-card .title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4em;
  color: #FFFFFF;
}

.vision-card .description {
  font-size: 18px;
}
```

### 6.3 Photo Gallery (`fec6b46`)

```css
.photo-gallery {
  --image-border-radius: 20px;
  --image-transition-duration: 800ms;
  --overlay-transition-duration: 800ms;
  --content-text-align: center;
  --content-padding: 20px;
  --content-transition-duration: 800ms;
  --content-transition-delay: 800ms;
}

.photo-gallery .overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Layout: 4 cols desktop / 2 tablet / 1 mobile */
/* Gap: 10px */
/* Type: Masonry */
```

### 6.4 Values Cards Section

```css
.values-section {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
  background-color: #E5A2FF0A;
}

.values-section::before {
  background-image: radial-gradient(
    at center right,
    #F6921E 0%,
    #FFFFFF00 50%
  );
  opacity: 0.1;
}

/* Values grid: 3 columns (first row), 2 columns (second row) */
.values-grid {
  grid-template-columns: repeat(3, 1fr);
}

/* Mobile */
@media (max-width: 767px) {
  .values-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Value cards: Same service-card pattern */
/* Card title: 21px on about page (vs 24px on home) */
.value-card .title {
  font-size: 21px;
  font-weight: 600;
  line-height: 1.4em;
}

.value-card .content {
  padding: 0 20px 20px 20px;
}
```

---

## 7. FOOTER (from `post-206.css` — Template #206)

```css
.footer {
  flex-direction: column;
  gap: 0;
  padding: 80px 0 0 0;
}

/* Footer background */
.footer-bg {
  background-color: #E5A2FF0A;
  background-image: url("...bg2.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer::before {
  /* Purple overlay */
  background-color: #462D84;
  opacity: 0.9;
}

/* Footer top section */
.footer-top {
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #E5A2FF0A;
  padding-bottom: 40px;
}

/* Footer logo */
.footer-logo img {
  width: 38%;
}

@media (max-width: 767px) {
  .footer-logo img { width: 100%; }
}

/* Social icons list */
.footer-social-icons {
  /* icon list, inline, spacing 22px */
}
.footer-social-icon {
  color: #F6921E;
  font-size: 15px;
}
.footer-social-text {
  color: #FFFFFF;
}
.footer-social-text:hover {
  color: #F6921E;
}

/* Footer columns */
.footer-column-heading {
  font-family: "Fira Sans", Sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4em;
  color: #FFFFFF;
}

.footer-column-divider {
  border: 1px solid #FFFFFF;
  margin-top: -8px;
}

.footer-column-link {
  font-family: "Lato", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
}

.footer-column-link:hover {
  color: #F6921E;
}

.footer-link-icon {
  color: #F6921E;
  font-size: 15px;
  padding-right: 0;
}

/* Footer bottom / Copyright */
.footer-bottom {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #E6D9EB69;
  padding: 30px 0;
}

.footer-copyright {
  font-family: "Lato", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
}

/* Tablet */
@media (max-width: 1024px) {
  .footer { padding: 60px 20px 0 20px; }
}

/* Mobile */
@media (max-width: 767px) {
  .footer { padding: 60px 20px 0 20px; }
  .footer-top {
    flex-direction: column;
    align-items: center;
  }
  .footer-bottom {
    flex-direction: column-reverse;
    text-align: center;
  }
}
```

---

## 8. CONTACT PAGE (from `post-139.css`)

### 8.1 Contact Info + Form Section

```css
.contact-section {
  /* Uses e-grid with reverse-on-mobile */
  /* e-con-boxed layout */
}

/* Contact icon boxes (phone, email, location) */
.contact-icon-box {
  /* view-stacked, shape-circle, position-inline-start */
}

.contact-icon-box .icon.stacked {
  background-color: #F6921E;
  color: #FFFFFF;
  /* Rounded (circle shape) */
}

/* Contact form */
.contact-form .field {
  /* col-100 (full width) */
}

.contact-form .submit-button {
  /* col-20 */
  /* elementor-size-sm */
}

/* Google Maps embed */
.contact-map iframe {
  width: 100%;
  height: 450px;
  border: 0;
}
```

---

## 9. ANIMATIONS & TRANSITIONS

### 9.1 Elementor Animations Used

| Animation | Sections Used |
|---|---|
| `fadeIn` | Hero image, Difference center image |
| `fadeInUp` | Hero heading, Service cards, Milestone counters, Product cards, Section headings, About intro heading, Value cards |
| `fadeInLeft` | Difference left icon boxes |
| `fadeInRight` | Difference right icon boxes (300ms delay) |
| `elementor-animation-bob` | Service card images, Vision/Mission images, Value card images |

### 9.2 Transition Properties

```css
/* Link colors */
a { transition: color 0.3s; }

/* Icon colors */
.icon-list-icon i { transition: color 0.3s; }
.icon-list-icon svg { transition: fill 0.3s; }

/* Client logo opacity */
.client-logo { transition: opacity 0.3s; }

/* Gallery overlay */
.gallery-overlay { transition: 800ms; }
```

---

## 10. GRADIENT PATTERN SUMMARY

All sections use one of these gradient patterns as `::before` overlays:

| Pattern | Gradient | Used In |
|---|---|---|
| **Radial Center-Right** | `radial-gradient(at center right, #F6921E 0%, #FFFFFF00 50%)` | Services, Tech Prowess, Values |
| **Radial Top-Center** | `radial-gradient(at top center, #F6921E 0%, #FFFFFF00 50%)` | Milestones, Clients, Testimonials, Difference |
| **Radial Center-Left** | `radial-gradient(at center left, #F6921E 0%, #FFFFFF00 50%)` | Products, Blog |
| **Radial Top-Left** | `radial-gradient(at top left, #F6921E 0%, #FFFFFF00 50%)` | All service/product/value cards |
| **Radial Bottom-Center** | `radial-gradient(at bottom center, #F6921E 0%, #FFFFFF00 50%)` | Page banners |
| **Radial Bottom-Right** | `radial-gradient(at bottom right, #F6921E 20%, #F6921E 80%)` | Buttons (normal) |
| **Linear 180deg** | `linear-gradient(180deg, #E5A2FF00 0%, #F6921E2E 100%)` | Partners section |
| **Linear 180deg CTA** | `linear-gradient(180deg, #F6921E 0%, #E5A2FF0A 100%)` | CTA card |

All section overlay opacity is `0.1`. Card overlay opacity is `0.2`. Hero overlay is `0.9`.

---

## 11. RECOMMENDED CSS VARIABLES FOR NEXT.JS (`globals.css`)

Based on all extracted values, here's the complete variable set:

```css
:root {
  /* === COLORS === */
  --color-primary: #F6921E;           /* Orange accent - buttons, icons, highlights */
  --color-primary-dark: #F7941D;      /* Slightly different orange used in Difference icons */
  --color-purple-deep: #462D84;       /* Main dark purple - body bg, footer overlay, submenu */
  --color-purple-hero: #403068;       /* Hero video overlay */
  --color-purple-card: #422C80;       /* Milestone counter cards */
  --color-purple-primary-alpha: #462D84C7; /* Primary with alpha */
  --color-card-bg: #E5A2FF0A;         /* Semi-transparent purple - card bg, borders */
  --color-card-border: #E5A2FF0A;     /* Same as card bg */
  --color-white: #FFFFFF;             /* Headings, button text */
  --color-black: #000000;             /* Nav links */
  --color-text: #E0E0E0;             /* Body text on dark bg */
  --color-gold: #E8AB38;             /* Testimonial star rating */
  --color-warm-orange: #DA753F;       /* Unused in current design */
  --color-transparent: #FFFFFF00;     /* Gradient fade endpoints */
  --color-footer-border: #E6D9EB69;   /* Footer copyright border */
  --color-testimonial-border: #FFFFFFB0; /* Testimonial card border */
  --color-page-transition: #FFBC7D;   /* Page transition bg */
  
  /* === FONTS === */
  --font-heading: "Fira Sans", sans-serif;
  --font-body: "Lato", sans-serif;
  --font-secondary: "Outfit", sans-serif;
  --font-counter: "Fira Sans", sans-serif;
  --font-nav: "Lato", sans-serif;

  /* === FONT SIZES === */
  --text-hero-xl: 72px;              /* Unused currently, but defined */
  --text-hero: 50px;                 /* Hero section heading */
  --text-h1: 56px;                   /* Page banner H1 */
  --text-h2: 36px;                   /* Section headings */
  --text-h2-secondary: 30px;         /* Smaller section headings (services, clients) */
  --text-h3: 28px;
  --text-h4: 24px;                   /* Card titles */
  --text-h4-small: 21px;             /* About/Values card titles */
  --text-h5: 18px;                   /* Footer headings */
  --text-h6: 13px;
  --text-body: 18px;
  --text-body-description: 18px;     /* Card descriptions */
  --text-button: 16px;
  --text-meta: 14px;
  --text-link: 17px;
  --text-counter: 61px;              /* Milestone counter numbers */
  --text-counter-label: 17px;

  /* Mobile font sizes */
  --text-body-mobile: 16px;
  --text-h1-mobile: 32px;
  --text-h2-mobile: 26px;
  --text-h3-mobile: 22px;
  --text-h4-mobile: 18px;
  --text-hero-mobile: 36px;
  --text-counter-mobile: 26px;
  --text-counter-label-mobile: 13px;
  --text-button-mobile: 15px;

  /* === SPACING === */
  --section-padding-y: 50px;
  --section-padding-x: 0px;
  --section-gap: 50px;
  --card-gap: 50px;
  --card-padding-content: 0 20px;
  --card-padding-content-bottom: 0 20px 20px 20px;
  --card-button-padding: 0 0 30px 0;
  --button-padding: 15px 30px;
  --button-padding-sm: 13px 26px;
  --container-max: 1280px;
  --milestone-card-padding: 30px;
  --cta-card-padding: 40px;

  /* Tablet overrides */
  --section-padding-y-tablet: 80px;
  --section-padding-x-tablet: 20px;

  /* Mobile overrides */
  --section-padding-y-mobile: 50px;
  --section-padding-x-mobile: 20px;

  /* === BORDERS === */
  --border-radius-card: 20px;
  --border-radius-button: 15px;
  --border-radius-button-sm: 12px;
  --border-radius-counter: 22px;
  --border-radius-submenu: 10px;
  --border-radius-image: 20px;
  --border-radius-diff-center: 100px;
  --border-radius-tech-image: 7px;

  /* === SHADOWS === */
  --shadow-card-hover: 0px 5px 30px 0px rgba(0, 0, 0, 0.41);
  --shadow-counter: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  --shadow-button-hover: 0px 5px 5px 0px rgba(251, 0, 252, 0.56);
  --shadow-blog-body: 0px 0px 30px 0px rgba(69, 69, 69, 0.11);

  /* === Z-INDEX === */
  --z-header: 2;
  --z-diff-icon: 1;

  /* === BREAKPOINTS === */
  --breakpoint-tablet: 1024px;
  --breakpoint-mobile: 767px;
}
```

---

## 12. KEY DIFFERENCES FROM CURRENT `globals.css`

Your current Next.js `globals.css` has some differences from the WordPress site:

| Property | Current Next.js | WordPress Original |
|---|---|---|
| `--color-primary` | `#F6921E` | `#F6921E` ✅ Match |
| `--color-dark` | `#1A1A2E` | `#462D84` ❌ Should be deep purple |
| `--color-dark-2` | `#16213E` | `#403068` ❌ Should be hero purple |
| `--color-dark-3` | `#0F3460` | `#422C80` ❌ Should be card purple |
| Body bg | `white` | `#462D84` ❌ Should be deep purple |
| Body font | `Outfit` | `Lato` ❌ (Outfit is secondary font) |
| Body color | `#333` | `#E0E0E0` ❌ Should be light gray on dark |
| Button radius | Not set | `15px` (global), `12px` (card buttons) |
| Card bg | Not set | `#E5A2FF0A` |
| Card border | Not set | `1px solid #E5A2FF0A` |
| Card hover shadow | Not set | `0 5px 30px rgba(0,0,0,0.41)` |

---

## 13. RESPONSIVE BREAKPOINT SUMMARY

| Breakpoint | Container Max | Sections Padding | Grid Columns |
|---|---|---|---|
| Desktop (>1024px) | 1280px | 50px 0 | Services: 3, Milestones: 4, Values: 3 |
| Tablet (≤1024px) | 1024px | 80px 20px | Services: 2, Milestones: 4, Values: 2 |
| Mobile (≤767px) | 767px | 50px 20px | Services: 1, Milestones: 2, Values: 1 |

---

## 14. ANIMATION CSS TO ADD

```css
/* Existing in your globals.css */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Add these */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```
