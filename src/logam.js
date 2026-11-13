const {
  BASE_ORG_NODE, faqSchemaNode,
  head, hero, sectionHead, bentoCell, specSheet, quoteForm, wawasanSection, faqSection, page
} = require('./lib');

const logamArticlesAll = [
  ...require('../data/articles-cluster-1'),
  ...require('../data/articles-cluster-2'),
  ...require('../data/articles-cluster-3'),
  ...require('../data/articles-cluster-4')
];
const featuredLogamArticles = [1, 5, 11, 14, 20, 28].map(id => logamArticlesAll.find(a => a.id === id));

const ctx = {
  division: 'logam', service: 'besi_tua_baru', msg: 'scrap', kantorMsg: 'logam'
};

const logamFaqs = [
  {
    tag: 'PAJAK & TENDER PKP',
    q: 'Apakah PT. Sumber Ganda Mekar berstatus PKP dan bisa menerbitkan Faktur Pajak PPN untuk tender/perusahaan?',
    a: 'Ya. PT. Sumber Ganda Mekar berstatus Pengusaha Kena Pajak (PKP) resmi (Surat Pengukuhan PKP Nomor S-00313/SPPKP-CT/KPP.0903/2025, NPWP 031.199.979.1-429.000, NIB 9120101121498). Setiap pengadaan besi baru, rangka beton/logam, tiang listrik/telepon, maupun kontrak konstruksi baja dilengkapi Faktur Pajak PPN resmi.'
  },
  {
    tag: 'TERA METROLOGI 50 TON',
    q: 'Bagaimana jaminan keakuratan timbangan saat transaksi jual beli besi tua (scrap) partai besar?',
    a: 'Truk tronton, dump truck, maupun kontainer ditimbang langsung di atas Timbangan Jembatan Elektronik kapasitas 50.000 Kg (50 Ton) Merek SONIC Tipe A12EK (No. Seri 01711744, SKHP PG.05.05/2283/VII/2025) serta Timbangan Elektronik 1.000 Kg (SKHP PG.05.05/2284/VII/2025) yang disahkan oleh UPT Metrologi Legal Disdagin Kota Bandung.'
  },
  {
    tag: 'KAPASITAS & MOQ LOGAM',
    q: 'Berapa kapasitas minimal pemesanan tiang listrik, rangka beton, konstruksi baja, dan pakan ternak?',
    a: 'Pada Divisi Logam & Konstruksi, kami menerima penjualan/pembelian besi tua (scrap pabrik, bongkaran gudang, eks mesin & alat berat) dan besi baru partai besar, pengadaan rangka beton/logam serta tiang listrik/telepon skala proyek, hingga kontrak fabrikasi & ereksi konstruksi baja gudang/pabrik di Bandung, Jawa Barat, dan nasional.'
  },
  {
    tag: 'LOKASI GUDANG & PABRIK',
    q: 'Di mana lokasi gudang penimbangan besi dan pabrik pakan ternak PT. Sumber Ganda Mekar?',
    a: 'Gudang utama logam, konstruksi, dan fasilitas Timbangan Jembatan 50 Ton berlokasi di Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung 40294. Sedangkan unit operasional agribisnis & pabrik pakan ternak berlokasi di Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623.'
  },
  {
    tag: 'PIC FAST RESPONSE WA',
    q: 'Siapa kontak resmi (PIC) untuk penawaran harga cepat via WhatsApp?',
    a: 'Hubungi langsung PIC Sales & Operasional Divisi Logam & Konstruksi kami melalui WhatsApp: CP. Irwan (0821-1780-0626) atau CP. Uwem (0823-1818-8863) untuk kirim foto scrap, permintaan penawaran tiang/rangka, atau jadwal penimbangan 50 ton.',
    withCta: true
  }
];

const jsonld = {
  '@context': 'https://schema.org',
  '@graph': [
    BASE_ORG_NODE,
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://sumbergandamekar.com/konstruksi-logam#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://sumbergandamekar.com/' },
        { '@type': 'ListItem', position: 2, name: 'Divisi Logam & Konstruksi Baja', item: 'https://sumbergandamekar.com/konstruksi-logam' }
      ]
    },
    {
      '@type': ['Service', 'Product'],
      '@id': 'https://sumbergandamekar.com/konstruksi-logam#scrap-service',
      name: 'Jual Beli Besi Tua (Scrap) & Besi Baru Partai Besar (KBLI 46796)',
      category: 'KBLI 46796 - Perdagangan Besar Barang Bekas dan Sisa-sisa Tak Terpakai (Scrap) & Material Logam',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      brand: { '@id': 'https://sumbergandamekar.com/#organization' },
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      description: 'Menerima dan membeli bongkaran pabrik, mesin industri, alat berat, dan skrap logam partai besar dengan Timbangan Jembatan 50 Ton SONIC A12EK Tera Resmi UPT Metrologi Legal Kota Bandung serta menyediakan stok besi baru proyek.',
      offers: {
        '@type': 'Offer',
        url: 'https://sumbergandamekar.com/konstruksi-logam#scrap',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://sumbergandamekar.com/#organization' }
      }
    },
    {
      '@type': ['Service', 'Product'],
      '@id': 'https://sumbergandamekar.com/konstruksi-logam#rangka-service',
      name: 'Rangka Beton & Struktur Logam Siap Pakai',
      category: 'Material Struktur Konstruksi Beton & Logam',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      brand: { '@id': 'https://sumbergandamekar.com/#organization' },
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      description: 'Penyediaan rangka beton bertulang dan struktur logam presisi siap pakai untuk mempercepat proyek pengecoran, gudang, dan bangunan komersial berstatus PKP resmi.',
      offers: {
        '@type': 'Offer',
        url: 'https://sumbergandamekar.com/konstruksi-logam#rangka',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://sumbergandamekar.com/#organization' }
      }
    },
    {
      '@type': ['Service', 'Product'],
      '@id': 'https://sumbergandamekar.com/konstruksi-logam#tiang-service',
      name: 'Suplai Tiang Listrik & Tiang Telepon',
      category: 'Infrastruktur Utilitas Kelistrikan & Telekomunikasi',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      brand: { '@id': 'https://sumbergandamekar.com/#organization' },
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      description: 'Memasok tiang beton dan tiang logam standar proyek untuk instalasi jaringan listrik, telekomunikasi, penerangan jalan (PJU), dan kawasan industri di Jawa Barat maupun nasional.',
      offers: {
        '@type': 'Offer',
        url: 'https://sumbergandamekar.com/konstruksi-logam#tiang',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://sumbergandamekar.com/#organization' }
      }
    },
    {
      '@type': ['Service', 'Product'],
      '@id': 'https://sumbergandamekar.com/konstruksi-logam#konstruksi-service',
      name: 'Jasa Konstruksi Baja, Gedung & Jalan (KBLI 41011–41019 & 42101)',
      category: 'KBLI 41011–41019 & 42101 - Konstruksi Gedung, Pabrik, Gudang, Jembatan & Jalan',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      brand: { '@id': 'https://sumbergandamekar.com/#organization' },
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      description: 'Fabrikasi dan instalasi konstruksi baja kokoh untuk gudang, pabrik, jembatan, gedung perkantoran/industri, hingga konstruksi jalan sesuai standar K3L dengan dukungan Faktur Pajak PPN (PKP).',
      offers: {
        '@type': 'Offer',
        url: 'https://sumbergandamekar.com/konstruksi-logam#konstruksi',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://sumbergandamekar.com/#organization' }
      }
    },
    faqSchemaNode('https://sumbergandamekar.com/konstruksi-logam', logamFaqs)
  ]
};

const headHtml = head({
  title: 'Jual Beli Besi Tua &amp; Baru Bandung, Suplier Tiang Listrik, Rangka Beton &amp; Konstruksi Baja | PT. Sumber Ganda Mekar',
  desc: 'Pusat jual beli besi tua (scrap pabrik/proyek) &amp; besi baru di Gedebage Bandung dengan Timbangan Jembatan 50 Ton Tera Metrologi Legal. Suplier tiang listrik/telepon, rangka beton, &amp; kontraktor konstruksi baja berstatus PKP.',
  keywords: 'jual beli besi tua bandung, pembeli besi tua pabrik, jual scrap logam partai besar, timbangan besi tua gedebage, suplier tiang listrik beton, jual tiang telepon, kontraktor konstruksi baja bandung, jual rangka beton proyek',
  canonical: 'https://sumbergandamekar.com/konstruksi-logam',
  ogTitle: 'Jual Beli Besi Tua &amp; Baru Bandung, Suplier Tiang Listrik, Rangka Beton &amp; Konstruksi Baja | PT. Sumber Ganda Mekar',
  ogDesc: 'Pusat jual beli besi tua (scrap pabrik/proyek) &amp; besi baru di Gedebage Bandung dengan Timbangan Jembatan 50 Ton Tera Metrologi Legal. Suplier tiang listrik/telepon, rangka beton, &amp; kontraktor konstruksi baja berstatus PKP.',
  jsonld
});

const scrapExtra = `<div class="border border-slate-200 bg-[#F8FAFC] p-4">
            <span class="badge-cert">TERA RESMI 50 TON</span>
            <p class="mt-3 font-mono text-xs uppercase leading-relaxed tracking-widest text-slate-700">Tera Metrologi Legal: SONIC A12EK — Kapasitas 50.000 Kg</p>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Timbangan Jembatan Elektronik 50 Ton resmi — Tera UPT Metrologi Legal Kota Bandung.</p>
          </div>`;

const step = (n, t, d) =>
  `<div class="border-t border-slate-900 pt-5 pr-6">
        <p class="font-mono text-xs font-bold tracking-widest text-[#2C99D6]">[${n}]</p>
        <h3 class="mt-3 text-xl font-bold tracking-tight text-slate-900">${t}</h3>
        <p class="mt-2 leading-relaxed text-slate-600">${d}</p>
      </div>`;

const body = `
${hero({
  title: ['Pusat Besi,', 'Baja &amp; Tiang', 'Proyek'],
  sub: 'Beli dan jual besi tua/baru partai besar, pasok rangka beton/logam serta tiang listrik/telepon, hingga konstruksi baja di Bandung &amp; Jawa Barat — ditimbang jujur di timbangan jembatan 50 ton tera resmi.',
  metrics: [
    ['50.000 KG', 'Timbangan Jembatan SONIC A12EK'],
    ['1.000 KG', 'Timbangan Elektronik SONIC A12EK'],
    ['PKP', 'Faktur Pajak PPN — Status Resmi'],
    ['46796', 'KBLI — Besi Tua (Scrap) &amp; Besi Baru']
  ],
  ctx
})}

<!-- [01] 4 LAYANAN -->
<section id="layanan-logam" class="scroll-mt-24 bg-[#F8FAFC] py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('01', 'Layanan Divisi Logam Bandung', 'Empat layanan.<br />Satu fokus: proyek Anda.', 'Setiap layanan dilengkapi kontak langsung ke CP. Irwan (0821-1780-0626) dan CP. Uwem (0823-1818-8863) dengan pesan otomatis sesuai kebutuhan proyek di Bandung, Jawa Barat, maupun nasional.')}
    <div class="grid gap-px border border-slate-200 bg-slate-200 lg:grid-cols-12">
    ${bentoCell({
      id: 'scrap', idx: '01', tag: 'KBLI 46796 — SCRAP LOGAM', span: 'lg:col-span-7', big: true,
      title: 'Jual Beli Besi Tua (Scrap) &amp; Besi Baru',
      desc: 'Menerima dan membeli bongkaran pabrik, mesin industri, alat berat, dan skrap logam partai besar dengan harga kompetitif &amp; pembayaran cepat. Menyediakan pula stok besi baru untuk kebutuhan industri dan proyek.',
      extra: scrapExtra, ctaLabel: 'Jual / Beli Besi Sekarang', msg: 'scrap', service: 'besi_tua_baru', division: 'logam'
    })}
    ${bentoCell({
      id: 'rangka', idx: '02', tag: 'SUPLAI — RANGKA BETON/LOGAM', span: 'lg:col-span-5',
      title: 'Rangka Beton &amp; Struktur Logam Siap Pakai',
      desc: 'Penyediaan berbagai rangka beton bertulang dan struktur logam presisi siap pakai untuk mempercepat proyek pengecoran, gudang, dan bangunan komersial.',
      ctaLabel: 'Minta Penawaran Rangka', msg: 'rangka', service: 'rangka_beton', division: 'logam'
    })}
    ${bentoCell({
      id: 'tiang', idx: '03', tag: 'SUPLAI — TIANG LISTRIK/TELP', span: 'lg:col-span-5',
      title: 'Suplai Tiang Listrik &amp; Tiang Telepon',
      desc: 'Memasok tiang beton dan tiang logam standar proyek untuk instalasi jaringan listrik, telekomunikasi, penerangan jalan, dan kawasan industri di Jawa Barat maupun nasional.',
      ctaLabel: 'Cek Stok &amp; Harga Tiang', msg: 'tiang', service: 'tiang_listrik', division: 'logam'
    })}
    ${bentoCell({
      id: 'konstruksi', idx: '04', tag: 'KBLI 41011–41019 &amp; 42101', span: 'lg:col-span-7', big: true,
      title: 'Jasa Konstruksi Baja, Gedung &amp; Jalan',
      desc: 'Fabrikasi dan instalasi konstruksi baja kokoh untuk gudang, pabrik, jembatan, gedung perkantoran/industri, hingga konstruksi jalan sesuai standar K3L.',
      ctaLabel: 'Konsultasi Konstruksi Baja', msg: 'konstruksi', service: 'konstruksi_baja', division: 'logam'
    })}
    </div>
  </div>
</section>

${specSheet({
  id: 'jaminan-timbangan', idx: '02', label: 'Jaminan Timbangan Gedebage',
  h2: 'Timbangan jujur.<br />Anti-curang.',
  intro: 'Setiap tonase dicatat pada instrumen yang telah disahkan dan ditera ulang oleh UPT Metrologi Legal Dinas Perdagangan dan Perindustrian Kota Bandung.',
  headline: 'Timbangan<br />Jembatan<br />50.000 Kg',
  withLegal: false, ctx
})}

<!-- [03] ALUR -->
<section class="border-t border-slate-200 bg-white py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('03', 'Alur Transaksi B2B', 'Tiga langkah.<br />Tanpa berbelit.')}
    <div class="grid gap-10 md:grid-cols-3">
      ${step('01', 'Hubungi CP. Irwan / CP. Uwem', 'Kirim daftar scrap atau spesifikasi kebutuhan besi, rangka, tiang, maupun proyek konstruksi baja via WhatsApp.')}
      ${step('02', 'Penimbangan di Gedebage Bandung', 'Muatan ditimbang pada Timbangan Jembatan 50 Ton tera resmi di Jl. Raya Gedebage No. 95, Kota Bandung.')}
      ${step('03', 'Penyelesaian &amp; Faktur PKP', 'Pembayaran cepat sesuai hasil timbangan resmi, dengan faktur pajak PPN karena status PKP terdaftar.')}
    </div>
  </div>
</section>

${quoteForm({
  division: 'logam',
  labels: { idx: '04' },
  heading: 'Kirim penawaran besi &amp; konstruksi ke WhatsApp.',
  intro: 'Isi spesifikasi singkat — pesan terformat rapi dan langsung terkirim ke CP. Irwan atau CP. Uwem.',
  services: [
    ['besi_tua_baru', '1. Jual Beli Besi Tua (Scrap) &amp; Besi Baru (KBLI 46796)'],
    ['rangka_beton', '2. Rangka Beton &amp; Struktur Logam Siap Pakai'],
    ['tiang_listrik', '3. Suplai Tiang Listrik &amp; Tiang Telepon'],
    ['konstruksi_baja', '4. Jasa Konstruksi Baja, Gedung &amp; Jalan']
  ],
  taxes: ['Butuh Faktur Pajak PPN (PKP Resmi) & Timbangan 50 Ton', 'Jual Scrap Tunai / Transfer Lunas di Tempat'],
  ph1: 'Contoh: 30 Ton Scrap Pabrik / 150 Tiang / Gudang 1.500 m2',
  ph2: 'Contoh: PT. Industri Tekstil — Bandung / Cikarang',
  defaultMsg: 'scrap', defaultService: 'besi_tua_baru'
})}

${wawasanSection({
  idx: '05',
  h2: 'Spesifikasi logam,<br />tiang &amp; konstruksi baja.',
  intro: 'Panduan teknis pengadaan besi baru WF/H-Beam, jual beli scrap pabrik di Timbangan 50 Ton, rangka beton siap pakai, spesifikasi tiang listrik/telepon, hingga konstruksi gudang.',
  articles: featuredLogamArticles
})}

${faqSection({
  idx: '06',
  intro: 'Pertanyaan teknis seputar penjualan besi tua/scrap pabrik, sertifikasi Timbangan Jembatan 50 Ton SONIC A12EK, suplai tiang listrik/rangka beton, dan kontrak konstruksi baja PKP.',
  faqs: logamFaqs,
  ctx
})}
`;

module.exports = page({ headHtml, active: 'logam', body, ctx });
