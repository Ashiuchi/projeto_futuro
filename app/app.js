// BACEN • ANPD • Banco do Brasil Study Hub - Core Application Logic

// Default State Initializer
function getDefaultState() {
  const progress = {};
  EDITAL_DATA.forEach(d => {
    d.topics.forEach(t => {
      progress[t.id] = {
        teoria: false,
        exercicios: false,
        rev1: false,
        rev2: false,
        rev3: false,
        status: "Não Iniciado"
      };
    });
  });

  return {
    progress,
    studyLogs: [],
    questionsHistory: [],
    discursivasSaved: {},
    flashcardStats: {},
    weeklyGoalHours: 25.0,
    activeContestFilter: "all"
  };
}

// Load / Save State
function loadState() {
  const saved = localStorage.getItem("bacen_study_hub_data");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const def = getDefaultState();
      return { ...def, ...parsed, progress: { ...def.progress, ...(parsed.progress || {}) } };
    } catch (e) {
      console.error("Error parsing saved state, resetting:", e);
    }
  }
  return getDefaultState();
}

let appState = loadState();
let currentEditalFilter = appState.activeContestFilter || "all";

function saveState() {
  localStorage.setItem("bacen_study_hub_data", JSON.stringify(appState));
  updateDashboardMetrics();
}

// Tab Switching
function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  
  const targetContent = document.getElementById(`tab-${tabId}`);
  const targetBtn = document.getElementById(`btn-tab-${tabId}`);
  
  if (targetContent) targetContent.classList.remove("hidden");
  if (targetBtn) targetBtn.classList.add("active");

  if (tabId === "dashboard") renderDashboard();
  if (tabId === "edital") renderEdital();
  if (tabId === "ciclo") renderCiclo();
  if (tabId === "questoes") renderQuestoes();
  if (tabId === "discursivas") renderDiscursivas();
  if (tabId === "flashcards") renderFlashcards();
}

// --- MODULE 1: DASHBOARD ---
function updateDashboardMetrics() {
  let totalTopics = 0;
  let completedTopics = 0;
  
  // Contest specific metrics
  let bacenTotal = 0, bacenDone = 0;
  let anpdTotal = 0, anpdDone = 0;
  let bbTotal = 0, bbDone = 0;
  let tripleTotal = 0, tripleDone = 0;

  EDITAL_DATA.forEach(d => {
    d.topics.forEach(t => {
      totalTopics++;
      const p = appState.progress[t.id] || {};
      const isDone = p.teoria && p.exercicios;
      if (isDone) completedTopics++;

      const tgts = t.targets || [];
      if (tgts.includes("BACEN")) { bacenTotal++; if (isDone) bacenDone++; }
      if (tgts.includes("ANPD")) { anpdTotal++; if (isDone) anpdDone++; }
      if (tgts.includes("BB")) { bbTotal++; if (isDone) bbDone++; }
      if (tgts.includes("BACEN") && tgts.includes("ANPD") && tgts.includes("BB")) {
        tripleTotal++; if (isDone) tripleDone++;
      }
    });
  });

  const pct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  const pctEl = document.getElementById("dash-progress-pct");
  if (pctEl) pctEl.innerText = `${pct}%`;
  
  const barEl = document.getElementById("dash-progress-bar");
  if (barEl) barEl.style.width = `${pct}%`;

  const compEl = document.getElementById("dash-topics-count");
  if (compEl) compEl.innerText = `${completedTopics} / ${totalTopics} Tópicos`;

  // Weekly Hours calculation
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const weekLogs = appState.studyLogs.filter(l => new Date(l.date) >= oneWeekAgo);
  const totalMinutes = weekLogs.reduce((acc, l) => acc + (l.minutes || 0), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  const hoursEl = document.getElementById("dash-hours-week");
  if (hoursEl) hoursEl.innerText = `${totalHours}h / ${appState.weeklyGoalHours}h`;

  const hoursBar = document.getElementById("dash-hours-bar");
  if (hoursBar) {
    const hPct = Math.min(100, Math.round((totalHours / appState.weeklyGoalHours) * 100));
    hoursBar.style.width = `${hPct}%`;
  }

  // Questions Accuracy
  let certas = 0, erradas = 0;
  appState.questionsHistory.forEach(q => {
    certas += (q.certas || 0);
    erradas += (q.erradas || 0);
  });
  const totalQ = certas + erradas;
  const netScore = (certas - (erradas * 0.5)).toFixed(1);
  const yieldPct = totalQ > 0 ? Math.round((Math.max(0, netScore) / totalQ) * 100) : 0;

  const qEl = document.getElementById("dash-questions-yield");
  if (qEl) qEl.innerText = totalQ > 0 ? `${yieldPct}% (${netScore} pts líq.)` : "Sem dados";

  // Update Synergy Badges in Dashboard
  const bacenPct = bacenTotal > 0 ? Math.round((bacenDone / bacenTotal) * 100) : 0;
  const anpdPct = anpdTotal > 0 ? Math.round((anpdDone / anpdTotal) * 100) : 0;
  const bbPct = bbTotal > 0 ? Math.round((bbDone / bbTotal) * 100) : 0;

  const synBacen = document.getElementById("syn-bacen-pct");
  if (synBacen) synBacen.innerText = `${bacenPct}% (${bacenDone}/${bacenTotal})`;
  const synAnpd = document.getElementById("syn-anpd-pct");
  if (synAnpd) synAnpd.innerText = `${anpdPct}% (${anpdDone}/${anpdTotal})`;
  const synBb = document.getElementById("syn-bb-pct");
  if (synBb) synBb.innerText = `${bbPct}% (${bbDone}/${bbTotal})`;
}

function renderDashboard() {
  updateDashboardMetrics();
  
  // Render Subject Breakdown Cards
  const container = document.getElementById("dash-subjects-grid");
  if (!container) return;

  container.innerHTML = EDITAL_DATA.map(d => {
    let tCount = d.topics.length;
    let done = d.topics.filter(t => (appState.progress[t.id] || {}).teoria).length;
    let pct = Math.round((done / tCount) * 100);

    const synergyBadges = (d.synergies || []).map(s => {
      let bg = s === 'BACEN' ? 'bg-blue-500/20 text-blue-300 border-blue-500/40' :
               s === 'ANPD' ? 'bg-sky-500/20 text-sky-300 border-sky-500/40' :
               'bg-amber-500/20 text-amber-300 border-amber-500/40';
      return `<span class="px-1.5 py-0.5 text-[10px] rounded border ${bg}">${s}</span>`;
    }).join(" ");

    return `
      <div class="glass-card p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition duration-200">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs font-semibold px-2 py-0.5 rounded text-white" style="background-color: ${d.color}">
            ${d.code} • ${d.items} itens
          </span>
          <span class="text-xs text-slate-400">${done}/${tCount} tópicos</span>
        </div>
        <h4 class="font-medium text-slate-200 text-sm mb-1 truncate" title="${d.name}">${d.name}</h4>
        <div class="flex gap-1 mb-2.5">
          ${synergyBadges}
        </div>
        <div class="w-full bg-slate-800 rounded-full h-2">
          <div class="h-2 rounded-full transition-all duration-300" style="width: ${pct}%; background-color: ${d.color}"></div>
        </div>
        <div class="flex justify-between items-center mt-2 text-xs text-slate-400">
          <span>Teoria Concluída</span>
          <span class="font-semibold text-slate-300">${pct}%</span>
        </div>
      </div>
    `;
  }).join("");
}

// --- MODULE 2: EDITAL VERTICALIZADO WITH SYNERGY FILTERS ---
function setEditalFilter(filter) {
  currentEditalFilter = filter;
  appState.activeContestFilter = filter;
  saveState();

  // Update filter buttons style
  document.querySelectorAll(".edital-filter-btn").forEach(btn => {
    btn.classList.remove("bg-blue-600", "text-white", "font-bold");
    btn.classList.add("bg-slate-800", "text-slate-300");
  });
  const activeBtn = document.getElementById(`filter-btn-${filter}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-blue-600", "text-white", "font-bold");
    activeBtn.classList.remove("bg-slate-800", "text-slate-300");
  }

  renderEdital();
}

function renderEdital() {
  const container = document.getElementById("edital-accordion-container");
  if (!container) return;

  const filter = currentEditalFilter;

  let renderedCount = 0;
  const html = EDITAL_DATA.map(d => {
    const matchingTopics = d.topics.filter(t => {
      const tgts = t.targets || [];
      if (filter === "all") return true;
      if (filter === "BACEN") return tgts.includes("BACEN");
      if (filter === "ANPD") return tgts.includes("ANPD");
      if (filter === "BB") return tgts.includes("BB");
      if (filter === "TRIPLE") return tgts.includes("BACEN") && tgts.includes("ANPD") && tgts.includes("BB");
      return true;
    });

    if (matchingTopics.length === 0) return "";

    renderedCount += matchingTopics.length;

    const topicsHtml = matchingTopics.map(t => {
      const p = appState.progress[t.id] || {};
      const tgts = t.targets || [];
      const isTriple = tgts.includes("BACEN") && tgts.includes("ANPD") && tgts.includes("BB");

      let badgeHtml = "";
      if (isTriple) {
        badgeHtml = `<span class="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 ml-2" title="Cai nos 3 concursos!"><i class="fa-solid fa-star text-[9px]"></i> Tríplice Coroa</span>`;
      } else {
        badgeHtml = tgts.map(tg => {
          const color = tg === 'BACEN' ? 'bg-blue-500/20 text-blue-300' :
                        tg === 'ANPD' ? 'bg-sky-500/20 text-sky-300' :
                        'bg-amber-500/20 text-amber-300';
          return `<span class="text-[9px] px-1.5 py-0.5 rounded ${color} font-medium ml-1">${tg}</span>`;
        }).join("");
      }

      return `
        <tr class="border-b border-slate-800 hover:bg-slate-800/40 text-xs sm:text-sm">
          <td class="p-3 text-slate-300 font-medium">
            <div class="flex flex-wrap items-center gap-1">
              <span>${t.title}</span>
              ${badgeHtml}
            </div>
          </td>
          <td class="p-3 text-center">
            <input type="checkbox" ${p.teoria ? 'checked' : ''} onchange="toggleTopicCheck('${t.id}', 'teoria')" class="w-4 h-4 rounded text-blue-600 bg-slate-800 border-slate-600 focus:ring-blue-500 cursor-pointer">
          </td>
          <td class="p-3 text-center">
            <input type="checkbox" ${p.exercicios ? 'checked' : ''} onchange="toggleTopicCheck('${t.id}', 'exercicios')" class="w-4 h-4 rounded text-green-600 bg-slate-800 border-slate-600 focus:ring-green-500 cursor-pointer">
          </td>
          <td class="p-3 text-center">
            <input type="checkbox" ${p.rev1 ? 'checked' : ''} onchange="toggleTopicCheck('${t.id}', 'rev1')" class="w-4 h-4 rounded text-amber-600 bg-slate-800 border-slate-600 focus:ring-amber-500 cursor-pointer">
          </td>
          <td class="p-3 text-center">
            <input type="checkbox" ${p.rev2 ? 'checked' : ''} onchange="toggleTopicCheck('${t.id}', 'rev2')" class="w-4 h-4 rounded text-purple-600 bg-slate-800 border-slate-600 focus:ring-purple-500 cursor-pointer">
          </td>
          <td class="p-3 text-center">
            <input type="checkbox" ${p.rev3 ? 'checked' : ''} onchange="toggleTopicCheck('${t.id}', 'rev3')" class="w-4 h-4 rounded text-indigo-600 bg-slate-800 border-slate-600 focus:ring-indigo-500 cursor-pointer">
          </td>
        </tr>
      `;
    }).join("");

    return `
      <div class="glass-card mb-4 rounded-xl border border-slate-700/60 overflow-hidden">
        <div class="p-4 bg-slate-800/80 flex flex-wrap justify-between items-center gap-2 cursor-pointer" onclick="toggleAccordion('disc-${d.id}')">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full" style="background-color: ${d.color}"></span>
            <h3 class="font-bold text-slate-100">${d.name} <span class="text-xs font-normal text-slate-400">(${d.code} • ${matchingTopics.length} tópicos)</span></h3>
          </div>
          <span class="text-xs bg-slate-700 px-3 py-1 rounded-full text-slate-300">${d.block}</span>
        </div>
        <div id="disc-${d.id}" class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-slate-900/60 text-slate-400 text-xs uppercase">
              <tr>
                <th class="p-3">Tópico & Sinergia</th>
                <th class="p-3 text-center">Teoria</th>
                <th class="p-3 text-center">Questões</th>
                <th class="p-3 text-center">Rev 1</th>
                <th class="p-3 text-center">Rev 2</th>
                <th class="p-3 text-center">Rev 3</th>
              </tr>
            </thead>
            <tbody>
              ${topicsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = html || `<div class="p-8 text-center text-slate-400 glass-card rounded-2xl">Nenhum tópico encontrado para o filtro selecionado.</div>`;

  const countBadge = document.getElementById("edital-visible-count");
  if (countBadge) countBadge.innerText = `${renderedCount} tópicos visíveis`;
}

function toggleTopicCheck(topicId, field) {
  if (!appState.progress[topicId]) appState.progress[topicId] = {};
  appState.progress[topicId][field] = !appState.progress[topicId][field];
  saveState();
}

function toggleAccordion(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("hidden");
}

// --- MODULE 3: CICLO DE ESTUDOS & TIMER ---
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    timerSeconds++;
    document.getElementById("timer-display").innerText = formatTime(timerSeconds);
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 0;
  document.getElementById("timer-display").innerText = "00:00";
}

function logStudySession() {
  if (timerSeconds < 60) {
    alert("Sessão muito curta para registrar (mínimo de 1 minuto).");
    return;
  }
  const discSelect = document.getElementById("timer-subject-select");
  const subjectName = discSelect ? discSelect.value : "Geral";
  const minutes = Math.round(timerSeconds / 60);

  appState.studyLogs.push({
    date: new Date().toISOString(),
    subject: subjectName,
    minutes: minutes
  });

  saveState();
  resetTimer();
  renderCiclo();
  alert(`Registrado com sucesso: ${minutes} minutos em ${subjectName}!`);
}

function renderCiclo() {
  const select = document.getElementById("timer-subject-select");
  if (select) {
    select.innerHTML = EDITAL_DATA.map(d => `<option value="${d.name}">${d.name} (${d.code})</option>`).join("") +
      `<option value="Discursivas P3/P4">Discursivas P3/P4</option><option value="Simulado Global">Simulado Global</option>`;
  }

  const logsContainer = document.getElementById("study-logs-container");
  if (logsContainer) {
    if (appState.studyLogs.length === 0) {
      logsContainer.innerHTML = `<p class="text-xs text-slate-500 italic p-4 text-center">Nenhuma sessão registrada ainda. Use o cronômetro para marcar seus blocos!</p>`;
    } else {
      const recent = [...appState.studyLogs].reverse().slice(0, 10);
      logsContainer.innerHTML = recent.map(l => `
        <div class="flex justify-between items-center py-2 px-3 border-b border-slate-800 text-xs">
          <span class="text-slate-300 font-medium">${l.subject}</span>
          <span class="text-blue-400 font-bold">${l.minutes} min</span>
          <span class="text-slate-500">${new Date(l.date).toLocaleDateString('pt-BR')}</span>
        </div>
      `).join("");
    }
  }
}

// --- MODULE 4: SIMULADOR CEBRASPE & IADES ---
function saveQuestionsSession() {
  const sub = document.getElementById("q-subject-select").value;
  const certas = parseInt(document.getElementById("q-certas").value) || 0;
  const erradas = parseInt(document.getElementById("q-erradas").value) || 0;
  const brancos = parseInt(document.getElementById("q-brancos").value) || 0;
  const obs = document.getElementById("q-obs").value;

  if (certas === 0 && erradas === 0 && brancos === 0) {
    alert("Informe ao menos 1 questão.");
    return;
  }

  // Cebraspe BACEN Rule: -0.5 per wrong item; For multiple choice (IADES/Cesgranrio), only certas count
  const netScore = certas - (erradas * 0.5);

  appState.questionsHistory.push({
    date: new Date().toISOString(),
    subject: sub,
    certas,
    erradas,
    brancos,
    netScore,
    obs
  });

  saveState();
  document.getElementById("q-certas").value = "";
  document.getElementById("q-erradas").value = "";
  document.getElementById("q-brancos").value = "";
  document.getElementById("q-obs").value = "";

  renderQuestoes();
  alert(`Sessão de questões salva! Nota Líquida (regra Cebraspe): ${netScore.toFixed(1)} pts.`);
}

function renderQuestoes() {
  const subSelect = document.getElementById("q-subject-select");
  if (subSelect && subSelect.children.length === 0) {
    subSelect.innerHTML = EDITAL_DATA.map(d => `<option value="${d.name}">${d.name}</option>`).join("");
  }

  const tableBody = document.getElementById("questions-history-table");
  if (tableBody) {
    if (appState.questionsHistory.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" class="text-center p-4 text-xs text-slate-500 italic">Nenhum simulado/bateria registrado.</td></tr>`;
    } else {
      const recent = [...appState.questionsHistory].reverse().slice(0, 15);
      tableBody.innerHTML = recent.map(q => `
        <tr class="border-b border-slate-800 text-xs hover:bg-slate-800/40">
          <td class="p-3 text-slate-300 font-medium">${q.subject}</td>
          <td class="p-3 text-center text-green-400 font-semibold">${q.certas}</td>
          <td class="p-3 text-center text-red-400 font-semibold">${q.erradas}</td>
          <td class="p-3 text-center text-slate-400">${q.brancos}</td>
          <td class="p-3 text-center font-bold text-blue-400">${(q.netScore || 0).toFixed(1)}</td>
          <td class="p-3 text-slate-400 text-xs truncate max-w-xs" title="${q.obs || ''}">${q.obs || '-'}</td>
        </tr>
      `).join("");
    }
  }
}

// --- MODULE 5: LABORATÓRIO DE DISCURSIVAS ---
let currentDiscursivaId = "disc-anpd-01";

function loadDiscursivaPrompt(id) {
  currentDiscursivaId = id;
  const d = DISCURSIVAS_DATA.find(item => item.id === id);
  if (!d) return;

  document.getElementById("disc-title").innerText = `${d.type}: ${d.title}`;
  document.getElementById("disc-meta").innerText = `Limite: ${d.maxLines} linhas • Pontuação: ${d.points} pontos • Área: ${d.area}`;
  document.getElementById("disc-context").innerText = d.context;
  
  const tasksList = document.getElementById("disc-tasks");
  tasksList.innerHTML = d.tasks.map(t => `<li class="mb-1 text-slate-300">${t}</li>`).join("");

  const kwContainer = document.getElementById("disc-keywords");
  kwContainer.innerHTML = d.keywords.map(kw => `
    <span class="text-xs bg-slate-800 text-blue-300 px-2 py-1 rounded border border-blue-500/30"># ${kw}</span>
  `).join("");

  const saved = appState.discursivasSaved[id] || "";
  document.getElementById("disc-textarea").value = saved;
  updateDiscursiveLineCounter();
}

function updateDiscursiveLineCounter() {
  const textarea = document.getElementById("disc-textarea");
  if (!textarea) return;
  const text = textarea.value;
  const lines = text.split("\n");
  const lineCount = text.length === 0 ? 0 : lines.length;
  const charCount = text.length;

  const d = DISCURSIVAS_DATA.find(item => item.id === currentDiscursivaId) || { maxLines: 80, type: "P4", points: 50 };

  const counterEl = document.getElementById("disc-lines-counter");
  if (counterEl) {
    counterEl.innerText = `Linhas: ${lineCount} / ${d.maxLines} • Caracteres: ${charCount}`;
    if (lineCount > d.maxLines) {
      counterEl.classList.add("text-red-400");
    } else {
      counterEl.classList.remove("text-red-400");
    }
  }

  appState.discursivasSaved[currentDiscursivaId] = text;
  localStorage.setItem("bacen_study_hub_data", JSON.stringify(appState));
}

function calculateCebraspeDiscursiveScore() {
  const d = DISCURSIVAS_DATA.find(item => item.id === currentDiscursivaId) || { maxLines: 80, type: "P4", points: 50 };
  const nc = parseFloat(document.getElementById("disc-calc-nc").value) || 0;
  const ne = parseInt(document.getElementById("disc-calc-ne").value) || 0;
  const tl = parseInt(document.getElementById("disc-calc-tl").value) || 1;

  const factor = (d.type && d.type.includes("P3")) ? 6 : 5;
  const penalty = (factor * ne) / Math.max(1, tl);
  const finalScore = Math.max(0, nc - penalty);

  const resEl = document.getElementById("disc-calc-result");
  if (resEl) {
    resEl.innerHTML = `
      <div class="p-3 bg-slate-900/80 rounded-lg border border-slate-700 text-xs">
        <p><span class="text-slate-400">Nota de Conteúdo (NC):</span> <b class="text-slate-200">${nc.toFixed(2)}</b></p>
        <p><span class="text-slate-400">Desconto por Gramática (${factor} × ${ne} ÷ ${tl}):</span> <b class="text-red-400">-${penalty.toFixed(2)}</b></p>
        <p class="text-sm font-bold mt-1"><span class="text-slate-300">Nota Final Discursiva:</span> <span class="text-green-400">${finalScore.toFixed(2)} / ${d.points}</span></p>
      </div>
    `;
  }
}

function renderDiscursivas() {
  const select = document.getElementById("disc-theme-select");
  if (select) {
    select.innerHTML = DISCURSIVAS_DATA.map(d => `<option value="${d.id}">[${d.type}] ${d.title}</option>`).join("");
  }
  loadDiscursivaPrompt(currentDiscursivaId);
}

// --- MODULE 6: FLASHCARDS (SRS) ---
let currentCardIndex = 0;
let isFlipped = false;

function renderFlashcards() {
  if (FLASHCARDS_DATA.length === 0) return;
  const card = FLASHCARDS_DATA[currentCardIndex];
  isFlipped = false;

  document.getElementById("fc-category").innerText = card.category;
  document.getElementById("fc-index").innerText = `${currentCardIndex + 1} / ${FLASHCARDS_DATA.length}`;
  document.getElementById("fc-front-text").innerText = card.question;
  document.getElementById("fc-back-text").innerText = card.answer;

  document.getElementById("fc-front").classList.remove("hidden");
  document.getElementById("fc-back").classList.add("hidden");
}

function flipFlashcard() {
  isFlipped = !isFlipped;
  if (isFlipped) {
    document.getElementById("fc-front").classList.add("hidden");
    document.getElementById("fc-back").classList.remove("hidden");
  } else {
    document.getElementById("fc-front").classList.remove("hidden");
    document.getElementById("fc-back").classList.add("hidden");
  }
}

function nextFlashcard() {
  currentCardIndex = (currentCardIndex + 1) % FLASHCARDS_DATA.length;
  renderFlashcards();
}

function prevFlashcard() {
  currentCardIndex = (currentCardIndex - 1 + FLASHCARDS_DATA.length) % FLASHCARDS_DATA.length;
  renderFlashcards();
}

// --- BACKUP & EXPORT ---
function exportDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `estudos_hub_backup_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importDataJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      appState = imported;
      saveState();
      alert("Backup restaurado com sucesso!");
      location.reload();
    } catch (err) {
      alert("Arquivo JSON inválido.");
    }
  };
  reader.readAsText(file);
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
});
