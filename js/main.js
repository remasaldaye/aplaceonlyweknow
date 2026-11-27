/* Navigation, loader, stars, reveals, back-to-top */
const PAGES = [
  ['home', 'Home'], ['story', 'Our Story'], ['someday', 'Someday'], ['letter', 'A Letter'], ['end', 'The End']
];
const menu = $('#menu');
/* Only link to sections that exist, so nothing is ever broken */
menu.innerHTML = PAGES.filter(([id]) => document.getElementById(id))
  .map(([id, label]) => `<a href="#${id}" data-go="${id}">${label}</a>`).join('');

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function go(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  menu.classList.remove('open');
  $('#burger').setAttribute('aria-expanded', 'false');
}
document.addEventListener('click', e => {
  const a = e.target.closest('[data-go]');
  if (a) { e.preventDefault(); go(a.dataset.go); }
});
$('#burger').onclick = () => {
  const o = menu.classList.toggle('open');
  $('#burger').setAttribute('aria-expanded', o);
};

/* Highlight the current page in the nav */
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  menu.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.dataset.go === e.target.id));
  $('#nav').dataset.theme = e.target.classList.contains('light') ? 'light' : 'dark';
}), { threshold: 0.5 });
document.querySelectorAll('main > section').forEach(s => spy.observe(s));

/* Reveal on scroll */
const rv = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('h2, .sub, .t-item, .polaroid').forEach(el => { el.classList.add('rv'); rv.observe(el); });

/* Loader */
addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 900));

/* Back to top */
const topBtn = $('#totop');
addEventListener('scroll', () => topBtn.classList.toggle('show', scrollY > 600), { passive: true });
topBtn.onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

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
