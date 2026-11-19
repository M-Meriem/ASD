/* =========================================================
   1. DONNÉES DES 4 MODULES (PDF)
   👉 Remplacez les chemins "pdf" par les vrais chemins de vos fichiers.
   ========================================================= */
const MODULES = [
  {
    id: 'asd1',
    code: 'ASD 1',
    cat: 'algorithmique',
    titre: 'Algorithmique & Structures de Données 1',
    niveau: 'Niveau 1 — Fondamentaux',
    resume: "Les bases indispensables de la pensée algorithmique : de la notion d'algorithme aux premières structures de données statiques. Ce support pose les fondations sur lesquelles reposent tous les modules suivants.",
    chapitres: [
      'Notion d\'algorithme, instructions et représentation',
      'Variables, types de données et opérateurs',
      'Structures conditionnelles (si / sinon / selon)',
      'Structures répétitives (TantQue, Pour, Répéter)',
      'Tableaux à une et deux dimensions',
      'Procédures, fonctions et passage de paramètres',
      'Introduction à la complexité algorithmique'
    ],
    pdf: 'Cours_TP_Langage_C_L1_Informatique-Maouche Meriem.pdf',
    c1: '#4f46e5',
    c2: '#818cf8'
  },
  {
    id: 'asd2',
    code: 'ASD 2',
    cat: 'algorithmique',
    titre: 'Algorithmique & Structures de Données 2',
    niveau: 'Niveau 2 — Structures dynamiques',
    resume: "Passage des structures statiques aux structures dynamiques. Ce module introduit la récursivité, les pointeurs et les structures linéaires chaînées, cœur de la programmation moderne.",
    chapitres: [
      'Sous-programmes : fonctions, procédures, portée des variables, passage de paramètres, récursivité',
     ' Fichiers : texte et binaire, modes d’ouverture, lecture et écriture',
      'Pointeurs et allocation dynamique de mémoire',
       'Types personnalisés : struct, enum, union, typedef'
   
    ],
    pdf: 'Cours_TP_Langage_C_L1_Partie2-Maouche Meriem.pdf',
    c1: '#0d9488',
    c2: '#2dd4bf'
  },
  {
    id: 'asd3',
    code: 'ASD 3',
    cat: 'algorithmique',
    titre: 'Algorithmique & Structures de Données 3',
    niveau: 'Niveau 3 — Structures non linéaires',
    resume: "Les structures de données avancées et les algorithmes fondamentaux : arbres, graphes, recherche et tri. Ce module prépare à la résolution de problèmes complexes et à l'optimisation.",
    chapitres: [
      'Arbres généraux et arbres binaires',
      'Arbres binaires de recherche (ABR) et arbres AVL',
      'Tas binaire (tas-min / tas-max) et files de priorité',
      'Graphes : représentations (matrice, listes d\'adjacence)',
      'Parcours en largeur (BFS) et en profondeur (DFS)',
      'Algorithmes de tri : rapide, fusion, tas',
      'Recherche linéaire, dichotomique et tables de hachage',
      'Complexité asymptotique (O, Ω, Θ)'
    ],
    pdf: 'Guide_ASD3_L2_Informatique-Maouche_Meriem.pdf',
    c1: '#b45309',
    c2: '#f59e0b'
  },
  {
    id: 'langagec',
    code: 'Histoire de la programmation',
    cat: 'Histoire de la programmation',
    titre: 'Langage C — Programmation procédurale',
    niveau: 'Programmation — Mise en pratique',
    resume: "La concrétisation sur machine de tous les concepts d'algorithmique : syntaxe du C, compilation, gestion mémoire et fichiers. Le langage de référence pour comprendre ce que fait réellement un ordinateur.",
    chapitres: [
      'Aux origines : du calcul à l\'idée de programme',

      'Les premiers ordinateurs',
      'Des langages de haut niveau aux compilateurs',

      'Le langage C',
      'Le processeur (CPU)',
      'Le processeur graphique (GPU)',
      'Les langages depuis 1980',
      'Exercices, glossaire, références',
      
    ],
    pdf: 'Histoire_de_la_programmation-Maouche_Meriem.pdf',
    c1: '#be123c',
    c2: '#fb7185'
  }
];

/* =========================================================
   2. RENDU DYNAMIQUE DES CARTES
   ========================================================= */
const grid = document.getElementById('modulesGrid');
const footerModules = document.getElementById('footerModules');
const iconBooks = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
const iconCode = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`;

function renderModules(filter = 'all') {
  const list = filter === 'all' ? MODULES : MODULES.filter(m => m.cat === filter);
  grid.innerHTML = list.map((m, i) => `
    <article class="module-card reveal" style="--mc1:${m.c1};--mc2:${m.c2};transition-delay:${i * 70}ms">
      <div class="module-head">
        <div class="module-icon">${m.cat === 'programmation' ? iconCode : iconBooks}</div>
        <span class="module-code">${m.code}</span>
      </div>
      <h3>${m.titre}</h3>
      <div class="module-level">${m.niveau} · ${m.chapitres.length} chapitres</div>
      <p class="module-desc">${m.resume}</p>
      <ul class="chap-list">
        ${m.chapitres.slice(0, 8).map(c => `<li>${c}</li>`).join('')}
        ${m.chapitres.length > 8 ? `<li style="font-weight:600;color:${m.c1}">+ ${m.chapitres.length - 5} autres chapitres…</li>` : ''}
      </ul>
      <div class="module-actions">
        <button class="btn btn-pdf btn-sm" data-open="${m.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          Aperçu
        </button>
        <a class="btn btn-ghost btn-sm" href="${m.pdf}" download>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
          Télécharger
        </a>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  grid.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.open));
  });
}

footerModules.innerHTML = MODULES.map(m =>
  `<li><a href="#" data-open-footer="${m.id}">${m.code} — ${m.titre.split('—')[0].replace('Algorithmique & Structures de Données','ASD').trim()}</a></li>`
).join('');

footerModules.querySelectorAll('[data-open-footer]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    openModal(a.dataset.openFooter);
  });
});

/* =========================================================
   3. FILTRES
   ========================================================= */
document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderModules(btn.dataset.filter);
});

/* =========================================================
   4. MODAL PDF
   ========================================================= */
const modal = document.getElementById('pdfModal');
const frame = document.getElementById('pdfFrame');
const fallback = document.getElementById('pdfFallback');
const modalTitle = document.getElementById('modalTitle');
const modalSub = document.getElementById('modalSub');
const modalDownload = document.getElementById('modalDownload');

function openModal(id) {
  const m = MODULES.find(x => x.id === id);
  if (!m) return;
  modalTitle.textContent = m.titre;
  modalSub.textContent = m.niveau + ' — ' + m.code;
  modalDownload.href = m.pdf;
  fallback.classList.remove('show');
  frame.style.display = 'block';
  frame.src = m.pdf + '#view=FitH';

  clearTimeout(window.__pdfTimer);
  window.__pdfTimer = setTimeout(() => {
    frame.style.display = 'none';
    fallback.classList.add('show');
  }, 2500);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  frame.src = '';
  document.body.style.overflow = '';
  clearTimeout(window.__pdfTimer);
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* =========================================================
   5. THÈME CLAIR / SOMBRE
   ========================================================= */
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const sunPath = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`;
const moonPath = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeIcon.innerHTML = dark ? sunPath : moonPath;
  localStorage.setItem('mm-theme', dark ? 'dark' : 'light');
}
const savedTheme = localStorage.getItem('mm-theme');
applyTheme(savedTheme === 'dark');

themeBtn.addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
});

/* =========================================================
   6. NAVBAR : menu mobile, scroll, lien actif
   ========================================================= */
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

const progress = document.getElementById('progress');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 20);
  toTop.classList.toggle('show', y > 500);

  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}, { passive: true });

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const sections = [...document.querySelectorAll('main section[id]')];
const navMap = {};
navLinks.querySelectorAll('a').forEach(a => navMap[a.getAttribute('href').slice(1)] = a);

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      Object.values(navMap).forEach(a => a.classList.remove('active'));
      const link = navMap[en.target.id];
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => navObserver.observe(s));

/* =========================================================
   7. ANIMATIONS AU DÉFILEMENT + COMPTEURS + BARRES
   ========================================================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      observer.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });

function observeAll() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

const counters = document.querySelectorAll('[data-count]');
const cObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const target = +el.dataset.count;
    let cur = 0;
    const step = Math.max(1, Math.round(target / 40));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = cur;
    }, 28);
    cObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => cObserver.observe(c));

const bars = document.querySelectorAll('.bar i');
const bObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.style.width = en.target.dataset.w + '%';
      bObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.5 });
bars.forEach(b => bObserver.observe(b));

/* =========================================================
   8. INITIALISATION
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
renderModules();
observeAll();