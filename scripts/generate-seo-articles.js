/**
 * Static SEO & GEO Article Generator — PT. Sumber Ganda Mekar (sumbergandamekar.com)
 * Generates:
 *  - /wawasan/index.html (Hub with live search & cluster filter)
 *  - 45 standalone technical B2B pages at /wawasan/[slug].html (650–1,000+ words each)
 *  - Updates sitemap.xml (49 URLs total)
 *  - Updates llms.txt & llms-full.txt
 */

const fs = require('fs');
const path = require('path');
const {
  ARROW, PHONES, BASE_ORG_NODE, faqSchemaNode,
  head, sectionHead, page
} = require('../src/lib');

const cluster1 = require('../data/articles-cluster-1');
const cluster2 = require('../data/articles-cluster-2');
const cluster3 = require('../data/articles-cluster-3');
const cluster4 = require('../data/articles-cluster-4');
const cluster5 = require('../data/articles-cluster-5');

const allArticles = [
  ...cluster1,
  ...cluster2,
  ...cluster3,
  ...cluster4,
  ...cluster5
];

const CLUSTERS = [
  { id: 'klaster-1', shortLabel: 'Besi Tua & Timbangan 50T', fullName: 'Klaster 1: Jual Beli Besi Tua/Scrap & Timbangan 50 Ton Resmi (KBLI 46796)', count: cluster1.length },
  { id: 'klaster-2', shortLabel: 'Besi Baru & Rangka Beton', fullName: 'Klaster 2: Besi Baru, Baja Profil & Rangka Beton Siap Pakai', count: cluster2.length },
  { id: 'klaster-3', shortLabel: 'Tiang Listrik & Telepon', fullName: 'Klaster 3: Pengadaan Tiang Listrik & Tiang Telepon', count: cluster3.length },
  { id: 'klaster-4', shortLabel: 'Konstruksi Baja & Gedung', fullName: 'Klaster 4: Jasa Konstruksi Baja, Gudang & Infrastruktur (KBLI 41011–41019, 42101)', count: cluster4.length },
  { id: 'klaster-5', shortLabel: 'Pakan Ternak & Agribisnis', fullName: 'Klaster 5: Pabrik Ransum, Konsentrat Pakan Ternak & Agribisnis (KBLI 10801, 10802, 01191, 38212)', count: cluster5.length }
];

function escapeHtml(str) {
  return String(str)
    .replace(/&(?!(?:amp|lt|gt|quot|#39);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function articleWaUrl(agentKey, articleTitle) {
  const p = PHONES[agentKey];
  const msg = agentKey === 'kantor'
    ? `Halo Kantor Pusat PT. Sumber Ganda Mekar, saya membaca artikel "${articleTitle}" di website dan ingin meminta penawaran resmi.`
    : `${p.greet}saya membaca artikel "${articleTitle}" di website dan ingin meminta penawaran resmi / konsultasi kebutuhan B2B kami.`;
  return `https://wa.me/${p.wa}?text=${encodeURIComponent(msg)}`;
}

function articleWaBtn({ agent, article, location, cls, label }) {
  const href = articleWaUrl(agent, article.title);
  return `<a href="${href}" target="_blank" rel="noopener noreferrer" data-cta="whatsapp" data-division="${article.division}" data-service="${article.serviceSlug}" data-agent="${agent}" data-location="${location}" class="${cls}">${label} ${ARROW}</a>`;
}

/**
 * Cluster-specific engineering & procurement verification narrative
 * Ensures every article has comprehensive, authoritative B2B SOP coverage (750–1,000+ words total).
 */
function renderClusterEngineeringSop(article) {
  const titleText = escapeHtml(article.title);
  if (article.clusterId === 'klaster-1') {
    return {
      heading: 'Protokol Penimbangan Tera Metrologi 50 Ton & Administrasi Akuisisi Scrap B2B',
      paragraphs: [
        `Dalam setiap transaksi yang berkaitan dengan ${titleText.toLowerCase()}, transparansi pengukuran tonase adalah faktor paling krusial yang membedakan mitra korporasi resmi dari pengepul informal. PT. Sumber Ganda Mekar mengoperasikan instrumen Timbangan Jembatan Elektronik kapasitas 50.000 Kg (50 Ton) Merek SONIC Tipe A12EK (Nomor Seri 01711744) yang telah lulus uji dan memperoleh Surat Keterangan Hasil Pengujian (SKHP) Nomor PG.05.05/2283/VII/2025, serta Timbangan Elektronik kapasitas 1.000 Kg Merek SONIC Tipe A12EK (SKHP Nomor PG.05.05/2284/VII/2025) dari UPT Metrologi Legal Dinas Perdagangan dan Perindustrian Kota Bandung.`,
        `Prosedur baku di fasilitas Jl. Raya Gedebage No. 95, Kota Bandung mewajibkan dua tahap penimbangan terkomputerisasi: penimbangan berat kotor (Bruto) saat armada truk pengangkut tiba dengan muatan, diikuti pembongkaran dan sortasi grade material oleh tim inspektur logam, lalu penimbangan berat kosong kendaraan (Tara). Selisih mutlak antara Bruto dan Tara menghasilkan berat bersih (Netto) yang dicetak langsung pada tiket timbang resmi dan ditandatangani bersama oleh perwakilan pemilik barang maupun petugas gudang.`,
        `Dari sisi kepatuhan finansial dan perpajakan, PT. Sumber Ganda Mekar berstatus Pengusaha Kena Pajak (PKP) resmi (S-00313/SPPKP-CT/KPP.0903/2025) dengan NPWP 031.199.979.1-429.000 dan NIB 9120101121498 (KBLI 46796). Hal ini memastikan setiap pelepasan aset besi tua pabrik, lelang scrap korporasi, maupun pembelian material logam didukung Berita Acara Serah Terima (BAST), pelunasan cepat di hari yang sama (same-day settlement), serta dokumentasi pajak yang sah untuk keperluan audit internal dan eksternal.`
      ]
    };
  }
  if (article.clusterId === 'klaster-2') {
    return {
      heading: 'Standar Verifikasi Mutu Baja SNI, Presisi Pabrikasi & Jaminan Tonase Riil',
      paragraphs: [
        `Pengadaan material struktur pada topik ${titleText.toLowerCase()} menuntut disiplin kontrol kualitas (Quality Control) yang ketat sebelum material diturunkan di lokasi proyek. Di industri konstruksi Indonesia, penyimpangan ketebalan profil atau diameter tulangan di luar batas toleransi Standar Nasional Indonesia (SNI) dapat menurunkan momen inersia penampang dan membahayakan faktor keamanan struktur bangunan.`,
        `Untuk melindungi kontraktor dan pemilik proyek dari risiko material di bawah standar ("besi banci"), PT. Sumber Ganda Mekar menerapkan metode verifikasi ganda di gudang utama Jl. Raya Gedebage No. 95, Kota Bandung. Pertama, pemeriksaan dimensi fisik menggunakan jangka sorong digital (caliper) dan mikrometer pada sampel acak setiap bundel. Kedua, penimbangan total muatan armada pengiriman di atas Timbangan Jembatan Elektronik 50 Ton SONIC A12EK (SKHP PG.05.05/2283/VII/2025) untuk membandingkan berat aktual terhadap tabel berat teoritis SNI.`,
        `Seluruh suplai besi beton, baja profil WF/H-Beam, CNP, pelat baja, hingga modul rangka beton siap pakai dari PT. Sumber Ganda Mekar dilengkapi Surat Jalan resmi, tiket timbangan terverifikasi, serta e-Faktur Pajak PPN (status PKP S-00313/SPPKP-CT/KPP.0903/2025). Sinergi antara ketersediaan stok partai besar dan legalitas perseroan sejak 2010 menjadikan proses pengadaan proyek berjalan tepat jadwal tanpa hambatan administrasi.`
      ]
    };
  }
  if (article.clusterId === 'klaster-3') {
    return {
      heading: 'Standar Kelayakan Infrastruktur Utilitas, Mobilisasi Armada & Kepatuhan Vendor PKP',
      paragraphs: [
        `Pelaksanaan proyek jaringan distribusi kelistrikan, telekomunikasi serat optik (FTTH), maupun penerangan jalan umum yang berkaitan dengan ${titleText.toLowerCase()} memerlukan sinkronisasi antara ketepatan spesifikasi teknis dan ketangguhan manajemen logistik. Setiap tiang penumpu harus memenuhi parameter kelurusan sumbu, kekuatan tarik beban kerja (daN), serta perlindungan korosi atau kepadatan beton prategang agar memiliki umur layan puluhan tahun di lapangan.`,
        `PT. Sumber Ganda Mekar mengelola rantai pasok pengadaan tiang listrik, tiang telepon, dan tiang PJU dari pusat distribusi Jl. Raya Gedebage No. 95, Kota Bandung menuju berbagai titik proyek di Jawa Barat, Jabodetabek, hingga luar pulau. Sebelum armada tronton atau trailer diberangkatkan, tata letak kayu penyangga (dunnage) diperiksa guna mencegah tegangan lentur selama perjalanan, dan total tonase muatan diverifikasi pada Timbangan Jembatan 50.000 Kg SONIC A12EK resmi.`,
        `Bagi kontraktor pelaksana tender pemerintah, BUMN, developer kawasan industri, maupun perusahaan ISP, PT. Sumber Ganda Mekar menyediakan dukungan dokumen korporat yang lengkap: NIB 9120101121498 (20 KBLI Aktif termasuk KBLI 42101), SK Kemenkumham AHU-0106760.AH.01.02.Tahun 2026, serta penerbitan Faktur Pajak PPN resmi (PKP S-00313/SPPKP-CT/KPP.0903/2025) yang menjamin kelancaran proses penagihan termin proyek.`
      ]
    };
  }
  if (article.clusterId === 'klaster-4') {
    return {
      heading: 'Integrasi Rekayasa Konstruksi Baja, Standar K3L & Keunggulan Rantai Pasok Internal',
      paragraphs: [
        `Dalam eksekusi proyek konstruksi yang dibahas pada ${titleText.toLowerCase()}, keberhasilan jadwal pembangunan (on-time delivery) dan efisiensi anggaran sangat ditentukan oleh integrasi antara penyediaan material utama dan kapabilitas fabrikasi-erection di lapangan. PT. Sumber Ganda Mekar memegang izin resmi kelompok KBLI Konstruksi Gedung (41011 s/d 41019) serta Konstruksi Bangunan Sipil Jalan (42101) dengan dukungan modal dasar perseroan Rp 2.000.000.000,- dan rekam jejak operasional sejak 19 April 2010.`,
        `Keunggulan kompetitif utama kami terletak pada kepemilikan gudang stok baja profil, besi beton, dan fasilitas pabrikasi sendiri di Gedebage, Bandung. Seluruh komponen kolom H-Beam, kuda-kuda rafter WF, pelat buhul (gusset plate), hingga angkur pondasi diproses melalui tahapan kontrol mutu dimensi, pengelasan struktural, pelapisan cat anti-korosi, serta penimbangan tonase aktual di atas Timbangan Jembatan 50 Ton SONIC A12EK (SKHP PG.05.05/2283/VII/2025) sebelum dikirim ke lokasi proyek.`,
        `Seluruh tahapan pekerjaan di lapangan dilaksanakan dengan mematuhi Pernyataan Mandiri K3L (Keselamatan, Kesehatan Kerja, dan Lingkungan) serta dokumen SPPL resmi. Ditambah dengan status Pengusaha Kena Pajak (PKP S-00313/SPPKP-CT/KPP.0903/2025), setiap kontrak borongan konstruksi maupun suplai struktur baja dilengkapi Faktur Pajak PPN dan laporan progres teknis yang transparan bagi manajemen pemilik proyek.`
      ]
    };
  }
  // klaster-5 (Agribisnis & Pakan Ternak)
  return {
    heading: 'Kontrol Kualitas Nutrisi, Jaminan Timbangan Tera Resmi & Kontinyuitas Rantai Pasok Agribisnis',
    paragraphs: [
      `Keberhasilan finansial usaha peternakan dan agribisnis yang berkaitan dengan ${titleText.toLowerCase()} sangat bergantung pada konsistensi mutu nutrisi di setiap batch pengiriman serta kejujuran timbangan kuantitas barang. Divisi Agribisnis PT. Sumber Ganda Mekar beroperasi secara sah di bawah payung KBLI 10801 (Industri Ransum Makanan Hewan), KBLI 10802 (Industri Konsentrat Makanan Hewan), KBLI 01191 (Pertanian Tanaman Pakan Ternak), dan KBLI 38212 (Produksi Kompos Sampah Organik) di fasilitas produksi Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623.`,
      `Setiap bahan baku pakan melewati seleksi ketat terhadap tingkat kekeringan (kadar air maksimal 13%–14%), bebas kontaminasi jamur maupun benda asing, serta pencampuran homogen untuk menjaga stabilitas Protein Kasar (PK), Total Digestible Nutrients (TDN), dan keseimbangan mineral Kalsium-Fosfor. Sebelum dikirim ke kandang mitra atau gudang koperasi, setiap karung dan armada pengangkut ditimbang secara akurat menggunakan Timbangan Elektronik 1.000 Kg (SKHP PG.05.05/2284/VII/2025) serta Timbangan Jembatan 50.000 Kg SONIC A12EK (SKHP PG.05.05/2283/VII/2025) yang disahkan UPT Metrologi Legal Kota Bandung.`,
      `Melalui dukungan badan hukum PT. Sumber Ganda Mekar yang berdiri sejak 2010 dan berstatus PKP resmi (S-00313/SPPKP-CT/KPP.0903/2025), kami melayani baik pembelian partai grosir maupun skema kontrak suplai terjadwal untuk peternakan rakyat, perusahaan feedlot, koperasi susu, hingga pengadaan instansi pemerintah di seluruh Jawa Barat dan nasional.`
    ]
  };
}

function renderConversionBanner(article, position) {
  const locAttr = position === 'mid' ? 'article_mid_cta' : 'article_bottom_cta';
  const badgeText = position === 'mid' ? 'FAST RESPONSE B2B QUOTATION' : 'KONSULTASI & PENAWARAN RESMI PT. SUMBER GANDA MEKAR';
  const headingText = position === 'mid'
    ? 'Butuh Penawaran Harga, Cek Stok, atau Jadwal Timbangan 50 Ton?'
    : 'Siap Bermitra dengan Suplier & Kontraktor Resmi Berstatus PKP?';

  return `<aside class="my-10 border-2 border-[#EB2F33] bg-[#0F172A] p-6 text-white sm:p-8" aria-label="Kotak Konversi WhatsApp B2B">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-4">
      <span class="badge-cert">${badgeText}</span>
      <span class="font-mono text-[11px] uppercase tracking-widest text-white/70">NIB: 9120101121498 • PKP Resmi • Tera 50 Ton</span>
    </div>
    <div class="mt-5 grid items-center gap-6 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <h3 class="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">${headingText}</h3>
        <p class="mt-2.5 text-sm leading-relaxed text-white/80">Hubungi langsung tim Marketing &amp; Operasional kami via WhatsApp. Pesan otomatis menyertakan judul referensi artikel <strong>“${escapeHtml(article.title)}”</strong> untuk mempercepat pengecekan harga grosir dan jadwal operasional.</p>
      </div>
      <div class="flex flex-col gap-2.5 lg:col-span-5">
        ${articleWaBtn({
          agent: 'irwan',
          article,
          location: locAttr,
          cls: 'btn-cta w-full justify-between px-5 py-3.5 text-sm',
          label: `Chat CP. Irwan (${PHONES.irwan.display})`
        })}
        ${articleWaBtn({
          agent: 'uwem',
          article,
          location: locAttr,
          cls: 'btn-outline-light w-full justify-between px-5 py-3.5 text-sm',
          label: `Chat CP. Uwem (${PHONES.uwem.display})`
        })}
        ${articleWaBtn({
          agent: 'kantor',
          article,
          location: locAttr,
          cls: 'btn-outline-light w-full justify-between px-5 py-2.5 text-xs',
          label: `Hotline Kantor (${PHONES.kantor.display})`
        })}
      </div>
    </div>
  </aside>`;
}

function buildArticleHtml(article) {
  const canonicalUrl = `https://sumbergandamekar.com/wawasan/${article.slug}.html`;
  const parentRelHref = `..${article.parentPage}`;
  const clusterArticles = allArticles.filter(a => a.clusterId === article.clusterId && a.id !== article.id);
  // Pick 3 related articles deterministically from the same cluster
  const idxInCluster = allArticles.filter(a => a.clusterId === article.clusterId).findIndex(a => a.id === article.id);
  const related = [];
  for (let i = 0; i < 3 && i < clusterArticles.length; i++) {
    related.push(clusterArticles[(idxInCluster + i) % clusterArticles.length]);
  }

  const sopSection = renderClusterEngineeringSop(article);

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      BASE_ORG_NODE,
      {
        '@type': 'TechArticle',
        '@id': `${canonicalUrl}#article`,
        headline: article.title,
        name: article.title,
        description: article.leadParagraph,
        inLanguage: 'id-ID',
        datePublished: '2026-01-15',
        dateModified: '2026-10-08',
        author: { '@id': 'https://sumbergandamekar.com/#organization' },
        publisher: { '@id': 'https://sumbergandamekar.com/#organization' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        articleSection: article.clusterName,
        keywords: `${article.title}, ${article.kbliCode}, PT Sumber Ganda Mekar, Bandung, Jawa Barat`,
        proficiencyLevel: 'Expert'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://sumbergandamekar.com/' },
          { '@type': 'ListItem', position: 2, name: 'Wawasan Teknis B2B', item: 'https://sumbergandamekar.com/wawasan/' },
          { '@type': 'ListItem', position: 3, name: article.clusterName, item: `https://sumbergandamekar.com/wawasan/#${article.clusterId}` },
          { '@type': 'ListItem', position: 4, name: article.title, item: canonicalUrl }
        ]
      },
      faqSchemaNode(canonicalUrl, article.faqs)
    ]
  };

  const headHtml = head({
    title: `${escapeHtml(article.title)} | PT. Sumber Ganda Mekar`,
    desc: escapeHtml(article.leadParagraph),
    keywords: `${escapeHtml(article.title)}, ${escapeHtml(article.clusterName)}, PT Sumber Ganda Mekar, Bandung, Jawa Barat`,
    canonical: canonicalUrl,
    ogTitle: `${escapeHtml(article.title)} | Spesifikasi Teknis PT. Sumber Ganda Mekar`,
    ogDesc: escapeHtml(article.leadParagraph),
    jsonld,
    basePath: '../',
    ogType: 'article'
  });

  const ctx = {
    division: article.division,
    service: article.serviceSlug,
    msg: article.division === 'pakan' ? 'ransum' : 'scrap',
    kantorMsg: article.division === 'pakan' ? 'pakan' : 'logam'
  };

  const codeStr = String(article.id).padStart(2, '0');

  const body = `
<!-- POSTER ARTICLE HEADER -->
<section class="hero-canvas pt-[68px] sm:pt-[72px] text-white">
  <div class="wrap py-10 sm:py-14 lg:py-16">
    <!-- Breadcrumb Teknis -->
    <nav aria-label="Breadcrumb Teknis" class="mb-6 border-b border-white/20 pb-4 font-mono text-[11px] uppercase tracking-widest text-white/85">
      <ol class="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li><a href="../index.html" class="hover:underline">BERANDA</a></li>
        <li aria-hidden="true">/</li>
        <li><a href="index.html" class="hover:underline">WAWASAN TEKNIS</a></li>
        <li aria-hidden="true">/</li>
        <li><a href="index.html#${article.clusterId}" class="hover:underline">${escapeHtml(article.clusterName)}</a></li>
        <li aria-hidden="true">/</li>
        <li class="font-bold text-white">[${escapeHtml(article.kbliCode)}]</li>
      </ol>
    </nav>

    <div class="flex flex-wrap items-center gap-2.5">
      <span class="badge-cert">DOKUMEN TEKNIS #${codeStr}</span>
      <span class="border border-white/40 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest">${escapeHtml(article.readTime)}</span>
      <span class="border border-white/40 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest">Terverifikasi Tim Teknis PT. Sumber Ganda Mekar — 2026</span>
    </div>

    <h1 class="mt-6 max-w-5xl font-display text-3xl uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
      ${escapeHtml(article.title)}
    </h1>

    <div class="mt-8 grid gap-4 border-t border-white/25 pt-5 font-mono text-xs uppercase tracking-widest text-white/90 sm:grid-cols-3">
      <div><span class="text-white/60 block text-[10px]">Divisi Operasional:</span><strong>${escapeHtml(article.parentLabel)}</strong></div>
      <div><span class="text-white/60 block text-[10px]">Cakupan Wilayah Layanan:</span><strong>${escapeHtml(article.focusArea)}</strong></div>
      <div><span class="text-white/60 block text-[10px]">Verifikasi Instrumen &amp; Pajak:</span><strong>SONIC 50 Ton • PKP Resmi</strong></div>
    </div>
  </div>
</section>

<!-- MAIN ARTICLE CONTAINER -->
<div class="bg-[#F8FAFC] py-14 lg:py-20">
  <div class="wrap grid gap-12 lg:grid-cols-12">

    <!-- ARTICLE BODY (8 COLS) -->
    <article class="min-w-0 lg:col-span-8">

      <!-- GEO CITE-READY EXECUTIVE SUMMARY BOX -->
      <div class="border-2 border-slate-900 bg-white p-6 sm:p-8">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[RINGKASAN EKSEKUTIF &amp; FAKTA TEKNIS — GEO CITE-READY]</p>
          <span class="tag-mono">[TERVERIFIKASI 2026]</span>
        </div>
        <ul class="mt-5 space-y-3 text-base font-medium leading-relaxed text-slate-800">
          ${article.summaryBullets.map((b, idx) => `<li class="flex items-start gap-3"><span class="mt-0.5 shrink-0 font-mono text-xs font-bold text-[#EB2F33]">[0${idx + 1}]</span><span>${escapeHtml(b)}</span></li>`).join('\n          ')}
        </ul>
        <div class="mt-5 border-t border-slate-200 pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-widest text-slate-500">
          Otoritas Data: PT. Sumber Ganda Mekar • NIB: 9120101121498 • PKP: S-00313/SPPKP-CT/KPP.0903/2025 • SKHP Tera: PG.05.05/2283/VII/2025
        </div>
      </div>

      <!-- LEAD PARAGRAPH -->
      <p class="mt-8 text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl">
        ${escapeHtml(article.leadParagraph)}
      </p>

      <!-- SECTION 1 -->
      <section class="mt-10 border-t border-slate-200 pt-8">
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[01] ANALISIS TEKNIS &amp; SPESIFIKASI B2B</p>
        <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">${escapeHtml(article.sections[0].heading)}</h2>
        <div class="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
          ${article.sections[0].paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('\n          ')}
        </div>
      </section>

      <!-- MID-ARTICLE CONVERSION BANNER -->
      ${renderConversionBanner(article, 'mid')}

      <!-- TECHNICAL SPECIFICATION TABLE -->
      <section class="mt-10 border-t border-slate-200 pt-8">
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[02] TABEL DATA &amp; MATRIKS SPESIFIKASI TEKNIS</p>
        <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">${escapeHtml(article.tableTitle)}</h2>
        <p class="mt-2 text-sm text-slate-600">Data teknis di bawah ini digunakan sebagai rujukan standar pengadaan B2B, estimasi logistik, dan verifikasi lapangan di PT. Sumber Ganda Mekar:</p>
        <div class="mt-5 overflow-x-auto border border-slate-900 bg-white">
          <table class="w-full border-collapse text-left text-sm">
            <thead>
              <tr class="border-b border-slate-900 bg-slate-900 font-mono text-[11px] uppercase tracking-wider text-white">
                ${article.tableHeaders.map(th => `<th class="border-r border-white/15 px-4 py-3.5 last:border-r-0">${escapeHtml(th)}</th>`).join('')}
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 font-mono text-xs">
              ${article.tableRows.map((row, rIdx) => `<tr class="${rIdx % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-white'} hover:bg-sky-50/50">
                ${row.map((cell, cIdx) => `<td class="border-r border-slate-200 px-4 py-3.5 last:border-r-0 ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}">${escapeHtml(cell)}</td>`).join('')}
              </tr>`).join('\n              ')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 2 (AND ADDITIONAL SECTIONS IF ANY) -->
      ${article.sections.slice(1).map((sec, idx) => `<section class="mt-10 border-t border-slate-200 pt-8">
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[0${idx + 3}] IMPLEMENTASI &amp; OPERASIONAL LAPANGAN</p>
        <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">${escapeHtml(sec.heading)}</h2>
        <div class="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
          ${sec.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('\n          ')}
        </div>
      </section>`).join('\n')}

      <!-- CLUSTER ENGINEERING & SOP VERIFICATION SECTION -->
      <section class="mt-10 border-t border-slate-200 pt-8">
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[0${article.sections.length + 2}] SOP VERIFIKASI MUTU, TIMBANGAN 50 TON &amp; KEPATUHAN PKP</p>
        <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">${escapeHtml(sopSection.heading)}</h2>
        <div class="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
          ${sopSection.paragraphs.map(p => `<p>${p}</p>`).join('\n          ')}
        </div>
      </section>

      <!-- ARTICLE SPECIFIC FAQ SECTION (3 QUESTIONS) -->
      <section id="faq-artikel" class="mt-12 border-t border-slate-900 pt-8">
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[FAQ SPESIFIK ARTIKEL]</p>
        <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Pertanyaan yang Sering Diajukan (B2B FAQ)</h2>
        <div class="mt-6 divide-y divide-slate-200 border border-slate-200 bg-white">
          ${article.faqs.map((f, i) => `<div class="p-6">
            <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[Q-0${i + 1}]</p>
            <h3 class="mt-1.5 text-lg font-bold text-slate-900">${escapeHtml(f.q)}</h3>
            <p class="mt-2.5 text-sm leading-relaxed text-slate-600">${escapeHtml(f.a)}</p>
          </div>`).join('\n          ')}
        </div>
      </section>

      <!-- BOTTOM CONVERSION BANNER -->
      ${renderConversionBanner(article, 'bottom')}

    </article>

    <!-- SIDEBAR: CORPORATE CREDENTIALS & INTERNAL LINKS (4 COLS) -->
    <aside class="min-w-0 space-y-8 lg:col-span-4" aria-label="Informasi Korporat & Artikel Terkait">

      <!-- PARENT SERVICE CARD -->
      <div class="border border-slate-900 bg-white p-6">
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[HALAMAN LAYANAN UTAMA]</p>
        <h3 class="mt-2 text-xl font-extrabold text-slate-900">${escapeHtml(article.parentLabel)}</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">Lihat spesifikasi layanan lengkap, alur transaksi B2B, dan formulir penawaran cepat pada halaman divisi utama kami.</p>
        <a href="${parentRelHref}" class="btn-dark mt-5 w-full">Buka ${escapeHtml(article.parentLabel)} →</a>
      </div>

      <!-- LEGALITAS & TERA LEDGER SUMMARY -->
      <div class="border border-slate-200 bg-white">
        <div class="bg-slate-900 px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-white">
          Data Verifikasi Korporat
        </div>
        <dl class="divide-y divide-slate-200 font-mono text-xs">
          <div class="px-5 py-3"><dt class="text-[10px] uppercase text-slate-500">Perseroan</dt><dd class="mt-0.5 font-bold text-slate-900">PT. Sumber Ganda Mekar (Est. 2010)</dd></div>
          <div class="px-5 py-3"><dt class="text-[10px] uppercase text-slate-500">NIB &amp; KBLI</dt><dd class="mt-0.5 font-bold text-slate-900">9120101121498 (20 KBLI Aktif)</dd></div>
          <div class="px-5 py-3"><dt class="text-[10px] uppercase text-slate-500">Status Pajak PKP</dt><dd class="mt-0.5 font-bold text-slate-900">S-00313/SPPKP-CT/KPP.0903/2025</dd></div>
          <div class="px-5 py-3"><dt class="text-[10px] uppercase text-slate-500">Tera Timbangan 50 Ton</dt><dd class="mt-0.5 font-bold text-slate-900">SONIC A12EK — PG.05.05/2283/VII/2025</dd></div>
          <div class="px-5 py-3"><dt class="text-[10px] uppercase text-slate-500">Gudang &amp; Timbangan 50T</dt><dd class="mt-0.5 font-bold text-slate-900">Jl. Raya Gedebage No. 95, Bandung</dd></div>
          <div class="px-5 py-3"><dt class="text-[10px] uppercase text-slate-500">Pabrik Pakan &amp; Agribisnis</dt><dd class="mt-0.5 font-bold text-slate-900">Cimekar, Kec. Cileunyi, Kab. Bandung</dd></div>
        </dl>
      </div>

      <!-- RELATED ARTICLES IN SAME CLUSTER -->
      <div class="border border-slate-200 bg-white p-6">
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-[#2C99D6]">[ARTIKEL TERKAIT — ${escapeHtml(article.clusterId.toUpperCase())}]</p>
        <h3 class="mt-2 text-lg font-extrabold text-slate-900">Rujukan Teknis Satu Klaster</h3>
        <div class="mt-4 divide-y divide-slate-200 border-t border-slate-200">
          ${related.map(rel => `<a href="${rel.slug}.html" class="group block py-4">
            <span class="font-mono text-[10px] font-bold uppercase tracking-widest text-[#2C99D6]">[ART-${String(rel.id).padStart(2, '0')} • ${escapeHtml(rel.kbliCode)}]</span>
            <p class="mt-1 font-bold leading-snug text-slate-900 group-hover:text-[#2C99D6]">${escapeHtml(rel.title)}</p>
            <span class="mt-1.5 inline-block font-mono text-[11px] uppercase tracking-widest text-[#EB2F33]">Baca Artikel →</span>
          </a>`).join('\n          ')}
        </div>
        <a href="index.html" class="btn-outline mt-4 w-full text-xs">Indeks 45 Artikel Wawasan Teknis →</a>
      </div>

    </aside>

  </div>
</div>
`;

  return page({ headHtml, active: 'wawasan', body, ctx, basePath: '../' });
}

function buildHubHtml() {
  const canonicalUrl = 'https://sumbergandamekar.com/wawasan/';
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      BASE_ORG_NODE,
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collection`,
        url: canonicalUrl,
        name: 'Pusat Wawasan & Spesifikasi Teknis B2B — PT. Sumber Ganda Mekar',
        description: 'Ensiklopedia & tabel spesifikasi teknis B2B (45 Artikel): harga besi tua/scrap Timbangan 50 Ton, tabel berat WF/H-Beam SNI, spesifikasi tiang listrik/telepon, konstruksi baja gudang, serta formulasi ransum & konsentrat pakan ternak Bandung.',
        inLanguage: 'id-ID',
        isPartOf: { '@id': 'https://sumbergandamekar.com/#website' },
        publisher: { '@id': 'https://sumbergandamekar.com/#organization' },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: allArticles.length,
          itemListElement: allArticles.map((art, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: art.title,
            url: `https://sumbergandamekar.com/wawasan/${art.slug}.html`
          }))
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://sumbergandamekar.com/' },
          { '@type': 'ListItem', position: 2, name: 'Pusat Wawasan & Spesifikasi Teknis B2B', item: canonicalUrl }
        ]
      }
    ]
  };

  const headHtml = head({
    title: 'Pusat Wawasan &amp; Spesifikasi Teknis B2B (45 Rujukan Industri) | PT. Sumber Ganda Mekar',
    desc: 'Pusat pengetahuan teknis B2B PT. Sumber Ganda Mekar: 45 panduan spesifikasi besi tua/scrap Timbangan 50 Ton, tabel berat baja WF/H-Beam SNI, tiang listrik/telepon, konstruksi baja, dan pakan ternak di Bandung.',
    keywords: 'spesifikasi teknis besi wf, tabel tiang listrik dan, timbangan jembatan 50 ton bandung, harga besi tua pabrik, konstruksi baja gudang bandung, ransum konsentrat pakan ternak bandung',
    canonical: canonicalUrl,
    ogTitle: 'Pusat Wawasan &amp; Spesifikasi Teknis B2B (45 Artikel) | PT. Sumber Ganda Mekar',
    ogDesc: 'Rujukan lengkap tabel berat besi SNI, prosedur Timbangan Jembatan 50 Ton SONIC, spesifikasi tiang listrik/telepon, konstruksi baja, &amp; formulasi pakan ternak.',
    jsonld,
    basePath: '../'
  });

  const ctx = {
    division: 'general',
    service: 'wawasan_teknis_hub',
    msg: 'general',
    kantorMsg: 'general'
  };

  const filterButtons = [
    `<button type="button" data-cluster-filter="all" class="cluster-tab border border-slate-900 bg-slate-900 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition">Semua Klaster (${allArticles.length})</button>`,
    ...CLUSTERS.map((c, idx) =>
      `<button type="button" data-cluster-filter="${c.id}" class="cluster-tab border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-slate-800 hover:border-slate-900 transition">[0${idx + 1}] ${escapeHtml(c.shortLabel)} (${c.count})</button>`
    )
  ].join('\n        ');

  const cardsHtml = allArticles.map(art => {
    const code = String(art.id).padStart(2, '0');
    const searchBlob = `${art.id} ${art.title} ${art.kbliCode} ${art.clusterName} ${art.leadParagraph}`.toLowerCase();
    return `<article data-article-card data-cluster="${art.clusterId}" data-search="${escapeHtml(searchBlob)}" class="flex min-w-0 flex-col justify-between bg-white p-6 sm:p-7">
        <div>
          <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <span class="font-mono text-xs font-bold tracking-widest text-[#2C99D6]">[ART-${code}]</span>
            <span class="tag-mono truncate">[${escapeHtml(art.kbliCode)}]</span>
          </div>
          <p class="mt-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">${escapeHtml(art.clusterName)}</p>
          <h2 class="mt-1.5 text-xl font-bold leading-snug tracking-tight text-slate-900">
            <a href="${art.slug}.html" class="hover:text-[#2C99D6] transition-colors">${escapeHtml(art.title)}</a>
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">${escapeHtml(art.leadParagraph)}</p>
        </div>
        <div class="mt-6 border-t border-slate-100 pt-4">
          <div class="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
            <span class="text-slate-500">${escapeHtml(art.readTime)}</span>
            <a href="${art.slug}.html" class="font-bold text-[#EB2F33] hover:text-[#C81E22]">Baca Spesifikasi →</a>
          </div>
        </div>
      </article>`;
  }).join('\n');

  const body = `
<!-- HERO HUB WAWASAN -->
<section class="hero-canvas pt-[68px] sm:pt-[72px] text-white">
  <div class="wrap py-10 sm:py-14 lg:py-18">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-4">
      <p class="font-mono text-xs uppercase tracking-widest text-white/90">BERANDA / PUSAT WAWASAN &amp; SPESIFIKASI TEKNIS B2B</p>
      <div class="flex flex-wrap gap-2">
        <span class="badge-cert">45 ARTIKEL TEKNIS TERVERIFIKASI</span>
        <span class="badge-cert">PKP &amp; TERA 50 TON RESMI</span>
      </div>
    </div>

    <h1 class="hero-title my-6 sm:my-10">
      <span class="block">Wawasan &amp;</span>
      <span class="block">Spesifikasi B2B</span>
    </h1>

    <div class="grid items-end gap-8 border-t border-white/25 pt-6 lg:grid-cols-12">
      <p class="text-base sm:text-xl font-medium leading-relaxed text-white lg:col-span-7">
        Ensiklopedia rekayasa &amp; pengadaan B2B PT. Sumber Ganda Mekar: 45 panduan spesifikasi besi tua/scrap Timbangan 50 Ton SONIC, tabel berat besi WF/H-Beam SNI, tiang listrik/telepon, konstruksi baja gudang, hingga formulasi ransum &amp; konsentrat pakan ternak.
      </p>
      <div class="grid grid-cols-2 gap-4 border border-white/25 bg-white/10 p-4 font-mono uppercase lg:col-span-5">
        <div>
          <p class="font-display text-3xl sm:text-4xl leading-none">45</p>
          <p class="mt-1 text-[10px] tracking-widest text-white/80">Dokumen Spesifikasi &amp; Tabel</p>
        </div>
        <div class="border-l border-white/20 pl-4">
          <p class="font-display text-3xl sm:text-4xl leading-none">5 KLASTER</p>
          <p class="mt-1 text-[10px] tracking-widest text-white/80">20 KBLI Resmi Terintegrasi</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FILTER & LIVE SEARCH BAR -->
<section class="bg-[#F8FAFC] py-14 lg:py-20">
  <div class="wrap">
    <div class="border border-slate-900 bg-white p-6 sm:p-8">
      <div class="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-7">
          <label for="wawasan-search-input" class="field-label">Cari Spesifikasi Teknis, Tabel Ukuran, atau Kode KBLI (Live Search)</label>
          <input
            type="search"
            id="wawasan-search-input"
            placeholder="Ketik kata kunci: WF, H-Beam, Timbangan 50 Ton, Tiang Listrik daN, Gudang, Konsentrat Sapi..."
            class="field mt-1"
          />
        </div>
        <div class="flex items-center justify-between border-t border-slate-200 pt-4 font-mono text-xs uppercase tracking-widest text-slate-600 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <span>Menampilkan: <strong id="wawasan-count-label" class="text-slate-900">${allArticles.length} Artikel</strong></span>
          <button type="button" id="wawasan-reset-btn" class="font-bold text-[#EB2F33] hover:underline">Reset Filter</button>
        </div>
      </div>

      <div class="mt-6 border-t border-slate-200 pt-5">
        <p class="mb-3 font-mono text-[11px] uppercase tracking-widest text-slate-500">Filter Berdasarkan Klaster Divisi:</p>
        <div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter Klaster Artikel">
          ${filterButtons}
        </div>
      </div>
    </div>

    <!-- 45 ARTICLES SWISS GRID -->
    <div id="wawasan-grid" class="mt-10 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
      ${cardsHtml}
    </div>

    <div id="wawasan-empty-state" class="hidden border border-slate-300 bg-white p-12 text-center">
      <p class="font-mono text-xs uppercase tracking-widest text-[#EB2F33]">[PENCARIAN TIDAK DITEMUKAN]</p>
      <p class="mt-2 text-xl font-bold text-slate-900">Tidak ada artikel yang cocok dengan kata kunci tersebut.</p>
      <p class="mt-1 text-sm text-slate-600">Silakan klik tombol Reset Filter atau hubungi langsung CP. Irwan / CP. Uwem untuk konsultasi spesifikasi khusus.</p>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('wawasan-search-input');
  var clusterBtns = document.querySelectorAll('[data-cluster-filter]');
  var cards = document.querySelectorAll('[data-article-card]');
  var countLabel = document.getElementById('wawasan-count-label');
  var resetBtn = document.getElementById('wawasan-reset-btn');
  var emptyState = document.getElementById('wawasan-empty-state');
  var activeCluster = 'all';

  function applyFilter() {
    var q = (searchInput && searchInput.value ? searchInput.value : '').trim().toLowerCase();
    var visible = 0;
    cards.forEach(function (card) {
      var c = card.getAttribute('data-cluster');
      var s = card.getAttribute('data-search') || '';
      var matchCluster = activeCluster === 'all' || c === activeCluster;
      var matchQuery = !q || s.indexOf(q) !== -1;
      if (matchCluster && matchQuery) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });
    if (countLabel) countLabel.textContent = visible + ' Artikel';
    if (emptyState) emptyState.classList.toggle('hidden', visible > 0);
  }

  function setCluster(clusterId) {
    activeCluster = clusterId;
    clusterBtns.forEach(function (btn) {
      var isCurrent = btn.getAttribute('data-cluster-filter') === clusterId;
      btn.className = isCurrent
        ? 'cluster-tab border border-slate-900 bg-slate-900 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition'
        : 'cluster-tab border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-slate-800 hover:border-slate-900 transition';
    });
    applyFilter();
  }

  clusterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setCluster(btn.getAttribute('data-cluster-filter'));
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (searchInput) searchInput.value = '';
      setCluster('all');
    });
  }

  // Check URL hash on load (e.g. #klaster-1)
  var hash = window.location.hash.replace('#', '');
  if (hash && /^klaster-[1-5]$/.test(hash)) {
    setCluster(hash);
  }
});
</script>
`;

  return page({ headHtml, active: 'wawasan', body, ctx, basePath: '../' });
}

function updateSitemapXml(rootDir) {
  const today = '2026-10-08';
  const mainUrls = [
    { loc: 'https://sumbergandamekar.com/', priority: '1.0', changefreq: 'weekly' },
    { loc: 'https://sumbergandamekar.com/konstruksi-logam.html', priority: '0.95', changefreq: 'weekly' },
    { loc: 'https://sumbergandamekar.com/pakan-ternak.html', priority: '0.95', changefreq: 'weekly' },
    { loc: 'https://sumbergandamekar.com/wawasan/', priority: '0.90', changefreq: 'weekly' }
  ];

  const articleUrls = allArticles.map(art => ({
    loc: `https://sumbergandamekar.com/wawasan/${art.slug}.html`,
    priority: '0.85',
    changefreq: 'monthly'
  }));

  const allUrls = [...mainUrls, ...articleUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
  console.log('updated sitemap.xml with', allUrls.length, 'URLs');
}

function updateLlmsFiles(rootDir) {
  const llmsPath = path.join(rootDir, 'llms.txt');
  const llmsFullPath = path.join(rootDir, 'llms-full.txt');

  const clusterIndexMarkdown = CLUSTERS.map(c => {
    const arts = allArticles.filter(a => a.clusterId === c.id);
    const lines = arts.map(a => `- [#${String(a.id).padStart(2, '0')} ${a.title}](https://sumbergandamekar.com/wawasan/${a.slug}.html) — \`${a.kbliCode}\``).join('\n');
    return `### ${c.fullName}\n${lines}`;
  }).join('\n\n');

  // Update llms.txt (keep core header, replace or append Wawasan index)
  let llmsContent = fs.existsSync(llmsPath) ? fs.readFileSync(llmsPath, 'utf8') : '';
  const marker = '## Pusat Wawasan & Spesifikasi Teknis B2B (45 Artikel)';
  if (llmsContent.includes(marker)) {
    llmsContent = llmsContent.split(marker)[0].trimEnd();
  }
  llmsContent += `\n\n${marker}\n- Hub Utama Wawasan Teknis: https://sumbergandamekar.com/wawasan/\n\n${clusterIndexMarkdown}\n`;
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');

  // Update llms-full.txt with detailed summaries of all 45 articles
  let llmsFullContent = fs.existsSync(llmsFullPath) ? fs.readFileSync(llmsFullPath, 'utf8') : '';
  const fullMarker = '## ENSIKLOPEDIA & INDEKS 45 ARTIKEL SPESIFIKASI TEKNIS B2B (/wawasan/)';
  if (llmsFullContent.includes(fullMarker)) {
    llmsFullContent = llmsFullContent.split(fullMarker)[0].trimEnd();
  }
  const detailedArticlesBlock = allArticles.map(a => {
    return `### [${String(a.id).padStart(2, '0')}] ${a.title}
- **URL**: https://sumbergandamekar.com/wawasan/${a.slug}.html
- **Klaster**: ${a.clusterName} (${a.kbliCode})
- **Ringkasan Eksekutif**:
${a.summaryBullets.map(b => `  - ${b}`).join('\n')}`;
  }).join('\n\n');

  llmsFullContent += `\n\n${fullMarker}\nHub Indeks: https://sumbergandamekar.com/wawasan/\n\n${detailedArticlesBlock}\n`;
  fs.writeFileSync(llmsFullPath, llmsFullContent, 'utf8');
  console.log('updated llms.txt & llms-full.txt with 45 technical articles index');
}

function main() {
  const rootDir = path.resolve(__dirname, '..');
  const wawasanDir = path.join(rootDir, 'wawasan');
  if (!fs.existsSync(wawasanDir)) {
    fs.mkdirSync(wawasanDir, { recursive: true });
  }

  if (allArticles.length !== 45) {
    throw new Error(`Expected 45 articles, found ${allArticles.length}`);
  }

  // 1. Write /wawasan/index.html
  const hubHtml = buildHubHtml();
  fs.writeFileSync(path.join(wawasanDir, 'index.html'), hubHtml, 'utf8');
  console.log('generated wawasan/index.html (', hubHtml.length, 'bytes )');

  // 2. Write all 45 /wawasan/[slug].html files
  let minWords = Infinity;
  let maxWords = 0;
  for (const article of allArticles) {
    const html = buildArticleHtml(article);
    const outPath = path.join(wawasanDir, `${article.slug}.html`);
    fs.writeFileSync(outPath, html, 'utf8');

    // Count visible text words inside <article>
    const textOnly = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const wordCount = textOnly.split(' ').length;
    if (wordCount < minWords) minWords = wordCount;
    if (wordCount > maxWords) maxWords = wordCount;
  }
  console.log(`generated 45 article pages in /wawasan/ (word count range: ${minWords} - ${maxWords} words per page)`);

  // 3. Update sitemap.xml, llms.txt, llms-full.txt
  updateSitemapXml(rootDir);
  updateLlmsFiles(rootDir);
}

main();
