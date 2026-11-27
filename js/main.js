/* Navigation, language toggle, loader, stars, reveals, back-to-top */
const PAGES = ['home', 'story', 'memories', 'love', 'quiz', 'someday', 'letter', 'end'];
const menu = $('#menu');
let curSec = 'home';
onLang(() => {
  menu.innerHTML = PAGES.filter(id => document.getElementById(id))
    .map(id => `<a href="#${id}" data-go="${id}">${esc(ui('nav.' + id))}</a>`).join('');
  spyMark();
});

function go(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  menu.classList.remove('open');
  $('#burger').setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}
document.addEventListener('click', e => {
  const a = e.target.closest('[data-go]');
  if (a) { e.preventDefault(); go(a.dataset.go); }
});
$('#burger').onclick = () => {
  const o = menu.classList.toggle('open');
  $('#burger').setAttribute('aria-expanded', o);
  document.body.classList.toggle('menu-open', o);
};
$('#langBtn').onclick = () => setLang(LANG === 'en' ? 'ar' : 'en');
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) go(location.hash.slice(1) || 'home'); });

/* Highlight current page + nav colour */
function spyMark() { menu.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.dataset.go === curSec)); }
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  curSec = e.target.id; spyMark();
  $('#nav').dataset.theme = e.target.classList.contains('light') ? 'light' : 'dark';
}), { threshold: 0.4 });
document.querySelectorAll('main > section').forEach(s => spy.observe(s));

/* Reveal on scroll */
const rv = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); }
}), { threshold: 0.12 });
window.observeReveals = root => (root || document).querySelectorAll('.rv:not(.in)').forEach(el => rv.observe(el));
document.querySelectorAll('section:not(.hero) h2, section:not(.hero) > .wrap > .sub').forEach(el => el.classList.add('rv'));
observeReveals(document);

/* Loader */
addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 900));

/* Back to top */
const topBtn = $('#totop');
addEventListener('scroll', () => topBtn.classList.toggle('show', scrollY > 600), { passive: true });
topBtn.onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

/* The End */
onLang(() => { $('#endText').textContent = tr(END.text); });
$('#toBeginning').onclick = () => go('home');
(() => {
  const g = $('#sceneStars'); let s = '';
  for (let i = 0; i < 90; i++) {
    const x = Math.round(Math.random() * 1200), y = Math.round(Math.random() * 380), r = (Math.random() * 1.6 + .4).toFixed(1);
    s += `<circle class="tw" cx="${x}" cy="${y}" r="${r}" fill="#F0EBE2" style="animation-delay:${(Math.random() * 4).toFixed(1)}s"/>`;
  }
  g.innerHTML = s;
})();

/* Stars */
(() => {
  const c = $('#stars'), x = c.getContext('2d'); let S = [];
  const size = () => {
    c.width = innerWidth; c.height = innerHeight;
    S = Array.from({ length: Math.round(innerWidth * innerHeight / 9000) }, () =>
      ({ x: Math.random() * c.width, y: Math.random() * c.height, r: Math.random() * 1.1 + .2, p: Math.random() * 6.28, v: Math.random() * .8 + .3 }));
  };
  const draw = t => {
    x.clearRect(0, 0, c.width, c.height);
    S.forEach(s => { x.globalAlpha = .25 + .55 * Math.abs(Math.sin(t / 1800 * s.v + s.p)); x.fillStyle = '#F0EBE2'; x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.28); x.fill(); });
    if (!reduce) requestAnimationFrame(draw);
  };
  addEventListener('resize', size); size(); requestAnimationFrame(draw);
})();

/* Start */
initLang();
observeReveals(document);
