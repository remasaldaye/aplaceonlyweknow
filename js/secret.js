/* Secret page: hidden until a password AND a letter are set in config.js */
const SEC = CONFIG.secret || {};
const secretReady = () => !!(SEC.password && SEC.letter);
const sm = $('#secretModal');
let secretUnlocked = false;

/* Make Arabic input forgiving: ignore spaces, diacritics, tatweel, and ة/ه, أإآ/ا, ى/ي variants */
const normPw = s => String(s || '').normalize('NFKC').trim()
  .replace(/[ً-ٰٟـ‎‏‪-‮\s]/g, '')
  .replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').toLowerCase();

function renderSecret() {
  if (!secretUnlocked) return;
  const paras = String(tr(SEC.letter)).split(/\n\s*\n/).filter(Boolean);
  const photos = (SEC.surprises || []).filter(s => s && s.image);
  const m = SEC.music || {};
  $('#secretContent').innerHTML = `
    ${/^https?:\/\//.test(m.link || '') ? `<a class="s-music" href="${esc(m.link)}" target="_blank" rel="noopener noreferrer">
      <span class="s-play" aria-hidden="true">♪</span>
      <span class="s-song" dir="ltr"><b>${esc(m.title)}</b><small>${esc(m.artist)}</small></span>
      <span class="s-open mono">${esc(ui('secret.song'))}</span>
    </a>` : ''}
    <div class="secret-letter">${paras.map(p => `<p dir="auto">${esc(p)}</p>`).join('')}</div>
    ${photos.length ? `<div class="s-gallery">${photos.map(s => `
      <figure class="s-fig">
        <div class="ph" role="img" aria-label="${esc(s.alt || '')}" style="background-image:url('${esc(s.image)}')"></div>
        <figcaption dir="auto">${esc(s.caption || '')}</figcaption>
      </figure>`).join('')}</div>` : ''}`;
}
function openSecret() {
  sm.hidden = false; document.body.classList.add('noscroll');
  if (!secretUnlocked) { $('#secretGate').hidden = false; $('#secretContent').hidden = true; $('#secretInput').focus(); }
}
function closeSecret() {
  sm.hidden = true; document.body.classList.remove('noscroll');
}
$('#secretForm').addEventListener('submit', e => {
  e.preventDefault();
  if (normPw($('#secretInput').value) === normPw(SEC.password)) {
    secretUnlocked = true;
    $('#secretGate').hidden = true; $('#secretContent').hidden = false; $('#secretErr').hidden = true;
    $('#secretInput').value = '';
    renderSecret(); $('.secret-card').scrollTop = 0;
  } else { $('#secretErr').hidden = false; $('#secretInput').select(); }
});
$('#secretX').onclick = closeSecret;
sm.addEventListener('click', e => { if (e.target === sm) closeSecret(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sm.hidden) closeSecret(); });
if (secretReady()) { $('#secretDoor').hidden = false; $('#secretDoor').onclick = openSecret; }
else { sm.remove(); }
onLang(renderSecret);
