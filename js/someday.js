/* Someday: dreams gallery, details modal, mark completed, progress, localStorage */
const DKEY = 'apowk-dreams';
let doneSet = new Set();
try { doneSet = new Set(JSON.parse(localStorage.getItem(DKEY) || '[]')); } catch (e) {}
const saveDreams = () => { try { localStorage.setItem(DKEY, JSON.stringify([...doneSet])); } catch (e) {} };
let openDream = null;

function renderProgress() {
  const n = DREAMS.length, d = DREAMS.filter(x => doneSet.has(x.id)).length;
  $('#dreamBar').style.width = (d / n * 100) + '%';
  $('#dreamCount').textContent = LANG === 'ar' ? `${d} من ${n} ${ui('someday.progress')}` : `${d} of ${n} ${ui('someday.progress')}`;
}
function renderDreams() {
  $('#dreams').innerHTML = DREAMS.map(d => `
    <button class="dream rv ${doneSet.has(d.id) ? 'done' : ''} ${d.image ? '' : 'noimg'}" type="button" data-id="${esc(d.id)}">
      ${d.image ? `<div class="ph" style="background-image:url('${esc(d.image)}')"></div>` : ''}
      <span class="d-body"><span class="d-t">${esc(tr(d.title))}</span>
      <span class="d-badge mono">${doneSet.has(d.id) ? '✓ ' + esc(ui('someday.done')) : ''}</span></span>
    </button>`).join('');
  renderProgress();
  if (window.observeReveals) observeReveals($('#dreams'));
}
function fillModal() {
  const d = DREAMS.find(x => x.id === openDream); if (!d) return;
  $('#dreamImg').style.backgroundImage = d.image ? `url('${d.image}')` : '';
  $('#dreamImg').style.display = d.image ? '' : 'none';
  $('#dreamTitle').textContent = tr(d.title);
  $('#dreamText').textContent = tr(d.text);
  $('#dreamMark').textContent = doneSet.has(d.id) ? ui('someday.unmark') : ui('someday.mark');
}
const dm = $('#dreamModal');
function openDreamModal(id) { openDream = id; fillModal(); dm.hidden = false; document.body.classList.add('noscroll'); $('#dreamX').focus(); }
function closeDreamModal() { dm.hidden = true; openDream = null; document.body.classList.remove('noscroll'); }
$('#dreams').addEventListener('click', e => { const b = e.target.closest('.dream'); if (b) openDreamModal(b.dataset.id); });
$('#dreamX').onclick = closeDreamModal;
dm.addEventListener('click', e => { if (e.target === dm) closeDreamModal(); });
$('#dreamMark').onclick = () => {
  if (doneSet.has(openDream)) doneSet.delete(openDream); else doneSet.add(openDream);
  saveDreams(); fillModal(); renderDreams();
};
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dm.hidden) closeDreamModal(); });
onLang(() => { renderDreams(); if (!dm.hidden) fillModal(); });
