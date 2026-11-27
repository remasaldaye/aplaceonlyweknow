/* Day counter (calculated automatically from CONFIG.startDate) */
function arDays(n) { if (n === 1) return 'يوم واحد'; if (n === 2) return 'يومان'; if (n >= 3 && n <= 10) return n + ' أيام'; return n + ' يوماً'; }
function renderCounter() {
  const el = $('#counter');
  const [y, m, d] = CONFIG.startDate.split('-').map(Number);
  const now = new Date(), a = Date.UTC(y, m - 1, d), b = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const n = Math.floor((b - a) / 86400000);
  if (!(n >= 0)) { el.hidden = true; return; }
  el.hidden = false;
  el.textContent = LANG === 'ar' ? `${ui('home.days')} ${arDays(n)}` : `${ui('home.days')} ${n} ${n === 1 ? 'day' : 'days'}`;
}
onLang(renderCounter);
