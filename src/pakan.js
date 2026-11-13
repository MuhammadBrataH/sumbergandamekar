const {
  BASE_ORG_NODE, faqSchemaNode,
  head, hero, sectionHead, bentoCell, quoteForm, wawasanSection, faqSection, page
} = require('./lib');

const pakanArticlesAll = require('../data/articles-cluster-5');
const featuredPakanArticles = [37, 38, 39, 40, 42, 45].map(id => pakanArticlesAll.find(a => a.id === id));

const ctx = {
  division: 'pakan', service: 'ransum_pakan', msg: 'ransum', kantorMsg: 'pakan'
};

const pakanFaqs = [
  {
    tag: 'PAJAK & TENDER PKP',
    q: 'Apakah PT. Sumber Ganda Mekar berstatus PKP dan bisa menerbitkan Faktur Pajak PPN untuk tender/perusahaan?',
    a: 'Ya. PT. Sumber Ganda Mekar berstatus Pengusaha Kena Pajak (PKP) resmi (Surat Pengukuhan PKP Nomor S-00313/SPPKP-CT/KPP.0903/2025, NPWP 031.199.979.1-429.000, NIB 9120101121498). Kami melayani kontrak pengadaan pakan ternak & kompos organik untuk koperasi, dinas/instansi pemerintah, BUMN, dan peternakan korporasi lengkap dengan Faktur Pajak PPN.'
  },
  {
    tag: 'TERA METROLOGI 50 TON',
    q: 'Bagaimana jaminan keakuratan timbangan saat transaksi jual beli besi tua (scrap) partai besar?',
    a: 'Baik pengiriman pakan ternak curah/partai besar maupun transaksi material logam ditimbang menggunakan Timbangan Jembatan Elektronik kapasitas 50.000 Kg (50 Ton) Merek SONIC Tipe A12EK (No. Seri 01711744, SKHP PG.05.05/2283/VII/2025) serta Timbangan Elektronik 1.000 Kg (SKHP PG.05.05/2284/VII/2025) yang disahkan oleh UPT Metrologi Legal Disdagin Kota Bandung.'
  },
  {
    tag: 'KAPASITAS & GROSIR PAKAN',
    q: 'Berapa kapasitas minimal pemesanan tiang listrik, rangka beton, konstruksi baja, dan pakan ternak?',
    a: 'Divisi Agribisnis & Pakan Ternak kami melayani pemesanan grosir pabrik dan kontrak suplai rutin untuk ransum makanan hewan (KBLI 10801), konsentrat sapi potong, sapi perah, domba/kambing & unggas (KBLI 10802), serta hijauan tanaman pakan (KBLI 01191) dan pupuk kompos organik (KBLI 38212) di Jawa Barat maupun nasional.'
  },
  {
    tag: 'LOKASI GUDANG & PABRIK',
    q: 'Di mana lokasi gudang penimbangan besi dan pabrik pakan ternak PT. Sumber Ganda Mekar?',
    a: 'Fasilitas operasional agribisnis, pengolahan pakan ternak, dan kebun hijauan berlokasi di Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623. Sedangkan kantor pusat, pusat distribusi, dan Gudang Timbangan Jembatan 50 Ton berlokasi di Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung 40294.'
  },
  {
    tag: 'PIC FAST RESPONSE WA',
    q: 'Siapa kontak resmi (PIC) untuk penawaran harga cepat via WhatsApp?',
    a: 'Untuk meminta daftar harga grosir pabrik ransum, konsentrat pakan ternak, hijauan, atau kompos organik, hubungi langsung PIC Marketing & Operasional kami melalui WhatsApp: CP. Irwan (0821-1780-0626) atau CP. Uwem (0823-1818-8863).',
    withCta: true
  }
];

const jsonld = {
  '@context': 'https://schema.org',
  '@graph': [
    BASE_ORG_NODE,
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://sumbergandamekar.com/pakan-ternak#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://sumbergandamekar.com/' },
        { '@type': 'ListItem', position: 2, name: 'Divisi Agribisnis & Pabrik Pakan Ternak', item: 'https://sumbergandamekar.com/pakan-ternak' }
      ]
    },
    {
      '@type': ['Service', 'Product'],
      '@id': 'https://sumbergandamekar.com/pakan-ternak#ransum-service',
      name: 'Industri Ransum Makanan Hewan (KBLI 10801)',
      category: 'KBLI 10801 - Industri Ransum Makanan Hewan',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      brand: { '@id': 'https://sumbergandamekar.com/#organization' },
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      description: 'Produksi dan suplai ransum pakan ternak siap saji dengan formulasi nutrisi terukur untuk mengoptimalkan pertumbuhan dan produktivitas hewan ternak langsung dari pabrik di Bandung.',
      offers: {
        '@type': 'Offer',
        url: 'https://sumbergandamekar.com/pakan-ternak#ransum',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://sumbergandamekar.com/#organization' }
      }
    },
    {
      '@type': ['Service', 'Product'],
      '@id': 'https://sumbergandamekar.com/pakan-ternak#konsentrat-service',
      name: 'Industri Konsentrat Makanan Hewan Sapi, Domba & Unggas (KBLI 10802)',
      category: 'KBLI 10802 - Industri Konsentrat Makanan Hewan',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      brand: { '@id': 'https://sumbergandamekar.com/#organization' },
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      description: 'Penyediaan konsentrat pakan berprotein tinggi untuk penggemukan sapi potong, sapi perah, domba/kambing, dan unggas langsung dari fasilitas produksi di Gedebage & Cileunyi Bandung.',
      offers: {
        '@type': 'Offer',
        url: 'https://sumbergandamekar.com/pakan-ternak#konsentrat',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://sumbergandamekar.com/#organization' }
      }
    },
    {
      '@type': ['Service', 'Product'],
      '@id': 'https://sumbergandamekar.com/pakan-ternak#hijauan-kompos-service',
      name: 'Pertanian Tanaman Pakan Ternak & Kompos Organik (KBLI 01191 & 38212)',
      category: 'KBLI 01191 & 38212 - Pertanian Tanaman Pakan Ternak & Produksi Kompos Organik',
      provider: { '@id': 'https://sumbergandamekar.com/#organization' },
      brand: { '@id': 'https://sumbergandamekar.com/#organization' },
      areaServed: ['Kota Bandung', 'Kabupaten Bandung', 'Jawa Barat', 'Jabodetabek', 'Indonesia'],
      description: 'Budidaya hijauan tanaman pakan ternak segar serta produksi pupuk kompos organik ramah lingkungan dari fasilitas Cileunyi & Gedebage Bandung.',
      offers: {
        '@type': 'Offer',
        url: 'https://sumbergandamekar.com/pakan-ternak#hijauan-kompos',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://sumbergandamekar.com/#organization' }
      }
    },
    faqSchemaNode('https://sumbergandamekar.com/pakan-ternak', pakanFaqs)
  ]
};

const headHtml = head({
  title: 'Pabrik &amp; Distributor Pakan Ternak Bandung (Ransum, Konsentrat Sapi/Domba/Unggas) | PT. Sumber Ganda Mekar',
  desc: 'Produsen langsung ransum makanan hewan (KBLI 10801), konsentrat pakan ternak (KBLI 10802), dan tanaman pakan ternak di Gedebage &amp; Cileunyi Bandung. Harga grosir pabrik untuk peternakan &amp; koperasi.',
  keywords: 'pabrik pakan ternak bandung, grosir konsentrat sapi jawa barat, suplier ransum ternak, jual pakan ternak partai besar, konsentrat sapi potong bandung, tanaman pakan ternak cileunyi, kompos organik bandung',
  canonical: 'https://sumbergandamekar.com/pakan-ternak',
  ogTitle: 'Pabrik &amp; Distributor Pakan Ternak Bandung (Ransum, Konsentrat Sapi/Domba/Unggas) | PT. Sumber Ganda Mekar',
  ogDesc: 'Produsen langsung ransum makanan hewan (KBLI 10801), konsentrat pakan ternak (KBLI 10802), dan tanaman pakan ternak di Gedebage &amp; Cileunyi Bandung. Harga grosir pabrik untuk peternakan &amp; koperasi.',
  jsonld
});

const ternak = `<div class="border border-slate-200 bg-[#F8FAFC] p-4">
            <p class="font-mono text-[11px] uppercase tracking-widest text-slate-500">Untuk peternakan</p>
            <p class="mt-2 font-mono text-xs font-bold uppercase leading-loose tracking-widest text-slate-900">Sapi Potong • Sapi Perah<br />Domba/Kambing • Unggas</p>
          </div>`;

const kbliList = `<dl class="border-t border-slate-200 font-mono text-xs uppercase tracking-widest">
            <div class="flex justify-between gap-4 border-b border-slate-200 py-3"><dt class="text-slate-500">KBLI 01191</dt><dd class="text-right font-bold text-slate-900">Tanaman Pakan Ternak</dd></div>
            <div class="flex justify-between gap-4 border-b border-slate-200 py-3"><dt class="text-slate-500">KBLI 38212</dt><dd class="text-right font-bold text-slate-900">Kompos Organik</dd></div>
          </dl>`;

const loc = (n, tagline, name, addr, extra = '') =>
  `<div class="border-b border-slate-200 px-5 py-6 sm:px-7">
          <div class="flex items-center justify-between gap-3">
            <span class="font-mono text-xs font-bold tracking-widest text-[#2C99D6]">[${n}]</span>
            <span class="tag-mono">[${tagline}]</span>
          </div>
          <h3 class="mt-5 text-2xl font-bold tracking-tight text-slate-900">${name}</h3>
          <p class="mt-2 leading-relaxed text-slate-600">${addr}</p>
          ${extra}
        </div>`;

const body = `
${hero({
  title: ['Produsen', 'Ransum &amp;', 'Pakan Ternak'],
  sub: 'Industri ransum dan konsentrat pakan hewan langsung dari fasilitas produksi di Gedebage &amp; Cileunyi Bandung, ditambah hijauan pakan ternak dan kompos organik untuk kebutuhan partai besar.',
  metrics: [
    ['10801', 'KBLI — Industri Ransum Makanan Hewan'],
    ['10802', 'KBLI — Industri Konsentrat Makanan Hewan'],
    ['01191', 'KBLI — Pertanian Tanaman Pakan Ternak'],
    ['38212', 'KBLI — Kompos Organik']
  ],
  ctx, badges: false
})}

<!-- [01] PRODUK -->
<section id="katalog-pakan" class="scroll-mt-24 bg-[#F8FAFC] py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('01', 'Lini Produksi Agribisnis Bandung', 'Tiga lini produksi.<br />Langsung dari pabrik.', 'Industri resmi KBLI 10801, 10802, 01191 &amp; 38212 di Bandung, Jawa Barat — pasokan langsung dari fasilitas produksi, dengan kontak cepat ke CP. Irwan dan CP. Uwem.')}
    <div class="grid gap-px border border-slate-200 bg-slate-200 lg:grid-cols-12">
    ${bentoCell({
      id: 'ransum', idx: '01', tag: 'KBLI 10801 — INDUSTRI RANSUM', span: 'lg:col-span-7', big: true,
      title: 'Industri Ransum Makanan Hewan',
      desc: 'Produksi dan suplai ransum pakan ternak siap saji dengan formulasi nutrisi terukur untuk mengoptimalkan pertumbuhan dan produktivitas hewan ternak.',
      ctaLabel: 'Pesan Ransum Pakan', msg: 'ransum', service: 'ransum_pakan', division: 'pakan'
    })}
    ${bentoCell({
      id: 'konsentrat', idx: '02', tag: 'KBLI 10802 — INDUSTRI KONSENTRAT', span: 'lg:col-span-5',
      title: 'Industri Konsentrat Makanan Hewan',
      desc: 'Penyediaan konsentrat pakan berprotein tinggi untuk penggemukan sapi potong, sapi perah, domba/kambing, dan unggas langsung dari fasilitas produksi kami di Gedebage &amp; Cileunyi.',
      extra: ternak, ctaLabel: 'Tanya Harga Konsentrat', msg: 'konsentrat', service: 'konsentrat_pakan', division: 'pakan'
    })}
    ${bentoCell({
      id: 'hijauan-kompos', idx: '03', tag: 'KBLI 01191 + 38212 — HIJAUAN &amp; KOMPOS', span: 'lg:col-span-12', big: true, wide: true,
      title: 'Pertanian Tanaman Pakan &amp; Kompos Organik',
      desc: 'Budidaya hijauan tanaman pakan ternak segar serta produksi pupuk kompos organik ramah lingkungan untuk mendukung ekosistem agribisnis berkelanjutan.',
      extra: kbliList, ctaLabel: 'Hubungi Divisi Agribisnis', msg: 'hijauan', service: 'tanaman_pakan_kompos', division: 'pakan'
    })}
    </div>
  </div>
</section>

<!-- [02] FASILITAS -->
<section id="fasilitas-produksi" class="scroll-mt-24 border-t border-slate-200 bg-white py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('02', 'Fasilitas Produksi Bandung', 'Dua lokasi.<br />Satu rantai pasok.')}
    <div class="grid border border-slate-900 lg:grid-cols-12">
      <div class="hero-canvas p-7 text-white sm:p-9 lg:col-span-5 lg:p-10">
        <div class="flex h-full flex-col justify-between gap-10">
          <div>
            <span class="badge-cert">TERA RESMI 50 TON</span>
            <h3 class="mt-6 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">Tonase<br />Akurat.<br />Tiap Kirim.</h3>
            <p class="mt-6 max-w-md leading-relaxed text-white">Pengolahan dan budidaya di Cileunyi, distribusi serta Timbangan Jembatan Elektronik 50 Ton &amp; 1 Ton SONIC di Gedebage — disahkan UPT Metrologi Legal Disdagin Kota Bandung.</p>
            <p class="mt-6 border-l-2 border-white pl-4 font-mono text-xs uppercase leading-relaxed tracking-widest text-white">Tera Metrologi Legal: SONIC A12EK — Kapasitas 50.000 Kg</p>
          </div>
          <a href="konstruksi-logam.html#jaminan-timbangan" class="btn-light w-full sm:w-fit">Lihat Sertifikasi Timbangan →</a>
        </div>
      </div>
      <div class="bg-white lg:col-span-7">
        ${loc('01', 'Gedebage — Kantor Pusat &amp; Logistik', 'Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung 40294', 'Pusat administrasi, distribusi, dan lokasi Timbangan Jembatan Elektronik 50.000 Kg (No. Seri 01711744) &amp; Timbangan 1.000 Kg Merek SONIC (SKHP PG.05.05/2283/VII/2025 &amp; PG.05.05/2284/VII/2025).')}
        ${loc('02', 'Cileunyi — Produksi &amp; Budidaya', 'Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623', 'Basis operasional agribisnis: pengolahan ransum &amp; konsentrat (KBLI 10801 &amp; 10802), budidaya tanaman pakan ternak (KBLI 01191), dan kompos organik (KBLI 38212).')}
      </div>
    </div>
  </div>
</section>

${quoteForm({
  division: 'pakan',
  labels: { idx: '03' },
  heading: 'Minta daftar harga grosir via WhatsApp.',
  intro: 'Isi kebutuhan singkat — pesan terformat rapi dan langsung terkirim ke CP. Irwan atau CP. Uwem.',
  services: [
    ['ransum_pakan', '1. Industri Ransum Makanan Hewan (KBLI 10801)'],
    ['konsentrat_pakan', '2. Industri Konsentrat Makanan Hewan (KBLI 10802)'],
    ['tanaman_pakan_kompos', '3. Tanaman Pakan &amp; Kompos Organik (KBLI 01191 &amp; 38212)']
  ],
  taxes: ['Kontrak Suplai Rutin / Grosir Partai Besar', 'Pengadaan Korporasi / Tender dengan Faktur Pajak PKP'],
  ph1: 'Contoh: 10 Ton Konsentrat Sapi Potong / Sapi Perah / Domba',
  ph2: 'Contoh: Farm Maju Ternak — Lembang / Garut',
  defaultMsg: 'ransum', defaultService: 'ransum_pakan'
})}

${wawasanSection({
  idx: '04',
  h2: 'Panduan nutrisi ternak<br />&amp; manajemen agribisnis.',
  intro: 'Rujukan formulasi ransum makanan hewan (KBLI 10801), konsentrat sapi potong &amp; perah (KBLI 10802), pakan domba/unggas, budidaya hijauan Cileunyi, hingga SOP gudang pakan.',
  articles: featuredPakanArticles
})}

${faqSection({
  idx: '05',
  intro: 'Informasi teknis seputar pemesanan grosir ransum (KBLI 10801), konsentrat sapi/domba/unggas (KBLI 10802), tanaman pakan, kompos organik, dan Faktur Pajak PPN (PKP).',
  faqs: pakanFaqs,
  ctx
})}
`;

module.exports = page({ headHtml, active: 'pakan', body, ctx });
