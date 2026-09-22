/*!
 * EVF Charts of the Month | chart engine | version 1.6.0 | 22 September 2026
 * The EVF chart page loads this file from jsDelivr at a pinned version. The page holds only the CONFIG settings.
 * Never edit a released version. Publish every change as a new file with a new release tag.
 */
(function () {
const VERSION = '1.6.0';
const SELF = (document.currentScript && document.currentScript.src) || '';
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800&family=Inter+Tight:wght@400;500;600&display=swap';
const CSS = ':root { --navy: #15263B; --navy-mid: #0C4B76; --cyan: #1DB4D7; --white: #FFFFFF; --steel: #5C768C; --grey: #707070;\n    --red: #E05555; --muted: rgba(255,255,255,0.72); --faint: rgba(255,255,255,0.60); }\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n  body { background: #FFFFFF; font-family: \'Inter Tight\', \'Inter\', sans-serif; padding: 16px; }\n  #toolbar { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 14px; }\n  #toolbar button, #paste-panel button { font-family: \'Barlow\', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: .08em;\n    text-transform: uppercase; color: var(--cyan); background: var(--navy); border: 0; border-radius: 0; padding: 10px 16px; cursor: pointer; }\n  #qa { font-size: 13px; line-height: 1.4; color: var(--navy); }\n  #qa .bad { color: var(--red); font-weight: 600; }\n  #qa .ok { color: var(--navy-mid); font-weight: 700; }\n  #paste-panel { margin-bottom: 14px; max-width: 1080px; }\n  #paste-panel[hidden] { display: none; }\n  #paste-box { display: block; width: 100%; height: 200px; margin-bottom: 8px; padding: 10px; border: 1px solid var(--steel);\n    border-radius: 0; font: 13px/1.4 ui-monospace, Menlo, Consolas, monospace; }\n  #paste-msg { font-size: 13px; color: var(--navy); margin-left: 12px; }\n  #wrap { position: relative; overflow: hidden; }\n  #stage { position: absolute; top: 0; left: 0; transform-origin: top left; }\n  #export-msg { margin-top: 12px; font-size: 13px; color: var(--navy); }\n  #export-out img { display: block; max-width: 100%; margin-top: 8px; }\n\n  /* ===== THE EXPORTED FRAME. Portrait keeps the bottom 120 px clear for platform overlays. ===== */\n  #evf-frame { --f: 1; width: 1080px; height: 1350px; padding: 80px 80px 120px 80px; background: var(--navy); color: var(--white);\n    display: flex; flex-direction: column; overflow: hidden; }\n  #evf-frame.landscape { --f: 0.75; width: 1280px; height: 720px; padding: 48px 68px 44px 68px; }\n  .evf-top { display: flex; justify-content: space-between; align-items: center; height: calc(48px * var(--f)); flex: none; }\n  .evf-logo { height: calc(48px * var(--f)); width: auto; display: block; }\n  .evf-eyebrow { font-weight: 600; font-size: calc(22px * var(--f)); letter-spacing: .12em; text-transform: uppercase; color: var(--cyan); }\n  .evf-accent { width: calc(56px * var(--f)); height: 4px; background: var(--cyan); margin-top: calc(48px * var(--f)); flex: none; }\n  .landscape .evf-accent { margin-top: 26px; }\n  .evf-headline { font-family: \'Barlow\', \'Aktiv Grotesk Ex\', sans-serif; font-weight: 800; font-size: 68px; line-height: 1.04;\n    letter-spacing: .02em; text-transform: uppercase; margin-top: calc(22px * var(--f)); flex: none; text-wrap: balance; }\n  .evf-subtitle { font-size: calc(28px * var(--f)); line-height: 1.35; color: var(--muted); margin-top: calc(18px * var(--f)); flex: none; }\n  .evf-legend { display: flex; flex-wrap: wrap; gap: calc(14px * var(--f)) calc(34px * var(--f)); margin-top: calc(26px * var(--f));\n    font-size: calc(24px * var(--f)); font-weight: 500; color: var(--muted); flex: none; }\n  .evf-legend:empty { display: none; }\n  .evf-legend i { display: inline-block; width: calc(18px * var(--f)); height: calc(18px * var(--f)); margin-right: 10px; vertical-align: -2px; }\n  .evf-chart { position: relative; flex: 1 1 auto; min-height: 0; margin-top: calc(30px * var(--f)); }\n  .evf-custom { flex: 1 1 auto; min-height: 0; margin-top: calc(36px * var(--f)); display: flex; flex-direction: column; justify-content: center; }\n  .evf-note { font-size: calc(22px * var(--f)); line-height: 1.4; color: var(--faint); margin-top: calc(20px * var(--f)); flex: none; }\n  .evf-note:empty { display: none; }\n  .evf-source { font-size: calc(22px * var(--f)); line-height: 1.4; color: var(--steel); margin-top: 8px; flex: none; }\n\n  /* ===== CLASSES FOR type "custom" ===== */\n  .evf-table { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }\n  .evf-table th { font-size: calc(22px * var(--f)); font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--steel);\n    text-align: left; padding: 0 calc(18px * var(--f)) calc(16px * var(--f)) calc(18px * var(--f)); }\n  .evf-table td { font-size: calc(28px * var(--f)); padding: calc(18px * var(--f)); border-top: 1px solid rgba(255,255,255,0.08); }\n  .evf-table tbody tr:nth-child(odd) { background: rgba(12,75,118,0.18); }\n  .evf-table .num { text-align: right; }\n  .evf-table .hl, .evf-pos { color: var(--cyan); font-weight: 600; }\n  .evf-neg { color: var(--red); }\n  .evf-stat { font-family: \'Barlow\', sans-serif; font-weight: 800; font-size: calc(150px * var(--f)); line-height: 1; color: var(--cyan); }\n  .evf-stat-label { font-size: calc(30px * var(--f)); line-height: 1.35; color: var(--muted); margin-top: calc(16px * var(--f)); max-width: 820px; }\n  .evf-pair { display: flex; gap: calc(56px * var(--f)); }\n  .evf-pair > div { flex: 1 1 0; min-width: 0; border-top: 4px solid rgba(255,255,255,0.18); padding-top: calc(28px * var(--f)); }\n  .evf-pair > div:last-child { border-top-color: var(--cyan); }\n  .evf-pair .evf-stat { font-size: calc(112px * var(--f)); color: var(--white); }\n  .evf-pair > div:last-child .evf-stat { color: var(--cyan); }\n  .evf-flow { display: flex; align-items: stretch; }\n  .evf-node { flex: 1 1 0; min-width: 0; background: rgba(12,75,118,0.28); border-top: 4px solid var(--cyan);\n    padding: calc(26px * var(--f)) calc(22px * var(--f)); }\n  .evf-node-value { font-family: \'Barlow\', sans-serif; font-weight: 800; font-size: calc(52px * var(--f)); line-height: 1.05; }\n  .evf-node-label { font-size: calc(24px * var(--f)); line-height: 1.35; color: var(--muted); margin-top: 10px; }\n  .evf-arrow { flex: none; align-self: center; font-family: \'Barlow\', sans-serif; font-weight: 700; font-size: calc(44px * var(--f));\n    color: var(--cyan); padding: 0 calc(14px * var(--f)); }\n  .evf-callout { border-left: 4px solid var(--cyan); background: rgba(29,180,215,0.08); padding: calc(20px * var(--f)) calc(28px * var(--f));\n    font-size: calc(28px * var(--f)); line-height: 1.4; margin-top: calc(28px * var(--f)); }\n  .evf-timeline { border-left: 2px solid rgba(255,255,255,0.18); padding-left: calc(32px * var(--f)); display: flex; flex-direction: column;\n    gap: calc(30px * var(--f)); }\n  .evf-when { font-family: \'Barlow\', sans-serif; font-weight: 700; font-size: calc(26px * var(--f)); letter-spacing: .04em;\n    text-transform: uppercase; color: var(--cyan); }\n  .evf-what { font-size: calc(27px * var(--f)); line-height: 1.35; margin-top: 4px; }';
const SHELL = '<div id="toolbar">\n  <button type="button" id="btn-png">Download PNG</button>\n  <button type="button" id="btn-png2">Download PNG 2x</button>\n  <button type="button" id="btn-paste">Paste CONFIG</button>\n  <span id="qa">Loading...</span>\n</div>\n<div id="paste-panel" hidden>\n  <textarea id="paste-box" spellcheck="false" placeholder="Paste the CONFIG JSON from Gemini here, then press Render."></textarea>\n  <button type="button" id="btn-render">Render</button><span id="paste-msg"></span>\n</div>\n<div id="wrap"><div id="stage">\n  <div id="evf-frame" class="portrait">\n    <div class="evf-top"><svg class="evf-logo" viewBox="34 25 1102 336" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Enhanced Value Fund"><g transform="translate(0,385) scale(1,-1)" fill="#FFFFFF"><path d="M34 322 l0 -39 180 0 179 0 0 39 0 38 -179 0 -180 0 0 -38z M415 222 l0 -138 97 0 98 0 12 20 c6 11 12 22 14 24 2 4 49 83 56 96 3 3 15 23 27 44 12 21 29 49 38 63 8 15 15 27 16 28 0 1 -10 1 -66 1 l-66 0 -12 -20 c-24 -41 -53 -89 -66 -111 -7 -12 -15 -26 -18 -31 -3 -5 -6 -9 -6 -9 -1 0 -1 38 -1 86 l0 85 -61 0 -62 0 0 -138z M795 358 c-1 -1 -10 -17 -21 -35 -11 -18 -21 -36 -24 -40 -2 -4 -4 -7 -4 -8 0 -1 40 -1 123 -1 l122 0 0 43 0 43 -97 0 -98 0 -1 -2z M34 223 l0 -39 180 0 179 0 0 38 0 39 -180 0 -179 0 0 -38z M733 253 c-1 -1 -10 -15 -19 -31 -10 -17 -26 -43 -35 -58 -15 -26 -46 -77 -47 -79 0 -1 28 -1 61 -1 l62 0 0 31 1 31 117 0 118 0 0 54 0 55 -129 0 c-121 0 -128 0 -129 -2z M35 161 c-1 0 -1 -18 -1 -39 l0 -38 179 0 180 1 0 38 0 39 -179 0 c-98 0 -179 0 -179 -1z M776 128 c0 -1 0 -11 0 -23 l1 -20 14 -1 15 0 0 4 0 5 -10 0 -10 0 0 5 1 5 9 0 9 0 0 4 0 4 -10 0 -9 0 0 5 0 4 10 0 10 0 0 5 0 4 -15 0 c-10 0 -14 0 -15 -1z M811 128 c0 -1 0 -11 0 -23 l1 -20 4 -1 5 0 0 13 c0 7 0 13 1 13 0 0 5 -6 9 -13 l9 -13 4 0 5 1 0 22 0 22 -5 0 -5 0 0 -14 0 -13 -10 13 -9 14 -4 0 c-2 0 -4 -1 -5 -1z M854 107 l0 -23 5 0 5 0 0 9 0 9 9 0 9 0 0 -9 0 -9 5 0 5 0 0 23 0 22 -5 0 -5 0 0 -9 0 -9 -5 0 c-3 0 -7 0 -9 0 l-3 0 -1 9 0 9 -5 0 -5 0 0 -22z M910 127 c-2 -4 -15 -42 -14 -42 0 -1 2 -1 5 -1 l5 0 1 5 2 5 8 0 8 0 1 -5 2 -4 5 -1 c3 0 5 0 5 1 0 0 -3 10 -7 22 l-8 22 -6 0 c-5 0 -6 0 -7 -2z m10 -19 c2 -7 2 -6 -4 -6 -5 0 -4 0 -2 8 3 7 3 7 6 -2z M941 128 c0 -1 0 -11 0 -23 l1 -20 4 -1 5 0 0 13 c0 8 0 13 1 13 0 -1 5 -7 10 -14 l8 -12 4 0 5 1 0 22 0 22 -5 0 -5 0 -1 -13 c0 -13 -1 -13 -2 -11 -1 1 -5 7 -9 13 -7 11 -7 11 -11 11 -2 0 -4 -1 -5 -1z M996 128 c-18 -8 -17 -37 1 -43 9 -3 20 1 24 8 3 6 3 7 -3 7 -4 0 -5 0 -7 -3 -3 -5 -11 -6 -14 -1 -5 6 -4 18 1 23 5 3 15 0 15 -5 0 -1 2 -1 5 -1 6 0 6 1 3 7 -3 6 -8 8 -16 9 -4 0 -8 0 -9 -1z M1028 107 l0 -23 15 0 15 0 0 4 0 5 -10 0 -10 0 0 5 0 5 9 0 c9 0 10 1 10 3 0 5 -1 5 -10 5 l-9 0 0 4 0 5 10 0 10 1 0 4 0 4 -15 0 -15 0 0 -22z M1064 128 c-1 0 -1 -10 -1 -22 l0 -22 12 0 c13 1 16 2 21 8 9 10 5 28 -6 34 -5 2 -25 4 -26 2z m21 -10 c5 -2 7 -13 4 -20 -2 -3 -6 -5 -11 -5 l-5 0 0 14 0 13 4 0 c3 0 6 -1 8 -2z M774 69 c0 -1 8 -23 13 -37 1 -3 2 -6 2 -7 2 -1 11 -1 13 0 1 1 15 42 15 44 0 0 -2 0 -5 0 -5 0 -6 0 -7 -3 -1 -3 -7 -21 -8 -25 -1 -6 -1 -6 -11 25 -1 2 -1 3 -6 3 -3 0 -6 0 -6 0z M820 48 c-9 -26 -8 -23 -3 -24 5 0 6 1 8 6 l1 4 8 0 8 0 1 -4 c1 -3 2 -5 2 -5 2 -1 9 -1 9 0 1 0 -2 10 -6 22 l-8 22 -6 0 -7 0 -7 -21z m17 1 l2 -7 -5 0 c-6 0 -6 -1 -3 8 3 8 3 8 6 -1z M858 68 c0 -1 0 -11 0 -23 l1 -20 14 0 14 0 0 4 0 4 -9 0 -9 1 -1 17 0 18 -5 0 c-2 0 -4 -1 -5 -1z M891 52 c0 -18 1 -20 7 -25 5 -4 15 -4 21 -1 8 4 8 6 9 26 l0 17 -5 0 -5 0 0 -16 c0 -15 0 -15 -2 -18 -4 -3 -9 -3 -13 0 -2 3 -2 3 -2 18 l0 16 -5 0 -5 0 0 -17z M933 47 l1 -22 15 0 15 0 0 4 0 4 -10 0 -11 0 0 5 1 5 9 0 9 0 0 4 0 4 -9 0 -10 0 0 4 0 5 10 0 11 1 0 4 0 4 -15 0 -16 0 0 -22z M980 68 c0 -1 0 -11 0 -23 l1 -20 4 0 5 0 0 8 0 8 9 0 9 0 0 4 0 4 -9 0 -9 0 0 5 0 6 10 0 10 1 0 4 0 4 -14 0 c-11 0 -15 0 -16 -1z M1014 52 c0 -18 1 -20 7 -25 7 -5 22 -3 27 4 2 3 3 4 3 21 l0 17 -5 0 -5 0 0 -15 c0 -18 -1 -21 -10 -21 -6 0 -7 3 -7 21 l0 15 -5 0 -5 0 0 -17z M1056 46 l0 -22 5 0 5 1 0 13 1 13 7 -11 c10 -15 11 -16 15 -16 l4 0 0 23 0 22 -5 0 -4 0 -1 -13 0 -13 -9 13 -9 13 -5 0 -4 0 0 -23z M1099 68 c-1 0 -1 -10 -1 -22 l0 -21 3 -1 c3 -1 19 1 23 2 11 4 15 20 9 32 -4 8 -8 10 -22 11 -7 0 -12 0 -12 -1z m23 -11 c3 -2 3 -3 4 -9 0 -10 -4 -15 -13 -15 l-4 0 0 14 0 13 5 0 c4 0 6 -1 8 -3z"/></g></svg><div id="eyebrow" class="evf-eyebrow"></div></div>\n    <div class="evf-accent"></div>\n    <h1 id="headline" class="evf-headline"></h1>\n    <p id="subtitle" class="evf-subtitle"></p>\n    <div id="legend" class="evf-legend"></div>\n    <div id="chart-area" class="evf-chart"><canvas id="chart"></canvas></div>\n    <div id="custom" class="evf-custom" hidden></div>\n    <p id="note" class="evf-note"></p>\n    <p id="source" class="evf-source"></p>\n  </div>\n</div></div>\n<p id="export-msg"></p>\n<div id="export-out"></div>';
let C = (typeof CONFIG !== 'undefined' && CONFIG) ? CONFIG : (window.CONFIG || null);
let T = 'line', F = 1, W = 1080, H = 1350, CHART = null, CHECK = null, REMOVED = 0, LIBERR = null, ERR = null, OVERLAP = false;

const K = { cyan: '#1DB4D7', white: '#FFFFFF', steel: '#5C768C', grey: '#707070', red: '#E05555', navy: '#15263B',
  muted: 'rgba(255,255,255,0.72)', grid: 'rgba(255,255,255,0.08)', zero: 'rgba(255,255,255,0.35)', axis: 'rgba(255,255,255,0.18)',
  posBar: 'rgba(29,180,215,0.85)', partBar: 'rgba(29,180,215,0.50)', negBar: 'rgba(224,85,85,0.35)', negEdge: 'rgba(224,85,85,0.50)' };
const LINE = { focus: K.cyan, context: 'rgba(255,255,255,0.80)', context2: K.steel, context3: K.grey };
const FILL = { focus: K.posBar, context: 'rgba(255,255,255,0.55)', context2: K.steel, context3: K.grey };
const DIMS = { portrait: { w: 1080, h: 1350, f: 1, head: 68, headMin: 56, lines: 3 },
               landscape: { w: 1280, h: 720, f: 0.75, head: 54, headMin: 42, lines: 2 } };
const FONTS = ["800 68px Barlow", "700 30px Barlow", "600 22px 'Inter Tight'", "500 24px 'Inter Tight'", "400 24px 'Inter Tight'"];
const MINUS = '\u2212';

function px(n) { return Math.round(n * F); }
function dims() { return DIMS[C.canvas] || DIMS.portrait; }
function fmt(v, dec, bare) {
  if (v === null || v === undefined || isNaN(v)) return '';
  const f = C.numberFormat || {}; const d = dec !== undefined ? dec : (f.decimals !== undefined ? f.decimals : 1);
  const a = Math.abs(v).toLocaleString('en-GB', { minimumFractionDigits: d, maximumFractionDigits: d });
  const s = v < 0 ? MINUS : (f.signed && v > 0 && !bare ? '+' : '');
  return s + (f.prefix || '') + a + (f.suffix || '');
}
function tick(v) { const y = C.yAxis || {}; if (v === 0 && (C.numberFormat || {}).prefix) return '0'; return fmt(v, y.tickDecimals !== undefined ? y.tickDecimals : 0, true); }
function isPart(i) { return C.partialFrom !== null && C.partialFrom !== undefined && i >= C.partialFrom; }
function isHi(label, i) { return (C.highlight || []).some(h => String(h) === String(label) || (Number.isInteger(h) && h === i)); }
function role(s) { return LINE[s.role] ? s.role : 'focus'; }
function merge(a, b) { for (const k in b) { if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k])) { a[k] = merge(a[k] || {}, b[k]); } else { a[k] = b[k]; } } return a; }
function lastIdx(arr) { for (let i = (arr || []).length - 1; i >= 0; i--) { if (arr[i] !== null && arr[i] !== undefined) return i; } return -1; }
function axisTitle(o) { return (o && o.title) ? { display: true, text: o.title, color: K.steel, font: { size: px(22), weight: 500 } } : { display: false }; }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function theme() {
  const d = Chart.defaults;
  d.font.family = "'Inter Tight', 'Inter', sans-serif"; d.font.size = px(24); d.font.weight = 500; d.color = K.muted;
  d.borderColor = K.grid; d.animation = false; d.responsive = true; d.maintainAspectRatio = false; d.devicePixelRatio = 2;
  d.plugins.legend.display = false; d.plugins.tooltip.enabled = false;
  d.elements.point.radius = 0; d.elements.line.tension = 0; d.elements.bar.borderRadius = 0;
}
function valueScale() {
  const y = C.yAxis || {}; const bars = T !== 'line' && T !== 'scatter';
  const sc = { type: y.log ? 'logarithmic' : 'linear', beginAtZero: bars ? true : y.zeroBased !== false,
    grid: { color: c => (c.tick && c.tick.value === 0) ? K.zero : K.grid, drawTicks: false }, border: { display: false },
    ticks: { padding: px(14), maxTicksLimit: 7, callback: v => tick(v) }, title: axisTitle(y) };
  if (y.min !== null && y.min !== undefined && !(bars && y.min > 0)) sc.min = y.min;
  if (y.max !== null && y.max !== undefined) sc.max = y.max;
  if (T === 'stacked') sc.stacked = true;
  if ((T === 'bar' || T === 'hbar') && !y.log) {
    sc.bounds = 'data'; sc.ticks.includeBounds = false;
    sc.afterDataLimits = s => {
      const vals = [].concat(...(C.series || []).map(x => (x.data || []).filter(v => typeof v === 'number')), (C.refLines || []).map(r => r.value));
      const lo = Math.min(0, ...vals), hi = Math.max(0, ...vals), span = (hi - lo) || 1;
      if (y.min === null || y.min === undefined) s.min = lo < 0 ? lo - 0.12 * span : 0;
      if (y.max === null || y.max === undefined) s.max = hi > 0 ? hi + 0.06 * span : 0;
    };
    sc.afterBuildTicks = s => {
      const raw = (s.max - s.min) / 5 || 1; const mag = Math.pow(10, Math.floor(Math.log10(raw))); const n = raw / mag;
      const step = (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * mag; const ticks = [];
      for (let v = Math.ceil(s.min / step - 1e-9) * step; v <= s.max + 1e-9; v += step) ticks.push({ value: Math.round(v / step) * step });
      s.ticks = ticks;
    };
  }
  return sc;
}
function catScale(isY) {
  const x = C.xAxis || {}; const n = (C.labels || []).length; const showAll = T !== 'line' && n <= 16;
  return { grid: { display: false }, border: { color: K.axis }, stacked: T === 'stacked', title: axisTitle(x),
    ticks: isY ? { color: 'rgba(255,255,255,0.85)', padding: px(12), autoSkip: false }
               : { maxRotation: 0, autoSkip: !showAll, maxTicksLimit: showAll ? n : (x.maxTicks || 8), padding: px(10) } };
}
function legendHTML(items) {
  document.getElementById('legend').innerHTML = items.map(it => '<span><i style="background:' + it.c + '"></i>' + esc(it.n) + '</span>').join('');
}

function build() {
  const S = C.series || []; const L = C.labels || [];
  if (T === 'line') {
    return { type: 'line', data: { labels: L, datasets: S.map(s => ({ label: s.name, data: s.data, borderColor: LINE[role(s)],
      borderWidth: role(s) === 'focus' ? Math.max(3, px(6)) : Math.max(2, px(4)), pointRadius: 0, spanGaps: false,
      segment: { borderDash: c => isPart(c.p1DataIndex) ? [px(14), px(10)] : undefined } })) },
      options: { layout: { padding: { right: endSpace(), top: px(20) } }, scales: { x: catScale(false), y: valueScale() } } };
  }
  if (T === 'bar' || T === 'hbar') {
    const single = S.length === 1; const hb = T === 'hbar';
    if (!single) legendHTML(S.map(s => ({ n: s.name, c: FILL[role(s)] })));
    const ds = S.map(s => ({ label: s.name, data: s.data,
      backgroundColor: c => { const v = s.data[c.dataIndex]; const hl = (C.highlight || []).length > 0;
        if (hl && !isHi(L[c.dataIndex], c.dataIndex)) return K.steel;
        if (single && v < 0) return K.negBar;
        if (single && isPart(c.dataIndex)) return K.partBar;
        if (hl) return K.posBar;
        return FILL[role(s)]; },
      borderColor: c => { const hl = (C.highlight || []).length > 0;
        return (single && s.data[c.dataIndex] < 0 && (!hl || isHi(L[c.dataIndex], c.dataIndex))) ? K.negEdge : 'rgba(0,0,0,0)'; },
      borderWidth: c => { const hl = (C.highlight || []).length > 0;
        return (single && s.data[c.dataIndex] < 0 && (!hl || isHi(L[c.dataIndex], c.dataIndex))) ? 2 : 0; },
      categoryPercentage: 0.78, barPercentage: single ? 0.86 : 0.92 }));
    return { type: 'bar', data: { labels: L, datasets: ds },
      options: { indexAxis: hb ? 'y' : 'x',
        layout: { padding: hb ? { right: px(110), left: px(10), top: (C.refLines || []).some(r => r.label) ? px(40) : 0 } : { top: px(44) } },
        scales: hb ? { y: catScale(true), x: valueScale() } : { x: catScale(false), y: valueScale() } } };
  }
  if (T === 'stacked') {
    legendHTML(S.map(s => ({ n: s.name, c: FILL[role(s)] })));
    return { type: 'bar', data: { labels: L, datasets: S.map(s => ({ label: s.name, data: s.data, backgroundColor: FILL[role(s)],
      borderColor: K.navy, borderWidth: { top: 2 }, categoryPercentage: 0.78, barPercentage: 0.9 })) },
      options: { scales: { x: catScale(false), y: valueScale() } } };
  }
  if (T === 'scatter') {
    const pts = (S[0] && S[0].data) || [];
    return { type: 'scatter', data: { datasets: [{ label: S[0] ? S[0].name : '', data: pts, pointRadius: px(9), borderWidth: 0,
      backgroundColor: c => { const p = pts[c.dataIndex]; return (p && isHi(p.label, c.dataIndex)) ? K.cyan : K.steel; } }] },
      options: { layout: { padding: { right: px(40), top: px(20) } }, scales: {
        x: { type: 'linear', grid: { color: K.grid, drawTicks: false }, border: { color: K.axis }, title: axisTitle(C.xAxis),
             ticks: { padding: px(10), maxTicksLimit: 7 } },
        y: valueScale() } } };
  }
  throw new Error('unknown type "' + T + '"');
}
function endSpace() {
  const c = document.createElement('canvas').getContext('2d'); let w = 0; const S = C.series || [];
  S.forEach(s => { const i = lastIdx(s.data); if (i < 0) return;
    c.font = '700 ' + px(30) + "px 'Barlow'"; w = Math.max(w, c.measureText(fmt(s.data[i])).width);
    if (S.length > 1) { c.font = '500 ' + px(22) + "px 'Inter Tight'"; w = Math.max(w, c.measureText(s.name).width); } });
  return Math.ceil(w) + px(34);
}
const evfPlugin = { id: 'evf', afterDatasetsDraw(chart) {
  const ctx = chart.ctx; const S = C.series || []; const L = C.labels || []; const A = chart.chartArea;
  ctx.save();
  (C.refLines || []).forEach(r => {
    const hb = T === 'hbar'; const sc = hb ? chart.scales.x : chart.scales.y; const p = sc.getPixelForValue(r.value);
    ctx.setLineDash([px(8), px(8)]); ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 2; ctx.beginPath();
    if (hb) { ctx.moveTo(p, A.top); ctx.lineTo(p, A.bottom); } else { ctx.moveTo(A.left, p); ctx.lineTo(A.right, p); }
    ctx.stroke(); ctx.setLineDash([]);
    if (r.label) { ctx.font = '500 ' + px(22) + "px 'Inter Tight'"; ctx.fillStyle = K.muted; ctx.textBaseline = 'bottom';
      if (hb) { ctx.textAlign = 'left'; ctx.fillText(r.label, p + px(8), A.top - px(8)); } else { ctx.textAlign = 'right'; ctx.fillText(r.label, A.right, p - px(8)); } }
  });
  if (T === 'line') {
    const labs = [];
    S.forEach((s, k) => { const i = lastIdx(s.data); if (i < 0) return; const pt = chart.getDatasetMeta(k).data[i];
      labs.push({ x: pt.x, y: pt.y, v: fmt(s.data[i]), n: S.length > 1 ? s.name : '', c: LINE[role(s)] }); });
    labs.sort((a, b) => a.y - b.y);
    const gap = S.length > 1 ? px(62) : px(36);
    for (let j = 1; j < labs.length; j++) { if (labs[j].y - labs[j - 1].y < gap) labs[j].y = labs[j - 1].y + gap; }
    labs.forEach(l => { ctx.fillStyle = l.c; ctx.textAlign = 'left';
      ctx.font = '700 ' + px(30) + "px 'Barlow'"; ctx.textBaseline = l.n ? 'bottom' : 'middle'; ctx.fillText(l.v, l.x + px(16), l.n ? l.y + px(4) : l.y);
      if (l.n) { ctx.font = '500 ' + px(22) + "px 'Inter Tight'"; ctx.textBaseline = 'top'; ctx.fillText(l.n, l.x + px(16), l.y + px(6)); } });
  }
  if ((T === 'bar' || T === 'hbar') && S.length === 1) {
    const s = S[0]; const meta = chart.getDatasetMeta(0); const n = s.data.length; const hb = T === 'hbar';
    ctx.font = '700 ' + px(26) + "px 'Barlow'";
    const nums = s.data.map(v => (typeof v === 'number' ? v : null)); const vals = nums.filter(v => v !== null);
    const widest = Math.max(0, ...vals.map(v => ctx.measureText(fmt(v)).width));
    const slot = hb ? (A.bottom - A.top) / Math.max(1, n) : (A.right - A.left) / Math.max(1, n);
    const fits = hb ? slot >= px(30) : widest + px(10) <= slot;
    const vmax = Math.max(...vals), vmin = Math.min(...vals);
    const key = i => i === lastIdx(s.data) || isHi(L[i], i) || nums[i] === vmax || nums[i] === vmin;
    let mode = C.valueLabels || 'auto';
    if (mode === 'auto') mode = fits ? 'all' : 'key';
    if (mode === 'all' && !fits) OVERLAP = true;
    meta.data.forEach((bar, i) => { const v = s.data[i]; if (v === null || v === undefined) return;
      if (isPart(i)) { ctx.setLineDash([px(8), px(6)]); ctx.strokeStyle = K.cyan; ctx.lineWidth = 2;
        if (hb) { ctx.strokeRect(Math.min(bar.x, bar.base), bar.y - bar.height / 2, Math.abs(bar.x - bar.base), bar.height); }
        else { ctx.strokeRect(bar.x - bar.width / 2, Math.min(bar.y, bar.base), bar.width, Math.abs(bar.base - bar.y)); }
        ctx.setLineDash([]); }
      if (mode === 'none' || (mode === 'last' && i !== lastIdx(s.data)) || (mode === 'key' && !key(i))) return;
      ctx.font = '700 ' + px(26) + "px 'Barlow'"; ctx.fillStyle = v < 0 ? K.red : (isPart(i) || isHi(L[i], i) ? K.cyan : K.white);
      if (hb) { ctx.textBaseline = 'middle'; ctx.textAlign = v < 0 ? 'right' : 'left'; ctx.fillText(fmt(v), v < 0 ? bar.x - px(12) : bar.x + px(12), bar.y); }
      else { const t = fmt(v); const tw = ctx.measureText(t).width; const x = Math.max(tw / 2 + px(4), Math.min(bar.x, chart.width - tw / 2 - px(4)));
        ctx.textAlign = 'center'; ctx.textBaseline = v < 0 ? 'top' : 'bottom'; ctx.fillText(t, x, v < 0 ? bar.y + px(10) : bar.y - px(10)); }
    });
  }
  if (T === 'scatter') {
    const pts = (S[0] && S[0].data) || []; const meta = chart.getDatasetMeta(0);
    ctx.font = '600 ' + px(22) + "px 'Inter Tight'"; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    meta.data.forEach((el, i) => { const p = pts[i]; if (!p || !p.label) return; if ((C.highlight || []).length && !isHi(p.label, i)) return;
      ctx.fillStyle = isHi(p.label, i) ? K.cyan : K.muted; ctx.fillText(p.label, el.x + px(16), el.y); });
  }
  ctx.restore();
} };

/* ===== CHECKS ===== */
function engineCheck() {
  const m = SELF.match(/^https:\/\/cdn\.jsdelivr\.net\/gh\/[^\/]+\/[^\/@]+@(\d+\.\d+\.\d+)\/evf-chart\.js(\?.*)?$/);
  return { ok: !!m && m[1] === VERSION, tag: m ? m[1] : null };
}
function hasFont(fam, wt) {
  const c = document.createElement('canvas').getContext('2d'); const t = 'EVF 0123456789 WMwmIl';
  c.font = wt + ' 40px monospace'; const a = c.measureText(t).width;
  c.font = wt + " 40px '" + fam + "', monospace"; return Math.abs(c.measureText(t).width - a) > 0.5;
}
function fontsOK() { return hasFont('Barlow', 800) && hasFont('Inter Tight', 500); }
function brandOK() {
  const cs = id => getComputedStyle(document.getElementById(id));
  const fr = cs('evf-frame'), hd = cs('headline'), eb = cs('eyebrow'), so = cs('source');
  return fr.backgroundColor === 'rgb(21, 38, 59)' && fr.backgroundImage === 'none' && fr.boxShadow === 'none' && fr.borderTopLeftRadius === '0px'
    && /Barlow/.test(hd.fontFamily) && hd.color === 'rgb(255, 255, 255)' && hd.textShadow === 'none'
    && eb.color === 'rgb(29, 180, 215)' && so.color === 'rgb(92, 118, 140)';
}
function textIssues(name, t) {
  const w = [];
  if (/\u2014/.test(t)) w.push(name + ' contains an em dash.');
  if (/\s\u2013\s/.test(t)) w.push(name + ' uses an en dash as a dash.');
  if (/;/.test(t)) w.push(name + ' contains a semicolon.');
  return w;
}
function overflow() {
  const fr = document.getElementById('evf-frame'); const pb = parseFloat(getComputedStyle(fr).paddingBottom) || 0;
  const src = document.getElementById('source'); const cu = document.getElementById('custom');
  if (src.offsetTop + src.offsetHeight > H - pb + 1) return true;
  return !cu.hidden && cu.scrollHeight > cu.clientHeight + 2;
}
function lint(headOK) {
  const w = []; const S = C.series || []; const L = C.labels || [];
  if (LIBERR && T !== 'custom') w.push('Chart library blocked (' + LIBERR.message + '). Save this code as an .html file and open it in Chrome.');
  if (ERR) w.push('Could not build the chart: ' + ERR.message);
  if (!CHECK || !CHECK.ok) w.push(CHECK && CHECK.tag ? 'Engine check failed. The link asks for version ' + CHECK.tag + ' but the engine file is version ' + VERSION + '. Do not publish from this copy.'
    : 'Engine check failed. The page must load evf-chart.js from its pinned jsDelivr link. Do not publish from this copy.');
  if (!fontsOK()) w.push('Brand fonts did not load. Do not export. Reload, or open the file in Chrome with internet access.');
  if (!brandOK()) w.push('Brand styles are overridden somewhere on the page. Do not export.');
  if (C.override && Object.keys(C.override).length) w.push('override is in use. Check the chart against the brand rules before export.');
  if (C.canvas && !DIMS[C.canvas]) w.push('canvas must be "portrait" or "landscape".');
  const words = String(C.headline || '').trim().split(/\s+/).filter(Boolean).length;
  if (!words) w.push('Headline is empty.');
  if (words > 8) w.push('Headline has ' + words + ' words. Maximum is 8.');
  if (!headOK) w.push('Headline is too long for the frame.');
  ['eyebrow', 'headline', 'subtitle', 'note', 'partialLabel', 'source'].forEach(k => w.push(...textIssues(k, String(C[k] || ''))));
  if (!/^Source:/.test(C.source || '')) w.push('Source line must start with "Source:".');
  if (!/\d{4}/.test(C.source || '')) w.push('Source line has no date.');
  if (T === 'custom') {
    if (!String(C.customHTML || '').trim()) w.push('customHTML is empty.');
    if (REMOVED) w.push(REMOVED + ' disallowed tags or attributes were removed from customHTML.');
    w.push(...textIssues('customHTML', document.getElementById('custom').textContent || ''));
  } else {
    if (!S.length) w.push('No data series.');
    if (S.length > 4) w.push('More than 4 series.');
    if (T !== 'scatter') S.forEach(s => { const d = s.data || [];
      if (d.length !== L.length) w.push('Series "' + s.name + '" has ' + d.length + ' values for ' + L.length + ' labels.');
      d.forEach(v => { if (v !== null && typeof v !== 'number') w.push('Non-numeric value in "' + s.name + '": ' + v); }); });
    if (T === 'scatter') ((S[0] || {}).data || []).forEach(p => { if (!p || typeof p.x !== 'number' || typeof p.y !== 'number') w.push('Scatter points need numeric x and y.'); });
    if ((C.yAxis || {}).log) S.forEach(s => (s.data || []).forEach(v => { if (typeof v === 'number' && v <= 0) w.push('Log scale with a value of zero or below.'); }));
    if (T !== 'line' && T !== 'scatter' && (C.yAxis || {}).min > 0) w.push('Bars always start at zero. yAxis.min was ignored.');
  }
  if ((T === 'bar' || T === 'hbar' || T === 'line') && !(C.numberFormat || {}).signed) {
    const all = [].concat(...S.map(s => (s.data || []).filter(v => typeof v === 'number')));
    if (all.some(v => v < 0) && all.some(v => v > 0)) w.push('Gains and losses need signs. Set numberFormat.signed to true.');
  }
  const HL = T === 'scatter' ? ((S[0] || {}).data || []).map(p => p && p.label) : L;
  (C.highlight || []).forEach(h => { if (!HL.some((lab, i) => String(h) === String(lab) || (Number.isInteger(h) && h === i))) w.push('highlight entry ' + JSON.stringify(h) + ' matches no bar or point.'); });
  if (T !== 'custom' && S.length > 1) { const rs = S.map(role); if (new Set(rs).size < rs.length) w.push('Two series share a colour. Give each series its own role.'); }
  if (OVERLAP) w.push('Value labels overlap. Set valueLabels to "auto" or "last".');
  if ((C.numberFormat || {}).prefix === '$' && /\bSGD\b|S\$|Singapore dollar/i.test(String(C.subtitle || '') + ' ' + String(C.note || ''))) w.push('Values are in Singapore dollars. Use the prefix "S$".');
  if (overflow()) w.push('Content runs past the bottom margin. Shorten the text or remove rows.');
  if (/placeholder/i.test(JSON.stringify(C))) w.push('Placeholder text still present.');
  const u = [...new Set(w)]; window.EVF_QA = u;
  const head = (CHECK && CHECK.ok) ? '<span class="ok">EVF engine ' + VERSION + ' verified.</span> ' : '';
  document.getElementById('qa').innerHTML = head + (u.length ? u.map(x => '<span class="bad">QA: ' + esc(x) + '</span>').join(' ') : 'QA: all automatic checks passed.');
}

/* ===== PASTE ROUTE ===== */
function cleanHTML(html) {
  const doc = new DOMParser().parseFromString('<div id="evf-x">' + String(html || '') + '</div>', 'text/html');
  const root = doc.getElementById('evf-x'); if (!root) return '';
  const DROP = /^(script|style|iframe|object|embed|img|svg|math|link|meta|form|input|button|textarea|select|video|audio|canvas|template|picture|source|base)$/;
  const KEEP = /^(div|span|p|br|strong|em|b|i|sup|sub|small|table|thead|tbody|tr|th|td)$/;
  const walk = el => { [...el.children].forEach(ch => {
    const t = ch.tagName.toLowerCase();
    if (DROP.test(t)) { ch.remove(); REMOVED++; return; }
    [...ch.attributes].forEach(at => { if (!/^(class|colspan|rowspan)$/.test(at.name)) { ch.removeAttribute(at.name); REMOVED++; } });
    walk(ch);
    if (!KEEP.test(t)) { ch.replaceWith(...ch.childNodes); REMOVED++; }
  }); };
  walk(root); return root.innerHTML;
}
function relaxedParse(text) {
  let s = String(text || ''); const a = s.indexOf('{'); const b = s.lastIndexOf('}');
  if (a < 0 || b <= a) throw new Error('no { } block found');
  s = s.slice(a, b + 1); let out = ''; let i = 0; let comma = false;
  const flush = () => { if (comma) { out += ','; comma = false; } };
  while (i < s.length) {
    const ch = s[i];
    if (ch === '"' || ch === "'") {
      flush(); let j = i + 1; let str = '';
      while (j < s.length && s[j] !== ch) {
        if (s[j] === '\\') { const nx = s[j + 1] || ''; str += (ch === "'" && nx === "'") ? "'" : '\\' + nx; j += 2; continue; }
        if (ch === "'" && s[j] === '"') { str += '\\"'; j++; continue; }
        if (s[j] === '\n') { str += '\\n'; j++; continue; }
        if (s[j] === '\t') { str += '\\t'; j++; continue; }
        str += s[j]; j++;
      }
      out += '"' + str + '"'; i = j + 1; continue;
    }
    if (ch === '/' && s[i + 1] === '/') { while (i < s.length && s[i] !== '\n') i++; continue; }
    if (ch === '/' && s[i + 1] === '*') { const e = s.indexOf('*/', i + 2); i = e < 0 ? s.length : e + 2; continue; }
    if (ch === ',') { comma = true; i++; continue; }
    if (ch === '}' || ch === ']') { comma = false; out += ch; i++; continue; }
    if (/\s/.test(ch)) { out += ch; i++; continue; }
    flush();
    if (/[A-Za-z_$]/.test(ch)) {
      let j = i; while (j < s.length && /[\w$]/.test(s[j])) j++;
      const word = s.slice(i, j); let k = j; while (k < s.length && /\s/.test(s[k])) k++;
      out += s[k] === ':' ? '"' + word + '"' : (word === 'undefined' ? 'null' : word); i = j; continue;
    }
    out += ch; i++;
  }
  return JSON.parse(out);
}
function togglePaste() { const p = document.getElementById('paste-panel'); p.hidden = !p.hidden; if (!p.hidden) document.getElementById('paste-box').focus(); }
function applyPaste() {
  const m = document.getElementById('paste-msg');
  try { C = relaxedParse(document.getElementById('paste-box').value); render(); m.textContent = 'Rendered. Read the QA line before exporting.'; }
  catch (e) { m.textContent = 'Could not read CONFIG: ' + e.message; }
}

/* ===== LAYOUT, RENDER AND EXPORT ===== */
function fitHeadline() {
  const d = dims(); const h = document.getElementById('headline'); let size = d.head; h.style.fontSize = size + 'px';
  while (h.scrollHeight > size * 1.04 * d.lines + 4 && size > d.headMin) { size -= 2; h.style.fontSize = size + 'px'; }
  return h.scrollHeight <= size * 1.04 * d.lines + 4;
}
function fit() {
  const s = Math.min(1, (document.documentElement.clientWidth - 32) / W); const st = document.getElementById('stage');
  st.style.width = W + 'px'; st.style.height = H + 'px'; st.style.transform = 'scale(' + s + ')';
  const wrap = document.getElementById('wrap'); wrap.style.width = (W * s) + 'px'; wrap.style.height = (H * s) + 'px';
}
function render() {
  const d = dims(); T = C.type || 'line'; F = d.f; W = d.w; H = d.h; ERR = null; REMOVED = 0; OVERLAP = false;
  document.getElementById('evf-frame').className = C.canvas === 'landscape' ? 'landscape' : 'portrait';
  document.getElementById('btn-png').textContent = 'Download PNG ' + W + ' x ' + H;
  const set = (id, t) => { document.getElementById(id).textContent = t || ''; };
  set('eyebrow', C.eyebrow); set('headline', C.headline); set('source', C.source);
  let sub = C.subtitle || ''; if ((C.yAxis || {}).log && !/log scale/i.test(sub)) sub += '. Log scale';
  set('subtitle', sub); set('note', [C.partialLabel, C.note].filter(Boolean).join(' '));
  document.getElementById('legend').innerHTML = ''; document.getElementById('export-out').innerHTML = ''; document.getElementById('export-msg').textContent = '';
  if (CHART) { CHART.destroy(); CHART = null; }
  fit(); const headOK = fitHeadline();
  const area = document.getElementById('chart-area'); const cu = document.getElementById('custom');
  if (T === 'custom') { area.style.display = 'none'; cu.hidden = false; cu.innerHTML = cleanHTML(C.customHTML); }
  else {
    area.style.display = ''; cu.hidden = true; cu.innerHTML = '';
    if (typeof Chart !== 'undefined') {
      try { theme(); const cfg = merge(build(), { options: C.override || {} }); cfg.plugins = [evfPlugin];
        CHART = new Chart(document.getElementById('chart'), cfg); }
      catch (e) { ERR = e; }
    }
  }
  lint(headOK);
}
async function exportPNG(scale) {
  const msg = document.getElementById('export-msg'); const stage = document.getElementById('stage');
  const prev = stage.style.transform; stage.style.transform = 'none';
  try {
    await document.fonts.ready;
    const frame = document.getElementById('evf-frame'); const o = frame.getBoundingClientRect();
    const cv = document.createElement('canvas'); cv.width = W * scale; cv.height = H * scale;
    const ctx = cv.getContext('2d'); ctx.scale(scale, scale);
    await drawNode(ctx, frame, o);
    const url = cv.toDataURL('image/png');
    const name = 'EVF_CotM_' + String(C.headline || 'chart').replace(/[^A-Za-z0-9]+/g, '_').slice(0, 48) + (scale > 1 ? '_2x' : '') + '.png';
    try { const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); } catch (e) {}
    const out = document.getElementById('export-out'); out.innerHTML = ''; const img = new Image(); img.src = url; img.alt = C.headline || 'EVF chart'; out.appendChild(img);
    msg.textContent = 'Exported ' + cv.width + ' x ' + cv.height + ' px. If no download started, right-click or long-press the image below and save it.'
      + ((window.EVF_QA || []).length ? ' Warning: QA messages are still open.' : '');
  } catch (e) { msg.textContent = 'Export failed: ' + e.message; }
  finally { stage.style.transform = prev; }
}
/* Draws the frame onto a canvas from the live layout: backgrounds, solid borders, text, the chart and the logo. */
async function drawNode(ctx, el, o) {
  const cs = getComputedStyle(el);
  if (el.hidden || cs.display === 'none' || cs.visibility === 'hidden') return;
  const r = el.getBoundingClientRect(); const x = r.left - o.left; const y = r.top - o.top;
  const bg = cs.backgroundColor;
  if (bg && bg !== 'transparent' && !/rgba\(.*,\s*0\)$/.test(bg)) { ctx.fillStyle = bg; ctx.fillRect(x, y, r.width, r.height); }
  [['Top', w => ctx.fillRect(x, y, r.width, w)], ['Bottom', w => ctx.fillRect(x, y + r.height - w, r.width, w)],
   ['Left', w => ctx.fillRect(x, y, w, r.height)], ['Right', w => ctx.fillRect(x + r.width - w, y, w, r.height)]].forEach(([side, draw]) => {
    const w = parseFloat(cs['border' + side + 'Width']); const st = cs['border' + side + 'Style'];
    if (w > 0 && st !== 'none' && st !== 'hidden') { ctx.fillStyle = cs['border' + side + 'Color']; draw(w); } });
  const tag = el.tagName.toLowerCase();
  if (tag === 'canvas') { ctx.drawImage(el, x, y, r.width, r.height); return; }
  if (tag === 'svg') { await drawSVG(ctx, el, x, y, r.width, r.height); return; }
  for (const n of el.childNodes) {
    if (n.nodeType === 3) drawText(ctx, n, cs, o);
    else if (n.nodeType === 1) await drawNode(ctx, n, o);
  }
}
function drawText(ctx, node, cs, o) {
  const text = node.textContent; if (!text || !text.trim()) return;
  ctx.font = cs.fontStyle + ' ' + cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
  ctx.fillStyle = cs.color; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
  if ('letterSpacing' in ctx) ctx.letterSpacing = cs.letterSpacing === 'normal' ? '0px' : cs.letterSpacing;
  const asc = ctx.measureText('Hg').fontBoundingBoxAscent; const up = cs.textTransform === 'uppercase';
  const range = document.createRange(); const re = /\S+/g; let m;
  while ((m = re.exec(text))) {
    range.setStart(node, m.index); range.setEnd(node, m.index + m[0].length);
    const rr = range.getClientRects()[0]; if (!rr) continue;
    ctx.fillText(up ? m[0].toUpperCase() : m[0], rr.left - o.left, rr.top - o.top + asc);
  }
  if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
}
function drawSVG(ctx, svg, x, y, w, h) {
  return new Promise(res => {
    const c = svg.cloneNode(true); c.setAttribute('width', w); c.setAttribute('height', h);
    const img = new Image(); img.onload = () => { ctx.drawImage(img, x, y, w, h); res(); }; img.onerror = () => res();
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(c));
  });
}
function loadScript(urls) {
  return new Promise((res, rej) => { const tryAt = i => { if (i >= urls.length) return rej(new Error('could not load ' + urls[0]));
    const s = document.createElement('script'); s.src = urls[i]; s.onload = () => res(); s.onerror = () => { s.remove(); tryAt(i + 1); };
    document.head.appendChild(s); }; tryAt(0); });
}
function loadCSS(href) {
  return new Promise(res => {
    if (document.getElementById('evf-fonts')) return res();
    const l = document.createElement('link'); l.id = 'evf-fonts'; l.rel = 'stylesheet'; l.href = href;
    l.onload = () => res(); l.onerror = () => res(); document.head.appendChild(l); setTimeout(res, 5000);
  });
}
function mount() {
  const st = document.createElement('style'); st.id = 'evf-style'; st.textContent = CSS; document.head.appendChild(st);
  const ld = document.getElementById('evf-loading'); if (ld) ld.remove();
  const app = document.createElement('div'); app.id = 'evf-app'; app.innerHTML = SHELL; document.body.appendChild(app);
  document.getElementById('btn-png').addEventListener('click', () => exportPNG(1));
  document.getElementById('btn-png2').addEventListener('click', () => exportPNG(2));
  document.getElementById('btn-paste').addEventListener('click', togglePaste);
  document.getElementById('btn-render').addEventListener('click', applyPaste);
}
function start() {
  CHECK = engineCheck();
  window.addEventListener('resize', fit);
  if (!C) { document.getElementById('qa').innerHTML = '<span class="bad">QA: No CONFIG found on the page. Use Paste CONFIG.</span>'; window.EVF_QA = ['No CONFIG']; return; }
  try { render(); } catch (e) { document.getElementById('qa').innerHTML = '<span class="bad">QA: ' + esc(e.message) + '</span>'; window.EVF_QA = [e.message]; }
}
mount(); fit();
loadCSS(FONTS_URL)
  .then(() => loadScript(['https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js']).catch(e => { LIBERR = e; }))
  .then(() => Promise.all(FONTS.map(f => document.fonts.load(f).catch(() => null))))
  .then(() => document.fonts.ready)
  .then(start);
})();
