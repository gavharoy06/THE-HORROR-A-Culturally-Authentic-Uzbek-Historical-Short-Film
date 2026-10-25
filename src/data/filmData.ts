import scene1Img from '../assets/images/scene_1_courtyard_oath_1792930833392.jpg';
import scene2Img from '../assets/images/scene_2_cemetery_fire_1792930839559.jpg';
import scene3Img from '../assets/images/scene_3_climax_terror_1792930835472.jpg';

export interface SubtitleCue {
  id: number;
  startTime: number; // percentage of act progress (0 - 100)
  endTime: number;
  speaker: string;
  en: string;
  uz: string;
  ru: string;
  soundCue?: string;
}

export interface FilmAct {
  id: string;
  actNumber: number;
  title: string;
  uzTitle: string;
  ruTitle: string;
  durationSeconds: number;
  imagePath: string;
  fallbackImagePath: string;
  videoMp4: string;
  videoWebm: string;
  setting: string;
  timeOfDay: string;
  synopsis: string;
  cinematography: {
    shotType: string;
    lighting: string;
    colorPalette: string;
    cameraMovement: string;
    soundDesign: string;
  };
  historicalNotes: string[];
  screenplayLines: {
    character?: string;
    isDirection?: boolean;
    textEn: string;
    textUz: string;
  }[];
  subtitles: SubtitleCue[];
}

export const FILM_ACTS: FilmAct[] = [
  {
    id: "act-1",
    actNumber: 1,
    title: "The Ramadan Oath",
    uzTitle: "Tarovihdan So'ng / Hovlidagi Shart",
    ruTitle: "Уговор в ночь Рамадана",
    durationSeconds: 22,
    imagePath: scene1Img,
    fallbackImagePath: "/images/scene_1.jpg",
    videoMp4: "/videos/scene_1.mp4",
    videoWebm: "/videos/scene_1.webm",
    setting: "Traditional Uzbek Courtyard (Ichkari Hovli) & Carved Walnut Gate",
    timeOfDay: "Midnight, Late Ramadan after Tarawih prayers",
    synopsis: "Inside an authentic 19th-century Uzbek courtyard, elderly Olimbek Dodkho, clad in his aristocratic turban and embroidered chapan, confronts the young maiden Unsin. He lays down a ruthless wager: venture into the stormy night to the ancient Muslim cemetery, boil water beside the old mausoleum, and bring back tea in exchange for her freedom.",
    cinematography: {
      shotType: "Medium-Wide Composition with Architectural Depth",
      lighting: "Warm Chiaroscuro: flickering brass oil lanterns casting golden hues on carved walnut pillars against the pitch-black gale outside the open gate.",
      colorPalette: "Deep ochre, lapis blue, warm walnut wood, and stormy midnight slate.",
      cameraMovement: "Slow creeping push-in toward Unsin's resolute face as she grasps the heavy horsehair chachvon and brass kettle.",
      soundDesign: "Distant muffled night wind rattling window shutters, low crackle of burning oil wicks, and the authoritative, raspy voice of the Dodkho."
    },
    historicalNotes: [
      "The 'Dodkho' rank denoted a powerful feudal official and landowner in the Khanates of Kokand and Bukhara.",
      "Young women in domestic servitude or bonded marriages held no legal autonomy except through an official deed of freedom ('ozodlik qog'ozi').",
      "The grey-blue paranji and stiff black horsehair chachvon were compulsory for urban women leaving the courtyard, serving as both physical and cultural shields against the outside world."
    ],
    screenplayLines: [
      {
        isDirection: true,
        textEn: "INT. OLIMBEK DODKHO'S COURTYARD - NIGHT. Ramadan winds howl outside the high clay mudbrick walls. Tarawih prayers have ended; silence blankets the mahalla. On the raised carpeted supa, OLIMBEK DODKHO (70s), draped in a heavy velvet chapan with gold embroidery, peers coldly down at UNSIN (18).",
        textUz: "ICHKARI HOVLI - KECHA. Taroveh namozidan keyin mahalla sukunatga cho'mgan. Supada qalin gilamlar ustida o'tirgan keksa OLIMBEK DODXO o'zining zardobli nigohini UNSINga qadaydi."
      },
      {
        character: "OLIMBEK DODKHO",
        textEn: "You claim you fear neither djinn nor midnight grave? Then prove your words before the dawn. Take the brass kettle and teapot to the old cemetery beside the dome of the saint. Boil the water, brew green tea, and return before the suhoor horn. Do this, and by Allah, you walk away with your freedom.",
        textUz: "Alvastidan ham, qorong'u mozorotdan ham qo'rqmayman deysanmi? Unda so'zingni isbotla. Mis qumg'on bilan choynakni ol-da, eski mozorga, xonaqoh gumbezi tagiga bor. Olov yoqib choy qaynatib kel! Buni qilsang, qo'lingga ozodlik xatingni tutqazaman!"
      },
      {
        isDirection: true,
        textEn: "Unsin stands motionless. Her hands tremble for a fleeting instant, but her eyes flare with unspoken defiance. She nods slowly, stepping to the small carved stool to pick up the brass kettle and teapot.",
        textUz: "Unsin bir lahza jim qoladi. Barmoqlari titraydi, ammo ko'zlarida ozodlikka bo'lgan so'nmas umid porlaydi. U bosh irg'aydi va mis qumg'onni oladi."
      },
      {
        character: "UNSIN",
        textEn: "I accept your condition, Dodkho. Prepare the deed of my release.",
        textUz: "Shartingizni qabul qildim, Dodxobobo. Ozodlik qog'ozimni tayyorlab qo'ying."
      },
      {
        isDirection: true,
        textEn: "She pulls the stiff black horsehair chachvon veil over her eyes and drapes the voluminous grey-blue paranji over her head. Pushing open the creaking walnut gate, she disappears into the howling darkness.",
        textUz: "U yuziga qora chachvonni tushirib, yelkasiga ko'k paranji tashlaydi-da, og'ir o'ymakor darvozani ochib, bo'ronli zulmatga qadam qo'yadi."
      }
    ],
    subtitles: [
      {
        id: 101,
        startTime: 0,
        endTime: 24,
        speaker: "OLIMBEK DODKHO",
        en: "“You boast of having no fear in your heart, Unsin? Then listen to my wager after Tarawih.”",
        uz: "“Yuragimda zarracha qo'rquv yo'q deysanmi, Unsin? Unda Tarovehdan so'nggi shartimni eshit!”",
        ru: "«Хвалишься, что в сердце твоем нет страха, Унсин? Тогда прими мой уговор в эту ночь Рамадана.»",
        soundCue: "[Distant wind howling beyond the carved gate]"
      },
      {
        id: 102,
        startTime: 25,
        endTime: 55,
        speaker: "OLIMBEK DODKHO",
        en: "“Go into the cemetery tonight. Light a fire beside the saint’s mausoleum, boil water, and brew me fresh tea. In return, I grant your freedom.”",
        uz: "“Mozorga bor. Avliyo maqbarasi poyida olov yoqib, suv qaynat, menga ko'k choy damlab keltir. Evaziga ozodlik qog'ozingni beraman!”",
        ru: "«Ступай этой ночью на старое кладбище. Разожги огонь у мавзолея, вскипяти воду и завари чай. Взамен получишь свободу.»",
        soundCue: "[Oil lamp flames flickers on carved pillars]"
      },
      {
        id: 103,
        startTime: 56,
        endTime: 80,
        speaker: "UNSIN",
        en: "“I accept your condition, Dodkho. Keep your word before God.”",
        uz: "“Shartingizni qabul qildim, Dodxobobo. Alloh oldida bergan va'dangizda turing.”",
        ru: "«Я принимаю твое условие, Додхо. Сдержи свое слово перед Всевышним.»",
        soundCue: "[Brass kettle clinks gently in her hands]"
      },
      {
        id: 104,
        startTime: 81,
        endTime: 100,
        speaker: "NARRATION",
        en: "She drapes her grey-blue paranji and black chachvon veil, taking the brass kettle into the fierce autumn tempest.",
        uz: "U kulrang-moviy paranjisini yopinib, chachvonini tushirdi va mis qumg'onni ko'tarib bo'ronli tunga qadam tashladi.",
        ru: "Она накинула серую паранджу с конским чачваном и с медным кумганом шагнула в леденящую бурю.",
        soundCue: "[Heavy wooden gate groans shut]"
      }
    ]
  },
  {
    id: "act-2",
    actNumber: 2,
    title: "The Fire Beside the Mausoleum",
    uzTitle: "Maqbara Yonidagi Olov",
    ruTitle: "Огонь у древнего мавзолея",
    durationSeconds: 24,
    imagePath: scene2Img,
    fallbackImagePath: "/images/scene_2.jpg",
    videoMp4: "/videos/scene_2.mp4",
    videoWebm: "/videos/scene_2.webm",
    setting: "Ancient Muslim Cemetery (Mozorot) with Brick Domed Mausoleum",
    timeOfDay: "2:00 AM, Violent Autumn Storm beneath cold full moon",
    synopsis: "Arriving at the ancient Muslim cemetery amidst tossing plane trees (chinor) and earthen mounds, Unsin places her brass kettle and teapot beside the terracotta brick mausoleum. Removing her paranji to work, she braves the biting wind to collect dry steppe reeds and thorns. As the fire leaps to life, casting dramatic shadows against the Islamic arches, she waits in prayer and terror while the water reaches a boil.",
    cinematography: {
      shotType: "Wide Chiaroscuro Tableau with Atmospheric Depth",
      lighting: "High-contrast duel of light: crisp steel-blue moonlight cutting through storm clouds overhead, balanced by the intimate, trembling amber firelight on Unsin's focused face and brick facades.",
      colorPalette: "Terracotta brick, cold slate indigo, blazing charcoal orange, and desert earth tones.",
      cameraMovement: "Slow orbital pan revealing the unadorned Muslim mounds receding into the swirling dust and leaves.",
      soundDesign: "Fierce gale roaring through bare branches, dry reeds snapping, embers crackling, and the rhythmic whistling steam from the brass spout."
    },
    historicalNotes: [
      "Traditional Central Asian cemeteries featured simple earthen graves ('tuproq qabrlar') aligned towards Mecca, devoid of statues or ornate headstones.",
      "Plane trees ('chinor') were venerated for their longevity and planted near shrines for sacred shade.",
      "To light a fire in the wind, 19th-century travelers relied on flint stones ('chaqmoqtosh') and tinder dried from steppe thistles."
    ],
    screenplayLines: [
      {
        isDirection: true,
        textEn: "EXT. ANCIENT CEMETERY - NIGHT. Autumn wind howls through the towering branches of ancient plane trees. Dead leaves tornado across weathered clay tombstones. Unsin reaches the arched base of a centuries-old baked brick mausoleum.",
        textUz: "ESKI QABRISTON - KECHA. Asriy chinor shoxlari vahimali shovullaydi. Qurigan yaproqlar loy qabrlar ustida girdob hosil qiladi. Unsin pishiq g'ishtdan tiklangan qadimiy maqbara poyiga yetib keladi."
      },
      {
        isDirection: true,
        textEn: "Breathing hard, her chest tight with terror, she sets the brass kettle and ceramic teapot on the stone stoop. She removes her heavy paranji and horsehair veil, laying them neatly aside against the brick portal.",
        textUz: "Yuragi gup-gup urgan Unsin qumg'on va choynakni tosh supa ustiga qo'yadi. Paranjisi bilan chachvonini yechib, gumbaz devori ostiga buklab qo'yadi."
      },
      {
        isDirection: true,
        textEn: "Scouring the edges of the mausoleum in the dark, her bare fingers grasp brittle desert reeds, dry thorns, and fallen twigs. She scrapes flint against steel; a bright spark catches the dried tinder.",
        textUz: "Zulmat qo'ynida paypaslanib, qamish poxollari, qovjiragan yantoq va quruq shox-shabbalarni yig'adi. Chaqmoqtosh uchquni bilan olov yoqadi."
      },
      {
        character: "UNSIN (WHISPERING)",
        textEn: "Bismillahir Rahmanir Rahim... Ya Rabb, protect this helpless servant from the shadows of this night...",
        textUz: "Bismillahir Rohmanir Rohiym... Yo Parvardigor, o'zing bu ojiza bandangga madad ber..."
      },
      {
        isDirection: true,
        textEn: "The flames flicker higher, dancing against the terracotta carvings. Smoke swirls into the moonlight. Soon, white steam shoots from the brass spout with a high, steady hiss. With trembling hands, she sprinkles green tea leaves into the teapot and pours the boiling water.",
        textUz: "Olov yorishib, g'ishtin naqshlarga qizil shu'la tashlaydi. Mis qumg'ondan oppoq bug' ko'tariladi. Unsin titroq qo'llari bilan choynakka ko'k choy tashlab, qaynoq suvni quyadi."
      }
    ],
    subtitles: [
      {
        id: 201,
        startTime: 0,
        endTime: 25,
        speaker: "NARRATION",
        en: "Under the cold autumn moon, she reaches the ancient brick mausoleum surrounded by ancient plane trees and simple earth graves.",
        uz: "Sovuq kuzgi oy yog'dusida u asriy chinorlar va tuproq qabrlar bilan o'ralgan qadimiy g'ishtin maqbaraga yetib keldi.",
        ru: "Под холодным лунным светом она подошла к древнему кирпичному мавзолею среди вековых чинар и мусульманских могил.",
        soundCue: "[Storm wind whistling through bare plane tree branches]"
      },
      {
        id: 202,
        startTime: 26,
        endTime: 52,
        speaker: "NARRATION",
        en: "Setting her paranji aside, her fingers gather dry reeds and thorny branches against the roaring gale.",
        uz: "Paranjisini chetga olib, bo'ron shovqinida quruq qamish va yantoq shoxlarini yig'a boshladi.",
        ru: "Сняв паранджу, она дрожащими пальцами собирает сухой тростник и колючий кустарник против свирепого ветра.",
        soundCue: "[Twigs snapping, flint striking spark]"
      },
      {
        id: 203,
        startTime: 53,
        endTime: 78,
        speaker: "UNSIN",
        en: "“Bismillah... Keep the flame alive, only a few moments more until the kettle boils.”",
        uz: "“Bismillah... Olovim o'chmasin, suv qaynasa bas, ozodligim yaqin...”",
        ru: "«Бисмиллях... пусть пламя не гаснет, только бы закипел кумган...»",
        soundCue: "[Campfire crackling and rising orange flame]"
      },
      {
        id: 204,
        startTime: 79,
        endTime: 100,
        speaker: "NARRATION",
        en: "The water bubbles; steam billows into the chill air as she carefully brews the green tea in the ceramic pot.",
        uz: "Suv qaynadi; izg'irin havoga qaynoq bug' taralib, u choynakka xushbo'y ko'k choyni damladi.",
        ru: "Вода закипела; густой пар вырвался в леденящий воздух, пока она заваривала чай в глиняном чайнике.",
        soundCue: "[High whistling steam and tea pouring]"
      }
    ]
  },
  {
    id: "act-3",
    actNumber: 3,
    title: "The Pit and the Climax of Terror",
    uzTitle: "Lahad Cho'kishi va Dahshat",
    ruTitle: "Провал в могилу и леденящий ужас",
    durationSeconds: 26,
    imagePath: scene3Img,
    fallbackImagePath: "/images/scene_3.jpg",
    videoMp4: "/videos/scene_3.mp4",
    videoWebm: "/videos/scene_3.webm",
    setting: "Cemetery Path between Sunken Tombs and Ancient Clay Ruins",
    timeOfDay: "3:30 AM, The Darkest Hour before dawn",
    synopsis: "Carrying the hot teapot in her right hand and the brass kettle in her left, Unsin flees back toward the living. Her paranji remains behind beside the tomb. In the darkness, the soft earth of an old sunken pit collapses beneath her left foot, swallowing her leg into the void. She yanks herself free, leaving one slipper behind in the dirt. As she staggers in panic, an escaped circus monkey leaps unexpectedly onto her shoulders from the mausoleum eaves. Paralyzed by overwhelming terror, she collapses into darkness.",
    cinematography: {
      shotType: "Dynamic Handheld Low-Angle Close-up & Mid-Shot",
      lighting: "Dramatic moonlight rim-lighting with motion-blurred dust, silhouettes of ancient mud brick arches, and high visceral contrast.",
      colorPalette: "Cold ash grey, earthen clay umber, moon silver, and midnight shadow.",
      cameraMovement: "Frantic tracking shot matching her uneven sprint, dropping suddenly as the earth caves in, culminating in an extreme freeze-frame push on her shock.",
      soundDesign: "Sudden crumbling earth thud, racing heartbeat surging to 140 BPM, sudden high-pitched animal shriek, and the clatter of brass hitting the earth."
    },
    historicalNotes: [
      "In sandy or silty soil, older burials and underground crypts ('lahad') frequently settled or caved in after heavy autumn rains.",
      "The 'monkey' was not a mythological spirit, but an escaped performing animal belonging to a wandering 'dorboz' (tightrope acrobat troupe) camped near the shrine bazaar—the genius of Abdulla Qahhor's realism is that the terror was entirely grounded in physical reality.",
      "Losing a shoe ('kalish') in superstitious folklore was seen as an ominous omen, further amplifying the psychological terror that triggered Unsin's fatal shock."
    ],
    screenplayLines: [
      {
        isDirection: true,
        textEn: "EXT. CEMETERY TRAIL - CONTINUOUS. Unsin hurries through the darkness, clutching the steaming teapot in her right hand and the heavy brass kettle in her left. The roaring wind blinds her vision. She has left her paranji behind, too frightened to linger a second longer.",
        textUz: "MOZOR YO'LAKCHASI - DAVOMI. Unsin o'ng qo'lida qaynoq choynakni, chap qo'lida og'ir mis qumg'onni mahkam qisib oldinga intiladi. Qattiq shamol ko'zini ko'r qiladi. Paranjisi esa maqbara poyida qolib ketgan."
      },
      {
        isDirection: true,
        textEn: "CRACK! Without warning, the soft earthen crust gives way. Her left foot plunges deep into a sunken hollow—a collapsed grave pit. She gasps as her leg sinks to her knee into the frigid, damp soil.",
        textUz: "QARS! Hech bir daraksiz oyog'i ostidagi tuproq o'pirilib ketadi. Chap oyog'i tizmagacha chuqur lahad ichiga botib tushadi."
      },
      {
        character: "UNSIN",
        textEn: "Ah! La ilaha illallah!",
        textUz: "Ah! La ilaha illalloh!"
      },
      {
        isDirection: true,
        textEn: "In sheer desperation, she wrenches her leg free. Her soft velvet slipper slips off, swallowed by the subterranean mud. She stands with one foot bare against the thorny dirt.",
        textUz: "Dahshat ichida oyog'ini zo'r-bazo'r tortib oladi. Mahsi-kalishi esa chuqurlikda qolib ketadi. Bir oyog'i yalang'och holda tikanli tuproqni bosadi."
      },
      {
        isDirection: true,
        textEn: "A sharp screech cuts through the gale from the mausoleum lintel. From the gloom, a dark, hairy creature—an escaped dorboz's monkey—plunges through the air and lands squarely upon her shoulders, its claws seizing her collar!",
        textUz: "Shu payt maqbara toqidan dahshatli qiyqiriq eshitiladi. Qorong'ilikdan sakragan bir jonzot — dorbozning qochib ketgan maymuni — birdan uning yelkalariga changal soladi!"
      },
      {
        isDirection: true,
        textEn: "Unsin freezes. The primal scream catches in her throat. Her eyes widen in incomprehensible, shattering terror. Her knees buckle, the brass kettle and teapot crash to the earth, and the world goes black.",
        textUz: "Unsin qotib qoladi. Bo'g'zidan tovush chiqmaydi. Ko'zlari dahshatdan chaqchayib ketadi. Tizlari bukilib, qo'lidagi qumg'on yerga tushadi va u hushidan ketadi."
      }
    ],
    subtitles: [
      {
        id: 301,
        startTime: 0,
        endTime: 22,
        speaker: "NARRATION",
        en: "Teapot in her right hand, brass kettle in her left, she rushes into the darkness, leaving her paranji behind.",
        uz: "O'ng qo'lida choynak, chap qo'lida mis qumg'on bilan u paranjisini qoldirib, qorong'u yo'ldan shoshib ketdi.",
        ru: "С чайником в правой руке и кумганом в левой она бросилась сквозь тьму, оставив паранджу позади.",
        soundCue: "[Racing rapid footsteps on dry earth, accelerating heartbeat]"
      },
      {
        id: 302,
        startTime: 23,
        endTime: 50,
        speaker: "UNSIN",
        en: "“The earth... it’s giving way beneath me! Oh Allah, help me!”",
        uz: "“Yer... oyog'im ostidagi tuproq o'pirilib ketdi! Yo Rabbiy, o'zing qutqar!”",
        ru: "«Земля... подо мной провалилась могильная яма! О Аллах, помоги мне!»",
        soundCue: "[Sudden soil collapse crunch, struggling gasp]"
      },
      {
        id: 303,
        startTime: 51,
        endTime: 74,
        speaker: "NARRATION",
        en: "She tears her foot free, leaving one slipper trapped in the sunken grave pit. One foot bare on the damp earth.",
        uz: "U oyog'ini tortib oldi, ammo bir poyi kalishi chuqurlikda qolib ketdi. Bir oyog'i yalang'och yerga tegdi.",
        ru: "Она выдернула ногу, оставив туфлю в обвалившейся яме. Босая ступня коснулась ледяной земли.",
        soundCue: "[Violent wind burst, breathless gasps]"
      },
      {
        id: 304,
        startTime: 75,
        endTime: 100,
        speaker: "NARRATION",
        en: "Suddenly, a shadow lunges from the mausoleum eaves—an escaped circus monkey lands on her shoulders. Terror shatters her mind; Unsin falls into darkness.",
        uz: "To'satdan maqbara toqidan bir maxluq sakrab, uning yelkasiga yopishdi — dorbozning qochgan maymuni! Dahshatdan aqli shoshgan Unsin yerga yiqilib hushidan ketdi.",
        ru: "Внезапно с карниза мавзолея на ее плечи прыгнула тень — сбежавшая цирковая обезьяна. Скованная неописуемым ужасом, Унсин рухнула без чувств.",
        soundCue: "[High startled animal cry, heavy thud, lingering silence]"
      }
    ]
  }
];

export interface CulturalItem {
  id: string;
  name: string;
  uzName: string;
  category: string;
  description: string;
  significance: string;
}

export const CULTURAL_ITEMS: CulturalItem[] = [
  {
    id: "paranji-chachvon",
    name: "Paranji & Chachvon",
    uzName: "Paranji va Chachvon",
    category: "Costume & Modesty",
    description: "The traditional outer garment worn by women in Central Asian cities. The paranji is a voluminous robe worn over the head with long fake sleeves pinned together behind the back. Underneath, the chachvon is a square screen woven from stiff horsehair covering the face.",
    significance: "Crucial for historical realism: Unsin takes it off only when forced to work beside the fire, and in her flight leaves it behind—a symbol of vulnerability when confronting raw fear in the dark."
  },
  {
    id: "chapan-salla",
    name: "Chapan & Turban (Salla)",
    uzName: "Zardo'zi Chapan va Salla",
    category: "Nobility & Attire",
    description: "Quilted robe of fine silk velvet with Bukhara gold embroidery, worn over linen under-robes and tucked into soft leather boots (mahsi-kalish). Paired with an expertly wound white turban (salla).",
    significance: "Worn by Olimbek Dodkho to project the absolute authority, social privilege, and callous detachment of 19th-century feudal nobility."
  },
  {
    id: "kumgan-choynak",
    name: "Kumgan & Choynak",
    uzName: "Mis Qumg'on va Chinni Choynak",
    category: "Everyday Craft & Ritual",
    description: "A traditional pear-shaped hammered brass water vessel with a curved long neck, ornate handle, and hinged lid. Paired with a ceramic or earthenware teapot (choynak).",
    significance: "The central prop of the plot wager. Carrying two vessels of scalding liquid through an ancient cemetery in a storm emphasizes Unsin's incredible physical bravery."
  },
  {
    id: "islamic-cemetery",
    name: "Islamic Mozorot & Gumbez",
    uzName: "Qadimiy Mozorot va Gumbaz",
    category: "Architecture & Sacred Space",
    description: "Historical Muslim cemeteries in Uzbekistan featured humble unadorned earth mounds oriented toward the Qibla, guarded by monumental baked-brick domed mausoleums (gumbez) and ancient sacred plane trees (chinor).",
    significance: "Historically accurate: no Western headstones, stone crosses, or gothic motifs. The quiet sanctity of the Islamic cemetery is disturbed only by the howling autumn gale."
  },
  {
    id: "dorboz-monkey",
    name: "The Dorboz's Escaped Animal",
    uzName: "Dorbozning Qochgan Maymuni",
    category: "Historical Realism",
    description: "In 19th-century Central Asian bazaars and shrine fairs (sayil), itinerant tightrope walkers (dorboz) and animal handlers kept trained macaques to entertain crowds.",
    significance: "The brilliance of Abdulla Qahhor's literary masterpiece: there are NO supernatural ghosts, demons, or djinn. The terror is psychological. The creature that pounces is merely an ordinary shivering monkey that escaped its cage."
  }
];
