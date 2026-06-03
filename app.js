// Asset Store Database
const ASSETS_DATA = [
  {
    id: "hdrp-to-builtin",
    title: "HDRP to Built-in Converter",
    category: "tools",
    badgeClass: "badge-tools",
    categoryLabel: "Editor Tools",
    shortDesc: "Unity HDRP 프로젝트의 머티리얼과 텍스처 맵을 Built-in 파이프라인(Standard)으로 일괄 역변환해 주는 유틸리티 스크립트입니다.",
    fullDesc: "Unity의 고사양 HDRP 프로젝트를 레거시 Built-in 파이프라인으로 전환할 때 발생하는 머티리얼 깨짐과 설정 손실 문제를 자동화하여 해결해 줍니다. 텍스처 맵(MaskMap, Normal 등)을 분석하여 Built-in Standard 머티리얼의 메탈릭, 스무스니스 맵으로 자동 분리 및 매핑합니다.",
    price: "Free",
    platforms: ["Unity", "Python Script"],
    features: [
      "HDRP Lit 머티리얼을 Built-in Standard로 일괄 자동 매핑",
      "HDRP MaskMap에서 Metallic 및 Smoothness 채널 분리 추출",
      "다중 텍스처 채널 결합 및 텍스처 포맷 자동 보정 지원",
      "커맨드 라인(Python) 및 에디터 변환 자동화 스크립트 제공"
    ],
    storeUrl: "https://github.com/Akuhu/Homepage",
    docsUrl: "#",
    svgGraphic: `
      <svg viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="190" fill="#0b0e14"/>
        <defs>
          <linearGradient id="hdrpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ec4899"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </linearGradient>
          <linearGradient id="builtinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="100%" stop-color="#1e3a8a"/>
          </linearGradient>
        </defs>
        <!-- Background Grid -->
        <g stroke="#ffffff" stroke-opacity="0.02" stroke-width="1">
          <path d="M0 30 H400 M0 60 H400 M0 90 H400 M0 120 H400 M0 150 H400"/>
          <path d="M50 0 V190 M100 0 V190 M150 0 V190 M200 0 V190 M250 0 V190 M300 0 V190 M350 0 V190"/>
        </g>
        <!-- Logic arrow flow -->
        <path d="M 190 95 L 210 95" stroke="#f3f4f6" stroke-width="3" stroke-linecap="round"/>
        <path d="M 205 90 L 212 95 L 205 100" stroke="#f3f4f6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- HDRP box -->
        <rect x="50" y="70" width="110" height="50" rx="8" fill="url(#hdrpGrad)" filter="drop-shadow(0 0 8px rgba(236,72,153,0.3))"/>
        <text x="105" y="101" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">HDRP</text>
        
        <!-- Built-in box -->
        <rect x="240" y="70" width="110" height="50" rx="8" fill="url(#builtinGrad)" filter="drop-shadow(0 0 8px rgba(59,130,246,0.3))"/>
        <text x="295" y="101" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Built-in</text>
        
        <text x="200" y="150" fill="#9ca3af" font-family="monospace" font-size="10" text-anchor="middle">Material &amp; Shader Downgrade</text>
      </svg>
    `
  },
  {
    id: "hdrp-to-urp",
    title: "HDRP to URP Converter",
    category: "tools",
    badgeClass: "badge-tools",
    categoryLabel: "Editor Tools",
    shortDesc: "Unity HDRP 프로젝트의 머티리얼과 렌더러 설정을 URP(Universal Render Pipeline) 환경에 맞춰 자동 변환해 주는 마이그레이션 툴킷입니다.",
    fullDesc: "고사양 HDRP 리소스를 모바일 및 경량 플랫폼 타겟의 URP 프로젝트로 변환할 때 유용합니다. 머티리얼 매핑부터 조명 강도 보정, URP에 맞는 포스트 프로세싱 볼륨 자동 래핑 기능 등을 포함하고 있습니다.",
    price: "Free",
    platforms: ["Unity", "Python Script"],
    features: [
      "HDRP 머티리얼을 URP Lit 머티리얼로 일괄 컨버전",
      "조명 강도 세팅 자동 배율 조정 및 보정",
      "Volume 시스템 설정을 URP Volume 프로필로 자동 래핑",
      "변환 작업 로그 출력 및 예외 머티리얼 보고"
    ],
    storeUrl: "https://github.com/Akuhu/Homepage",
    docsUrl: "#",
    svgGraphic: `
      <svg viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="190" fill="#0b0e14"/>
        <defs>
          <linearGradient id="hdrpGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ec4899"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </linearGradient>
          <linearGradient id="urpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4"/>
            <stop offset="100%" stop-color="#0891b2"/>
          </linearGradient>
        </defs>
        <!-- Background Grid -->
        <g stroke="#ffffff" stroke-opacity="0.02" stroke-width="1">
          <path d="M0 30 H400 M0 60 H400 M0 90 H400 M0 120 H400 M0 150 H400"/>
          <path d="M50 0 V190 M100 0 V190 M150 0 V190 M200 0 V190 M250 0 V190 M300 0 V190 M350 0 V190"/>
        </g>
        <!-- Logic arrow flow -->
        <path d="M 190 95 L 210 95" stroke="#f3f4f6" stroke-width="3" stroke-linecap="round"/>
        <path d="M 205 90 L 212 95 L 205 100" stroke="#f3f4f6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- HDRP box -->
        <rect x="50" y="70" width="110" height="50" rx="8" fill="url(#hdrpGrad2)" filter="drop-shadow(0 0 8px rgba(236,72,153,0.3))"/>
        <text x="105" y="101" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">HDRP</text>
        
        <!-- URP box -->
        <rect x="240" y="70" width="110" height="50" rx="8" fill="url(#urpGrad)" filter="drop-shadow(0 0 8px rgba(6,182,212,0.3))"/>
        <text x="295" y="101" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">URP</text>
        
        <text x="200" y="150" fill="#9ca3af" font-family="monospace" font-size="10" text-anchor="middle">Material &amp; Pipeline Conversion</text>
      </svg>
    `
  }
];

// App States
let currentFilter = "all";
let searchKeyword = "";

// Element Selectors
const assetsGrid = document.getElementById("assets-grid");
const searchInput = document.getElementById("search-input");
const filterTabs = document.querySelectorAll(".filter-tab");
const modalOverlay = document.getElementById("modal-overlay");

// Initialize Website
document.addEventListener("DOMContentLoaded", () => {
  renderAssets();
  setupFilterListeners();
  setupSearchListener();
  setupModalListeners();
  setupThemeToggle();
});

// Render Assets Grid
function renderAssets() {
  assetsGrid.innerHTML = "";
  
  const filteredAssets = ASSETS_DATA.filter(asset => {
    const matchesCategory = currentFilter === "all" || asset.category === currentFilter;
    const matchesSearch = asset.title.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                          asset.shortDesc.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filteredAssets.length === 0) {
    assetsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-dim);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">검색된 에셋이 없습니다.</p>
        <p style="font-size: 0.9rem;">다른 검색어를 입력하거나 필터를 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  filteredAssets.forEach((asset, index) => {
    const assetCard = document.createElement("div");
    assetCard.className = "asset-card fade-in";
    assetCard.style.animationDelay = `${index * 0.05}s`;
    
    const platformsHtml = asset.platforms.map(p => `<span class="platform-tag">${p}</span>`).join("");
    
    assetCard.innerHTML = `
      <div class="asset-preview">
        ${asset.svgGraphic}
        <span class="asset-badge ${asset.badgeClass}">${asset.categoryLabel}</span>
      </div>
      <div class="asset-body">
        <h3 class="asset-title">${asset.title}</h3>
        <p class="asset-desc">${asset.shortDesc}</p>
        <div class="asset-meta">
          <div class="asset-platform">
            ${platformsHtml}
          </div>
        </div>
        <div class="asset-footer">
          <div class="asset-price" style="font-size: 0.95rem; color: var(--accent-amber); font-weight: 700;">${asset.price}</div>
          <button class="btn-card-cta" onclick="openAssetDetails('${asset.id}')">상세 보기</button>
        </div>
      </div>
    `;
    assetsGrid.appendChild(assetCard);
  });
}

// Setup Filters
function setupFilterListeners() {
  if (!filterTabs || filterTabs.length === 0) return;
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter");
      renderAssets();
    });
  });
}

// Setup Search
function setupSearchListener() {
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
    searchKeyword = e.target.value.trim();
    renderAssets();
  });
}

// Setup Modal
function setupModalListeners() {
  const closeBtn = document.getElementById("modal-close");
  closeBtn.addEventListener("click", closeModal);
  
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
}

// Open Details Modal
function openAssetDetails(assetId) {
  const asset = ASSETS_DATA.find(a => a.id === assetId);
  if (!asset) return;

  const modalGraphic = document.getElementById("modal-graphic");
  const modalTitle = document.getElementById("modal-title");
  const modalPrice = document.getElementById("modal-price");
  const modalTags = document.getElementById("modal-tags");
  const modalDesc = document.getElementById("modal-desc");
  const modalFeaturesList = document.getElementById("modal-features-list");
  const btnStore = document.getElementById("btn-store");
  
  // Set Graphic Header
  modalGraphic.innerHTML = asset.svgGraphic;
  
  // Set Info
  modalTitle.textContent = asset.title;
  modalPrice.textContent = asset.price;
  if (asset.price.toLowerCase() === 'free') {
    modalPrice.style.color = "var(--accent-green)";
  } else {
    modalPrice.style.color = "white";
  }

  // Set Tags
  modalTags.innerHTML = `
    <span class="modal-tag" style="border-color: var(--accent-primary); color: #c084fc;">${asset.categoryLabel}</span>
    ${asset.platforms.map(p => `<span class="modal-tag">${p}</span>`).join("")}
  `;

  modalDesc.textContent = asset.fullDesc;
  
  // Set Features
  modalFeaturesList.innerHTML = asset.features.map(f => `<li>${f}</li>`).join("");
  
  // Set CTA URLs
  const isReleased = !["출시 예정", "개발 중", "기획 중"].includes(asset.price);
  if (isReleased) {
    btnStore.href = asset.storeUrl;
    btnStore.innerHTML = `<i class="fab fa-github" style="margin-right: 6px;"></i> GitHub에서 확인하기`;
    btnStore.style.pointerEvents = "auto";
    btnStore.style.opacity = "1";
  } else {
    btnStore.href = "javascript:void(0)";
    btnStore.innerHTML = `<i class="fas fa-clock" style="margin-right: 6px;"></i> ${asset.price} (준비 중)`;
    btnStore.style.pointerEvents = "none";
    btnStore.style.opacity = "0.6";
  }
  
  // Open Overlay
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

// Close Details Modal
function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// Theme Toggle System
function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  
  const icon = themeToggle.querySelector("i");
  
  // Apply saved theme on startup
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (icon) icon.className = "fas fa-sun";
  } else {
    document.body.classList.remove("dark-mode");
    if (icon) icon.className = "fas fa-moon";
  }
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    // Icon swap
    if (icon) {
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }
  });
}
