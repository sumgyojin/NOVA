
/* =========================================
   NOVA — INTERACTIONS & CONTENT
   ========================================= */

"use strict";

/* 1. TRANSLATIONS */

const translations = {
  en: {
    navHome: "Home",
    navEmotions: "Emotions",
    navAbout: "About Us",
    navDiary: "Diary",

    heroEyebrow: "A LITTLE SPACE TO FEEL",
    heroLine1: "A safe space",
    heroLine2: "for your",
    heroAccent: "emotions",
    heroDescription: "NOVA is a little space to understand what you feel, without judgment or pressure.",
    explore: "Explore",

    feelingToday: "What are you feeling today?",
    feelingSubtitle: "Every feeling deserves to be understood.",
    homeAboutText: "Two different stories, one shared dream.",
    discoverStory: "Discover our story",

    emotionsTitle: "Emotions",
    emotionsSubtitle: "Your emotions are not your enemies. They have something to tell you.",
    backToEmotions: "Back to Emotions",

    aboutTitle: "About Us",
    aboutSubtitle: "Two different stories, one shared dream — to create a space where emotions are heard.",
    ourStory: "Our story",
    aboutStory1: "NOVA began with two friends, Ayanat and Jasmine, who wanted to create something meaningful together.",
    aboutStory2: "One of us dreams of becoming a programmer, the other a psychologist. Different paths brought us to one shared idea: a gentle place to explore emotions.",
    aboutStory3: "We believe understanding yourself can begin with something small — a question, a thought, or a moment of honesty.",
    whyNova: "Why NOVA?",
    whyNovaText: "NOVA is our little space for curiosity, kindness, and emotional understanding. A place to feel without having to explain everything perfectly.",
    dingStory: "Sometimes even a little 'ding' can become a meaningful reminder of a shared moment.",
    starStory: "The star became part of our story — a small symbol of two ideas meeting and creating something new.",

    diaryTitle: "Diary",
    diarySubtitle: "Your thoughts. Your feelings. Your space.",
    newEntry: "A new entry",
    emotionLabel: "What are you feeling?",
    emotionPlaceholder: "Name your emotion",
    intensityLabel: "How intense is it?",
    thoughtsLabel: "What's on your mind?",
    thoughtsPlaceholder: "Write freely...",
    saveEntry: "Save entry",
    diaryPrivacy: "Entries are stored locally in this browser on this device. Clearing browser data may erase them.",
    yourEntries: "Your entries",
    emptyDiary: "Your diary is waiting for its first thought.",
    deleteEntry: "Delete entry",
    deleteConfirm: "Delete this entry?",
    savedMessage: "Your entry has been saved.",
    storageError: "Unable to save. Please check your browser storage.",

    footerText: "A little space to understand your emotions.",
    experiment: "A little experiment",
    helpfulNote: "A gentle reminder"
  },

  kk: {
    navHome: "Басты бет",
    navEmotions: "Эмоциялар",
    navAbout: "Біз туралы",
    navDiary: "Күнделік",

    heroEyebrow: "СЕЗІМДЕРІҢЕ АРНАЛҒАН КЕҢІСТІК",
    heroLine1: "Сезімдеріңе",
    heroLine2: "арналған",
    heroAccent: "қауіпсіз кеңістік",
    heroDescription: "NOVA — өз сезімдеріңді еш қысымсыз, еш айыптаусыз түсінуге арналған шағын кеңістік.",
    explore: "Зерттеу",

    feelingToday: "Бүгін не сезініп тұрсың?",
    feelingSubtitle: "Әр сезім түсінуге лайық.",
    homeAboutText: "Екі түрлі тарих, бір ортақ арман.",
    discoverStory: "Біздің тарихымыз",

    emotionsTitle: "Эмоциялар",
    emotionsSubtitle: "Эмоцияларың сенің жауың емес. Олар саған бір нәрсе айтқысы келеді.",
    backToEmotions: "Эмоцияларға оралу",

    aboutTitle: "Біз туралы",
    aboutSubtitle: "Екі түрлі тарих, бір ортақ арман — сезімдер ескерілетін кеңістік құру.",
    ourStory: "Біздің тарихымыз",
    aboutStory1: "NOVA бірге мағыналы дүние жасағысы келген екі құрбы — Аянат пен Жасминнің идеясынан басталды.",
    aboutStory2: "Біріміз бағдарламашы, екіншіміз психолог болуды армандаймыз. Әртүрлі бағыт бізді бір ортақ ойға әкелді: эмоцияларды зерттеуге арналған жайлы кеңістік.",
    aboutStory3: "Өзіңді түсіну кейде кішкентай нәрседен басталады: сұрақтан, ойдан немесе өзіңе шынайы қараған сәттен.",
    whyNova: "Неге NOVA?",
    whyNovaText: "NOVA — ізденіске, мейірімге және сезімдерді түсінуге арналған кішкентай кеңістігіміз.",
    dingStory: "Кейде кішкентай ғана «дің» дыбысының өзі ортақ естеліктің ерекше белгісіне айналады.",
    starStory: "Жұлдыз біздің тарихымыздың бір бөлігіне айналды — екі ойдың тоғысып, жаңа нәрсе тудырғанының белгісі.",

    diaryTitle: "Күнделік",
    diarySubtitle: "Сенің ойларың. Сенің сезімдерің. Сенің кеңістігің.",
    newEntry: "Жаңа жазба",
    emotionLabel: "Қазір не сезініп тұрсың?",
    emotionPlaceholder: "Сезіміңді ата",
    intensityLabel: "Ол қаншалықты күшті?",
    thoughtsLabel: "Ойыңда не бар?",
    thoughtsPlaceholder: "Еркін жаз...",
    saveEntry: "Жазбаны сақтау",
    diaryPrivacy: "Жазбалар осы құрылғыдағы браузерде сақталады. Браузер деректерін тазаласаң, олар өшіп қалуы мүмкін.",
    yourEntries: "Жазбаларың",
    emptyDiary: "Күнделігің алғашқы ойыңды күтіп тұр.",
    deleteEntry: "Өшіру",
    deleteConfirm: "Бұл жазбаны өшіресің бе?",
    savedMessage: "Жазбаң сақталды.",
    storageError: "Сақтау мүмкін болмады. Браузер жадын тексер.",

    footerText: "Сезімдеріңді түсінуге арналған шағын кеңістік.",
    experiment: "Шағын тәжірибе",
    helpfulNote: "Жылы еске салу"
  },

  ru: {
    navHome: "Главная",
    navEmotions: "Эмоции",
    navAbout: "О нас",
    navDiary: "Дневник",

    heroEyebrow: "МАЛЕНЬКОЕ ПРОСТРАНСТВО ДЛЯ ЧУВСТВ",
    heroLine1: "Безопасное",
    heroLine2: "место для",
    heroAccent: "твоих чувств",
    heroDescription: "NOVA — небольшое пространство, где можно понять свои чувства без осуждения и давления.",
    explore: "Исследовать",

    feelingToday: "Что ты чувствуешь сегодня?",
    feelingSubtitle: "Каждое чувство заслуживает понимания.",
    homeAboutText: "Две разные истории, одна общая мечта.",
    discoverStory: "Наша история",

    emotionsTitle: "Эмоции",
    emotionsSubtitle: "Твои эмоции — не враги. Они пытаются тебе что-то сказать.",
    backToEmotions: "Назад к эмоциям",

    aboutTitle: "О нас",
    aboutSubtitle: "Две разные истории, одна общая мечта — создать пространство, где чувства услышаны.",
    ourStory: "Наша история",
    aboutStory1: "NOVA началась с идеи двух подруг, Аянат и Жасмин, которые хотели создать вместе что-то значимое.",
    aboutStory2: "Одна из нас мечтает стать программистом, другая — психологом. Разные пути привели нас к общей идее: уютному пространству для изучения эмоций.",
    aboutStory3: "Иногда понимание себя начинается с малого: вопроса, мысли или момента искренности с собой.",
    whyNova: "Почему NOVA?",
    whyNovaText: "NOVA — наше маленькое пространство для любознательности, доброты и понимания чувств.",
    dingStory: "Иногда даже маленький звук «динь» становится особенным напоминанием об общем моменте.",
    starStory: "Звезда стала частью нашей истории — символом встречи двух идей, из которых родилось что-то новое.",

    diaryTitle: "Дневник",
    diarySubtitle: "Твои мысли. Твои чувства. Твоё пространство.",
    newEntry: "Новая запись",
    emotionLabel: "Что ты сейчас чувствуешь?",
    emotionPlaceholder: "Назови эмоцию",
    intensityLabel: "Насколько она сильная?",
    thoughtsLabel: "Что у тебя на душе?",
    thoughtsPlaceholder: "Пиши свободно...",
    saveEntry: "Сохранить запись",
    diaryPrivacy: "Записи хранятся в браузере на этом устройстве. Очистка данных браузера может удалить их.",
    yourEntries: "Твои записи",
    emptyDiary: "Твой дневник ждёт первую мысль.",
    deleteEntry: "Удалить",
    deleteConfirm: "Удалить эту запись?",
    savedMessage: "Запись сохранена.",
    storageError: "Не удалось сохранить запись. Проверь память браузера.",

    footerText: "Маленькое пространство, чтобы понять свои эмоции.",
    experiment: "Маленький эксперимент",
    helpfulNote: "Мягкое напоминание"
  }
};

/* 2. EMOTION LAB CONTENT */

const articles = {
  anger: {
    symbol: "✳",
    en: {
      title: "Anger",
      short: "When something inside you says: this matters.",
      intro: "Anger is a natural emotion. It can appear when a boundary is crossed, a situation feels unfair, or an important need is overlooked.",
      sections: [
        {
          title: "Understanding anger",
          points: [
            "Anger is an emotion, not a character flaw.",
            "It can signal that something important needs attention.",
            "Feeling angry and acting hurtfully are not the same thing."
          ]
        },
        {
          title: "What might help?",
          points: [
            "Notice what happened just before the anger appeared.",
            "Give yourself a moment before responding.",
            "Try explaining what you need using calm, clear words."
          ]
        }
      ],
      experiment: "Write down: 'I felt angry when...' Then ask yourself: 'What mattered to me in that moment?'",
      note: "You can take your feelings seriously without letting them decide every action."
    },
    kk: {
      title: "Ашу",
      short: "Ішкі дауысың бір нәрсенің маңызды екенін айтқанда.",
      intro: "Ашу — табиғи эмоция. Ол жеке шекараң бұзылғанда, әділетсіздік сезілгенде немесе маңызды қажеттілігің ескерілмегенде пайда болуы мүмкін.",
      sections: [
        {
          title: "Ашуды түсіну",
          points: [
            "Ашулану мінезіңнің жаман екенін білдірмейді.",
            "Ашу маңызды нәрсеге назар аудару керегін білдіруі мүмкін.",
            "Ашуды сезіну мен біреуге зиян келтіру — екі бөлек нәрсе."
          ]
        },
        {
          title: "Не көмектесуі мүмкін?",
          points: [
            "Ашудың алдында не болғанын байқа.",
            "Жауап бермес бұрын өзіңе аздап уақыт бер.",
            "Не қажет екенін сабырлы әрі анық жеткізуге тырыс."
          ]
        }
      ],
      experiment: "«Мен ... болғанда ашуландым» деп жаз. Содан кейін «Сол сәтте мен үшін не маңызды болды?» деп сұра.",
      note: "Сезімдеріңді құрметтей отырып, әрекеттеріңді саналы түрде таңдай аласың."
    },
    ru: {
      title: "Гнев",
      short: "Когда что-то внутри говорит: это важно.",
      intro: "Гнев — естественная эмоция. Он может возникать, когда нарушают твои границы, ситуация кажется несправедливой или важную потребность игнорируют.",
      sections: [
        {
          title: "Понимание гнева",
          points: [
            "Гнев не делает тебя плохим человеком.",
            "Он может указывать на то, что требует внимания.",
            "Чувствовать злость и причинять вред — разные вещи."
          ]
        },
        {
          title: "Что может помочь?",
          points: [
            "Заметь, что произошло перед появлением гнева.",
            "Дай себе немного времени перед ответом.",
            "Попробуй спокойно и ясно объяснить свои потребности."
          ]
        }
      ],
      experiment: "Запиши: «Я разозлилась, когда...» Затем спроси себя: «Что было для меня важно в тот момент?»",
      note: "Можно уважать свои чувства и при этом осознанно выбирать действия."
    }
  },

  anxiety: {
    symbol: "◌",
    en: {
      title: "Anxiety",
      short: "When your mind travels into tomorrow.",
      intro: "Anxiety often appears when something feels uncertain. Your mind may try to prepare for possibilities that have not happened.",
      sections: [
        {
          title: "Why does anxiety happen?",
          points: [
            "Uncertainty can make the mind search for answers.",
            "Anxiety may affect thoughts, attention, and physical comfort.",
            "Having anxious feelings does not mean a feared outcome will happen."
          ]
        },
        {
          title: "Finding some steadiness",
          points: [
            "Name one thing you know for certain right now.",
            "Separate what you can influence from what you cannot.",
            "Try a small, manageable next step."
          ]
        }
      ],
      experiment: "Look around and gently notice five things you can see. Bring your attention back to the present.",
      note: "If anxiety keeps interfering with daily life, talking with a trusted adult or qualified professional can help."
    },
    kk: {
      title: "Мазасыздық",
      short: "Ойың ертеңгі күнге асыққанда.",
      intro: "Мазасыздық көбіне белгісіздік кезінде пайда болады. Миың әлі болмаған жағдайларға алдын ала дайындалуға тырысуы мүмкін.",
      sections: [
        {
          title: "Мазасыздық неге пайда болады?",
          points: [
            "Белгісіздік ойыңды жауап іздеуге итермелеуі мүмкін.",
            "Мазасыздық ойлауға, зейінге және денедегі жайлылыққа әсер етеді.",
            "Бір нәрседен қорқу оның міндетті түрде болатынын білдірмейді."
          ]
        },
        {
          title: "Өзіңді тұрақтырақ сезіну",
          points: [
            "Қазір анық білетін бір нәрсеңді ата.",
            "Өзің өзгерте алатын және өзгерте алмайтын нәрселерді ажырат.",
            "Кішкентай, қолыңнан келетін бір қадам жаса."
          ]
        }
      ],
      experiment: "Айналаңа қарап, көзіңе түсіп тұрған бес затты байқа. Назарыңды осы сәтке қайтар.",
      note: "Мазасыздық күнделікті өміріңе жиі кедергі келтірсе, сенімді ересек адаммен немесе маманмен сөйлесу пайдалы."
    },
    ru: {
      title: "Тревога",
      short: "Когда мысли убегают в завтрашний день.",
      intro: "Тревога часто появляется из-за неопределённости. Разум пытается подготовиться к ситуациям, которые ещё не произошли.",
      sections: [
        {
          title: "Почему возникает тревога?",
          points: [
            "Неопределённость заставляет искать ответы.",
            "Тревога может влиять на мысли, внимание и самочувствие.",
            "Страх перед событием не означает, что оно обязательно произойдёт."
          ]
        },
        {
          title: "Как найти опору?",
          points: [
            "Назови одну вещь, в которой уверена прямо сейчас.",
            "Раздели то, на что можешь повлиять, и то, что вне твоего контроля.",
            "Сделай один маленький, посильный шаг."
          ]
        }
      ],
      experiment: "Осмотрись и спокойно отметь пять предметов, которые видишь. Верни внимание в настоящий момент.",
      note: "Если тревога часто мешает повседневной жизни, полезно поговорить с близким взрослым или специалистом."
    }
  },

  envy: {
    symbol: "✧",
    en: {
      title: "Envy",
      short: "A feeling that may reveal what you long for.",
      intro: "Envy can appear when someone else has something we wish for. It may feel uncomfortable, but it can also reveal our hopes.",
      sections: [
        {
          title: "Looking beneath envy",
          points: [
            "Envy is a common human feeling.",
            "It may point toward a goal or an unmet wish.",
            "Another person's success does not erase your possibilities."
          ]
        },
        {
          title: "Responding with curiosity",
          points: [
            "Notice what exactly you admire or wish for.",
            "Ask whether that wish reflects your own values.",
            "Choose one small step toward a meaningful goal."
          ]
        }
      ],
      experiment: "Complete this sentence: 'When I see someone achieve this, I realize I also care about...'",
      note: "Your path does not need to look like anyone else's."
    },
    kk: {
      title: "Қызғаныш",
      short: "Ішкі арманыңды көрсететін сезім.",
      intro: "Қызғаныш біреуде өзіміз қалайтын нәрсе болғанда пайда болуы мүмкін. Ол жағымсыз сезілгенімен, кейде өз арманымызды түсінуге көмектеседі.",
      sections: [
        {
          title: "Қызғаныштың астарында не бар?",
          points: [
            "Қызғаныш — адамдарда кездесетін қалыпты сезім.",
            "Ол мақсатты немесе орындалмаған тілекті көрсетуі мүмкін.",
            "Басқаның жетістігі сенің мүмкіндігіңді азайтпайды."
          ]
        },
        {
          title: "Қызығушылықпен қарау",
          points: [
            "Нақты неге қызығатыныңды анықта.",
            "Бұл тілек өз құндылықтарыңа сәйкес келе ме, ойлан.",
            "Өзің үшін маңызды мақсатқа бір шағын қадам жаса."
          ]
        }
      ],
      experiment: "«Біреудің осы жетістігін көргенде, мен үшін де ... маңызды екенін түсінемін» деген сөйлемді аяқта.",
      note: "Сенің жолың басқа біреудің жолына ұқсауға міндетті емес."
    },
    ru: {
      title: "Зависть",
      short: "Чувство, которое может раскрыть твоё желание.",
      intro: "Зависть возникает, когда у другого человека есть то, чего мы хотим. Она может быть неприятной, но иногда помогает понять собственные мечты.",
      sections: [
        {
          title: "Что скрывается за завистью?",
          points: [
            "Зависть — обычное человеческое чувство.",
            "Она может указывать на цель или желание.",
            "Чужой успех не уменьшает твои возможности."
          ]
        },
        {
          title: "С любопытством к себе",
          points: [
            "Заметь, чем именно ты восхищаешься.",
            "Подумай, соответствует ли это желание твоим ценностям.",
            "Сделай маленький шаг к значимой для тебя цели."
          ]
        }
      ],
      experiment: "Продолжи фразу: «Когда я вижу этот успех, я понимаю, что мне тоже важно...»",
      note: "Твой путь не обязан быть похожим на чей-то другой."
    }
  },

  solitude: {
    symbol: "☾",
    en: {
      title: "Solitude",
      short: "Learning to enjoy your own company.",
      intro: "Solitude means spending time with yourself. It can offer rest and reflection, although being alone and feeling lonely are different experiences.",
      sections: [
        {
          title: "Being alone and feeling lonely",
          points: [
            "Solitude can be a choice that helps you recharge.",
            "Loneliness is the feeling of missing connection.",
            "It is possible to enjoy solitude and still need other people."
          ]
        },
        {
          title: "Making space for yourself",
          points: [
            "Find a quiet activity that genuinely comforts you.",
            "Notice how you feel after time alone.",
            "Reach out when you want connection."
          ]
        }
      ],
      experiment: "Spend ten quiet minutes doing something you enjoy. Afterwards, write one sentence about how you feel.",
      note: "Alone does not have to mean lonely."
    },
    kk: {
      title: "Оңашалық",
      short: "Өзіңмен уақыт өткізуді үйрену.",
      intro: "Оңашалық — өзіңмен жеке уақыт өткізу. Ол тынығуға және ойлануға мүмкіндік береді. Бірақ жалғыз болу мен жалғыздықты сезіну бірдей емес.",
      sections: [
        {
          title: "Жалғыз болу және жалғыздықты сезіну",
          points: [
            "Оңашалық күш жинауға көмектесетін саналы таңдау болуы мүмкін.",
            "Жалғыздық — жақын байланыстың жетіспеуін сезіну.",
            "Өзіңмен уақыт өткізуді ұнатып, сонымен бірге адамдармен араласуды қалау қалыпты."
          ]
        },
        {
          title: "Өзіңе кеңістік беру",
          points: [
            "Жаныңды тыныштандыратын іспен айналыс.",
            "Оңаша уақыттан кейін өзіңді қалай сезінетініңді байқа.",
            "Қарым-қатынас қажет болғанда жақындарыңа хабарлас."
          ]
        }
      ],
      experiment: "Өзің ұнататын іспен тыныш жерде он минут айналыс. Кейін сезіміңді бір сөйлеммен жаз.",
      note: "Жалғыз болу әрқашан жалғыздықты білдірмейді."
    },
    ru: {
      title: "Уединение",
      short: "Учиться наслаждаться временем с собой.",
      intro: "Уединение — время наедине с собой. Оно помогает отдыхать и размышлять. Но быть одной и чувствовать одиночество — не одно и то же.",
      sections: [
        {
          title: "Уединение и одиночество",
          points: [
            "Уединение может быть осознанным выбором для восстановления сил.",
            "Одиночество — ощущение нехватки близости.",
            "Можно любить время наедине с собой и при этом нуждаться в общении."
          ]
        },
        {
          title: "Пространство для себя",
          points: [
            "Выбери спокойное занятие, которое тебе нравится.",
            "Заметь, как ты чувствуешь себя после уединения.",
            "Обращайся к близким, когда хочется общения."
          ]
        }
      ],
      experiment: "Проведи десять минут за приятным спокойным занятием. Затем запиши одно предложение о своих чувствах.",
      note: "Быть одной — не обязательно значит быть одинокой."
    }
  },

  feelings: {
    symbol: "♡",
    en: {
      title: "Feelings",
      short: "Finding words for what happens inside.",
      intro: "Feelings help us notice how experiences affect us. Naming them can make them easier to understand and communicate.",
      sections: [
        {
          title: "Why feelings matter",
          points: [
            "Feelings can provide information about needs and experiences.",
            "Different emotions can exist at the same time.",
            "No one needs to feel happy every moment."
          ]
        },
        {
          title: "Talking about feelings",
          points: [
            "Begin with 'I feel...' instead of blaming someone.",
            "Be as specific as you can, without pressuring yourself.",
            "Choose someone you trust when you want to share."
          ]
        }
      ],
      experiment: "Write three words describing how you feel today. They do not need to match.",
      note: "You do not need perfect words to deserve understanding."
    },
    kk: {
      title: "Сезімдер",
      short: "Ішкі әлеміңе сөз табу.",
      intro: "Сезімдер түрлі жағдайлардың бізге қалай әсер ететінін байқауға көмектеседі. Оларды атау түсінуді және жеткізуді жеңілдетуі мүмкін.",
      sections: [
        {
          title: "Сезімдер неге маңызды?",
          points: [
            "Сезімдер қажеттіліктеріміз туралы ақпарат бере алады.",
            "Бір уақытта бірнеше эмоцияны сезіну мүмкін.",
            "Әр сәтте бақытты болуға міндетті емессің."
          ]
        },
        {
          title: "Сезімдер туралы сөйлесу",
          points: [
            "Біреуді кінәлаудың орнына «Мен ... сезінемін» деп баста.",
            "Өзіңді қинамай, сезіміңді нақты сипаттауға тырыс.",
            "Бөліскің келгенде сенетін адамыңды таңда."
          ]
        }
      ],
      experiment: "Бүгінгі көңіл күйіңді сипаттайтын үш сөз жаз. Олардың бір-біріне ұқсауы міндетті емес.",
      note: "Түсіністікке лайық болу үшін мінсіз сөз табуың қажет емес."
    },
    ru: {
      title: "Чувства",
      short: "Находить слова для своего внутреннего мира.",
      intro: "Чувства помогают замечать, как события влияют на нас. Если их назвать, бывает легче понять себя и поделиться переживаниями.",
      sections: [
        {
          title: "Почему чувства важны?",
          points: [
            "Чувства могут подсказывать нам о потребностях.",
            "Можно испытывать несколько эмоций одновременно.",
            "Не обязательно быть счастливой каждую минуту."
          ]
        },
        {
          title: "Как говорить о чувствах?",
          points: [
            "Начни с «Я чувствую...», не обвиняя другого.",
            "Старайся быть конкретной, но не дави на себя.",
            "Выбирай человека, которому доверяешь."
          ]
        }
      ],
      experiment: "Запиши три слова, описывающих твоё состояние сегодня. Они могут быть совершенно разными.",
      note: "Тебе не нужны идеальные слова, чтобы заслуживать понимания."
    }
  }
};

/* 3. APP STATE */

const pageIds = ["home", "emotions", "article", "about", "diary"];
const topicIds = Object.keys(articles);

let currentLanguage = "en";
let currentTopic = "anger";
let currentPage = "home";
let navigating = false;

const introOverlay = document.getElementById("intro");
const transitionOverlay = document.getElementById("transition");
const languageSelect = document.getElementById("language");
const navigation = document.getElementById("navigation");
const menuButton = document.getElementById("menuButton");
const diaryForm = document.getElementById("diaryForm");
const intensityInput = document.getElementById("intensityInput");
const intensityValue = document.getElementById("intensityValue");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

/* 4. STORAGE HELPERS */

function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/* 5. LANGUAGE SWITCHING */

function setLanguage(language) {
  if (!translations[language]) language = "en";

  currentLanguage = language;
  document.documentElement.lang = language;
  languageSelect.value = language;

  writeStorage("nova-language", language);

  const dictionary = translations[language];

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }
  });

  document.title = "NOVA — " + dictionary.footerText;

  renderCards();
  renderArticle();
  renderDiary();
}

languageSelect.addEventListener("change", event => {
  setLanguage(event.target.value);
});

/* 6. EMOTION CARDS */

function createCard(id) {
  const topic = articles[id];
  const content = topic[currentLanguage];

  const card = document.createElement("a");
  card.className = "emotion-card";
  card.href = "#article/" + id;
  card.dataset.page = "article";
  card.dataset.topic = id;

  const symbol = document.createElement("span");
  symbol.className = "emotion-symbol";
  symbol.textContent = topic.symbol;

  const title = document.createElement("h3");
  title.textContent = content.title;

  const description = document.createElement("p");
  description.textContent = content.short;

  const arrow = document.createElement("span");
  arrow.className = "card-arrow";
  arrow.textContent = "↗";
  arrow.setAttribute("aria-hidden", "true");

  card.append(symbol, title, description, arrow);

  return card;
}

function renderCards() {
  const homeCards = document.getElementById("homeCards");
  const allCards = document.getElementById("allCards");

  homeCards.replaceChildren();
  allCards.replaceChildren();

  topicIds.forEach(id => {
    homeCards.appendChild(createCard(id));
    allCards.appendChild(createCard(id));
  });
}

/* 7. FULL ARTICLES */

function renderArticle() {
  const content = articles[currentTopic]?.[currentLanguage];

  if (!content) return;

  document.getElementById("articleTitle").textContent =
    content.title;

  document.getElementById("articleSubtitle").textContent =
    content.short;

  const body = document.getElementById("articleBody");
  body.replaceChildren();

  const introduction = document.createElement("p");
  introduction.textContent = content.intro;
  body.appendChild(introduction);

  content.sections.forEach(section => {
    const heading = document.createElement("h2");
    heading.textContent = section.title;

    const list = document.createElement("ul");

    section.points.forEach(point => {
      const item = document.createElement("li");
      item.textContent = point;
      list.appendChild(item);
    });

    body.append(heading, list);
  });

  const experimentBox = document.createElement("div");
  experimentBox.className = "article-note";

  const label = document.createElement("strong");
  label.textContent = translations[currentLanguage].experiment;

  const experimentText = document.createElement("p");
  experimentText.textContent = content.experiment;

  experimentBox.append(label, experimentText);
  body.appendChild(experimentBox);

  if (content.note) {
    const noteHeading = document.createElement("h2");
    noteHeading.textContent =
      translations[currentLanguage].helpfulNote;

    const noteText = document.createElement("p");
    noteText.textContent = content.note;

    body.append(noteHeading, noteText);
  }
}

/* 8. ROUTING */

function parseRoute() {
  const hash = window.location.hash.slice(1);
  const [page, topic] = hash.split("/");

  if (page === "article" && articles[topic]) {
    return { page: "article", topic };
  }

  if (pageIds.includes(page) && page !== "article") {
    return { page, topic: currentTopic };
  }

  return { page: "home", topic: currentTopic };
}

function showPage(page, topic) {
  currentPage = page;

  if (topic && articles[topic]) {
    currentTopic = topic;
  }

  document.querySelectorAll(".page").forEach(section => {
    section.classList.toggle(
      "active",
      section.id === currentPage
    );
  });

  document.querySelectorAll(".navigation a").forEach(link => {
    const selected =
      link.dataset.page === currentPage ||
      (currentPage === "article" &&
       link.dataset.page === "emotions");

    link.classList.toggle("selected", selected);

    if (selected) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  renderArticle();

  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");

  window.scrollTo(0, 0);

  revealVisibleElements();
}

function syncRoute() {
  const route = parseRoute();
  showPage(route.page, route.topic);
}

/* 9. SWAN PAGE TRANSITION */

function navigateTo(target) {
  if (navigating) return;

  if (!target || target === window.location.hash) {
    syncRoute();
    return;
  }

  navigating = true;

  if (reducedMotion.matches) {
    history.pushState(null, "", target);
    syncRoute();
    navigating = false;
    return;
  }

  transitionOverlay.classList.add("active");

  // Let the original swan fade into view.
  window.setTimeout(() => {
    history.pushState(null, "", target);
    syncRoute();

    // Keep the swan visible briefly.
    window.setTimeout(() => {
      transitionOverlay.classList.remove("active");

      window.setTimeout(() => {
        navigating = false;
      }, 600);
    }, 300);
  }, 750);
}

document.addEventListener("click", event => {
  const link = event.target.closest("a[data-page]");

  if (!link) return;

  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  navigateTo(link.getAttribute("href"));
});

window.addEventListener("popstate", syncRoute);
window.addEventListener("hashchange", syncRoute);

/* 10. MOBILE MENU */

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(open)
  );
});

/* 11. INTRO LOGO ANIMATION */

function runIntro() {
  let alreadySeen = false;

  try {
    alreadySeen =
      sessionStorage.getItem("nova-intro-seen") === "true";

    sessionStorage.setItem("nova-intro-seen", "true");
  } catch {
    // Continue even if storage is blocked.
  }

  if (alreadySeen || reducedMotion.matches) {
    introOverlay.classList.add("hide");
    return;
  }

  // The original NOVA logo slowly appears,
  // stays visible, then fades away.
  window.setTimeout(() => {
    introOverlay.classList.add("hide");
  }, 2600);
}

/* 12. SOFT REVEAL */

function revealVisibleElements() {
  document.querySelectorAll(".page.active .reveal")
    .forEach(element => {
      element.classList.add("visible");
    });
}

/* 13. EMOTION DIARY */

function getEntries() {
  try {
    const value = JSON.parse(
      readStorage("nova-diary", "[]")
    );

    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveEntries(entries) {
  return writeStorage(
    "nova-diary",
    JSON.stringify(entries)
  );
}

function renderDiary() {
  const list = document.getElementById("entryList");
  list.replaceChildren();

  const entries = getEntries();
  const dictionary = translations[currentLanguage];

  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = dictionary.emptyDiary;
    list.appendChild(empty);
    return;
  }

  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "diary-entry";

    const meta = document.createElement("p");
    meta.className = "entry-meta";

    const locale = {
      en: "en-GB",
      kk: "kk-KZ",
      ru: "ru-RU"
    }[currentLanguage];

    const date = new Date(entry.date);

    const formattedDate = Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleString(locale);

    meta.textContent =
      formattedDate + " · " + entry.intensity + " / 5";

    const title = document.createElement("h3");
    title.textContent = entry.emotion;

    const thoughts = document.createElement("p");
    thoughts.textContent = entry.thoughts;
    thoughts.style.whiteSpace = "pre-wrap";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = dictionary.deleteEntry;

    deleteButton.addEventListener("click", () => {
      if (!window.confirm(
        translations[currentLanguage].deleteConfirm
      )) return;

      const updated = getEntries().filter(
        item => item.id !== entry.id
      );

      if (saveEntries(updated)) {
        renderDiary();
      } else {
        alert(translations[currentLanguage].storageError);
      }
    });

    card.append(meta, title, thoughts, deleteButton);
    list.appendChild(card);
  });
}

intensityInput.addEventListener("input", () => {
  intensityValue.textContent =
    intensityInput.value + " / 5";
});

diaryForm.addEventListener("submit", event => {
  event.preventDefault();

  const emotion = document.getElementById(
    "emotionInput"
  ).value.trim();

  const thoughts = document.getElementById(
    "thoughtInput"
  ).value.trim();

  if (!emotion || !thoughts) return;

  const entries = getEntries();

  const id = typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : Date.now().toString() + "-" +
      Math.random().toString(36).slice(2);

  entries.unshift({
    id,
    date: new Date().toISOString(),
    emotion,
    thoughts,
    intensity: Number(intensityInput.value)
  });

  if (saveEntries(entries)) {
    diaryForm.reset();
    intensityValue.textContent = "3 / 5";

    renderDiary();

    alert(translations[currentLanguage].savedMessage);
  } else {
    alert(translations[currentLanguage].storageError);
  }
});

/* 14. INITIALIZE NOVA */

function initializeNova() {
  const savedLanguage = readStorage(
    "nova-language",
    "en"
  );

  setLanguage(savedLanguage);
  syncRoute();
  runIntro();
}

initializeNova();
