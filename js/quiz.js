/* Quiz: 8 questions, shuffled answers, progress bar, results, restart */
const Q = { step: 'intro', i: 0, score: 0, order: [], picked: null, answers: [] };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function quizStart() {
  Q.step = 'q'; Q.i = 0; Q.score = 0; Q.picked = null;
  Q.order = QUIZ.questions.map(q => shuffle(q.options.map((_, k) => k)));
  renderQuiz();
}
function renderQuiz() {
  const box = $('#quizBox'), n = QUIZ.questions.length;
  if (Q.step === 'intro') {
    box.innerHTML = `<div class="quiz-card fade"><p class="quiz-lead">${esc(ui('quiz.sub'))}</p><button class="btn" id="qStart" type="button">${esc(ui('quiz.start'))}</button></div>`;
    $('#qStart').onclick = quizStart; return;
  }
  if (Q.step === 'q') {
    const q = QUIZ.questions[Q.i], ord = Q.order[Q.i], answered = Q.picked !== null;
    const pct = (Q.i + (answered ? 1 : 0)) / n * 100;
    box.innerHTML = `
      <div class="quiz-card fade" key="${Q.i}">
        <div class="q-top"><span class="mono">${esc(ui('quiz.q'))} ${Q.i + 1} ${esc(ui('quiz.of'))} ${n}</span>
          <div class="q-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${Q.i + (answered ? 1 : 0)}"><i style="width:${pct}%"></i></div></div>
        <h3 class="q-text">${esc(tr(q.q))}</h3>
        <div class="q-opts">${ord.map(k => {
          const o = q.options[k]; let cls = '';
          if (answered) { if (o.correct) cls = 'right'; else if (k === Q.picked) cls = 'wrong'; }
          return `<button type="button" class="q-opt ${cls}" data-k="${k}" ${answered ? 'disabled' : ''}>${esc(tr(o))}</button>`;
        }).join('')}</div>
        <p class="q-fb ${answered ? 'show' : ''}">${answered ? esc(q.options[Q.picked].correct ? ui('quiz.right') : ui('quiz.wrong')) : '&nbsp;'}</p>
        <button class="btn small q-next" id="qNext" type="button" ${answered ? '' : 'hidden'}>${esc(Q.i === n - 1 ? ui('quiz.see') : ui('quiz.next'))}</button>
      </div>`;
    box.querySelectorAll('.q-opt').forEach(b => b.onclick = () => {
      if (Q.picked !== null) return;
      Q.picked = +b.dataset.k;
      if (q.options[Q.picked].correct) Q.score++;
      renderQuiz();
    });
    $('#qNext').onclick = () => { if (Q.i === n - 1) Q.step = 'done'; else { Q.i++; Q.picked = null; } renderQuiz(); };
    return;
  }
  const r = QUIZ.results.find(r => Q.score >= r.min && Q.score <= r.max) || QUIZ.results[0];
  box.innerHTML = `
    <div class="quiz-card fade result">
      <p class="mono">${esc(ui('quiz.score'))}</p>
      <p class="big">${Q.score}<small> / ${n}</small></p>
      <p class="r-msg">${esc(tr(r))}</p>
      <p class="r-final">${esc(tr(QUIZ.final))}</p>
      <button class="btn" id="qAgain" type="button">${esc(ui('quiz.restart'))}</button>
    </div>`;
  $('#qAgain').onclick = quizStart;
}
onLang(renderQuiz);
