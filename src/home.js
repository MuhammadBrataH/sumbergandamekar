const {
  ARROW, PHONES, PHOTOS, BASE_ORG_NODE, faqSchemaNode,
  wa, waPair, head, hero, sectionHead, priceCatalogSection, specSheet, quoteForm, wawasanSection, faqSection, page
} = require('./lib');

const allArticles = [
  ...require('../data/articles-cluster-1'),
  ...require('../data/articles-cluster-2'),
  ...require('../data/articles-cluster-3'),
  ...require('../data/articles-cluster-4'),
  ...require('../data/articles-cluster-5')
];
const featuredHomeArticles = [1, 11, 20, 28, 36, 37].map(id => allArticles.find(a => a.id === id));

const ctx = {
  division: 'general', service: 'konsultasi_umum', heroService: 'konsultasi_korporat',
  msg: 'general', kantorMsg: 'general',
  fabService: 'floating_widget_chat',
  footerService: 'footer_contact'
};

const homeFaqs = [
  {
    tag: 'PAJAK & TENDER PKP',
    q: 'Apakah PT. Sumber Ganda Mekar berstatus PKP dan bisa menerbitkan Faktur Pajak PPN untuk tender/perusahaan?',
    a: 'Ya. PT. Sumber Ganda Mekar berstatus Pengusaha Kena Pajak (PKP) resmi dengan perizinan berusaha berbasis risiko (NIB 20 KBLI Aktif) serta pengesahan Kementerian Hukum RI yang terverifikasi. Kami siap menerbitkan Faktur Pajak PPN resmi untuk tender pemerintah, BUMN, maupun pengadaan korporasi swasta.'
  },
  {
    tag: 'TERA METROLOGI 50 TON',
    q: 'Bagaimana jaminan keakuratan timbangan saat transaksi jual beli besi tua (scrap) partai besar?',
    a: 'Seluruh transaksi ditimbang menggunakan Timbangan Jembatan Elektronik kapasitas 50.000 Kg (50 Ton) Merek SONIC Tipe A12EK serta Timbangan Elektronik 1.000 Kg yang telah lulus uji dan ditera ulang resmi oleh UPT Metrologi Legal Dinas Perdagangan dan Perindustrian Kota Bandung. Penjual maupun pembeli menyaksikan angka indikator digital secara terbuka.'
  },
  {
    tag: 'KAPASITAS & MOQ B2B',
    q: 'Berapa kapasitas minimal pemesanan tiang listrik, rangka beton, konstruksi baja, dan pakan ternak?',
    a: 'Kami melayani transaksi B2B partai besar dan pengadaan proyek: penerimaan/penjualan besi tua & besi baru skala truk/tronton, suplai tiang listrik/telepon dan rangka beton siap pakai untuk proyek kawasan/infrastruktur, kontrak konstruksi baja gudang/pabrik, serta pengiriman grosir ransum & konsentrat pakan ternak untuk peternakan dan koperasi.'
  },
  {
    tag: 'LOKASI GUDANG & PABRIK',
    q: 'Di mana lokasi gudang penimbangan besi dan pabrik pakan ternak PT. Sumber Ganda Mekar?',
    a: 'Kantor pusat dan Gudang Timbangan Jembatan 50 Ton berlokasi di Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung 40294. Sedangkan unit operasional agribisnis, kebun hijauan, dan pabrik pakan ternak berlokasi di Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623.'
  },
  {
    tag: 'PIC FAST RESPONSE WA',
    q: 'Siapa kontak resmi (PIC) untuk penawaran harga cepat via WhatsApp?',
    a: 'Untuk penawaran harga B2B cepat, pengecekan harga besi harian, jadwal penimbangan 50 ton, atau konsultasi proyek, hubungi langsung PIC Marketing & Operasional kami: CP. Uwem (0823-1818-8863) melalui tombol WhatsApp di website ini.',
    withCta: true
  }
];

const jsonld = {
  '@context': 'https://schema.org',
  '@graph': [
    BASE_ORG_NODE,
    {
      '@type': 'WebSite',
      '@id': 'https://sumbergandamekar.com/#website',
      url: 'https://sumbergandamekar.com/',
      name: 'PT. Sumber Ganda Mekar',
      inLanguage: 'id-ID',
      publisher: { '@id': 'https://sumbergandamekar.com/#organization' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://sumbergandamekar.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://sumbergandamekar.com/' }
      ]
    },
    {
      '@type': 'OfferCatalog',
      '@id': 'https://sumbergandamekar.com/#offercatalog',
      name: '5 Lini Bisnis Utama PT. Sumber Ganda Mekar',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jual Beli Besi Tua (Scrap) & Besi Baru (KBLI 46796)',
            url: 'https://sumbergandamekar.com/konstruksi-logam#scrap',
            description: 'Jual beli besi tua/scrap pabrik, mesin industri, alat berat, dan stok besi baru partai besar dengan Timbangan Jembatan 50 Ton SONIC Tera Resmi.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rangka Beton & Struktur Logam Siap Pakai',
            url: 'https://sumbergandamekar.com/konstruksi-logam#rangka',
            description: 'Penyediaan rangka beton bertulang dan struktur logam presisi siap pakai untuk proyek pengecoran, gudang, dan bangunan komersial.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Suplai Tiang Listrik & Tiang Telepon',
            url: 'https://sumbergandamekar.com/konstruksi-logam#tiang',
            description: 'Pengadaan tiang listrik beton/logam dan tiang telepon standar proyek untuk jaringan listrik, telekomunikasi, dan penerangan jalan di Jawa Barat & Indonesia.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Konstruksi Baja, Gedung & Jalan (KBLI 41011–41019 & 42101)',
            url: 'https://sumbergandamekar.com/konstruksi-logam#konstruksi',
            description: 'Kontraktor fabrikasi dan instalasi konstruksi baja gudang, pabrik, jembatan, gedung komersial, dan jalan raya berstatus PKP resmi.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pabrik Ransum, Konsentrat Pakan Ternak & Kompos Organik (KBLI 10801, 10802, 01191 & 38212)',
            url: 'https://sumbergandamekar.com/pakan-ternak',
            description: 'Produsen langsung ransum makanan hewan, konsentrat sapi potong/perah/domba/unggas, tanaman pakan ternak, dan kompos organik di Gedebage & Cileunyi Bandung.'
          }
        }
      ]
    },
    faqSchemaNode('https://sumbergandamekar.com/', homeFaqs)
  ]
};

const headHtml = head({
  title: 'PT. Sumber Ganda Mekar | Jual Beli Besi Tua/Baru, Konstruksi Baja, Tiang Listrik &amp; Pakan Ternak Bandung',
  desc: 'Mitra B2B resmi di Bandung sejak 2010 (Perusahaan PKP Resmi). Melayani jual beli besi tua/scrap partai besar (Timbangan Jembatan 50 Ton Resmi), rangka beton, tiang listrik/telp, konstruksi baja, &amp; produsen pakan ternak. Hubungi CP. Uwem (0823-1818-8863).',
  keywords: 'PT Sumber Ganda Mekar, harga besi tua bandung, jual beli besi tua bandung, timbangan 50 ton gedebage, rangka beton logam, suplier tiang listrik telepon, konstruksi baja bandung, pabrik pakan ternak bandung',
  canonical: 'https://sumbergandamekar.com/',
  ogTitle: 'PT. Sumber Ganda Mekar | Jual Beli Besi Tua/Baru, Konstruksi Baja, Tiang Listrik &amp; Pakan Ternak Bandung',
  ogDesc: 'Mitra B2B resmi di Bandung sejak 2010 (Perusahaan PKP Resmi). Melayani jual beli besi tua/scrap partai besar (Timbangan Jembatan 50 Ton Resmi), rangka beton, tiang listrik/telp, konstruksi baja, &amp; produsen pakan ternak.',
  jsonld
});

const row = (n, name, meta, href, light) =>
  `<a href="${href}" class="group flex items-baseline gap-4 border-t ${light ? 'border-white/25 hover:bg-white/10' : 'border-slate-200 hover:bg-slate-50'} px-1 py-3.5">
            <span class="font-mono text-xs font-bold ${light ? 'text-white' : 'text-[#2C99D6]'}">${n}</span>
            <span class="flex-1 font-semibold leading-snug">${name}</span>
            <span class="hidden font-mono text-[11px] uppercase tracking-widest ${light ? 'text-white/80' : 'text-slate-500'} sm:inline">${meta}</span>
            <span class="${light ? 'text-white/70 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'}">→</span>
          </a>`;

const stat = (v, l, n) =>
  `<div class="min-w-0 border-t border-slate-900 pt-4 pr-2">
        <p class="whitespace-nowrap font-display text-4xl leading-none text-slate-900 xl:text-5xl">${v}</p>
        <p class="mt-3 font-mono text-[11px] uppercase leading-snug tracking-widest text-slate-500">${l}</p>
        <p class="mt-1 text-sm text-slate-600">${n}</p>
      </div>`;

const mgmt = [
  ['Pendiri &amp; Komisaris', 'H. Maman Suherman'],
  ['Komisaris Utama', 'Hj. Teti Wenti'],
  ['Direktur Utama', 'Hj. Nunung, S.Pd.'],
  ['Direktur', 'H. Ecep Mutiara &amp; H. Sumarsana'],
  ['Marketing &amp; Administrasi', 'CP. Uwem (0823-1818-8863)'],
  ['Purchasing', 'Rochendi Nurma'],
  ['Operasional', 'Erianto MY &amp; Yadi Mulyadi'],
  ['Tenaga Ahli', 'Iyep Rohman']
];

const body = `
${hero({
  title: ['Mitra Tangguh', 'Baja, Logam &amp;', 'Agribisnis'],
  sub: 'Pusat jual beli besi tua/baru partai besar, rangka beton/logam, tiang listrik/telepon, konstruksi baja, serta pabrik pakan ternak di Bandung — dilengkapi Timbangan Jembatan 50 Ton Tera Resmi.',
  metrics: [
    ['50.000 KG', 'Timbangan Jembatan SONIC — Tera Resmi'],
    ['PKP RESMI', 'Siap Terbitkan Faktur Pajak PPN'],
    ['20 KBLI', 'Perizinan Usaha Industri &amp; Konstruksi'],
    ['RP 2 M', 'Modal Dasar Perseroan Resmi']
  ],
  ctx,
  heroImg: PHOTOS.konstruksiBaja,
  heroCaption: 'Konstruksi Baja, Material Logam & Timbangan 50 Ton — Bandung',
  subImg1: PHOTOS.scrap,
  subLabel1: 'Besi Tua (Scrap) & Besi Baru',
  subImg2: PHOTOS.heroPakan,
  subLabel2: 'Pabrik Ransum & Pakan Ternak',
  catalogAnchor: '#katalog-harga'
})}

<!-- [01] PROFIL & VISUAL FASILITAS -->
<section class="bg-[#F8FAFC] py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('01', 'Profil Perusahaan Bandung', 'Berdiri sejak 2010.<br />Berizin lengkap.<br />Bertimbangan resmi.')}
    <div class="grid gap-12 lg:grid-cols-12">
      <div class="space-y-5 text-lg leading-relaxed text-slate-700 lg:col-span-5">
        <p>PT. Sumber Ganda Mekar berdiri sejak 19 April 2010 dengan Modal Dasar Rp 2.000.000.000,- dan mengantongi 20 KBLI aktif yang mencakup perdagangan besi &amp; logam, konstruksi baja, gedung &amp; jalan, serta industri pakan ternak.</p>
        <p>Mitra terpercaya kebutuhan industri, konstruksi, dan peternakan di Bandung &amp; Jawa Barat — berkantor pusat di Jl. Raya Gedebage No. 95, Kota Bandung, lengkap dengan status Pengusaha Kena Pajak (PKP) resmi untuk tender dan pengadaan korporasi.</p>
      </div>
      <div class="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-7 lg:grid-cols-4">
        ${stat('2010', 'Tahun Berdiri', 'Sejak 19 April 2010')}
        ${stat('RP 2 M', 'Modal Dasar', 'Perseroan Terbatas Resmi')}
        ${stat('20', 'KBLI Aktif', 'Logam, Konstruksi &amp; Pakan')}
        ${stat('50 TON', 'Timbangan Jembatan', 'Tera UPT Metrologi Legal')}
      </div>
    </div>

    <!-- Galeri Highlight Produk & Operasional -->
    <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="group border border-slate-200 bg-white">
        <div class="img-card-wrap">
          <img src="${PHOTOS.scrap}" alt="Jual Beli Besi Tua & Scrap Pabrik Partai Besar" class="img-card" loading="lazy" />
          <span class="img-overlay-badge">Besi Tua (Scrap) &amp; Besi Baru</span>
        </div>
        <div class="p-4">
          <p class="font-bold text-slate-900">Akuisisi Besi Tua &amp; Stok Besi</p>
          <p class="mt-1 text-xs text-slate-600">Terima bongkaran pabrik, mesin, alat berat &amp; stok WF/Beton SNI.</p>
        </div>
      </div>
      <div class="group border border-slate-200 bg-white">
        <div class="img-card-wrap">
          <img src="${PHOTOS.tiangListrik}" alt="Suplai Tiang Listrik & Tiang Telepon Proyek" class="img-card" loading="lazy" />
          <span class="img-overlay-badge">Tiang Listrik &amp; Rangka Beton</span>
        </div>
        <div class="p-4">
          <p class="font-bold text-slate-900">Tiang Utilitas &amp; Struktur Beton</p>
          <p class="mt-1 text-xs text-slate-600">Suplai tiang listrik/telepon &amp; rangka beton siap pakai standar proyek.</p>
        </div>
      </div>
      <div class="group border border-slate-200 bg-white">
        <div class="img-card-wrap">
          <img src="${PHOTOS.konstruksiBaja}" alt="Kontraktor Konstruksi Baja Gudang & Pabrik" class="img-card" loading="lazy" />
          <span class="img-overlay-badge">Konstruksi Baja &amp; Gudang</span>
        </div>
        <div class="p-4">
          <p class="font-bold text-slate-900">Fabrikasi &amp; Erection Baja</p>
          <p class="mt-1 text-xs text-slate-600">Pembangunan gudang, pabrik, jembatan &amp; infrastruktur jalan.</p>
        </div>
      </div>
      <div class="group border border-slate-200 bg-white">
        <div class="img-card-wrap">
          <img src="${PHOTOS.ransum}" alt="Pabrik Ransum & Konsentrat Pakan Ternak" class="img-card" loading="lazy" />
          <span class="img-overlay-badge">Pabrik Pakan Ternak Cileunyi</span>
        </div>
        <div class="p-4">
          <p class="font-bold text-slate-900">Ransum, Konsentrat &amp; Kompos</p>
          <p class="mt-1 text-xs text-slate-600">Produsen langsung pakan sapi, domba, unggas &amp; pupuk organik.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- [02] DIVISI -->
<section id="divisi" class="scroll-mt-24 border-t border-slate-200 bg-white py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('02', 'Dua Divisi Utama PT. Sumber Ganda Mekar', 'Dua unit bisnis mandiri.<br />Satu payung korporasi.', 'Setiap divisi dikelola dengan fasilitas khusus: Gudang &amp; Timbangan 50 Ton di Gedebage untuk Divisi Logam &amp; Konstruksi, serta Pabrik Pengolahan di Cileunyi untuk Divisi Agribisnis &amp; Pakan Ternak.')}
    <div class="grid gap-px border border-slate-200 bg-slate-200 lg:grid-cols-12">

      <!-- Divisi 01 (50% Left) -->
      <article class="group card-blend-logam flex flex-col justify-between lg:col-span-6">
        <div>
          <div class="flex items-center justify-between gap-3 border-b border-slate-300/80 px-6 py-4 sm:px-8">
            <span class="font-mono text-xs font-bold tracking-widest text-[#1B6CA8]">[DIVISI 01 — GEDEBAGE]</span>
            <span class="border border-slate-400/60 bg-white/70 px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-slate-800">[Divisi Logam &amp; Konstruksi Baja]</span>
          </div>
          <div class="img-card-wrap border-b border-slate-300/80">
            <img src="${PHOTOS.besiWf}" alt="Divisi Logam, Tiang & Konstruksi Baja Bandung" class="img-card-lg" loading="lazy" />
            <span class="img-overlay-badge">Pusat Besi Tua/Baru, Tiang &amp; Konstruksi Baja</span>
          </div>
          <div class="px-6 pb-4 pt-7 sm:px-8">
            <h3 class="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">Logam, Tiang &amp; Konstruksi Baja</h3>
            <p class="mt-3.5 leading-relaxed text-slate-700">Pusat jual beli besi tua/baru partai besar, rangka beton/logam siap pakai, suplai tiang listrik/telepon, dan kontraktor konstruksi baja di Gedebage, Kota Bandung.</p>
            <div class="mt-6 border-b border-slate-300/80">
            ${row('01', 'Jual Beli Besi Tua (Scrap) &amp; Besi Baru', 'Harga Kompetitif', 'konstruksi-logam.html#scrap')}
            ${row('02', 'Rangka Beton &amp; Struktur Logam Siap Pakai', 'Precast &amp; Custom', 'konstruksi-logam.html#rangka')}
            ${row('03', 'Suplai Tiang Listrik &amp; Tiang Telepon', 'Standar Proyek', 'konstruksi-logam.html#tiang')}
            ${row('04', 'Jasa Konstruksi Baja, Gedung &amp; Jalan', 'Kontraktor PKP', 'konstruksi-logam.html#konstruksi')}
            </div>
          </div>
        </div>
        <div class="mx-6 mb-8 mt-4 border-t border-slate-300/80 pt-5 sm:mx-8">
          <div class="grid gap-3 sm:grid-cols-2">
            <a href="konstruksi-logam.html" class="btn-dark w-full">Halaman Divisi Logam →</a>
            ${waPair({ msg: 'divLogam', division: 'logam', service: 'divisi_logam_konstruksi', location: 'service_card', label: `Konsultasi Divisi Logam ${ARROW}` })}
          </div>
        </div>
      </article>

      <!-- Divisi 02 (50% Right) -->
      <article class="group hero-canvas hero-canvas-pakan flex flex-col justify-between text-white lg:col-span-6">
        <div>
          <div class="flex items-center justify-between gap-3 border-b border-white/25 px-6 py-4 sm:px-8">
            <span class="font-mono text-xs font-bold tracking-widest">[DIVISI 02 — CILEUNYI]</span>
            <span class="border border-white/40 px-2.5 py-1 font-mono text-xs uppercase tracking-widest">[Divisi Pakan Ternak]</span>
          </div>
          <div class="img-card-wrap border-b border-white/25">
            <img src="${PHOTOS.heroPakan}" alt="Divisi Agribisnis & Pabrik Pakan Ternak Bandung" class="img-card-lg" loading="lazy" />
            <span class="img-overlay-badge">Pabrik Ransum, Konsentrat &amp; Agribisnis</span>
          </div>
          <div class="px-6 pb-4 pt-7 sm:px-8">
            <h3 class="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Ransum, Konsentrat &amp; Pakan Ternak</h3>
            <p class="mt-3.5 leading-relaxed text-white">Produsen langsung ransum dan konsentrat pakan hewan berprotein tinggi, budidaya hijauan pakan ternak, serta kompos organik di Cileunyi &amp; Gedebage Bandung.</p>
            <div class="mt-6 border-b border-white/25">
            ${row('01', 'Industri Ransum Makanan Hewan Siap Saji', 'Grosir Pabrik', 'pakan-ternak.html#ransum', true)}
            ${row('02', 'Industri Konsentrat Pakan Sapi &amp; Domba', 'Protein Tinggi', 'pakan-ternak.html#konsentrat', true)}
            ${row('03', 'Pertanian Tanaman Pakan Ternak Hijauan', 'Kebun Cileunyi', 'pakan-ternak.html#hijauan-kompos', true)}
            ${row('04', 'Produksi Pupuk Kompos Organik Murni', 'Ramah Lingkungan', 'pakan-ternak.html#hijauan-kompos', true)}
            </div>
          </div>
        </div>
        <div class="mx-6 mb-8 mt-4 border-t border-white/25 pt-5 sm:mx-8">
          <div class="grid gap-3 sm:grid-cols-2">
            <a href="pakan-ternak.html" class="btn-light w-full">Halaman Divisi Pakan →</a>
            ${waPair({ msg: 'divPakan', division: 'pakan', service: 'divisi_pakan_ternak', location: 'service_card', variant: 'light', label: `Konsultasi Divisi Pakan ${ARROW}` })}
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- [03] DAFTAR HARGA BESI & KATALOG -->
${priceCatalogSection({ idx: '03', includePakan: true, defaultTab: 'scrap' })}

<!-- [04] LEGALITAS & TERA -->
${specSheet({
  id: 'legalitas', anchorId: 'timbangan-50-ton', idx: '04', label: 'Legalitas &amp; Tera Metrologi',
  h2: 'Bukti legalitas.<br />Bukan sekadar klaim.',
  intro: 'Seluruh perizinan perseroan, status perpajakan PKP resmi, dan sertifikasi Timbangan Jembatan 50 Ton tersedia untuk menjamin keamanan transaksi tender maupun pengadaan korporasi.',
  headline: 'Perseroan<br />Resmi &amp; PKP<br />Terverifikasi',
  withLegal: true, ctx
})}

<!-- [05] KOMISARIS -->
<section class="section-blend-light border-t border-slate-200 py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('05', 'Komitmen Pendiri &amp; Manajemen', 'Prinsip dasar.<br />Stabilitas jangka panjang.')}
    <div class="grid gap-14 lg:grid-cols-12">
      <figure class="lg:col-span-7">
        <blockquote class="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">“Kami berkomitmen agar usaha terus berkembang dan tetap stabil. Menjaga hubungan bisnis yang baik adalah prinsip dasar yang menopang stabilitas perusahaan.”</blockquote>
        <figcaption class="mt-8 border-t border-slate-900 pt-4">
          <p class="font-bold text-slate-900">Bapak H. Maman Suherman</p>
          <p class="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">Pendiri &amp; Komisaris — PT. Sumber Ganda Mekar</p>
        </figcaption>
      </figure>
      <dl class="border-t border-slate-900 lg:col-span-5">
        ${mgmt.map(m => `<div class="grid grid-cols-5 gap-4 border-b border-slate-200 py-3.5">
          <dt class="col-span-2 font-mono text-[11px] uppercase leading-snug tracking-widest text-slate-500">${m[0]}</dt>
          <dd class="col-span-3 font-semibold text-slate-900">${m[1]}</dd>
        </div>`).join('\n        ')}
      </dl>
    </div>
  </div>
</section>

<!-- [06] QUOTE FORM -->
${quoteForm({
  division: 'general',
  labels: { idx: '06' },
  heading: 'Kirim kebutuhan Anda ke WhatsApp.',
  intro: 'Isi spesifikasi singkat — pesan akan terformat rapi dan langsung terkirim ke CP. Uwem.',
  services: [
    ['besi_tua_baru', 'Jual Beli Besi Tua (Scrap) &amp; Besi Baru (Timbangan 50 Ton)'],
    ['rangka_beton', 'Rangka Beton &amp; Struktur Logam Siap Pakai'],
    ['tiang_listrik', 'Suplai Tiang Listrik &amp; Tiang Telepon'],
    ['konstruksi_baja', 'Jasa Konstruksi Baja, Gedung &amp; Jalan'],
    ['ransum_pakan', 'Industri Ransum Makanan Hewan'],
    ['konsentrat_pakan', 'Industri Konsentrat Makanan Hewan'],
    ['tanaman_pakan_kompos', 'Pertanian Tanaman Pakan &amp; Kompos Organik']
  ],
  taxes: ['Butuh Faktur Pajak PPN (PKP Resmi)', 'Transaksi Reguler / Pembayaran Tunai Cepat'],
  ph1: 'Contoh: 25 Ton Scrap / 100 Batang Tiang / 10 Ton Konsentrat',
  ph2: 'Contoh: PT. Maju Jaya — Bandung',
  defaultMsg: 'general', defaultService: 'besi_tua_baru'
})}

<!-- [07] WAWASAN -->
${wawasanSection({
  idx: '07',
  intro: 'Rujukan spesifikasi teknis B2B, tabel berat baja SNI, standar beban tiang listrik (daN), prosedur Timbangan Jembatan 50 Ton, serta panduan formulasi nutrisi pakan ternak PT. Sumber Ganda Mekar.',
  articles: featuredHomeArticles
})}

<!-- [08] FAQ -->
${faqSection({
  idx: '08',
  intro: 'Rujukan faktual seputar status PKP Faktur Pajak PPN, sertifikasi Tera Metrologi Legal Timbangan 50 Ton SONIC, kapasitas pemesanan B2B, dan lokasi operasional PT. Sumber Ganda Mekar.',
  faqs: homeFaqs,
  ctx
})}
`;

module.exports = page({ headHtml, active: 'home', body, ctx, withMap: true, mapIdx: '09' });
