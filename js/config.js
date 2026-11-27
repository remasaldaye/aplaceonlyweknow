/* ==========================================================
   SETTINGS: the small things you may want to change.
   Personal text lives in data.js. This file is for switches.
   ========================================================== */

const CONFIG = {

  /* "en" or "ar". Visitors can switch with the button in the menu. */
  defaultLang: "en",

  /* Day counter on the home page. Calculated automatically. Format: YYYY-MM-DD */
  startDate: "2026-05-19",

  /* Secret page (final content, exactly as written in the Final Content Pack).
     Note: the password is stored in this file, so it is a little surprise lock,
     not real security. */
  secret: {
    password: "حنحنه",

    /* One text for both languages. Blank lines separate paragraphs.
       Each paragraph picks its own direction (English left, Arabic right). */
    letter: "To my favorite person,\n\nيمكن فيه اشياء كثير ما اقولها لك بشكل مباشر ويمكن احيانا ما اعرف كيف اوصف لك مكانتك عندي بس فيه اشياء ودي تعرفها\n\nاحيانا افكر كيف صرت شخص اعتمد عليه في تفاصيل يومي وكيف وجودك صار من الاشياء اللي ما اتخيل يومي بدونها\n\nاحب اني اقدر ارجع لك لما احتار واسمع رايك واحس ان فيه شخص يفهمني ويساعدني اشوف الامور بشكل اوضح واحب اني اقدر اكون على طبيعتي معك بدون ما افكر كثير بكلامي او تصرفاتي\n\nواحب اهتمامك فيني حتى بالاشياء الصغيره اللي يمكن اي احد ما ينتبه لها لانها تعني لي كثير احب لما تحاول تراضيني وتضحكني وتطبطب علي واحب انك تلاحظ اذا باقي في خاطري شي حتى لو حاولت ابين لك اني بخير\n\nيمكن ما اقولها لك كل مره بس انا اقدر كل هالتفاصيل واتمنى تعرف انها مو اشياء عاديه بالنسبه لي\n\nواكثر شي اتمناه اننا مهما كبرت مسؤولياتنا وتغيرت ايامنا ما نفقد الاشياء الصغيره اللي بيننا مثل وقت الحنحنه وسوالفنا قبل النوم وضحكتنا على اشياء محد يفهمها غيرنا\n\nوفيه شي ابيك تعرفه وهو اني مو بس احب وجودك في الايام الحلوه انا احب فكره اننا نكون لبعض حتى في الايام العاديه والمتعبه واننا نقدر نرجع لبعض ونلقى نفس المحبه والاهتمام\n\nما ادري وش بيصير لنا بعدين ولا متى تتحقق كل احلامنا بس اعرف اني متحمسه للايام اللي لسه ما عشناها مع بعض\n\nواتمنى يجي يوم نرجع فيه نفتح هالموقع ونضحك على كل هالاحلام ونقول تتذكر يوم كنا نتمنى هالاشياء؟ شفنا كيف صارت حقيقه\n\nواذا فيه شي ابيك تتذكره دايم فهو انك مو شخص عابر في حياتي وان كل هالتفاصيل والاحلام اللي اتكلم لك عنها انا فعلا اتمنى اعيشها معك\n\nI love you, and I can’t wait for all the little things that are still waiting for us.\n\nYour Remas ♡",

    /* Photos in order, each with its caption. */
    surprises: [
      { image: "assets/images/secret-1.jpg", alt: "He was lying in my lap", caption: "مكاني المفضل دايم بيكون جنبك" },
      { image: "assets/images/secret-2.jpg", alt: "Our first time eating at a restaurant other than McDonald’s", caption: "أول تجربة من تجاربنا الصغيرة سوا" },
      { image: "assets/images/secret-3.jpg", alt: "I was sleeping in his arms", caption: "لو أقدر أوقف الوقت بختار لحظات زي هذي" },
      { image: "assets/images/secret-4.jpg", alt: "He came to visit me when I was in the hospital", caption: "جيتني وقت احتجتك وهالشي مستحيل أنساه" },
      { image: "assets/images/secret-5.jpg", alt: "Early in our relationship, he got sick and I went to see him", caption: "حتى من بدايتنا كنت أبي أكون جنبك" }
    ],

    /* Music for the secret page: "You and I" by Halsey.
       A button on the secret page opens the song in a new tab / music app.
       To change the song, replace the link below. If link is empty, the button is hidden. */
    music: {
      title: "You and I",
      artist: "Halsey",
      link: "https://youtu.be/SA7AIQw-7Ms"
    }
  }
};
