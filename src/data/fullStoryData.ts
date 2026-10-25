/**
 * Complete Literary Text of "Dahshat" (The Horror / 「恐怖」)
 * Author: Abdulla Qahhor (1907–1968)
 * Complete unabridged versions in Uzbek (original), English (literary translation), and Japanese (literary translation).
 */

export interface StoryChapter {
  id: string;
  chapterNumber: number;
  titleUz: string;
  titleEn: string;
  titleJa: string;
  paragraphsUz: string[];
  paragraphsEn: string[];
  paragraphsJa: string[];
}

export interface FullStoryData {
  titleUz: string;
  titleEn: string;
  titleJa: string;
  authorUz: string;
  authorEn: string;
  authorJa: string;
  year: number;
  descriptionUz: string;
  descriptionEn: string;
  descriptionJa: string;
  historicalContextUz: string;
  historicalContextEn: string;
  historicalContextJa: string;
  chapters: StoryChapter[];
}

export const FULL_STORY_DATA: FullStoryData = {
  titleUz: "Dahshat",
  titleEn: "The Horror",
  titleJa: "「恐怖」",
  authorUz: "Abdulla Qahhor",
  authorEn: "Abdulla Qahhor",
  authorJa: "アブドゥッラ・カッホール",
  year: 1936,
  descriptionUz: "O'zbek adabiyotining durdonalaridan biri bo'lgan ushbu hikoya inson ruhiyatidagi qo'rquv tabiati, o'tmishdagi xotin-qizlarning ayanchli qismati va feodal jamiyatdagi zolimlikni yuksak mahorat bilan ochib beradi.",
  descriptionEn: "One of the greatest masterpieces of Uzbek and Central Asian literature, examining the anatomy of psychological fear, the tragic plight of women under feudal patriarchy, and the devastating power of terror.",
  descriptionJa: "ウズベク文学屈指の傑作短編。19世紀中央アジアの封建的家父長制の圧省下で、自由を求めて暗夜の墓地へと向かった若き女性ウンシンの心理と、人間の恐怖の本質を冷徹かつ詩的に描く。",
  historicalContextUz: "Hikoyada XIX asr oxiridagi Turkiston hayoti, Qo'qon va Toshkent xonliklari davridagi ijtimoiy tabaqalanish, ayollarning huquqsizligi va xalq ongiga singib ketgan xurofotlar tasvirlanadi. Undagi dahshat mistik yoki g'ayritabiiy emas, balki real voqelik va ruhiy bosimning natijasidir.",
  historicalContextEn: "Set in late 19th-century Uzbekistan during the holy month of Ramadan. The story highlights the stark inequality between wealthy feudal lords (Dodkho) and bonded maidens, showing how psychological terror—not mythological demons—became fatal.",
  historicalContextJa: "舞台は19世紀末のウズベキスタン、断食月（ラマダーン）の夜。裕福な領主ドッドホと囚われの小間使いウンシンの対立を通じ、妖怪や亡霊ではなく、人間の心に巣食う恐怖こそが真の悲劇を生む様が描かれる。",
  chapters: [
    {
      id: "chapter-1",
      chapterNumber: 1,
      titleUz: "I. Sandal Atrofidagi Bahs va Shart",
      titleEn: "I. The Dispute around the Sandal and the Wager",
      titleJa: "第一章　暖卓の談笑と無謀な賭け",
      paragraphsUz: [
        "Kuz kechalari bir xil bo'lmaydi: gohida osmonda son-sanoqsiz yulduzlar charaqlab, yer yuzini sutdek oydin yoritadi; sokin, salqin havoda yaproqlar ohista shitirlaydi. Gohida esa qop-qora quyuq bulutlar osmonni qoplab, vahimali shamol uvlaydi; izg'irin ko'cha-ko'ylarni chang-to'zonga ko'mib, devor-u darvozalarni silkitadi, ulkan chinor shoxlarini yerga qadar egadi.",
        "Ana shunday sovuq, izg'irinli kuz kechalarining birida Olimbek dodxoning hovlisida g'alati va xavfli bir gap chiqdi. Bu kecha muborak Ramazon oyi edi. Taroveh namozidan qaytgan Olimbek dodxo sandal ustiga solingan qalin sholchaga yastanib, ichkaridagi xonada choy ichib o'tirardi. Uning qarshisida esa o'n sakkiz yoshli, jimgina xizmat qiladigan muloyim va mag'rur Unsin turardi.",
        "Xonada bir necha qarindosh-urug' va xizmatkorlar sandalga oyoqlarini tiqib, issiq ko'rpaga o'ranib o'tirishgan edi. Gurung avval kundalik tashvishlar, Ramazon ro'zasi va Taroveh qiroatlari haqida bordi. So'ng suhbat asta-sekin qorong'i kechalar, arvohlar, chekka qabristonlar va mozorotlarda ko'ringan sharpalar to'g'risiga burildi. O'tirganlardan biri shahar chetidagi eski mozor to'g'risida gapirib, kechalari u yerdan nola-yu faryod tovushlari eshitilishi, hatto eng dovyurak yigitlar ham tunda mozor yaqinidan o'tishga botinolmasligini aytdi.",
        "Olimbek dodxo buni eshitib, istehzoli kulib qo'ydi. U o'zining katta oq sallasi ostidagi qisiq ko'zlarini suzib, gapga aralashdi: «Erkak kishining qo'rqishi uyat, albatta. Ammo xotin xalqining yuragi tovuqning yuragidek bo'ladi. Xotin zoti o'z soyasidan ham cho'chiydi. Agar ularni kechasi mozorga yuborsangiz, darvoza oldidanoq qon qusib o'ladi!»",
        "Hamma dodxoning gapini tasdiqlab, bosh irg'adi. Faqat sandal chetida choy quyib turgan Unsin jim tura olmadi. Uning yosh, mungli, ammo mardona yuzida ajib bir qat'iyat aks etdi. U choynakni dasturxonga qo'ydi-da, past, ammo jarangdor ovozda dedi: «Nega xotinlar qo'rqar ekan? Tirik odam nima uchun o'likdan qo'rqishi kerak? O'liklar o'z qabrlarida sokin yotishadi; yomonlik faqat tirik odamlardan chiqadi. Men kechasi mozorga borishdan zarracha qo'rqmayman.»",
        "Bu gap xonaga toshdek tushdi. Olimbek dodxoning qoshlari chimirilib, zardobli yuzi qizardi. Qaynatilgan choydek qaynab ketgan keksa amaldor qizning bu kutilmagan jur'atidan darg'azab bo'ldi. Hatto dodxoning xotinlari va keksa kampirlar ham yoqalarini ushlab, «Tavba qildim, voy sho'rim, tilingga kishan tushgur!» deb shivirlashdi.",
        "«Sen-a?» dedi Olimbek dodxo zaharxanda qilib. «Sen qo'rqmaysanmi? Yolg'on! Quruq lof urish oson. Agar so'zingda tursang, qani, amalda ko'rsat!»",
        "Dodxo sandal ustida qad rostladi, uning qora baxmal choponining zardo'zi naqshlari moychiroq shu'lasida yaltirab ketdi: «Shartim shunday: hozir mis qumg'on bilan choynakni olasan. Shahar chetidagi eski mozorga, avliyo maqbarasining poyiga borasan. O'sha yerda qamish va tikanlardan olov yoqib, qumg'onda suv qaynatasan. Choynakka ko'k choy damlab, saharlik chaqirilguncha bu yerga — sandal boshiga keltirib qo'yasan!»",
        "Xonadagilar nafaslarini ichlariga yutib qotib qolishdi. Hatto shamol ham shu lahzada deraza tavaqalarini shiddat bilan urib o'tgandek bo'ldi. Olimbek dodxo esa o'zining eng ayyorona va shafqatsiz so'zini qo'shib qo'ydi: «Agar shu ishni uddalab, choyni qaynatib kelsang — mana shu xalq guvoh, senga o'z qo'lim bilan ozodlik qog'ozi yozib beraman! Qullikdan qutulasan, o'z ixtiyoring o'zingda bo'ladi! Ammo borolmasang yoki yo'ldan qaytsang, jazongni butun umr unutmaysan!»",
        "Ozodlik! Bu so'z Unsinning yuragini qafasdagi qushdek gupillatib yubordi. Olimbek dodxoning eshigida yillardan buyon huquqsiz, xo'rlikda o'tayotgan umrining oldida bu buyuk bir najot edi. Ozod inson bo'lish, o'z taqdirining egasi bo'lish umidi har qanday tundan, har qanday qabr zulmatidan ustun keldi.",
        "Unsin qaddi-qomatini tik tutdi va keksa zolimning ko'zlariga tik qarab dedi: «Men roziman, Dodxobobo. Shartingizni qabul qildim. Ozodlik qog'ozimni tayyorlab qo'ying.»"
      ],
      paragraphsEn: [
        "Autumn nights in Central Asia are never uniform: on some, countless stars glitter in the velvet sky, bathing the earth in milk-white moonlight; the cool, still air whispers softly through rustling leaves. On others, ink-black storm clouds swallow the firmament; a terrifying wind howls across the plains, burying the alleyways in swirling dust, rattling courtyard gates, and bending the ancient plane trees down to the dirt.",
        "It was on just such a bitter, tempestuous autumn night that an extraordinary and perilous matter arose within the courtyard of Olimbek Dodkho. It was the holy month of Ramadan. Having returned from the Tarawih night prayers at the mosque, Olimbek Dodkho sat lounging upon thick carpets draped over the sandal—the traditional charcoal-heated hearth table—sipping hot tea inside the inner quarters. Before him stood Unsin, an eighteen-year-old maiden whose quiet grace concealed an unyielding spirit.",
        "Several relatives and household servants sat huddled around the sandal, their legs tucked beneath the heavy quilted blankets to ward off the chill. At first, the conversation drifted lazily through mundane concerns, the trials of the fasting day, and the melodic cadence of the evening’s Qur'anic recitations. Gradually, however, the talk turned toward dark nights, wandering spirits, desolate graveyards, and the eerie phantoms rumored to haunt the burial grounds. One of the men spoke of the ancient cemetery at the desert’s edge, swearing that mournful weeping could be heard there after midnight, and that even the bravest horsemen dared not traverse its periphery in the dark.",
        "Hearing this, Olimbek Dodkho let out a condescending chuckle. Narrowing his haughty eyes beneath his grand white turban, he sneered: “For a man to feel fear is shameful enough. But the heart of womanhood is no stouter than that of a fledgling sparrow. Women tremble before their own shadows. Send a woman to the graveyard at midnight, and she would spit blood from sheer fright before she ever reached the threshold!”",
        "The assembled guests nodded in dutiful agreement, anxious to flatter the powerful lord. Only Unsin, who was refilling the teacups at the edge of the hearth, could not hold her tongue. Across her youthful, sorrowful face passed a flash of extraordinary pride. Setting the teapot upon the cloth, she spoke in a low yet bell-clear voice: “Why must women be cowards? Why should the living fear the dead? The deceased lie peaceful and silent within their earthen graves; harm comes only from the living. I would not fear visiting the cemetery at night.”",
        "Her words struck the room like a thunderclap. Olimbek Dodkho’s brow contracted; his sallow, haughty face flushed with sudden fury. The old aristocrat, accustomed to absolute subservience, was incensed by this bonded servant girl’s audacity before his kin. The matriarchs and older women gasped, clutching their collars in dismay: “Heaven forbid! May your tongue be tied, girl! What madness do you utter?”",
        "“You?” Olimbek Dodkho hissed, his tone dripping with venom. “You claim you know no fear? Lies! Boasting by a warm fire is cheap. If your courage is true, prove it with deeds!”",
        "The Dodkho straightened his back upon the cushions, the gold thread of his dark velvet chapan gleaming menacingly in the flickering wick-lamp: “Here is my wager: take the brass kettle and teapot this very instant. Walk alone to the ancient cemetery on the outskirts of the town, directly to the saint’s mausoleum. There, gather dry reeds and desert thorns, kindle a fire, and boil water in the kettle. Steep fresh green tea in the pot and carry it back here—right to this sandal—before the dawn herald sounds for the suhoor!”",
        "A breathless hush fell over the room. Even the roaring gale outside seemed to strike the wooden shutters with renewed ferocity. Olimbek Dodkho then added his most cunning and merciless condition: “If you endure the ordeal and bring me that tea, then by God and this holy month of Ramadan, I shall personally write your deed of freedom! You will be emancipated—free to live as your own master! But if you shrink back or flee into the night, your punishment shall follow you to your grave!”",
        "Freedom! The word rang through Unsin’s soul like a triumphant bell. In the face of a lifetime spent in helpless servitude under Dodkho’s cold dominion, this single piece of paper was salvation itself. The promise of being a free human being, sovereign over her own body and fate, outweighed the terror of any midnight storm or desolate tomb.",
        "Standing tall, her dark eyes meeting the tyrant’s gaze without wavering, Unsin answered: “I accept your condition, Dodkho-bobo. Prepare the ink and paper of my freedom.”"
      ],
      paragraphsJa: [
        "中央アジアの秋の夜は、常に同じ相貌を見せるわけではない。ある夜には無数の星々が漆黒の天蓋に瞬き、地表を乳白色の月光で満たし、静まりかえった冷気の中で木の葉がさやかに擦れ合う。だがまたある夜には、重く垂れこめた暗雲が空を覆い尽くし、荒れ狂う嵐が野を吹きすさぶ。冷たい木枯らしは路地に砂塵を巻き上げ、土壁や門扉を激しく揺るがし、樹齢数百年の巨大なプラタナス（チノール）の枝を大地すれすれまで撓ませるのだ。",
        "まさにそのような寒風吹き荒ぶ秋の夜、豪族オリムベク・ドッドホの屋敷で、思いもよらぬ不穏な出来事が持ち上がった。折しもその夜は聖なるラマダーン（断食月）であった。モスクでのタラウィーフ（夜間特別礼拝）を終えて帰宅したオリムベク・ドッドホは、奥座敷でサンダル（炭火の炉の上に厚い毛布を掛けた伝統の暖卓）の前に腰を据え、熱い茶をすすっていた。その正面には、静かに給仕を務める十八歳の小間使い、誇り高く美しい娘ウンシンが控えていた。",
        "座敷には親族や使用人たちが暖卓に足を差し入れ、寒さをしのぎながら談笑していた。話は最初、日常の瑣事や断食の労苦、礼拝の誦経について巡っていたが、やがて話の種は夜の闇、徘徊する亡霊、人里離れた墓地、そして古い霊廟に現れるという奇怪な影の噂へと移っていった。ひとりの客が、街外れの古い墓地について語り始めた。真夜中を過ぎるとそこからは身も凍るようなすすり泣きが聞こえ、いかに剛毅な若武者とて、夜陰に乗じてその傍らを通る勇気を持つ者はおらぬと。",
        "それを聞いたオリムベク・ドッドホは、嘲るような笑みを漏らした。大きな白のターバン（サッラ）の下から細い目を光らせ、彼は傲慢に言い放った。「男が怯えるだけでも面汚しだが、女の心根など雀の心臓にも劣る。女という種族は己の影にすら慄くものだ。夜の墓場へ送り出せば、門に辿り着く前に恐怖のあまり血を吐いて息絶えるに決まっておる！」",
        "客たちは権勢を誇る領主に諛い、一斉に頷いた。しかし、暖卓の端で茶器を控えていたウンシンだけは、黙って聞き流すことができなかった。その若く物憂げな顔に、毅然とした光が宿った。彼女は茶器を卓に置き、低く澄んだ声で遮った。「なぜ女が臆病だと決めつけるのですか？ 生きている人間が、なぜ死者を恐れねばならないのでしょう。死者は己の土の中で静かに眠っているだけです。害をなすのは常に生きている人間ではありませんか。私は夜の墓場など、少しも恐ろしくはありません」",
        "その言葉は、座敷に雷鳴のように落ちた。オリムベク・ドッドホの眉がつり上がり、傲慢な顔が怒りで朱に染まった。絶対の服従を当然としてきた老領主は、囚われの身である小間使いの娘が、親族一同の前で堂々と反論したことに激怒した。居合わせた女衆や年配の婆たちは胸元をかきむしり、「おお、アッラーよ！ なんという恐れ多いことを。口を慎みなさい、小娘！」と震え上がった。",
        "「お前がか？」オリムベク・ドッドホは毒を含んだ声で嘲笑った。「お前が恐ろしくないと申すのか？ 虚勢を張るな！ 暖かい炉端で大口を叩くのは誰にでもできる。言葉に嘘がないというなら、今ここで証明してみせよ！」",
        "ドッドホは暖卓の上に身を起こした。金糸で刺繍された暗いベルベットの外套（チャパン）が、油灯の灯火に不気味にきらめいた。「余の条件を聞け。今すぐ真鍮の湯沸かし（クムガン）と陶器の急須（チョイナク）を持て。街外れの古い墓地、聖者のドーム霊廟の足元までひとりで歩いて行くのだ。そこで枯れた葦や茨を拾い集めて火を起こし、湯を沸かせ。熱い緑茶を淹れ、夜明けのスフール（断食前の夜食）の合図が鳴るまでに、ここへ――この暖卓の前まで持ち帰れ！」",
        "座敷の者たちは息を呑み、金縛りに遭ったようになった。外の嵐が一層激しく吹き荒れ、窓の雨戸を打ち鳴らした。そしてオリムベク・ドッドホは、最も残酷で甘美な条件を口にした。「もしこの試練を果たし、沸き立つ茶を持ち帰ったならば――ここにいる者たちを証人とし、余の自筆で『解放の証書（オゾドリク・コゴズィ）』を授けてやろう！ 自由の身となり、誰の指図も受けぬ人間として生きてゆくがよい。だがもし逃げ出すか、途中で引き返したなら、その罪過を一生忘れられぬよう痛罵の罰を下すぞ！」",
        "自由！ その言葉は、籠の鳥の胸に響く鐘のようにウンシンの胸を打ち震わせた。ドッドホの冷酷な屋敷で、何一つ権利を持たず、虐げられて過ごす果てしない年月と比べれば、この一枚の証書は天からの救済であった。ひとりの自由な人間となり、己の足で己の人生を歩む希望は、暗夜の嵐よりも、荒涼たる墓場の闇よりも遥かに重かった。",
        "ウンシンは凛として背筋を伸ばし、老いた暴君の眼差しを正面から見据えて答えた。「そのお約束、謹んでお受けいたします、ドッドホ様。どうぞ私を解放する証書をご用意なさってお待ちください」"
      ]
    },
    {
      id: "chapter-2",
      chapterNumber: 2,
      titleUz: "II. Bo'ronli Tunga Qadam va Qabriston Yo'li",
      titleEn: "II. Into the Storm and the Cemetery Path",
      titleJa: "第二章　嵐の闇夜への出立と墓地への道",
      paragraphsUz: [
        "Unsin o'rnidan turib, xonadan chiqdi. Ayollar uning orqasidan ergashib, yo'ldan qaytarishga urindilar: «Tentak qiz, nobud bo'lasan! Qop-qora tunda mozorotda jinlar o'ynaydi, lahadlar o'pirilib yotibdi! Dodxoning shartidan voz kech, uzr so'ra!» Ammo Unsin ularning yig'i-sig'isiga quloq solmadi. Uning ko'z o'ngida faqat bitta narsa — ozodlik nuri charaqlardi.",
        "U o'zining an'anaviy uzun adras ko'ylagi va keng lozim (izor) shimi ustidan qalin jiyakli qora ro'molini mahkam bog'ladi. So'ngra burchakda turgan og'ir mis qumg'onga sovuq suv to'ldirdi, yoniga chinni choynakni oldi. Ko'chaga chiqish uchun o'zining kulrang-moviy paranjisini yelkasiga tashladi, qora ot qilidan to'qilgan qattiq chachvonni yuziga tushirdi. Bu kiyim o'sha davr xotin-qizlarining nafaqat libosi, balki butun dunyodan to'sib turuvchi og'ir pardasi edi.",
        "Unsin og'ir o'ymakor yog'och darvozani g'iyqillatib ochdi. Shu zahoti uning yuziga yopilgan chachvonni muzdek sovuq shamol urdi, paranjisining etaklari qanotdek havoga ko'tarildi. Eshik ortida zarracha yorug'lik yo'q edi; faqat uzoq-uzoqlarda itlarning uvillashi va qorong'u osmonda qora bulutlarning shiddatli harakati sezilardi. Qiz darvozani yopib, tizzalarigacha chang-to'zon to'zg'itayotgan kimsasiz tor ko'chaga qadam qo'ydi.",
        "Har bir qadam dahshatli bir sinov edi. Qorong'ilik shunchalik quyuq ediki, qo'lini cho'zsa ko'rinmasdi. Izg'irin shamol uning quloqlarida goh bolaning yig'isidek, goh och bo'rining uvillashidek ingrardi. Loy devorlarning soyasi har tomondan ustiga bostirib kelayotgandek tuyulardi. O'ng qo'lidagi toshday og'ir mis qumg'on va chap qo'lidagi choynak uning qadamlarini sekinlashtirar, ammo qiz bir lahza ham to'xtamasdi.",
        "Shahar orqada qoldi. Bo'shliq, qir-adirlar va nihoyat — qadimiy mozorotning qoramtir silueti ko'rindi. Bu yerda asrlar bo'yi dafn etilgan avlodlarning xoklari yotardi. Yo'l chetidagi bahaybat chinorlar shiddatli shamol zarbidan g'ijirlab, dahshatli mahluqlardek qo'llarini silkitardi. Ularning qurigan yirik barglari havoda charx urib, qizning yuziga, chachvoniga tarsaki kabi kelib urilardi.",
        "Osmondagi qalin bulutlar bir lahzaga yorilib, muzdek oqargan oy yuzi ko'rindi. Bu sovuq nur ostida qabristonning mudhish manzarasi ochildi: oddiy, bezaksiz tuproq qabrlar, o'nqir-cho'nqir go'rlar, nuragan paxsa devorlar va markazda qad ko'targan pishiq g'ishtli qadimiy maqbara — avliyoning qabri. Qabristonda birorta ham tosh xoch yoki g'arbiy haykal yo'q edi; sof islomiy an'anaga ko'ra, qabrlar tuproq tepaliklaridan iborat bo'lib, hamma narsa foniy dunyoning o'tkinchiligini eslatib turardi.",
        "Unsinning yuragi qinidan chiqqudek gupillardi. U ichida bilgan barcha suralarini, «Oyat al-Kursiy» va kalimalarini qayta-qayta pichirlab o'qirdi. Oy nuri yana qora bulutlar qa'riga g'arq bo'ldi va atrofni yana qorong'ulik zindoni qopladi. Unsin tosh va qabrlar orasidan ehtiyotkorlik bilan yurib, maqbaraning baland g'ishtin ravoqi poyiga yetib keldi."
      ],
      paragraphsEn: [
        "Unsin rose and stepped out into the courtyard corridor. The women rushed after her, clutching her sleeves, desperately pleading with her to abandon the madness: “Senseless child! You will perish! Demons roam the graves in this pitch darkness; the earth is riddled with collapsed pits! Renounce this wager, beg the Dodkho for forgiveness!” But Unsin turned a deaf ear to their lamentations. Before her inner eye shone only one singular, dazzling beacon—freedom.",
        "Over her traditional adras silk dress and loose trousers, she tightly knotted her dark headscarf. Stepping into the storeroom, she filled the heavy brass kettle with cold well water and took the ceramic teapot. To venture into the public night, she draped her modest grey-blue paranji over her head and pulled down the stiff chachvon—a dense veil handwoven from black horsehair that shielded her face. In that feudal era, this garment was both armor and prison, cutting women off entirely from the visible world.",
        "Unsin unlatched the heavy, carved walnut courtyard gate; it swung open with a mournful groan. Instantly, a freezing gust of wind whipped against her horsehair veil, billowing the heavy folds of the paranji like dark sails. Beyond the gate lay an ocean of total obscurity; not a single lantern flickered in the alleys. Only the mournful barking of distant street hounds and the violent churning of cloudbanks disturbed the void. Pulling the door shut behind her, she took her first step into the desolate, wind-swept lane.",
        "Every single yard was an agonizing test of fortitude. The night was so pitch-black that she could not see her own outstretched hand. The howling gale moaned in her ears like the wailing of an abandoned infant, then rose to the predatory snarl of a wolf. The jagged mudbrick walls flanking the alley seemed to lean inward, threatening to crush her. The brass kettle, brimming with water, weighed down her arm; yet despite her shivering frame, she never once broke her stride.",
        "The edge of the settlement fell away. The open steppe widened, and at last, the brooding silhouette of the ancient Muslim cemetery loomed before her. Here lay generations of the dead beneath centuries of undisturbed soil. Towering oriental plane trees—ancient chinor giants—groaned and shuddered in the gale, their twisted boughs thrashing against the sky like the flailing limbs of monstrous specters. Their dry, withered leaves flew through the darkness, striking her face and veil like sharp slaps.",
        "Suddenly, a rift tore through the ceiling of heavy clouds, and the cold, unblinking eye of the autumn moon peered down. In its eerie silver sheen, the cemetery lay revealed: humble, unadorned Muslim earth mounds aligned toward Mecca, sunken hollows, crumbling mud enclosure walls, and in the center, the monumental baked-brick dome of the saint’s mausoleum. There were no stone statues, no ornate Celtic crosses, no modern ostentation—only the solemn, stark simplicity of Islamic burial grounds, a quiet testament to the transience of mortal life.",
        "Unsin’s heart thudded against her ribs with terrifying force. Moving her dry lips beneath the veil, she recited every prayer she remembered: Ayat al-Kursi, the verses of protection, seeking refuge from the horrors of the unseen. The clouds closed once more, plunging the earth back into impenetrable gloom. Feeling her way step by step between the silent earth mounds, Unsin finally reached the sheltered brick threshold of the ancient mausoleum."
      ],
      paragraphsJa: [
        "ウンシンは立ち上がり、座敷を後にした。女衆が慌てて後を追い、彼女の袂に縋りついて必死に制止しようとした。「愚かな娘や、命を捨てる気かい！ こんな漆黒の闇の中、墓場にはジン（魔物）が跋扈し、崩れた墓穴が口を開けて待っているんだよ！ 賭けなど取り消して、ドッドホ様に慈悲を乞うておくれ！」だが、ウンシンは彼女らの涙混じりの嘆願に耳を貸さなかった。彼女の瞳の奥にはただひとつの光――自由への渇望だけが燦然と輝いていたのだ。",
        "彼女は伝統的な絣織り（アプラス）の長衣とゆったりとしたズボン（イゾル）の上から、黒い頭巾をしっかりと結び直した。そして隅の物置から重厚な真鍮の湯沸かし（クムガン）を取り出して冷たい井戸水を満たし、素焼きの急須（チョイナク）を手に取った。夜の街へ出るため、彼女は灰青色のパランジャ（頭から足首までを覆う外套）を被り、馬の尾毛で緻密に編まれた黒い顔覆い（チャチヴォン）を顔の前に下ろした。当時の女性にとって、この装束は慎みの象徴であると同時に、外界から己を隔絶する重い檻でもあった。",
        "ウンシンが彫刻の施された重い胡桃材の大門を開けると、蝶番が悲しげな軋み音を立てた。その瞬間、身を切るような寒風が馬毛の帳を打ち据え、パランジャの裾が暗い翼のように激しく翻った。門の外には一筋の明かりすらなく、ただ果てしない闇が広がっていた。遠くで吠える野犬の声と、天蓋を千切れて走る黒雲の気配だけがそこにあった。門を背後で固く閉ざし、彼女は砂埃の舞い狂う無人の狭い路地へと第一歩を踏み出した。",
        "一歩進むごとに、それは身の縮むような試練であった。闇は深く、伸ばした己の手すら見えない。耳元で唸る木枯らしは、時には捨て子のむせび泣きのように、時には飢えた狼の遠吠えのように響いた。両側に迫る土壁の影が、まるで彼女を押し潰そうと身を乗り出してくるかのようだった。水で満ちた真鍮の湯沸かしが右腕に重くのしかかり、冷気で足が凍えそうになりながらも、彼女は決して歩みを緩めなかった。",
        "やがて街外れの民家が途絶えた。開けた荒野の先に、古代のイスラム墓地の不気味な輪郭が立ち現れた。そこには幾世代にもわたる死者たちが、冷たい大地の下に眠っていた。街道沿いに聳える樹齢数百年の巨大なプラタナス（チノール）が嵐に揉まれて身も世もなく軋み、そのねじくれた大枝は、闇夜に悶える怪物の腕のように蠢いていた。乾燥しきった大きな枯葉が旋風に巻き上げられ、彼女の顔とチャチヴォンを平手打ちのように激しく叩いた。",
        "ふいに、厚い雲の裂け目から、冷たく冴えわたる秋の満月が姿を現した。その凄惨な白銀の光に照らされ、イスラムの墓地の全景が浮かび上がった。メッカの方角を向いた無数の素朴な土盛り、風化した土壁、そして中央に厳然と聳える、古びた赤煉瓦造りのドーム型霊廟。そこには西欧の墓地に見られるような十字架も、壮麗な石像も存在しない。ただひたすらに簡素で、現世の儚さを無言で告げるイスラムの伝統に則った土の塚が広がっていた。",
        "ウンシンの心臓は、肋骨を突き破らんばかりに激しく鼓動していた。彼女は乾いた唇を動かし、幼い頃から教えられたクルアーンの聖句「アーヤト・アル＝クルスィー（玉座の詩句）」を幾度も幾度も唱え続けた。月は再び暗雲の深淵へと呑み込まれ、天地は再び漆黒の闇に閉ざされた。ウンシンは土塚と敷石の間を慎重に手探りで進み、ついに古代の霊廟の堂々たる煉瓦アーチの足元へと辿り着いた。"
      ]
    },
    {
      id: "chapter-3",
      chapterNumber: 3,
      titleUz: "III. Maqbara Poyidagi Olov va Choy Qaynatish",
      titleEn: "III. The Fire beside the Mausoleum and the Brewing of the Tea",
      titleJa: "第三章　霊廟の足元の焚き火と煮えたぎる茶",
      paragraphsUz: [
        "Maqbara devori shamolni birmuncha to'sar, ammo sovuq qoramtir toshlardan muzdek zax taralardi. Unsin nafasini rostladi. O'ng qo'li uvishib qolgan, tizzalari titrardi. U mis qumg'onni va choynakni maqbara ostonasidagi silliq tosh ustiga qo'ydi. Bu qorong'ulikda va dahshatli shamolda og'ir paranji va qora chachvon ichida harakat qilishning iloji yo'q edi — shamol uning etagini tortqilar, yuzidagi ot qilidan to'qilgan to'r esa harakatiga xalaqit berardi.",
        "Unsin qat'iy bir harakat bilan paranjisi va chachvonini boshidan yechib oldi. Uni ehtiyotkorlik bilan buklab, maqbaraning pishiq g'ishtli burchagiga, shamol tegmaydigan chuqurlikka qo'ydi. Endi u faqat yupqa atlas ko'ylak, lozim va ro'molida qolgan edi. Kuzgi tunda bu kiyimda turish suyak-suyakdan o'tuvchi sovuq degani edi, ammo harakat qilish ancha yengillashdi.",
        "U tezda ishga kirishdi. Maqbara atrofidagi zulmat qo'ynida paypaslanib, o'tin qidira boshladi. Qo'llari quruq tuproqni, o't-o'lanlarni timdaladi. U qabriston devorlari bo'yida o'sgan qovjiragan qamish poyalarini, yantoq tikanlarini, chinorlarning shamol uchirib tushirgan quruq shoxlarini yulib, quchoqlab yig'a boshladi. Tikanlar uning nozik barmoqlarini tilib, qonatar, ammo Unsin og'riqni sezmasdi. Uning butun vujudi shoshilardi: tezroq olov yoqish, suvni qaynatish va bu dahshatli joydan qutulish!",
        "U yig'gan quruq shox-shabba va qamishlarni maqbaraning shamoldan panaroq burchagiga to'pladi. Cho'ntagidan chaqmoqtosh va qov chiqarib, temir bilan chaqmoqqa urdi. Chaq-chuq! Zulmatda bir necha bor yorqin moviy uchqun sachradi. Nihoyat, uchqun qovga ilashdi. Unsin uni quruq qamish barglariga qo'yib, ohista puflay boshladi. Uning iliq nafasi bilan uchqun qizardi, tutadi va birdan — «lip» etib tillarang alanga ko'tarildi!",
        "Alanga quruq qamishlarga o'tib, baland ko'tarildi. Qisqa vaqt ichida kichik, ammo qizg'in gulxan hosil bo'ldi. Olovning iliq, to'q sariq shu'lasi qadimiy maqbaraning o'yilgan naqshli pishiq g'ishtlariga, ravoqlariga va Unsinning qizarib ketgan botir yuziga tushdi. Gulxan atrofidagi zulmatni bir necha qadam nariga haydadi. Olov shitirlab, tikanlar qarsillab yona boshladi.",
        "Unsin o'choqdek qilib ikkita katta g'ishtni olovning ikki chetiga qo'ydi-da, suv to'la og'ir mis qumg'onni ustiga o'rnatdi. Olov tillari qumg'onning qoraygan qornini yalay boshladi. Shamol tepada uvillab, chinor shoxlarini yulqilar, gulxandan uchgan mayda uchqunlar qorong'u osmonga qarab otilardi. Qiz gulxan yonida cho'kkalab o'tirgancha, ikki qo'lini olovga tutib isinar va qumg'onga termulib, uning tezroq qaynashini iltijo qilardi.",
        "Bir necha daqiqadan so'ng qumg'on ichida suv chuldiray boshladi. Avval mayin shivirlash eshitildi, so'ngra qopqoq ostidan shiddat bilan oppoq bug' otilib chiqdi. Suv qaynab toshdi! Unsin darhol chinni choynakka cho'ntagidagi tugundan bir chimdim ko'k choy tashladi. Qaynoq qumg'onni dastasidan mato bilan ushlab, choynakka shildirab turgan qaynoq suvni quyib to'ldirdi. Choynakning qopqog'ini yopib, dam yeb yetilishi uchun issiq kul chetiga bir daqiqa qo'ydi.",
        "Ish bitdi! Shart bajarildi! Unsin bu dahshatli zulmat qa'rida, o'liklar maskanida choy qaynatishga muvaffaq bo'ldi! Endi faqat qaytish, dodxoning oldiga sandalga borib choyni qo'yish va o'zining ozodlik qog'ozini olish qolgan edi. Uning ko'nglida mislsiz bir quvonch va g'alaba nashidasi paydo bo'ldi."
      ],
      paragraphsEn: [
        "The sheer brick wall of the mausoleum offered some meager shelter against the biting wind, though the damp chill emanating from the ancient masonry seeped deep into the bones. Unsin leaned against the wall to catch her breath. Her right arm was numb from the kettle's weight; her knees shook uncontrollably. She placed the brass vessel and teapot upon the smooth stone threshold. Moving within the voluminous paranji and thick horsehair chachvon in this howling squall had become impossible—the wind caught the cloth like a mainsail, blinding her and dragging her backward.",
        "With a decisive motion, Unsin cast off her paranji and face veil. Folding the heavy garment with care, she placed it deep within an arched alcove of the mausoleum wall where the gale could not reach it. She stood now only in her light silk dress, loose trousers, and headscarf. In the freezing autumn air, this sparse clothing offered no defense against the cold, yet her limbs were finally unburdened and free to move.",
        "She set to work without wasting a single second. Groping through the pitch darkness around the base of the tombs, her bare fingers clawed at the frozen earth. She tore up dry steppe reeds growing along the cemetery wall, snapped brittle thorny camel-bush, and gathered armfuls of fallen plane-tree twigs. Thorns tore mercilessly into her tender flesh, drawing thin ribbons of blood, but Unsin felt no pain. Her entire existence was consumed by a feverish urgency: rekindle the flame, boil the water, and escape this realm of shadows!",
        "She piled the tinder and twigs in the most sheltered corner of the brick foundation. Extracting her flint, steel, and a scrap of dried tinder from her pocket, she struck the metal against stone. Clink! Clink! Sharp blue sparks shattered the dark. On the third strike, a spark caught the fibrous tinder. Cradling it gently in a nest of dry reed husks, Unsin blew upon it with steady, warm breath. The ember glowed orange, thin smoke coiled upward, and suddenly—with a soft whoosh—a bright golden flame leaped into the air!",
        "The flame greedily devoured the dry reed stalks. Within moments, a crackling campfire flared into life. Its warm, amber luminescence danced across the weathered terracotta bricks, the arched portal, and Unsin’s flushed, resolute face, driving the terrifying shadows back into the dark. Twigs snapped and embers sizzled cheerfully against the roar of the wind.",
        "Arranging two ancient bricks on either side of the blaze, Unsin balanced the heavy brass kettle directly over the dancing flames. Golden tongues of fire licked the dark belly of the vessel. The tempest continued its wrath overhead, tossing the boughs of the plane trees, while showers of bright sparks spiraled into the nocturnal abyss. Crouched beside the hearth, Unsin cupped her trembling hands over the fire, staring intently at the brass spout and praying for the water to reach a boil.",
        "Presently, a low murmur arose from within the kettle. The murmur grew into a steady hiss, and soon, a plume of scalding white steam shot violently from beneath the lid. The water was boiling! Without hesitation, Unsin took a pinch of dry green tea from a small cloth bundle in her sash and dropped it into the ceramic teapot. Grasping the hot handle of the kettle with the edge of her scarf, she poured the bubbling water into the teapot until it was brimming. She replaced the lid, resting the teapot upon the hot embers to steep.",
        "It was done! The impossible task was fulfilled! Here, in the deepest maw of the midnight cemetery, she had kindled fire and brewed the tea! All that remained was to retrace her steps, deliver the steaming brew to the sandal before Olimbek Dodkho, and claim her deed of freedom. An overwhelming surge of triumph and relief flooded her heart."
      ],
      paragraphsJa: [
        "霊廟の頑丈な煉瓦壁は木枯らしを幾分か遮ってくれたが、古びた石組みから立ちのぼる湿った冷気は骨の髄まで染み通った。ウンシンは壁に背をあずけ、荒い息を整えた。湯沸かしを提げていた右腕は麻痺したように強張り、膝は震えていた。彼女は真鍮の湯沸かしと急須を、霊廟の敷石の上に置いた。この吹き荒れる嵐と漆黒の闇の中、裾の広がった重いパランジャをまとい、馬毛の帳を垂らしたまま作業をすることなど不可能であった。風は布を帆のように煽り、顔の帳は足元を隠してしまう。",
        "ウンシンは決然とした動作で、頭からパランジャとチャチヴォンを脱ぎ捨てた。それを丁寧に折り畳むと、風の当たらない霊廟の煉瓦アーチの窪みへと押し込んだ。彼女の身にまとうものは、今や薄い絹の絣長衣とズボン、そして頭の被り布だけとなった。秋の夜の凍てつく大気の中でその姿は寒さに晒されることを意味したが、手足は劇的に身軽になり、自由を取り戻した。",
        "彼女は一刻の猶予も惜しんで作業に取り掛かった。墓塚の周囲の闇を手探りで這い回り、燃料を探し求めた。荒れ果てた墓地の土壁沿いに生えた乾燥した葦の茎を引き抜き、枯れ果てた茨の棘を引きちぎり、プラタナスの大木から落ちた小枝を腕いっぱいに抱え込んだ。鋭い棘が彼女の指先を裂き、赤い血を滲ませたが、ウンシンは痛みをまったく感じなかった。彼女の魂のすべては、ただひとつの衝動に支配されていた――一刻も早く火を熾し、湯を沸かし、この恐ろしい場所から立ち去ること！",
        "集めた小枝と葦を、霊廟の礎石の最も風の遮られた隅に積み上げた。懐から火打石と火打金、そして乾燥させた火口（ほくち）を取り出すと、カチッ、カチッと打ち合わせた。闇の中に青白い火花が鋭く散った。三度目に、火花が火口の繊維に宿った。それを乾燥した葦の屑に包み、ウンシンは口元に寄せて温かい息を静かに吹き込んだ。火種は赤く輝き、細い煙を立ち上らせ、そして次の瞬間――パッと黄金色の焔が噴き上がった！",
        "焔は貪欲に枯れ葦を舐め尽くし、瞬く間に勢いよく燃え盛る焚き火となった。温かな橙色の火照りが、古代霊廟の幾何学模様が刻まれた赤煉瓦を、アーチの陰影を、そしてウンシンの紅潮した勇気ある横顔を鮮やかに照らし出した。火の光は、周囲を取り囲んでいた亡霊のような深い闇を一歩後退させた。乾いた枝がパチパチと心地よい音を立てて爆ぜ、風の唸りと交錯した。",
        "ウンシンは焚き火の両脇に二つの古煉瓦を据え、水で満ちた重い真鍮のクムガンをその上に据え付けた。黄金の炎が黒ずんだ薬缶の腹を舐め回した。頭上では嵐が狂気のように吹き荒れ、プラタナスの巨木を揺さぶり、火の粉が暗黒の夜空へと舞い上がっていった。ウンシンは火の傍らにしゃがみ込み、震える両手をかざして温もりを求めながら、湯沸かしの注ぎ口を凝視し、水が早く煮えたぎることを心の中で祈り続けた。",
        "やがて、薬缶の底から低く微かな歌声のような水音が響き始めた。その音はやがて激しい唸りへと変わり、注ぎ口と蓋の隙間から、熱い白い蒸気が勢いよく噴き出した。湯が沸いたのだ！ ウンシンは帯の間から取り出した布包みから、一掴みの乾燥した緑茶の葉を急須に投じた。そして長衣の端で熱い取っ手を握り、泡立つ熱湯を急須の縁まで注ぎ入れた。急須に蓋をし、茶葉を蒸らすために熱い灰の傍らにそっと置いた。",
        "成し遂げたのだ！ 不可能と思われた条件を果たしたのだ！ 恐ろしい死者の領域で、この暗夜の墓場で、彼女は火を熾し、湯を沸かし、茶を淹れたのだ。あとはこの急須を抱えて屋敷へ戻り、ドッドホの暖卓の上に差し出し、自由の証書を手に入れるだけだ。ウンシンの胸の底から、未だかつて味わったことのない誇りと勝利の喜びが湧き上がった。"
      ]
    },
    {
      id: "chapter-4",
      chapterNumber: 4,
      titleUz: "IV. O'pirilgan Lahad va Dahshatli Hamla",
      titleEn: "IV. The Collapsed Pit and the Onslaught of Terror",
      titleJa: "第四章　崩れ落ちた墓穴と戦慄の跳躍",
      paragraphsUz: [
        "Qabriston uzra shamol yangi bir qutqu bilan uvilladi. Gulxan asta-sekin pasayib, qizil cho'g'larga aylandi. Qorong'ilik yana o'z hududini kengaytirib, maqbara devorlariga yopishib kela boshladi. Unsin atrofga qaradi. Qo'rquv, daqiqalar o'tgan sari, qizib turgan tanasiga yana sovuq ilondek o'rmalab kira boshladi. Olov o'chgach, bu yerda yana qolib bo'lmasdi.",
        "U gulxan cho'g'larini oyog'i bilan tuproq sepib o'chirdi — ehtiyotkorlik bilan shamol cho'g'ni uchirib yong'in chiqarmasin deb harakat qildi. So'ngra o'ng qo'liga damlangan qaynoq choynakni, chap qo'liga esa hali ham issiq bo'lgan og'ir mis qumg'onni oldi. Ammo shoshib qolganidan, qorong'ilik va vahima zo'ridan u maqbara burchagidagi chuqurlikda qolgan paranjisi va chachvonini olishni butunlay unutdi!",
        "U orqasiga qaramay, qabriston darvozasi tomon shoshib keta boshladi. Ikki qo'li band, qadamlari tez va notekis edi. Shamol uning atlas ko'ylagini vujudiga yopishtirar, sovuq havo quloqlarini qirqardi. Qabrlar orasidagi tor yo'lakcha g'ira-shira ham ko'rinmasdi. Unsin faqat bitta narsani — uzoqdagi shahar chiroqlarini, qutulish yo'lini ko'zlar edi.",
        "To'satdan — kutilmaganda, hech qanday ogohlantirishsiz — uning chap oyog'i ostidagi tuproq g'ovlab ketdi! Qars etgan mudhish tovush chiqdi-da, quruq yer o'pirilib, ostidagi bo'shliqqa quladi. Bu qadimiy, yillar davomida nurlab, yomg'ir suvlari yuvib ketgan bo'sh go'r — lahad edi! Unsinning chap oyog'i tizzasigacha, hatto sonigacha sovuq, chirigan loy va qabr ichiga chuqur botib tushdi!",
        "«Voy!» degan dahshatli qichqiriq qizning bo'g'zidan otilib chiqdi. U muvozanatini yo'qotib, yerga qulashiga bir baxya qoldi. Ikki qo'lida qaynoq choynak va qumg'on bo'lgani uchun yerga tayana olmasdi. Qorong'i lahad qa'ridan uning oyog'ini kimdir, qandaydir sovuq murda qo'llari bilan ushlab tortayotgandek tuyuldi! Uning miyasini aql bovar qilmas vahima qopladi.",
        "Unsin joni boricha o'zini orqaga tashladi va zo'r berib oyog'ini yerdan tortib oldi. Ammo chuqurlikdagi yopishqoq botqoq va loy uning baxmal kalishini mahkam yutib qolgan edi. Oyog'i chuqurlikdan chiqdi, lekin bir oyog'i yalang'och, yupqa paypog'i bilan qolgan edi. Uning yalang oyog'i muzdek yerga, qabristonning tikanli tuprog'iga tegdi.",
        "Endi uning butun vujudi dahshatdan titrardi. Qabr ichiga tushgan oyog'i, qorong'ulik, yo'qolgan kalish, ortda qolgan paranji... U orqasiga qaytib kalishini izlay olmasdi, bunga na kuchi, na yuragi dosh berardi. Bir oyog'ida oqsab, yalang oyog'iga botayotgan tikanlarga qaramay, oldinga qarab talpindi.",
        "Shu lahzada — eng mudhish lahzada — maqbaraning baland toqi ostidan g'alati, vahimali bir chiyillash eshitildi. Toshlar orasidan nimadir qimirladi. Qorong'ilik qa'ridan, tomdan to'g'ri uning ustiga qora, junli bir maxluq uchib tushdi! Bu maxluq qattiq qiyqirib, to'g'ri Unsinning yelkasiga sakrab mindi va o'zining sovuq panjalari bilan qizning bo'yniga, ko'ylagining yoqasiga mahkam changal soldi!",
        "Bu qandaydir iblis, jin yoki arvoh emas edi. Bu shaharga kelgan sayyor dorbozning qochib ketgan, qabristondagi maqbara toqiga panoh topib kirib olgan va sovuqdan junjikib, yangi o'chgan gulxan iliqligiga intilgan beozor maymuni edi. Ammo qiz buni qayerdan bilsin?!",
        "Qorong'u qabristonda, lahadga tushib chiqqan, yuragi yorilish darajasiga yetgan o'n sakkiz yoshli qizning yelkasiga sakragan bu maxluq — uning tasavvuridagi barcha dahshatlarning jamlangan timsoli edi. Unsinning bo'g'zidan tovush chiqmadi. Uning ko'zlari kosasidan chiqqudek bo'lib chaqchaydi, nafasi tomog'iga tiqildi. Uning murg'ak yuragi bu mislsiz, shafqatsiz dahshatning og'irligini ko'tara olmadi.",
        "Unsin chayqalib ketdi. Qo'lidagi chinni choynak jaranglab toshlarga urilib chil-chil bo'ldi; issiq choy muzdek tuproqqa singib ketdi. Og'ir mis qumg'on jaranglab yerga quladi. Unsinning tizzalari buklanib, jonsiz vujudi bilan qabristonning sovuq tuprog'iga yiqildi. U hushini yo'qotdi — yo'q, uning pokiza va ozodlikka intilgan yuragi shu lahzaning o'zidayoq urishdan to'xtagan edi."
      ],
      paragraphsEn: [
        "Across the cemetery, the autumn wind howled with fresh malevolence. The campfire dwindled, collapsing into a bed of glowing red embers. The encroaching darkness swept forward once more, reclaiming the ancient brick facade of the mausoleum. Unsin glanced around. Terror, which had been held at bay by the warmth and labor of the fire, began to slither back into her veins like an icy serpent. With the fire dying, lingering in this place was suicide.",
        "She scattered cold dirt over the embers with the toe of her boot, carefully ensuring that the wind would not carry stray sparks into the dry brush. Then, lifting the steaming teapot in her right hand and the heavy brass kettle in her left, she prepared to flee. Yet in her mounting panic, blind haste, and disorientation, she completely forgot her folded paranji and horsehair veil lying within the dark niche of the mausoleum wall!",
        "Without daring to look behind her, she rushed toward the cemetery gates. With both hands burdened by the vessels, her strides were hurried and unsteady. The violent wind pressed her thin dress against her shivering body; the icy air sliced at her neck. The faint path weaving between the graves was utterly invisible. Unsin fixed her desperate gaze solely upon the distant, imagined glow of the living world beyond.",
        "Then—suddenly, without the slightest warning—the earth gave way beneath her left foot! A sickening CRACK ripped through the silence as the dry earthen crust collapsed into an unseen hollow below. It was an ancient, sunken grave pit—a lahad—eroded and hollowed by decades of subterranean seepage! Unsin’s left leg plunged into the void, sinking up to her knee, up to her very thigh, into the frigid, decaying muck of the collapsed crypt!",
        "“Merciful God!” A strangled shriek tore from her throat. She pitched sideways, nearly tumbling headlong into the darkness. Because her hands desperately clutched the scalding teapot and the kettle, she could not throw out an arm to steady herself. In that horrifying instant, it felt as though the cold, bony hands of the corpse beneath had seized her limb, dragging her down into the subterranean abyss! Sheer, unadulterated madness flooded her brain.",
        "With a frantic, agonizing effort, Unsin threw her weight backward and yanked her leg from the maw of the earth. But the thick, suctioning clay of the grave refused to surrender its prize: her velvet slipper was ripped from her foot, swallowed whole by the sunken pit. Her leg emerged bare, clothed only in a thin sock. Her bare sole struck the freezing, damp earth, piercing against sharp thorns and broken stones.",
        "Every fiber of her being was now seized by uncontrollable paroxysms of terror. The collapsed grave, the swallowing earth, the lost shoe, the forgotten paranji... She could not turn back to search for the shoe; her mind and body were pushed beyond the brink of sanity. Limping painfully on one bare foot, wincing with every thorn that bit into her flesh, she scrambled forward in a frantic bid for survival.",
        "At that exact, fateful instant—from the shadowed arch above the mausoleum portal—a sharp, piercing chittering split the night. Something stirred among the high stones. From the gloom of the eaves, plunging directly out of the sky, a dark, hairy creature leaped down upon her! With a shrill cry, it landed squarely upon Unsin’s shoulders, its cold, clawed fingers digging violently into her neck and collar!",
        "It was neither demon, nor ghost, nor djinn. It was merely an ordinary macaque monkey belonging to an itinerant tightrope acrobat—a dorboz—who had pitched camp near the shrine bazaar for the Ramadan fair. The animal had slipped its tether, sought shelter from the storm within the high eaves of the tomb, and, shivering with cold, had leaped toward the fleeting warmth of the human being who had rekindled the fire. But how could a terrified young woman know this in the pitch blackness of a graveyard?",
        "To an eighteen-year-old girl, standing barefoot in a cemetery with her foot just dragged from a sunken grave, her mind already pushed to the ultimate precipice of dread, this creature lunging from the dark was the embodiment of every unspeakable nightmare of the underworld. No sound escaped her throat. Her eyes bulged from their sockets in paralyzed shock; her breath froze solid in her chest. Her fragile young heart could not bear the shattering, unbearable weight of that terror.",
        "Unsin swayed. The porcelain teapot slipped from her fingers, shattering against the stones with a bright ring, spilling its warm green tea into the thirsty clay. The heavy brass kettle crashed to the earth. Her knees gave way, and she collapsed limp and motionless upon the frozen ground of the cemetery. Darkness claimed her—or rather, in that very heartbeat of absolute horror, her pure and courageous soul had ceased to beat forever."
      ],
      paragraphsJa: [
        "墓地の上に、木枯らしが新たな狂暴さをもって吹き荒れた。焚き火は次第に衰え、赤く燻る熾火へと姿を変えた。忍び寄る闇が再びその領土を広げ、古代霊廟の煉瓦壁を呑み込もうと迫っていた。ウンシンは周囲を見回した。炎の温もりと労作によって辛うじて退けられていた恐怖が、冷たい蛇のように再び彼女の血管へと忍び込んできた。火が消えれば、もはやこの場所に一瞬たりとも留まることはできなかった。",
        "彼女は靴の先で土を蹴り上げ、熾火に被せて火を消した――風が火の粉を巻き上げて火事を起こさぬよう、細心の注意を払ったのだ。そして右手に淹れたての熱い急須を、左手に未だ温もりを残す重い真鍮のクムガンを持った。しかし、募る焦燥と暗夜の恐怖のあまり、彼女は霊廟の壁の窪みに押し込んだままのパランジャとチャチヴォンを回収することを、完全に失念してしまっていた！",
        "彼女は振り返ることもなく、墓地の出口を目指して小走りに駆け出した。両手は器で塞がれ、足取りは乱れ、早鐘を打っていた。吹きすさぶ突風が薄い長衣を凍える身体に張り付かせ、冷気が首筋を刃のように切り裂いた。土塚の間に走る細い踏み分け道は、薄明かりすらない闇の中に完全に没していた。ウンシンの目は、ただ遥か彼方にあるはずの街の灯火、生者の世界へと注がれていた。",
        "その時――何の前触れもなく、前触れの一切を欠いて――彼女の左足の下の土が、突如として底抜けに崩壊した！ パキッという鈍い破断音が響き、乾燥した土の表層が下の虚空へと崩落したのだ。それは幾星霜の風雨によって地下が空洞化し、崩れかけていた古代の埋葬穴――ラハド（横穴式墓室）であった！ ウンシンの左足は膝まで、いや腿の付け根まで、冷たく腐食した泥と墓穴の闇の中へと深く呑み込まれた！",
        "「あああッ！」という悲鳴が、彼女の喉から引きちぎられるように噴き出した。彼女はバランスを崩し、闇の中へ倒れ伏しそうになった。両手には煮え立つ急須と薬缶を抱えていたため、地面に手を突いて身を支えることすら叶わない。漆黒の墓穴の底から、冷たい死者の骨の手が伸び、彼女を冥府の底へと引きずり込もうとしているかのような戦慄が走った。想像を絶する狂乱の恐怖が、彼女の脳髄を白濁させた。",
        "ウンシンは死に物狂いで身を反らせ、渾身の力で足を引き抜いた。しかし、墓穴の底の粘りつく泥土は、彼女のベルベットの靴（カリシュ）を深く呑み込み、決して放さなかった。足は抜けたが、それは靴を失い、薄い靴下だけになった裸足の足であった。彼女の素足は、凍てつく湿った泥と、墓地の無慈悲な茨の大地に直接叩きつけられた。",
        "今や彼女の全存在は、制御不能な震えに支配されていた。崩れ落ちた墓穴、泥に呑まれた足、失われた靴、闇に置き去りにされたパランジャ……。靴を探しに戻ることなど、もはや彼女の残された正気と体力には許されなかった。足裏に突き刺さる茨の痛みに顔を歪めながら、片足を引きずり、彼女は生き延びるためだけに前方へとよろめき進んだ。",
        "その刹那――運命の最も残酷な瞬間――霊廟の高く聳えるアーチの上から、甲高い、異様な啼き声が闇を切り裂いた。石組みの隙間で何かが激しく蠢いた。そして天蓋の闇の中から、直接虚空を切り裂いて、黒い毛に覆われたひとつの影が彼女めがけて飛び降りてきた！ 奇怪な叫び声を上げながら、その影はウンシンの細い肩の上へと正確に着地し、その冷たく強靭な爪で、彼女の首筋と衣の襟元を狂おしく掴みかかった！",
        "それは悪霊でも、ジン（魔物）でも、墓場の亡霊でもなかった。それはラマダーンの祝祭に合わせて街へやって来た巡回サーカス（ドルボズ）の綱渡り師が飼っていた、綱を解いて脱走した一匹の猿に過ぎなかった。嵐の寒さに凍え、霊廟の屋根裏に避難していたその哀れな小動物は、人間が熾した焚き火の温もりを求め、暗闇の中で温かい人間の肩へと跳びついたのであった。だが、漆黒の夜の墓場で、そのような真実をどうして知ることができようか！",
        "墓穴に落ち、靴を奪われ、極限まで張り詰めていた十八歳の娘の神経にとって、暗黒の虚空から飛びかかってきたその鉤爪の怪物こそは、現世と冥府のあらゆる怪異が結実した恐怖そのものであった。彼女の喉からは、もはや叫び声すら出なかった。眼球は恐怖で大きく見開かれ、呼吸は胸の底で凍りついた。彼女の若く清らかな心臓は、この巨大で無慈悲な戦慄の重圧に、もはや耐えることができなかったのだ。",
        "ウンシンは激しくよろめいた。指先から陶器の急須がすり抜け、敷石の上に乾いた音を立てて砕け散り、淹れたての温かい緑茶が凍土へと吸い込まれていった。重い真鍮の湯沸かしが鈍い金属音を響かせて大地に転がった。ウンシンの膝が折れ、そのしなやかな身体は、墓地の冷たい土の上に静かに崩れ落ちた。彼女は意識を失った――否、自由を求めてどこまでも気高く羽ばたこうとしたその魂は、まさにその恐怖の頂点において、永遠に鼓動を止めたのであった。"
      ]
    },
    {
      id: "chapter-5",
      chapterNumber: 5,
      titleUz: "V. Tonggi Haqiqat va Xotima",
      titleEn: "V. The Dawn Revelation and Epilogue",
      titleJa: "第五章　暁の真相と終幕",
      paragraphsUz: [
        "Tong otdi. Saharlik vaqti o'tib, ufqda sovuq, kulrang yorug'lik paydo bo'ldi. Shahar uyg'ondi, ammo Olimbek dodxoning hovlisida bezovtalik va sarosima hukm surardi. Unsin qaytib kelmagan edi. Sandal boshida kutib toliqqan Olimbek dodxo va uning xizmatkorlari avvaliga qizni qochib ketgan deb o'ylashdi, ammo oradan ko'p o'tmay, noxush bir shumxabar qalblarni muzlatdi.",
        "Dodxoning buyrug'i bilan bir necha navkar va mahalla oqsoqollari qo'llariga kaltak va fonus olib, shahar chetidagi qadimiy mozorot tomon yo'l oldilar. Kuzgi izg'irin shamol tinchigan, qabriston ustiga sukunat cho'kkan edi. Ular chinorlar tagidan o'tib, qadimiy maqbaraga yaqinlashgan sari dahshatli voqeaning izlari birma-bir ko'rina boshladi.",
        "Avvalo, maqbara devori poyida sovuq kul va o'chgan gulxan qoldiqlari topildi. Undan bir necha qadam naridagi ravoq burchagida esa — Unsinning chiroyli qilib buklangan kulrang-moviy paranjisi va qora chachvoni tegizilmagan holda yotardi. Demak, qiz bu yerga kelgan, olov yoqqan va shartni bajargan edi!",
        "Yo'l bo'ylab bir oz yurgach, ular o'pirilib ketgan eski lahadni ko'rishdi. Chuqurlikning loyqa tubida Unsinning loyga botgan baxmal kalishi qolib ketgan edi. Qizning yalang oyog'i bilan tikanlar ustida bosib o'tgan qonli izlari ko'zga tashlandi.",
        "Va nihoyat, mozor darvozasidan yuz qadamcha narida ular Unsinni topishdi. O'n sakkiz yoshli go'zal qiz muzdek qora tuproq ustida xuddi uxlab yotgandek chalqancha yotardi. Uning yuzi oppoq oqargan, ko'zlarida esa o'lim oldidagi cheksiz hayrat va dahshat qotib qolgan edi. Uning o'ng tomonida singan chinni choynakning parchalari, chap tomonida esa dumalab yotgan bo'sh mis qumg'on ko'rindi.",
        "Uning yonidagi paxsa devor ustida esa... kichik, junli bir jonivor — sayyor dorbozning sovuqdan qaltirab o'tirgan, katta mayus ko'zlari bilan odamlarga hayron bo'lib boqayotgan mitti maymuni o'tirardi.",
        "Hamma narsa ayon bo'ldi. Hech qanday jin ham, arvoh ham, la'nat ham bo'lmagan edi. Qizni o'ldirgan narsa g'ayritabiiy kuch emas, balki feodal jamiyatning shafqatsiz zulmi, qorong'ulik, xurofot va inson aqlini shoshirib qo'ygan so'ngsiz qo'rquv — DAHSHAT edi. Olimbek dodxo va uning atrofidagilar bu fojia qarshisida tilini yo'qotib, boshlarini quyi soldilar. Unsin esa o'zining jasorati va pokiza orzusi bilan ozodlikka erishgan, ammo bu ozodlik unga faqat o'lim evaziga nasib etgan edi."
      ],
      paragraphsEn: [
        "Dawn broke over the steppe. The hour of the suhoor meal had long since passed, and a pale, ashen grey light crept across the eastern horizon. The town began to stir, but inside the courtyard of Olimbek Dodkho, a heavy, suffocating dread held sway. Unsin had not returned. Having spent the remaining hours pacing before the dying hearth, Olimbek Dodkho and his men had initially assumed she had seized the darkness to escape into the wider world; yet as morning advanced, a cold foreboding gnawed at their arrogance.",
        "By the Dodkho’s command, several armed retainers and neighborhood elders took lanterns and heavy walking staves, setting out toward the ancient cemetery at the desert’s border. The violent autumn tempest had died down, replaced by a tomb-like, mournful stillness. Passing beneath the towering plane trees and drawing near the brick mausoleum, the tragic chronicle of the night unfurled before their eyes step by step.",
        "First, beside the brick base of the mausoleum, they discovered the bed of cold grey ash—the undeniable remnants of a newly kindled fire. Tucked safely within the arched masonry alcove lay Unsin’s grey-blue paranji and black horsehair chachvon, neatly folded and completely undisturbed. She had indeed reached the sanctuary, lit the flame, and completed the impossible ordeal!",
        "Tracing her footsteps along the path, they soon came upon the collapsed earth. There gaped the treacherous hole of the sunken lahad, and stuck fast in its subterranean mire was Unsin’s embroidered velvet slipper. Beside it, the faint, tragic impressions of a single bare foot, bruised by thorns, were stamped into the damp dirt.",
        "And finally, scarcely a hundred paces from the cemetery gates, they found Unsin. The young maiden lay upon the frozen earth as though peacefully asleep. Yet her countenance was drained of all color, and frozen within her wide, unseeing eyes was a terrifying, incomprehensible abyss of shock. Beside her right hand lay the shattered fragments of the ceramic teapot, its dried tea staining the earth; by her left lay the dented brass kettle.",
        "And perched quietly atop the mud wall just above her lifeless body... sat a small, shivering creature. It was the wandering acrobat’s lost macaque, clutching its own scrawny knees against the dawn frost, gazing down at the armed men with mournful, bewildered eyes.",
        "Everything was laid bare. There had been no djinn. No vengeful spirits. No nocturnal demons clawing from the grave. What had slain Unsin was not the supernatural, but the cold, pitiless tyranny of feudal bondage, the paralyzing weight of superstition, and the sheer, shattering fragility of the human heart confronting absolute TERROR. Olimbek Dodkho and his elders stood struck dumb in the presence of that stillness, hanging their heads in silent shame. Unsin had indeed triumphed in her quest for freedom—yet that freedom had been bought with her very life."
      ],
      paragraphsJa: [
        "荒野の果てに夜明けが訪れた。スフール（夜明け前の食事）の刻限は疾くに過ぎ去り、東の地平線には冷たく鉛色の微光が滲み出ていた。街は目覚めつつあったが、オリムベク・ドッドホの屋敷には息苦しい不穏な沈黙が立ち込めていた。ウンシンは戻らなかった。暖卓の前で夜を明かしたドッドホとその使用人たちは、当初、娘が闇に紛れてどこか遠くへ逃亡したのだろうと高を括っていた。だが朝の光が射すにつれ、説明のつかない不吉な予感が彼らの傲慢な胸を締め付け始めた。",
        "ドッドホの命を受け、棍棒と提灯を手にした数名の従者と街の長老たちが、郊外の古代墓地へと足を向けた。荒れ狂っていた秋の嵐は嘘のように鎮まり、墓地は死者の都にふさわしい深い静寂に包まれていた。プラタナスの巨木を抜け、古びた赤煉瓦の霊廟へと近づくにつれ、夜の惨劇の痕跡がひとつ、またひとつと彼らの眼前に明かされていった。",
        "まず、霊廟の礎石の傍らに、冷たく固まった灰の山――確かに新しい火が熾された痕跡が見つかった。そしてアーチの窪みの中には、ウンシンの灰青色のパランジャと黒いチャチヴォンが、丁寧に折り畳まれたまま手付かずで残されていた。娘は確かにここへ辿り着き、火を起こし、課せられた試練を果たしたのだ！",
        "小道沿いに足跡を辿った彼らは、やがて地面がぽっかりと陥没した危険な穴に行き当たった。それは崩れ落ちた古代の墓穴（ラハド）であり、その底の湿った泥の中には、ウンシンの刺繍靴が深々と吸い込まれていた。その先には、片足を裸足のまま、茨を踏みしめて歩いた痛ましい血の滲む足跡が残されていた。",
        "そして――墓地の門からわずか百歩ほど手前の荒地で、彼らはついにウンシンを見出した。十八歳の若き娘は、まるで深い眠りに落ちたかのように、凍てつく黒い土の上に仰向けに倒れていた。その顔は白蝋のように青ざめ、見開かれた瞳には、死の瞬間に焼き付けられた計り知れない戦慄と驚愕が凍りついていた。彼女の右手には粉々に砕け散った陶器の急須の破片が散乱し、左手には泥に塗れた真鍮の湯沸かしが転がっていた。",
        "そして、物言わぬ遺体のすぐ頭上の土壁の上には……小さな、毛に覆われた生き物が座っていた。それは寒さに震えながら、哀れな瞳で人間たちを不思議そうに見つめる、巡回サーカスの哀れな小猿であった。",
        "すべての真相が白日の下に晒された。ジンも、亡霊も、冥府の怪物も最初から存在しなかったのだ。この気高い娘の命を奪ったのは、超自然の怪異などではない。封建社会の冷酷無惨な抑圧、根拠なき迷信、そして極限状態に追い詰められた人間の心を粉砕する絶対的な『恐怖（ダハシャト）』であった。オリムベク・ドッドホも長老たちも、この悲劇の前に言葉を失い、ただ項垂れるしかなかった。ウンシンはその無類の勇気によって確かに自由を勝ち取った――しかしその代償は、彼女自身のあまりにも尊い命であったのだ。"
      ]
    }
  ]
};

export const CULTURAL_GLOSSARY = [
  {
    term: "Sandal (صندل)",
    definitionUz: "Xontaxta ostiga cho'g'li mangal qo'yilib, ustiga qalin ko'rpa yopiladigan an'anaviy isitish vositasi.",
    definitionEn: "A traditional Central Asian low table set over a sunken charcoal hearth and covered with thick quilts, around which households gather for warmth.",
    definitionJa: "炭火の炉の上に低い机を置き、厚い布団を掛けた伝統の暖卓（日本のこたつに酷似した暖房具）。"
  },
  {
    term: "Paranji & Chachvon (پَرَنجی و چاچوان)",
    definitionUz: "O'zbek ayollarining an'anaviy yopinchiq libosi: boshdan kiyiladigan soxta yengli keng xalat (paranji) va yuzni to'suvchi ot qilidan to'qilgan qattiq to'r (chachvon).",
    definitionEn: "The traditional street attire of urban Uzbek women: a voluminous robe draped over the head (paranji) paired with a stiff black horsehair face veil (chachvon).",
    definitionJa: "都市部のウズベク女性の伝統的な外出着。頭から被る長大な外套（パランジャ）と、顔を隠す黒い馬毛の網（チャチヴォン）。"
  },
  {
    term: "Dodkho (دادخواه)",
    definitionUz: "Qo'qon va Buxoro xonliklarida yuqori harbiy-ma'muriy mansab, yirik yer egasi va sud vakolatiga ega bo'lgan feodal amaldor.",
    definitionEn: "A high-ranking feudal magistrate and landowner in the Khanates of Bukhara and Kokand, holding judicial and administrative authority.",
    definitionJa: "ブハラやコーカンド・ハン国における司法・軍事権限を持つ高級官職および大領主。"
  },
  {
    term: "Kumgan (قُمغان)",
    definitionUz: "Uzun burunli, dastali, qopqoqli mis yoki jezdan yasalgan an'anaviy suv idishi (qumg'on).",
    definitionEn: "A traditional hammered brass or copper ewer with a long curved spout and handle, used for ritual ablution and heating water.",
    definitionJa: "長い注ぎ口と取っ手を持つ、伝統的な真鍮または銅製の湯沸かし・水差し。"
  },
  {
    term: "Dorboz (دارباز)",
    definitionUz: "Xalq sayillarida dor ustida mahorat ko'rsatuvchi an'anaviy o'zbek dorbozlik san'ati ustalari va ularning yordamchi truppalari.",
    definitionEn: "Traditional Uzbek tightrope walkers and itinerant circus performers who entertained at religious and seasonal bazaars.",
    definitionJa: "祝祭や市場で綱渡りや曲芸を披露する伝統的な旅芸人・サーカス一座。"
  },
  {
    term: "Lahad (لحد)",
    definitionUz: "Musulmoncha qabr ichida mayyit qo'yiladigan maxsus yon chuqurlik; vaqt o'tishi bilan o'pirilib bo'shliq hosil qilishi mumkin bo'lgan go'r teshigi.",
    definitionEn: "The lateral burial niche hollowed out inside a Muslim grave; older abandoned graves often settled and collapsed into dangerous sunken pits.",
    definitionJa: "イスラム式の墓穴の側面に掘られる死者の埋葬室。長い年月を経て陥没し、危険な空洞となることがある。"
  }
];
