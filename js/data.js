/* ==========================================================
   ALL PERSONAL CONTENT LIVES HERE.
   Every text has two versions: en (English) and ar (Arabic).
   Photos: put files in assets/images/ and write the path, for example
   image: "assets/images/my-photo.jpg". Leave image as "" for a text-only card.
   Dates are optional. Leave date as "" and nothing is shown.
   ========================================================== */

/* ---------- Our Story (timeline) ---------- */
const STORY = [
  {
    date: "",
    image: "assets/images/story-roblox.jpg",
    alt: { en: "Together [Party Game] on Roblox", ar: "لعبة Together [Party Game] على روبلوكس" },
    title: { en: "How it started", ar: "كيف بدأ كل شيء" },
    text: {
      en: "We met in Roblox in a game called Together [Party Game].",
      ar: "تعرفنا على بعض في روبلوكس، في لعبة اسمها Together [Party Game]."
    }
  },
  {
    date: "", image: "",
    title: { en: "The song that made us laugh", ar: "الأغنية التي أضحكتنا" },
    text: {
      en: "While playing, Mohammed suddenly sang a song called “Wallah Ma Yeswa”. He was doing a reaction in the game, and our avatars looked like the reaction. It surprised me and we laughed so much.",
      ar: "وبينما كنا نلعب، غنّى محمد فجأة أغنية اسمها «والله ما يسوى». كان يعمل ردّة فعل داخل اللعبة، وكانت شخصياتنا تبدو مثل تلك الحركة. فاجأني الموقف وضحكنا كثيراً."
    }
  },
  {
    date: "", image: "",
    title: { en: "What attracted me", ar: "ما الذي جذبني" },
    text: {
      en: "His way of talking and the way he thinks attracted me. He seemed very mature and reasonable. I thought he was much older, but later I found out he was only one year older than me.",
      ar: "جذبني أسلوبه في الكلام وطريقة تفكيره. بدا لي ناضجاً وعاقلاً جداً، وظننت أنه أكبر مني بكثير، ثم عرفت لاحقاً أنه يكبرني بسنة واحدة فقط."
    }
  },
  {
    date: "", image: "",
    title: { en: "Giving it a chance", ar: "أن نعطي الأمر فرصة" },
    text: {
      en: "When he asked for my Snapchat, I hesitated because I am not usually comfortable with these kinds of things. But I decided to give myself and him a chance.",
      ar: "حين طلب حسابي في سناب شات ترددت، لأنني عادةً لا أرتاح لهذه الأمور. لكنني قررت أن أعطي نفسي وأعطيه فرصة."
    }
  },
  {
    date: "", image: "",
    title: { en: "Our conversations", ar: "أحاديثنا" },
    text: {
      en: "He openly told me about his life from the beginning. I discovered that I loved listening to him. I would get completely caught up in his stories, and whenever he messaged me, I felt a strange but beautiful feeling.",
      ar: "حكى لي عن حياته بصراحة منذ البداية، واكتشفت أنني أحب الاستماع إليه. كنت أنغمس تماماً في قصصه، وكلما راسلني شعرت بإحساس غريب وجميل في الوقت نفسه."
    }
  },
  {
    date: "", image: "",
    title: { en: "The third day", ar: "اليوم الثالث" },
    text: {
      en: "By the third day, I was already waiting for his messages. I felt happy whenever I had free time because I could talk to him. We started falling asleep while talking on the phone, and he would make time to talk to me even while he was at work.",
      ar: "في اليوم الثالث كنت أنتظر رسائله بالفعل. كنت أفرح كلما صار عندي وقت فراغ لأنني أستطيع الحديث معه. بدأنا ننام ونحن نتحدث في الهاتف، وكان يجد وقتاً ليكلمني حتى وهو في العمل."
    }
  },
  {
    date: "", image: "",
    title: { en: "The first confession", ar: "أول اعتراف" },
    text: {
      en: "Around the third or fourth day, Mohammed was the first to confess his love. We talked about how comfortable and happy we felt together, how quickly we understood each other, and how strong our feelings had become. He said he loved me, and I told him how I felt too.",
      ar: "في حدود اليوم الثالث أو الرابع، كان محمد أول من صرّح بحبه. تحدثنا عن مدى راحتنا وسعادتنا معاً، وعن سرعة تفاهمنا، وعن قوة مشاعرنا. قال لي إنه يحبني، وأخبرته أنا أيضاً بما أشعر به."
    }
  },
  {
    date: "", image: "",
    title: { en: "The fifth day", ar: "اليوم الخامس" },
    text: {
      en: "By around the fifth day, we both felt that our feelings were genuine and more than just a crush.",
      ar: "وفي حدود اليوم الخامس، شعرنا كلانا أن مشاعرنا حقيقية وأكبر من مجرد إعجاب عابر."
    }
  },
  {
    date: "", image: "",
    title: { en: "Our story continues", ar: "قصتنا مستمرة" },
    text: {
      en: "And our story is still being written.",
      ar: "وقصتنا ما زالت تُكتب."
    }
  }
];

/* ---------- Memories (gallery) ----------
   photos: one tile is shown per photo. No photos = a note card. */
const MEMORIES = [
  {
    date: "", photos: [],
    title: { en: "The Most Unexpected Duet", ar: "أكثر دويتو لم نتوقعه" },
    text: [{
      en: "One day, while we were playing together, Mohammed suddenly sang “Wallah Ma Yeswa”. He was doing a reaction in the game, and our avatars looked just like it. I was so surprised, and we couldn't stop laughing.",
      ar: "في يوم ما، وبينما كنا نلعب معاً، غنّى محمد فجأة «والله ما يسوى». كان يعمل ردّة فعل في اللعبة، وبدت شخصياتنا تماماً مثلها. فوجئت كثيراً ولم نتوقف عن الضحك."
    }]
  },
  {
    date: "", photos: [],
    title: { en: "Always on My Side", ar: "دائماً في صفّي" },
    text: [{
      en: "Whenever Sultan and Ghaida tease me while we play, Mohammed encourages me. He says things like, “Remas can do it, she's capable, she's good at it.” I love how he makes me feel supported.",
      ar: "كلما أغاظني سلطان وغيداء بمزاحهما ونحن نلعب، شجّعني محمد. يقول لي أشياء مثل: «ريماس تقدر، هي قادرة، وتجيد هذا». أحب كيف يشعرني بأنني مدعومة."
    }]
  },
  {
    date: "",
    photos: [
      { src: "assets/images/memory-birthday-1.jpg", alt: { en: "Birthday bouquet with a Stitch plushie and chocolates", ar: "باقة عيد الميلاد مع دمية ستيتش وشوكولاتة" } },
      { src: "assets/images/memory-birthday-2.jpg", alt: { en: "The birthday gift, second photo", ar: "هدية عيد الميلاد، الصورة الثانية" } }
    ],
    title: { en: "The Birthday I Felt So Special", ar: "عيد الميلاد الذي شعرت فيه أنني مميزة" },
    text: [
      {
        en: "He remembered a little thing I once told him. I had an old Stitch plushie, but it got ruined and my family threw it away. He remembered that story and got me a new Stitch plushie, along with pink roses and chocolates.",
        ar: "تذكّر شيئاً صغيراً قلته له ذات مرة. كان عندي دمية ستيتش قديمة، لكنها تلفت ورماها أهلي. تذكّر تلك القصة وأحضر لي دمية ستيتش جديدة، مع ورود وردية وشوكولاتة."
      },
      {
        en: "He brought the gift one or two days before my birthday. He was on the phone with me when it arrived, and I was so happy and surprised that I was literally shaking. I didn't know how to express how I felt, so I kept telling him he didn't have to spend money and that his presence in my life was already enough.",
        ar: "أحضر الهدية قبل عيد ميلادي بيوم أو يومين. كان على الهاتف معي لحظة وصولها، وكنت سعيدة ومندهشة لدرجة أنني كنت أرتجف فعلاً. لم أعرف كيف أعبّر عمّا أشعر به، فظللت أقول له إنه لا داعي لأن ينفق مالاً، وإن وجوده في حياتي يكفيني."
      },
      {
        en: "Then, when midnight came and it was finally my birthday, he sent me a very long message telling me how he felt and how happy he was that he had met me.",
        ar: "ثم عندما جاء منتصف الليل وحلّ عيد ميلادي أخيراً، أرسل لي رسالة طويلة جداً يخبرني فيها بما يشعر به وكم هو سعيد لأنه عرفني."
      }
    ]
  }
];

/* ---------- Things I Love About You (tap a card to open) ---------- */
const LOVE = [
  {
    title: { en: "The Softest Heart", ar: "أنعم قلب" },
    text: {
      en: "I love how caring and gentle you are with me. You look after me, take care of me, and make me feel so loved and spoiled. Sometimes you treat me like your little girl, and I love that about you.",
      ar: "أحب كم أنت حنون ولطيف معي. تهتم بي وتعتني بي وتشعرني بأنني محبوبة ومدللة. وأحياناً تعاملني كأنني طفلتك الصغيرة، وأحب هذا فيك."
    }
  },
  {
    title: { en: "My Safe Place to Think", ar: "مكاني الآمن للتفكير" },
    text: {
      en: "I love the way you think. I know I can always come to you when I need advice. You listen, understand me, and help me see things clearly. I love knowing I can count on you when I have to make a decision.",
      ar: "أحب طريقة تفكيرك. أعرف أنني أستطيع دائماً أن آتي إليك حين أحتاج نصيحة. تستمع إليّ وتفهمني وتساعدني على رؤية الأمور بوضوح. وأحب أنني أستطيع الاعتماد عليك حين يكون عليّ اتخاذ قرار."
    }
  },
  {
    title: { en: "You Always Find a Way", ar: "دائماً تجد طريقة" },
    text: {
      en: "I love how you never leave me feeling alone when I'm upset. You try to make me smile, comfort me with your words, and even surprise me with gifts when you feel I still need cheering up.",
      ar: "أحب أنك لا تتركني أشعر بالوحدة حين أكون متضايقة. تحاول أن تجعلني أبتسم، وتواسيني بكلماتك، وتفاجئني بالهدايا حين تشعر أنني ما زلت بحاجة إلى من يرفع معنوياتي."
    }
  }
];

/* ---------- Our Everyday Love ---------- */
const EVERYDAY = {
  subtitle: { en: "It's the little things that make us feel like home.", ar: "التفاصيل الصغيرة هي التي تجعلنا نشعر بأننا في بيتنا." },
  items: [
    { en: "Mohammed has become part of my everyday routine.", ar: "أصبح محمد جزءاً من روتيني اليومي." },
    { en: "I love talking to him and hearing his voice every day.", ar: "أحب الحديث معه وسماع صوته كل يوم." },
    { en: "We often fall asleep while talking on the phone.", ar: "كثيراً ما ننام ونحن نتحدث في الهاتف." },
    { en: "Before sleeping, we have a special routine called “Hanhana Time”.", ar: "قبل النوم لدينا روتين خاص اسمه «وقت الهنهنة»." },
    { en: "During Hanhana Time, we tell each other how much we love each other and express our feelings.", ar: "في وقت الهنهنة نخبر بعضنا كم نحب بعضنا ونعبّر عن مشاعرنا." },
    { en: "I call him my husband, and he calls me his wife.", ar: "أناديه زوجي، وهو يناديني زوجته." },
    { en: "He makes sure I have what I need, and if I crave something, he tries to get it for me.", ar: "يحرص على أن يكون عندي ما أحتاجه، وإذا اشتهيت شيئاً حاول أن يحضره لي." }
  ],
  feature: {
    title: { en: "Hanhana Time ♡", ar: "وقت الهنهنة ♡" },
    text: {
      en: "The little moments before we fall asleep, when we tell each other how much we love each other.",
      ar: "اللحظات الصغيرة قبل أن ننام، حين نخبر بعضنا كم نحب بعضنا."
    }
  }
};

/* ---------- Our Quiz ----------
   Mark the right answer with correct: true. Answers are shuffled on every play. */
const QUIZ = {
  questions: [
    {
      q: { en: "Where did we meet?", ar: "أين التقينا؟" },
      options: [
        { correct: true, en: "Roblox — Together [Party Game]", ar: "روبلوكس — Together [Party Game]" },
        { en: "At school", ar: "في المدرسة" },
        { en: "Through a friend", ar: "عن طريق صديق" },
        { en: "On social media", ar: "على وسائل التواصل الاجتماعي" }
      ]
    },
    {
      q: { en: "What surprised us at the beginning?", ar: "ما الذي فاجأنا في البداية؟" },
      options: [
        { correct: true, en: "How similar we were and how quickly our feelings became clear", ar: "كم كنا متشابهين وكم بسرعة اتضحت مشاعرنا" },
        { en: "How different our hobbies were", ar: "كم كانت هواياتنا مختلفة" },
        { en: "That we lived in the same city", ar: "أننا نعيش في المدينة نفسها" },
        { en: "That we knew each other already", ar: "أننا كنا نعرف بعضنا أصلاً" }
      ]
    },
    {
      q: { en: "What makes me laugh the most?", ar: "ما أكثر شيء يضحكني؟" },
      options: [
        { correct: true, en: "His jokes and teasing, especially things only we understand", ar: "نكاته ومزاحه، خصوصاً الأشياء التي لا يفهمها غيرنا" },
        { en: "Watching movies", ar: "مشاهدة الأفلام" },
        { en: "Playing alone", ar: "اللعب وحدي" },
        { en: "Talking about school", ar: "الحديث عن المدرسة" }
      ]
    },
    {
      q: { en: "What makes Mohammed special?", ar: "ما الذي يميّز محمد؟" },
      options: [
        { correct: true, en: "How much he cares about my feelings", ar: "كم يهتم بمشاعري" },
        { en: "He likes the same movies", ar: "يحب الأفلام نفسها" },
        { en: "He never plays games", ar: "لا يلعب الألعاب أبداً" },
        { en: "He always agrees with me", ar: "يوافقني دائماً" }
      ]
    },
    {
      q: { en: "What usually causes disagreements?", ar: "ما الذي يسبب خلافاتنا عادةً؟" },
      options: [
        { correct: true, en: "Misunderstandings, stubbornness, and teasing", ar: "سوء الفهم والعناد والمزاح" },
        { en: "Choosing movies", ar: "اختيار الأفلام" },
        { en: "Travel plans", ar: "خطط السفر" },
        { en: "Being late", ar: "التأخر" }
      ]
    },
    {
      q: { en: "What is my favorite moment?", ar: "ما هي لحظتي المفضلة؟" },
      options: [
        { correct: true, en: "Every time I hug him", ar: "كل مرة أحضنه فيها" },
        { en: "Going shopping", ar: "الذهاب للتسوق" },
        { en: "Playing a new game", ar: "لعب لعبة جديدة" },
        { en: "Taking photos", ar: "التقاط الصور" }
      ]
    },
    {
      q: { en: "What is our dream life?", ar: "ما هي حياتنا التي نحلم بها؟" },
      options: [
        { correct: true, en: "Our own apartment and our future cat", ar: "شقتنا الخاصة وقطتنا المستقبلية" },
        { en: "Living on a farm", ar: "العيش في مزرعة" },
        { en: "Owning a restaurant", ar: "امتلاك مطعم" },
        { en: "Traveling every month", ar: "السفر كل شهر" }
      ]
    },
    {
      q: { en: "Where do we dream of traveling together?", ar: "إلى أين نحلم بالسفر معاً؟" },
      options: [
        { correct: true, en: "Moscow and Iceland, especially seeing the Northern Lights", ar: "موسكو وآيسلندا، خصوصاً لرؤية الشفق القطبي" },
        { en: "Paris and Rome", ar: "باريس وروما" },
        { en: "Tokyo and Seoul", ar: "طوكيو وسيول" },
        { en: "London and New York", ar: "لندن ونيويورك" }
      ]
    }
  ],
  results: [
    { min: 0, max: 2, en: "We have so many more memories to make.", ar: "ما زال أمامنا الكثير من الذكريات لنصنعها." },
    { min: 3, max: 5, en: "You know us, but there's still more to discover.", ar: "أنت تعرفنا، لكن ما زال هناك المزيد لتكتشفه." },
    { min: 6, max: 7, en: "You really do pay attention, don't you?", ar: "أنت فعلاً تنتبه لكل شيء، أليس كذلك؟" },
    { min: 8, max: 8, en: "You know our little world by heart. ♡", ar: "أنت تحفظ عالمنا الصغير عن ظهر قلب. ♡" }
  ],
  final: {
    en: "No matter the score, you're still one of my favorite stories.",
    ar: "مهما كانت نتيجتك، ستبقى من أحب قصصي إلى قلبي."
  }
};

/* ---------- Someday (dreams) ---------- */
const DREAMS = [
  {
    id: "home", image: "assets/images/dream-home.jpg",
    title: { en: "Our Little Home", ar: "بيتنا الصغير" },
    text: {
      en: "A little place we can call ours. A home filled with warm lights, cozy evenings, laughter, and all the ordinary days I can't wait to share with you.",
      ar: "مكان صغير نسميه لنا. بيت مليء بالأضواء الدافئة والأمسيات المريحة والضحك، وبكل الأيام العادية التي لا أطيق صبراً لأقضيها معك."
    }
  },
  {
    id: "bedroom", image: "assets/images/dream-bedroom.jpg",
    title: { en: "Our Bedroom", ar: "غرفة نومنا" },
    text: {
      en: "A warm, cozy bedroom with neutral colors, soft lighting, and a peaceful atmosphere.",
      ar: "غرفة نوم دافئة ومريحة بألوان هادئة وإضاءة ناعمة وأجواء مسالمة."
    }
  },
  {
    id: "gaming", image: "assets/images/dream-gaming.jpg",
    title: { en: "Our Gaming Room", ar: "غرفة ألعابنا" },
    text: {
      en: "A gaming room with two separate desks, two separate computers, and individual setups for each of us. Both setups are in the same room, with a mix of dark and light details and warm ambient lighting.",
      ar: "غرفة ألعاب فيها مكتبان منفصلان وجهازا كمبيوتر منفصلان، ولكل واحد منا تجهيزه الخاص. التجهيزان في الغرفة نفسها، بمزيج من التفاصيل الداكنة والفاتحة وإضاءة دافئة."
    }
  },
  {
    id: "memo", image: "assets/images/dream-memo.jpg",
    title: { en: "Our Future Cat — Memo", ar: "قطتنا في المستقبل — ميمو" },
    text: {
      en: "A fluffy cat with blue eyes, light-colored fur, and a darker face and paws. Her name will be Memo, inspired by Mohammed's nickname.",
      ar: "قطة منفوشة بعينين زرقاوين وفرو فاتح ووجه وأقدام أغمق. اسمها سيكون ميمو، مستوحى من اسم الدلع الخاص بمحمد."
    }
  },
  {
    id: "movies", image: "",
    title: { en: "Our Movie Nights", ar: "سهرات أفلامنا" },
    text: {
      en: "Lying together on the couch, watching movies, enjoying the quiet moments, and simply being together.",
      ar: "نستلقي معاً على الأريكة ونشاهد الأفلام ونستمتع باللحظات الهادئة، ونكون معاً ببساطة."
    }
  },
  {
    id: "homecoming", image: "",
    title: { en: "Waiting for You to Come Home", ar: "انتظارك حتى تعود إلى البيت" },
    text: {
      en: "I can't wait to wait for you to come back from work and welcome you with the biggest hug every single day.",
      ar: "لا أطيق صبراً لأنتظر عودتك من العمل وأستقبلك بأكبر حضن كل يوم."
    }
  },
  {
    id: "aurora", image: "",
    title: { en: "Seeing the Northern Lights", ar: "رؤية الشفق القطبي" },
    text: {
      en: "One of my biggest dreams is to see the Northern Lights, and I want to experience that beautiful moment with you.",
      ar: "من أكبر أحلامي أن أرى الشفق القطبي، وأريد أن أعيش تلك اللحظة الجميلة معك."
    }
  },
  {
    id: "moscow", image: "",
    title: { en: "A Trip to Moscow", ar: "رحلة إلى موسكو" },
    text: {
      en: "Moscow was one of your dreams, and somehow it became a dream we both share. I hope we get to visit it together one day.",
      ar: "كانت موسكو من أحلامك، وبطريقة ما صارت حلماً نتشاركه نحن الاثنان. آمل أن نزورها معاً يوماً ما."
    }
  }
];

/* ---------- A Letter (English only, as requested) ---------- */
const LETTER = {
  greeting: { en: "To Mohammed," },
  paragraphs: [
    { en: "Sometimes I sit and think about how our story started and how a simple game brought me to someone who means so much to me." },
    { en: "I never thought that someone I met through a game would become someone I dream about sharing my future and my everyday life with." },
    { en: "I love how similar we are in so many ways and how we understand each other's jokes without even explaining them. I love how we laugh at things that no one else would probably understand. I even love how stubborn we can be and how we annoy each other, even though sometimes I just want to shut you up." },
    { en: "But more than all of that, what I love most about you is how you care about me. How you always think about my feelings and try your best not to upset me. You might not know how much these little things mean to me, but they are a big reason why you're so different from everyone else." },
    { en: "Mohammed, I love our little moments. I love our talks and our laughs. I love every time I get to hug you and how that moment alone makes everything feel okay." },
    { en: "I really hope everything we talk about today becomes real one day. I hope we get to wake up in the little apartment we always dream about, argue about what to name our cat, plan our trips and visit all the places we've always wanted to see together." },
    { en: "I hope we get to share all the little things in everyday life. Maybe other people would think they're silly or ordinary, but to me they are things I've always dreamed of doing with you." },
    { en: "I don't know what the future has planned for us or what our story will look like, but I know I want to live through it all with you. And I hope that no matter how much things change, we always find our way back to each other." },
    { en: "I hope we never stop choosing each other." },
    { en: "And if there's one thing I want you to remember after visiting this website, it's that you mean more to me than you could ever imagine. Having you in my life means so much to me because you filled a space in my heart that I never thought anyone could fill." },
    { en: "Thank you for choosing me and thank you for being part of my story." },
    { en: "I love you and I hope this is just the beginning of so many beautiful things waiting for us." }
  ],
  signoff: { en: "Always yours," },
  name: { en: "Remas ♡" }
};

/* ---------- The End (English only, exact sentence) ---------- */
const END = {
  text: { en: "And this is only the beginning of our story." }
};
