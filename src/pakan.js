const {
  PHOTOS, BASE_ORG_NODE, faqSchemaNode,
  head, hero, sectionHead, bentoCell, priceCatalogSection, quoteForm, wawasanSection, faqSection, page
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
    a: 'Ya. PT. Sumber Ganda Mekar berstatus Pengusaha Kena Pajak (PKP) resmi dengan perizinan berusaha lengkap. Kami melayani kontrak pengadaan pakan ternak & kompos organik untuk koperasi, dinas/instansi pemerintah, BUMN, dan peternakan korporasi lengkap dengan Faktur Pajak PPN.'
  },
  {
    tag: 'TERA METROLOGI 50 TON',
    q: 'Bagaimana jaminan keakuratan timbangan saat pengiriman pakan ternak partai besar?',
    a: 'Baik pengiriman pakan ternak curah/partai besar maupun transaksi material logam ditimbang menggunakan Timbangan Jembatan Elektronik kapasitas 50.000 Kg (50 Ton) Merek SONIC Tipe A12EK serta Timbangan Elektronik 1.000 Kg yang telah disahkan dan ditera ulang resmi oleh UPT Metrologi Legal Disdagin Kota Bandung.'
  },
  {
    tag: 'KAPASITAS & GROSIR PAKAN',
    q: 'Berapa kapasitas minimal pemesanan ransum, konsentrat, dan hijauan pakan ternak?',
    a: 'Divisi Agribisnis & Pakan Ternak kami melayani pemesanan grosir pabrik dan kontrak suplai rutin untuk ransum makanan hewan, konsentrat sapi potong, sapi perah, domba/kambing & unggas, serta hijauan tanaman pakan dan pupuk kompos organik di Jawa Barat maupun nasional.'
  },
  {
    tag: 'LOKASI GUDANG & PABRIK',
    q: 'Di mana lokasi pabrik pakan ternak dan gudang distribusi PT. Sumber Ganda Mekar?',
    a: 'Fasilitas operasional agribisnis, pengolahan pakan ternak, dan kebun hijauan berlokasi di Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623. Sedangkan kantor pusat, pusat distribusi, dan Gudang Timbangan Jembatan 50 Ton berlokasi di Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung 40294.'
  },
  {
    tag: 'PIC FAST RESPONSE WA',
    q: 'Siapa kontak resmi (PIC) untuk penawaran harga cepat via WhatsApp?',
    a: 'Untuk meminta daftar harga grosir pabrik ransum, konsentrat pakan ternak, hijauan, atau kompos organik, hubungi langsung PIC Marketing & Operasional kami melalui WhatsApp: CP. Uwem (0823-1818-8863).',
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
      name: 'Industri Ransum Makanan Hewan',
      category: 'Industri Ransum Makanan Hewan',
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
      name: 'Industri Konsentrat Makanan Hewan Sapi, Domba & Unggas',
      category: 'Industri Konsentrat Makanan Hewan',
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
      name: 'Pertanian Tanaman Pakan Ternak & Kompos Organik',
      category: 'Pertanian Tanaman Pakan Ternak & Produksi Kompos Organik',
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
  desc: 'Produsen langsung ransum makanan hewan, konsentrat pakan ternak, dan tanaman pakan ternak di Gedebage &amp; Cileunyi Bandung. Harga grosir pabrik untuk peternakan &amp; koperasi. Hubungi CP. Uwem (0823-1818-8863).',
  keywords: 'pabrik pakan ternak bandung, grosir konsentrat sapi jawa barat, suplier ransum ternak, jual pakan ternak partai besar, konsentrat sapi potong bandung, tanaman pakan ternak cileunyi, kompos organik bandung',
  canonical: 'https://sumbergandamekar.com/pakan-ternak',
  ogTitle: 'Pabrik &amp; Distributor Pakan Ternak Bandung (Ransum, Konsentrat Sapi/Domba/Unggas) | PT. Sumber Ganda Mekar',
  ogDesc: 'Produsen langsung ransum makanan hewan, konsentrat pakan ternak, dan tanaman pakan ternak di Gedebage &amp; Cileunyi Bandung. Harga grosir pabrik untuk peternakan &amp; koperasi.',
  jsonld
});

const ternak = `<div class="border border-slate-200 bg-[#F8FAFC] p-4">
            <span class="badge-cert">PROTEIN TINGGI • BEBAS JAMUR</span>
            <p class="mt-3 font-mono text-xs font-bold uppercase leading-relaxed tracking-widest text-slate-800">Peruntukan: Sapi Potong • Sapi Perah • Domba • Unggas</p>
            <p class="mt-1.5 text-sm leading-relaxed text-slate-600">Diracik dari bahan baku pilihan berkualitas tinggi untuk mempercepat penggemukan (ADG) dan produksi susu.</p>
          </div>`;

const ransumExtra = `<div class="border border-slate-200 bg-[#F8FAFC] p-4">
            <span class="badge-cert">GROSIR PABRIK CILEUNYI</span>
            <p class="mt-3 font-mono text-xs font-bold uppercase leading-relaxed tracking-widest text-slate-800">Spesifikasi Nutrisi: PK 14%–18% • TDN ≥ 68% • Karung 50 Kg</p>
            <p class="mt-1.5 text-sm leading-relaxed text-slate-600">Formulasi ransum lengkap siap saji untuk efisiensi pakan harian peternakan rakyat, koperasi, maupun feedlot.</p>
          </div>`;

const kbliList = `<div class="border border-slate-200 bg-[#F8FAFC] p-4">
            <span class="badge-cert">KEBUN &amp; PENGOLAHAN CILEUNYI</span>
            <dl class="mt-3 font-mono text-xs uppercase tracking-widest">
              <div class="flex justify-between gap-4 border-b border-slate-200 py-2"><dt class="text-slate-500">Hijauan Pakan</dt><dd class="text-right font-bold text-slate-900">Odot / Pakchong Segar</dd></div>
              <div class="flex justify-between gap-4 pt-2"><dt class="text-slate-500">Pupuk Organik</dt><dd class="text-right font-bold text-slate-900">Kompos Fermentasi Matang</dd></div>
            </dl>
          </div>`;

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
  sub: 'Industri ransum dan konsentrat pakan hewan langsung dari fasilitas produksi di Cileunyi &amp; Gedebage Bandung, ditambah hijauan pakan ternak dan kompos organik untuk kebutuhan partai besar.',
  metrics: [
    ['RANSUM', 'Industri Ransum Makanan Hewan Siap Saji'],
    ['KONSENTRAT', 'Protein Tinggi — Sapi, Domba &amp; Unggas'],
    ['HIJAUAN', 'Budidaya Tanaman Pakan Ternak Cileunyi'],
    ['KOMPOS', 'Produksi Pupuk Kompos Organik Murni']
  ],
  ctx, badges: false,
  heroImg: PHOTOS.heroPakan,
  heroCaption: 'Fasilitas Agribisnis & Pakan Ternak — Cileunyi & Gedebage Bandung',
  subImg1: PHOTOS.konsentrat,
  subLabel1: 'Ransum & Konsentrat Ternak',
  subImg2: PHOTOS.hijauan,
  subLabel2: 'Kebun Hijauan & Kompos Organik',
  catalogAnchor: '#katalog-harga'
})}

<!-- [01] PRODUK -->
<section id="katalog-pakan" class="scroll-mt-24 bg-[#F8FAFC] py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('01', 'Lini Produksi Agribisnis Bandung', 'Tiga lini produksi.<br />Langsung dari pabrik.', 'Diproduksi langsung di fasilitas kami di Bandung, Jawa Barat — dilengkapi jaminan mutu nutrisi dan suplai rutin untuk peternakan, koperasi, maupun pengadaan tender.')}
    <div class="grid gap-px border border-slate-200 bg-slate-200 lg:grid-cols-12">
    ${bentoCell({
      id: 'ransum', idx: '01', tag: 'PRODUKSI — INDUSTRI RANSUM', span: 'lg:col-span-6', big: true,
      img: PHOTOS.ransum, imgCaption: 'Industri Ransum Makanan Hewan Siap Saji',
      title: 'Industri Ransum Makanan Hewan',
      desc: 'Produksi dan suplai ransum pakan ternak siap saji dengan formulasi nutrisi terukur untuk mengoptimalkan pertumbuhan bobot badan (ADG) dan produktivitas hewan ternak.',
      extra: ransumExtra, ctaLabel: 'Pesan Ransum Pakan', msg: 'ransum', service: 'ransum_pakan', division: 'pakan'
    })}
    ${bentoCell({
      id: 'konsentrat', idx: '02', tag: 'PRODUKSI — INDUSTRI KONSENTRAT', span: 'lg:col-span-6', big: true,
      img: PHOTOS.konsentrat, imgCaption: 'Konsentrat Pakan Sapi, Domba & Unggas',
      title: 'Industri Konsentrat Makanan Hewan',
      desc: 'Penyediaan konsentrat pakan berprotein tinggi untuk penggemukan sapi potong, sapi perah, domba/kambing, dan unggas langsung dari fasilitas produksi kami di Gedebage &amp; Cileunyi.',
      extra: ternak, ctaLabel: 'Tanya Harga Konsentrat', msg: 'konsentrat', service: 'konsentrat_pakan', division: 'pakan'
    })}
    ${bentoCell({
      id: 'hijauan-kompos', idx: '03', tag: 'KEBUN — HIJAUAN &amp; KOMPOS ORGANIK', span: 'lg:col-span-12', big: true, wide: true,
      img: PHOTOS.hijauan, imgCaption: 'Kebun Hijauan Pakan Ternak & Produksi Kompos Organik Cileunyi',
      title: 'Pertanian Tanaman Pakan &amp; Kompos Organik',
      desc: 'Budidaya hijauan tanaman pakan ternak segar serta produksi pupuk kompos organik ramah lingkungan untuk mendukung ekosistem agribisnis berkelanjutan.',
      extra: kbliList, ctaLabel: 'Hubungi Divisi Agribisnis', msg: 'hijauan', service: 'tanaman_pakan_kompos', division: 'pakan'
    })}
    </div>
  </div>
</section>

<!-- [02] TABEL HARGA GROSIR PAKAN & AGRIBISNIS -->
${priceCatalogSection({ idx: '02', onlyPakan: true, defaultTab: 'pakan' })}

<!-- [03] FASILITAS -->
<section id="fasilitas-produksi" class="scroll-mt-24 border-t border-slate-200 bg-white py-20 lg:py-28">
  <div class="wrap">
    ${sectionHead('03', 'Fasilitas Produksi Bandung', 'Dua lokasi.<br />Satu rantai pasok.')}
    <div class="grid border border-slate-900 lg:grid-cols-12">
      <div class="hero-canvas hero-canvas-pakan p-7 text-white sm:p-9 lg:col-span-5 lg:p-10">
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
        ${loc('01', 'Gedebage — Kantor Pusat &amp; Logistik', 'Jl. Raya Gedebage No. 95, RT 001/RW 008, Kel. Cisaranten Kidul, Kec. Gedebage, Kota Bandung 40294', 'Pusat administrasi, distribusi, dan lokasi Timbangan Jembatan Elektronik 50.000 Kg &amp; Timbangan 1.000 Kg Merek SONIC yang telah ditera resmi oleh UPT Metrologi Legal Kota Bandung.')}
        ${loc('02', 'Cileunyi — Produksi &amp; Budidaya', 'Lembang Betook / Sukarame, Kel. Cimekar, Kec. Cileunyi, Kab. Bandung 40623', 'Basis operasional agribisnis: pengolahan ransum &amp; konsentrat pakan hewan, budidaya tanaman pakan ternak hijauan, dan produksi pupuk kompos organik.')}
      </div>
    </div>
  </div>
</section>

<!-- [04] QUOTE FORM -->
${quoteForm({
  division: 'pakan',
  labels: { idx: '04' },
  heading: 'Minta daftar harga grosir via WhatsApp.',
  intro: 'Isi kebutuhan singkat — pesan terformat rapi dan langsung terkirim ke layanan WhatsApp resmi kami.',
  services: [
    ['ransum_pakan', '1. Industri Ransum Makanan Hewan'],
    ['konsentrat_pakan', '2. Industri Konsentrat Makanan Hewan'],
    ['tanaman_pakan_kompos', '3. Tanaman Pakan &amp; Kompos Organik']
  ],
  taxes: ['Kontrak Suplai Rutin / Grosir Partai Besar', 'Pengadaan Korporasi / Tender dengan Faktur Pajak PKP'],
  ph1: 'Contoh: 10 Ton Konsentrat Sapi Potong / Sapi Perah / Domba',
  ph2: 'Contoh: Farm Maju Ternak — Lembang / Garut',
  defaultMsg: 'ransum', defaultService: 'ransum_pakan'
})}

<!-- [05] WAWASAN -->
${wawasanSection({
  idx: '05',
  h2: 'Panduan nutrisi ternak<br />&amp; manajemen agribisnis.',
  intro: 'Rujukan formulasi ransum makanan hewan, konsentrat sapi potong &amp; perah, pakan domba/unggas, budidaya hijauan Cileunyi, hingga SOP gudang pakan.',
  articles: featuredPakanArticles
})}

<!-- [06] FAQ -->
${faqSection({
  idx: '06',
  intro: 'Informasi teknis seputar pemesanan grosir ransum, konsentrat sapi/domba/unggas, tanaman pakan, kompos organik, dan Faktur Pajak PPN (PKP).',
  faqs: pakanFaqs,
  ctx
})}
`;

module.exports = page({ headHtml, active: 'pakan', body, ctx, withMap: true, mapIdx: '07' });
