/**
 * PT. SUMBER GANDA MEKAR — B2B Lead Generation & Google Ads CRO Engine
 * Domain: sumbergandamekar.com
 * Single Point of Contact: CP. Uwem (0823-1818-8863)
 * Tracks all WhatsApp conversion triggers via Google Tag Manager (window.dataLayer)
 */

window.dataLayer = window.dataLayer || [];

/**
 * Standardized Google Ads & GTM WhatsApp Lead Tracking Function
 * Fires both `generate_lead_wa` and `whatsapp_lead_click` for full GTM compatibility
 */
window.trackWhatsAppLead = function (agentName, division, serviceName, buttonLocation) {
  const normalizedAgent = 'uwem';
  const normalizedDivision = (division || 'general').toLowerCase();
  const normalizedService = serviceName || 'konsultasi_umum';
  const normalizedLocation = buttonLocation || 'service_card';

  const gtmAgentCode = 'cp_uwem';

  const gtmDivisionCode =
    normalizedDivision === 'logam' || normalizedDivision === 'logam_konstruksi'
      ? 'logam_konstruksi'
      : normalizedDivision === 'pakan' || normalizedDivision === 'pakan_ternak'
      ? 'pakan_ternak'
      : 'corporate';

  const payloadPrimary = {
    event: 'generate_lead_wa',
    cta: 'whatsapp',
    division: normalizedDivision,
    service: normalizedService,
    agent: normalizedAgent,
    lead_agent: gtmAgentCode,
    lead_division: gtmDivisionCode,
    lead_service: normalizedService,
    button_location: normalizedLocation,
    conversion_domain: 'sumbergandamekar.com',
    page_path: window.location.pathname,
    timestamp: new Date().toISOString()
  };

  const payloadSecondary = {
    event: 'whatsapp_lead_click',
    lead_agent: gtmAgentCode,
    lead_division: gtmDivisionCode,
    lead_service: normalizedService,
    button_location: normalizedLocation,
    conversion_domain: 'sumbergandamekar.com'
  };

  window.dataLayer.push(payloadPrimary);
  window.dataLayer.push(payloadSecondary);

  showConversionToast(normalizedService);
};

/**
 * Non-blocking visual feedback toast when a WhatsApp CTA is clicked
 */
function showConversionToast(service) {
  let toast = document.getElementById('sgm-wa-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sgm-wa-toast';
    toast.className =
      'fixed top-20 right-4 z-[100] max-w-sm bg-slate-900 text-[#F8FAFC] border-l-4 border-[#EB2F33] px-4 py-3 rounded-md shadow-xl transition-all duration-300 transform translate-y-0 opacity-0 pointer-events-none flex items-center gap-3';
    document.body.appendChild(toast);
  }

  const agentLabel = 'CP. Uwem (0823-1818-8863)';

  toast.innerHTML = `
    <span class="w-2 h-2 bg-[#EB2F33] shrink-0"></span>
    <div class="text-xs leading-snug">
      <p class="font-bold text-[#F8FAFC]">Menghubungkan ke WhatsApp Resmi...</p>
      <p class="text-slate-300 mt-0.5">${agentLabel} • Layanan: <span class="uppercase font-semibold text-white">${(service || '').replace(/_/g, ' ')}</span></p>
    </div>
  `;

  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');

  clearTimeout(window._sgmToastTimer);
  window._sgmToastTimer = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 3200);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Global Delegated Click Listener for all [data-cta="whatsapp"] elements
  document.addEventListener('click', (e) => {
    const waLink = e.target.closest('[data-cta="whatsapp"]');
    if (!waLink) return;

    const division = waLink.getAttribute('data-division') || 'general';
    const service = waLink.getAttribute('data-service') || 'konsultasi_b2b';
    const agent = 'uwem';
    const location = waLink.getAttribute('data-location') || 'service_card';

    window.trackWhatsAppLead(agent, division, service, location);
  });

  // 2. Floating WhatsApp Widget (FAB) Toggle & Pop-up Controller
  const fabToggleBtn = document.getElementById('wa-fab-toggle');
  const fabPopup = document.getElementById('wa-fab-popup');
  const fabCloseBtn = document.getElementById('wa-fab-close');
  const navWaTriggers = document.querySelectorAll('[data-open-wa-widget]');

  function openWaPopup() {
    if (!fabPopup || !fabToggleBtn) return;
    fabPopup.classList.remove('hidden', 'opacity-0', 'translate-y-4', 'scale-95', 'pointer-events-none');
    fabPopup.classList.add('opacity-100', 'translate-y-0', 'scale-100');
    fabToggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeWaPopup() {
    if (!fabPopup || !fabToggleBtn) return;
    fabPopup.classList.add('opacity-0', 'translate-y-4', 'scale-95', 'pointer-events-none');
    fabPopup.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
    setTimeout(() => {
      if (fabPopup.classList.contains('opacity-0')) {
        fabPopup.classList.add('hidden');
      }
    }, 200);
    fabToggleBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleWaPopup(e) {
    if (e) e.stopPropagation();
    if (!fabPopup) return;
    const isHidden = fabPopup.classList.contains('hidden') || fabPopup.classList.contains('opacity-0');
    if (isHidden) {
      openWaPopup();
    } else {
      closeWaPopup();
    }
  }

  if (fabToggleBtn) {
    fabToggleBtn.addEventListener('click', toggleWaPopup);
  }
  if (fabCloseBtn) {
    fabCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeWaPopup();
    });
  }

  navWaTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openWaPopup();
    });
  });

  document.addEventListener('click', (e) => {
    if (!fabPopup || fabPopup.classList.contains('hidden')) return;
    if (!fabPopup.contains(e.target) && (!fabToggleBtn || !fabToggleBtn.contains(e.target))) {
      closeWaPopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeWaPopup();
      closeMobileMenu();
    }
  });

  // 2b. Navbar: blends into the Sky Blue hero, turns Cloud White once scrolled
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    const syncHeader = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }

  // 3. Mobile Menu Controller
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');

  function closeMobileMenu() {
    if (!mobileMenuPanel || !mobileMenuBtn) return;
    mobileMenuPanel.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        mobileMenuPanel.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
    });

    mobileMenuPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMobileMenu());
    });
  }

  // 4. Interactive Price Catalog Tabs Controller
  const priceTabBtns = document.querySelectorAll('[data-price-tab]');
  const pricePanels = document.querySelectorAll('[data-price-panel]');
  if (priceTabBtns.length > 0 && pricePanels.length > 0) {
    priceTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-price-tab');
        priceTabBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        pricePanels.forEach((panel) => {
          const panelKey = panel.getAttribute('data-price-panel');
          panel.classList.toggle('hidden', panelKey !== targetTab);
        });
      });
    });
  }

  // 5. Interactive B2B Quick Inquiry Composer (Custom WhatsApp Message Generator — CP. Uwem)
  const quickQuoteForm = document.getElementById('b2b-quick-quote-form');
  if (quickQuoteForm) {
    const serviceSelect = document.getElementById('quote-service');
    const volumeInput = document.getElementById('quote-volume');
    const companyInput = document.getElementById('quote-company');
    const btnUwem = document.getElementById('quote-send-uwem');

    function buildCustomWaUrl(phone, agentLabel, divisionCode) {
      const selectedOption = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
      const serviceText = selectedOption ? selectedOption.text : 'Konsultasi B2B';
      const serviceSlug = selectedOption ? selectedOption.value : 'konsultasi_b2b';
      const volumeText = volumeInput && volumeInput.value.trim() ? volumeInput.value.trim() : 'Partai Besar / B2B';
      const companyText = companyInput && companyInput.value.trim() ? companyInput.value.trim() : '-';

      const rawMessage =
        `Halo ${agentLabel} (PT. Sumber Ganda Mekar), saya mendapat informasi dari website sumbergandamekar.com dan ingin berkonsultasi cepat:\n\n` +
        `• *Layanan:* ${serviceText}\n` +
        `• *Estimasi Volume/Kebutuhan:* ${volumeText}\n` +
        `• *Nama Perusahaan/Lokasi:* ${companyText}\n\n` +
        `Mohon informasi harga dan ketersediaan jadwal. Terima kasih.`;

      return {
        url: `https://wa.me/${phone}?text=${encodeURIComponent(rawMessage)}`,
        serviceSlug,
        divisionCode
      };
    }

    function updateQuickQuoteLinks() {
      const pageDivision = quickQuoteForm.getAttribute('data-form-division') || 'general';
      if (btnUwem) {
        const resUwem = buildCustomWaUrl('6282318188863', 'Pak Uwem', pageDivision);
        btnUwem.setAttribute('href', resUwem.url);
        btnUwem.setAttribute('data-service', resUwem.serviceSlug);
      }
    }

    [serviceSelect, volumeInput, companyInput].forEach((el) => {
      if (el) {
        el.addEventListener('input', updateQuickQuoteLinks);
        el.addEventListener('change', updateQuickQuoteLinks);
      }
    });

    updateQuickQuoteLinks();
  }
});
