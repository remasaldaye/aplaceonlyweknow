/* Things I Love About You (tap to reveal) + Our Everyday Love */
onLang(() => {
  const open = $$('.love-card.open').map(b => +b.dataset.i);
  $('#loveGrid').innerHTML = LOVE.map((l, i) => `
    <button class="love-card rv ${open.includes(i) ? 'open' : ''}" type="button" data-i="${i}" aria-expanded="${open.includes(i)}">
      <span class="love-n mono">0${i + 1}</span>
      <span class="love-t">${esc(tr(l.title))}</span>
      <span class="love-body"><span>${esc(tr(l.text))}</span></span>
      <span class="love-plus" aria-hidden="true">+</span>
    </button>`).join('');
  const E = EVERYDAY;
  $('#everyday').innerHTML = `
    <h3 class="rv">${esc(ui('love.ehead'))}</h3>
    <p class="e-sub rv">${esc(tr(E.subtitle))}</p>
    <div class="e-cols">
      <ul class="e-list">${E.items.map(x => `<li class="rv">${esc(tr(x))}</li>`).join('')}</ul>
      <aside class="e-feature rv">
        <span class="e-heart" aria-hidden="true">♡</span>
        <h4>${esc(tr(E.feature.title))}</h4>
        <p>${esc(tr(E.feature.text))}</p>
      </aside>
    </div>`;
  if (window.observeReveals) { observeReveals($('#loveGrid')); observeReveals($('#everyday')); }
});
$('#loveGrid').addEventListener('click', e => {
  const b = e.target.closest('.love-card'); if (!b) return;
  const o = b.classList.toggle('open');
  b.setAttribute('aria-expanded', o);
});
