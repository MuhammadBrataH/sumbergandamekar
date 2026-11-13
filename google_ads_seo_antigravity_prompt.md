# Antigravity Build & Google Ads Tracking Specification

**Domain:** `sumbergandamekar.com`  
**Header Identity:**  
PT. SUMBER GANDA MEKAR  
JUAL BELI BESI TUA/BARU - RANGKA BETON/LOGAM - TIANG LISTRIK/TELP - KONSTRUKSI BAJA DAN PAKAN TERNAK  
Jl. Raya Gedebage No. 95 Bandung  
CP. Irwan : `082117800626`, CP. Uwem : `082318188863`

---

## 1. Master Prompt for Antigravity

Copy and paste the prompt below directly into **Antigravity** along with `PRD.md`, `DESIGN_SYSTEM.md`, `CONTENT_COPYWRITING.md`, and `logo.png`:

> **Prompt untuk Antigravity:**
>
> "Tolong bangunkan aplikasi web B2B Lead Generation yang sangat modern untuk **PT. Sumber Ganda Mekar** (`sumbergandamekar.com`) berdasarkan file `PRD.md`, `DESIGN_SYSTEM.md`, dan `CONTENT_COPYWRITING.md` terlampir.
>
> 1. Gunakan palet warna ketat: **Sky Blue (`#2C99D6`)** sebagai latar hero & aksen struktural, **Cloud White (`#F8FAFC`)** sebagai latar halaman & tipografi display raksasa di hero section, serta **Scarlet Red (`#EB2F33`)** khusus untuk seluruh tombol CTA WhatsApp dan elemen pemicu klik.
>
> 2. Ikuti gaya visual referensi: Hero section berlatar Sky Blue `#2C99D6` dengan teks *condensed uppercase* raksasa berwarna Cloud White `#F8FAFC` di belakang gambar/kartu visual industri, label kecil Scarlet Red di atasnya, dan tombol CTA Scarlet Red `#EB2F33` di kiri bawah.
>
> 3. Tampilkan identitas utama dengan jelas: **PT. SUMBER GANDA MEKAR — JUAL BELI BESI TUA/BARU - RANGKA BETON/LOGAM - TIANG LISTRIK/TELP - KONSTRUKSI BAJA DAN PAKAN TERNAK** beralamat di **Jl. Raya Gedebage No. 95 Bandung**.
>
> 4. Gunakan file `logo.png` pada navbar dan footer.
>
> 5. Sediakan navigasi interaktif yang mulus antara **Beranda (Company Profile)**, **Landing Page Divisi Logam & Konstruksi**, dan **Landing Page Divisi Pakan Ternak** agar siap digunakan sebagai halaman tujuan Google Ads.
>
> 6. Integrasikan 2 nomor Contact Person utama di setiap kartu layanan dan di Floating WhatsApp Button: **CP. Irwan (`082117800626` / `6282117800626`)** dan **CP. Uwem (`082318188863` / `6282318188863`)**, lengkap dengan teks otomatis spesifik dan fungsi pelacakan `trackWhatsAppLead()` untuk Google Tag Manager."

---

## 2. Google Ads Conversion Tracking Architecture (`dataLayer`)

Every clickable WhatsApp button (`#EB2F33`) for **CP. Irwan** and **CP. Uwem** must fire a standardized `dataLayer.push` event before redirecting to WhatsApp so Google Ads can optimize for high-value B2B leads:

```javascript
window.dataLayer = window.dataLayer || [];
function trackWhatsAppLead(agentName, division, serviceName, buttonLocation) {
  window.dataLayer.push({
    event: 'whatsapp_lead_click',
    lead_agent: agentName,           // 'cp_irwan' | 'cp_uwem' | 'office_hotline'
    lead_division: division,         // 'logam_konstruksi' | 'pakan_ternak' | 'corporate'
    lead_service: serviceName,       // 'besi_tua_baru' | 'rangka_beton' | 'tiang_listrik' | 'konstruksi_baja' | 'ransum_pakan'
    button_location: buttonLocation, // 'navbar' | 'hero' | 'service_card' | 'floating_fab'
    conversion_domain: 'sumbergandamekar.com'
  });
}
```

---

## 3. Recommended Google Ads Campaign Structure for `sumbergandamekar.com`

| Campaign Name | Target URL | High-Intent Keywords (Phrase & Exact) | Mandatory Negative Keywords | 
| :--- | :--- | :--- | :--- | 
| **SGM - Besi Tua & Scrap B2B** | `sumbergandamekar.com/konstruksi-logam#scrap` | `"jual beli besi tua bandung"`, `"pembeli besi tua pabrik"`, `"jual scrap logam partai besar"`, `"timbangan besi tua gedebage"` | `eceran`, `satuan`, `1 kg`, `bekas rumah tangga`, `loak kecil`, `lowongan kerja` | 
| **SGM - Tiang, Rangka & Baja** | `sumbergandamekar.com/konstruksi-logam` | `"suplier tiang listrik beton"`, `"jual tiang telepon"`, `"kontraktor konstruksi baja bandung"`, `"jual rangka beton proyek"` | `diy`, `cara membuat`, `gambar`, `skripsi`, `pdf`, `murah 1 batang` | 
| **SGM - Pabrik Pakan Ternak** | `sumbergandamekar.com/pakan-ternak` | `"pabrik pakan ternak bandung"`, `"grosir konsentrat sapi jawa barat"`, `"suplier ransum ternak"`, `"jual pakan ternak partai besar"` | `kucing`, `anjing`, `burung kicau`, `ikan hias`, `1 kg`, `eceran` | 