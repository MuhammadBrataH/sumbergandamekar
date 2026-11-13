/**
 * Shared building blocks — PT. Sumber Ganda Mekar
 * Single Point of Contact: CP. Uwem (0823-1818-8863)
 * All WhatsApp links automatically mention the official website (sumbergandamekar.com)
 * at the beginning of the message.
 */

const ARROW = '<span aria-hidden="true">↗</span>';

const UWEM_CONTACT = {
  wa: '6282318188863',
  display: '0823-1818-8863',
  greet: 'Halo Pak Uwem (PT. Sumber Ganda Mekar), saya mendapat informasi dari website sumbergandamekar.com dan ',
  label: 'CP. Uwem'
};

// Keep fallback keys mapped to Uwem so all legacy calls resolve to CP. Uwem
const PHONES = {
  uwem: UWEM_CONTACT,
  irwan: UWEM_CONTACT,
  kantor: UWEM_CONTACT
};

const BODY = {
  general:        'ingin berkonsultasi mengenai kebutuhan pengadaan / kerja sama B2B dengan perusahaan Bapak.',
  scrap:          'ingin menawarkan/membeli Besi Tua (Scrap) atau Besi Baru partai besar.',
  rangka:         'membutuhkan penawaran harga Rangka Beton / Struktur Logam siap pakai untuk proyek.',
  tiang:          'ingin menanyakan ketersediaan stok dan daftar harga Tiang Listrik / Tiang Telepon.',
  konstruksi:     'ingin berkonsultasi mengenai proyek Konstruksi Baja / Bangunan Gudang & Pabrik.',
  ransum:         'ingin meminta daftar harga grosir Ransum Makanan Hewan.',
  konsentrat:     'ingin menanyakan harga grosir Konsentrat Pakan Ternak.',
  hijauan:        'tertarik dengan suplai Tanaman Pakan Ternak / Kompos Organik partai besar.',
  divLogam:       'ingin berkonsultasi mengenai layanan & katalog harga Divisi Logam & Konstruksi Baja.',
  divPakan:       'ingin meminta daftar harga grosir Divisi Agribisnis & Pakan Ternak.',
  jadwal:         'ingin menjadwalkan penimbangan armada di Timbangan Jembatan 50 Ton Gedebage Bandung.',
  hargaScrap:     'ingin menanyakan update harga terima Besi Tua (Scrap) partai besar hari ini di Timbangan 50 Ton.',
  hargaBesiBaru:  'ingin meminta pricelist terbaru Besi Baja Profil (WF/H-Beam) & Besi Beton SNI.',
  hargaTiang:     'ingin meminta penawaran harga pengadaan Tiang Listrik / Tiang Telepon standar proyek.',
  hargaRangka:    'ingin memesan / menanyakan harga Rangka Beton Bertulang & Struktur Logam siap pakai.',
  hargaBorongan:  'ingin berkonsultasi mengenai estimasi biaya borongan Konstruksi Baja Gudang / Pabrik.',
  hargaPakan:     'ingin meminta pricelist grosir Ransum & Konsentrat Pakan Ternak dari pabrik.',
  lokasiGedebage: 'ingin mengonfirmasi jadwal kunjungan / pengiriman ke Gudang Timbangan 50 Ton di Jl. Raya Gedebage No. 95 Bandung.',
  lokasiCileunyi: 'ingin mengonfirmasi kunjungan / pengambilan pakan ternak di fasilitas produksi Cimekar, Cileunyi.'
};

function waHref(agent = 'uwem', msgKey = 'general', customText = '') {
  const p = PHONES.uwem;
  const body = customText || BODY[msgKey] || BODY.general;
  return `https://wa.me/${p.wa}?text=${encodeURIComponent(p.greet + body)}`;
}

/** One tracked WhatsApp anchor (always routed to CP. Uwem). */
function wa({ agent = 'uwem', msg = 'general', customText = '', division = 'general', service = 'konsultasi_b2b', location = 'service_card', cls = '', html, id = '' }) {
  return `<a ${id ? `id="${id}" ` : ''}href="${waHref('uwem', msg, customText)}" target="_blank" rel="noopener noreferrer" data-cta="whatsapp" data-division="${division}" data-service="${service}" data-agent="uwem" data-location="${location}" class="${cls}">${html}</a>`;
}

/** Single authoritative CTA button for CP. Uwem. */
function waPair({ msg, division, service, location, variant = 'dark', full = true, size = '', label = '' }) {
  const w = full ? 'w-full' : '';
  const btnText = label || `Konsultasi via WhatsApp ${ARROW}`;
  const btnCls = variant === 'light' ? `btn-cta ${w} ${size}` : `btn-cta ${w} ${size}`;
  return wa({ agent: 'uwem', msg, division, service, location, cls: btnCls, html: btnText });
}

/* ------------------------------------------- CURATED INDUSTRIAL PHOTOGRAPHY */
const PHOTOS = {
  heroHome: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
  heroLogam: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=1000&q=80',
  heroPakan: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80',
  scrap: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  besiWf: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=900&q=80',
  rangkaBeton: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  tiangListrik: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
  konstruksiBaja: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  timbangan: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  ransum: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80',
  konsentrat: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=900&q=80',
  hijauan: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80'
};

/* ------------------------------------------- SHARED MULTI-ENTITY ORG NODE */
const BASE_ORG_NODE = {
  '@type': ['Organization', 'GeneralContractor', 'RecyclingCenter', 'WholesaleStore'],
  '@id': 'https://sumbergandamekar.com/#organization',
  name: 'PT. Sumber Ganda Mekar',
  legalName: 'PT SUMBER GANDA MEKAR',
  url: 'https://sumbergandamekar.com',
  logo: 'https://sumbergandamekar.com/logo.png',
  image: 'https://sumbergandamekar.com/logo.png',
  foundingDate: '2010-04-19',
  founder: {
    '@type': 'Person',
    name: 'H. Maman Suherman',
    jobTitle: 'Komisaris & Pendiri'
  },
  slogan: 'JUAL BELI BESI TUA/BARU - RANGKA BETON/LOGAM - TIANG LISTRIK/TELP - KONSTRUKSI BAJA DAN PAKAN TERNAK',
  email: 'sumbergandamekar@gmail.com',
  telephone: '+62-823-1818-8863',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage',
    addressLocality: 'Kota Bandung',
    addressRegion: 'Jawa Barat',
    postalCode: '40294',
    addressCountry: 'ID'
  },
  hasMap: 'https://maps.app.goo.gl/BbyRwGcgi4yJsVgn6',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.951687715064114,
    longitude: 107.68888506224562
  },
  department: {
    '@type': 'Organization',
    name: 'PT. Sumber Ganda Mekar - Unit Agribisnis & Pabrik Pakan Ternak Cileunyi',
    address: 'Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung, Jawa Barat 40623'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      name: 'CP. Uwem - Sales & Operasional',
      telephone: '+62-823-1818-8863',
      email: 'sumbergandamekar@gmail.com',
      contactType: 'sales',
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      availableLanguage: ['id', 'Indonesian']
    }
  ],
  areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia']
};

function faqSchemaNode(canonicalUrl, faqs) {
  return {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.schemaAnswer || f.a
      }
    }))
  };
}

/* ----------------------------------------------------------------- HEAD */
const FONTS = 'https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';

function head({ title, desc, keywords, canonical, ogTitle, ogDesc, jsonld, basePath = '', ogType = 'website' }) {
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDesc = ogDesc || desc;
  return `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="keywords" content="${keywords}" />
  <meta name="author" content="PT. Sumber Ganda Mekar" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="geo.region" content="ID-JB" />
  <meta name="geo.placename" content="Kota Bandung, Jawa Barat" />
  <meta name="geo.position" content="-6.951687715064114;107.68888506224562" />
  <meta name="ICBM" content="-6.951687715064114, 107.68888506224562" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" type="image/png" href="${basePath}logo.png" />
  <link rel="alternate" type="text/plain" href="https://sumbergandamekar.com/llms.txt" title="PT. Sumber Ganda Mekar — AI &amp; LLM Summary" />
  <link rel="alternate" type="text/plain" href="https://sumbergandamekar.com/llms-full.txt" title="PT. Sumber Ganda Mekar — AI &amp; LLM Full Reference" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:site_name" content="PT. Sumber Ganda Mekar" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${resolvedOgTitle}" />
  <meta property="og:description" content="${resolvedOgDesc}" />
  <meta property="og:image" content="https://sumbergandamekar.com/logo.png" />
  <meta property="og:image:alt" content="Logo Resmi PT. Sumber Ganda Mekar Bandung" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${resolvedOgTitle}" />
  <meta name="twitter:description" content="${resolvedOgDesc}" />
  <meta name="twitter:image" content="https://sumbergandamekar.com/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="${FONTS}" rel="stylesheet" />
  <link rel="stylesheet" href="${basePath}assets/css/output.css" />
  <script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
  </script>
</head>`;
}

/* --------------------------------------------------------------- HEADER */
function header(active, basePath = '') {
  const link = (href, label, key) =>
    `<a href="${href}" class="nav-link${active === key ? ' is-active' : ''}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`;
  const m = (href, label) =>
    `<a href="${href}" class="flex items-center justify-between border-b border-slate-200 py-3.5 text-base font-semibold"><span>${label}</span><span class="text-slate-400">→</span></a>`;
  const wawasanHref = basePath ? 'index.html' : 'wawasan/index.html';
  return `<header id="site-header" class="site-header fixed inset-x-0 top-0 z-40">
  <div class="wrap flex h-[68px] sm:h-[72px] items-center justify-between gap-2 sm:gap-4">
    <a href="${basePath}index.html" class="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="PT. Sumber Ganda Mekar — Beranda">
      <span class="shrink-0 rounded-full bg-white p-1.5 shadow-sm">
        <img src="${basePath}logo.png" alt="Logo PT. Sumber Ganda Mekar" width="40" height="40" class="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
      </span>
      <span class="min-w-0 leading-none">
        <span class="block truncate text-[13px] font-extrabold uppercase tracking-tight sm:text-base">PT. Sumber Ganda Mekar</span>
        <span class="brand-sub mt-1 block truncate font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">Bandung • Est. 2010</span>
      </span>
    </a>
    <nav class="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Navigasi Utama">
      ${link(`${basePath}index.html`, 'Beranda', 'home')}
      ${link(`${basePath}konstruksi-logam.html`, 'Divisi Logam &amp; Baja', 'logam')}
      ${link(`${basePath}pakan-ternak.html`, 'Divisi Pakan Ternak', 'pakan')}
      ${link(wawasanHref, 'Wawasan', 'wawasan')}
    </nav>
    <div class="flex shrink-0 items-center gap-2">
      ${wa({ agent: 'uwem', msg: 'general', division: 'general', service: 'navbar_cta', location: 'navbar', cls: 'btn-cta hidden sm:inline-flex px-4 py-2.5 sm:px-5', html: `Hubungi Kami ${ARROW}` })}
      <button type="button" id="mobile-menu-btn" aria-expanded="false" aria-label="Buka menu navigasi" class="rounded-md border border-current p-2 sm:p-2.5 lg:hidden">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu-panel" class="hidden border-t border-slate-200 bg-[#F8FAFC] text-slate-900 lg:hidden">
    <nav class="wrap flex flex-col py-3" aria-label="Navigasi Mobile">
      ${m(`${basePath}index.html`, 'Beranda')}
      ${m(`${basePath}konstruksi-logam.html`, 'Divisi Logam &amp; Konstruksi')}
      ${m(`${basePath}pakan-ternak.html`, 'Divisi Pakan Ternak')}
      ${m(wawasanHref, 'Wawasan &amp; Spesifikasi Teknis')}
      <div class="pt-3">
        ${wa({ agent: 'uwem', msg: 'general', division: 'general', service: 'mobile_nav_cta', location: 'navbar', cls: 'btn-cta w-full py-3', html: `Hubungi via WhatsApp ${ARROW}` })}
      </div>
    </nav>
  </div>
</header>`;
}

/* ----------------------------------------------------------------- HERO */
function hero({
  title,
  sub,
  metrics,
  ctx,
  badges = true,
  heroImg = PHOTOS.konstruksiBaja,
  heroCaption = 'Fasilitas Timbangan 50 Ton & Gudang Logam — Gedebage, Bandung',
  subImg1 = PHOTOS.scrap,
  subLabel1 = 'Besi Tua (Scrap) & Besi Baru',
  subImg2 = PHOTOS.heroPakan,
  subLabel2 = 'Pabrik Ransum & Pakan Ternak',
  catalogAnchor = '#katalog-harga'
}) {
  const lines = title.map(l => `<span class="block">${l}</span>`).join('\n');
  const cells = metrics.map((m, i) =>
    `<div class="hero-metric-item min-w-0">
        <p class="font-mono text-[10px] font-bold uppercase tracking-widest text-white/60">[0${i + 1}]</p>
        <p class="mt-1 whitespace-nowrap font-display text-3xl leading-none sm:text-4xl xl:text-5xl">${m[0]}</p>
        <p class="mt-1.5 font-mono text-[10px] uppercase leading-snug tracking-widest text-white/85 sm:text-[11px]">${m[1]}</p>
      </div>`).join('\n');

  const heroBgCls = ctx.division === 'pakan'
    ? 'hero-canvas hero-canvas-pakan'
    : ctx.division === 'general'
      ? 'hero-canvas hero-canvas-home'
      : 'hero-canvas';

  return `<section class="${heroBgCls} flex min-h-0 flex-col pt-[68px] sm:pt-[72px] text-white">
  <div class="wrap flex flex-1 flex-col justify-between py-8 sm:py-10 lg:py-14">

    <!-- Top Eyebrow & Certification Bar -->
    <div class="flex flex-col gap-3 border-b border-white/25 pb-4 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
      <p class="max-w-2xl font-mono text-[10px] sm:text-xs uppercase leading-relaxed tracking-widest text-white">JUAL BELI BESI TUA/BARU • RANGKA BETON/LOGAM • TIANG LISTRIK/TELP • KONSTRUKSI BAJA &amp; PAKAN TERNAK</p>
      ${badges ? '<div class="flex flex-wrap gap-2"><span class="badge-cert">TERA RESMI 50 TON</span><span class="badge-cert">PERUSAHAAN PKP RESMI</span></div>' : '<div class="flex flex-wrap gap-2"><span class="badge-cert">PRODUSEN LANGSUNG</span><span class="badge-cert">PERUSAHAAN PKP RESMI</span></div>'}
    </div>

    <!-- Main 2-Column Balanced Split (Left: Title + Copy + CTA | Right: Industrial Visual Showcase) -->
    <div class="my-8 grid items-center gap-8 sm:my-10 lg:my-12 lg:grid-cols-12 lg:gap-12">
      <!-- Left Column (7 cols): Headline + Subcopy + CTA tightly grouped -->
      <div class="min-w-0 lg:col-span-7">
        <h1 class="hero-title-split">
${lines}
        </h1>
        <p class="mt-5 max-w-xl text-base sm:text-xl font-medium leading-relaxed tracking-tight text-white/95">${sub}</p>
        <div class="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          ${wa({ agent: 'uwem', msg: ctx.msg, division: ctx.division, service: ctx.heroService || ctx.service, location: 'hero', cls: 'btn-cta whitespace-nowrap px-5 py-3.5 text-[13px] sm:px-6 sm:py-4 sm:text-[15px] shadow-lg', html: `Konsultasi via WhatsApp ${ARROW}` })}
          <a href="${catalogAnchor}" class="btn-outline-light whitespace-nowrap px-4 py-3.5 text-[13px] sm:px-5 sm:py-4 sm:text-[14px]">Lihat Daftar Harga &amp; Katalog ↓</a>
        </div>
        <p class="mt-4 font-mono text-[11px] uppercase tracking-widest text-white/85">Fast Response B2B • <a href="#lokasi-peta" class="underline underline-offset-4 hover:text-white">Jl. Raya Gedebage No. 95, Kota Bandung (Lihat Peta Lokasi ↓)</a></p>
      </div>

      <!-- Right Column (5 cols): Visual Showcase Frame -->
      <div class="min-w-0 lg:col-span-5">
        <div class="hero-visual-card">
          <div class="flex items-center justify-between border-b border-white/20 bg-slate-900 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white/85">
            <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-[#EB2F33]"></span> Visual Operasional &amp; Produk</span>
            <span>Bandung • Est. 2010</span>
          </div>
          <div class="img-card-wrap">
            <img src="${heroImg}" alt="${heroCaption}" class="hero-visual-main" loading="eager" />
            <span class="img-overlay-badge">${heroCaption}</span>
          </div>
          <div class="grid grid-cols-2 border-t border-white/20 bg-slate-900">
            <div class="img-card-wrap border-r border-white/20">
              <img src="${subImg1}" alt="${subLabel1}" class="hero-visual-sub" loading="eager" />
              <div class="px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-white/90 truncate">${subLabel1}</div>
            </div>
            <div class="img-card-wrap">
              <img src="${subImg2}" alt="${subLabel2}" class="hero-visual-sub" loading="eager" />
              <div class="px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-white/90 truncate">${subLabel2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Full-Width 4-Column Metrics Bar -->
    <div class="hero-metrics-bar">
${cells}
    </div>

  </div>
</section>`;
}

/* -------------------------------------------------------- SECTION HEAD */
function sectionHead(idx, label, h2 = '', intro = '') {
  return `<div class="mb-12 grid gap-6 border-t border-slate-900 pt-5 lg:mb-16 lg:grid-cols-12">
      <p class="font-mono text-xs uppercase tracking-widest text-slate-500 lg:col-span-3"><span class="font-bold text-[#2C99D6]">[${idx}]</span> ${label}</p>
      <div class="min-w-0 lg:col-span-9">
        ${h2 ? `<h2 class="display-h2">${h2}</h2>` : ''}
        ${intro ? `<p class="${h2 ? 'mt-5' : ''} max-w-2xl text-base leading-relaxed text-slate-600">${intro}</p>` : ''}
      </div>
    </div>`;
}

/* ---------------------------------------------------------- BENTO CELL */
function bentoCell({ id, idx, tag, title, desc, span = 'lg:col-span-6', big = false, extra = '', ctaLabel, msg, service, division, wide = false, img = '', imgCaption = '' }) {
  const mediaBlock = img ? `<div class="img-card-wrap border-b border-slate-200">
        <img src="${img}" alt="${title}" class="${big ? 'img-card-lg' : 'img-card'}" loading="lazy" />
        ${imgCaption ? `<span class="img-overlay-badge">${imgCaption}</span>` : ''}
      </div>` : '';
  return `<article id="${id}" class="group flex min-w-0 scroll-mt-24 flex-col bg-white ${span}">
      <div class="flex items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
        <span class="font-mono text-xs font-bold tracking-widest text-[#2C99D6]">[${idx}]</span>
        <span class="tag-mono text-right">[${tag}]</span>
      </div>
      ${mediaBlock}
      <div class="flex-1 px-6 pb-2 pt-6 ${wide ? 'lg:grid lg:grid-cols-12 lg:gap-10' : 'flex flex-col justify-between'}">
        <div class="min-w-0 ${wide ? 'lg:col-span-7' : ''}">
          <h3 class="${big ? 'text-2xl lg:text-3xl' : 'text-2xl'} font-bold leading-tight tracking-tight text-slate-900">${title}</h3>
          <p class="mt-3.5 max-w-xl leading-relaxed text-slate-600">${desc}</p>
        </div>
        ${extra ? `<div class="min-w-0 ${wide ? 'mt-6 lg:col-span-5 lg:mt-0' : 'mt-5'}">${extra}</div>` : ''}
      </div>
      <div class="mx-6 mb-6 mt-6 border-t border-slate-100 pt-4">
        <p class="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500">Konsultasi &amp; Pemesanan B2B</p>
        <div>
          ${waPair({ msg, division, service, location: 'service_card', label: `${ctaLabel} ${ARROW}` })}
        </div>
      </div>
    </article>`;
}

/* ------------------------ KATALOG & TABEL HARGA BESI / PRODUK (SIMULASI) */
const PRICE_DATA_SCRAP = [
  {
    code: 'SCR-01',
    name: 'Besi Tua / Scrap Kelas A (HMS 1 & Baja Tebal)',
    spec: 'Eks-potongan WF, H-Beam, Pelat Baja ≥ 6mm, Rel & Konstruksi Pabrik',
    price: 'Rp 7.200 – Rp 7.800 / Kg',
    note: 'Terima Partai Besar • Timbangan 50 Ton',
    img: PHOTOS.scrap,
    msg: 'hargaScrap',
    service: 'harga_scrap_kelas_a',
    highlight: true
  },
  {
    code: 'SCR-02',
    name: 'Besi Scrap Eks-Mesin Industri & Alat Berat',
    spec: 'Bongkaran mesin tekstil, genset, ekskavator, dinamo & komponen logam berat',
    price: 'Rp 6.800 – Rp 7.400 / Kg',
    note: 'Siap Jemput / Timbang di Gedebage',
    img: PHOTOS.heroLogam,
    msg: 'hargaScrap',
    service: 'harga_scrap_mesin',
    highlight: true
  },
  {
    code: 'SCR-03',
    name: 'Scrap Besi Beton & Bongkaran Gedung / Gudang',
    spec: 'Potongan besi beton ulir/polos, rangka atap baja, pipa besi & struktur eks-bangunan',
    price: 'Rp 6.400 – Rp 7.100 / Kg',
    note: 'Pembayaran Lunas di Hari Sama',
    img: PHOTOS.rangkaBeton,
    msg: 'hargaScrap',
    service: 'harga_scrap_bongkaran',
    highlight: false
  },
  {
    code: 'SCR-04',
    name: 'Besi Cor (Cast Iron) & Scrap Logam Campuran',
    spec: 'Blok mesin cor, cetakan pabrik, plat tipis, serta sisa produksi manufaktur',
    price: 'Rp 5.800 – Rp 6.500 / Kg',
    note: 'Sortasi Jujur & Transparan',
    img: PHOTOS.timbangan,
    msg: 'hargaScrap',
    service: 'harga_scrap_cor',
    highlight: false
  }
];

const PRICE_DATA_MATERIAL = [
  {
    code: 'MAT-01',
    name: 'Besi Baja Profil WF (Wide Flange) & H-Beam SNI',
    spec: 'Ukuran WF 150, 200, 250, 300 hingga 400mm (Tersedia Baru & Eks-Proyek Layak Pakai)',
    price: 'Rp 13.500 – Rp 15.200 / Kg',
    note: 'Ready Stock Gudang Gedebage',
    img: PHOTOS.besiWf,
    msg: 'hargaBesiBaru',
    service: 'harga_baja_wf_hbeam',
    highlight: false
  },
  {
    code: 'MAT-02',
    name: 'Besi Beton Polos (BJTP) & Ulir (BJTS) Full SNI',
    spec: 'Diameter 8mm, 10mm, 12mm, 13mm, 16mm, 19mm – 25mm (Panjang 12 Meter)',
    price: 'Rp 11.200 – Rp 12.400 / Kg',
    note: 'Tersedia Eceran Proyek & Partai Tonase',
    img: PHOTOS.heroHome,
    msg: 'hargaBesiBaru',
    service: 'harga_besi_beton',
    highlight: false
  },
  {
    code: 'MAT-03',
    name: 'Tiang Listrik Beton / Baja & Tiang Telepon',
    spec: 'Panjang 7m, 9m, 11m, 12m, 13m (Beban Kerja 100 daN – 350 daN Standar PLN/Telkom)',
    price: 'Rp 1.450.000 – Rp 4.850.000 / Btg',
    note: 'Siap Kirim Proyek Jawa Barat & Nasional',
    img: PHOTOS.tiangListrik,
    msg: 'hargaTiang',
    service: 'harga_tiang_listrik',
    highlight: false
  },
  {
    code: 'MAT-04',
    name: 'Rangka Beton Bertulang & Struktur Logam Siap Pakai',
    spec: 'Kolom praktis, balok precast, cakar ayam, dan fabrikasi struktur rangka baja presisi',
    price: 'Mulai Rp 1.850.000 / Unit',
    note: 'Custom Sesuai Shop Drawing Proyek',
    img: PHOTOS.rangkaBeton,
    msg: 'hargaRangka',
    service: 'harga_rangka_beton',
    highlight: false
  },
  {
    code: 'MAT-05',
    name: 'Jasa Konstruksi Baja Gudang, Pabrik & Bangunan',
    spec: 'Paket fabrikasi + instalasi (erection) struktur baja berat, atap, hingga pengecoran lantai',
    price: 'Rp 1.650.000 – Rp 2.450.000 / m²',
    note: 'Kontraktor PKP Resmi • Bergaransi',
    img: PHOTOS.konstruksiBaja,
    msg: 'hargaBorongan',
    service: 'harga_konstruksi_baja',
    highlight: false
  }
];

const PRICE_DATA_PAKAN = [
  {
    code: 'PKN-01',
    name: 'Ransum Makanan Hewan Siap Saji (Grosir Pabrik)',
    spec: 'Formulasi nutrisi seimbang (PK 14%–18%, TDN 68%+) untuk penggemukan & laktasi',
    price: 'Rp 4.200 – Rp 5.400 / Kg',
    note: 'Kemasan Karung 50 Kg • Partai Besar',
    img: PHOTOS.ransum,
    msg: 'hargaPakan',
    service: 'harga_ransum_ternak',
    highlight: true
  },
  {
    code: 'PKN-02',
    name: 'Konsentrat Sapi Potong & Sapi Perah Protein Tinggi',
    spec: 'Konsentrat energi & protein tinggi dari bahan baku pilihan bebas jamur — produksi Cileunyi',
    price: 'Rp 3.800 – Rp 4.900 / Kg',
    note: 'Harga Pabrik Langsung untuk Farm/Koperasi',
    img: PHOTOS.konsentrat,
    msg: 'hargaPakan',
    service: 'harga_konsentrat_ternak',
    highlight: true
  },
  {
    code: 'PKN-03',
    name: 'Konsentrat Pakan Domba, Kambing & Unggas',
    spec: 'Pakan penguat pertumbuhan ADG optimal untuk peternakan domba/kambing & unggas',
    price: 'Rp 3.600 – Rp 4.600 / Kg',
    note: 'Tersedia Kontrak Suplai Rutin',
    img: PHOTOS.heroPakan,
    msg: 'hargaPakan',
    service: 'harga_konsentrat_domba',
    highlight: false
  },
  {
    code: 'PKN-04',
    name: 'Hijauan Tanaman Pakan Ternak & Pupuk Kompos Organik',
    spec: 'Rumput odot/pakchong segar & kompos organik terfermentasi matang siap tebar',
    price: 'Rp 1.200 – Rp 2.500 / Kg',
    note: 'Suplai Rutin Armada Truk',
    img: PHOTOS.hijauan,
    msg: 'hijauan',
    service: 'harga_hijauan_kompos',
    highlight: false
  }
];

function renderPriceRow(item, division = 'logam') {
  const badgeClass = item.highlight ? 'price-badge-red' : 'price-badge';
  const itemMsgText = `ingin menanyakan update harga hari ini untuk [${item.code}] ${item.name} (Estimasi katalog: ${item.price}).`;
  return `<div class="price-row">
    <div class="price-row-left">
      <img src="${item.img}" alt="${item.name}" class="img-thumb" loading="lazy" />
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-mono text-xs font-bold text-[#2C99D6]">[${item.code}]</span>
          <span class="tag-mono">${item.note}</span>
        </div>
        <h3 class="mt-1.5 text-lg font-bold text-slate-900">${item.name}</h3>
        <p class="mt-1 text-sm text-slate-600">${item.spec}</p>
      </div>
    </div>
    <div class="price-row-right">
      <div class="w-full">
        <span class="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Estimasi Harga Acuan*</span>
        <span class="${badgeClass} mt-1 w-full">${item.price}</span>
      </div>
      ${wa({ agent: 'uwem', msg: item.msg, customText: itemMsgText, division, service: item.service, location: 'price_table', cls: 'btn-cta px-4 py-2.5 text-xs w-full', html: `Tanya Harga Hari Ini ${ARROW}` })}
    </div>
  </div>`;
}

function priceCatalogSection({ idx = '02', includePakan = true, onlyPakan = false, defaultTab = 'scrap' }) {
  const secLabel = onlyPakan ? 'Daftar Harga Grosir &amp; Katalog Pakan' : 'Daftar Harga &amp; Katalog B2B';
  const secH2 = onlyPakan ? 'Estimasi harga grosir<br />ransum &amp; konsentrat.' : 'Estimasi harga besi,<br />konstruksi &amp; produk.';
  const secIntro = onlyPakan
    ? 'Daftar simulasi/indikasi harga grosir pabrik untuk ransum makanan hewan, konsentrat sapi/domba/unggas, hijauan pakan ternak, serta kompos organik dari fasilitas produksi Cileunyi &amp; Gedebage Bandung.'
    : 'Daftar simulasi/indikasi harga terima besi tua (scrap) di Timbangan 50 Ton serta harga jual besi baru, tiang proyek, konstruksi baja, dan pakan ternak. Klik tombol pada produk untuk mengunci penawaran harga hari ini.';

  const tabsHtml = onlyPakan
    ? `<div class="flex flex-wrap gap-2" role="tablist" aria-label="Kategori Daftar Harga Pakan">
          <button type="button" data-price-tab="pakan" class="tab-btn is-active">
            <span>[01] Harga Grosir Ransum, Konsentrat &amp; Agribisnis</span>
          </button>
        </div>`
    : `<div class="flex flex-wrap gap-2" role="tablist" aria-label="Kategori Daftar Harga">
          <button type="button" data-price-tab="scrap" class="tab-btn ${defaultTab === 'scrap' ? 'is-active' : ''}">
            <span>[01] Harga Beli Besi Tua / Scrap</span>
          </button>
          <button type="button" data-price-tab="material" class="tab-btn ${defaultTab === 'material' ? 'is-active' : ''}">
            <span>[02] Harga Besi Baru, Tiang &amp; Konstruksi</span>
          </button>
          ${includePakan ? `<button type="button" data-price-tab="pakan" class="tab-btn ${defaultTab === 'pakan' ? 'is-active' : ''}">
            <span>[03] Harga Grosir Pakan Ternak</span>
          </button>` : ''}
        </div>`;

  const panelsHtml = onlyPakan
    ? `<div data-price-panel="pakan">
          ${PRICE_DATA_PAKAN.map(item => renderPriceRow(item, 'pakan')).join('\n')}
        </div>`
    : `<div data-price-panel="scrap" class="${defaultTab === 'scrap' ? '' : 'hidden'}">
          ${PRICE_DATA_SCRAP.map(item => renderPriceRow(item, 'logam')).join('\n')}
        </div>

        <div data-price-panel="material" class="${defaultTab === 'material' ? '' : 'hidden'}">
          ${PRICE_DATA_MATERIAL.map(item => renderPriceRow(item, 'logam')).join('\n')}
        </div>

        ${includePakan ? `<div data-price-panel="pakan" class="${defaultTab === 'pakan' ? '' : 'hidden'}">
          ${PRICE_DATA_PAKAN.map(item => renderPriceRow(item, 'pakan')).join('\n')}
        </div>` : ''}`;

  const footerMsg = onlyPakan ? 'hargaPakan' : 'hargaScrap';
  const footerDiv = onlyPakan ? 'pakan' : 'logam';

  return `<section id="katalog-harga" class="scroll-mt-24 border-t border-slate-200 bg-[#F8FAFC] py-20 lg:py-28">
    <div class="wrap">
      ${sectionHead(idx, secLabel, secH2, secIntro)}

      <!-- Filter Tabs -->
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        ${tabsHtml}
        <span class="badge-cert">UPDATE HARGA PARTAI BESAR • NEGO TONASE</span>
      </div>

      <!-- Tab Panels -->
      <div class="border border-slate-900 bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-5 py-3.5 font-mono text-xs uppercase tracking-widest text-white">
          <span id="price-table-title">Katalog Spesifikasi &amp; Estimasi Harga Satuan / Tonase</span>
          <span class="text-white/70">Transaksi Korporat &amp; Partai Besar</span>
        </div>

        ${panelsHtml}

        <div class="price-row price-row-footer">
          <p class="font-mono text-xs leading-relaxed text-slate-600">
            <strong>*Catatan Transaksi:</strong> Harga di atas merupakan estimasi acuan simulasi partai besar dan dapat berubah mengikuti fluktuasi bahan baku/indeks pasar harian. Penimbangan dilakukan transparan menggunakan instrumen tera resmi.
          </p>
          <div class="price-row-right">
            ${wa({ agent: 'uwem', msg: footerMsg, division: footerDiv, service: 'pricelist_lengkap_wa', location: 'price_table_footer', cls: 'btn-dark w-full text-xs px-4 py-3', html: `Minta Pricelist Resmi Hari Ini ${ARROW}` })}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------- SPEC SHEET */
function ledgerGroup(title, rev, rows) {
  return `<div class="flex items-center justify-between bg-slate-900 px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-white"><span>${title}</span><span class="text-white/60">${rev}</span></div>
        <dl>
${rows.map(r => `          <div class="grid grid-cols-12 gap-x-4 gap-y-1 border-b border-slate-200 px-5 py-3.5 font-mono text-xs uppercase tracking-wider">
            <dt class="col-span-12 text-slate-500 sm:col-span-4">${r[0]}</dt>
            <dd class="col-span-12 break-words font-bold text-slate-900 sm:col-span-8">${r[1]}</dd>
          </div>`).join('\n')}
        </dl>`;
}

const INSTRUMENT_ROWS = [
  ['Instrumen 01', 'Timbangan Jembatan Elektronik — Merek SONIC A12EK'],
  ['Kapasitas Utama', '50.000 kg (50 Ton) — Truk, Tronton & Kontainer'],
  ['Status Tera', 'Disahkan & Ditera Ulang Resmi (SKHP Aktif Terverifikasi)'],
  ['Instrumen 02', 'Timbangan Elektronik — Merek SONIC A12EK (Kapasitas 1.000 kg)'],
  ['Instansi Pengesah', 'UPT Metrologi Legal — Dinas Perdagangan dan Perindustrian Kota Bandung'],
  ['Lokasi Fasilitas', 'Jl. Raya Gedebage No. 95, Kec. Gedebage, Kota Bandung 40294']
];

const LEGAL_ROWS = [
  ['Nama Perseroan', 'PT. Sumber Ganda Mekar'],
  ['Tahun Berdiri', 'Sejak 19 April 2010 — Akta Perseroan Notaris Resmi'],
  ['Modal Dasar', 'Rp 2.000.000.000,- (Dua Miliar Rupiah)'],
  ['Izin Usaha (NIB)', 'Terdaftar Resmi OSS Berbasis Risiko (20 KBLI Aktif)'],
  ['Status Perpajakan', 'Pengusaha Kena Pajak (PKP) Resmi — Faktur Pajak PPN'],
  ['Pengesahan Hukum', 'SK Kementerian Hukum RI Terverifikasi (Pembaruan 2026)']
];

const SOP_TIMBANGAN_ROWS = [
  ['Tahap 01 — Bruto', 'Penimbangan Armada Bermuatan Penuh di Atas Platform 50 Ton'],
  ['Tahap 02 — Sortasi', 'Bongkar / Muat Terbuka Disaksikan Langsung oleh Perwakilan Mitra'],
  ['Tahap 03 — Tarra', 'Penimbangan Armada Kosong untuk Kalkulasi Berat Bersih (Netto)'],
  ['Bukti Tonase', 'Cetak Tiket Timbangan Resmi &amp; Berita Acara Serah Terima'],
  ['Sistem Pembayaran', 'Pelunasan Cepat (Tunai / Transfer Bank) di Hari yang Sama'],
  ['Dukungan Pajak', 'Penerbitan Faktur Pajak PPN Resmi untuk Transaksi Korporasi (PKP)']
];

function specSheet({ id, idx, label, h2, intro, headline, withLegal, ctx, anchorId = '' }) {
  const leftBadges = withLegal
    ? '<span class="badge-cert">PERUSAHAAN PKP RESMI</span><span class="badge-cert">20 KBLI &amp; TERA RESMI</span>'
    : '<span class="badge-cert">TERA RESMI 50 TON</span><span class="badge-cert">UPT METROLOGI LEGAL</span>';

  const leftDesc = withLegal
    ? 'PT. Sumber Ganda Mekar berbadan hukum Perseroan Terbatas resmi sejak 2010 (SK Kemenkumham RI), berstatus Pengusaha Kena Pajak (PKP) untuk penerbitan Faktur Pajak PPN, memiliki izin usaha NIB (20 KBLI Aktif), serta fasilitas Timbangan 50 Ton yang disahkan UPT Metrologi Legal Disdagin Kota Bandung.'
    : 'Timbangan Jembatan Elektronik 50.000 Kg (50 Ton) Merek SONIC &amp; Timbangan 1.000 Kg disahkan/ditera ulang oleh UPT Metrologi Legal Disdagin Kota Bandung — jaminan timbangan jujur anti-curang untuk setiap transaksi.';

  const leftImg = withLegal ? PHOTOS.konstruksiBaja : PHOTOS.timbangan;
  const leftImgAlt = withLegal ? 'Legalitas Resmi & Operasional Korporat PT. Sumber Ganda Mekar' : 'Fasilitas Timbangan Jembatan 50 Ton Gedebage';
  const leftImgBadge = withLegal ? 'PT. Sumber Ganda Mekar — Badan Hukum PT &amp; PKP Resmi' : 'Timbangan Jembatan 50.000 Kg — Gedebage';

  const ctaTitle = withLegal ? 'Konsultasi pengadaan / tender korporasi' : 'Jadwalkan penimbangan / transaksi';
  const ctaBtnText = withLegal
    ? `Konsultasi Pengadaan B2B ${ARROW}`
    : `Jadwalkan Penimbangan ${ARROW}`;
  const ctaMsg = withLegal ? 'general' : 'jadwal';

  return `<section id="${id}" class="scroll-mt-24 bg-[#F8FAFC] py-20 lg:py-28">
    <div class="wrap">
      ${sectionHead(idx, label, h2, intro)}
      <div class="grid border border-slate-900 lg:grid-cols-12">
        <div class="hero-canvas min-w-0 p-7 text-white sm:p-9 lg:col-span-5 lg:p-10">
          <div class="flex h-full flex-col justify-between gap-8">
            <div>
              <div class="mb-6 flex flex-wrap gap-2">${leftBadges}</div>
              <h3 class="font-display text-5xl uppercase leading-[0.92] sm:text-6xl">${headline}</h3>
              <p class="mt-5 max-w-md leading-relaxed text-white">${leftDesc}</p>
              <div class="img-card-wrap mt-6 border border-white/25">
                <img src="${leftImg}" alt="${leftImgAlt}" class="img-card" loading="lazy" />
                <span class="img-overlay-badge">${leftImgBadge}</span>
              </div>
            </div>
            <div>
              <p class="mb-3 font-mono text-[11px] uppercase tracking-widest text-white/80">${ctaTitle}</p>
              <div class="flex flex-col gap-2.5">
                ${wa({ agent: 'uwem', msg: ctaMsg, division: 'logam', service: 'jadwal_timbangan_50ton', location: 'service_card', cls: 'btn-cta w-full', html: ctaBtnText })}
              </div>
            </div>
          </div>
        </div>
        <div id="${anchorId || id + '-ledger'}" class="min-w-0 bg-white lg:col-span-7 flex flex-col justify-between">
        ${withLegal
          ? `${ledgerGroup('Status Legalitas &amp; Kepatuhan Korporat', 'Terverifikasi', LEGAL_ROWS)}
        ${ledgerGroup('Spesifikasi Instrumen — Tera Metrologi Legal', 'Terverifikasi', INSTRUMENT_ROWS)}`
          : `${ledgerGroup('Spesifikasi Instrumen — Tera Metrologi Legal', 'Terverifikasi', INSTRUMENT_ROWS)}
        ${ledgerGroup('Prosedur Penimbangan &amp; Jaminan Transaksi B2B', 'SOP Resmi', SOP_TIMBANGAN_ROWS)}`}
        </div>
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------- QUOTE FORM */
function quoteForm({ division, heading, intro, services, ph1, ph2, defaultMsg, defaultService, labels }) {
  return `<section id="konsultasi" class="section-blend-light scroll-mt-24 border-t border-slate-200 py-20 lg:py-28">
    <div class="wrap grid items-center gap-12 lg:grid-cols-12">
      <div class="min-w-0 lg:col-span-5">
        <p class="eyebrow mb-5"><span class="font-bold text-[#2C99D6]">[${labels.idx}]</span> Konsultasi &amp; Penawaran Cepat</p>
        <h2 class="display-h2">${heading}</h2>
        <p class="mt-5 max-w-md leading-relaxed text-slate-600">Isi spesifikasi kebutuhan Anda di samping — sistem akan menyusun format pesan resmi beserta referensi website <strong>sumbergandamekar.com</strong> dan meneruskannya langsung ke layanan WhatsApp resmi kami.</p>
      </div>
      <form id="b2b-quick-quote-form" data-form-division="${division}" class="min-w-0 grid gap-5 border border-slate-900 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8 lg:col-span-7" onsubmit="return false;">
        <div class="sm:col-span-2">
          <label for="quote-service" class="field-label">Layanan / Produk yang Dibutuhkan</label>
          <select id="quote-service" class="field">
${services.map(s => `            <option value="${s[0]}">${s[1]}</option>`).join('\n')}
          </select>
        </div>
        <div>
          <label for="quote-volume" class="field-label">Estimasi Tonase / Kuantitas</label>
          <input type="text" id="quote-volume" placeholder="${ph1}" class="field" />
        </div>
        <div>
          <label for="quote-company" class="field-label">Perusahaan / Lokasi Proyek</label>
          <input type="text" id="quote-company" placeholder="${ph2}" class="field" />
        </div>
        <div class="pt-2 sm:col-span-2">
          ${wa({ id: 'quote-send-uwem', agent: 'uwem', msg: defaultMsg, division, service: defaultService, location: 'service_card', cls: 'btn-cta w-full py-4 text-base', html: `Kirim Permintaan via WhatsApp ${ARROW}` })}
        </div>
      </form>
    </div>
  </section>`;
}

/* --------------------- B2B FAQ & VERIFIKASI TEKNIS (SWISS CITE-READY GRID) */
function faqSection({ idx, label = 'B2B FAQ &amp; Verifikasi Teknis', h2 = 'Jawaban teknis.<br />Terverifikasi resmi.', intro, faqs, ctx }) {
  const items = faqs.map((item, i) => {
    const qCode = `Q-0${i + 1}`;
    return `<article class="grid min-w-0 gap-4 border-b border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
          <div class="min-w-0 lg:col-span-5">
            <div class="mb-2.5 flex items-center gap-2.5">
              <span class="font-mono text-xs font-bold tracking-widest text-[#2C99D6]">[${qCode}]</span>
              <span class="tag-mono">[${item.tag}]</span>
            </div>
            <h3 class="text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl">${item.q}</h3>
          </div>
          <div class="min-w-0 lg:col-span-7">
            <p class="leading-relaxed text-slate-600">${item.a}</p>
            ${item.withCta ? `<div class="mt-5 flex flex-col gap-2.5 border-t border-slate-100 pt-4 sm:flex-row sm:flex-wrap">
              ${wa({ agent: 'uwem', msg: ctx.msg, division: ctx.division, service: ctx.service, location: 'service_card', cls: 'btn-cta px-5 py-3 text-xs', html: `Konsultasi via WhatsApp ${ARROW}` })}
            </div>` : ''}
          </div>
        </article>`;
  }).join('\n');

  return `<section id="faq-b2b" class="scroll-mt-24 border-t border-slate-200 bg-[#F8FAFC] py-20 lg:py-28">
    <div class="wrap">
      ${sectionHead(idx, label, h2, intro)}
      <div class="border-x border-t border-slate-200">
${items}
      </div>
    </div>
  </section>`;
}

/* ------------------------------------------- VISUALISASI MAP 2 TITIK LOKASI */
function mapSection({ idx = '08' } = {}) {
  return `<section id="lokasi-peta" class="scroll-mt-24 border-t border-slate-200 bg-white py-20 lg:py-28">
    <div class="wrap">
      ${sectionHead(idx, 'Peta &amp; Titik Lokasi Operasional', 'Dua lokasi strategis.<br />Siap dikunjungi langsung.', 'Kunjungi langsung Kantor Pusat PT. Sumber Ganda Mekar di Jl. Raya Gedebage No. 95, Kota Bandung, atau fasilitas produksi agribisnis &amp; pakan ternak kami di Cimekar, Cileunyi, Kab. Bandung.')}

      <div class="grid gap-8 lg:grid-cols-12">
        <!-- Lokasi 1: Gedebage -->
        <article class="flex flex-col justify-between border border-slate-900 bg-[#F8FAFC] lg:col-span-6 shadow-sm">
          <div>
            <div class="flex items-center justify-between bg-slate-900 px-5 py-3.5 text-white">
              <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[TITIK 01 — KANTOR PUSAT GEDEBAGE]</span>
              <span class="badge-cert">KANTOR PUSAT</span>
            </div>
            <div class="border-b border-slate-200 bg-slate-200">
              <iframe
                title="Peta Lokasi PT. Sumber Ganda Mekar — Jl. Raya Gedebage No. 95 Bandung"
                src="https://maps.google.com/maps?q=-6.9516877,107.6888851&hl=id&z=16&output=embed"
                class="map-frame"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen>
              </iframe>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold tracking-tight text-slate-900">PT. Sumber Ganda Mekar</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                <strong>Alamat:</strong> Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung, Jawa Barat 40294
              </p>
              <p class="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                Kantor Pusat • Gudang Logam &amp; Konstruksi Baja • Timbangan 50 Ton
              </p>
            </div>
          </div>
          <div class="grid gap-2.5 border-t border-slate-200 bg-white p-6 sm:grid-cols-2">
            <a href="https://maps.app.goo.gl/BbyRwGcgi4yJsVgn6" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-3">Buka Rute Google Maps ${ARROW}</a>
            ${wa({ agent: 'uwem', msg: 'lokasiGedebage', division: 'logam', service: 'map_gedebage_wa', location: 'map_section', cls: 'btn-cta text-xs py-3', html: `Konfirmasi Kunjungan ${ARROW}` })}
          </div>
        </article>

        <!-- Lokasi 2: Cileunyi -->
        <article class="flex flex-col justify-between border border-slate-900 bg-[#F8FAFC] lg:col-span-6 shadow-sm">
          <div>
            <div class="flex items-center justify-between bg-slate-900 px-5 py-3.5 text-white">
              <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[TITIK 02 — UNIT PRODUKSI CILEUNYI]</span>
              <span class="badge-cert">FASILITAS PRODUKSI</span>
            </div>
            <div class="border-b border-slate-200 bg-slate-200">
              <iframe
                title="Peta Lokasi PT. Sumber Ganda Mekar (Unit Cileunyi) — Cimekar, Cileunyi, Bandung"
                src="https://maps.google.com/maps?q=Cimekar,+Cileunyi,+Bandung&hl=id&z=15&output=embed"
                class="map-frame"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen>
              </iframe>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold tracking-tight text-slate-900">PT. Sumber Ganda Mekar (Unit Cileunyi)</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                <strong>Alamat:</strong> Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung, Jawa Barat 40623
              </p>
              <p class="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                Pabrik Pakan Ternak • Konsentrat Sapi/Domba/Unggas • Kebun Agribisnis
              </p>
            </div>
          </div>
          <div class="grid gap-2.5 border-t border-slate-200 bg-white p-6 sm:grid-cols-2">
            <a href="https://www.google.com/maps/search/?api=1&query=Kelurahan+Cimekar+Cileunyi+Bandung" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-3">Buka Rute Google Maps ${ARROW}</a>
            ${wa({ agent: 'uwem', msg: 'lokasiCileunyi', division: 'pakan', service: 'map_cileunyi_wa', location: 'map_section', cls: 'btn-cta text-xs py-3', html: `Konfirmasi Kunjungan ${ARROW}` })}
          </div>
        </article>
      </div>
    </div>
  </section>`;
}

/* ------------------------------------------------------------------ FAB */
function fab(ctx) {
  return `<div class="fixed bottom-3 right-3 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
  <div id="wa-fab-popup" role="dialog" aria-label="Kontak WhatsApp PT. Sumber Ganda Mekar" class="pointer-events-none hidden w-[min(22rem,calc(100vw-1.5rem))] translate-y-4 scale-95 border border-slate-900 bg-white opacity-0 shadow-xl transition duration-200">
    <div class="flex items-center justify-between bg-slate-900 px-4 py-3 text-white">
      <span class="font-mono text-[11px] uppercase tracking-widest">Fast Response WhatsApp Resmi</span>
      <button type="button" id="wa-fab-close" aria-label="Tutup panel kontak" class="rounded p-1 hover:bg-white/15">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
    ${wa({
      agent: 'uwem', msg: ctx.msg, division: ctx.division, service: ctx.fabService || ctx.service, location: 'floating_fab',
      cls: 'flex items-center justify-between gap-4 px-4 py-4 hover:bg-slate-50',
      html: `<span><span class="block font-mono text-[10px] uppercase tracking-widest text-[#2C99D6] font-bold">PIC Marketing &amp; Operasional</span><span class="mt-0.5 block text-base font-bold text-slate-900">CP. Uwem</span><span class="block font-mono text-sm text-slate-600">${PHONES.uwem.display}</span></span><span class="text-xl font-bold text-[#EB2F33]">↗</span>`
    })}
  </div>
  <button type="button" id="wa-fab-toggle" aria-expanded="false" aria-label="Hubungi WhatsApp Resmi PT. Sumber Ganda Mekar" class="btn-cta px-3.5 py-2.5 text-xs sm:px-5 sm:py-3.5 sm:text-sm shadow-lg">
    <svg class="h-4 w-4 sm:h-5 sm:w-5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.605-1.47c1.908 1.258 4.187 1.986 6.603 1.986 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
    <span>WhatsApp Resmi</span>
  </button>
</div>`;
}

/* -------------------------------------------- WAWASAN TEKNIS PREVIEW (6) */
function wawasanSection({ idx, label = 'Rujukan &amp; Wawasan Teknis B2B', h2 = 'Spesifikasi teknis.<br />Panduan pengadaan B2B.', intro, articles, basePath = '' }) {
  const wawasanHubHref = basePath ? 'index.html' : 'wawasan/index.html';
  const cards = articles.map((art) => {
    const code = String(art.id).padStart(2, '0');
    const href = basePath ? `${art.slug}.html` : `wawasan/${art.slug}.html`;
    return `<article class="flex min-w-0 flex-col justify-between bg-white p-6 sm:p-7">
          <div>
            <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span class="font-mono text-xs font-bold tracking-widest text-[#2C99D6]">[ART-${code}]</span>
              <span class="tag-mono truncate">[${art.kbliCode}]</span>
            </div>
            <h3 class="mt-4 text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl">
              <a href="${href}" class="hover:text-[#2C99D6] transition-colors">${art.title}</a>
            </h3>
            <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">${art.leadParagraph}</p>
          </div>
          <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 font-mono text-[11px] uppercase tracking-widest">
            <span class="text-slate-500">${art.readTime}</span>
            <a href="${href}" class="font-bold text-[#EB2F33] hover:text-[#C81E22]">Baca Spesifikasi →</a>
          </div>
        </article>`;
  }).join('\n');

  return `<section id="wawasan-teknis" class="scroll-mt-24 border-t border-slate-200 bg-white py-20 lg:py-28">
    <div class="wrap">
      ${sectionHead(idx, label, h2, intro)}
      <div class="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
${cards}
      </div>
      <div class="mt-8 flex flex-col items-start justify-between gap-4 border border-slate-900 bg-[#F8FAFC] p-6 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[PUSAT PENGETAHUAN &amp; TABEL SPESIFIKASI B2B]</p>
          <p class="mt-1 text-base font-bold text-slate-900">Eksplorasi seluruh 45 Artikel Spesifikasi Teknis, Tabel Berat SNI, Tiang Listrik, Konstruksi Baja &amp; Nutrisi Pakan Ternak</p>
        </div>
        <a href="${wawasanHubHref}" class="btn-cta shrink-0">Lihat Semua 45 Artikel Teknis ${ARROW}</a>
      </div>
    </div>
  </section>`;
}

/* --------------------------------------------------------------- FOOTER */
function footer(ctx, basePath = '') {
  const wawasanHref = basePath ? 'index.html' : 'wawasan/index.html';
  return `<footer id="kontak" class="footer-blend-dark scroll-mt-24 text-white">
  <div class="wrap py-16 pb-24 lg:py-20">
    <div class="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-12">
      <div class="min-w-0 lg:col-span-5">
        <div class="flex items-center gap-3">
          <span class="shrink-0 rounded-full bg-white p-1.5 shadow-sm"><img src="${basePath}logo.png" alt="Logo PT. Sumber Ganda Mekar" width="44" height="44" class="h-10 w-10 object-contain" loading="lazy" /></span>
          <span class="text-lg font-extrabold uppercase tracking-tight">PT. Sumber Ganda Mekar</span>
        </div>
        <p class="mt-6 max-w-md font-mono text-xs uppercase leading-relaxed tracking-widest text-white/75">Jual Beli Besi Tua/Baru - Rangka Beton/Logam - Tiang Listrik/Telp - Konstruksi Baja dan Pakan Ternak</p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span class="badge-cert">PERUSAHAAN PKP RESMI</span>
          <span class="badge-cert">TERA METROLOGI 50 TON</span>
        </div>
      </div>
      <div class="min-w-0 space-y-6 lg:col-span-4">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-widest text-white/60">[01] Kantor &amp; Gudang Timbangan 50 Ton</p>
          <p class="mt-2 font-semibold">Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung 40294</p>
        </div>
        <div>
          <p class="font-mono text-[11px] uppercase tracking-widest text-white/60">[02] Operasional Agribisnis &amp; Pabrik Pakan Ternak</p>
          <p class="mt-2 font-semibold">Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623</p>
        </div>
        <div>
          <p class="font-mono text-[11px] uppercase tracking-widest text-white/60">[03] Email Resmi</p>
          <a href="mailto:sumbergandamekar@gmail.com" class="mt-2 inline-block font-semibold underline underline-offset-4 hover:text-white/80">sumbergandamekar@gmail.com</a>
        </div>
      </div>
      <div class="min-w-0 lg:col-span-3">
        <p class="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/60">Kontak Resmi Fast Response</p>
        <div class="flex flex-col gap-3">
          ${wa({ agent: 'uwem', msg: ctx.msg, division: ctx.division, service: ctx.footerService || ctx.service, location: 'footer', cls: 'btn-cta justify-between py-4', html: `<span>CP. Uwem — ${PHONES.uwem.display}</span>${ARROW}` })}
          <a href="#lokasi-peta" class="btn-outline-light justify-between py-3 text-xs"><span>Lihat Peta Lokasi Gudang</span><span>↑</span></a>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between gap-6 pt-8 lg:flex-row lg:items-center">
      <nav class="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold" aria-label="Navigasi Footer">
        <a href="${basePath}index.html" class="hover:text-white/70">Beranda</a>
        <a href="${basePath}konstruksi-logam.html" class="hover:text-white/70">Divisi Logam &amp; Konstruksi</a>
        <a href="${basePath}pakan-ternak.html" class="hover:text-white/70">Divisi Pakan Ternak</a>
        <a href="${basePath}index.html#katalog-harga" class="hover:text-white/70">Daftar Harga Besi</a>
        <a href="${basePath}index.html#legalitas" class="hover:text-white/70">Legalitas &amp; Tera</a>
        <a href="${wawasanHref}" class="hover:text-white/70">Wawasan Teknis</a>
      </nav>
      <p class="font-mono text-[11px] uppercase tracking-widest text-white/60">© 2026 PT. Sumber Ganda Mekar. All rights reserved.</p>
    </div>
  </div>
</footer>`;
}

/* ----------------------------------------------------------------- PAGE */
function page({ headHtml, active, body, ctx, basePath = '', withMap = true, mapIdx = '08' }) {
  return `<!DOCTYPE html>
<html lang="id-ID">
${headHtml}
<body class="bg-[#F8FAFC] text-[#0F172A] antialiased">
${header(active, basePath)}
<main>
${body}
${withMap ? mapSection({ idx: mapIdx }) : ''}
</main>
${footer(ctx, basePath)}
${fab(ctx)}
<script src="${basePath}assets/js/main.js" defer></script>
</body>
</html>
`;
}

module.exports = {
  ARROW, PHONES, PHOTOS, BASE_ORG_NODE, faqSchemaNode,
  wa, waPair, head, hero, sectionHead, bentoCell, priceCatalogSection, specSheet, quoteForm, wawasanSection, faqSection, mapSection, header, footer, fab, page
};
