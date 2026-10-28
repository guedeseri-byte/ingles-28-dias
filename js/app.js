(() => {
'use strict';

/* ================= dados ================= */
const DAYS = (window.COURSE || []).slice().sort((a, b) => a.n - b.n);
const DAY = n => DAYS.find(d => d.n === n);
const WEEKS = [
  { n: 1, t: 'Estrutura Base & Identidade', d: 'Se apresentar, dizer o que faz, descrever rotinas.' },
  { n: 2, t: 'Vocabulário Prático & Conectivos', d: 'Parar de falar frases de 3 palavras e conectar ideias.' },
  { n: 3, t: 'Passado & Histórias', d: 'Contar o que aconteceu e relatar fatos.' },
  { n: 4, t: 'Futuro, Planos & Emergência', d: 'Planos, conselhos e frases de sobrevivência.' }
];
const STEP_NAMES = { learn: '1 · Aprender', ex: '2 · Exemplos', dlg: 'Diálogo', quiz: 'Praticar', end: 'Falar & Concluir' };
const INTERVAL = [1, 1, 3, 7, 14, 30]; // dias até a próxima revisão por caixa

/* ================= estado ================= */
const KEY = 'ingles28_v1';
const blank = () => ({ done: {}, cards: {}, streak: 0, last: null, rate: 0.9, voice: '', best: {}, self: {}, seen: {} });
let S = load();
function load() {
  try { return Object.assign(blank(), JSON.parse(localStorage.getItem(KEY)) || {}); }
  catch (e) { return blank(); }
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

/* ================= utilidades ================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const view = $('#view');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// **negrito**, __destaque__, {frase em inglês clicável}
const fmt = s => esc(s)
  .replace(/_{3,}/g, '\u0001')
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/__(.+?)__/g, '<mark>$1</mark>')
  .replace(/\{(.+?)\}/g, '<span class="say" data-say="$1">$1</span>')
  .replace(/\n/g, '<br>')
  .replace(/\u0001/g, '<span class="blank">_____</span>');
const plain = s => String(s).replace(/\*\*|__|[{}]/g, '');
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const norm = s => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:"¿¡()]/g, '').replace(/\s+/g, ' ').trim();
const pad = n => String(n).padStart(2, '0');
const dstr = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => dstr(new Date());
const addDays = (n, from = new Date()) => { const d = new Date(from); d.setDate(d.getDate() + n); return dstr(d); };

let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200);
}

function touchStreak() {
  const t = today();
  if (S.last === t) return;
  S.streak = S.last === addDays(-1) ? S.streak + 1 : 1;
  S.last = t; save();
}
function streakNow() { return (S.last === today() || S.last === addDays(-1)) ? S.streak : 0; }

/* ================= voz (text-to-speech) ================= */
const TTS = 'speechSynthesis' in window;
let voices = [];
function loadVoices() {
  if (!TTS) return;
  voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
}
if (TTS) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function pickVoice() {
  if (!voices.length) loadVoices();
  if (S.voice) { const v = voices.find(v => v.name === S.voice); if (v) return v; }
  const us = voices.filter(v => /en[-_]US/i.test(v.lang));
  return us.find(v => /Samantha|Google US|Aria|Jenny|Ava|Allison/i.test(v.name)) || us[0] || voices[0] || null;
}
function speak(text, opts = {}) {
  if (!TTS) { toast('Este navegador não tem voz em inglês'); return; }
  if (!opts.queue) speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(plain(text));
  u.lang = 'en-US';
  const v = opts.voice || pickVoice(); if (v) u.voice = v;
  u.rate = opts.slow ? 0.6 : S.rate;
  if (opts.pitch) u.pitch = opts.pitch;
  if (opts.onend) { u.onend = opts.onend; u.onerror = opts.onend; }
  speechSynthesis.speak(u);
  return u;
}

/* ================= reconhecimento de fala ================= */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function similarity(target, heard) {
  const t = norm(target).split(' '), h = norm(heard).split(' ');
  let hit = 0, j = 0;
  for (const w of t) { const k = h.indexOf(w, j); if (k >= 0) { hit++; j = k + 1; } }
  return Math.round(100 * hit / t.length);
}
function listen(target, btn, out) {
  if (!SR) { toast('Gravação não disponível aqui. Abra no Safari ou Chrome.'); return; }
  const r = new SR();
  r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 3;
  btn.classList.add('rec'); out.textContent = 'Ouvindo… fale agora';
  r.onresult = e => {
    const alts = [...e.results[0]].map(a => a.transcript);
    let best = alts[0], score = similarity(target, alts[0]);
    for (const a of alts) { const s = similarity(target, a); if (s > score) { score = s; best = a; } }
    const emoji = score >= 90 ? '🎉 Perfeito!' : score >= 70 ? '👍 Muito bom!' : score >= 40 ? '🙂 Quase — tente de novo' : '🔁 Ouça e repita mais uma vez';
    out.innerHTML = `${emoji} <b>${score}%</b><br><span class="muted">Entendi: “${esc(best)}”</span>`;
  };
  r.onerror = e => {
    out.textContent = e.error === 'not-allowed' || e.error === 'service-not-allowed'
      ? 'Permita o microfone (no iPhone: Ajustes › Safari › Microfone, e Siri ativada).'
      : 'Não consegui ouvir. Tente de novo, perto do microfone.';
  };
  r.onend = () => btn.classList.remove('rec');
  try { r.start(); } catch (e) { btn.classList.remove('rec'); }
}

/* ================= cartões (repetição espaçada) ================= */
function addCards(day) {
  (day.cards || []).forEach(([en, pt]) => {
    if (!S.cards[en]) S.cards[en] = { pt, box: 0, due: addDays(1), day: day.n };
  });
}
const dueCards = () => Object.entries(S.cards).filter(([, c]) => c.due <= today()).map(([en]) => en);
function grade(en, ok) {
  const c = S.cards[en]; if (!c) return;
  if (ok) { c.box = Math.min(c.box + 1, 5); c.due = addDays(INTERVAL[c.box]); }
  else { c.box = 1; c.due = addDays(1); }
  save();
}

/* ================= navegação ================= */
function currentDay() { const d = DAYS.find(d => !S.done[d.n]); return d ? d.n : null; }
function setTop(title, back) {
  $('#topTitle').textContent = title;
  $('#backBtn').hidden = !back;
  const s = streakNow();
  $('#streak').textContent = s ? `🔥 ${s}` : '';
}
function setTab(tab) { $$('#tabs a').forEach(a => a.classList.toggle('on', a.dataset.tab === tab)); }
$('#backBtn').onclick = () => { if (history.length > 1) history.back(); else location.hash = '#/curso'; };

function route() {
  if (TTS) speechSynthesis.cancel();
  const p = (location.hash.replace(/^#\/?/, '') || 'hoje').split('/');
  window.scrollTo(0, 0);
  if (p[0] === 'dia' && DAY(+p[1])) return renderDay(+p[1], p[2] || 'learn');
  if (p[0] === 'curso') return renderCourse();
  if (p[0] === 'revisar') return renderReview(p[1], +p[2]);
  if (p[0] === 'mais') return renderMore();
  if (p[0] === 'dicionario') return renderDict();
  return renderHome();
}
window.addEventListener('hashchange', route);

/* ================= telas ================= */
function renderHome() {
  setTab('hoje'); setTop('Inglês 28 Dias', false);
  const cur = currentDay(), done = Object.keys(S.done).length, due = dueCards().length;
  const d = cur && DAY(cur);
  const doneToday = Object.values(S.done).some(x => x.date === today());
  const h = new Date().getHours();
  const hi = h < 12 ? 'Good morning! ☀️' : h < 18 ? 'Good afternoon! 🌤️' : 'Good evening! 🌙';
  view.innerHTML = `
    <p class="muted" style="margin:0 0 10px"><span class="say" data-say="${hi.replace(/[^\w! ]/g, '').trim()}">${hi}</span></p>
    ${d ? `
    <div class="card hero">
      <div class="kicker">${doneToday ? 'Lição de hoje feita ✓ — próxima' : 'Sua lição de hoje'} · Semana ${d.w}</div>
      <h2>Dia ${d.n}: ${esc(d.title)}</h2>
      <p class="muted" style="margin:0 0 14px">${esc(d.goal)}</p>
      <a class="btn block" href="#/dia/${d.n}">${S.seen[d.n] ? 'Continuar' : 'Começar'} o Dia ${d.n} →</a>
    </div>` : `
    <div class="card hero">
      <div class="kicker">Curso completo 🏆</div>
      <h2>Congratulations! Você terminou os 28 dias.</h2>
      <p class="muted" style="margin:0 0 14px">Continue revisando os cartões todo dia — é isso que mantém o inglês vivo na cabeça.</p>
      <a class="btn block" href="#/dia/28">Ver autoavaliação</a>
    </div>`}
    <div class="stats">
      <div class="stat"><b>${done}/28</b><span>dias feitos</span></div>
      <div class="stat"><b>${streakNow()}</b><span>dias seguidos</span></div>
      <div class="stat"><b>${Object.keys(S.cards).length}</b><span>palavras</span></div>
    </div>
    <div class="card">
      <div class="row">
        <div class="grow">
          <h3 style="margin:0">🔁 Revisão de hoje</h3>
          <div class="muted small">${due ? `${due} cartão(ões) esperando você — leva ~${Math.max(1, Math.round(due / 6))} min.` : Object.keys(S.cards).length ? 'Nada pendente hoje. 👏' : 'Os cartões aparecem aqui quando você concluir o Dia 1.'}</div>
        </div>
        ${due ? `<a class="btn acc" href="#/revisar/agora">Revisar</a>` : ''}
      </div>
    </div>
    <div class="card">
      <h3>📈 Progresso</h3>
      <div class="bar"><i style="width:${(done / 28) * 100}%"></i></div>
      <p class="small muted" style="margin:8px 0 0">Rotina sugerida: <b>20–40 min por dia</b>. Primeiro a revisão (5 min), depois a lição nova. Fale tudo em voz alta — inclusive os exemplos.</p>
    </div>`;
}

function renderCourse() {
  setTab('curso'); setTop('Curso', false);
  const cur = currentDay();
  view.innerHTML = WEEKS.map(w => `
    <section class="week">
      <h2>Semana ${w.n} · ${esc(w.t)}</h2>
      <p>${esc(w.d)}</p>
      ${DAYS.filter(d => d.w === w.n).map(d => `
        <a class="day ${S.done[d.n] ? 'done' : ''} ${d.n === cur ? 'now' : ''}" href="#/dia/${d.n}">
          <span class="num">${S.done[d.n] ? '✓' : d.n}</span>
          <span class="grow"><div class="t">${esc(d.title)}</div><div class="s">${esc(d.goal)}</div></span>
          ${S.best[d.n] != null ? `<span class="pill ${S.best[d.n] >= 70 ? 'ok' : 'acc'}">${S.best[d.n]}%</span>` : ''}
        </a>`).join('')}
    </section>`).join('');
}

/* ---------- lição ---------- */
function stepsOf(d) {
  const s = ['learn'];
  if (d.ex || d.err) s.push('ex');
  if (d.dlg) s.push('dlg');
  if (d.quiz) s.push('quiz');
  s.push('end');
  return s;
}
function renderDay(n, step) {
  const d = DAY(n);
  setTab('curso'); setTop(`Dia ${n} · ${d.title}`, true);
  const steps = stepsOf(d);
  if (!steps.includes(step)) step = 'learn';
  S.seen[n] = S.seen[n] || {}; S.seen[n][step] = 1; save();
  const idx = steps.indexOf(step);
  const label = s => s === 'dlg' ? (d.dlgLabel || 'Diálogo') : STEP_NAMES[s].replace(/^\d · /, '');
  const nav = `<div class="steps">${steps.map((s, i) => `<button data-go="${s}" class="${s === step ? 'on' : ''} ${S.seen[n][s] ? 'seen' : ''}">${i + 1}. ${label(s)}</button>`).join('')}</div>`;
  const next = idx < steps.length - 1
    ? `<a class="btn block" href="#/dia/${n}/${steps[idx + 1]}">Próximo: ${label(steps[idx + 1])} →</a>` : '';
  let body = '';
  if (step === 'learn') body = learnHTML(d);
  if (step === 'ex') body = exHTML(d);
  if (step === 'dlg') body = dlgHTML(d);
  if (step === 'quiz') body = `<div id="quiz"></div>`;
  if (step === 'end') body = endHTML(d);
  view.innerHTML = `<div class="lesson">${nav}${body}${step === 'quiz' ? '' : next}</div>`;
  $$('.steps button').forEach(b => b.onclick = () => location.replace(`#/dia/${n}/${b.dataset.go}`));
  const on = $('.steps .on'); if (on) on.scrollIntoView({ inline: 'center', block: 'nearest' });
  if (step === 'quiz') startQuiz(d, steps[idx + 1]);
  if (step === 'end') bindEnd(d);
  if (step === 'dlg') bindDlg(d);
  if (step === 'learn') bindSelf();
}

function blockHTML(b) {
  if (b.tip) return `<div class="tip">${fmt(b.tip)}</div>`;
  if (b.warn) return `<div class="warn">${fmt(b.warn)}</div>`;
  if (b.self) return selfHTML();
  let h = '<div class="card">';
  if (b.h) h += `<h3>${fmt(b.h)}</h3>`;
  [].concat(b.p || []).forEach(p => h += `<p>${fmt(p)}</p>`);
  if (b.table) {
    h += `<div class="tblwrap"><table class="tbl">${b.table.head ? `<tr>${b.table.head.map(c => `<th>${fmt(c)}</th>`).join('')}</tr>` : ''}${b.table.rows.map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
  }
  if (b.li) h += `<ul>${b.li.map(x => `<li>${fmt(x)}</li>`).join('')}</ul>`;
  [].concat(b.after || []).forEach(p => h += `<p>${fmt(p)}</p>`);
  return h + '</div>';
}
function learnHTML(d) {
  return `
    <div class="card">
      <div class="kicker">Semana ${d.w} · Dia ${d.n}</div>
      <h2>${esc(d.title)}</h2>
      <p class="muted" style="margin:0">🎯 <b>Meta do dia:</b> ${esc(d.goal)}</p>
    </div>
    ${(d.learn || []).map(blockHTML).join('')}
    <p class="small muted">Toque em qualquer texto <span class="say" data-say="in blue">in blue</span> para ouvir a pronúncia.</p>`;
}
function exRow([en, pt, note]) {
  return `<div class="ex">
    <button class="play" data-say="${esc(plain(en))}" aria-label="Ouvir">🔊</button>
    <div class="grow"><div class="en">${fmt(en)}</div><div class="pt">${fmt(pt)}</div>${note ? `<div class="note">${fmt(note)}</div>` : ''}</div>
    <button class="play slow" data-say="${esc(plain(en))}" data-slow="1" aria-label="Ouvir devagar">🐢</button>
  </div>`;
}
function exHTML(d) {
  let h = '';
  if (d.ex) h += `<div class="card"><h3>🗣️ Exemplos para fixar</h3><p class="small muted">Ouça, repita em voz alta 2 vezes, e só depois leia o português. 🐢 = devagar.</p>${d.ex.map(exRow).join('')}</div>`;
  if (d.err) h += `<div class="card"><h3>🚫 Erros comuns de brasileiro</h3>${d.err.map(([w, r, why]) => `<div class="err"><div class="w">❌ ${esc(w)}</div><div class="r">✅ ${fmt(r)}</div>${why ? `<div class="why">${fmt(why)}</div>` : ''}</div>`).join('')}</div>`;
  return h;
}

/* ---------- diálogo ---------- */
function dlgHTML(d) {
  return [].concat(d.dlg).map((g, gi) => `
    <div class="card dlg" id="dlg${gi}">
      <h3>${esc(g.t)}</h3>
      ${g.intro ? `<p class="small muted">${fmt(g.intro)}</p>` : ''}
      <div class="btns" style="margin:0 0 14px">
        <button class="btn ghost" data-playall="${gi}">▶ Ouvir tudo</button>
        <button class="btn ghost" data-pt="${gi}">Mostrar PT</button>
      </div>
      ${g.lines.map(([who, en, pt], i) => `
        <div class="line ${who === g.lines[0][0] ? 'a' : 'b'}" data-i="${i}">
          <span class="who">${esc(who.slice(0, 2))}</span>
          <div class="bubble" data-line="${i}"><div>${esc(en)}</div><div class="pt">${esc(pt)}</div></div>
        </div>`).join('')}
    </div>`).join('') + `<p class="small muted">Dica: ouça primeiro sem ler o português. Depois toque em cada fala e repita em voz alta, imitando o ritmo.</p>`;
}
function bindDlg(d) {
  const dl = [].concat(d.dlg);
  dl.forEach((g, gi) => {
    const box = $(`#dlg${gi}`);
    const who = [...new Set(g.lines.map(l => l[0]))];
    const vA = pickVoice();
    const vB = voices.find(v => v !== vA && /en[-_](US|GB)/i.test(v.lang)) || vA;
    const voiceOf = w => who.indexOf(w) % 2 ? { voice: vB, pitch: vB === vA ? 0.8 : 1 } : { voice: vA };
    const mark = i => $$('.line', box).forEach(l => l.classList.toggle('cur', +l.dataset.i === i));
    $$('.bubble', box).forEach(b => b.onclick = () => {
      const [w, en] = g.lines[+b.dataset.line]; mark(+b.dataset.line);
      speak(en, Object.assign({ onend: () => mark(-1) }, voiceOf(w)));
    });
    $(`[data-pt="${gi}"]`).onclick = e => { box.classList.toggle('showpt'); e.target.textContent = box.classList.contains('showpt') ? 'Esconder PT' : 'Mostrar PT'; };
    $(`[data-playall="${gi}"]`).onclick = () => {
      if (!TTS) return toast('Sem voz neste navegador');
      speechSynthesis.cancel();
      let i = 0;
      const go = () => {
        if (i >= g.lines.length || !document.body.contains(box)) { mark(-1); return; }
        const [w, en] = g.lines[i]; mark(i); i++;
        speak(en, Object.assign({ queue: true, onend: () => setTimeout(go, 350) }, voiceOf(w)));
      };
      go();
    };
  });
}

/* ---------- exercícios ---------- */
function startQuiz(d, nextStep) {
  const box = $('#quiz');
  const items = d.quiz;
  let i = 0, score = 0;
  const typeName = q => q.mc != null ? 'Escolha a certa' : q.fill != null ? 'Complete' : 'Monte a frase';
  function show() {
    if (i >= items.length) return finish();
    const q = items[i];
    let h = `<div class="card"><div class="qhead"><span class="qtype">${typeName(q)}</span><span>${i + 1} / ${items.length}</span></div>
      <div class="bar" style="height:6px;margin-bottom:14px"><i style="width:${(i / items.length) * 100}%"></i></div>`;
    if (q.mc != null) {
      h += `<div class="q">${fmt(q.mc)}</div>${q.pt ? `<div class="qpt">${fmt(q.pt)}</div>` : ''}
        <div class="opts">${shuffle(q.o.map((o, k) => ({ o, k }))).map(x => `<button class="opt" data-k="${x.k}">${esc(x.o)}</button>`).join('')}</div>`;
    } else if (q.fill != null) {
      h += `<div class="q">${fmt(q.fill)}</div>${q.pt ? `<div class="qpt">${fmt(q.pt)}</div>` : ''}
        <input class="inp" id="fillIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Digite a resposta">
        <div class="btns"><button class="btn block" id="chk">Verificar</button></div>`;
    } else {
      h += `<div class="qpt" style="font-size:17px;color:var(--ink)">🇧🇷 ${fmt(q.pt)}</div>
        <div class="build-ans" id="ans"></div>
        <div class="bank" id="bank">${shuffle(q.build.split(' ').concat(q.x || [])).map((w, k) => `<button class="chip" data-k="${k}">${esc(w)}</button>`).join('')}</div>
        <div class="btns"><button class="btn ghost" id="clr">Limpar</button><button class="btn" id="chk">Verificar</button></div>`;
    }
    h += `<div id="fb"></div></div>`;
    box.innerHTML = h;

    if (q.mc != null) {
      $$('.opt', box).forEach(b => b.onclick = () => {
        const ok = +b.dataset.k === 0;
        $$('.opt', box).forEach(x => { x.disabled = true; if (+x.dataset.k === 0) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        feedback(ok, q, q.o[0]);
      });
    } else if (q.fill != null) {
      const inp = $('#fillIn'); inp.focus();
      const check = () => {
        if (!inp.value.trim()) return;
        const acc = [].concat(q.a);
        const ok = acc.some(a => norm(a) === norm(inp.value));
        inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong');
        $('#chk').remove();
        feedback(ok, q, acc[0]);
      };
      $('#chk').onclick = check;
      inp.onkeydown = e => { if (e.key === 'Enter') check(); };
    } else {
      const ans = $('#ans');
      $$('#bank .chip').forEach(c => c.onclick = () => {
        if (c.classList.contains('used')) return;
        c.classList.add('used');
        const a = document.createElement('button'); a.className = 'chip'; a.textContent = c.textContent; a.dataset.k = c.dataset.k;
        a.onclick = () => { a.remove(); c.classList.remove('used'); };
        ans.appendChild(a);
      });
      $('#clr').onclick = () => { ans.innerHTML = ''; $$('#bank .chip').forEach(c => c.classList.remove('used')); };
      $('#chk').onclick = () => {
        const said = $$('.chip', ans).map(c => c.textContent).join(' ');
        if (!said) return;
        const ok = [q.build].concat(q.alt || []).some(s => norm(s) === norm(said));
        $('#chk').parentElement.remove();
        $$('.chip').forEach(c => c.onclick = null);
        feedback(ok, q, q.build);
      };
    }
  }
  function feedback(ok, q, right) {
    if (ok) score++;
    $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'bad'}"><b>${ok ? '✅ Isso aí!' : '❌ Quase.'}</b> ${ok ? '' : `Resposta: <b>${esc(right)}</b>`}
      ${q.e ? `<div class="e">${fmt(q.e)}</div>` : ''}</div>
      <div class="btns"><button class="btn ghost" id="hear">🔊 Ouvir</button><button class="btn" id="nx">Continuar →</button></div>`;
    const stem = q.mc != null ? q.mc : q.fill;
    const full = q.say || (q.build != null ? q.build : /_{3,}/.test(stem) ? stem.replace(/_{3,}/, right) : right);
    $('#hear').onclick = () => speak(plain(full).replace(/\(.*?\)/g, ''));
    $('#nx').onclick = () => { i++; show(); window.scrollTo(0, 0); };
    $('#nx').focus();
  }
  function finish() {
    const pct = Math.round(100 * score / items.length);
    if (S.best[d.n] == null || pct > S.best[d.n]) { S.best[d.n] = pct; save(); }
    const msg = pct >= 90 ? 'Excelente! Você dominou o dia. 🏆' : pct >= 70 ? 'Muito bom! Pode seguir. 👏' : pct >= 50 ? 'Bom começo. Releia o “Aprender” e refaça — vale a pena.' : 'Normal no começo! Releia a explicação e tente de novo.';
    box.innerHTML = `<div class="card result"><div class="kicker">Resultado</div><div class="big">${pct}%</div>
      <p>${score} de ${items.length} certas</p><p class="muted">${msg}</p>
      <div class="btns"><button class="btn ghost" id="redo">↺ Refazer</button><a class="btn" href="#/dia/${d.n}/${nextStep}">Continuar →</a></div></div>`;
    $('#redo').onclick = () => { i = 0; score = 0; show(); };
  }
  show();
}

/* ---------- falar & concluir ---------- */
function endHTML(d) {
  let h = '';
  if (d.speak) h += `<div class="card"><h3>🎤 Fale em voz alta</h3>
    <p class="small muted">Ouça (🔊), repita 3 vezes. ${SR ? 'Depois toque no 🎙️ e fale — eu digo o quanto entendi.' : 'Grave um áudio no WhatsApp para você mesmo e compare.'}</p>
    ${d.speak.map((s, i) => `<div class="ex"><button class="play" data-say="${esc(s)}">🔊</button>
      <div class="grow"><div class="en">${esc(s)}</div><div class="small" id="sr${i}"></div></div>
      ${SR ? `<button class="play mic" data-listen="${i}" aria-label="Gravar">🎙️</button>` : `<button class="play slow" data-say="${esc(s)}" data-slow="1">🐢</button>`}</div>`).join('')}</div>`;
  if (d.mission) h += `<div class="card"><h3>🚀 Missão do dia</h3>${[].concat(d.mission).map(m => `<p>${fmt(m)}</p>`).join('')}</div>`;
  if (d.yt) h += `<div class="card"><h3>📺 Reforço no YouTube</h3><p class="small muted">Assista 1 vídeo curto (10–15 min) sobre o tema — ele complementa a lição.</p>
    <div class="yt">${d.yt.map(q => `<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(q)}" target="_blank" rel="noopener">${esc(q)}</a>`).join('')}</div></div>`;
  if (d.cards) h += `<div class="card"><h3>🃏 Palavras do dia (${d.cards.length})</h3><p class="small muted">Ao concluir, elas entram na sua revisão espaçada (aba Revisar).</p>
    ${d.cards.map(([en, pt]) => `<div class="ex" style="padding:6px 0"><button class="play slow" data-say="${esc(en)}">🔊</button><div class="grow"><span class="en">${esc(en)}</span> <span class="pt">— ${esc(pt)}</span></div></div>`).join('')}</div>`;
  const done = S.done[d.n];
  h += `<div class="card" style="text-align:center">
    ${done ? `<p style="margin:0 0 10px">✅ Dia concluído em ${done.date.split('-').reverse().join('/')}</p>` : `<p class="muted small" style="margin:0 0 10px">Fez a missão e falou em voz alta? Então pode concluir.</p>`}
    <button class="btn ${done ? 'ghost' : 'ok'} block" id="finishDay">${done ? 'Ir para o próximo dia →' : '✓ Concluir o Dia ' + d.n}</button>
  </div>`;
  return h;
}
function bindEnd(d) {
  $$('[data-listen]').forEach(b => b.onclick = () => listen(d.speak[+b.dataset.listen], b, $('#sr' + b.dataset.listen)));
  $('#finishDay').onclick = () => {
    if (!S.done[d.n]) {
      S.done[d.n] = { date: today() };
      addCards(d); touchStreak(); save();
      toast(`Dia ${d.n} concluído! +${(d.cards || []).length} palavras na revisão 🎉`);
    }
    const nx = currentDay();
    location.hash = nx ? `#/dia/${nx}` : '#/hoje';
  };
}

/* ---------- autoavaliação (dia 28) ---------- */
function selfHTML() {
  const rows = DAYS.filter(d => d.n < 28 && !d.review).map(d => `
    <div class="selfrow"><div class="grow"><b>${d.n}.</b> ${esc(d.title)}</div>
      <div class="seg" data-self="${d.n}">${['😟', '😐', '😎'].map((e, k) => `<button class="${S.self[d.n] === k ? 'on' : ''}" data-v="${k}">${e}</button>`).join('')}</div></div>`).join('');
  return `<div class="card"><h3>📝 Autoavaliação</h3><p class="small muted">Para cada tema: 😟 não sei usar · 😐 mais ou menos · 😎 uso tranquilo.</p>${rows}</div>
    <div class="card" id="selfOut"></div>`;
}
function bindSelf() {
  const out = $('#selfOut'); if (!out) return;
  const draw = () => {
    const weak = DAYS.filter(d => S.self[d.n] === 0), mid = DAYS.filter(d => S.self[d.n] === 1);
    const link = d => `<a href="#/dia/${d.n}">Dia ${d.n} – ${esc(d.title)}</a>`;
    out.innerHTML = `<h3>🎯 Seu plano de reforço</h3>${!weak.length && !mid.length ? '<p class="muted">Marque os temas acima para montar seu plano.</p>' : ''}
      ${weak.length ? `<p><b>Prioridade (refazer a lição inteira):</b></p><ul>${weak.map(d => `<li>${link(d)}</li>`).join('')}</ul>` : ''}
      ${mid.length ? `<p><b>Revisar exemplos + exercícios:</b></p><ul>${mid.map(d => `<li>${link(d)}</li>`).join('')}</ul>` : ''}
      ${weak.length || mid.length ? '<p class="small muted">Sugestão: 1 tema por dia na próxima semana, sempre com a revisão de cartões antes.</p>' : ''}`;
  };
  $$('[data-self]').forEach(seg => $$('button', seg).forEach(b => b.onclick = () => {
    S.self[seg.dataset.self] = +b.dataset.v; save();
    $$('button', seg).forEach(x => x.classList.toggle('on', x === b)); draw();
  }));
  draw();
}

/* ---------- revisão (flashcards) ---------- */
function renderReview(mode, dayN) {
  setTab('revisar'); setTop('Revisar', mode === 'agora' || mode === 'treino');
  const learned = Object.keys(S.cards);
  if (mode === 'agora' || mode === 'treino') {
    let pool = mode === 'agora' ? dueCards() : learned.filter(en => !dayN || S.cards[en].day === dayN);
    if (mode === 'treino') pool = shuffle(pool).slice(0, 15);
    if (!pool.length) { location.replace('#/revisar'); return; }
    return flashSession(shuffle(pool).slice(0, 25), mode === 'agora');
  }
  const due = dueCards().length;
  const boxes = [0, 0, 0, 0, 0, 0]; learned.forEach(en => boxes[S.cards[en].box]++);
  const doneDays = DAYS.filter(d => S.done[d.n]);
  view.innerHTML = `
    <div class="card">
      <h2>🔁 Revisão espaçada</h2>
      <p class="muted small">Cada palavra volta no momento certo: acertou, ela demora mais pra voltar (1 → 3 → 7 → 14 → 30 dias). Errou, volta amanhã. É assim que vai pra memória de longo prazo.</p>
      ${due ? `<a class="btn acc block" href="#/revisar/agora">Revisar ${due} cartão(ões) agora</a>` : `<p style="margin:0"><b>${learned.length ? 'Tudo em dia! ✨' : 'Conclua o Dia 1 para ganhar seus primeiros cartões.'}</b></p>`}
    </div>
    ${learned.length ? `
    <div class="card">
      <h3>Força da memória</h3>
      ${['Novas', 'Frágeis', 'Aprendendo', 'Boas', 'Fortes', 'Dominadas'].map((t, k) => `
        <div class="row" style="margin-bottom:6px"><span class="small" style="width:92px">${t}</span><div class="bar grow"><i style="width:${(boxes[k] / learned.length) * 100}%"></i></div><span class="small muted" style="width:30px;text-align:right">${boxes[k]}</span></div>`).join('')}
    </div>
    <div class="card">
      <h3>Treino livre</h3>
      <p class="small muted">Não muda a agenda — é só pra treinar mais.</p>
      <a class="btn ghost block" href="#/revisar/treino">🎲 15 cartões aleatórios</a>
      <div class="yt" style="margin-top:12px">${doneDays.map(d => `<a style="background:var(--pri-soft);color:var(--pri)" href="#/revisar/treino/${d.n}">Dia ${d.n}</a>`).join('')}</div>
    </div>` : ''}
    <a class="btn ghost block" href="#/dicionario">📖 Dicionário do curso (todas as palavras)</a>`;
}
function flashSession(queue, graded) {
  let total = queue.length, right = 0, k = 0;
  const wrongOnce = new Set();
  function show() {
    if (!queue.length) return end();
    const en = queue[0], c = S.cards[en];
    const rev = Math.random() < 0.4; // 40% das vezes: português → inglês (mais difícil, treina a fala)
    view.innerHTML = `
      <div class="qhead"><span>${graded ? 'Revisão' : 'Treino'}</span><span>${k + 1} / ${total + wrongOnce.size}</span></div>
      <div class="bar" style="height:6px;margin-bottom:14px"><i style="width:${(k / (total + wrongOnce.size)) * 100}%"></i></div>
      <div class="card flash" id="fc">
        <div class="dir">${rev ? '🇧🇷 → 🇺🇸 Como se diz em inglês?' : '🇺🇸 → 🇧🇷 O que significa?'}</div>
        <div class="front">${esc(rev ? c.pt : en)}</div>
        <div class="hint">Pense na resposta (fale em voz alta!) e toque para ver</div>
      </div>
      <div class="btns" id="fcb" hidden><button class="btn bad" data-g="0">✗ Errei</button><button class="btn ok" data-g="1">✓ Acertei</button></div>`;
    if (!rev) speak(en);
    $('#fc').onclick = () => {
      if ($('#fc .back')) { speak(en); return; }
      $('#fc .hint').remove();
      $('#fc').insertAdjacentHTML('beforeend', `<div class="back">${esc(rev ? en : c.pt)}</div><div class="hint">toque para ouvir de novo · Dia ${c.day}</div>`);
      speak(en); $('#fcb').hidden = false;
    };
    $$('#fcb button').forEach(b => b.onclick = () => {
      const ok = b.dataset.g === '1';
      queue.shift(); k++;
      if (ok) right++;
      if (graded && !wrongOnce.has(en)) grade(en, ok);
      if (!ok && !wrongOnce.has(en)) { wrongOnce.add(en); queue.splice(Math.min(3, queue.length), 0, en); }
      show();
    });
  }
  function end() {
    if (graded) touchStreak();
    setTop('Revisar', true);
    view.innerHTML = `<div class="card result"><div class="kicker">${graded ? 'Revisão concluída' : 'Treino concluído'}</div>
      <div class="big">🎉</div><p><b>${right}</b> acerto(s) em ${k} cartões</p>
      <p class="muted small">${wrongOnce.size ? `As ${wrongOnce.size} que você errou voltam amanhã.` : 'Nenhum erro. Impressionante!'}</p>
      <a class="btn block" href="#/hoje">Voltar ao início</a></div>`;
  }
  show();
}

/* ---------- dicionário ---------- */
function renderDict() {
  setTab('revisar'); setTop('Dicionário do curso', true);
  const all = [];
  DAYS.forEach(d => (d.cards || []).forEach(([en, pt]) => all.push({ en, pt, n: d.n })));
  view.innerHTML = `<input class="inp" id="q" placeholder="Buscar em inglês ou português…" style="margin-bottom:12px"><div class="card" id="list"></div>`;
  const draw = () => {
    const q = norm($('#q').value);
    const rows = all.filter(x => !q || norm(x.en).includes(q) || norm(x.pt).includes(q));
    $('#list').innerHTML = rows.length ? rows.map(x => `<div class="ex" style="padding:7px 0"><button class="play slow" data-say="${esc(x.en)}">🔊</button>
      <div class="grow"><span class="en">${esc(x.en)}</span> <span class="pt">— ${esc(x.pt)}</span></div><span class="pill">D${x.n}</span></div>`).join('') : '<p class="muted">Nada encontrado.</p>';
  };
  $('#q').oninput = draw; draw();
}

/* ---------- mais / configurações ---------- */
function renderMore() {
  setTab('mais'); setTop('Mais', false);
  const standalone = window.navigator.standalone || matchMedia('(display-mode: standalone)').matches;
  view.innerHTML = `
    ${standalone ? '' : `<div class="card install"><h3>📱 Colocar na tela inicial do iPhone</h3><ol>
      <li>Abra este site no <b>Safari</b>.</li>
      <li>Toque no botão <b>Compartilhar</b> (quadrado com seta ↑).</li>
      <li>Role e toque em <b>Adicionar à Tela de Início</b> → <b>Adicionar</b>.</li>
      <li>Pronto: o ícone “Inglês 28” abre como um app, até sem internet.</li></ol></div>`}
    <div class="card">
      <h3>🔊 Voz</h3>
      <div class="set"><span>Velocidade</span><div class="seg" id="rate">${[[0.75, 'Lenta'], [0.9, 'Normal'], [1.05, 'Rápida']].map(([v, t]) => `<button data-v="${v}" class="${S.rate === v ? 'on' : ''}">${t}</button>`).join('')}</div></div>
      <div class="set"><span>Voz</span><select class="inp" id="voice"><option value="">Automática</option>${voices.map(v => `<option ${S.voice === v.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select></div>
      <div class="set"><span class="small muted">No iPhone, vozes melhores: Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Inglês (baixe “Samantha” ou “Ava – Aprimorada”).</span></div>
      <button class="btn ghost block" data-say="Hello! My name is Eriton. I am an architect and I am learning English.">▶ Testar voz</button>
    </div>
    <div class="card">
      <h3>💾 Backup do progresso</h3>
      <p class="small muted">Seu progresso fica salvo neste aparelho. Para passar para outro (ou se prevenir), copie o código e guarde no Notes/WhatsApp.</p>
      <div class="btns" style="margin-top:0"><button class="btn ghost" id="exp">Copiar código</button><button class="btn ghost" id="imp">Restaurar</button></div>
      <textarea class="inp" id="bk" placeholder="Cole aqui o código para restaurar" style="margin-top:10px" hidden></textarea>
    </div>
    <div class="card">
      <h3>ℹ️ Como estudar com este app</h3>
      <ul class="small" style="padding-left:18px;margin:0">
        <li><b>Todo dia:</b> Revisar (5 min) → lição nova (20–30 min).</li>
        <li><b>Fale tudo em voz alta.</b> Ler em silêncio não treina a boca.</li>
        <li>Errou no exercício? Ótimo — é o erro que fixa. Refaça no fim.</li>
        <li>Perdeu um dia? Sem culpa: continue de onde parou.</li>
      </ul>
    </div>
    <button class="btn bad block" id="reset" style="margin-bottom:20px">Apagar todo o progresso</button>
    <p class="small muted" style="text-align:center">Inglês 28 Dias · ${DAYS.length} lições</p>`;
  $$('#rate button').forEach(b => b.onclick = () => { S.rate = +b.dataset.v; save(); $$('#rate button').forEach(x => x.classList.toggle('on', x === b)); speak('This is the new speed.'); });
  $('#voice').onchange = e => { S.voice = e.target.value; save(); speak('Hello! This is my voice.'); };
  $('#exp').onclick = async () => {
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
    const bk = $('#bk'); bk.hidden = false; bk.value = code; bk.select();
    try { await navigator.clipboard.writeText(code); toast('Código copiado ✓'); } catch (e) { toast('Selecione e copie o texto'); }
  };
  $('#imp').onclick = () => {
    const bk = $('#bk');
    if (bk.hidden || !bk.value.trim()) { bk.hidden = false; bk.value = ''; bk.focus(); toast('Cole o código e toque em Restaurar'); return; }
    try {
      const data = JSON.parse(decodeURIComponent(escape(atob(bk.value.trim()))));
      if (!data.done) throw 0;
      S = Object.assign(blank(), data); save(); toast('Progresso restaurado ✓'); route();
    } catch (e) { toast('Código inválido'); }
  };
  $('#reset').onclick = () => {
    if (confirm('Apagar TODO o progresso? Isso não pode ser desfeito.')) { S = blank(); save(); toast('Progresso apagado'); location.hash = '#/hoje'; }
  };
}

/* ================= eventos globais ================= */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-say]');
  if (!el) return;
  e.preventDefault();
  $$('.speaking').forEach(x => x.classList.remove('speaking'));
  el.classList.add('speaking');
  speak(el.dataset.say, { slow: !!el.dataset.slow, onend: () => el.classList.remove('speaking') });
});

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
route();
})();
