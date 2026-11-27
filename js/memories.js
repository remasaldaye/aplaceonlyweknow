/* Story timeline + memories gallery + lightbox */
const $ = (s, r = document) => r.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const photo = (m, cls = '') => m.image
  ? `<div class="ph ${cls}" style="background-image:url('${esc(m.image)}')"></div>`
  : `<div class="ph empty ${cls}"><span>Your photo here</span></div>`;

/* Timeline */
$('#timeline').innerHTML = STORY.map(s => `
  <li class="t-item">
    <div class="t-date mono">${esc(s.date)}</div>
    <article class="t-card">
      <div class="t-body">
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
        ${s.note ? `<p class="hand">${esc(s.note)}</p>` : ''}
      </div>
      ${s.image ? photo(s, 't-ph') : ''}
    </article>
  </li>`).join('');

/* Memories board */
const sizes = ['a', 'b', 'c', 'b', 'a', 'c'];
const tilts = [-3, 2, -1.5, 3, -2, 1.5];
$('#board').innerHTML = MEMORIES.map((m, i) => `
  <button class="polaroid s-${sizes[i % 6]}" style="--tilt:${tilts[i % 6]}deg" data-i="${i}" aria-label="Open memory ${i + 1}">
    ${photo(m)}
    <span class="cap">${esc(m.caption)}</span>
    <span class="mono d">${esc(m.date)}</span>
    ${m.note ? `<span class="hand">${esc(m.note)}</span>` : ''}
  </button>`).join('');

/* Lightbox */
let cur = 0;
const lb = $('#lightbox');
function show(i) {
  cur = (i + MEMORIES.length) % MEMORIES.length;
  const m = MEMORIES[cur];
  $('#lbImg').innerHTML = photo(m);
  $('#lbCap').textContent = m.caption;
  $('#lbDate').textContent = m.date;
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
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});
