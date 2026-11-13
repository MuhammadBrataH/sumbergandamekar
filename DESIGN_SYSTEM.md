# Design System & CRO Architecture — PT. Sumber Ganda Mekar (`sumbergandamekar.com`)

## 1. Visual Philosophy: High-Contrast Industrial Editorial (60-30-10 Rule)
Designed for high-intent B2B buyers (Factory Owners, Scrap Traders, Project Contractors, Government Procurement, and Livestock Farm Owners) arriving from Google Search Ads.

### Color Palette (Strict 60-30-10 Distribution)
| Role | Proportion | Color Name | Hex Code | Usage Guidelines |
| :--- | :--- | :--- | :--- | :--- |
| **Dominant (Canvas & Display)** | **60%** | **Cloud White** | `#F8FAFC` | Main page background, whitespace, clean content surfaces, and oversized display typography inside the Sky Blue hero section. |
| **Secondary (Brand & Structure)** | **30%** | **Sky Blue** | `#2C99D6` | Hero section canvas, structural corporate banners, section accent headers, and technical credibility highlights. Supported by Deep Slate (`#0F172A`) for high-contrast body copy. |
| **Accent (Conversion Trigger)** | **10%** | **Scarlet Red** | `#EB2F33` (Hover: `#C81E22`) | **STRICTLY RESERVED** for click triggers and high-urgency trust badges: All WhatsApp CTA buttons, Floating WhatsApp Widget, `"TERA RESMI 50 TON"`, and `"PKP RESMI"` badges. |

---

## 2. Typography System
* **Display / Hero Headline Font:** `'Bebas Neue'` & `'Oswald'` (Google Fonts)
  * Ultra-condensed, uppercase, bold industrial authority.
  * Hero Sizing: Fluid `clamp(3.75rem, 11vw, 9.25rem)`, `line-height: 0.88`, `letter-spacing: -0.02em`.
* **Body & UI Font:** `'Plus Jakarta Sans'` (Google Fonts)
  * High legibility at all sizes for technical specifications, KBLI codes, legal decree numbers, and mobile interfaces.

---

## 3. Logo Contrast Rule (`logo.png`)
Because the official PT. Sumber Ganda Mekar monogram (`logo.png`) is Scarlet Red (`#EB2F33`), it must **always** be placed inside a crisp Cloud White circular container (`bg-[#F8FAFC] p-1.5 rounded-full shadow-sm`) whenever positioned on top of Sky Blue (`#2C99D6`) or dark structural backgrounds.

---

## 4. Hero Section Reference Aesthetic (`MOD-HERO`)
1. **Canvas:** Vibrant Sky Blue (`#2C99D6`) with subtle architectural blueprint grid and atmospheric lighting.
2. **Top Micro-Label:** Scarlet Red (`#EB2F33`) pill badge with uppercase wide-tracking text.
3. **Oversized Condensed White Typography (`#F8FAFC`):** Spanning across the hero background, partially layered behind a dynamic, overlapping foreground industrial visual card (3D-layered card featuring the 50-Ton SONIC Weighbridge, Steel Construction, or Livestock Feed Mill telemetry).
4. **Dual Conversion Triggers:** Prominent Scarlet Red (`#EB2F33`) buttons in the lower-left hero zone directing leads immediately to **CP. Irwan (`0821-1780-0626`)** and **CP. Uwem (`0823-1818-8863`)**.

---

## 5. Multi-Agent WhatsApp & Google Ads (`dataLayer`) Tracking Specification
Every WhatsApp link across `index.html`, `konstruksi-logam.html`, and `pakan-ternak.html` must carry:
* `data-cta="whatsapp"`
* `data-division="logam" | "pakan" | "general"`
* `data-service="[nama_layanan]"`
* `data-agent="irwan" | "uwem" | "kantor"`
* `data-location="navbar" | "hero" | "service_card" | "floating_fab" | "footer"`

On click, the global listener pushes conversion events (`generate_lead_wa` and `whatsapp_lead_click`) to `window.dataLayer` for Google Tag Manager (GTM) and Google Ads conversion optimization.
