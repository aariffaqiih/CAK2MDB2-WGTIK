// home.js
const JournalApp = (() => {
  const assertDependencies = () => {
    if (typeof JOURNALS === "undefined")
      throw new Error("JOURNALS tidak di-load dari data.js");
    if (typeof TEMPLATE_SCHEMA === "undefined")
      throw new Error("TEMPLATE_SCHEMA tidak di-load dari template-schema.js");
    if (typeof IDENTITY === "undefined")
      throw new Error("IDENTITY tidak di-load dari data.js");
  };
  const PADDING = { TARGETS: 3, ACHIEVEMENTS: 3, NEXT_WEEK_PLAN: 3 };
  const INTERPOLATION = { THRESHOLD1: 0.4, THRESHOLD2: 0.8 };
  let state = {
    currentDailyJournal: null,
    currentWeeklyJournal: null,
    activeFilter: "all",
    lastScrollPosition: 0,
    isWeeklyDetailVisible: false,
    dateFrom: null,
    dateTo: null,
    particleAnimationFrame: null,
    particles: [],
    canvas: null,
    ctx: null,
    vw: window.innerWidth,
    vh: window.innerHeight,
    pxPerVh: window.innerHeight / 100,
    greetingIndex: 0,
    scrollTicking: false,
    dom: {
      hero: null,
      about: null,
      journal: null,
      journalHeader: null,
      journalGrid: null,
      modal: null,
      modalBody: null,
      modalBadge: null,
      modalDate: null,
      modalClose: null,
      modalBackdrop: null,
      weeklyDetailContainer: null,
      weeklyContent: null,
      weeklyIdentity: null,
      backBtn: null,
      btnPrint: null,
      btnDocx: null,
      weeklyPrintBtn: null,
      weeklyDocxBtn: null,
      printArea: null,
      dateFrom: null,
      dateTo: null,
      resetDateBtn: null,
      dateRangeWarning: null,
    },
    focusTrapHandler: null,
    previouslyFocused: null,
    greetingIntervalId: null,
  };
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const htmlEsc = (s) => {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };
  const xmlEsc = (s) => {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };
  const isValidImageUrl = (url) => {
    if (!url) return false;
    try {
      const parsed = new URL(url);
      return ["http:", "https:", "data:"].includes(parsed.protocol);
    } catch {
      return false;
    }
  };
  const getIdentity = () =>
    typeof IDENTITY !== "undefined"
      ? IDENTITY
      : { nama: "—", nim: "—", kelas: "—", bio: "", photo: "" };
  const getScrollProgress = (el) => {
    if (!el) return 0;
    const top = el.getBoundingClientRect().top;
    return clamp(1 - top / window.innerHeight, 0, 1);
  };
  const interpolateColor = (p, a, b, c) => {
    let r, g, bb;
    if (p <= INTERPOLATION.THRESHOLD1) {
      const t = p / INTERPOLATION.THRESHOLD1;
      r = a[0] + (b[0] - a[0]) * t;
      g = a[1] + (b[1] - a[1]) * t;
      bb = a[2] + (b[2] - a[2]) * t;
    } else if (p <= INTERPOLATION.THRESHOLD2) {
      const t =
        (p - INTERPOLATION.THRESHOLD1) /
        (INTERPOLATION.THRESHOLD2 - INTERPOLATION.THRESHOLD1);
      r = b[0] + (c[0] - b[0]) * t;
      g = b[1] + (c[1] - b[1]) * t;
      bb = b[2] + (c[2] - b[2]) * t;
    } else {
      r = c[0];
      g = c[1];
      bb = c[2];
    }
    return `rgb(${r | 0},${g | 0},${bb | 0})`;
  };
  const applyVisualEffect = (el, p) => {
    if (!el) return;
    el.style.transform = `scale(${1 - p * 0.5})`;
    el.style.opacity = `${1 - p * 1.5}`;
    el.style.filter = `blur(${p * 3}vh)`;
  };
  const applyShadow = (el, p) => {
    if (!el) return;
    const col = interpolateColor(
      p,
      [255, 255, 255],
      [221, 221, 221],
      [255, 255, 255]
    );
    el.style.boxShadow = `0 0 100vh ${col}`;
  };
  const greetings = [
    "Halo",
    "Bonjour",
    "こんにちは",
    "Helló",
    "مرحبًا",
    "Olá",
    "здравей",
    "Hej",
    "你好",
    "Tere",
    "नमस्ते",
    "Hei",
    "Aloha",
    "안녕하세요",
    "Halló",
    "สวัสดี",
    "Ciao",
    "မင်္ဂလာပါ",
    "Cześć",
    "Привет",
    "Hola",
    "Салом",
    "Xin chào",
    "Hello",
  ];
  const startGreetingRotation = () => {
    const greetingEl = document.getElementById("greeting");
    if (!greetingEl) return;
    if (state.greetingIntervalId) {
      clearInterval(state.greetingIntervalId);
      state.greetingIntervalId = null;
    }
    const ANIM = TEMPLATE_SCHEMA.animation || {
      greetingInterval: 2000,
      greetingFadeTime: 500,
    };
    state.greetingIntervalId = setInterval(() => {
      greetingEl.classList.add("fade-out");
      setTimeout(() => {
        state.greetingIndex = (state.greetingIndex + 1) % greetings.length;
        greetingEl.textContent = greetings[state.greetingIndex];
        greetingEl.classList.remove("fade-out");
      }, ANIM.greetingFadeTime);
    }, ANIM.greetingInterval);
  };
  class Particle {
    constructor(canvasWidth, canvasHeight, pxPerVh, sizeVh) {
      this.pxPerVh = pxPerVh;
      this.sizeVh = sizeVh;
      this.reset(canvasWidth, canvasHeight);
    }
    reset(cw, ch) {
      this.x = Math.random() * cw;
      this.y = Math.random() * ch;
      this.size = this.sizeVh * this.pxPerVh;
      this.vx = (Math.random() - 0.5) * 0.09 * this.pxPerVh;
      this.vy = (Math.random() - 0.5) * 0.09 * this.pxPerVh;
    }
    update(cw, ch) {
      this.x += this.vx;
      this.y += this.vy;
      if (
        this.x < -10 ||
        this.x > cw + 10 ||
        this.y < -10 ||
        this.y > ch + 10
      ) {
        this.reset(cw, ch);
      }
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200,200,200,1)";
      ctx.fill();
    }
  }
  const initParticles = (canvas) => {
    if (!canvas) return;
    state.canvas = canvas;
    state.ctx = canvas.getContext("2d");
    state.vw = window.innerWidth;
    state.vh = window.innerHeight;
    state.pxPerVh = state.vh / 100;
    canvas.width = state.vw;
    canvas.height = state.vh;
    const ANIM = TEMPLATE_SCHEMA.animation || {
      particleCount: 90,
      particleSizeVh: 0.3,
    };
    state.particles = [];
    for (let i = 0; i < ANIM.particleCount; i++) {
      state.particles.push(
        new Particle(state.vw, state.vh, state.pxPerVh, ANIM.particleSizeVh)
      );
    }
  };
  const resizeCanvas = () => {
    if (!state.canvas) return;
    state.vw = window.innerWidth;
    state.vh = window.innerHeight;
    state.pxPerVh = state.vh / 100;
    state.canvas.width = state.vw;
    state.canvas.height = state.vh;
    state.particles.forEach((p) => {
      p.pxPerVh = state.pxPerVh;
      p.size =
        (TEMPLATE_SCHEMA.animation?.particleSizeVh || 0.3) * state.pxPerVh;
    });
  };
  const drawConnections = (ctx, particles, maxDist) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        if (d < maxDist) {
          const alpha = 1 - d / maxDist;
          ctx.strokeStyle = `rgba(200,200,200,${alpha * 0.8})`;
          ctx.lineWidth = 0.09 * state.pxPerVh;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };
  const animateParticles = () => {
    if (!state.ctx || !state.canvas) return;
    if (document.hidden || state.isWeeklyDetailVisible) {
      if (state.particleAnimationFrame) {
        cancelAnimationFrame(state.particleAnimationFrame);
        state.particleAnimationFrame = null;
      }
      return;
    }
    state.ctx.clearRect(0, 0, state.vw, state.vh);
    for (const p of state.particles) {
      p.update(state.vw, state.vh);
      p.draw(state.ctx);
    }
    const maxDist =
      (TEMPLATE_SCHEMA.animation?.connectionDistVh || 12) * state.pxPerVh;
    drawConnections(state.ctx, state.particles, maxDist);
    state.particleAnimationFrame = requestAnimationFrame(animateParticles);
  };
  const handleScroll = () => {
    if (!state.scrollTicking) {
      window.requestAnimationFrame(() => {
        const { hero, about, journal } = state.dom;
        if (hero && hero.style.display !== "none") {
          const mp = getScrollProgress(about);
          applyVisualEffect(hero, mp);
          applyShadow(about, mp);
        }
        if (about && about.style.display !== "none") {
          const jp = getScrollProgress(journal);
          applyVisualEffect(about, jp);
          applyShadow(journal, jp);
        }
        state.scrollTicking = false;
      });
      state.scrollTicking = true;
    }
  };
  const renderJournals = (filter) => {
    const grid = state.dom.journalGrid;
    if (!grid) return;
    try {
      const sorted = [...JOURNALS].sort((a, b) =>
        b.dateSort.localeCompare(a.dateSort)
      );
      const byType =
        filter === "all" ? sorted : sorted.filter((j) => j.type === filter);
      const filtered = byType.filter((j) => {
        if (state.dateFrom && j.dateSort < state.dateFrom) return false;
        if (state.dateTo && j.dateSort > state.dateTo) return false;
        return true;
      });
      grid.innerHTML = "";
      if (filtered.length === 0) {
        const msg = document.createElement("p");
        msg.style.cssText =
          "grid-column:1/-1;text-align:center;color:var(--color-tertiary);padding:var(--size-3x04) 0;";
        msg.textContent = TEMPLATE_SCHEMA.ui?.noEntries || "Belum ada entri.";
        grid.appendChild(msg);
        return;
      }
      filtered.forEach((journal, i) => {
        const card = buildCard(journal, i);
        grid.appendChild(card);
      });
    } catch (e) {
      console.error("Render error:", e);
      grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:red;">Terjadi kesalahan saat memuat jurnal.</p>`;
    }
  };
  const buildCard = (journal, index) => {
    const card = document.createElement("div");
    card.className = "journal-card";
    card.style.animationDelay = `${index * 0.06}s`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Buka jurnal ${journal.date}`);
    card.setAttribute("aria-haspopup", "dialog");
    const meta = document.createElement("div");
    meta.className = "card-meta";
    const dateSpan = document.createElement("span");
    dateSpan.className = "card-date";
    dateSpan.textContent = journal.date;
    const badgeSpan = document.createElement("span");
    badgeSpan.className = `card-badge ${
      journal.type === "daily" ? "daily" : "weekly"
    }`;
    badgeSpan.textContent = journal.type === "daily" ? "Harian" : "Mingguan";
    meta.appendChild(dateSpan);
    meta.appendChild(badgeSpan);
    const divider = document.createElement("div");
    divider.className = "card-divider";
    card.appendChild(meta);
    card.appendChild(divider);
    if (journal.type === "daily") {
      const d = journal.daily || {};
      const targets = d.targets || [];
      const targetsDiv = document.createElement("div");
      targetsDiv.className = "card-targets";
      targets.slice(0, 2).forEach((t) => {
        const item = document.createElement("div");
        item.className = "card-target-item";
        item.textContent = t;
        targetsDiv.appendChild(item);
      });
      if (targets.length > 2) {
        const more = document.createElement("div");
        more.className = "card-target-item";
        more.style.opacity = "0.5";
        more.textContent = `+ ${targets.length - 2} target lainnya`;
        targetsDiv.appendChild(more);
      }
      card.appendChild(targetsDiv);
      if (d.results) {
        const snippet = document.createElement("p");
        snippet.className = "card-snippet";
        snippet.textContent = d.results;
        card.appendChild(snippet);
      }
      const score = d.reflection?.score ?? 0;
      const scoreRow = document.createElement("div");
      scoreRow.className = "card-score";
      const scoreLabel = document.createElement("span");
      scoreLabel.className = "card-score-label";
      scoreLabel.textContent =
        TEMPLATE_SCHEMA.ui?.productivityLabel || "Produktivitas";
      const barContainer = document.createElement("div");
      barContainer.className = "card-score-bar";
      const barFill = document.createElement("div");
      barFill.className = "card-score-fill";
      barFill.style.width = `${score * 10}%`;
      barContainer.appendChild(barFill);
      const scoreNum = document.createElement("span");
      scoreNum.className = "card-score-num";
      scoreNum.textContent = `${score}/10`;
      scoreRow.appendChild(scoreLabel);
      scoreRow.appendChild(barContainer);
      scoreRow.appendChild(scoreNum);
      card.appendChild(scoreRow);
    } else {
      const w = journal.weekly || {};
      const achievements = w.achievements || [];
      const achDiv = document.createElement("div");
      achDiv.className = "card-achievements";
      achievements.slice(0, 2).forEach((a) => {
        const item = document.createElement("div");
        item.className = "card-achievement";
        item.textContent = a;
        achDiv.appendChild(item);
      });
      if (achievements.length > 2) {
        const more = document.createElement("div");
        more.className = "card-achievement";
        more.style.opacity = "0.5";
        more.textContent = `+ ${achievements.length - 2} capaian lainnya`;
        achDiv.appendChild(more);
      }
      card.appendChild(achDiv);
      const progress = w.semesterTarget?.progress ?? 0;
      const progRow = document.createElement("div");
      progRow.className = "card-progress-row";
      const progLabel = document.createElement("span");
      progLabel.className = "card-score-label";
      progLabel.textContent =
        TEMPLATE_SCHEMA.ui?.progressLabel || "Progress Semester";
      const progBar = document.createElement("div");
      progBar.className = "card-progress-bar";
      const progFill = document.createElement("div");
      progFill.className = "card-progress-fill";
      progFill.style.width = `${progress}%`;
      progBar.appendChild(progFill);
      const progNum = document.createElement("span");
      progNum.className = "card-progress-num";
      progNum.textContent = `${progress}%`;
      progRow.appendChild(progLabel);
      progRow.appendChild(progBar);
      progRow.appendChild(progNum);
      card.appendChild(progRow);
    }
    const readMore = document.createElement("div");
    readMore.className = "card-read-more";
    readMore.textContent = TEMPLATE_SCHEMA.ui?.readMore || "Baca selengkapnya";
    const arrow = document.createElement("i");
    arrow.className = "ph ph-arrow-right";
    arrow.setAttribute("aria-hidden", "true");
    readMore.appendChild(arrow);
    card.appendChild(readMore);
    const openHandler = (e) => {
      if (journal.type === "weekly") {
        showWeeklyDetail(journal);
      } else {
        openModal(journal);
      }
    };
    card.addEventListener("click", openHandler);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openHandler(e);
      }
    });
    return card;
  };
  const openModal = (journal) => {
    try {
      state.currentDailyJournal = journal;
      const { modal, modalBody, modalBadge, modalDate, modalClose } = state.dom;
      if (!modal || !modalBody) return;
      modalBadge.className = "card-badge daily";
      modalBadge.textContent = "Harian";
      modalDate.textContent = journal.date;
      modalBody.innerHTML = "";
      const sections = buildDailyDetailDOM(journal);
      sections.forEach((sec) => modalBody.appendChild(sec));
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      modalBody.scrollTop = 0;
      state.previouslyFocused = document.activeElement;
      trapFocus(modal);
      modalClose.focus();
    } catch (e) {
      console.error("Gagal membuka modal:", e);
      showErrorBanner("Terjadi kesalahan saat membuka jurnal.");
    }
  };
  const closeModal = () => {
    const modal = state.dom.modal;
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    state.currentDailyJournal = null;
    if (state.focusTrapHandler) {
      modal.removeEventListener("keydown", state.focusTrapHandler);
      state.focusTrapHandler = null;
    }
    if (state.previouslyFocused && state.previouslyFocused.focus) {
      state.previouslyFocused.focus();
    }
  };
  const trapFocus = (modal) => {
    if (state.focusTrapHandler) {
      modal.removeEventListener("keydown", state.focusTrapHandler);
      state.focusTrapHandler = null;
    }
    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = modal.querySelectorAll(focusableSelector);
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    modal.addEventListener("keydown", handleKeyDown);
    state.focusTrapHandler = handleKeyDown;
  };
  const findSection = (sections, field) => {
    return sections.find((s) => s.field === field);
  };
  const buildDailyDetailDOM = (journal) => {
    const d = journal.daily || {};
    const allSections = TEMPLATE_SCHEMA.daily.sections;
    const s0 = findSection(allSections, "targets");
    const s1 = findSection(allSections, "activities");
    const s2 = findSection(allSections, "results");
    const s3 = findSection(allSections, "obstacles");
    const s4 = findSection(allSections, "solutions");
    const s5 = findSection(allSections, "reflection");
    if (!s0 || !s1 || !s2 || !s3 || !s4 || !s5) {
      throw new Error("Schema daily tidak lengkap");
    }
    const sections = [];
    const createTitle = (num, title, isWeekly = false) => {
      const div = document.createElement("div");
      div.className = "detail-section-title";
      const spanNum = document.createElement("span");
      spanNum.className = `section-num ${isWeekly ? "weekly-num" : ""}`;
      spanNum.textContent = num;
      div.appendChild(spanNum);
      div.appendChild(document.createTextNode(" " + title));
      return div;
    };
    const sec0 = document.createElement("div");
    sec0.className = "detail-section";
    sec0.appendChild(createTitle(s0.num, s0.title + " (" + journal.date + ")"));
    const list0 = document.createElement("div");
    list0.className = "detail-list";
    (d.targets || []).forEach((t, i) => {
      const item = document.createElement("div");
      item.className = "detail-list-item";
      const bullet = document.createElement("span");
      bullet.className = "bullet";
      bullet.textContent = "→";
      item.appendChild(bullet);
      const span = document.createElement("span");
      span.textContent = `${s0.itemPrefix} ${i + 1}: ${t}`;
      item.appendChild(span);
      list0.appendChild(item);
    });
    sec0.appendChild(list0);
    sections.push(sec0);
    const sec1 = document.createElement("div");
    sec1.className = "detail-section";
    sec1.appendChild(createTitle(s1.num, s1.title));
    const table = document.createElement("table");
    table.className = "detail-table";
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    s1.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col.label;
      trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    (d.activities || []).forEach((a) => {
      const tr = document.createElement("tr");
      const tdTime = document.createElement("td");
      tdTime.textContent = a.time;
      const tdAct = document.createElement("td");
      tdAct.textContent = a.activity;
      const tdOut = document.createElement("td");
      tdOut.textContent = a.output;
      const tdStat = document.createElement("td");
      tdStat.textContent = a.status;
      tdStat.className = a.status === "✓" ? "status-done" : "status-process";
      tr.appendChild(tdTime);
      tr.appendChild(tdAct);
      tr.appendChild(tdOut);
      tr.appendChild(tdStat);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    sec1.appendChild(table);
    sections.push(sec1);
    const sec2 = document.createElement("div");
    sec2.className = "detail-section";
    sec2.appendChild(createTitle(s2.num, s2.title));
    const pResults = document.createElement("p");
    pResults.className = "detail-paragraph";
    pResults.textContent = d.results || "";
    sec2.appendChild(pResults);
    sections.push(sec2);
    const sec3 = document.createElement("div");
    sec3.className = "detail-section";
    sec3.appendChild(createTitle(s3.num, s3.title));
    const sub3 = document.createElement("div");
    sub3.className = "detail-sub";
    s3.subFields.forEach((sf) => {
      const item = document.createElement("div");
      item.className = "detail-sub-item";
      const labelSpan = document.createElement("span");
      labelSpan.className = "detail-sub-label";
      labelSpan.textContent = sf.label;
      const valSpan = document.createElement("span");
      valSpan.className = "detail-sub-value";
      valSpan.textContent = d.obstacles?.[sf.key] ?? "—";
      item.appendChild(labelSpan);
      item.appendChild(valSpan);
      sub3.appendChild(item);
    });
    sec3.appendChild(sub3);
    sections.push(sec3);
    const sec4 = document.createElement("div");
    sec4.className = "detail-section";
    sec4.appendChild(createTitle(s4.num, s4.title));
    const pSol = document.createElement("p");
    pSol.className = "detail-paragraph";
    pSol.textContent = d.solutions || "";
    sec4.appendChild(pSol);
    sections.push(sec4);
    const sec5 = document.createElement("div");
    sec5.className = "detail-section";
    sec5.appendChild(createTitle(s5.num, s5.title));
    const sub5 = document.createElement("div");
    sub5.className = "detail-sub";
    s5.subFields.forEach((sf) => {
      const item = document.createElement("div");
      item.className = "detail-sub-item";
      const labelSpan = document.createElement("span");
      labelSpan.className = "detail-sub-label";
      labelSpan.textContent = sf.label;
      const valSpan = document.createElement("span");
      valSpan.className = "detail-sub-value";
      valSpan.textContent = d.reflection?.[sf.key] ?? "";
      item.appendChild(labelSpan);
      item.appendChild(valSpan);
      sub5.appendChild(item);
    });
    sec5.appendChild(sub5);
    const scoreDiv = document.createElement("div");
    scoreDiv.className = "detail-score";
    const scoreNum = document.createElement("span");
    scoreNum.className = "detail-score-num";
    scoreNum.textContent = d.reflection?.score ?? "";
    const scoreInfo = document.createElement("div");
    scoreInfo.className = "detail-score-info";
    const scoreLabel = document.createElement("span");
    scoreLabel.className = "detail-score-label";
    scoreLabel.textContent = s5.scoreLabel;
    const scoreBar = document.createElement("div");
    scoreBar.className = "detail-score-bar";
    const scoreFill = document.createElement("div");
    scoreFill.className = "detail-score-fill";
    scoreFill.style.width = `${(d.reflection?.score || 0) * 10}%`;
    scoreBar.appendChild(scoreFill);
    scoreInfo.appendChild(scoreLabel);
    scoreInfo.appendChild(scoreBar);
    scoreDiv.appendChild(scoreNum);
    scoreDiv.appendChild(scoreInfo);
    sec5.appendChild(scoreDiv);
    sections.push(sec5);
    return sections;
  };
  // --------------------- Helper functions for weekly-to-daily navigation ---------------------
  const DAY_OFFSET_MAP = {
    Senin: 0, Selasa: 1, Rabu: 2, Kamis: 3,
    Jumat: 4, Sabtu: 5, Minggu: 6
  };
  const getDateFromWeekDay = (weeklyJournal, dayName) => {
    if (!weeklyJournal?.dateSort) {
      console.warn('getDateFromWeekDay: weeklyJournal atau dateSort tidak valid');
      return null;
    }
    const offset = DAY_OFFSET_MAP[dayName];
    if (offset === undefined) {
      console.warn(`getDateFromWeekDay: nama hari tidak dikenal "${dayName}"`);
      return null;
    }
    const [year, month, day] = weeklyJournal.dateSort.split('-').map(Number);
    const baseDate = new Date(Date.UTC(year, month - 1, day));
    const targetDate = new Date(baseDate);
    targetDate.setUTCDate(baseDate.getUTCDate() + offset);
    const yyyy = targetDate.getUTCFullYear();
    const mm = String(targetDate.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(targetDate.getUTCDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };
  const findDailyJournalByDate = (dateStr) => {
    if (!dateStr) return null;
    return JOURNALS.find(j => j.type === 'daily' && j.dateSort === dateStr);
  };
  // --------------------------------------------------------------------------------------------
  const showWeeklyDetail = (journal) => {
    try {
      state.lastScrollPosition = window.scrollY;
      state.currentWeeklyJournal = journal;
      state.isWeeklyDetailVisible = true;
      const {
        journalHeader,
        journalGrid,
        weeklyDetailContainer,
        weeklyContent,
        weeklyIdentity,
      } = state.dom;
      if (!weeklyDetailContainer || !weeklyContent) return;
      if (journalHeader) journalHeader.style.display = "none";
      if (journalGrid) journalGrid.style.display = "none";
      weeklyDetailContainer.style.display = "block";
      let noteEl = weeklyDetailContainer.querySelector(".weekly-note");
      if (!noteEl) {
        noteEl = document.createElement("div");
        noteEl.className = "weekly-note";
        const header = weeklyDetailContainer.querySelector(".detail-header");
        header.insertAdjacentElement("afterend", noteEl);
      }
      noteEl.textContent =
        "Untuk info lebih detail per hari, bisa klik tombol kembali dan baca jurnal harian yang ada.";
      weeklyContent.innerHTML = "";
      const sections = buildWeeklyDetailDOM(journal);
      sections.forEach((sec) => weeklyContent.appendChild(sec));
      weeklyIdentity.innerHTML = "";
      const identityElements = buildIdentityElements();
      identityElements.forEach((el) => weeklyIdentity.appendChild(el));
      const url = new URL(window.location.href);
      const weekParam = url.searchParams.get("week");
      const newWeek = journal.weekly.weekNumber.toString();
      if (weekParam !== newWeek) {
        url.searchParams.set("week", newWeek);
        history.pushState({}, "", url);
      }
      document.title = `Jurnal Mingguan - ${journal.date}`;
      toggleFaceMe(false);
      if (state.particleAnimationFrame) {
        cancelAnimationFrame(state.particleAnimationFrame);
        state.particleAnimationFrame = null;
      }
    } catch (e) {
      console.error("Gagal menampilkan detail mingguan:", e);
      showErrorBanner("Terjadi kesalahan saat membuka jurnal mingguan.");
    }
  };
  const buildIdentityElements = () => {
    const id = getIdentity();
    const elements = [];
    const header = document.createElement("div");
    header.className = "identity-header";
    header.textContent =
      TEMPLATE_SCHEMA.ui?.identityHeader || "Identitas Mahasiswa";
    elements.push(header);
    const addRow = (label, value) => {
      const row = document.createElement("div");
      row.className = "identity-row";
      const lbl = document.createElement("span");
      lbl.className = "identity-label";
      lbl.textContent = label;
      const val = document.createElement("span");
      val.textContent = value ?? "—";
      row.appendChild(lbl);
      row.appendChild(val);
      elements.push(row);
    };
    addRow("Nama:", id.nama);
    addRow("NIM:", id.nim);
    addRow("Kelas:", id.kelas ?? "—");
    addRow(
      "Dosen Pengampu:",
      TEMPLATE_SCHEMA.ui?.dosenPengampu || "Rakhmad Maulidi, S.Kom., M.Kom."
    );
    addRow(
      "Tujuan:",
      TEMPLATE_SCHEMA.ui?.tujuan ||
        "Web untuk memenuhi tugas Weekly Journal WGTIK."
    );
    return elements;
  };
  const hideWeeklyDetail = () => {
    const { weeklyDetailContainer, journalHeader, journalGrid } = state.dom;
    if (weeklyDetailContainer) weeklyDetailContainer.style.display = "none";
    if (journalHeader) journalHeader.style.display = "";
    if (journalGrid) journalGrid.style.display = "";
    toggleFaceMe(true);
    state.isWeeklyDetailVisible = false;
    state.currentWeeklyJournal = null;
    const url = new URL(window.location.href);
    url.searchParams.delete("week");
    history.replaceState({}, "", url);
    document.title = "'Aarif Faqiih - Journal";
    setTimeout(() => {
      window.scrollTo(0, state.lastScrollPosition);
    }, 0);
    if (!document.hidden) {
      animateParticles();
    }
  };
  const buildWeeklyDetailDOM = (journal) => {
    const w = journal.weekly || {};
    const allSections = TEMPLATE_SCHEMA.weekly.sections;
    const s0 = findSection(allSections, "activities");
    const s1 = findSection(allSections, "achievements");
    const s2 = findSection(allSections, "semesterTarget");
    const s3 = findSection(allSections, "obstacles");
    const s4 = findSection(allSections, "evaluation");
    const s5 = findSection(allSections, "nextWeekPlan");
    if (!s0 || !s1 || !s2 || !s3 || !s4 || !s5) {
      throw new Error("Schema weekly tidak lengkap");
    }
    const sections = [];
    const createTitle = (num, title, isWeekly = true) => {
      const div = document.createElement("div");
      div.className = "detail-section-title";
      const spanNum = document.createElement("span");
      spanNum.className = `section-num ${isWeekly ? "weekly-num" : ""}`;
      spanNum.textContent = num;
      div.appendChild(spanNum);
      div.appendChild(document.createTextNode(" " + title));
      return div;
    };
    const sec0 = document.createElement("div");
    sec0.className = "detail-section";
    sec0.appendChild(
      createTitle(s0.num, s0.title + " (" + journal.date + ")", true)
    );
    const table = document.createElement("table");
    table.className = "detail-table";
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    s0.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col.label;
      trHead.appendChild(th);
    });
    // Kolom Aksi
    const thAction = document.createElement("th");
    thAction.textContent = "Aksi";
    thAction.style.width = "10%";
    trHead.appendChild(thAction);
    thead.appendChild(trHead);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    let totalHours = 0;
    (w.activities || []).forEach((a) => {
      const tr = document.createElement("tr");
      const tdDay = document.createElement("td");
      tdDay.textContent = a.day;
      const tdFocus = document.createElement("td");
      tdFocus.textContent = a.focus;
      const tdOut = document.createElement("td");
      tdOut.textContent = a.output;
      const tdDur = document.createElement("td");
      const dur = parseFloat(a.duration) || 0;
      tdDur.textContent = dur + " jam";
      tr.appendChild(tdDay);
      tr.appendChild(tdFocus);
      tr.appendChild(tdOut);
      tr.appendChild(tdDur);
      // Sel Aksi
      const tdAction = document.createElement("td");
      tdAction.className = "weekly-detail-action";
      const btn = document.createElement("button");
      btn.className = "daily-link-btn";
      btn.innerHTML = '<i class="ph ph-eye"></i>';
      btn.setAttribute("aria-label", `Lihat jurnal harian untuk hari ${a.day}`);
      const dateStr = getDateFromWeekDay(journal, a.day);
      const dailyJournal = dateStr ? findDailyJournalByDate(dateStr) : null;
      if (dailyJournal) {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          openModal(dailyJournal);
        });
        btn.disabled = false;
      } else {
        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.title = dateStr ? "Jurnal harian tidak tersedia" : "Tidak dapat menentukan tanggal";
      }
      tdAction.appendChild(btn);
      tr.appendChild(tdAction);
      tbody.appendChild(tr);
      totalHours += dur;
    });
    const trTotal = document.createElement("tr");
    trTotal.className = "detail-table-total-row";
    const tdTotalLabel = document.createElement("td");
    tdTotalLabel.colSpan = 3;
    tdTotalLabel.className = "detail-table-total-label";
    tdTotalLabel.textContent = "Total";
    const tdTotalVal = document.createElement("td");
    tdTotalVal.className = "detail-table-total-value";
    tdTotalVal.textContent = totalHours.toFixed(1) + " jam";
    trTotal.appendChild(tdTotalLabel);
    trTotal.appendChild(tdTotalVal);
    // Total row juga punya kolom aksi kosong
    const tdActionTotal = document.createElement("td");
    tdActionTotal.textContent = "";
    trTotal.appendChild(tdActionTotal);
    tbody.appendChild(trTotal);
    table.appendChild(tbody);
    sec0.appendChild(table);
    sections.push(sec0);
    const sec1 = document.createElement("div");
    sec1.className = "detail-section";
    sec1.appendChild(createTitle(s1.num, s1.title, true));
    const list1 = document.createElement("div");
    list1.className = "detail-list";
    (w.achievements || []).forEach((a) => {
      const item = document.createElement("div");
      item.className = "detail-list-item";
      const bullet = document.createElement("span");
      bullet.className = "bullet weekly-bullet";
      bullet.textContent = "✔";
      item.appendChild(bullet);
      const span = document.createElement("span");
      span.textContent = a;
      item.appendChild(span);
      list1.appendChild(item);
    });
    sec1.appendChild(list1);
    sections.push(sec1);
    const sec2 = document.createElement("div");
    sec2.className = "detail-section";
    sec2.appendChild(createTitle(s2.num, s2.title, true));
    const sub2 = document.createElement("div");
    sub2.className = "detail-sub";
    sub2.style.marginBottom = "var(--size-3x-6)";
    s2.subFields.forEach((sf) => {
      const item = document.createElement("div");
      item.className = "detail-sub-item";
      const labelSpan = document.createElement("span");
      labelSpan.className = "detail-sub-label";
      labelSpan.textContent = sf.label;
      const valSpan = document.createElement("span");
      valSpan.className = "detail-sub-value";
      valSpan.textContent = w.semesterTarget?.[sf.key] ?? "";
      item.appendChild(labelSpan);
      item.appendChild(valSpan);
      sub2.appendChild(item);
    });
    sec2.appendChild(sub2);
    const progRow = document.createElement("div");
    progRow.className = "detail-progress-row";
    const progBar = document.createElement("div");
    progBar.className = "detail-progress-bar";
    const progFill = document.createElement("div");
    progFill.className = "detail-progress-fill";
    progFill.style.width = `${w.semesterTarget?.progress || 0}%`;
    progBar.appendChild(progFill);
    const progNum = document.createElement("span");
    progNum.className = "detail-progress-num";
    progNum.textContent = `${w.semesterTarget?.progress || 0}%`;
    progRow.appendChild(progBar);
    progRow.appendChild(progNum);
    sec2.appendChild(progRow);
    sections.push(sec2);
    const sec3 = document.createElement("div");
    sec3.className = "detail-section";
    sec3.appendChild(createTitle(s3.num, s3.title, true));
    const sub3 = document.createElement("div");
    sub3.className = "detail-sub";
    s3.subFields.forEach((sf) => {
      const item = document.createElement("div");
      item.className = "detail-sub-item";
      const labelSpan = document.createElement("span");
      labelSpan.className = "detail-sub-label";
      labelSpan.textContent = sf.label;
      const valSpan = document.createElement("span");
      valSpan.className = "detail-sub-value";
      valSpan.textContent = w.obstacles?.[sf.key] ?? "—";
      item.appendChild(labelSpan);
      item.appendChild(valSpan);
      sub3.appendChild(item);
    });
    sec3.appendChild(sub3);
    sections.push(sec3);
    const sec4 = document.createElement("div");
    sec4.className = "detail-section";
    sec4.appendChild(createTitle(s4.num, s4.title, true));
    const sub4 = document.createElement("div");
    sub4.className = "detail-sub";
    s4.subFields.forEach((sf) => {
      const item = document.createElement("div");
      item.className = "detail-sub-item";
      const labelSpan = document.createElement("span");
      labelSpan.className = "detail-sub-label";
      labelSpan.textContent = sf.label;
      const valSpan = document.createElement("span");
      valSpan.className = "detail-sub-value";
      valSpan.textContent = w.evaluation?.[sf.key] ?? "";
      item.appendChild(labelSpan);
      item.appendChild(valSpan);
      sub4.appendChild(item);
    });
    sec4.appendChild(sub4);
    sections.push(sec4);
    const sec5 = document.createElement("div");
    sec5.className = "detail-section";
    sec5.appendChild(createTitle(s5.num, s5.title, true));
    const list5 = document.createElement("div");
    list5.className = "detail-list";
    (w.nextWeekPlan || []).forEach((t, i) => {
      const item = document.createElement("div");
      item.className = "detail-list-item";
      const bullet = document.createElement("span");
      bullet.className = "bullet weekly-bullet";
      bullet.textContent = "→";
      item.appendChild(bullet);
      const span = document.createElement("span");
      span.textContent = `${s5.itemPrefix} ${i + 1}: ${t}`;
      item.appendChild(span);
      list5.appendChild(item);
    });
    sec5.appendChild(list5);
    sections.push(sec5);
    return sections;
  };
  const toggleFaceMe = (show) => {
    if (state.dom.hero) state.dom.hero.style.display = show ? "" : "none";
    if (state.dom.about) state.dom.about.style.display = show ? "" : "none";
  };
  const handlePrintClick = () => {
    try {
      if (!state.currentDailyJournal)
        throw new Error("Tidak ada jurnal terpilih");
      const printArea = state.dom.printArea;
      if (!printArea) throw new Error("Print area tidak ditemukan");
      printArea.innerHTML = buildPrintDaily(state.currentDailyJournal);
      window.print();
    } catch (err) {
      console.error("Print error:", err);
      showErrorBanner("Gagal membuka preview cetak: " + err.message);
    }
  };
  const handleWeeklyPrintClick = () => {
    try {
      if (!state.currentWeeklyJournal)
        throw new Error("Tidak ada jurnal mingguan terpilih");
      const printArea = state.dom.printArea;
      if (!printArea) throw new Error("Print area tidak ditemukan");
      printArea.innerHTML = buildPrintWeekly(state.currentWeeklyJournal);
      window.print();
    } catch (err) {
      console.error("Print error:", err);
      showErrorBanner("Gagal membuka preview cetak: " + err.message);
    }
  };
  const afterPrintHandler = () => {
    if (state.dom.printArea) {
      state.dom.printArea.innerHTML = "";
    }
  };
  const printSection = (num, title, content) => {
    return `<div class="print-section"> <div class="print-section-header">${num} ${htmlEsc(
      title
    )}</div> ${content} </div>`;
  };
  const printIdentityBlock = () => {
    const id = getIdentity();
    const idf = TEMPLATE_SCHEMA.identity;
    return `<div class="print-identitas print-section"> <p><strong>${htmlEsc(
      idf.label
    )}</strong> <em>${htmlEsc(idf.note)}</em></p> ${idf.fields
      .map((f) => `<p>${htmlEsc(f.label)}: ${htmlEsc(id[f.key] ?? "—")}</p>`)
      .join("")} </div>`;
  };
  const buildPrintDaily = (journal) => {
    const d = journal.daily || {};
    const sc = TEMPLATE_SCHEMA.daily.sections;
    const [s0, s1, s2, s3, s4, s5] = sc;
    const colHeaders = s1.columns
      .map(
        (col) =>
          `<th style="width:${col.printWidth}">${htmlEsc(col.label)}</th>`
      )
      .join("");
    const actRows = (d.activities || [])
      .map(
        (a) =>
          `<tr><td>${htmlEsc(a.time)}</td><td>${htmlEsc(
            a.activity
          )}</td><td>${htmlEsc(a.output)}</td><td>${htmlEsc(
            a.status
          )}</td></tr>`
      )
      .join("");
    const hintRow =
      d.activities?.length === 0
        ? "<tr><td>08.00-09.30</td><td></td><td></td><td></td></tr>"
        : "";
    const emptyRows =
      '<tr class="print-blank-row"><td></td><td></td><td></td><td></td></tr><tr class="print-blank-row"><td></td><td></td><td></td><td></td></tr>';
    const targets = d.targets || [];
    const targetItems = targets
      .map((t, i) => `<li>${s0.itemPrefix} ${i + 1}: ${htmlEsc(t)}</li>`)
      .join("");
    const padTargets = Array.from({
      length: Math.max(0, PADDING.TARGETS - targets.length),
    })
      .map((_, i) => `<li>${s0.itemPrefix} ${targets.length + i + 1}: —</li>`)
      .join("");
    return `<div class="print-page"> <div class="print-title">${htmlEsc(
      TEMPLATE_SCHEMA.daily.docTitle
    )}</div> ${printIdentityBlock()} </div> <div class="print-page"> ${printSection(
      s0.num,
      s0.title + " (" + journal.date + ")",
      `<p class="print-note">${htmlEsc(
        s0.note
      )}</p><ul>${targetItems}${padTargets}</ul>`
    )} ${printSection(
      s1.num,
      s1.title,
      `<table class="print-table"><thead><tr>${colHeaders}</tr></thead><tbody>${hintRow}${actRows}${emptyRows}</tbody></table>`
    )} ${printSection(
      s2.num,
      s2.title,
      `<p class="print-note">${htmlEsc(s2.note)}</p><p>${htmlEsc(
        d.results || ""
      )}</p>`
    )} ${printSection(
      s3.num,
      s3.title,
      `<ul>${s3.subFields
        .map(
          (sf) =>
            `<li>${htmlEsc(sf.label)}: ${htmlEsc(
              d.obstacles?.[sf.key] ?? "—"
            )}</li>`
        )
        .join("")}</ul>`
    )} ${printSection(
      s4.num,
      s4.title,
      `<p>${htmlEsc(d.solutions || "")}</p>`
    )} ${printSection(
      s5.num,
      s5.title,
      `<p class="print-note">${htmlEsc(s5.note)}</p> <ul>${s5.subFields
        .map(
          (sf) =>
            `<li>${htmlEsc(sf.label)}: ${htmlEsc(
              d.reflection?.[sf.key] ?? ""
            )}</li>`
        )
        .join("")} <li>${htmlEsc(
        s5.scoreLabel
      )}: <span class="print-score">${htmlEsc(
        d.reflection?.score
      )}</span></li></ul>`
    )} </div>`;
  };
  const buildPrintWeekly = (journal) => {
    const w = journal.weekly || {};
    const sc = TEMPLATE_SCHEMA.weekly.sections;
    const [s0, s1, s2, s3, s4, s5] = sc;
    const colHeaders = s0.columns
      .map(
        (col) =>
          `<th style="width:${col.printWidth}">${htmlEsc(col.label)}</th>`
      )
      .join("");
    const activities = w.activities || [];
    let totalHours = 0;
    const actRows = activities
      .map((a) => {
        const dur = parseFloat(a.duration) || 0;
        totalHours += dur;
        return `<tr><td>${htmlEsc(a.day)}</td><td>${htmlEsc(
          a.focus
        )}</td><td>${htmlEsc(a.output)}</td><td>${htmlEsc(
          dur + " jam"
        )}</td></tr>`;
      })
      .join("");
    const totalRow = `<tr class="print-total-row"><td colspan="3" style="text-align:right;">Total</td><td>${totalHours.toFixed(
      1
    )} jam</td></tr>`;
    const emptyRows =
      '<tr class="print-blank-row"><td></td><td></td><td></td><td></td></tr><tr class="print-blank-row"><td></td><td></td><td></td><td></td></tr>';
    const achItems = (w.achievements || [])
      .map((a) => `<li>✔ ${htmlEsc(a)}</li>`)
      .join("");
    const padAch = Array.from({
      length: Math.max(0, PADDING.ACHIEVEMENTS - (w.achievements || []).length),
    })
      .map(() => "<li>✔ —</li>")
      .join("");
    const planItems = (w.nextWeekPlan || [])
      .map((t, i) => `<li>${s5.itemPrefix} ${i + 1}: ${htmlEsc(t)}</li>`)
      .join("");
    const padPlan = Array.from({
      length: Math.max(
        0,
        PADDING.NEXT_WEEK_PLAN - (w.nextWeekPlan || []).length
      ),
    })
      .map(
        (_, i) =>
          `<li>${s5.itemPrefix} ${
            (w.nextWeekPlan || []).length + i + 1
          }: —</li>`
      )
      .join("");
    return `<div class="print-page"> <div class="print-title">${htmlEsc(
      TEMPLATE_SCHEMA.weekly.docTitle
    )}</div> ${printIdentityBlock()} </div> <div class="print-page"> ${printSection(
      s0.num,
      s0.title + " (" + journal.date + ")",
      `<table class="print-table"><thead><tr>${colHeaders}</tr></thead><tbody>${actRows}${totalRow}${emptyRows}</tbody></table>`
    )} ${printSection(
      s1.num,
      s1.title,
      `<p class="print-note">${htmlEsc(
        s1.note
      )}</p><ul>${achItems}${padAch}</ul>`
    )} ${printSection(
      s2.num,
      s2.title,
      `<ul><li>${htmlEsc(s2.subFields[0].label)}: ${htmlEsc(
        w.semesterTarget?.target || ""
      )}</li><li>${htmlEsc(s2.progressLabel)}: ${htmlEsc(
        w.semesterTarget?.progress || 0
      )}%</li><li>${htmlEsc(s2.subFields[1].label)}: ${htmlEsc(
        w.semesterTarget?.note || ""
      )}</li></ul>`
    )} ${printSection(
      s3.num,
      s3.title,
      `<ul>${s3.subFields
        .map(
          (sf) =>
            `<li>${htmlEsc(sf.label)}: ${htmlEsc(
              w.obstacles?.[sf.key] ?? "—"
            )}</li>`
        )
        .join("")}</ul>`
    )} ${printSection(
      s4.num,
      s4.title,
      `<p class="print-note">${htmlEsc(s4.note)}</p><ul>${s4.subFields
        .map(
          (sf) =>
            `<li>${htmlEsc(sf.label)}: ${htmlEsc(
              w.evaluation?.[sf.key] ?? ""
            )}</li>`
        )
        .join("")}</ul>`
    )} ${printSection(
      s5.num,
      s5.title,
      `<ul>${planItems}${padPlan}</ul>`
    )} </div>`;
  };
  const wr = (text, opts = {}) => {
    const rpr = [
      opts.bold ? "<w:b/>" : "",
      opts.italic ? "<w:i/>" : "",
      opts.sz
        ? `<w:sz w:val="${opts.sz}"/><w:szCs w:val="${opts.sz}"/>`
        : '<w:sz w:val="22"/><w:szCs w:val="22"/>',
      opts.color ? `<w:color w:val="${opts.color}"/>` : "",
      '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>',
    ].join("");
    return `<w:r><w:rPr>${rpr}</w:rPr><w:t xml:space="preserve">${xmlEsc(
      text
    )}</w:t></w:r>`;
  };
  const wp = (runs, opts = {}) => {
    const ppr = [];
    if (opts.numId)
      ppr.push(
        `<w:numPr><w:ilvl w:val="0"/><w:numId w:val="${opts.numId}"/></w:numPr>`
      );
    const bdr = [];
    if (opts.borderBottom)
      bdr.push(
        '<w:bottom w:val="single" w:sz="8" w:space="2" w:color="999999"/>'
      );
    if (opts.borderLeft)
      bdr.push(
        '<w:left w:val="single" w:sz="18" w:space="8" w:color="000000"/>'
      );
    if (opts.titleBorder)
      bdr.push(
        '<w:bottom w:val="single" w:sz="12" w:space="4" w:color="000000"/>'
      );
    if (bdr.length) ppr.push(`<w:pBdr>${bdr.join("")}</w:pBdr>`);
    const before = opts.before != null ? opts.before : 0;
    const after = opts.after != null ? opts.after : 120;
    ppr.push(`<w:spacing w:before="${before}" w:after="${after}"/>`);
    if (opts.indent)
      ppr.push(`<w:ind w:left="${opts.indent}" w:hanging="360"/>`);
    if (opts.align) ppr.push(`<w:jc w:val="${opts.align}"/>`);
    const pprStr = ppr.length > 0 ? `<w:pPr>${ppr.join("")}</w:pPr>` : "";
    return `<w:p>${pprStr}${runs}</w:p>`;
  };
  const wtc = (text, width, isHeader = false, colspan = 1) => {
    const shading = isHeader
      ? '<w:shd w:val="clear" w:color="auto" w:fill="E8E8E8"/>'
      : "";
    const gridSpan = colspan > 1 ? `<w:gridSpan w:val="${colspan}"/>` : "";
    return `<w:tc><w:tcPr><w:tcW w:w="${
      width * colspan
    }" w:type="dxa"/>${gridSpan}${shading}<w:tcMar><w:top w:w="72" w:type="dxa"/><w:bottom w:w="72" w:type="dxa"/><w:left w:w="100" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tcMar></w:tcPr><w:p><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr>${wr(
      text || "",
      { bold: isHeader, sz: 20 }
    )}</w:p></w:tc>`;
  };
  const wtr = (cells) => `<w:tr>${cells}</w:tr>`;
  const wtable = (colWidths, rows) => {
    const total = colWidths.reduce((a, b) => a + b, 0);
    const grid = colWidths.map((w) => `<w:gridCol w:w="${w}"/>`).join("");
    return `<w:tbl><w:tblPr><w:tblW w:w="${total}" w:type="dxa"/><w:tblBorders><w:top w:val="single" w:sz="4" w:space="0" w:color="444444"/><w:left w:val="single" w:sz="4" w:space="0" w:color="444444"/><w:bottom w:val="single" w:sz="4" w:space="0" w:color="444444"/><w:right w:val="single" w:sz="4" w:space="0" w:color="444444"/><w:insideH w:val="single" w:sz="4" w:space="0" w:color="444444"/><w:insideV w:val="single" w:sz="4" w:space="0" w:color="444444"/></w:tblBorders><w:tblCellMar><w:top w:w="72" w:type="dxa"/><w:bottom w:w="72" w:type="dxa"/><w:left w:w="100" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${grid}</w:tblGrid>${rows}</w:tbl>`;
  };
  const emptyTr = (colWidths) => {
    const cells = colWidths
      .map(
        (w) =>
          `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/></w:tcPr><w:p><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr><w:r><w:t></w:t></w:r></w:p></w:tc>`
      )
      .join("");
    return `<w:tr><w:trPr><w:trHeight w:val="400" w:hRule="atLeast"/></w:trPr>${cells}</w:tr>`;
  };
  const wsh = (text) =>
    wp(wr(text, { bold: true, sz: 22 }), {
      before: 180,
      after: 80,
      borderBottom: true,
    });
  const wnote = (text) =>
    wp(wr(text, { italic: true, sz: 20, color: "777777" }), {
      before: 40,
      after: 40,
    });
  const wbp = (text) =>
    wp(wr(text, { sz: 22 }), { numId: 1, before: 40, after: 40 });
  const widp = (text) =>
    wp(wr(text, { sz: 22 }), { borderLeft: true, before: 40, after: 40 });
  const wnp = (text) => wp(wr(text, { sz: 22 }), { before: 40, after: 80 });
  const makeDocumentXml = (bodyContent) =>
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14"><w:body>${bodyContent}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1418" w:bottom="1134" w:left="1418"/></w:sectPr></w:body></w:document>`;
  const makeNumberingXml = () =>
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:abstractNum w:abstractNumId="0"><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="720" w:hanging="360"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/></w:rPr></w:lvl></w:abstractNum><w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num></w:numbering>`;
  const makeStylesXml = () =>
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:styleId="Normal" w:default="1"><w:name w:val="Normal"/></w:style></w:styles>`;
  const makeContentTypes = () =>
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`;
  const makeRels = () =>
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;
  const makeWordRels = () =>
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/></Relationships>`;
  const buildDocxDaily = async (journal) => {
    const d = journal.daily || {};
    const id = getIdentity();
    const sc = TEMPLATE_SCHEMA.daily.sections;
    const [s0, s1, s2, s3, s4, s5] = sc;
    const idf = TEMPLATE_SCHEMA.identity;
    const cw = s1.columns.map((col) => col.docxWidth);
    const headerRow = wtr(
      s1.columns.map((col, i) => wtc(col.label, cw[i], true)).join("")
    );
    const activities = d.activities || [];
    const dataRows = activities
      .map((a) =>
        wtr(
          wtc(a.time, cw[0]) +
            wtc(a.activity, cw[1]) +
            wtc(a.output, cw[2]) +
            wtc(a.status, cw[3])
        )
      )
      .join("");
    const hintRow =
      activities.length === 0
        ? wtr(
            wtc("08.00-09.30", cw[0]) +
              wtc("", cw[1]) +
              wtc("", cw[2]) +
              wtc("", cw[3])
          )
        : "";
    const emptyRows = emptyTr(cw) + emptyTr(cw);
    const titlePara = wp(
      wr(TEMPLATE_SCHEMA.daily.docTitle, { bold: true, sz: 28 }),
      { align: "center", before: 0, after: 200, titleBorder: true }
    );
    const targets = d.targets || [];
    const paddedTargets = [...targets];
    while (paddedTargets.length < PADDING.TARGETS) paddedTargets.push("—");
    const body = [
      titlePara,
      wp(
        wr(idf.label, { bold: true, sz: 22 }) +
          wr(" " + idf.note, { italic: true, sz: 22 }),
        { borderLeft: true, before: 120, after: 40 }
      ),
      ...idf.fields.map((f) => widp(f.label + ": " + (id[f.key] ?? "—"))),
      wp('<w:r><w:br w:type="page"/></w:r>', { before: 0, after: 0 }),
      wsh(s0.num + " " + s0.title + " (" + journal.date + ")"),
      wnote(s0.note),
      ...paddedTargets.map((t, i) =>
        wbp(s0.itemPrefix + " " + (i + 1) + ": " + t)
      ),
      wsh(s1.num + " " + s1.title),
      wtable(cw, headerRow + hintRow + dataRows + emptyRows),
      wsh(s2.num + " " + s2.title),
      wnote(s2.note),
      wnp(d.results || ""),
      wsh(s3.num + " " + s3.title),
      ...s3.subFields.map((sf) =>
        wbp(sf.label + ": " + (d.obstacles?.[sf.key] ?? "—"))
      ),
      wsh(s4.num + " " + s4.title),
      wnp(d.solutions || ""),
      wsh(s5.num + " " + s5.title),
      wnote(s5.note),
      ...s5.subFields.map((sf) =>
        wbp(sf.label + ": " + (d.reflection?.[sf.key] ?? ""))
      ),
      wbp(s5.scoreLabel + ": " + (d.reflection?.score ?? "")),
    ].join("\n");
    const zip = new JSZip();
    zip.file("[Content_Types].xml", makeContentTypes());
    zip.file("_rels/.rels", makeRels());
    zip.file("word/_rels/document.xml.rels", makeWordRels());
    zip.file("word/styles.xml", makeStylesXml());
    zip.file("word/numbering.xml", makeNumberingXml());
    zip.file("word/document.xml", makeDocumentXml(body));
    return await zip.generateAsync({ type: "blob" });
  };
  const buildDocxWeekly = async (journal) => {
    const w = journal.weekly || {};
    const sc = TEMPLATE_SCHEMA.weekly.sections;
    const [s0, s1, s2, s3, s4, s5] = sc;
    const id = getIdentity();
    const idf = TEMPLATE_SCHEMA.identity;
    const cw = s0.columns.map((col) => col.docxWidth);
    const headerRow = wtr(
      s0.columns.map((col, i) => wtc(col.label, cw[i], true)).join("")
    );
    const activities = w.activities || [];
    let totalHours = 0;
    const dataRows = activities
      .map((a) => {
        const dur = parseFloat(a.duration) || 0;
        totalHours += dur;
        return wtr(
          wtc(a.day, cw[0]) +
            wtc(a.focus, cw[1]) +
            wtc(a.output, cw[2]) +
            wtc(dur + " jam", cw[3])
        );
      })
      .join("");
    const totalRow = wtr(
      wtc("Total", cw[0] + cw[1] + cw[2], true, 3) +
        wtc(totalHours.toFixed(1) + " jam", cw[3], true)
    );
    const emptyRows = emptyTr(cw) + emptyTr(cw);
    const titlePara = wp(
      wr(TEMPLATE_SCHEMA.weekly.docTitle, { bold: true, sz: 28 }),
      { align: "center", before: 0, after: 200, titleBorder: true }
    );
    const achievements = w.achievements || [];
    const paddedAch = [...achievements];
    while (paddedAch.length < PADDING.ACHIEVEMENTS) paddedAch.push("—");
    const nextWeekPlan = w.nextWeekPlan || [];
    const paddedPlan = [...nextWeekPlan];
    while (paddedPlan.length < PADDING.NEXT_WEEK_PLAN) paddedPlan.push("—");
    const identitasParts = [
      titlePara,
      wp(
        wr(idf.label, { bold: true, sz: 22 }) +
          wr(" " + idf.note, { italic: true, sz: 22 }),
        { borderLeft: true, before: 120, after: 40 }
      ),
      ...idf.fields.map((f) => widp(f.label + ": " + (id[f.key] ?? "—"))),
      wp('<w:r><w:br w:type="page"/></w:r>', { before: 0, after: 0 }),
    ];
    const mainParts = [
      wsh(s0.num + " " + s0.title + " (" + journal.date + ")"),
      wtable(cw, headerRow + dataRows + totalRow + emptyRows),
      wsh(s1.num + " " + s1.title),
      wnote(s1.note),
      ...paddedAch.map((a) => wbp(a)),
      wsh(s2.num + " " + s2.title),
      wbp(s2.subFields[0].label + ": " + (w.semesterTarget?.target || "")),
      wbp(s2.progressLabel + ": " + (w.semesterTarget?.progress || 0) + "%"),
      wbp(s2.subFields[1].label + ": " + (w.semesterTarget?.note || "")),
      wsh(s3.num + " " + s3.title),
      ...s3.subFields.map((sf) =>
        wbp(sf.label + ": " + (w.obstacles?.[sf.key] ?? "—"))
      ),
      wsh(s4.num + " " + s4.title),
      wnote(s4.note),
      ...s4.subFields.map((sf) =>
        wbp(sf.label + ": " + (w.evaluation?.[sf.key] ?? ""))
      ),
      wsh(s5.num + " " + s5.title),
      ...paddedPlan.map((t, i) =>
        wbp(s5.itemPrefix + " " + (i + 1) + ": " + t)
      ),
    ];
    const body = identitasParts.concat(mainParts).join("\n");
    const zip = new JSZip();
    zip.file("[Content_Types].xml", makeContentTypes());
    zip.file("_rels/.rels", makeRels());
    zip.file("word/_rels/document.xml.rels", makeWordRels());
    zip.file("word/styles.xml", makeStylesXml());
    zip.file("word/numbering.xml", makeNumberingXml());
    zip.file("word/document.xml", makeDocumentXml(body));
    return await zip.generateAsync({ type: "blob" });
  };
  const downloadDocx = async (journal, type) => {
    const btn =
      type === "daily"
        ? document.getElementById("btnDocx")
        : document.getElementById("weeklyDocxBtn");
    if (!btn) return;
    btn.disabled = true;
    btn.innerHTML = '<i class="ph ph-spinner"></i> Memproses...';
    try {
      if (typeof JSZip === "undefined") {
        throw new Error(
          "Pustaka JSZip tidak tersedia. Unduhan DOCX tidak dapat dilakukan."
        );
      }
      const blob =
        type === "daily"
          ? await buildDocxDaily(journal)
          : await buildDocxWeekly(journal);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Jurnal_${type === "daily" ? "Harian" : "Mingguan"}_${
        journal.dateSort
      }.docx`;
      a.addEventListener("click", () =>
        setTimeout(() => URL.revokeObjectURL(url), 1000)
      );
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Docx error:", err);
      showErrorBanner("Gagal membuat file .docx: " + err.message);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="ph ph-file-doc"></i> Unduh .docx';
    }
  };
  const handleDocxClick = () => {
    if (state.currentDailyJournal)
      downloadDocx(state.currentDailyJournal, "daily");
  };
  const handleWeeklyDocxClick = () => {
    if (state.currentWeeklyJournal)
      downloadDocx(state.currentWeeklyJournal, "weekly");
  };
  const showErrorBanner = (message) => {
    const existing = document.getElementById("errorBanner");
    if (existing) existing.remove();
    const banner = document.createElement("div");
    banner.id = "errorBanner";
    banner.setAttribute("role", "alert");
    banner.className = "error-banner";
    const icon = document.createElement("span");
    icon.textContent = "❌";
    icon.setAttribute("aria-hidden", "true");
    const text = document.createElement("span");
    text.style.flex = "1";
    text.textContent = message;
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    closeBtn.setAttribute("aria-label", "Tutup");
    closeBtn.className = "banner-close";
    closeBtn.addEventListener("click", () => banner.remove());
    banner.appendChild(icon);
    banner.appendChild(text);
    banner.appendChild(closeBtn);
    document.body.prepend(banner);
    setTimeout(() => {
      if (banner.parentNode) banner.remove();
    }, 5000);
  };
  const validateData = () => {
    const violations = [];
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const idSet = new Set();
    JOURNALS.forEach((journal) => {
      if (!dateRegex.test(journal.dateSort)) {
        violations.push({
          id: journal.id,
          date: journal.date,
          field: "dateSort",
          err: "Format harus YYYY-MM-DD",
        });
      }
      if (idSet.has(journal.id)) {
        violations.push({
          id: journal.id,
          date: journal.date,
          field: "ID",
          err: "Duplikat ID",
        });
      }
      idSet.add(journal.id);
      if (journal.type === "daily") {
        if (!journal.daily) {
          violations.push({
            id: journal.id,
            date: journal.date,
            field: "Schema",
            err: "Objek daily tidak ditemukan",
          });
        } else {
          TEMPLATE_SCHEMA.daily.requiredFields.forEach((field) => {
            if (
              journal.daily[field] === undefined ||
              journal.daily[field] === null
            ) {
              violations.push({
                id: journal.id,
                date: journal.date,
                field,
                err: "Field wajib tidak ditemukan",
              });
            }
          });
          const score = journal.daily?.reflection?.score;
          if (score !== undefined && score !== null) {
            if (typeof score !== "number" || isNaN(score)) {
              violations.push({
                id: journal.id,
                date: journal.date,
                field: "reflection.score",
                err: "Skor harus berupa angka",
              });
            } else if (score < 1 || score > 10) {
              violations.push({
                id: journal.id,
                date: journal.date,
                field: "reflection.score",
                err: "Skor harus antara 1 dan 10",
              });
            } else if (!Number.isInteger(score)) {
              violations.push({
                id: journal.id,
                date: journal.date,
                field: "reflection.score",
                err: "Skor harus bilangan bulat",
              });
            }
          }
        }
      }
      if (journal.type === "weekly") {
        if (!journal.weekly) {
          violations.push({
            id: journal.id,
            date: journal.date,
            field: "Schema",
            err: "Objek weekly tidak ditemukan",
          });
        } else {
          TEMPLATE_SCHEMA.weekly.requiredFields.forEach((field) => {
            if (
              journal.weekly[field] === undefined ||
              journal.weekly[field] === null
            ) {
              violations.push({
                id: journal.id,
                date: journal.date,
                field,
                err: "Field wajib tidak ditemukan",
              });
            }
          });
          if (journal.weekly.activities) {
            journal.weekly.activities.forEach((act, idx) => {
              if (act.duration && isNaN(parseFloat(act.duration))) {
                violations.push({
                  id: journal.id,
                  date: journal.date,
                  field: `activities[${idx}].duration`,
                  err: "Durasi harus berupa angka",
                });
              }
            });
          }
          if (
            journal.weekly.semesterTarget &&
            typeof journal.weekly.semesterTarget.progress !== "number"
          ) {
            violations.push({
              id: journal.id,
              date: journal.date,
              field: "semesterTarget.progress",
              err: "Progress harus berupa angka",
            });
          }
        }
      }
    });
    if (violations.length) {
      console.group(
        "%c⚠️ data.js — Peringatan Integritas Data",
        "color:#b45309;font-weight:bold"
      );
      violations.forEach((v) =>
        console.warn(`[${v.id}] "${v.date}" → ${v.field}: ${v.err}`)
      );
      console.groupEnd();
      const banner = document.createElement("div");
      banner.id = "dataValidationBanner";
      banner.setAttribute("role", "alert");
      banner.className = "validation-banner";
      const icon = document.createElement("span");
      icon.textContent = "⚠️";
      icon.className = "banner-icon";
      const textBlock = document.createElement("div");
      textBlock.className = "banner-text";
      const title = document.createElement("strong");
      title.textContent = "Peringatan Integritas Data (data.js)";
      const list = document.createElement("ul");
      violations.forEach((v) => {
        const li = document.createElement("li");
        li.textContent = `[${v.date}] ${v.field}: ${v.err}`;
        list.appendChild(li);
      });
      textBlock.appendChild(title);
      textBlock.appendChild(list);
      const closeBtn = document.createElement("button");
      closeBtn.textContent = "✕";
      closeBtn.setAttribute("aria-label", "Tutup peringatan");
      closeBtn.className = "banner-close";
      closeBtn.addEventListener("click", () => banner.remove());
      banner.appendChild(icon);
      banner.appendChild(textBlock);
      banner.appendChild(closeBtn);
      document.body.prepend(banner);
      return false;
    }
    return true;
  };
  const loadFromURL = () => {
    const url = new URL(window.location.href);
    const weekParam = url.searchParams.get("week");
    const isDetailVisible = state.isWeeklyDetailVisible;
    if (weekParam) {
      const weekNumber = parseInt(weekParam, 10);
      if (!isNaN(weekNumber)) {
        const journal = JOURNALS.find(
          (j) => j.type === "weekly" && j.weekly.weekNumber === weekNumber
        );
        if (journal) {
          if (!isDetailVisible) showWeeklyDetail(journal);
        } else {
          if (isDetailVisible) hideWeeklyDetail();
          else {
            url.searchParams.delete("week");
            history.replaceState({}, "", url);
          }
        }
      } else {
        if (isDetailVisible) hideWeeklyDetail();
        else {
          url.searchParams.delete("week");
          history.replaceState({}, "", url);
        }
      }
    } else {
      if (isDetailVisible) hideWeeklyDetail();
    }
  };
  const setupEventListeners = () => {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (btn) {
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeFilter = btn.dataset.filter;
        renderJournals(state.activeFilter);
      }
    });
    const {
      modalBackdrop,
      modalClose,
      btnPrint,
      btnDocx,
      weeklyPrintBtn,
      weeklyDocxBtn,
      backBtn,
    } = state.dom;
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (btnPrint) btnPrint.addEventListener("click", handlePrintClick);
    if (btnDocx) btnDocx.addEventListener("click", handleDocxClick);
    if (weeklyPrintBtn)
      weeklyPrintBtn.addEventListener("click", handleWeeklyPrintClick);
    if (weeklyDocxBtn)
      weeklyDocxBtn.addEventListener("click", handleWeeklyDocxClick);
    if (backBtn) backBtn.addEventListener("click", hideWeeklyDetail);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", loadFromURL);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("afterprint", afterPrintHandler);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (state.particleAnimationFrame) {
          cancelAnimationFrame(state.particleAnimationFrame);
          state.particleAnimationFrame = null;
        }
      } else {
        if (!state.isWeeklyDetailVisible && !state.particleAnimationFrame) {
          animateParticles();
        }
      }
    });
    const {
      dateFrom: inputFrom,
      dateTo: inputTo,
      resetDateBtn,
      dateRangeWarning,
    } = state.dom;
    const validateAndApplyRange = () => {
      const from = inputFrom?.value || null;
      const to = inputTo?.value || null;
      const isInvalid = from && to && from > to;
      if (dateRangeWarning) {
        dateRangeWarning.style.display = isInvalid ? "block" : "none";
      }
      if (inputFrom) inputFrom.classList.toggle("invalid-range", !!isInvalid);
      if (inputTo) inputTo.classList.toggle("invalid-range", !!isInvalid);
      if (!isInvalid) {
        state.dateFrom = from;
        state.dateTo = to;
        renderJournals(state.activeFilter);
      }
    };
    if (inputFrom) inputFrom.addEventListener("change", validateAndApplyRange);
    if (inputTo) inputTo.addEventListener("change", validateAndApplyRange);
    if (resetDateBtn) {
      resetDateBtn.addEventListener("click", () => {
        state.dateFrom = null;
        state.dateTo = null;
        if (inputFrom) {
          inputFrom.value = "";
          inputFrom.classList.remove("invalid-range");
        }
        if (inputTo) {
          inputTo.value = "";
          inputTo.classList.remove("invalid-range");
        }
        if (dateRangeWarning) dateRangeWarning.style.display = "none";
        renderJournals(state.activeFilter);
      });
    }
    window.addEventListener("beforeunload", () => {
      if (state.greetingIntervalId) clearInterval(state.greetingIntervalId);
      if (state.particleAnimationFrame)
        cancelAnimationFrame(state.particleAnimationFrame);
    });
  };
  const cacheDom = () => {
    state.dom.hero = document.getElementById("hero");
    state.dom.about = document.getElementById("about");
    state.dom.journal = document.getElementById("journal");
    state.dom.journalHeader = document.querySelector(".journal-header");
    state.dom.journalGrid = document.getElementById("journalGrid");
    state.dom.modal = document.getElementById("journalModal");
    state.dom.modalBody = document.getElementById("modalBody");
    state.dom.modalBadge = document.getElementById("modalBadge");
    state.dom.modalDate = document.getElementById("modalDate");
    state.dom.modalClose = document.getElementById("modalClose");
    state.dom.modalBackdrop = document.getElementById("modalBackdrop");
    state.dom.weeklyDetailContainer = document.getElementById(
      "weeklyDetailContainer"
    );
    state.dom.weeklyContent = document.getElementById("weeklyDetailContent");
    state.dom.weeklyIdentity = document.getElementById("weeklyIdentity");
    state.dom.backBtn = document.getElementById("backToGridBtn");
    state.dom.btnPrint = document.getElementById("btnPrint");
    state.dom.btnDocx = document.getElementById("btnDocx");
    state.dom.weeklyPrintBtn = document.getElementById("weeklyPrintBtn");
    state.dom.weeklyDocxBtn = document.getElementById("weeklyDocxBtn");
    state.dom.printArea = document.getElementById("printArea");
    state.dom.dateFrom = document.getElementById("dateFrom");
    state.dom.dateTo = document.getElementById("dateTo");
    state.dom.resetDateBtn = document.getElementById("resetDateBtn");
    state.dom.dateRangeWarning = document.getElementById("dateRangeWarning");
  };
  const init = () => {
    try {
      assertDependencies();
      cacheDom();
      const id = getIdentity();
      const bioEl = document.getElementById("bio");
      if (bioEl) bioEl.textContent = id.bio || "";
      const photoEl = document.getElementById("photoEl");
      if (photoEl) {
        photoEl.innerHTML = "";
        if (id.photo && isValidImageUrl(id.photo)) {
          const img = document.createElement("img");
          img.src = id.photo;
          img.alt = `Foto ${id.nama}`;
          img.onerror = () => {
            img.style.display = "none";
            photoEl.innerHTML =
              '<span class="photo-placeholder" aria-hidden="true">📁</span>';
          };
          photoEl.appendChild(img);
        } else {
          const placeholder = document.createElement("span");
          placeholder.className = "photo-placeholder";
          placeholder.setAttribute("aria-hidden", "true");
          placeholder.textContent = "📁";
          photoEl.appendChild(placeholder);
        }
      }
      const canvas = document.getElementById("dataParticles");
      if (canvas) {
        initParticles(canvas);
        animateParticles();
      }
      const dataValid = validateData();
      if (dataValid) {
        renderJournals(state.activeFilter);
        loadFromURL();
      } else {
        if (state.dom.journalGrid) {
          state.dom.journalGrid.innerHTML =
            '<p style="grid-column:1/-1;text-align:center;color:red;padding:var(--size-3x04) 0;">Data jurnal tidak valid. Periksa konsol untuk detail.</p>';
        }
      }
      startGreetingRotation();
      setupEventListeners();
    } catch (err) {
      console.error("Init error:", err);
      const errorDiv = document.createElement("div");
      errorDiv.style.cssText =
        "color:red; padding:20px; background:#ffeeee; border:1px solid red; margin:20px;";
      errorDiv.textContent = `⚠️ ${err.message}`;
      document.body.prepend(errorDiv);
    }
  };
  return { init };
})();
JournalApp.init();