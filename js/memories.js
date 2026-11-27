/* Story timeline + memories gallery + lightbox (bilingual) */
const bg = src => `<div class="ph" role="img" style="background-image:url('${esc(src)}')"></div>`;

/* Timeline */
onLang(() => {
  $('#timeline').innerHTML = STORY.map(s => `
  <li class="t-item rv">
    ${s.date ? `<div class="t-date mono">${esc(tr(s.date))}</div>` : ''}
    <article class="t-card">
      <div class="t-body">
        <h3>${esc(tr(s.title))}</h3>
        <p>${esc(tr(s.text))}</p>
      </div>
      ${s.image ? `<div class="ph t-ph" role="img" aria-label="${esc(tr(s.alt))}" style="background-image:url('${esc(s.image)}')"></div>` : ''}
    </article>
  </li>`).join('');
  if (window.observeReveals) observeReveals($('#timeline'));
});

let cur = 0;
const lb = $('#lightbox');

/* Gallery: one tile per photo; a memory without photos becomes a note card */
let TILES = [];
const sizes = ['a', 'b', 'c', 'b', 'a', 'c'];
const tilts = [-3, 2, -1.5, 3, -2, 1.5];
function buildTiles() {
  TILES = [];
  MEMORIES.forEach((m, mi) => {
    if (m.photos && m.photos.length) m.photos.forEach((p, pi) => TILES.push({ m, mi, p, pi, n: m.photos.length }));
    else TILES.push({ m, mi, p: null, pi: 0, n: 0 });
  });
}
onLang(() => {
  buildTiles();
  $('#board').innerHTML = TILES.map((t, i) => {
    const cap = esc(tr(t.m.title));
    const d = t.m.date ? `<span class="mono d">${esc(tr(t.m.date))}</span>` : '';
    const label = `${ui('memories.open')}: ${cap}`;
    if (t.p) {
      return `<button class="polaroid s-${sizes[i % 6]} rv" style="--tilt:${tilts[i % 6]}deg" data-i="${i}" aria-label="${label}">
        <div class="ph" style="background-image:url('${esc(t.p.src)}')"></div>
        <span class="cap">${cap}</span>${d}</button>`;
    }
    return `<button class="polaroid note s-${sizes[i % 6]} rv" style="--tilt:${tilts[i % 6]}deg" data-i="${i}" aria-label="${label}">
      <span class="cap">${cap}</span>
      <span class="note-text">${esc(tr(t.m.text[0]))}</span>${d}</button>`;
  }).join('');
  if (window.observeReveals) observeReveals($('#board'));
  if (!lb.hidden) show(cur);
});

/* Lightbox */
function show(i) {
  cur = (i + TILES.length) % TILES.length;
  const t = TILES[cur];
  $('#lbImg').innerHTML = t.p ? bg(t.p.src).replace('role="img"', `role="img" aria-label="${esc(tr(t.p.alt))}"`) : '';
  $('#lbImg').style.display = t.p ? '' : 'none';
  $('#lbCap').textContent = tr(t.m.title);
  $('#lbText').innerHTML = t.m.text.map(x => `<span>${esc(tr(x))}</span>`).join('');
  $('#lbDate').textContent = tr(t.m.date);
}
function openLb(i) { show(i); lb.hidden = false; document.body.classList.add('noscroll'); $('#lbClose').focus(); }
function closeLb() { lb.hidden = true; document.body.classList.remove('noscroll'); }
$('#board').addEventListener('click', e => { const b = e.target.closest('.polaroid'); if (b) openLb(+b.dataset.i); });
$('#lbClose').onclick = closeLb;
$('#lbPrev').onclick = () => show(cur - 1);
$('#lbNext').onclick = () => show(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  const rtl = document.documentElement.dir === 'rtl';
  if (e.key === 'ArrowLeft') show(cur + (rtl ? 1 : -1));
  if (e.key === 'ArrowRight') show(cur + (rtl ? -1 : 1));
});
