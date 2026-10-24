/**
 * YTFL.github.io - Core Application Script
 * Authentic repository data and client-side interactions.
 */

// ==========================================================================
// 1. Authentic Repository Registry Data
// ==========================================================================
const APP_REGISTRY = {
    lycoris: {
        id: 'lycoris',
        title: 'Lycoris',
        subtitle: 'Personal Gaming Library & Financial ROI Tracker',
        type: 'mobile',
        repoName: 'Lycoris',
        apkUrl: null,
        iconSrc: 'assets/icons/lycoris.png',
        iconFit: 'icon-contain',
        iconClass: 'icon-lycoris',
        iconGlyph: 'fa-solid fa-gamepad',
        summary: 'Sovereign, offline-first personal gaming library and financial ROI tracker. Catalog titles across Steam, Switch, PlayStation, Xbox, and GOG with itemized DLC tracking, continuous cost-per-hour calculations, pairwise head-to-head tier rankings, and a 10-star evaluation assistant. 100% private with zero telemetry and optional Google Drive sync.',
        fullDesc: 'Lycoris is an offline-first personal gaming library and financial ROI tracker built to answer "what is your playtime actually worth?". It catalogs game libraries across Steam, Nintendo Switch, PlayStation, Xbox, and GOG, maintaining itemized DLC tracking, calculating real-time cost-per-hour rates, and organizing backlog priority with pairwise head-to-head tier rankings.',
        features: [
            'Dual library views: visual Cover Art Grid shelf and high-density tabular list',
            'Continuous Cost-Per-Hour ROI engine tracking playtime against purchase investment',
            'Storefront filtering across Steam, PlayStation, Xbox, Switch, GOG, Epic Games, itch.io, Physical',
            'Pairwise head-to-head tier list ranking engine and 10-star evaluation assistant',
            '100% offline-first privacy with Hive local database and optional Google Drive sync'
        ],
        tech: ['Flutter', 'Dart', 'Riverpod', 'Hive Database', 'Cloudflare Workers', 'Android'],
        github: 'https://github.com/YTFL/Lycoris',
        demo: 'https://lycoris-jet.vercel.app',
        license: 'GNU AGPLv3'
    },
    attendmate: {
        id: 'attendmate',
        title: 'AttendMate',
        subtitle: 'Student Attendance Tracker & Bunk Calculator',
        type: 'mobile',
        repoName: 'AttendMate-Bunk-Calculator-Attendance-Tracker',
        apkUrl: 'https://github.com/YTFL/AttendMate-Bunk-Calculator-Attendance-Tracker/releases/download/v2.2.0/AttendMate-v2.2.0.apk',
        iconSrc: 'assets/icons/attendmate.png',
        iconFit: 'icon-contain',
        iconClass: 'icon-attendmate',
        iconGlyph: 'fa-solid fa-calendar-check',
        summary: 'Attendance tracking app for students — track classes, calculate bunking capacity, auto-log attendance via geofencing, plan future leaves, and maintain target attendance percentage throughout the semester.',
        fullDesc: 'AttendMate 2.0 is an open-source student attendance tracking application. It calculates safe bunking capacity, helps students project future absences, tracks subject-level attendance targets, and maintains timetable schedules with local SQLite persistence.',
        features: [
            'Bunk calculator mathematically projecting safe classes to miss or recovery needed',
            'Semester manager with custom start/end dates and overall threshold targets',
            'Subject-level tracking with acronyms, custom colors, and individual percentage goals',
            'Timetable scheduling, notifications, and offline SQLite storage'
        ],
        tech: ['Flutter', 'Dart', 'SQLite', 'Material Design', 'Android'],
        github: 'https://github.com/YTFL/AttendMate-Bunk-Calculator-Attendance-Tracker',
        demo: 'https://attend-mate-bunk-calculator-attenda.vercel.app',
        license: 'GNU AGPLv3'
    },
    canele: {
        id: 'canele',
        title: 'Canelé',
        subtitle: 'Deterministic Collection Manager & Acquisition Planner',
        type: 'mobile',
        repoName: 'Canele-Deterministic-Collection-Manager-Acquisition-Planner',
        apkUrl: 'https://github.com/YTFL/Canele-Deterministic-Collection-Manager-Acquisition-Planner/releases/download/v1.1.1/Canele-v1.1.1.apk',
        iconSrc: 'assets/icons/canele.jpg',
        iconFit: 'icon-cover',
        iconClass: 'icon-canele',
        iconGlyph: 'fa-solid fa-box-archive',
        summary: 'A local-first, modular acquisition planner and backlog pacing engine for physical collectors and hobbyists. Features deterministic priority waterfalls, isolated monthly quota ledgers, universal spreadsheet imports, and 100% offline privacy.',
        fullDesc: 'Canelé is a local-first acquisition planner for collectors and hobbyists that operates on transparent deterministic arithmetic rather than black-box AI. It features multi-pass rule waterfalls, automated skip projections when items are bought in advance, and monthly budget pacing ledgers.',
        features: [
            '100% deterministic acquisition cadence arithmetic with auditable future month projections',
            'Multi-pass acquisition waterfall with configurable 4-slot monthly target queue',
            'Isolated monthly quota and budget ledgers with pacing controls',
            'Universal spreadsheet import and export (CSV, TSV, JSON) with 100% offline privacy'
        ],
        tech: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'Android'],
        github: 'https://github.com/YTFL/Canele-Deterministic-Collection-Manager-Acquisition-Planner',
        demo: null,
        license: 'GNU AGPLv3'
    },
    simplimap: {
        id: 'simplimap',
        title: 'SimpliMap',
        subtitle: 'Karnaugh Map (K-Map) Solver & Minimizer',
        type: 'mobile',
        repoName: 'SimpliMap-K-map-Simplifier',
        apkUrl: 'https://github.com/YTFL/SimpliMap-K-map-Simplifier/releases/download/v1.0.0/SimpliMap.-.v1.0.0.apk',
        iconSrc: 'assets/icons/simplimap.png',
        iconFit: 'icon-cover',
        iconClass: 'icon-simplimap',
        iconGlyph: 'fa-solid fa-diagram-project',
        summary: 'SimpliMap is a Flutter app for creating, visualizing and minimizing Boolean expressions using Karnaugh maps (K-maps). It provides a solver UI, step-by-step minimization, and components to explore K-map grouping and simplified expressions.',
        fullDesc: 'SimpliMap helps students and engineers explore digital logic simplification. It allows interactive editing of minterms on Karnaugh maps, solves minimal Boolean expressions, and visually illustrates grouping steps and prime implicants.',
        features: [
            'Interactive K-Map grid editor with cell selection and don\'t-care support',
            'Automated Boolean expression minimization and expression simplification',
            'Step-by-step breakdown of K-Map groupings and prime implicant loops',
            'Export and inspect minimal Sum-of-Products (SOP) equations'
        ],
        tech: ['Flutter', 'Dart', 'Boolean Algebra', 'Digital Logic'],
        github: 'https://github.com/YTFL/SimpliMap-K-map-Simplifier',
        demo: null,
        license: 'MIT License'
    },
    warmatrix: {
        id: 'warmatrix',
        title: 'WarMatrix',
        subtitle: 'AI-Enabled Tactical Simulation Console',
        type: 'web',
        iconSrc: 'assets/icons/warmatrix.png',
        iconFit: 'icon-cover',
        iconClass: 'icon-warmatrix',
        iconGlyph: 'fa-solid fa-crosshairs',
        summary: 'WarMatrix is a tactical simulation and command console application featuring a 3D tactical map interface, a scalable backend simulation engine, and an AI integration layer for an immersive operational dashboard.',
        fullDesc: 'WarMatrix is an operational tactical simulation console featuring an interactive 3D tactical map interface built with Three.js and React Three Fiber. It simulates battlefield environments across various terrain and weather conditions, with an AI integration layer delivering real-time scenario briefings and operational mission tracking.',
        features: [
            '3D tactical map environment with camera orbit controls built with Three.js & Fiber',
            'Intelligent scenario synthesis with selectable terrain (Highlands, Urban, Desert) and weather effects',
            'Order of Battle (ORBAT) friendly unit deployment and enemy threat tracking',
            'AI Strategist briefing layer providing high-level operational narratives'
        ],
        tech: ['Next.js 15', 'Three.js', 'React Three Fiber', 'FastAPI', 'TypeScript'],
        github: 'https://github.com/YTFL/WarMatrix',
        demo: 'https://warmatrix.vercel.app',
        license: 'GNU AGPLv3'
    },
    milesofindia: {
        id: 'milesofindia',
        title: 'Miles Of India',
        subtitle: 'AI-Powered Travel Route Companion & Travel Diary',
        type: 'web',
        iconSrc: 'assets/icons/milesofindia.png',
        iconFit: 'icon-cover',
        iconClass: 'icon-milesofindia',
        iconGlyph: 'fa-solid fa-route',
        summary: 'An AI-powered travel companion to plan, document, and discover journeys across India. Features intelligent itinerary generation, a smart travel diary, and a gamified community feed.',
        fullDesc: 'Miles of India helps travelers discover and explore India. It features an AI-assisted Journey Planner that generates day-by-day itineraries based on dates, start cities, travel pace, and interests, paired with an easy travel diary to log moments and photos.',
        features: [
            'AI Journey Planner generating day-by-day customizable routes and activity recommendations',
            'Itinerary customization with stop reordering, personal notes, and draft/public sharing',
            'Travel Diary to log daily memories, photos, notes, and locations',
            'Community travel highlights and regional exploration guides'
        ],
        tech: ['Next.js', 'TypeScript', 'Google Gemini AI', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com/YTFL/Miles-Of-India',
        demo: 'https://miles-of-india.vercel.app',
        license: 'GNU AGPLv3'
    },
    honzuki: {
        id: 'honzuki',
        title: 'HonZuki',
        subtitle: 'Personal Book Sanctuary & Reading Tracker',
        type: 'web',
        iconSrc: 'assets/icons/honzuki.png',
        iconFit: 'icon-contain',
        iconClass: 'icon-honzuki',
        iconGlyph: 'fa-solid fa-book-bookmark',
        summary: 'A modern Progressive Web App for managing your physical book collection. Track reading progress, organize with custom shelves, manage series, and enjoy beautiful adaptive themes. Available as web app and Android APK.',
        fullDesc: 'HonZuki is a personal book sanctuary and Progressive Web App for physical book collectors. It manages book metadata (author, genre, format, ISBN), treats series as first-class entities with missing volume tracking, and provides chapter reading streaks with adaptive themes.',
        features: [
            'Physical book tracking with format, genre, language, and ISBN metadata',
            'Series as first-class entities with smart auto-complete and missing volume tracking',
            'Reading progress tracking with chapter streaks and reading status',
            'Progressive Web App (PWA) with offline support and adaptive themes'
        ],
        tech: ['Next.js', 'React', 'TypeScript', 'Firebase', 'PWA'],
        github: 'https://github.com/YTFL/HonZuki-BookTracker',
        demo: 'https://hon-zuki.vercel.app',
        license: 'Freeware License'
    },
    pdfark: {
        id: 'pdfark',
        title: 'PDFark-Mode',
        subtitle: 'Private & Instant Client-Side PDF Theme Converter',
        type: 'web',
        iconSrc: 'assets/icons/pdfark.png',
        iconFit: 'icon-cover',
        iconClass: 'icon-pdfark',
        iconGlyph: 'fa-solid fa-file-pdf',
        summary: 'Turn any PDF into a clean dark mode or standard light theme instantly. A private, client-side PDF mode converter built for late-night readers and traditional viewing.',
        fullDesc: 'PDFark-Mode is a client-side web utility that inverts PDF documents into clean dark or light themes. All document processing occurs locally inside your browser with zero server uploads, keeping sensitive documents 100% private.',
        features: [
            'Bidirectional theme conversion: instantly switch between dark and light themes',
            '100% private client-side processing with zero server uploads or data retention',
            'Bulk conversion mode to convert multiple PDFs simultaneously into a ZIP archive',
            'Clean in-browser reader interface with instant export controls'
        ],
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Client-Side'],
        github: 'https://github.com/YTFL/PDFark-Mode-PDF-Darkmode-Converter',
        demo: 'https://pdfark-mode.vercel.app/',
        license: 'MIT License'
    },
    hashtable: {
        id: 'hashtable',
        title: 'Hash Table Simulator',
        subtitle: 'Interactive Collision-Resolution Visualizer',
        type: 'web',
        iconSrc: 'assets/icons/hashtable.png',
        iconFit: 'icon-cover',
        iconClass: 'icon-hashtable',
        iconGlyph: 'fa-solid fa-hashtag',
        summary: 'Hash Table Simulator is an interactive, front-end educational simulator for learning how hash tables work. It visualizes insertion, searching, and deletion across three collision-resolution strategies. The app shows each probe step in real time, highlights active cells, and logs every action so users can follow the exact execution path.',
        fullDesc: 'Hash Table Simulator is an interactive educational tool designed for computer science students and instructors to explore collision resolution. It models Separate Chaining, Linear Probing, and Double Hashing with step-by-step probe animations and live execution logs.',
        features: [
            'Side-by-side simulation of Separate Chaining, Linear Probing, and Double Hashing',
            'Interactive table sizing (3 to 50 buckets) with load factor monitoring',
            'Real-time probe sequence visualization with active cell highlighting during operations',
            'Live execution action log detailing probe steps, collision formulas, and paths'
        ],
        tech: ['React 19', 'TypeScript 5', 'Vite', 'Tailwind CSS'],
        github: 'https://github.com/YTFL/Hash-Table-Simulator',
        demo: 'https://hash-simulator-ytfl.vercel.app/',
        license: 'Educational Use Only License (EUOL) v1.0'
    }
};

// ==========================================================================
// 2. Featured Projects Carousel Slides
// ==========================================================================
const SPOTLIGHT_SLIDES = [
    {
        appId: 'warmatrix',
        title: 'WarMatrix',
        tagline: 'AI-Enabled Tactical Simulation Console',
        description: 'WarMatrix is a tactical simulation and command console application featuring a 3D tactical map interface, a scalable backend simulation engine, and an AI integration layer for an immersive operational dashboard.',
        isMobile: false,
        launchUrl: 'https://warmatrix.vercel.app',
        githubUrl: 'https://github.com/YTFL/WarMatrix',
        tech: ['Next.js 15', 'Three.js', 'FastAPI', 'TypeScript']
    },
    {
        appId: 'lycoris',
        title: 'Lycoris',
        tagline: 'Personal Gaming Library & Financial ROI Tracker',
        description: 'Sovereign, offline-first personal gaming library and financial ROI tracker. Catalog titles across Steam, Switch, PlayStation, Xbox, and GOG with itemized DLC tracking and continuous cost-per-hour calculations.',
        isMobile: true,
        apkUrl: null,
        githubUrl: 'https://github.com/YTFL/Lycoris',
        tech: ['Flutter', 'Dart', 'Riverpod', 'Hive']
    },
    {
        appId: 'attendmate',
        title: 'AttendMate',
        tagline: 'Student Attendance Tracker & Bunk Calculator',
        description: 'Attendance tracking app for students — track classes, calculate bunking capacity, auto-log attendance via geofencing, plan future leaves, and maintain target attendance percentage throughout the semester.',
        isMobile: true,
        apkUrl: 'https://github.com/YTFL/AttendMate-Bunk-Calculator-Attendance-Tracker/releases/download/v2.2.0/AttendMate-v2.2.0.apk',
        githubUrl: 'https://github.com/YTFL/AttendMate-Bunk-Calculator-Attendance-Tracker',
        tech: ['Flutter', 'Dart', 'SQLite', 'Android']
    },
    {
        appId: 'honzuki',
        title: 'HonZuki',
        tagline: 'Personal Book Sanctuary & Reading Tracker',
        description: 'A modern Progressive Web App for managing your physical book collection. Track reading progress, organize with custom shelves, manage series, and enjoy beautiful adaptive themes.',
        isMobile: false,
        launchUrl: 'https://hon-zuki.vercel.app',
        githubUrl: 'https://github.com/YTFL/HonZuki-BookTracker',
        tech: ['Next.js', 'React', 'TypeScript', 'PWA']
    }
];

// ==========================================================================
// 3. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initSearchAndFilter();
    initSpotlightCarousel();
    initModalSheet();
    initCardInteractions();
    initAmbientParticles();
    initKeyboardShortcuts();
    syncMobileReleases();
});

// ==========================================================================
// 4. Search Filtering
// ==========================================================================
let currentSearchQuery = '';

function initSearchAndFilter() {
    const searchInput = document.getElementById('app-search');
    const searchClear = document.getElementById('search-clear');
    const resetBtn = document.getElementById('reset-search-btn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.trim().toLowerCase();
            if (searchClear) {
                searchClear.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
            }
            applyFilters();
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                currentSearchQuery = '';
                searchClear.style.display = 'none';
                searchInput.focus();
                applyFilters();
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            currentSearchQuery = '';
            if (searchClear) searchClear.style.display = 'none';
            applyFilters();
        });
    }
}

function applyFilters() {
    const cards = document.querySelectorAll('.store-card');
    const mobileSection = document.getElementById('mobile-apps');
    const webSection = document.getElementById('web-apps');
    const emptyState = document.getElementById('empty-search-state');

    let totalVisible = 0;
    let mobileVisible = 0;
    let webVisible = 0;

    cards.forEach(card => {
        const appId = card.getAttribute('data-app-id');
        const app = APP_REGISTRY[appId];
        if (!app) return;

        // Search query match
        let searchMatch = true;
        if (currentSearchQuery.length > 0) {
            const searchableText = [
                app.title,
                app.subtitle,
                app.summary,
                ...app.tech
            ].join(' ').toLowerCase();

            searchMatch = searchableText.includes(currentSearchQuery);
        }

        if (searchMatch) {
            card.style.display = '';
            totalVisible++;
            if (app.type === 'mobile') mobileVisible++;
            if (app.type === 'web') webVisible++;
        } else {
            card.style.display = 'none';
        }
    });

    if (mobileSection) {
        mobileSection.style.display = (mobileVisible > 0) ? '' : 'none';
    }
    if (webSection) {
        webSection.style.display = (webVisible > 0) ? '' : 'none';
    }
    if (emptyState) {
        emptyState.style.display = (totalVisible === 0) ? 'block' : 'none';
    }
}

// ==========================================================================
// 5. Featured Project Carousel
// ==========================================================================
let currentSlideIndex = 0;
let carouselTimer = null;

function initSpotlightCarousel() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    const carouselContainer = document.getElementById('spotlight-carousel');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            changeSlide((currentSlideIndex - 1 + SPOTLIGHT_SLIDES.length) % SPOTLIGHT_SLIDES.length);
            restartCarouselTimer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            changeSlide((currentSlideIndex + 1) % SPOTLIGHT_SLIDES.length);
            restartCarouselTimer();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeSlide(index);
            restartCarouselTimer();
        });
    });

    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarouselTimer);
        carouselContainer.addEventListener('mouseleave', startCarouselTimer);
        carouselContainer.addEventListener('touchstart', stopCarouselTimer, { passive: true });
    }

    // Initialize first slide
    changeSlide(0);
    startCarouselTimer();
}

function changeSlide(index) {
    currentSlideIndex = index;
    const slideData = SPOTLIGHT_SLIDES[index];
    if (!slideData) return;

    const slider = document.getElementById('spotlight-slider');
    if (!slider) return;

    const dots = document.querySelectorAll('.carousel-indicators .dot');
    dots.forEach((d, i) => {
        if (i === index) d.classList.add('active');
        else d.classList.remove('active');
    });

    const techChipsHtml = slideData.tech.map(t => `<span class="chip-tech">${t}</span>`).join('');

    let actionButtonHtml = '';
    if (slideData.isMobile) {
        if (slideData.apkUrl) {
            actionButtonHtml = `
                <a href="${slideData.apkUrl}" download class="btn-app btn-get">
                    <i class="fa-solid fa-download"></i> Download App
                </a>
            `;
        } else {
            actionButtonHtml = `
                <span class="btn-app btn-disabled">
                    <i class="fa-solid fa-clock"></i> Coming Soon
                </span>
            `;
        }
    } else if (slideData.launchUrl) {
        actionButtonHtml = `
            <a href="${slideData.launchUrl}" target="_blank" rel="noopener" class="btn-app btn-get">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Open App
            </a>
        `;
    }

    slider.innerHTML = `
        <div class="spotlight-slide active" data-app-id="${slideData.appId}">
            <div class="slide-content">
                <div class="app-chips-row" style="margin-bottom: 12px;">
                    ${techChipsHtml}
                </div>
                <h2 class="slide-title">${slideData.title}</h2>
                <p class="slide-tagline">${slideData.tagline}</p>
                <p class="slide-description">${slideData.description}</p>
                <div class="slide-actions">
                    ${actionButtonHtml}
                    <a href="${slideData.githubUrl}" target="_blank" rel="noopener" class="btn-app btn-secondary">
                        <i class="fa-brands fa-github"></i> Repository
                    </a>
                    <button class="btn-app btn-detail-trigger" data-app-id="${slideData.appId}">
                        <i class="fa-solid fa-circle-info"></i> Project Details
                    </button>
                </div>
            </div>
        </div>
    `;

    const trigger = slider.querySelector('.btn-detail-trigger');
    if (trigger) {
        trigger.addEventListener('click', () => {
            openAppModal(slideData.appId);
        });
    }
}

function startCarouselTimer() {
    stopCarouselTimer();
    carouselTimer = setInterval(() => {
        changeSlide((currentSlideIndex + 1) % SPOTLIGHT_SLIDES.length);
    }, 6000);
}

function stopCarouselTimer() {
    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

function restartCarouselTimer() {
    stopCarouselTimer();
    startCarouselTimer();
}

// ==========================================================================
// 6. Project Details Modal Dialog
// ==========================================================================
function initModalSheet() {
    const modal = document.getElementById('app-modal');
    const closeBtn = document.getElementById('modal-close');
    const backdrop = document.getElementById('modal-backdrop');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeAppModal);
    }
    if (backdrop) {
        backdrop.addEventListener('click', closeAppModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display !== 'none') {
            closeAppModal();
        }
    });
}

function openAppModal(appId) {
    const app = APP_REGISTRY[appId];
    if (!app) return;

    const modal = document.getElementById('app-modal');
    const modalContent = document.getElementById('modal-content');
    if (!modal || !modalContent) return;

    let primaryActionHtml = '';
    if (app.type === 'mobile') {
        if (app.apkUrl) {
            primaryActionHtml = `
                <a href="${app.apkUrl}" download class="btn-app btn-get">
                    <i class="fa-solid fa-download"></i> Download App
                </a>
            `;
        } else {
            primaryActionHtml = `
                <span class="btn-app btn-disabled">
                    <i class="fa-solid fa-clock"></i> Coming Soon
                </span>
            `;
        }
    } else if (app.demo) {
        primaryActionHtml = `
            <a href="${app.demo}" target="_blank" rel="noopener" class="btn-app btn-get">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Open App
            </a>
        `;
    }

    const featuresHtml = app.features.map(f => `
        <li><i class="fa-solid fa-check"></i> <span>${f}</span></li>
    `).join('');

    const techChipsHtml = app.tech.map(t => `
        <span class="chip-tech">${t}</span>
    `).join('');

    const modalIconHtml = app.iconSrc ? `
        <div class="modal-icon">
            <img src="${app.iconSrc}" alt="${app.title} icon" class="app-icon-img ${app.iconFit || 'icon-cover'}">
        </div>
    ` : `
        <div class="modal-icon ${app.iconClass}">
            <i class="${app.iconGlyph}"></i>
        </div>
    `;

    modalContent.innerHTML = `
        <div class="modal-header-top">
            ${modalIconHtml}
            <div class="modal-title-area">
                <h2 id="modal-app-name">${app.title}</h2>
                <p class="modal-subtitle">${app.subtitle}</p>
                <div class="app-chips-row">
                    ${techChipsHtml}
                </div>
            </div>
        </div>

        <div class="modal-actions-bar">
            ${primaryActionHtml}
            <a href="${app.github}" target="_blank" rel="noopener" class="btn-app btn-secondary">
                <i class="fa-brands fa-github"></i> View Repository
            </a>
            <button class="btn-app btn-detail-trigger" id="btn-copy-repo" data-repo="${app.github}">
                <i class="fa-regular fa-copy"></i> Copy Clone Command
            </button>
        </div>

        <h3 class="modal-section-title"><i class="fa-solid fa-circle-info"></i> About</h3>
        <p class="modal-description">${app.fullDesc}</p>

        <h3 class="modal-section-title"><i class="fa-solid fa-list-check"></i> Key Features</h3>
        <ul class="modal-features-list">
            ${featuresHtml}
        </ul>

        <h3 class="modal-section-title"><i class="fa-solid fa-table-list"></i> Project Specifications</h3>
        <table class="modal-specs-table">
            <tbody>
                <tr>
                    <td>Repository</td>
                    <td><a href="${app.github}" target="_blank" rel="noopener" style="color: var(--text-primary); text-decoration: underline;">${app.github.replace('https://github.com/', '')}</a></td>
                </tr>
                <tr>
                    <td>Platform</td>
                    <td>${app.type === 'mobile' ? 'Mobile (Android / Flutter)' : 'Web Application'}</td>
                </tr>
                <tr>
                    <td>License</td>
                    <td>${app.license}</td>
                </tr>
                ${app.demo ? `
                <tr>
                    <td>Live Deployment</td>
                    <td><a href="${app.demo}" target="_blank" rel="noopener" style="color: var(--accent-cyan); text-decoration: underline;">${app.demo}</a></td>
                </tr>
                ` : ''}
            </tbody>
        </table>
    `;

    const copyBtn = document.getElementById('btn-copy-repo');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const repoUrl = copyBtn.getAttribute('data-repo') + '.git';
            navigator.clipboard.writeText(`git clone ${repoUrl}`).then(() => {
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied to Clipboard';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy Clone Command';
                }, 2000);
            }).catch(() => {
                copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> ' + repoUrl;
            });
        });
    }

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeAppModal() {
    const modal = document.getElementById('app-modal');
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }
}

// ==========================================================================
// 7. Card Interactions & Parallax Tilt
// ==========================================================================
function initCardInteractions() {
    const detailButtons = document.querySelectorAll('.btn-details, .btn-detail-trigger');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const appId = btn.getAttribute('data-app-id');
            if (appId) openAppModal(appId);
        });
    });

    const cards = document.querySelectorAll('.store-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            const appId = card.getAttribute('data-app-id');
            if (appId) openAppModal(appId);
        });
    });

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const normalizedX = x / (rect.width / 2);
                const normalizedY = y / (rect.height / 2);
                
                const maxTilt = 5;
                const rotateX = -normalizedY * maxTilt;
                const rotateY = normalizedX * maxTilt;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
}

// ==========================================================================
// 8. Keyboard Shortcuts
// ==========================================================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        const searchInput = document.getElementById('app-search');
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });
}

// ==========================================================================
// 9. Falling Petals Ambient Particles Canvas
// ==========================================================================
function initAmbientParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 24;
    let animationFrameId = null;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Petal {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 7 + 5;
            this.speedY = Math.random() * 0.9 + 0.4;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 1.5 - 0.75;
            this.opacity = Math.random() * 0.35 + 0.15;
            this.sway = 0;
            this.swaySpeed = Math.random() * 0.02 + 0.01;
            this.swayAmplitude = Math.random() * 1.5 + 0.5;
        }

        update() {
            this.y += this.speedY;
            this.sway += this.swaySpeed;
            this.x += this.speedX + Math.sin(this.sway) * this.swayAmplitude;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, 2 * Math.PI);

            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
            gradient.addColorStop(0, `rgba(225, 29, 72, ${this.opacity})`);
            gradient.addColorStop(0.8, `rgba(159, 18, 57, ${this.opacity * 0.8})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Petal());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        } else {
            animate();
        }
    });

    animate();
}

// ==========================================================================
// 10. Asynchronous GitHub Releases Synchronizer
// ==========================================================================
function syncMobileReleases() {
    const mobileAppIds = ['lycoris', 'attendmate', 'canele', 'simplimap'];
    mobileAppIds.forEach(id => {
        const app = APP_REGISTRY[id];
        if (!app || !app.repoName) return;

        fetch(`https://api.github.com/repos/YTFL/${app.repoName}/releases`)
            .then(res => {
                if (!res.ok) throw new Error('API request failed');
                return res.json();
            })
            .then(releases => {
                if (Array.isArray(releases) && releases.length > 0) {
                    const latest = releases[0];
                    const apkAsset = latest.assets && latest.assets.find(a => a.name.endsWith('.apk'));
                    if (apkAsset && apkAsset.browser_download_url) {
                        app.apkUrl = apkAsset.browser_download_url;

                        const cardBtns = document.querySelectorAll(`[data-download-for="${id}"]`);
                        cardBtns.forEach(btn => {
                            if (btn.tagName === 'SPAN' || btn.classList.contains('btn-disabled')) {
                                const a = document.createElement('a');
                                a.className = 'btn-store btn-get';
                                a.href = apkAsset.browser_download_url;
                                a.setAttribute('download', '');
                                a.setAttribute('data-download-for', id);
                                a.setAttribute('aria-label', `Download ${app.title} APK`);
                                a.innerHTML = '<i class="fa-solid fa-download"></i> Download App';
                                btn.replaceWith(a);
                            } else if (btn.tagName === 'A') {
                                btn.href = apkAsset.browser_download_url;
                            }
                        });

                        const slideMatch = SPOTLIGHT_SLIDES.find(s => s.appId === id);
                        if (slideMatch) {
                            slideMatch.apkUrl = apkAsset.browser_download_url;
                        }
                    }
                }
            })
            .catch(() => {
                // Keep verified defaults on network failure or rate limit
            });
    });
}
