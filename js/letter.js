/* Letter: envelope animation, slide-out paper, typewriter */
let letterOpen = false, typing = null;
const lp = () => LETTER.paragraphs.map(p => tr(p));
function letterParts() { return [tr(LETTER.greeting), ...lp(), tr(LETTER.signoff), tr(LETTER.name)]; }
function renderLetterStatic() {
  const parts = letterParts();
  $('#paperText').innerHTML = parts.map((t, i) => {
    const cls = i === 0 ? 'greet' : i === parts.length - 2 ? 'sign' : i === parts.length - 1 ? 'name' : '';
    return `<p class="${cls}">${esc(t)}</p>`;
  }).join('');
}
function stopTyping() { if (typing) { clearTimeout(typing); typing = null; } }
function typeLetter() {
  stopTyping();
  const parts = letterParts();
  const root = $('#paperText'); root.innerHTML = '';
  const els = parts.map((t, i) => {
    const p = document.createElement('p');
    p.className = i === 0 ? 'greet' : i === parts.length - 2 ? 'sign' : i === parts.length - 1 ? 'name' : '';
    root.appendChild(p); return p;
  });
  root.classList.add('typing');
  let pi = 0, ci = 0;
  const step = () => {
    if (pi >= parts.length) { root.classList.remove('typing'); typing = null; $('#skipLetter').hidden = true; return; }
    ci += 2; /* progressive slice keeps Arabic letters joined */
    els[pi].textContent = parts[pi].slice(0, ci);
    if (ci >= parts[pi].length) { els[pi].textContent = parts[pi]; pi++; ci = 0; typing = setTimeout(step, 260); }
    else typing = setTimeout(step, 22);
  };
  step();
}
function finishLetter() { stopTyping(); renderLetterStatic(); $('#paperText').classList.remove('typing'); $('#skipLetter').hidden = true; }
function openLetter() {
  if (letterOpen) return;
  letterOpen = true;
  const env = $('#envelope'); env.classList.add('open'); env.disabled = true;
  const show = () => {
    $('#envStage').classList.add('gone');
    $('#letterSub').hidden = true;
    const paper = $('#paper'); paper.hidden = false;
    requestAnimationFrame(() => paper.classList.add('in'));
    reduce ? finishLetter() : typeLetter();
    paper.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };
  reduce ? show() : setTimeout(show, 1500);
}
$('#envelope').onclick = openLetter;
$('#skipLetter').onclick = finishLetter;
onLang(() => {
  if (!letterOpen) return;
  /* language switch: show the full letter in the new language */
  finishLetter();
});
