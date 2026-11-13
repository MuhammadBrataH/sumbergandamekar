# Product Requirements Document (PRD)
**Project Name:** PT. Sumber Ganda Mekar — B2B Lead Generation Web Platform  
**Target Domain:** `https://sumbergandamekar.com`  
**Company Name:** PT. Sumber Ganda Mekar  
**Core Tagline:** JUAL BELI BESI TUA/BARU - RANGKA BETON/LOGAM - TIANG LISTRIK/TELP - KONSTRUKSI BAJA DAN PAKAN TERNAK  
**Headquarters:** Jl. Raya Gedebage No. 95, Bandung 40294, Jawa Barat  
**Branch/Operations:** Lembang Betook/Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623  
**Contact Persons (WhatsApp Direct):**
* **CP. Irwan:** `082117800626` (`6282117800626`)
* **CP. Uwem:** `082318188863` (`6282318188863`)
* **Hotline Kantor:** `081322999910` (`6281322999910`)  
**Official Email:** `sumbergandamekar@gmail.com`  

---

## 1. Executive Summary & Objective
Build an ultra-modern, high-converting B2B website and dual Google Ads landing page system for **PT. Sumber Ganda Mekar**. 
The primary objective of this web application is **Direct-to-WhatsApp Lead Generation** for two distinct business divisions:
1. **Divisi Logam, Material & Konstruksi Baja** (Jual/Beli Besi Tua & Baru, Rangka Beton/Logam, Tiang Listrik/Telepon, Konstruksi Baja).
2. **Divisi Agribisnis & Pakan Ternak** (Industri Ransum Makanan Hewan, Konsentrat Ternak, Pertanian Pakan & Kompos Organik).

The visual style must follow a bold, modern editorial/poster aesthetic: **Sky Blue (`#2C99D6`)** hero canvas, **Cloud White (`#F8FAFC`)** oversized condensed typography & clean section backgrounds, and **Scarlet Red (`#EB2F33`)** strictly reserved for high-intent conversion triggers (CTAs, badges, and interactive highlights).

---

## 2. Target Audience (User Personas)
1. **Factory Owners / Project Managers (Scrap Sellers):** Looking to sell heavy industrial scrap metal (*besi tua*), dismantled factory structures, or heavy machinery with guaranteed fair weighing (**50-Ton Certified Weighbridge**) and instant payment.
2. **B2B Contractors & Government Procurement (Material & Steel Buyers):** Searching for a **PKP-certified (VAT-ready)** supplier of new steel, concrete/metal frames (*rangka beton/logam*), utility poles (*tiang listrik/telepon*), and steel warehouse construction.
3. **Livestock Farm Owners & Feed Distributors (Agribusiness Buyers):** Searching for a direct manufacturer (KBLI 10801 & 10802) of animal feed rations (*ransum*), concentrates, and forage crops in West Java.

---

## 3. Site Architecture & Routing
To maximize **Google Ads Quality Score** and prevent audience confusion, the web app must implement a 3-route architecture (or a fast Single-Page Application with distinct tab/route views and deep-linking support):

* **`/` (Home — Corporate Profile & Division Gateway):**
  * Editorial Hero Section with oversized condensed display typography (`"MITRA TANGGUH"` / `"BAJA & LOGAM"`).
  * Prominent display of official tagline: **JUAL BELI BESI TUA/BARU - RANGKA BETON/LOGAM - TIANG LISTRIK/TELP - KONSTRUKSI BAJA DAN PAKAN TERNAK**.
  * Interactive Division Switcher (Logam & Konstruksi vs. Pakan Ternak).
  * Company Credibility & Key Metrics (Est. 2010, Rp 2B Authorized Capital, 20 Active KBLIs, 50-Ton Certified Scale).
  * Legal & Compliance Showcase (NIB, PKP Status, 2026 Kemenkumham Decree, UPT Metrologi Legal Certificate).
  * Commissioner's Quote (H. Maman Suherman) & Leadership Overview.
* **`/konstruksi-logam` (Landing Page 1 — Google Ads Target for Metal & Construction):**
  * Dedicated high-conversion layout for Scrap Metal, New Steel, Concrete Frames, Utility Poles, and Steel Construction.
  * Spotlight section on the **50,000 Kg (50-Ton) SONIC Electronic Weighbridge** certified by UPT Metrologi Legal Kota Bandung.
  * 4 Service Cards with Dual Contact Options (**Chat CP. Irwan** or **Chat CP. Uwem**).
* **`/pakan-ternak` (Landing Page 2 — Google Ads Target for Livestock Feed):**
  * Dedicated high-conversion layout for Animal Feed Rations (KBLI 10801), Concentrates (KBLI 10802), Forage Farming (KBLI 01191), and Organic Compost (KBLI 38212).
  * Production & dual-location highlight (Gedebage & Cileunyi facilities).
  * 3 Product Category Cards with wholesale WhatsApp CTAs (**CP. Irwan** & **CP. Uwem**).

---

## 4. Functional Requirements

### 4.1. Navigation & Header (`MOD-NAV`)
* **Brand Logo:** Display `logo.png` (Red circular SGM monogram) inside a clean white circular badge on the left, paired with bold brand text `PT. SUMBER GANDA MEKAR`.
* **Navigation Links:** `Beranda`, `Divisi Logam & Konstruksi`, `Divisi Pakan Ternak`, `Legalitas & Tera`, `Kontak`.
* **Header Primary CTA:** A pill/rounded rectangle button in **Scarlet Red (`#EB2F33`)** with white text: `"Hubungi WhatsApp ↗"` (opens a quick-select modal or dropdown for **CP. Irwan** & **CP. Uwem**).

### 4.2. Hero Section — Reference Aesthetic (`MOD-HERO`)
* Must replicate the visual impact of the reference design:
  * **Background:** Vibrant **Sky Blue (`#2C99D6`)** with subtle industrial/cloud depth.
  * **Top Micro-Label:** Scarlet Red (`#EB2F33`) uppercase tracking-wide label: `JUAL BELI BESI TUA/BARU • RANGKA BETON/LOGAM • TIANG LISTRIK/TELP • KONSTRUKSI BAJA & PAKAN TERNAK`.
  * **Oversized Display Text:** Massive, ultra-condensed uppercase white text (`#F8FAFC`) spanning full width (e.g., `"SUMBER GANDA MEKAR"` / `"MITRA TANGGUH"`), layered with a crisp foreground cutout/card visual of heavy steel/excavator transport.
  * **Bottom-Left Sub-copy & CTA:** Concise white value proposition text + **Scarlet Red (`#EB2F33`)** action buttons to contact **CP. Irwan (0821-1780-0626)** or **CP. Uwem (0823-1818-8863)**.

### 4.3. Certified 50-Ton Weighbridge Trust Module (`MOD-METROLOGI`)
* Dedicated section highlighting the company's competitive advantage in scrap metal & bulk trading:
  * **Instrument 1:** Timbangan Jembatan Elektronik Merek SONIC (Model A12EK, Kapasitas `50.000 kg` / 50 Ton).
  * **Instrument 2:** Timbangan Elektronik Merek SONIC (Model A12EK, Kapasitas `1.000 kg`).
  * **Certification:** Disahkan oleh UPT Metrologi Legal, Dinas Perdagangan dan Perindustrian Kota Bandung (Nomor: `PG.05.05/2283/VII/2025` & `PG.05.05/2284/VII/2025`).

### 4.4. Multi-Agent Direct-to-WhatsApp Conversion Engine (`MOD-WA`)
* Visitors must be able to immediately reach:
  * **CP. Irwan:** `https://wa.me/6282117800626?text=...`
  * **CP. Uwem:** `https://wa.me/6282318188863?text=...`
  * **Kantor Utama:** `https://wa.me/6281322999910?text=...`
* Include a **Floating WhatsApp Widget (Bottom Right)** in Scarlet Red (`#EB2F33`) that expands on click to show instant chat buttons for **Pak Irwan** and **Pak Uwem** so leads never get a busy line.
* Every WhatsApp link must include `id`, `data-agent` (`irwan` | `uwem` | `office`), `data-division`, and `data-service` attributes for Google Tag Manager (GTM) conversion tracking.

---

## 5. Non-Functional Requirements
* **Performance:** Lighthouse Performance Score $\ge 95$ on Mobile & Desktop. Zero render-blocking scripts.
* **Responsiveness:** Mobile-first responsive layout (360px up to 1920px). Oversized typography must scale fluidly using `clamp()`.
* **SEO & Meta Tags:** Complete OpenGraph tags, Canonical URL (`https://sumbergandamekar.com`), and JSON-LD `LocalBusiness` + `Organization` structured data.