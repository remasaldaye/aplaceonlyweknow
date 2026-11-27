/* Language system + small helpers. Interface texts (menu, headings, buttons) live here. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const UI = {
  title:   { en: 'A Place Only We Know', ar: 'مكانٌ لا نعرفه إلا نحن' },
  nav: {
    home:     { en: 'Home', ar: 'الرئيسية' },
    story:    { en: 'Our Story', ar: 'قصتنا' },
    memories: { en: 'Memories', ar: 'ذكرياتنا' },
    love:     { en: 'Things I Love About You', ar: 'أشياء أحبها فيك' },
    quiz:     { en: 'Quiz', ar: 'اختبارنا' },
    someday:  { en: 'Someday', ar: 'يوماً ما' },
    letter:   { en: 'A Letter', ar: 'رسالة' },
    end:      { en: 'The End', ar: 'النهاية' }
  },
  langBtn:  { en: 'العربية', ar: 'English' },
  langAria: { en: 'Switch to Arabic', ar: 'التبديل إلى الإنجليزية' },
  menu:     { en: 'Menu', ar: 'القائمة' },
  home: {
    mono: { en: 'A little world made for you and me', ar: 'عالم صغير صُنع لك ولي' },
    h1a:  { en: 'A Place', ar: 'مكانٌ' },
    h1b:  { en: 'Only We Know', ar: 'لا نعرفه إلا نحن' },
    sub:  { en: 'Somewhere between two souls, a story began.', ar: 'في مكان ما بين روحين، بدأت حكاية.' },
    btn:  { en: 'Enter Our World →', ar: 'ادخل إلى عالمنا ←' },
    days: { en: 'Together for', ar: 'معاً منذ' }
  },
  story:    { h: { en: 'Every story has its little moments.', ar: 'لكل قصة لحظاتها الصغيرة.' },
              sub: { en: 'Here are some of ours.', ar: 'وهذه بعض لحظاتنا.' } },
  memories: { h: { en: 'Little moments, forever memories.', ar: 'لحظات صغيرة، وذكريات للأبد.' },
              sub: { en: 'Some moments deserve their own little place.', ar: 'بعض اللحظات تستحق مكاناً صغيراً خاصاً بها.' },
              foot: { en: 'Collected moments of us.', ar: 'لحظات جمعناها معاً.' },
              open: { en: 'Open memory', ar: 'افتح الذكرى' } },
  love:     { h: { en: 'Things I love about you.', ar: 'أشياء أحبها فيك.' },
              sub: { en: 'Tap a card to open it.', ar: 'اضغط على البطاقة لفتحها.' },
              ehead: { en: 'Our Everyday Love', ar: 'حبنا اليومي' } },
  quiz: {
    h:     { en: 'How well do you know us?', ar: 'كم تعرفنا جيداً؟' },
    sub:   { en: 'Eight little questions, just for you.', ar: 'ثمانية أسئلة صغيرة، لك وحدك.' },
    start: { en: 'Start the quiz', ar: 'ابدأ الاختبار' },
    q:     { en: 'Question', ar: 'السؤال' },
    of:    { en: 'of', ar: 'من' },
    next:  { en: 'Next', ar: 'التالي' },
    see:   { en: 'See my result', ar: 'اعرض نتيجتي' },
    score: { en: 'Your score', ar: 'نتيجتك' },
    restart: { en: 'Try again', ar: 'حاول مرة أخرى' },
    right: { en: 'Yes, that\'s right ♡', ar: 'صحيح ♡' },
    wrong: { en: 'Not quite. The right answer is highlighted.', ar: 'ليس تماماً. الإجابة الصحيحة مظللة.' }
  },
  someday: {
    h:     { en: 'Someday.', ar: 'يوماً ما.' },
    sub:   { en: 'Dreams we are saving for the future.', ar: 'أحلام نحتفظ بها للمستقبل.' },
    progress: { en: 'dreams completed', ar: 'أحلام تحققت' },
    mark:  { en: 'Mark as completed ♡', ar: 'تحقق هذا الحلم ♡' },
    unmark:{ en: 'Mark as not yet', ar: 'لم يتحقق بعد' },
    done:  { en: 'Completed', ar: 'تحقق' },
    close: { en: 'Close', ar: 'إغلاق' }
  },
  letter: {
    h:     { en: 'A letter, just for you.', ar: 'رسالة، لك وحدك.' },
    sub:   { en: 'Tap the envelope to open it.', ar: 'اضغط على الظرف لفتحه.' },
    open:  { en: 'Open the letter', ar: 'افتح الرسالة' },
    skip:  { en: 'Show the whole letter', ar: 'اعرض الرسالة كاملة' },
    secret:{ en: 'Something else is hidden here…', ar: 'هناك شيء آخر مخبأ هنا…' }
  },
  secret: {
    h:     { en: 'A secret only for you', ar: 'سرٌّ لك وحدك' },
    sub:   { en: 'Enter the password to continue.', ar: 'أدخل كلمة السر للمتابعة.' },
    ph:    { en: 'Password', ar: 'كلمة السر' },
    go:    { en: 'Unlock', ar: 'افتح' },
    bad:   { en: 'Not this one. Try again.', ar: 'ليست هذه. حاول مرة أخرى.' },
    close: { en: 'Close', ar: 'إغلاق' },
    song:  { en: 'Open the song', ar: 'افتح الأغنية' },
    tap:   { en: 'Tap to see the next surprise', ar: 'اضغط لترى المفاجأة التالية' }
  },
  end: {
    btn:   { en: 'Back to the Beginning', ar: 'العودة إلى البداية' },
    scene: { en: 'Two people sitting under the stars', ar: 'شخصان يجلسان تحت النجوم' }
  },
  music: { play: { en: 'Play music', ar: 'تشغيل الموسيقى' }, pause: { en: 'Pause music', ar: 'إيقاف الموسيقى' } },
  totop: { en: 'Back to top', ar: 'العودة للأعلى' },
  close: { en: 'Close', ar: 'إغلاق' },
  prev:  { en: 'Previous', ar: 'السابق' },
  nextA: { en: 'Next', ar: 'التالي' }
};

/* ---- language state ---- */
let LANG = 'en';
const _subs = [];
const tr = o => (o == null ? '' : typeof o === 'string' ? o : (o[LANG] != null && o[LANG] !== '' ? o[LANG] : (o.en || '')));
const onLang = fn => { _subs.push(fn); fn(); };
const ui = path => tr(path.split('.').reduce((o, k) => (o ? o[k] : null), UI));

function applyStatic() {
  $$('[data-i18n]').forEach(el => { el.textContent = ui(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', ui(el.dataset.i18nAria)));
  $$('[data-i18n-ph]').forEach(el => el.setAttribute('placeholder', ui(el.dataset.i18nPh)));
  document.title = ui('title');
}
function setLang(l, save = true) {
  LANG = l === 'ar' ? 'ar' : 'en';
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  if (save) { try { localStorage.setItem('apowk-lang', LANG); } catch (e) {} }
  applyStatic();
  _subs.forEach(fn => fn());
  const b = $('#langBtn');
  if (b) { b.textContent = ui('langBtn'); b.setAttribute('aria-label', ui('langAria')); }
}
function initLang() {
  let l = CONFIG.defaultLang;
  try { l = localStorage.getItem('apowk-lang') || l; } catch (e) {}
  setLang(l, false);
}
