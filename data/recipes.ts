import { Recipe, Category } from '../types';

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Bosanski Lonac",
    category: Category.BOSANSKA,
    description: "Tradicionalno bosansko jelo, sporo kuhano do savršenstva sa slojevima mesa i povrća.",
    image: "https://picsum.photos/seed/bosanskilonac/800/600",
    ingredients: [
      { name: "Junetina", quantity: "500g, narezana na kocke" },
      { name: "Krompir", quantity: "1kg, oguljen i narezan na krupno" },
      { name: "Mrkva", quantity: "3 kom, narezana na kolutove" },
      { name: "Crveni luk", quantity: "2 glavice, krupno sjeckan" },
      { name: "Bijeli luk", quantity: "5 čehna" },
      { name: "Kupus", quantity: "1/4 glavice, narezan na trake" },
      { name: "Paradajz", quantity: "2 kom, narezan na kriške" },
      { name: "Lovorov list", quantity: "2 kom" },
      { name: "Biber u zrnu", quantity: "1 kašičica" },
      { name: "Voda ili temeljac", quantity: "500ml" },
      { name: "So i biber", quantity: "po ukusu" }
    ],
    steps: [
      "U veliki lonac redati slojeve: krompir, meso, luk, mrkvu, kupus.",
      "Između slojeva dodavati bijeli luk, biber u zrnu i so.",
      "Na vrh posložiti kriške paradajza i lovorov list.",
      "Zaliti vodom ili temeljcem.",
      "Poklopiti i kuhati na laganoj vatri 3-4 sata bez miješanja.",
      "Služiti toplo."
    ],
    equipment: [{ name: "Veliki lonac s poklopcem" }, { name: "Šporet" }],
    macros: { protein: 35, carbs: 40, fat: 20, calories: 480 }
  },
  {
    id: 2,
    name: "Pileća prsa sa pestom i mozzarellom",
    category: Category.PILETINA,
    description: "Sočna pileća prsa punjena aromatičnim pestom i rastopljenom mozzarellom, pečena u rerni.",
    image: "https://picsum.photos/seed/piletinapesto/800/600",
    ingredients: [
      { name: "Pileća prsa", quantity: "4 komada (oko 600g)" },
      { name: "Pesto Genovese", quantity: "4 kašike" },
      { name: "Mozzarella", quantity: "125g, narezana na kriške" },
      { name: "Cherry paradajz", quantity: "200g" },
      { name: "Maslinovo ulje", quantity: "2 kašike" },
      { name: "So i svježe mljeveni crni biber", quantity: "po ukusu" }
    ],
    steps: [
      "Zagrijati rernu na 200°C.",
      "Zasjeći svaki komad pilećih prsa po dužini da se napravi 'džep'.",
      "Unutrašnjost svakog džepa posoliti i pobiberiti.",
      "Napuniti svaki džep sa kašikom pesta i nekoliko kriški mozzarelle.",
      "Posložiti piletinu u tepsiju, preliti maslinovim uljem i dodati cherry paradajz okolo.",
      "Peći 25-30 minuta, ili dok piletina ne bude kuhana i zlatno smeđa.",
      "Ostaviti da odstoji par minuta prije serviranja."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }, { name: "Nož" }],
    macros: { protein: 45, carbs: 5, fat: 25, calories: 425 }
  },
  {
    id: 3,
    name: "Losos sa šparogama i limunom",
    category: Category.PROTEINSKA,
    description: "Zdrav i brz obrok bogat proteinima i omega-3 masnim kiselinama, idealan za laganu večeru.",
    image: "https://picsum.photos/seed/losos/800/600",
    ingredients: [
      { name: "Filet lososa", quantity: "2 komada (po 180g)" },
      { name: "Šparoge", quantity: "1 svežanj" },
      { name: "Limun", quantity: "1 kom, narezan na kriške" },
      { name: "Maslinovo ulje", quantity: "2 kašike" },
      { name: "Kopar, svježi", quantity: "1 kašika, sjeckani" },
      { name: "So i biber", quantity: "po ukusu" }
    ],
    steps: [
      "Zagrijati rernu na 200°C. Obložiti tepsiju papirom za pečenje.",
      "Šparogama odrezati tvrde krajeve, staviti ih na tepsiju, preliti sa malo maslinovog ulja, posoliti i pobiberiti.",
      "Staviti filete lososa na šparoge. Premazati ih ostatkom ulja, posuti solju, biberom i koprom.",
      "Na svaki filet staviti po 2-3 kriške limuna.",
      "Peći 12-15 minuta, ovisno o debljini lososa.",
      "Služiti odmah."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }, { name: "Papir za pečenje" }],
    macros: { protein: 40, carbs: 8, fat: 28, calories: 450 }
  },
  {
    id: 4,
    name: "Quinoa salata sa crnim grahom i avokadom",
    category: Category.SALATE,
    description: "Osvježavajuća i zasitna salata puna biljnih proteina, vlakana i zdravih masti.",
    image: "https://picsum.photos/seed/quinoasalad/800/600",
    ingredients: [
      { name: "Quinoa", quantity: "1 šolja, nekuhana" },
      { name: "Crni grah iz konzerve", quantity: "1 konzerva, ispran" },
      { name: "Kukuruz šećerac", quantity: "1 šolja, kuhan ili iz konzerve" },
      { name: "Crvena paprika", quantity: "1 kom, sjeckana" },
      { name: "Crveni luk", quantity: "1/2 glavice, sitno sjeckan" },
      { name: "Avokado", quantity: "1 kom, narezan na kocke" },
      { name: "Korijander", quantity: "1/4 šolje, sjeckan" },
      { name: "Sok od limete", quantity: "od 2 limete" },
      { name: "Maslinovo ulje", quantity: "3 kašike" },
      { name: "So i biber", quantity: "po ukusu" }
    ],
    steps: [
      "Skuhati quinou prema uputama na pakovanju i ostaviti da se ohladi.",
      "U velikoj zdjeli pomiješati ohlađenu quinou, crni grah, kukuruz, papriku, luk i korijander.",
      "U maloj posudi umutiti sok od limete, maslinovo ulje, so i biber da se napravi dresing.",
      "Preliti dresing preko salate i lagano promiješati.",
      "Neposredno prije serviranja, nježno umiješati kockice avokada.",
      "Služiti rashlađeno."
    ],
    equipment: [{ name: "Lonac" }, { name: "Velika zdjela za salatu" }, { name: "Nož" }],
    macros: { protein: 15, carbs: 55, fat: 20, calories: 460 }
  },
  {
    id: 5,
    name: "Smash Burger",
    category: Category.JUNK_FOOD,
    description: "Ultimativni burger sa hrskavom koricom, sočnom unutrašnjošću i klasičnim dodacima.",
    image: "https://picsum.photos/seed/smashburger/800/600",
    ingredients: [
      { name: "Mljevena junetina (20% masnoće)", quantity: "400g" },
      { name: "Burger peciva", quantity: "2 kom" },
      { name: "Američki sir", quantity: "4 kriške" },
      { name: "Kiseli krastavci", quantity: "po želji, narezani" },
      { name: "Crveni luk", quantity: "sitno sjeckan" },
      { name: "Majoneza, kečap, senf", quantity: "za umak" },
      { name: "Maslac", quantity: "1 kašika" },
      { name: "So i biber", quantity: "po ukusu" }
    ],
    steps: [
      "Podijeliti meso na 4 loptice jednake veličine (po 100g). Ne oblikovati pljeskavice.",
      "Jako zagrijati tavu od livenog željeza ili grill tavu.",
      "Premazati unutrašnjost peciva maslacem i kratko ih prepeći na tavi dok ne postanu zlatna.",
      "Staviti lopticu mesa na vrelu tavu. Odmah je snažno pritisnuti špatulom da se spljošti u tanku pljeskavicu.",
      "Posoliti i pobiberiti. Peći 1-2 minute dok se ne stvori hrskava korica.",
      "Okrenuti pljeskavicu, staviti krišku sira na vrh i peći još minutu.",
      "Sastaviti burger: donje pecivo, umak, dvije pljeskavice sa sirom, krastavci, luk, gornje pecivo.",
      "Služiti odmah."
    ],
    equipment: [{ name: "Tava od livenog željeza" }, { name: "Špatula" }, { name: "Šporet" }],
    macros: { protein: 40, carbs: 30, fat: 45, calories: 780 }
  },
  {
    id: 6,
    name: "Pizza Margherita",
    category: Category.PIZZE,
    description: "Klasik italijanske kuhinje sa jednostavnim, ali savršenim okusima paradajza, mozzarelle i bosiljka.",
    image: "https://picsum.photos/seed/margherita/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla (250-300g)" },
      { name: "San Marzano paradajz (pelat)", quantity: "1/2 konzerve, izgnječen rukama" },
      { name: "Svježa mozzarella", quantity: "125g, iskidana" },
      { name: "Svježi bosiljak", quantity: "nekoliko listova" },
      { name: "Maslinovo ulje", quantity: "1 kašika" },
      { name: "So", quantity: "prstohvat" }
    ],
    steps: [
      "Zagrijati rernu na maksimalnu temperaturu (250-280°C) sa kamenom za pizzu ili obrnutom tepsijom unutra.",
      "Na pobrašnjenoj površini rukama razvući tijesto u krug, ostavljajući deblji rub.",
      "Premazati tijesto tankim slojem paradajza, ostavljajući rub čistim. Posoliti.",
      "Rasporediti komade mozzarelle po pizzi.",
      "Pažljivo prebaciti pizzu na vrući kamen ili tepsiju.",
      "Peći 7-10 minuta, ili dok rub ne postane napuhan i zlatno smeđ, a sir se rastopi.",
      "Izvaditi iz rerne, pokapati maslinovim uljem i posuti svježim listovima bosiljka.",
      "Rezati i služiti odmah."
    ],
    equipment: [{ name: "Rerna" }, { name: "Kamen za pizzu ili tepsija" }],
    macros: { protein: 25, carbs: 70, fat: 30, calories: 650 }
  },
  {
    id: 7,
    name: "Ramstek sa puterom i bijelim lukom",
    category: Category.FANCY,
    description: "Sočan i aromatičan ramstek pečen u tavi do savršenstva, sa bogatim umakom od putera, bijelog luka i začinskog bilja.",
    image: "https://picsum.photos/seed/ramstek/800/600",
    ingredients: [
      { name: "Ramstek (goveđi odrezak)", quantity: "2 komada (debljine 3-4 cm)" },
      { name: "Puter", quantity: "4 kašike" },
      { name: "Bijeli luk", quantity: "3 čehna, zgnječena" },
      { name: "Grančice timijana ili ruzmarina", quantity: "2-3 kom" },
      { name: "Ulje neutralnog okusa (npr. repičino)", quantity: "2 kašike" },
      { name: "Krupna morska so i svježe mljeveni crni biber", quantity: "po ukusu" }
    ],
    steps: [
      "Izvaditi odreske iz frižidera 30-60 minuta prije pečenja da dostignu sobnu temperaturu.",
      "Dobro posušiti odreske papirnim ubrusima. Obilno posoliti i pobiberiti sa svih strana.",
      "Jako zagrijati tavu od livenog željeza na visokoj temperaturi. Dodati ulje.",
      "Pažljivo staviti odreske u vrelu tavu. Peći 2-4 minute po strani za medium-rare, ovisno o debljini.",
      "Smanjiti vatru na srednju. Dodati puter, bijeli luk i začinsko bilje u tavu.",
      "Kada se puter otopi, naginjati tavu i kašikom prelijevati odreske otopljenim puterom. Nastaviti 1-2 minute.",
      "Izvaditi odreske iz tave i staviti ih na dasku za rezanje. Ostaviti da odstoje 5-10 minuta.",
      "Narezati na kriške i poslužiti prelivene ostatkom putera iz tave."
    ],
    equipment: [{ name: "Tava od livenog željeza" }, { name: "Šporet" }, { name: "Kašika" }],
    macros: { protein: 50, carbs: 1, fat: 45, calories: 610 }
  },
  {
    id: 8,
    name: "Zobena kaša iz rerne sa bobičastim voćem",
    category: Category.NISKOKALORICNA,
    description: "Zdrav i ukusan doručak koji se priprema unaprijed. Mekana, kremasta i puna vlakana.",
    image: "https://picsum.photos/seed/zobenakasa/800/600",
    ingredients: [
      { name: "Zobene pahuljice (krupne)", quantity: "2 šolje" },
      { name: "Mješano bobičasto voće (svježe ili smrznuto)", quantity: "2 šolje" },
      { name: "Bademovo mlijeko (nezaslađeno)", quantity: "2 šolje" },
      { name: "Javorov sirup ili med", quantity: "1/4 šolje" },
      { name: "Jaje", quantity: "1 kom" },
      { name: "Puter, otopljen", quantity: "2 kašike" },
      { name: "Cimet", quantity: "1 kašičica" },
      { name: "Prašak za pecivo", quantity: "1 kašičica" },
      { name: "So", quantity: "1/4 kašičice" }
    ],
    steps: [
      "Zagrijati rernu na 190°C. Namastiti vatrostalnu posudu.",
      "U velikoj zdjeli pomiješati zobene pahuljice, prašak za pecivo, cimet i so.",
      "U drugoj zdjeli umutiti jaje, mlijeko, javorov sirup i otopljeni puter.",
      "Dodati mokre sastojke suhim i dobro promiješati.",
      "Nježno umiješati bobičasto voće.",
      "Izliti smjesu u pripremljenu posudu.",
      "Peći 35-40 minuta, dok ne postane zlatno smeđe i stegnuto.",
      "Ostaviti da se malo ohladi prije serviranja. Može se jesti toplo ili hladno."
    ],
    equipment: [{ name: "Rerna" }, { name: "Vatrostalna posuda" }, { name: "Zdjela" }],
    macros: { protein: 10, carbs: 45, fat: 12, calories: 320 }
  },
  {
    id: 9,
    name: "Ćevapi u somunu sa lukom",
    category: Category.BOSANSKA,
    description: "Neprikosnoveni kralj roštilja, sočni ćevapi servirani u toplom somunu sa sjeckanim lukom i kajmakom.",
    image: "https://picsum.photos/seed/cevapi/800/600",
    ingredients: [
      { name: "Mljevena junetina", quantity: "800g" },
      { name: "Mljevena janjetina", quantity: "200g" },
      { name: "Bijeli luk", quantity: "3 čehna, sitno sjeckana" },
      { name: "So", quantity: "2 kašičice" },
      { name: "Biber", quantity: "1 kašičica" },
      { name: "Soda bikarbona", quantity: "1/2 kašičice" },
      { name: "Somun ili lepinja", quantity: "4 komada" },
      { name: "Crveni luk", quantity: "2 glavice, za serviranje" },
      { name: "Kajmak", quantity: "po želji" }
    ],
    steps: [
      "U velikoj zdjeli pomiješati mljeveno meso, bijeli luk, so, biber i sodu bikarbonu.",
      "Dobro izmijesiti rukama smjesu barem 10 minuta dok ne postane kompaktna i ljepljiva.",
      "Pokriti smjesu i ostaviti u frižideru najmanje 4 sata, idealno preko noći.",
      "Rukama oblikovati ćevape dužine oko 5cm.",
      "Zagrijati roštilj ili grill tavu na jakoj temperaturi.",
      "Peći ćevape 5-8 minuta, okrećući ih povremeno, dok ne budu pečeni i rumeni.",
      "Kratko zagrijati somune na roštilju.",
      "Servirati ćevape (obično 10 komada) u rasječenom somunu sa dosta sjeckanog crvenog luka i kašikom kajmaka."
    ],
    equipment: [{ name: "Roštilj ili grill tava" }, { name: "Zdjela" }],
    macros: { protein: 45, carbs: 35, fat: 30, calories: 690 }
  },
  {
    id: 10,
    name: "Sarajevska Čorba",
    category: Category.BOSANSKA,
    description: "Gusta i okrepljujuća teleća čorba sa povrćem, savršena kao predjelo ili lagani obrok.",
    image: "https://picsum.photos/seed/sarajevskacorba/800/600",
    ingredients: [
        { name: "Teleće meso od buta", quantity: "400g" },
        { name: "Crveni luk", quantity: "1 glavica" },
        { name: "Mrkva", quantity: "2 kom" },
        { name: "Peršunov korijen", quantity: "1 kom" },
        { name: "Krompir", quantity: "2 kom" },
        { name: "Brašno", quantity: "2 kašike" },
        { name: "Jaje", quantity: "1 žumanjak" },
        { name: "Pavlaka za kuhanje", quantity: "100ml" },
        { name: "So, biber, lovorov list", quantity: "po ukusu" }
    ],
    steps: [
        "Meso isjeći na sitne kockice i dinstati na ulju sa sjeckanim lukom.",
        "Dodati rendanu mrkvu i peršun, pa nastaviti dinstanje.",
        "Naliti vodom, dodati lovorov list i kuhati dok meso ne omekša.",
        "Dodati krompir isječen na kockice i kuhati još 20 minuta.",
        "Napraviti zapršku od brašna i malo vode, pa dodati u čorbu da se zgusne.",
        "Umutiti žumanjak sa pavlakom i lagano umiješati u čorbu pred kraj kuhanja.",
        "Začiniti po ukusu i poslužiti toplo."
    ],
    equipment: [{ name: "Lonac" }, { name: "Šporet" }],
    macros: { protein: 30, carbs: 25, fat: 15, calories: 355 }
  },
  {
    id: 11,
    name: "Kljukuša",
    category: Category.BOSANSKA,
    description: "Jednostavno seljačko jelo od krompira i brašna, pečeno da bude hrskavo izvana a mekano iznutra.",
    image: "https://picsum.photos/seed/kljukusa/800/600",
    ingredients: [
        { name: "Krompir", quantity: "1 kg" },
        { name: "Brašno", quantity: "1 šolja" },
        { name: "Jaja", quantity: "2 kom" },
        { name: "So", quantity: "1 kašičica" },
        { name: "Puter i bijeli luk", quantity: "za preliv" }
    ],
    steps: [
        "Oguliti i izrendati krompir.",
        "Dodati jaja, brašno, so i dobro promiješati.",
        "Smjesu izliti u dobro nauljenu i zagrijanu tepsiju.",
        "Peći u rerni na 220°C oko 30-40 minuta, dok ne porumeni.",
        "Dok se peče, otopiti puter i dodati sitno sjeckan bijeli luk.",
        "Pečenu kljukušu isjeći na kocke i preliti pripremljenim prelivom.",
        "Služiti sa kajmakom ili kiselim mlijekom."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }, { name: "Zdjela" }],
    macros: { protein: 8, carbs: 45, fat: 18, calories: 380 }
  },
  {
    id: 12,
    name: "Piletina u Curry Sosu",
    category: Category.PILETINA,
    description: "Egzotična i kremasta piletina u curry sosu sa rižom, jelo koje budi sva čula.",
    image: "https://picsum.photos/seed/piletinacurry/800/600",
    ingredients: [
        { name: "Pileća prsa", quantity: "500g" },
        { name: "Crveni luk", quantity: "1 glavica" },
        { name: "Bijeli luk", quantity: "2 čehna" },
        { name: "Curry prah", quantity: "2 kašike" },
        { name: "Kokosovo mlijeko", quantity: "400ml" },
        { name: "Riža", quantity: "za serviranje" },
        { name: "Ulje, so, biber", quantity: "po ukusu" }
    ],
    steps: [
        "Piletinu isjeći na kocke, posoliti i pobiberiti.",
        "Na ulju propržiti sitno sjeckani crveni i bijeli luk.",
        "Dodati piletinu i pržiti dok ne dobije zlatnu boju.",
        "Pospite curry prahom, promiješajte i pržite još minutu.",
        "Zaliti kokosovim mlijekom, smanjiti vatru i kuhati 15-20 minuta.",
        "Skuhati rižu prema uputama na pakovanju.",
        "Poslužiti piletinu u curry sosu preko kuhane riže."
    ],
    equipment: [{ name: "Tava" }, { name: "Lonac" }, { name: "Šporet" }],
    macros: { protein: 40, carbs: 50, fat: 25, calories: 585 }
  },
  {
    id: 13,
    name: "Piletina Alfredo",
    category: Category.PILETINA,
    description: "Klasična italijanska tjestenina sa kremastim umakom od parmezana i sočnom piletinom.",
    image: "https://picsum.photos/seed/piletinaalfredo/800/600",
    ingredients: [
        { name: "Fettuccine tjestenina", quantity: "300g" },
        { name: "Pileća prsa", quantity: "400g" },
        { name: "Pavlaka za kuhanje", quantity: "500ml" },
        { name: "Parmezan", quantity: "100g, rendani" },
        { name: "Bijeli luk", quantity: "2 čehna" },
        { name: "Puter", quantity: "2 kašike" },
        { name: "So, biber, peršun", quantity: "po ukusu" }
    ],
    steps: [
        "Skuhati tjesteninu al dente.",
        "Piletinu isjeći na trakice, posoliti, pobiberiti i ispržiti na tavi dok ne bude gotova. Izvaditi sa strane.",
        "U istoj tavi otopiti puter, dodati sitno sjeckan bijeli luk.",
        "Nakon minute dodati pavlaku za kuhanje i zagrijavati na laganoj vatri.",
        "Umiješati parmezan dok se ne otopi i umak ne zgusne. Ne dopustiti da proključa.",
        "Vratiti piletinu u umak, dodati kuhanu tjesteninu i sve dobro promiješati.",
        "Posuti svježim peršunom i odmah poslužiti."
    ],
    equipment: [{ name: "Lonac" }, { name: "Tava" }, { name: "Šporet" }],
    macros: { protein: 45, carbs: 60, fat: 40, calories: 780 }
  },
  {
    id: 14,
    name: "Tuna Odrezak sa Blitvom",
    category: Category.PROTEINSKA,
    description: "Elegantan i zdrav obrok, savršeno pečen odrezak tune poslužen sa klasičnom dalmatinskom blitvom i krompirom.",
    image: "https://picsum.photos/seed/tunabletva/800/600",
    ingredients: [
        { name: "Odrezak tune", quantity: "2 kom (po 200g)" },
        { name: "Blitva", quantity: "500g" },
        { name: "Krompir", quantity: "300g" },
        { name: "Bijeli luk", quantity: "3 čehna" },
        { name: "Maslinovo ulje", quantity: "4 kašike" },
        { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
        "Krompir oguliti, isjeći na kocke i staviti kuhati u slanu vodu.",
        "Nakon 10 minuta dodati očišćenu blitvu i kuhati još 5-7 minuta.",
        "Ocijediti, začiniti maslinovim uljem, sitno sjeckanim bijelim lukom, solju i biberom.",
        "Odreske tune posušiti, posoliti i pobiberiti.",
        "Na dobro zagrijanoj grill tavi peći tunu po 2-3 minute sa svake strane za medium-rare.",
        "Poslužiti odrezak tune sa pripremljenom blitvom i krompirom."
    ],
    equipment: [{ name: "Grill tava" }, { name: "Lonac" }, { name: "Šporet" }],
    macros: { protein: 50, carbs: 30, fat: 20, calories: 500 }
  },
  {
    id: 15,
    name: "Goveđi Gulaš",
    category: Category.PROTEINSKA,
    description: "Bogati i aromatični gulaš od govedine, sporo kuhan sa puno luka, paprike i začina.",
    image: "https://picsum.photos/seed/govodigulas/800/600",
    ingredients: [
        { name: "Goveđi but", quantity: "1kg, isječen na kocke" },
        { name: "Crveni luk", quantity: "1kg, sitno sjeckan" },
        { name: "Slatka crvena paprika (mljevena)", quantity: "3 kašike" },
        { name: "Lovorov list", quantity: "2 kom" },
        { name: "Goveđi temeljac", quantity: "500ml" },
        { name: "So, biber", quantity: "po ukusu" },
        { name: "Ulje ili svinjska mast", quantity: "4 kašike" }
    ],
    steps: [
        "Na masnoći dinstati luk na laganoj vatri dok ne postane staklast i potpuno mekan (oko 30 minuta).",
        "Dodati meso i pržiti dok ne porumeni sa svih strana.",
        "Skloniti s vatre, umiješati crvenu papriku, so i biber.",
        "Vratiti na vatru, zaliti temeljcem da prekrije meso, dodati lovorov list.",
        "Poklopiti i kuhati na laganoj vatri 2.5 do 3 sata, dok meso ne bude potpuno mekano.",
        "Povremeno provjeriti i dodati vode ako je potrebno.",
        "Poslužiti uz tjesteninu, pire krompir ili palentu."
    ],
    equipment: [{ name: "Veliki lonac s poklopcem" }, { name: "Šporet" }],
    macros: { protein: 45, carbs: 15, fat: 25, calories: 515 }
  },
  {
    id: 16,
    name: "Tikvice punjene mljevenom puretinom",
    category: Category.NISKOKALORICNA,
    description: "Lagano i hranjivo jelo, idealno za ručak ili večeru sa malo kalorija.",
    image: "https://picsum.photos/seed/punjenetikvice/800/600",
    ingredients: [
        { name: "Okrugle tikvice", quantity: "4 kom" },
        { name: "Mljevena puretina", quantity: "400g" },
        { name: "Crveni luk", quantity: "1 glavica" },
        { name: "Paradajz sos", quantity: "200ml" },
        { name: "Rendani sir (light)", quantity: "50g" },
        { name: "So, biber, origano", quantity: "po ukusu" }
    ],
    steps: [
        "Tikvice prepoloviti i izdubiti sredinu.",
        "Na malo ulja prodinstati sjeckani luk, dodati puretinu i pržiti dok ne bude gotova.",
        "Dodati paradajz sos, so, biber i origano. Kuhati 10 minuta.",
        "Izdubljene tikvice napuniti smjesom.",
        "Poredati u tepsiju, posuti rendanim sirom.",
        "Peći u rerni na 200°C oko 25-30 minuta.",
        "Poslužiti toplo."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }, { name: "Tava" }],
    macros: { protein: 35, carbs: 15, fat: 10, calories: 290 }
  },
  {
    id: 17,
    name: "Krem Supa od Brokule",
    category: Category.NISKOKALORICNA,
    description: "Baršunasta i ukusna supa od brokule, gotova za manje od 30 minuta.",
    image: "https://picsum.photos/seed/brokulasupa/800/600",
    ingredients: [
        { name: "Brokula", quantity: "1 velika glavica" },
        { name: "Krompir", quantity: "1 kom" },
        { name: "Crveni luk", quantity: "1 glavica" },
        { name: "Povrtni temeljac", quantity: "1l" },
        { name: "Pavlaka za kuhanje (light)", quantity: "100ml" },
        { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
        "Na malo ulja dinstati sjeckani luk.",
        "Dodati krompir isječen na kockice i brokulu iskidanu na cvjetove.",
        "Naliti temeljcem i kuhati 15-20 minuta dok povrće ne omekša.",
        "Sve izmiksati štapnim mikserom do glatke kreme.",
        "Vratiti na vatru, dodati pavlaku, so i biber.",
        "Kuhati još par minuta i poslužiti.",
    ],
    equipment: [{ name: "Lonac" }, { name: "Štapni mikser" }, { name: "Šporet" }],
    macros: { protein: 8, carbs: 20, fat: 7, calories: 175 }
  },
  {
    id: 18,
    name: "Pačja Prsa s Umakom od Narandže",
    category: Category.FANCY,
    description: "Klasično francusko jelo koje spaja bogatstvo pačjeg mesa sa slatko-kiselim umakom od narandže.",
    image: "https://picsum.photos/seed/pacjaprsa/800/600",
    ingredients: [
        { name: "Pačja prsa", quantity: "2 kom" },
        { name: "Sok od svježe cijeđene narandže", quantity: "200ml" },
        { name: "Pileći temeljac", quantity: "100ml" },
        { name: "Šećer", quantity: "2 kašike" },
        { name: "Narandžin liker (npr. Cointreau)", quantity: "2 kašike" },
        { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
        "Zarezati kožu pačjih prsa u obliku dijamanta, pazeći da se ne zasiječe meso.",
        "Posoliti i pobiberiti sa obje strane.",
        "Staviti prsa u hladnu tavu, kožom prema dolje, i peći na srednje jakoj vatri 10-15 minuta dok koža ne postane hrskava.",
        "Okrenuti i peći još 3-5 minuta.",
        "Izvaditi meso i ostaviti da odmara. Odliti višak masnoće iz tave.",
        "U tavu dodati šećer da se karamelizira, pa dodati sok od narandže, temeljac i liker.",
        "Kuhati dok se umak ne reducira i zgusne.",
        "Narezati pačja prsa i poslužiti prelivena umakom."
    ],
    equipment: [{ name: "Tava" }, { name: "Šporet" }],
    macros: { protein: 40, carbs: 20, fat: 35, calories: 555 }
  },
  {
    id: 19,
    name: "Rizoto sa Šafranom",
    category: Category.FANCY,
    description: "Kremasti i luksuzni 'Risotto alla Milanese', obojen i aromatiziran dragocjenim šafranom.",
    image: "https://picsum.photos/seed/rizotosafran/800/600",
    ingredients: [
        { name: "Arborio riža", quantity: "300g" },
        { name: "Crveni luk", quantity: "1 manja glavica" },
        { name: "Bijelo vino", quantity: "100ml" },
        { name: "Goveđi temeljac", quantity: "1l, vruć" },
        { name: "Šafran", quantity: "prstohvat niti" },
        { name: "Parmezan", quantity: "80g, rendani" },
        { name: "Puter", quantity: "50g" }
    ],
    steps: [
        "Potopiti niti šafrana u malo vrućeg temeljca.",
        "Na pola količine putera dinstati sitno sjeckani luk.",
        "Dodati rižu i pržiti par minuta dok ne postane staklasta.",
        "Zaliti vinom i miješati dok ne ispari.",
        "Postepeno dodavati vrući temeljac, kutlaču po kutlaču, miješajući.",
        "Na pola kuhanja dodati temeljac sa šafranom.",
        "Kuhati oko 18 minuta. Riža treba biti 'al dente'.",
        "Skloniti s vatre, umiješati ostatak putera i parmezan. Energično miješati da postane kremasto.",
        "Ostaviti da odstoji minutu i poslužiti."
    ],
    equipment: [{ name: "Šerpa" }, { name: "Kutlača" }, { name: "Šporet" }],
    macros: { protein: 15, carbs: 65, fat: 25, calories: 545 }
  },
  {
    id: 20,
    name: "Grčka Salata",
    category: Category.SALATE,
    description: "Osvježavajuća kombinacija svježeg povrća, maslina i kremastog feta sira, začinjena maslinovim uljem i origanom.",
    image: "https://picsum.photos/seed/grckasalata/800/600",
    ingredients: [
        { name: "Paradajz", quantity: "4 kom" },
        { name: "Krastavac", quantity: "1 kom" },
        { name: "Crvena paprika", quantity: "1 kom" },
        { name: "Crveni luk", quantity: "1/2 glavice" },
        { name: "Feta sir", quantity: "200g" },
        { name: "Kalamata masline", quantity: "1 šaka" },
        { name: "Maslinovo ulje", quantity: "4 kašike" },
        { name: "Origano", quantity: "1 kašičica" }
    ],
    steps: [
        "Paradajz, krastavac i papriku isjeći na krupnije komade.",
        "Luk isjeći na tanke kolutove.",
        "Sve povrće staviti u zdjelu i lagano promiješati.",
        "Na vrh staviti komad feta sira ili ga isjeći na kocke.",
        "Dodati masline.",
        "Preliti maslinovim uljem i posuti origanom.",
        "Poslužiti odmah."
    ],
    equipment: [{ name: "Velika zdjela za salatu" }, { name: "Nož" }],
    macros: { protein: 10, carbs: 15, fat: 25, calories: 325 }
  },
  {
    id: 21,
    name: "Cezar Salata sa Piletinom",
    category: Category.SALATE,
    description: "Jedna od najpoznatijih salata na svijetu, sa hrskavom zelenom salatom, piletinom, krutonima i bogatim dresingom.",
    image: "https://picsum.photos/seed/cezarsalata/800/600",
    ingredients: [
        { name: "Zelena salata (Romana)", quantity: "1 glavica" },
        { name: "Pileća prsa", quantity: "200g" },
        { name: "Stari hljeb", quantity: "2 kriške" },
        { name: "Majoneza", quantity: "3 kašike" },
        { name: "Parmezan", quantity: "30g" },
        { name: "Inćun", quantity: "1 filet (opcionalno)" },
        { name: "Bijeli luk", quantity: "1 čehno" },
        { name: "Limunov sok", quantity: "1 kašika" }
    ],
    steps: [
        "Piletinu ispeći na grill tavi i isjeći na trakice.",
        "Hljeb isjeći na kockice, preliti maslinovim uljem i ispeći u rerni da postanu hrskavi krutoni.",
        "Za dresing, pomiješati majonezu, rendani parmezan, limunov sok, sitno sjeckani bijeli luk i inćun.",
        "Zelenu salatu iskidati na komade, staviti u zdjelu.",
        "Dodati piletinu, krutone i preliti dresingom.",
        "Lagano promiješati i posuti dodatnim parmezanom."
    ],
    equipment: [{ name: "Grill tava" }, { name: "Zdjela" }, { name: "Rerna" }],
    macros: { protein: 35, carbs: 20, fat: 30, calories: 490 }
  },
  {
    id: 22,
    name: "Pizza Capricciosa",
    category: Category.PIZZE,
    description: "Bogata i popularna pizza sa šunkom, gljivama, artičokama i maslinama.",
    image: "https://picsum.photos/seed/capricciosa/800/600",
    ingredients: [
        { name: "Tijesto za pizzu", quantity: "1 kugla" },
        { name: "Paradajz sos", quantity: "1/2 šolje" },
        { name: "Mozzarella", quantity: "150g" },
        { name: "Kuhana šunka", quantity: "100g" },
        { name: "Svježe gljive", quantity: "50g" },
        { name: "Srca artičoka iz tegle", quantity: "4 kom" },
        { name: "Crne masline", quantity: "1 šaka" },
        { name: "Origano", quantity: "prstohvat" }
    ],
    steps: [
        "Zagrijati rernu na maksimalnu temperaturu.",
        "Razvući tijesto, premazati ga paradajz sosom.",
        "Poredati rendanu mozzarellu.",
        "Rasporediti šunku, narezane gljive, artičoke i masline.",
        "Posuti origanom.",
        "Peći 8-12 minuta dok rub ne postane zlatan i hrskav.",
        "Poslužiti vruće."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 30, carbs: 75, fat: 35, calories: 735 }
  },
  {
    id: 23,
    name: "Pizza Quattro Formaggi",
    category: Category.PIZZE,
    description: "Raj za ljubitelje sira, pizza sa četiri vrste sira koje se savršeno tope i kombinuju.",
    image: "https://picsum.photos/seed/4sira/800/600",
    ingredients: [
        { name: "Tijesto za pizzu", quantity: "1 kugla" },
        { name: "Mozzarella", quantity: "100g" },
        { name: "Gorgonzola", quantity: "50g" },
        { name: "Parmezan", quantity: "30g" },
        { name: "Pecorino ili neki drugi tvrdi sir", quantity: "30g" },
        { name: "Maslinovo ulje", quantity: "1 kašika" }
    ],
    steps: [
        "Zagrijati rernu na maksimalnu temperaturu.",
        "Razvući tijesto. Ovo je 'bijela' pizza, pa ne ide paradajz sos.",
        "Pokapati tijesto maslinovim uljem.",
        "Rasporediti sireve: prvo mozzarellu, zatim komadiće gorgonzole i na kraju posuti parmezanom i pecorinom.",
        "Peći 8-10 minuta dok se sirevi ne istope i rubovi ne porumene.",
        "Može se posuti sa malo svježeg bibera prije serviranja."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 35, carbs: 70, fat: 45, calories: 825 }
  },
  {
    id: 24,
    name: "Nachosi sa sirom i salsom",
    category: Category.JUNK_FOOD,
    description: "Savršena grickalica za druženje: hrskavi tortilja čips preliven rastopljenim sirom, salsom i pavlakom.",
    image: "https://picsum.photos/seed/nachos/800/600",
    ingredients: [
        { name: "Tortilja čips", quantity: "1 velika kesa" },
        { name: "Cheddar sir", quantity: "200g, rendani" },
        { name: "Salsa sos", quantity: "1 šolja" },
        { name: "Kisela pavlaka", quantity: "1/2 šolje" },
        { name: "Jalapeno papričice", quantity: "po želji" },
        { name: "Mljeveno meso (opcionalno)", quantity: "200g, pripremljeno" }
    ],
    steps: [
        "Zagrijati rernu na 180°C.",
        "Rasporediti tortilja čips na veliku tepsiju obloženu papirom za pečenje.",
        "Ravnomjerno posuti rendanim sirom (i mljevenim mesom ako koristite).",
        "Peći 5-7 minuta, dok se sir potpuno ne otopi.",
        "Izvaditi iz rerne, preliti salsom i kiselom pavlakom.",
        "Dodati jalapeno papričice za ljutinu.",
        "Poslužiti odmah."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }],
    macros: { protein: 20, carbs: 40, fat: 35, calories: 555 }
  },
  {
    id: 25,
    name: "Pohovani Kolutići Luka",
    category: Category.JUNK_FOOD,
    description: "Hrskavi, zlatni i neodoljivi kolutići luka, prženi u dubokom ulju.",
    image: "https://picsum.photos/seed/onionrings/800/600",
    ingredients: [
        { name: "Velika glavica crvenog luka", quantity: "2 kom" },
        { name: "Brašno", quantity: "1 šolja" },
        { name: "Jaje", quantity: "1 kom" },
        { name: "Mlijeko ili pivo", quantity: "1 šolja" },
        { name: "Prašak za pecivo", quantity: "1 kašičica" },
        { name: "So, biber, aleva paprika", quantity: "po ukusu" },
        { name: "Ulje za prženje", quantity: "1l" }
    ],
    steps: [
        "Luk isjeći na debele kolutove i razdvojiti ih.",
        "U zdjeli pomiješati brašno, prašak za pecivo i začine.",
        "U drugoj zdjeli umutiti jaje i mlijeko/pivo.",
        "Sipati mokre sastojke u suhe i umutiti glatko tijesto.",
        "Zagrijati ulje u dubokoj šerpi na 180°C.",
        "Umočiti svaki kolut luka u tijesto i pažljivo spuštati u vrelo ulje.",
        "Pržiti 2-3 minute, dok ne postanu zlatno-smeđi.",
        "Vaditi na papirni ubrus da se ocijedi višak masnoće.",
        "Poslužiti sa omiljenim umakom."
    ],
    equipment: [{ name: "Duboka šerpa ili friteza" }, { name: "Zdjela" }],
    macros: { protein: 8, carbs: 35, fat: 25, calories: 400 }
  },
  {
    id: 26,
    name: "Begova Čorba",
    category: Category.BOSANSKA,
    description: "Svečana i bogata čorba sa piletinom, bamijom i povrćem, koja se tradicionalno služi na početku obroka.",
    image: "https://picsum.photos/seed/begovacorba/800/600",
    ingredients: [
      { name: "Pileće meso (bijelo meso i batak)", quantity: "500g" },
      { name: "Mrkva", quantity: "2 kom" },
      { name: "Peršunov korijen", quantity: "1 kom" },
      { name: "Bamija (sušena ili svježa)", quantity: "50g" },
      { name: "Riža", quantity: "2 kašike" },
      { name: "Jaje", quantity: "1 žumanjak" },
      { name: "Kisela pavlaka", quantity: "3 kašike" },
      { name: "Limunov sok", quantity: "po ukusu" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Skuhati piletinu sa korjenastim povrćem u slanoj vodi.",
      "Kada je kuhano, izvaditi meso i povrće. Procijediti temeljac.",
      "Meso i povrće isjeći na sitne kockice.",
      "U procijeđeni temeljac dodati rižu i bamiju i kuhati 15 minuta.",
      "Vratiti isjeckano meso i povrće u temeljac.",
      "U posebnoj posudi umutiti žumanjak sa pavlakom.",
      "Lagano dodavati malo vruće čorbe u smjesu od jaja i pavlake, neprestano miješajući, a zatim sve uliti nazad u čorbu.",
      "Začiniti limunovim sokom, solju i biberom. Poslužiti toplo."
    ],
    equipment: [{ name: "Lonac" }, { name: "Šporet" }],
    macros: { protein: 25, carbs: 15, fat: 10, calories: 250 }
  },
  {
    id: 27,
    name: "Sirnica (Burek sa sirom)",
    category: Category.BOSANSKA,
    description: "Sočna pita od domaćih jufki, bogato punjena smjesom od sira i kajmaka.",
    image: "https://picsum.photos/seed/sirnica/800/600",
    ingredients: [
      { name: "Gotove jufke za pitu", quantity: "500g" },
      { name: "Mladi sir", quantity: "500g" },
      { name: "Kisela pavlaka ili kajmak", quantity: "200g" },
      { name: "Jaja", quantity: "2 kom" },
      { name: "So", quantity: "po ukusu" },
      { name: "Ulje i puter", quantity: "za premazivanje" }
    ],
    steps: [
      "U zdjeli pomiješati sir, pavlaku, jaja i so da se dobije fil.",
      "Otopiti puter i pomiješati ga sa uljem.",
      "Raširiti prvu jufku, premazati je mješavinom ulja i putera.",
      "Preko nje staviti drugu jufku, također je premazati.",
      "Na jedan kraj jufke rasporediti dio fila.",
      "Pažljivo urolati jufke u dugačku, tanku rolnu.",
      "U nauljenoj okrugloj tepsiji slagati rolnu u krug, počevši od sredine, kao puž.",
      "Ponavljati postupak dok se ne potroše sve jufke i fil.",
      "Premazati pitu odozgo ostatkom masnoće.",
      "Peći u rerni na 200°C oko 30-40 minuta, dok ne postane zlatno-smeđa.",
      "Po želji, pečenu pitu poprskati sa malo vode i kratko vratiti u rernu da omekša."
    ],
    equipment: [{ name: "Rerna" }, { name: "Okrugla tepsija" }, { name: "Zdjela" }],
    macros: { protein: 20, carbs: 40, fat: 25, calories: 465 }
  },
  {
    id: 28,
    name: "Pileći Ražnjići sa Roštilja",
    category: Category.PILETINA,
    description: "Sočni komadi piletine marinirani i nabodeni na štapiće sa povrćem, savršeni za roštilj.",
    image: "https://picsum.photos/seed/pileciraznjici/800/600",
    ingredients: [
      { name: "Pileća prsa", quantity: "600g" },
      { name: "Crvena paprika", quantity: "1 kom" },
      { name: "Zelena paprika", quantity: "1 kom" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Maslinovo ulje", quantity: "4 kašike" },
      { name: "Limunov sok", quantity: "2 kašike" },
      { name: "Origano, bijeli luk u prahu, so, biber", quantity: "po ukusu" },
      { name: "Drveni štapići za ražnjiće", quantity: "8-10 kom" }
    ],
    steps: [
      "Drvene štapiće potopiti u vodu na 30 minuta da ne izgore.",
      "Piletinu isjeći na kocke veličine zalogaja.",
      "U zdjeli pomiješati maslinovo ulje, limunov sok i začine za marinadu.",
      "Dodati piletinu u marinadu i ostaviti da stoji bar 30 minuta.",
      "Papriku i luk isjeći na komade slične veličine kao piletina.",
      "Na štapiće naizmjenično nizati piletinu, papriku i luk.",
      "Peći na zagrijanom roštilju ili grill tavi 10-15 minuta, okrećući povremeno, dok piletina ne bude pečena.",
      "Poslužiti odmah uz salatu ili rižu."
    ],
    equipment: [{ name: "Roštilj ili grill tava" }, { name: "Zdjela" }],
    macros: { protein: 45, carbs: 8, fat: 15, calories: 347 }
  },
  {
    id: 29,
    name: "Čili con Carne",
    category: Category.PROTEINSKA,
    description: "Pikantno i zasitno jelo iz Teksasa sa mljevenim mesom, grahom i čili papričicama.",
    image: "https://picsum.photos/seed/ciliconcarne/800/600",
    ingredients: [
      { name: "Mljevena junetina", quantity: "500g" },
      { name: "Crveni grah iz konzerve", quantity: "1 konzerva" },
      { name: "Sjeckani paradajz iz konzerve", quantity: "1 konzerva" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Bijeli luk", quantity: "2 čehna" },
      { name: "Čili u prahu", quantity: "1-2 kašike (po ukusu)" },
      { name: "Kumin", quantity: "1 kašika" },
      { name: "Goveđi temeljac", quantity: "200ml" }
    ],
    steps: [
      "Na ulju dinstati sjeckani crveni i bijeli luk.",
      "Dodati mljeveno meso i pržiti dok ne posmeđi.",
      "Ocijediti višak masnoće.",
      "Dodati čili u prahu, kumin, so i biber. Promiješati.",
      "Umiješati sjeckani paradajz i temeljac.",
      "Pustiti da proključa, pa smanjiti vatru i kuhati poklopljeno 1 sat.",
      "Dodati ocijeđeni grah i kuhati još 15-20 minuta.",
      "Poslužiti uz rižu, kiselu pavlaku i rendani sir."
    ],
    equipment: [{ name: "Veliki lonac" }, { name: "Šporet" }],
    macros: { protein: 30, carbs: 25, fat: 20, calories: 400 }
  },
  {
    id: 30,
    name: "Oslić pečen u foliji s povrćem",
    category: Category.NISKOKALORICNA,
    description: "Jednostavan i zdrav način pripreme ribe, gdje se svi sokovi i arome sačuvaju u paketiću od folije.",
    image: "https://picsum.photos/seed/oslicufoliji/800/600",
    ingredients: [
      { name: "Fileti oslića", quantity: "2 kom" },
      { name: "Cherry paradajz", quantity: "10 kom" },
      { name: "Tikvica", quantity: "1 manja" },
      { name: "Limun", quantity: "1 kom" },
      { name: "Maslinovo ulje", quantity: "2 kašike" },
      { name: "Svježi peršun i ruzmarin", quantity: "po ukusu" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Zagrijati rernu na 200°C.",
      "Na komad aluminijske folije staviti filet oslića.",
      "Okolo rasporediti prepolovljeni cherry paradajz i tikvicu isječenu na kolutove.",
      "Posoliti, pobiberiti, preliti maslinovim uljem i posuti sjeckanim začinskim biljem.",
      "Na vrh staviti nekoliko kriški limuna.",
      "Zatvoriti foliju tako da se napravi paketić.",
      "Peći u rerni 20-25 minuta.",
      "Pažljivo otvoriti paketić i poslužiti."
    ],
    equipment: [{ name: "Rerna" }, { name: "Aluminijska folija" }],
    macros: { protein: 30, carbs: 10, fat: 8, calories: 232 }
  },
  {
    id: 31,
    name: "Goveđi Wellington",
    category: Category.FANCY,
    description: "Vrhunac svečane trpeze: goveđi file obložen paštetom od gljiva, pršutom i lisnatim tijestom, pečen do savršenstva.",
    image: "https://picsum.photos/seed/wellington/800/600",
    ingredients: [
      { name: "Goveđi file (srednji dio)", quantity: "800g" },
      { name: "Lisnato tijesto", quantity: "1 pakovanje (500g)" },
      { name: "Šampinjoni", quantity: "400g" },
      { name: "Pršut", quantity: "100g, tanko rezan" },
      { name: "Senf (Dijon)", quantity: "2 kašike" },
      { name: "Jaje", quantity: "1, za premazivanje" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Goveđi file posoliti, pobiberiti i kratko zapeći sa svih strana na vreloj tavi. Ostaviti da se ohladi, pa premazati senfom.",
      "Gljive sitno isjeckati i dinstati na suhoj tavi dok sva voda ne ispari. Ohladiti.",
      "Na prozirnu foliju poslagati kriške pršuta jednu do druge.",
      "Preko pršuta ravnomjerno rasporediti ohlađene gljive (duxelles).",
      "Na sredinu staviti file i pomoću folije sve čvrsto umotati. Staviti u frižider na 30 minuta.",
      "Razvaljati lisnato tijesto, odmotati file i umotati ga u tijesto. Višak odrezati i ukrasiti po želji.",
      "Premazati umućenim jajetom i peći u rerni na 200°C 20-25 minuta za medium-rare.",
      "Ostaviti da odmara 10 minuta prije rezanja."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tava" }, { name: "Daska za rezanje" }],
    macros: { protein: 45, carbs: 30, fat: 40, calories: 660 }
  },
  {
    id: 32,
    name: "Caprese Salata",
    category: Category.SALATE,
    description: "Jednostavna, ali elegantna italijanska salata koja slavi boje italijanske zastave sa paradajzom, mozzarellom i bosiljkom.",
    image: "https://picsum.photos/seed/capresesalata/800/600",
    ingredients: [
      { name: "Zreli paradajz", quantity: "3 kom" },
      { name: "Svježa mozzarella (Buffalo)", quantity: "250g" },
      { name: "Svježi bosiljak", quantity: "1 šaka listova" },
      { name: "Kvalitetno maslinovo ulje", quantity: "3 kašike" },
      { name: "So, svježe mljeveni biber", quantity: "po ukusu" }
    ],
    steps: [
      "Paradajz i mozzarellu isjeći na kriške debljine oko 1 cm.",
      "Na tanjiru naizmjenično slagati krišku paradajza, pa krišku mozzarelle.",
      "Između redova ubaciti svježe listove bosiljka.",
      "Sve preliti maslinovim uljem.",
      "Posoliti i pobiberiti neposredno prije serviranja.",
      "Poslužiti kao lagano predjelo ili prilog."
    ],
    equipment: [{ name: "Tanjir za serviranje" }, { name: "Nož" }],
    macros: { protein: 15, carbs: 8, fat: 25, calories: 317 }
  },
  {
    id: 33,
    name: "Pizza Prosciutto e Funghi",
    category: Category.PIZZE,
    description: "Popularna i ukusna kombinacija kuhane šunke i svježih gljiva na klasičnoj podlozi.",
    image: "https://picsum.photos/seed/prosciuttofunghi/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla" },
      { name: "Paradajz sos", quantity: "1/2 šolje" },
      { name: "Mozzarella", quantity: "150g" },
      { name: "Kuhana šunka (Prosciutto cotto)", quantity: "100g" },
      { name: "Svježi šampinjoni", quantity: "80g, narezani na listiće" },
      { name: "Origano", quantity: "prstohvat" }
    ],
    steps: [
      "Zagrijati rernu na maksimalnu temperaturu.",
      "Razvući tijesto, premazati ga paradajz sosom.",
      "Poredati rendanu mozzarellu.",
      "Rasporediti šunku i narezane gljive.",
      "Posuti origanom.",
      "Peći 8-12 minuta dok rub ne postane zlatan i hrskav.",
      "Poslužiti odmah."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 28, carbs: 72, fat: 30, calories: 670 }
  },
  {
    id: 34,
    name: "Hot Dog",
    category: Category.JUNK_FOOD,
    description: "Američki klasik: kuhana ili pečena hrenovka u mekom pecivu sa senfom, kečapom i drugim dodacima.",
    image: "https://picsum.photos/seed/hotdog/800/600",
    ingredients: [
      { name: "Hrenovke", quantity: "4 kom" },
      { name: "Peciva za hot dog", quantity: "4 kom" },
      { name: "Kečap", quantity: "po želji" },
      { name: "Senf", quantity: "po želji" },
      { name: "Sjeckani luk, kiseli krastavci", quantity: "opcionalni dodaci" }
    ],
    steps: [
      "Hrenovke skuhati u vodi ili ispeći na grill tavi.",
      "Peciva za hot dog kratko zagrijati ili prepoloviti i prepeći na tavi.",
      "Staviti hrenovku u pecivo.",
      "Dodati kečap, senf i druge dodatke po želji.",
      "Poslužiti odmah dok je toplo."
    ],
    equipment: [{ name: "Lonac ili grill tava" }],
    macros: { protein: 12, carbs: 30, fat: 18, calories: 330 }
  },
  {
    id: 35,
    name: "Tufahije",
    category: Category.BOSANSKA,
    description: "Slatki desert od kuhanih jabuka punjenih orasima i prelivene slatkim sirupom (agdom) i šlagom.",
    image: "https://picsum.photos/seed/tufahije/800/600",
    ingredients: [
      { name: "Jabuke (Zlatni delišes)", quantity: "6 kom" },
      { name: "Šećer", quantity: "500g" },
      { name: "Voda", quantity: "1l" },
      { name: "Orasi, mljeveni", quantity: "150g" },
      { name: "Šlag", quantity: "za dekoraciju" },
      { name: "Limun", quantity: "1 kom" }
    ],
    steps: [
      "Jabuke oguliti, izdubiti im sredinu.",
      "U šerpi prokuhati vodu sa šećerom i sokom od pola limuna da se napravi agda.",
      "Pažljivo spuštati jabuke u ključalu agdu i kuhati ih 5-10 minuta dok malo ne omekšaju. Paziti da se ne prekuhaju.",
      "Vaditi jabuke i ostaviti da se ohlade.",
      "Pomiješati mljevene orahe sa malo agde da se dobije smjesa za punjenje.",
      "Napuniti ohlađene jabuke smjesom od oraha.",
      "Preliti jabuke ohlađenom agdom i dobro rashladiti u frižideru.",
      "Prije serviranja, ukrasiti šlagom."
    ],
    equipment: [{ name: "Šerpa" }, { name: "Nož za dubljenje" }],
    macros: { protein: 5, carbs: 70, fat: 15, calories: 435 }
  },
  {
    id: 36,
    name: "Piletina Teriyaki",
    category: Category.PILETINA,
    description: "Japansko jelo sa sočnom piletinom u slatko-slanom teriyaki umaku, posluženo sa rižom i brokulom.",
    image: "https://picsum.photos/seed/teriyakipiletina/800/600",
    ingredients: [
      { name: "Pileći zabatak bez kostiju", quantity: "500g" },
      { name: "Soja sos", quantity: "100ml" },
      { name: "Sake ili bijelo vino", quantity: "50ml" },
      { name: "Mirin (slatko rižino vino)", quantity: "50ml" },
      { name: "Šećer", quantity: "2 kašike" },
      { name: "Đumbir, rendani", quantity: "1 kašičica" },
      { name: "Susam i mladi luk", quantity: "za posipanje" }
    ],
    steps: [
      "U maloj šerpi pomiješati soja sos, sake, mirin i šećer. Kuhati dok se šećer ne otopi.",
      "Piletinu isjeći na komade.",
      "Na malo ulja u tavi ispeći piletinu dok ne porumeni.",
      "Dodati rendani đumbir i preliti teriyaki umakom.",
      "Kuhati na srednjoj vatri dok se umak ne zgusne i ne obloži piletinu.",
      "Poslužiti odmah preko riže, posuto susamom i sjeckanim mladim lukom."
    ],
    equipment: [{ name: "Tava" }, { name: "Mala šerpa" }],
    macros: { protein: 40, carbs: 35, fat: 20, calories: 480 }
  },
  {
    id: 37,
    name: "Leća Varivo sa Kobasicom",
    category: Category.PROTEINSKA,
    description: "Gusto, hranjivo i utješno varivo od leće, obogaćeno okusom dimljene kobasice i povrća.",
    image: "https://picsum.photos/seed/lecavarivo/800/600",
    ingredients: [
      { name: "Smeđa ili zelena leća", quantity: "250g" },
      { name: "Domaća kobasica", quantity: "200g" },
      { name: "Mrkva", quantity: "2 kom" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Celerova stabljika", quantity: "1 kom" },
      { name: "Koncentrat paradajza", quantity: "1 kašika" },
      { name: "Lovorov list", quantity: "1 kom" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Leću oprati i potopiti u vodu na sat vremena (ako je potrebno).",
      "Na malo ulja prodinstati sjeckani luk, mrkvu i celer.",
      "Dodati kobasicu isječenu na kolutove i kratko je propržiti.",
      "Umiješati koncentrat paradajza.",
      "Dodati ocijeđenu leću, lovorov list i naliti vodom da sve prekrije.",
      "Kuhati na laganoj vatri oko 45-60 minuta, dok leća ne omekša.",
      "Začiniti po ukusu i poslužiti toplo."
    ],
    equipment: [{ name: "Lonac" }, { name: "Šporet" }],
    macros: { protein: 25, carbs: 40, fat: 18, calories: 422 }
  },
  {
    id: 38,
    name: "Omlet od Bjelanjaka sa Povrćem",
    category: Category.NISKOKALORICNA,
    description: "Lagan i proteinski doručak, savršen za početak dana bez osjećaja težine.",
    image: "https://picsum.photos/seed/omletbjelanjak/800/600",
    ingredients: [
      { name: "Bjelanjci", quantity: "od 4 jajeta" },
      { name: "Špinat", quantity: "1 šaka" },
      { name: "Gljive", quantity: "3-4 kom, narezane" },
      { name: "Cherry paradajz", quantity: "5 kom, prepolovljen" },
      { name: "So, biber", quantity: "po ukusu" },
      { name: "Kokosovo ulje", quantity: "1 kašičica" }
    ],
    steps: [
      "Na tavi zagrijati kokosovo ulje.",
      "Dodati gljive i pržiti dok ne omekšaju.",
      "Dodati špinat i paradajz, pržiti još minutu.",
      "Bjelanjke umutiti sa solju i biberom.",
      "Preliti bjelanjke preko povrća u tavi.",
      "Peći na laganoj vatri dok se omlet ne stegne, pa ga preklopiti.",
      "Poslužiti odmah."
    ],
    equipment: [{ name: "Tava" }],
    macros: { protein: 20, carbs: 5, fat: 5, calories: 145 }
  },
  {
    id: 39,
    name: "Tatarski Biftek",
    category: Category.FANCY,
    description: "Sirovi, fino sjeckani goveđi file, začinjen i poslužen sa žumanjkom i prepečenim hljebom. Jelo za hrabre gurmane.",
    image: "https://picsum.photos/seed/tatarski/800/600",
    ingredients: [
      { name: "Svjež goveđi file", quantity: "200g" },
      { name: "Svjež žumanjak", quantity: "1 kom" },
      { name: "Kapari", quantity: "1 kašičica" },
      { name: "Kiseli krastavci", quantity: "1 kom, sitno sjeckan" },
      { name: "Crveni luk (ljutika)", quantity: "1 kom, sitno sjeckan" },
      { name: "Senf, kečap, Worcestershire sos", quantity: "po ukusu" },
      { name: "Prepečeni hljeb i puter", quantity: "za serviranje" }
    ],
    steps: [
      "Goveđi file OBAVEZNO mora biti izuzetno svjež i kvalitetan. Očistiti ga od svih žilica.",
      "File vrlo, vrlo sitno nasjeckati oštrim nožem (nikako mljeti).",
      "U zdjeli pomiješati sjeckano meso sa svim ostalim sastojcima osim žumanjka. Začiniti po želji.",
      "Oblikovati biftek na tanjiru, napraviti udubljenje u sredini.",
      "U udubljenje pažljivo staviti svjež žumanjak.",
      "Poslužiti odmah sa prepečenim hljebom i puterom."
    ],
    equipment: [{ name: "Oštar nož" }, { name: "Zdjela" }],
    macros: { protein: 45, carbs: 15, fat: 25, calories: 465 }
  },
  {
    id: 40,
    name: "Salata od Cikle i Kozjeg Sira",
    category: Category.SALATE,
    description: "Elegantna i zemljana salata koja spaja slatkoću cikle, kremoznost kozjeg sira i hrskavost oraha.",
    image: "https://picsum.photos/seed/salatacikla/800/600",
    ingredients: [
      { name: "Kuhana cikla", quantity: "3 kom" },
      { name: "Rukola", quantity: "100g" },
      { name: "Meki kozji sir", quantity: "100g" },
      { name: "Orasi", quantity: "1 šaka, tostirani" },
      { name: "Maslinovo ulje", quantity: "3 kašike" },
      { name: "Aceto balsamico", quantity: "1 kašika" },
      { name: "Med", quantity: "1 kašičica" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Ciklu isjeći na tanke kriške ili kockice.",
      "Na tanjir za serviranje rasporediti rukolu.",
      "Preko rukole poredati ciklu.",
      "Izmrviti kozji sir preko salate.",
      "Posuti tostiranim orasima.",
      "U maloj posudi umutiti maslinovo ulje, aceto balsamico, med, so i biber za dresing.",
      "Preliti salatu dresingom neposredno prije serviranja."
    ],
    equipment: [{ name: "Zdjela za salatu" }, { name: "Mala posuda za dresing" }],
    macros: { protein: 12, carbs: 20, fat: 28, calories: 380 }
  },
  {
    id: 41,
    name: "Pizza Diavola",
    category: Category.PIZZE,
    description: "Vatrena i ljuta pizza za one koji vole pikantno, sa pikantnom salamom i čili papričicama.",
    image: "https://picsum.photos/seed/diavola/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla" },
      { name: "Paradajz sos", quantity: "1/2 šolje" },
      { name: "Mozzarella", quantity: "150g" },
      { name: "Pikantna salama (npr. Ventricina, Spianata)", quantity: "80g" },
      { name: "Svježa čili papričica ili tucana ljuta paprika", quantity: "po ukusu" },
      { name: "Masline (opcionalno)", quantity: "po želji" }
    ],
    steps: [
      "Zagrijati rernu na maksimalnu temperaturu.",
      "Razvući tijesto, premazati ga paradajz sosom.",
      "Poredati rendanu mozzarellu.",
      "Rasporediti kriške pikantne salame.",
      "Posuti sjeckanom čili papričicom ili tucanom paprikom.",
      "Peći 8-12 minuta.",
      "Poslužiti vruće."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 25, carbs: 70, fat: 38, calories: 722 }
  },
  {
    id: 42,
    name: "Quesadilla sa Piletinom i Sirom",
    category: Category.JUNK_FOOD,
    description: "Brzo i ukusno meksičko jelo, savršeno za ručak ili večeru. Hrskava tortilja punjena piletinom i rastopljenim sirom.",
    image: "https://picsum.photos/seed/quesadilla/800/600",
    ingredients: [
      { name: "Tortilje", quantity: "4 kom" },
      { name: "Kuhana ili pečena piletina, isjeckana", quantity: "200g" },
      { name: "Sir koji se lako topi (Cheddar, Gauda)", quantity: "150g, rendani" },
      { name: "Crveni luk, paprika (opcionalno)", quantity: "sitno sjeckano" },
      { name: "Salsa i pavlaka", quantity: "za serviranje" }
    ],
    steps: [
      "Na suhu tavu staviti jednu tortilju.",
      "Na jednu polovinu tortilje rasporediti sir, piletinu i povrće (ako koristite).",
      "Preklopiti drugu polovinu tortilje preko fila.",
      "Peći na srednjoj vatri 2-3 minute sa svake strane, dok tortilja ne postane zlatna i hrskava, a sir se otopi.",
      "Ponavljati postupak sa preostalim tortiljama.",
      "Isjeći na trouglove i poslužiti sa salsom i pavlakom."
    ],
    equipment: [{ name: "Tava" }],
    macros: { protein: 30, carbs: 35, fat: 25, calories: 485 }
  },
  {
    id: 43,
    name: "Krompiruša (Burek sa krompirom)",
    category: Category.BOSANSKA,
    description: "Jedna od najomiljenijih pita, sa tanko rezanim krompirom i lukom, umotana u hrskave jufke.",
    image: "https://picsum.photos/seed/krompirusa/800/600",
    ingredients: [
        { name: "Gotove jufke za pitu", quantity: "500g" },
        { name: "Krompir", quantity: "1kg" },
        { name: "Crveni luk", quantity: "2 glavice" },
        { name: "So, biber", quantity: "po ukusu" },
        { name: "Ulje", quantity: "za premazivanje i fil" }
    ],
    steps: [
        "Krompir oguliti i isjeći na vrlo sitne kockice. Luk sitno nasjeckati.",
        "Pomiješati krompir i luk, posoliti, pobiberiti i dodati malo ulja.",
        "Raširiti prvu jufku, premazati je uljem.",
        "Preko nje staviti drugu jufku, također je premazati.",
        "Na jedan kraj jufke rasporediti dio fila od krompira.",
        "Urolati jufke u rolnu i slagati u nauljenu tepsiju (okruglu ili četvrtastu).",
        "Ponavljati postupak dok se ne utroše sastojci.",
        "Premazati pitu uljem i peći na 200°C oko 45 minuta, dok ne porumeni.",
        "Pečenu pitu po želji zaliti sa malo prokuhale slane vode da omekša."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }, { name: "Zdjela" }],
    macros: { protein: 10, carbs: 55, fat: 15, calories: 400 }
  },
  {
    id: 44,
    name: "Pikantna Pileća Krilca (Buffalo Wings)",
    category: Category.PILETINA,
    description: "Hrskava pileća krilca pržena ili pečena, prelivena pikantnim puterastim umakom. Prste da poližeš!",
    image: "https://picsum.photos/seed/buffalowings/800/600",
    ingredients: [
        { name: "Pileća krilca", quantity: "1kg" },
        { name: "Ljuti sos (Frank's RedHot)", quantity: "100ml" },
        { name: "Puter", quantity: "50g, otopljen" },
        { name: "Bijeli luk u prahu", quantity: "1 kašičica" },
        { name: "So", quantity: "1 kašičica" },
        { name: "Brašno ili prašak za pecivo", quantity: "za hrskavost" },
        { name: "Blue cheese umak i celer", quantity: "za serviranje" }
    ],
    steps: [
        "Zagrijati rernu na 200°C ili fritezu.",
        "Krilca dobro osušiti papirnim ubrusima.",
        "Uvaljati krilca u mješavinu brašna (ili praška za pecivo), soli i bijelog luka u prahu.",
        "Poredati krilca na rešetku u tepsiji i peći u rerni 40-50 minuta, okrećući na pola pečenja, dok ne postanu hrskava.",
        "U zdjeli pomiješati otopljeni puter i ljuti sos.",
        "Pečena krilca prebaciti u zdjelu sa umakom i dobro protresti da se sva oblože.",
        "Poslužiti odmah uz blue cheese umak i štapiće celera."
    ],
    equipment: [{ name: "Rerna" }, { name: "Zdjela" }, { name: "Rešetka za pečenje" }, {name: "Air Fryer"}],
    macros: { protein: 40, carbs: 5, fat: 35, calories: 500 }
  },
  {
    id: 45,
    name: "Svinjski Kotleti sa Pireom od Jabuka",
    category: Category.PROTEINSKA,
    description: "Klasična kombinacija slatkog i slanog, sočni svinjski kotlet savršeno se slaže sa domaćim pireom od jabuka.",
    image: "https://picsum.photos/seed/svinjskikotleti/800/600",
    ingredients: [
        { name: "Svinjski kotleti s kosti", quantity: "4 kom" },
        { name: "Jabuke (kiselije sorte)", quantity: "3 kom" },
        { name: "Cimet", quantity: "1/2 kašičice" },
        { name: "Smeđi šećer", quantity: "1 kašika" },
        { name: "Ruzmarin, so, biber", quantity: "po ukusu" }
    ],
    steps: [
        "Jabuke oguliti, očistiti i narezati na kockice.",
        "Staviti jabuke u šerpu sa malo vode, šećerom i cimetom. Kuhati na laganoj vatri dok ne omekšaju, pa ih izgnječiti viljuškom.",
        "Kotlete posoliti, pobiberiti i natrljati sjeckanim ruzmarinom.",
        "Na zagrijanoj tavi peći kotlete 5-6 minuta sa svake strane, dok ne budu pečeni.",
        "Ostaviti kotlete da odstoje par minuta.",
        "Poslužiti tople kotlete sa pireom od jabuka."
    ],
    equipment: [{ name: "Tava" }, { name: "Šerpa" }],
    macros: { protein: 45, carbs: 20, fat: 30, calories: 530 }
  },
  {
    id: 46,
    name: "Salata od Tune bez Majoneze",
    category: Category.NISKOKALORICNA,
    description: "Lagana, svježa i zdrava verzija salate od tune, sa hrskavim povrćem i dresingom od limuna i maslinovog ulja.",
    image: "https://picsum.photos/seed/tunasalatabezmajo/800/600",
    ingredients: [
        { name: "Tuna iz konzerve u salamuri", quantity: "1 konzerva" },
        { name: "Crveni luk", quantity: "1/4 glavice, sitno sjeckan" },
        { name: "Celerova stabljika", quantity: "1 kom, sitno sjeckana" },
        { name: "Kukuruz šećerac", quantity: "1/2 šolje" },
        { name: "Maslinovo ulje", quantity: "1 kašika" },
        { name: "Limunov sok", quantity: "2 kašike" },
        { name: "So, biber, peršun", quantity: "po ukusu" }
    ],
    steps: [
        "Ocijediti tunu.",
        "U zdjeli pomiješati tunu, sjeckani luk, celer i kukuruz.",
        "U maloj posudi umutiti maslinovo ulje, limunov sok, so i biber.",
        "Preliti dresing preko salate i lagano promiješati.",
        "Pospite svježim peršunom.",
        "Poslužiti kao namaz za sendviče ili samostalno."
    ],
    equipment: [{ name: "Zdjela" }],
    macros: { protein: 25, carbs: 15, fat: 8, calories: 232 }
  },
  {
    id: 47,
    name: "Crni Rižoto sa Sipom",
    category: Category.FANCY,
    description: "Dramatičan i ukusan specijalitet sa Jadrana, gdje riža dobija crnu boju od sipinog crnila.",
    image: "https://picsum.photos/seed/crnirizoto/800/600",
    ingredients: [
        { name: "Sipa", quantity: "500g, očišćena (sačuvati crnilo)" },
        { name: "Arborio riža", quantity: "250g" },
        { name: "Crveni luk", quantity: "1 glavica" },
        { name: "Bijeli luk", quantity: "2 čehna" },
        { name: "Bijelo vino", quantity: "100ml" },
        { name: "Riblji temeljac", quantity: "oko 1l" },
        { name: "Maslinovo ulje, peršun, so, biber", quantity: "po ukusu" }
    ],
    steps: [
        "Sipu narezati na kolutiće ili kockice.",
        "Na maslinovom ulju dinstati sjeckani crveni luk, pa dodati bijeli luk i sipu. Dinstati 15 minuta.",
        "Dodati rižu i pržiti je par minuta.",
        "Zaliti vinom i kuhati dok ne ispari.",
        "Sipino crnilo razmutiti u malo temeljca i dodati u rižoto.",
        "Postepeno dodavati vrući temeljac, miješajući, dok riža ne bude kuhana.",
        "Na kraju umiješati svježi peršun, dodatno maslinovo ulje i začiniti po ukusu.",
        "Poslužiti odmah."
    ],
    equipment: [{ name: "Šerpa" }, { name: "Šporet" }],
    macros: { protein: 25, carbs: 55, fat: 15, calories: 455 }
  },
  {
    id: 48,
    name: "Salata Nicoise",
    category: Category.SALATE,
    description: "Kompletna i bogata francuska salata sa tunom, kuhanim jajima, krompirom, mahunama i maslinama.",
    image: "https://picsum.photos/seed/nicoisesalata/800/600",
    ingredients: [
        { name: "Tuna iz konzerve u ulju", quantity: "1 konzerva" },
        { name: "Mladi krompir", quantity: "200g, kuhan" },
        { name: "Zelene mahune", quantity: "100g, blanširane" },
        { name: "Jaja", quantity: "2 kom, tvrdo kuhana" },
        { name: "Paradajz", quantity: "2 kom" },
        { name: "Crne masline", quantity: "šaka" },
        { name: "Listovi zelene salate", quantity: "za podlogu" }
    ],
    steps: [
        "Na tanjir rasporediti listove zelene salate.",
        "Na salatu aranžirati kuhan krompir narezan na ploške, mahune, paradajz narezan na kriške.",
        "Dodati komade tune i masline.",
        "Jaja isjeći na četvrtine i dodati u salatu.",
        "Sve preliti klasičnim vinaigrette dresingom (maslinovo ulje, ocat, senf, so, biber).",
        "Poslužiti kao kompletan obrok."
    ],
    equipment: [{ name: "Lonac" }, { name: "Tanjir za serviranje" }],
    macros: { protein: 30, carbs: 25, fat: 20, calories: 400 }
  },
  {
    id: 49,
    name: "Pizza Calzone",
    category: Category.PIZZE,
    description: "Preklopljena pizza ili 'džep' od tijesta, punjena sirom, šunkom i drugim sastojcima.",
    image: "https://picsum.photos/seed/calzone/800/600",
    ingredients: [
        { name: "Tijesto za pizzu", quantity: "1 kugla" },
        { name: "Rikota sir", quantity: "100g" },
        { name: "Mozzarella, rendana", quantity: "100g" },
        { name: "Kuhana šunka ili salama", quantity: "80g, sjeckana" },
        { name: "Paradajz sos", quantity: "za serviranje" },
        { name: "Jaje", quantity: "1, za premazivanje" }
    ],
    steps: [
        "Zagrijati rernu na 220°C.",
        "Razvući tijesto u krug.",
        "Na jednu polovinu tijesta staviti fil: pomiješati rikotu, mozzarellu i šunku. Ostaviti rub prazan.",
        "Preklopiti drugu polovinu tijesta preko fila i dobro zatvoriti rubove.",
        "Napraviti mali rez na vrhu da para može izlaziti.",
        "Premazati umućenim jajetom.",
        "Peći 20-25 minuta dok ne postane zlatno-smeđe.",
        "Poslužiti toplo uz paradajz sos sa strane."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }],
    macros: { protein: 35, carbs: 75, fat: 40, calories: 800 }
  },
  {
    id: 50,
    name: "Fish and Chips",
    category: Category.JUNK_FOOD,
    description: "Britanski klasik: hrskavo pohovani fileti bijele ribe posluženi sa debelim pomfritom.",
    image: "https://picsum.photos/seed/fishandchips/800/600",
    ingredients: [
        { name: "Fileti bakalara ili oslića", quantity: "4 kom" },
        { name: "Krompir", quantity: "1kg" },
        { name: "Brašno", quantity: "1.5 šolja" },
        { name: "Pivo (svijetlo)", quantity: "1 šolja" },
        { name: "Prašak za pecivo", quantity: "1 kašičica" },
        { name: "Ulje za prženje", quantity: "1.5l" },
        { name: "So, biber, ocat", quantity: "po ukusu" }
    ],
    steps: [
        "Krompir oguliti i isjeći na debele prutiće. Pržiti u ulju na 160°C oko 5-6 minuta. Izvaditi i ocijediti.",
        "Za tijesto, pomiješati brašno, prašak za pecivo, so i postepeno dodavati pivo miješajući dok ne dobijete gusto tijesto.",
        "Filete ribe posušiti, uvaljati u malo brašna pa u tijesto.",
        "Zagrijati ulje na 180°C. Pažljivo spuštati ribu i pržiti 5-7 minuta dok ne postane zlatna i hrskava.",
        "Vratiti krompir u vrelo ulje i pržiti još 2-3 minute dok ne postane hrskav.",
        "Poslužiti ribu i pomfrit zajedno, posoliti i poprskati octom po želji."
    ],
    equipment: [{ name: "Duboka šerpa ili friteza" }, { name: "Zdjela" }],
    macros: { protein: 30, carbs: 60, fat: 40, calories: 720 }
  },
  {
    id: 51,
    name: "Hadžijski Ćevap",
    category: Category.BOSANSKA,
    description: "Sočni komadi teletine i povrća dinstani zajedno, a zatim zapečeni u zemljanoj posudi prekrivenoj tijestom.",
    image: "https://picsum.photos/seed/hadzijskicevap/800/600",
    ingredients: [
        { name: "Teletina od buta", quantity: "600g" },
        { name: "Crveni luk", quantity: "2 glavice" },
        { name: "Paradajz", quantity: "2 kom" },
        { name: "Paprika", quantity: "1 kom" },
        { name: "Pavlaka", quantity: "2 kašike" },
        { name: "Brašno", quantity: "150g (za poklopac od tijesta)" },
        { name: "So, biber, crvena paprika", quantity: "po ukusu" }
    ],
    steps: [
        "Meso i povrće isjeći na kocke.",
        "Na ulju dinstati luk, pa dodati meso i pržiti dok ne porumeni.",
        "Dodati papriku i paradajz, začiniti i dinstati 20 minuta.",
        "Na kraju umiješati pavlaku.",
        "Smjesu prebaciti u vatrostalne ili zemljane posude.",
        "Od brašna, vode i malo soli zamijesiti tijesto i razvaljati ga.",
        "Prekriti posude tijestom umjesto poklopca.",
        "Peći u rerni na 200°C oko 20-25 minuta, dok tijesto ne porumeni.",
        "Jede se tako što se lomi hrskavi poklopac od tijesta i umače u jelo."
    ],
    equipment: [{ name: "Rerna" }, { name: "Zemljana ili vatrostalna posuda" }, { name: "Tava" }],
    macros: { protein: 40, carbs: 25, fat: 20, calories: 440 }
  },
  {
    id: 52,
    name: "Sataraš sa Piletinom",
    category: Category.PILETINA,
    description: "Lagano ljetno jelo od dinstanog povrća (paprika, paradajz, luk) obogaćeno komadićima sočne piletine.",
    image: "https://picsum.photos/seed/sataraspiletina/800/600",
    ingredients: [
        { name: "Pileća prsa", quantity: "400g" },
        { name: "Paprika (razne boje)", quantity: "4 kom" },
        { name: "Paradajz", quantity: "3 kom" },
        { name: "Crveni luk", quantity: "2 glavice" },
        { name: "Jaja (opcionalno)", quantity: "2 kom" },
        { name: "So, biber, peršun", quantity: "po ukusu" }
    ],
    steps: [
        "Piletinu isjeći na kocke, posoliti i pobiberiti.",
        "Na tavi ispeći piletinu dok ne porumeni. Izvaditi sa strane.",
        "U istoj tavi dinstati sjeckani luk dok ne postane staklast.",
        "Dodati papriku sječenu na trakice i dinstati 15 minuta.",
        "Dodati oguljen i sjeckan paradajz i kuhati još 15 minuta.",
        "Vratiti piletinu u tavu.",
        "Po želji, na kraju umutiti jaja i umiješati u sataraš.",
        "Posuti svježim peršunom i poslužiti uz rižu ili hljeb."
    ],
    equipment: [{ name: "Tava" }, { name: "Šporet" }],
    macros: { protein: 35, carbs: 15, fat: 10, calories: 290 }
  },
  {
    id: 53,
    name: "Grah Varivo s Dimljenim Mesom",
    category: Category.PROTEINSKA,
    description: "Gusto i krepko varivo, klasik domaće kuhinje, sa dimljenim rebrima ili slaninom za poseban šmek.",
    image: "https://picsum.photos/seed/grahvarivo/800/600",
    ingredients: [
        { name: "Smeđi grah (suhi)", quantity: "500g" },
        { name: "Dimljena rebra ili slanina", quantity: "300g" },
        { name: "Mrkva", quantity: "2 kom" },
        { name: "Crveni luk", quantity: "1 glavica" },
        { name: "Bijeli luk", quantity: "2 čehna" },
        { name: "Brašno i crvena paprika", quantity: "za zapršku" }
    ],
    steps: [
        "Grah potopiti preko noći. Sutradan ocijediti i staviti kuhati u novu vodu.",
        "Kada prokuha, prvu vodu baciti. Naliti novu vodu, dodati dimljeno meso i sjeckanu mrkvu.",
        "Kuhati na laganoj vatri 2-3 sata dok grah i meso ne omekšaju.",
        "Na ulju propržiti sjeckani luk, dodati brašno i crvenu papriku da se napravi zaprška.",
        "Umiješati zapršku u grah, dodati sjeckani bijeli luk i kuhati još 10 minuta.",
        "Začiniti po ukusu i poslužiti."
    ],
    equipment: [{ name: "Veliki lonac" }, { name: "Tava za zapršku" }],
    macros: { protein: 30, carbs: 50, fat: 20, calories: 500 }
  },
  {
    id: 54,
    name: "Paprike Punjene Rižom i Povrćem",
    category: Category.NISKOKALORICNA,
    description: "Posna i lagana verzija punjenih paprika, idealna za vegetarijance i one koji paze na kalorije.",
    image: "https://picsum.photos/seed/posnepaprike/800/600",
    ingredients: [
        { name: "Paprike babure", quantity: "8 kom" },
        { name: "Riža", quantity: "1 šolja" },
        { name: "Crveni luk", quantity: "2 glavice" },
        { name: "Mrkva", quantity: "2 kom" },
        { name: "Paradajz pire", quantity: "200ml" },
        { name: "So, biber, peršun", quantity: "po ukusu" }
    ],
    steps: [
        "Paprike očistiti od sjemenki.",
        "Na ulju dinstati sjeckani luk i rendanu mrkvu.",
        "Dodati opranu rižu i kratko propržiti.",
        "Dodati pola količine paradajz pirea, začiniti i promiješati.",
        "Napuniti paprike pripremljenim filom.",
        "Poredati paprike u šerpu, naliti vodom i ostatkom paradajz pirea.",
        "Kuhati na laganoj vatri oko 1 sat.",
        "Poslužiti toplo."
    ],
    equipment: [{ name: "Šerpa" }, { name: "Tava" }],
    macros: { protein: 8, carbs: 45, fat: 5, calories: 257 }
  },
  {
    id: 55,
    name: "Janjeći Kotleti s Mentom",
    category: Category.FANCY,
    description: "Sočni janjeći kotleti sa roštilja, posluženi sa klasičnim osvježavajućim umakom od mente.",
    image: "https://picsum.photos/seed/janjecikotleti/800/600",
    ingredients: [
        { name: "Janjeći kotleti (french rack)", quantity: "8 kom" },
        { name: "Svježa menta", quantity: "1 šaka, sjeckana" },
        { name: "Bijeli vinski ocat", quantity: "3 kašike" },
        { name: "Šećer", quantity: "1 kašičica" },
        { name: "Bijeli luk, ruzmarin", quantity: "za marinadu" },
        { name: "Maslinovo ulje", quantity: "po potrebi" }
    ],
    steps: [
        "Kotlete natrljati maslinovim uljem, sjeckanim bijelim lukom, ruzmarinom, solju i biberom. Ostaviti da se mariniraju.",
        "Za umak: u posudi pomiješati sjeckanu mentu, ocat, šećer i 2 kašike vruće vode. Ostaviti da stoji.",
        "Zagrijati grill tavu na jaku temperaturu.",
        "Peći kotlete 2-3 minute sa svake strane za ružičastu sredinu.",
        "Ostaviti meso da odmori par minuta.",
        "Poslužiti kotlete prelivene umakom od mente."
    ],
    equipment: [{ name: "Grill tava" }, { name: "Zdjela" }],
    macros: { protein: 40, carbs: 5, fat: 30, calories: 450 }
  },
  {
    id: 56,
    name: "Krompir Salata",
    category: Category.SALATE,
    description: "Klasična salata od kuhanog krompira i luka, začinjena octom i uljem. Odličan prilog uz meso ili ribu.",
    image: "https://picsum.photos/seed/krompirsalata/800/600",
    ingredients: [
        { name: "Krompir", quantity: "1kg" },
        { name: "Crveni luk", quantity: "1 velika glavica" },
        { name: "Jabukovo sirće (ocat)", quantity: "5 kašika" },
        { name: "Suncokretovo ulje", quantity: "5 kašika" },
        { name: "Topla voda ili temeljac", quantity: "100ml" },
        { name: "So, svježe mljeveni biber", quantity: "po ukusu" }
    ],
    steps: [
        "Krompir skuhati u ljusci. Paziti da se ne prekuha.",
        "Još topao krompir oguliti i narezati na tanke ploške.",
        "Luk narezati na tanke kolutove.",
        "U velikoj zdjeli pažljivo pomiješati krompir i luk.",
        "U manjoj posudi pomiješati ocat, ulje, toplu vodu, so i biber.",
        "Preliti preko krompira i lagano promiješati.",
        "Ostaviti da odstoji najmanje 30 minuta da se okusi prožmu.",
        "Poslužiti na sobnoj temperaturi."
    ],
    equipment: [{ name: "Lonac" }, { name: "Velika zdjela za salatu" }],
    macros: { protein: 5, carbs: 35, fat: 15, calories: 300 }
  },
  {
    id: 57,
    name: "Havajska Pizza",
    category: Category.PIZZE,
    description: "Kontroverzna, ali mnogima omiljena pizza sa slatko-slanom kombinacijom šunke i ananasa.",
    image: "https://picsum.photos/seed/hawaiianpizza/800/600",
    ingredients: [
        { name: "Tijesto za pizzu", quantity: "1 kugla" },
        { name: "Paradajz sos", quantity: "1/2 šolje" },
        { name: "Mozzarella", quantity: "150g" },
        { name: "Kuhana šunka", quantity: "100g" },
        { name: "Ananas iz konzerve, komadići", quantity: "1/2 šolje" }
    ],
    steps: [
        "Zagrijati rernu na maksimalnu temperaturu.",
        "Razvući tijesto i premazati ga paradajz sosom.",
        "Poredati rendanu mozzarellu.",
        "Rasporediti komade šunke i dobro ocijeđene komadiće ananasa.",
        "Peći 8-12 minuta dok rub ne postane zlatan.",
        "Poslužiti odmah."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 25, carbs: 80, fat: 28, calories: 672 }
  },
  {
    id: 58,
    name: "Mozzarella Štapići",
    category: Category.JUNK_FOOD,
    description: "Rastopljeni sir u hrskavom omotaču, prženi i posluženi sa marinara sosom. Neodoljivo!",
    image: "https://picsum.photos/seed/mozzarellasticks/800/600",
    ingredients: [
        { name: "Mozzarella sir u bloku", quantity: "250g" },
        { name: "Jaja", quantity: "2 kom" },
        { name: "Brašno", quantity: "1/2 šolje" },
        { name: "Krušne mrvice (prezla)", quantity: "1 šolja" },
        { name: "Italijanski začini (origano, bosiljak)", quantity: "1 kašičica" },
        { name: "Ulje za prženje", quantity: "1l" },
        { name: "Marinara sos", quantity: "za umakanje" }
    ],
    steps: [
        "Mozzarellu isjeći na štapiće debljine prsta.",
        "Pripremiti tri posude: jednu sa brašnom, drugu sa umućenim jajima, treću sa krušnim mrvicama pomiješanim sa začinima.",
        "Svaki štapić uvaljati prvo u brašno, pa u jaja, pa u krušne mrvice. Za deblji omotač, ponoviti postupak (jaja pa mrvice).",
        "Pohovane štapiće staviti u zamrzivač na najmanje 30 minuta da se stegnu.",
        "Zagrijati ulje na 180°C.",
        "Pržiti štapiće 1-2 minute, samo dok ne postanu zlatno-smeđi. Ne pržiti predugo da sir ne iscuri.",
        "Vaditi na papirni ubrus i poslužiti odmah sa toplim marinara sosom."
    ],
    equipment: [{ name: "Duboka šerpa ili friteza" }, { name: "Tri posude za pohovanje" }],
    macros: { protein: 20, carbs: 25, fat: 30, calories: 450 }
  },
  {
    id: 59,
    name: "Đuveč",
    category: Category.BOSANSKA,
    description: "Balkansko jelo od riže i raznog povrća, ponekad i mesa, zapečeno u rerni. Sočno i puno okusa.",
    image: "https://picsum.photos/seed/djuvec/800/600",
    ingredients: [
      { name: "Riža", quantity: "1.5 šolja" },
      { name: "Crveni luk", quantity: "2 glavice" },
      { name: "Mrkva", quantity: "2 kom" },
      { name: "Paprika", quantity: "2 kom" },
      { name: "Grašak", quantity: "1 šolja" },
      { name: "Paradajz", quantity: "2 kom" },
      { name: "Voda ili temeljac", quantity: "3 šolje" },
      { name: "So, biber, vegeta, crvena paprika", quantity: "po ukusu" },
      { name: "Ulje", quantity: "po potrebi" }
    ],
    steps: [
      "Na ulju dinstati sjeckani luk dok ne omekša.",
      "Dodati rendanu mrkvu i sjeckanu papriku, pa dinstati još 10 minuta.",
      "Dodati opranu rižu i kratko je propržiti sa povrćem.",
      "Dodati grašak i sjeckani paradajz.",
      "Sve začiniti, dobro promiješati i prebaciti u vatrostalnu posudu ili tepsiju.",
      "Naliti vrućom vodom ili temeljcem.",
      "Peći u rerni na 200°C oko 30-40 minuta, dok riža ne upije svu tečnost i ne omekša.",
      "Pred kraj pečenja, može se lagano promiješati.",
      "Poslužiti kao glavno jelo ili prilog."
    ],
    equipment: [{ name: "Rerna" }, { name: "Vatrostalna posuda" }, { name: "Tava" }],
    macros: { protein: 10, carbs: 60, fat: 12, calories: 388 }
  },
  {
    id: 60,
    name: "Piletina Cordon Bleu",
    category: Category.PILETINA,
    description: "Pileći odrezak punjen šunkom i sirom, pohovan i pržen do zlatne hrskavosti.",
    image: "https://picsum.photos/seed/cordonbleu/800/600",
    ingredients: [
      { name: "Pileća prsa", quantity: "4 odreska" },
      { name: "Kuhana šunka", quantity: "4 kriške" },
      { name: "Sir (Gauda, Ementaler)", quantity: "4 kriške" },
      { name: "Brašno, jaja, krušne mrvice", quantity: "za pohovanje" },
      { name: "So, biber", quantity: "po ukusu" },
      { name: "Ulje za prženje", quantity: "po potrebi" }
    ],
    steps: [
      "Pileće odreske istanjiti batom za meso.",
      "Posoliti i pobiberiti sa obje strane.",
      "Na svaki odrezak staviti krišku šunke i krišku sira.",
      "Pažljivo urolati meso i pričvrstiti čačkalicama ako je potrebno.",
      "Uvaljati svaku rolnicu u brašno, zatim u umućena jaja, i na kraju u krušne mrvice.",
      "Pržiti u dubljem ulju na srednjoj temperaturi 10-15 minuta, okrećući, dok ne budu zlatno-smeđe i pečene iznutra.",
      "Izvaditi na papirni ubrus da se ocijedi višak masnoće i izvaditi čačkalice.",
      "Poslužiti uz pomfrit i salatu."
    ],
    equipment: [{ name: "Tava" }, { name: "Bat za meso" }],
    macros: { protein: 50, carbs: 30, fat: 35, calories: 635 }
  },
  {
    id: 61,
    name: "Bakalar na Bijelo",
    category: Category.PROTEINSKA,
    description: "Tradicionalni dalmatinski namaz od kuhanog bakalara, krompira, bijelog luka i maslinovog ulja.",
    image: "https://picsum.photos/seed/bakalarnabijelo/800/600",
    ingredients: [
      { name: "Sušeni bakalar", quantity: "250g" },
      { name: "Krompir", quantity: "250g" },
      { name: "Bijeli luk", quantity: "4-5 čehna" },
      { name: "Maslinovo ulje", quantity: "150-200ml" },
      { name: "So, biber, peršun", quantity: "po ukusu" }
    ],
    steps: [
      "Bakalar namakati u vodi 2-3 dana, mijenjajući vodu.",
      "Kuhati bakalar dok ne omekša. Očistiti ga od kostiju i kože, meso sačuvati.",
      "Skuhati krompir i izgnječiti ga.",
      "U zdjelu staviti meso bakalara, dodati krompir, sitno sjeckani bijeli luk i peršun.",
      "Početi miješati drvenom kuhačom ili mikserom, postepeno dodajući maslinovo ulje dok se ne dobije kremasta pašteta.",
      "Začiniti solju i biberom.",
      "Dobro ohladiti i poslužiti uz prepečeni hljeb."
    ],
    equipment: [{ name: "Lonac" }, { name: "Zdjela" }, { name: "Mikser (opcionalno)" }],
    macros: { protein: 30, carbs: 20, fat: 25, calories: 425 }
  },
  {
    id: 62,
    name: "Juha od Paradajza i Bosiljka",
    category: Category.NISKOKALORICNA,
    description: "Klasična, kremasta i aromatična juha koja grije dušu, sa savršenim parom - paradajzom i bosiljkom.",
    image: "https://picsum.photos/seed/paradajzjuha/800/600",
    ingredients: [
      { name: "Pelat paradajz iz konzerve", quantity: "800g" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Bijeli luk", quantity: "2 čehna" },
      { name: "Povrtni temeljac", quantity: "500ml" },
      { name: "Svježi bosiljak", quantity: "1 velika šaka" },
      { name: "Maslinovo ulje", quantity: "2 kašike" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Na maslinovom ulju dinstati sjeckani crveni i bijeli luk.",
      "Dodati pelat paradajz i temeljac.",
      "Kuhati na laganoj vatri 20 minuta.",
      "Dodati listove bosiljka (sačuvati nekoliko za dekoraciju).",
      "Sve izmiksati štapnim mikserom do glatke teksture.",
      "Začiniti solju i biberom.",
      "Poslužiti toplo, ukrašeno listićima bosiljka i po želji sa malo kisele pavlake."
    ],
    equipment: [{ name: "Lonac" }, { name: "Štapni mikser" }],
    macros: { protein: 4, carbs: 15, fat: 8, calories: 148 }
  },
  {
    id: 63,
    name: "Svinjska Potrbušina Sporo Pečena",
    category: Category.FANCY,
    description: "Komad svinjske potrbušine sa super hrskavom kožicom i sočnim, mekanim mesom koje se topi u ustima.",
    image: "https://picsum.photos/seed/porkbelly/800/600",
    ingredients: [
      { name: "Svinjska potrbušina sa kožom", quantity: "1.5 kg" },
      { name: "Krupna morska so", quantity: "2 kašike" },
      { name: "Komorač, sjemenke", quantity: "1 kašika" },
      { name: "Biber u zrnu", quantity: "1 kašika" },
      { name: "Maslinovo ulje", quantity: "po potrebi" }
    ],
    steps: [
      "Kožu potrbušine dobro osušiti i zarezati oštrim nožem.",
      "U avanu istucati komorač i biber.",
      "Natrljati meso sa svih strana (osim kože) sa mješavinom začina i malo ulja.",
      "Kožu dobro natrljati krupnom solju i maslinovim uljem.",
      "Staviti meso u tepsiju i peći u rerni na 160°C 2.5 do 3 sata.",
      "Na kraju, pojačati temperaturu na 230°C i peći još 20-30 minuta dok koža ne postane jako hrskava i napuhana (pucketa).",
      "Ostaviti da odmara 15 minuta prije rezanja."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }, { name: "Avan" }],
    macros: { protein: 30, carbs: 1, fat: 55, calories: 619 }
  },
  {
    id: 64,
    name: "Voćna Salata sa Mentom",
    category: Category.SALATE,
    description: "Osvježavajuća i lagana salata od sezonskog voća sa dresingom od limete i svježe mente.",
    image: "https://picsum.photos/seed/vocnasalata/800/600",
    ingredients: [
      { name: "Jagode", quantity: "1 šolja" },
      { name: "Borovnice", quantity: "1 šolja" },
      { name: "Kivi", quantity: "2 kom" },
      { name: "Mango", quantity: "1 kom" },
      { name: "Svježa menta", quantity: "šaka listova" },
      { name: "Sok od 1 limete", quantity: "po potrebi" },
      { name: "Med", quantity: "1 kašika (opcionalno)" }
    ],
    steps: [
      "Svo voće oprati i isjeckati na komade veličine zalogaja.",
      "Staviti svo voće u veliku zdjelu.",
      "Mentu sitno nasjeckati.",
      "U maloj posudi pomiješati sok od limete i med (ako koristite).",
      "Preliti voće dresingom, dodati sjeckanu mentu i lagano promiješati.",
      "Ostaviti u frižideru da se ohladi prije serviranja."
    ],
    equipment: [{ name: "Velika zdjela za salatu" }, { name: "Nož" }],
    macros: { protein: 2, carbs: 25, fat: 1, calories: 117 }
  },
  {
    id: 65,
    name: "Pizza sa Pršutom, Rikolom i Cherry Paradajzom",
    category: Category.PIZZE,
    description: "Svježa i elegantna pizza gdje se pršut i rikola dodaju nakon pečenja kako bi sačuvali svoj okus.",
    image: "https://picsum.photos/seed/pizzaprsutrikola/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla" },
      { name: "Paradajz sos", quantity: "1/2 šolje" },
      { name: "Svježa mozzarella", quantity: "125g" },
      { name: "Pršut", quantity: "80g" },
      { name: "Rikola", quantity: "šaka" },
      { name: "Cherry paradajz", quantity: "šaka, prepolovljen" },
      { name: "Parmezan u listićima", quantity: "po želji" }
    ],
    steps: [
      "Zagrijati rernu na maksimalnu temperaturu.",
      "Razvući tijesto, premazati ga paradajz sosom i rasporediti komade mozzarelle.",
      "Peći 8-10 minuta.",
      "Izvaditi pečenu pizzu iz rerne.",
      "Preko vruće pizze rasporediti pršut, rikolu i cherry paradajz.",
      "Posuti listićima parmezana i pokapati sa malo maslinovog ulja.",
      "Poslužiti odmah."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 30, carbs: 75, fat: 35, calories: 735 }
  },
  {
    id: 66,
    name: "Američke Palačinke sa Javorovim Sirupom",
    category: Category.JUNK_FOOD,
    description: "Debele, mekane i pufnaste palačinke, savršen doručak za vikend, prelivene javorovim sirupom i puterom.",
    image: "https://picsum.photos/seed/americkepalacinke/800/600",
    ingredients: [
      { name: "Brašno", quantity: "1.5 šolja" },
      { name: "Prašak za pecivo", quantity: "2 kašičice" },
      { name: "Šećer", quantity: "2 kašike" },
      { name: "So", quantity: "1/2 kašičice" },
      { name: "Mlijeko", quantity: "1.25 šolja" },
      { name: "Jaje", quantity: "1 kom" },
      { name: "Otopljeni puter", quantity: "3 kašike" },
      { name: "Javorov sirup i puter", quantity: "za serviranje" }
    ],
    steps: [
      "U jednoj zdjeli pomiješati suhe sastojke: brašno, prašak za pecivo, šećer i so.",
      "U drugoj zdjeli umutiti mokre sastojke: mlijeko, jaje i otopljeni puter.",
      "Sipati mokre sastojke u suhe i kratko promiješati. Ostaviti nekoliko grudvica.",
      "Zagrijati blago nauljenu tavu na srednjoj temperaturi.",
      "Sipati oko 1/4 šolje tijesta za svaku palačinku.",
      "Peći 2-3 minute, dok se na površini ne pojave mjehurići. Okrenuti i peći još 1-2 minute.",
      "Slagati palačinke jednu na drugu, na vrh staviti kockicu putera i obilno preliti javorovim sirupom."
    ],
    equipment: [{ name: "Tava" }, { name: "Dvije zdjele" }],
    macros: { protein: 10, carbs: 60, fat: 15, calories: 415 }
  },
  {
    id: 67,
    name: "Japrak",
    category: Category.BOSANSKA,
    description: "Sarmice od lišća raštike (posebna vrsta kupusa), punjene mljevenim mesom i rižom, sporo kuhane u saftu.",
    image: "https://picsum.photos/seed/japrak/800/600",
    ingredients: [
      { name: "Listovi raštike", quantity: "20-30 kom" },
      { name: "Mljevena junetina", quantity: "500g" },
      { name: "Riža", quantity: "100g" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Suho meso", quantity: "100g (za kuhanje)" },
      { name: "So, biber, crvena paprika", quantity: "po ukusu" }
    ],
    steps: [
      "Listove raštike blanširati u vreloj slanoj vodi da omekšaju.",
      "Za fil, pomiješati mljeveno meso, rižu, sjeckani luk i začine.",
      "Na svaki list stavljati kašiku fila i motati male, čvrste sarmice.",
      "Na dno lonca staviti nekoliko listova raštike i komade suhog mesa.",
      "Slagati japrake (sarmice) u lonac, gusto jedan do drugog.",
      "Naliti vodom da prekrije japrake, poklopiti tanjirom da se ne dižu.",
      "Kuhati na laganoj vatri 2-3 sata.",
      "Po želji, na kraju napraviti laganu zapršku i preliti preko.",
      "Poslužiti toplo uz pire krompir."
    ],
    equipment: [{ name: "Veliki lonac" }, { name: "Šporet" }],
    macros: { protein: 30, carbs: 15, fat: 20, calories: 360 }
  },
  {
    id: 68,
    name: "Piletina sa Rižom i Povrćem (Stir-fry)",
    category: Category.PILETINA,
    description: "Brz i zdrav obrok iz woka, sa komadićima piletine i hrskavim povrćem u ukusnom soja sosu.",
    image: "https://picsum.photos/seed/piletinastirfry/800/600",
    ingredients: [
      { name: "Pileća prsa", quantity: "400g" },
      { name: "Brokula", quantity: "1 glavica" },
      { name: "Mrkva", quantity: "2 kom" },
      { name: "Paprika", quantity: "1 kom" },
      { name: "Soja sos", quantity: "4 kašike" },
      { name: "Med", quantity: "1 kašika" },
      { name: "Đumbir i bijeli luk", quantity: "sitno sjeckani" },
      { name: "Kuhana riža", quantity: "za serviranje" }
    ],
    steps: [
      "Piletinu i povrće isjeći na tanke trakice.",
      "U woku ili dubokoj tavi na vrelom ulju brzo ispržiti piletinu. Izvaditi sa strane.",
      "U istu tavu dodati povrće (prvo tvrđe kao mrkva, zatim mekše kao paprika i brokula) i pržiti par minuta da ostane hrskavo.",
      "Vratiti piletinu u tavu.",
      "Pomiješati soja sos, med, đumbir i bijeli luk, pa preliti preko piletine i povrća.",
      "Sve dobro promiješati i kuhati još minutu-dvije.",
      "Poslužiti odmah preko kuhane riže."
    ],
    equipment: [{ name: "Wok ili duboka tava" }],
    macros: { protein: 40, carbs: 45, fat: 10, calories: 430 }
  },
  {
    id: 69,
    name: "Šnicle u Saftu",
    category: Category.PROTEINSKA,
    description: "Mekane juneće šnicle koje se tope u ustima, u bogatom i gustom saftu, savršene uz pire krompir.",
    image: "https://picsum.photos/seed/snicleusaftu/800/600",
    ingredients: [
      { name: "Juneće šnicle (od buta)", quantity: "600g" },
      { name: "Crveni luk", quantity: "2 glavice" },
      { name: "Brašno", quantity: "2 kašike" },
      { name: "Senf", quantity: "1 kašika" },
      { name: "Lovorov list, so, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Šnicle istući batom za meso, posoliti i pobiberiti.",
      "Svaku šniclu uvaljati u brašno sa jedne strane.",
      "Na zagrijanom ulju kratko propržiti šnicle sa obje strane, počevši od pobrašnjene. Izvaditi sa strane.",
      "Na istom ulju dinstati sitno sjeckani luk dok ne omekša.",
      "Vratiti šnicle u tavu, dodati senf, lovorov list i naliti vodom da ih prekrije.",
      "Poklopiti i dinstati na laganoj vatri 1.5 - 2 sata, dok meso potpuno ne omekša.",
      "Po potrebi dolijevati vodu. Saft treba da se zgusne od brašna sa šnicli.",
      "Poslužiti uz pire krompir."
    ],
    equipment: [{ name: "Dublja tava sa poklopcem" }],
    macros: { protein: 45, carbs: 10, fat: 20, calories: 400 }
  },
  {
    id: 70,
    name: "Grčki Jogurt sa Voćem i Orasima",
    category: Category.NISKOKALORICNA,
    description: "Zdrav, brz i zasitan doručak ili užina, bogat proteinima.",
    image: "https://picsum.photos/seed/grckijogurt/800/600",
    ingredients: [
      { name: "Grčki jogurt", quantity: "200g" },
      { name: "Miješano bobičasto voće", quantity: "1/2 šolje" },
      { name: "Orasi ili bademi", quantity: "šaka" },
      { name: "Med", quantity: "1 kašičica" }
    ],
    steps: [
      "U zdjelu staviti grčki jogurt.",
      "Preko jogurta dodati svježe bobičasto voće.",
      "Posuti sjeckanim orasima ili bademima.",
      "Preliti kašičicom meda.",
      "Poslužiti odmah."
    ],
    equipment: [{ name: "Zdjela" }],
    macros: { protein: 20, carbs: 25, fat: 15, calories: 315 }
  },
  {
    id: 71,
    name: "Vitello Tonnato",
    category: Category.FANCY,
    description: "Pijemontski klasik: tanko rezana, hladna kuhana teletina prelivena kremastim umakom od tune i kapara.",
    image: "https://picsum.photos/seed/vitellotonnato/800/600",
    ingredients: [
      { name: "Teleći frikando", quantity: "500g" },
      { name: "Tuna iz konzerve u ulju", quantity: "100g" },
      { name: "Majoneza", quantity: "150g" },
      { name: "Inćuni", quantity: "3 fileta" },
      { name: "Kapari", quantity: "1 kašika" },
      { name: "Mrkva, celer, luk", quantity: "za kuhanje mesa" }
    ],
    steps: [
      "Teletinu kuhati u vodi sa povrćem dok ne omekša. Ohladiti u temeljcu.",
      "Za umak, u blenderu pomiješati ocijeđenu tunu, majonezu, inćune i pola količine kapara. Miksati do glatke smjese.",
      "Ohlađeno meso narezati na vrlo tanke kriške.",
      "Slagati kriške mesa na tanjir za serviranje.",
      "Obilno preliti umakom od tune.",
      "Ukrasiti ostatkom kapara.",
      "Dobro ohladiti prije serviranja."
    ],
    equipment: [{ name: "Lonac" }, { name: "Blender" }],
    macros: { protein: 35, carbs: 5, fat: 25, calories: 385 }
  },
  {
    id: 72,
    name: "Šopska Salata",
    category: Category.SALATE,
    description: "Popularna balkanska salata od paradajza, krastavca, paprike i luka, bogato prekrivena rendanim sirom.",
    image: "https://picsum.photos/seed/sopskasalata/800/600",
    ingredients: [
      { name: "Paradajz", quantity: "3 kom" },
      { name: "Krastavac", quantity: "1 kom" },
      { name: "Svježa paprika", quantity: "1 kom" },
      { name: "Crveni luk", quantity: "1/2 glavice" },
      { name: "Feta ili drugi bijeli sir", quantity: "150g" },
      { name: "Ulje i ocat", quantity: "po želji" }
    ],
    steps: [
      "Sve povrće isjeći na sitne kockice.",
      "Staviti u zdjelu, posoliti i lagano promiješati.",
      "Začiniti uljem i octom po želji (često se servira nezačinjeno, pa svako dodaje za sebe).",
      "Preko salate obilno narendati sir.",
      "Poslužiti odmah kao prilog ili lagan obrok."
    ],
    equipment: [{ name: "Zdjela" }, { name: "Rende" }],
    macros: { protein: 10, carbs: 12, fat: 20, calories: 268 }
  },
  {
    id: 73,
    name: "Bijela Pizza sa Bijelim Lukom i Rikotom",
    category: Category.PIZZE,
    description: "Kremasta i aromatična bijela pizza bez paradajz sosa, sa rikotom, mozzarellom i pečenim bijelim lukom.",
    image: "https://picsum.photos/seed/bijelapizza/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla" },
      { name: "Rikota sir", quantity: "150g" },
      { name: "Mozzarella, rendana", quantity: "100g" },
      { name: "Bijeli luk", quantity: "3 čehna, tanko narezana" },
      { name: "Maslinovo ulje", quantity: "2 kašike" },
      { name: "Svježi peršun ili bosiljak", quantity: "za posipanje" }
    ],
    steps: [
      "Zagrijati rernu na maksimalnu temperaturu.",
      "Razvući tijesto. Premazati ga maslinovim uljem.",
      "Kašikom nanositi hrpice rikote po tijestu.",
      "Pospite rendanom mozzarellom i tanko narezanim bijelim lukom.",
      "Peći 8-10 minuta dok ne porumeni.",
      "Izvaditi iz rerne i posuti svježim sjeckanim peršunom ili bosiljkom.",
      "Po želji, dodati malo tucane ljute paprike."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 28, carbs: 70, fat: 35, calories: 707 }
  },
  {
    id: 74,
    name: "Loaded Fries",
    category: Category.JUNK_FOOD,
    description: "Pomfrit podignut na viši nivo: preliven rastopljenim sirom, hrskavom slaninom i mladim lukom.",
    image: "https://picsum.photos/seed/loadedfries/800/600",
    ingredients: [
      { name: "Smrznuti pomfrit", quantity: "500g" },
      { name: "Cheddar sir, rendani", quantity: "150g" },
      { name: "Slanina", quantity: "100g, hrskavo pečena" },
      { name: "Mladi luk", quantity: "2 kom, sjeckan" },
      { name: "Kisela pavlaka ili ranch umak", quantity: "za serviranje" }
    ],
    steps: [
      "Ispeći pomfrit u rerni ili fritezi prema uputama na pakovanju.",
      "Slaninu ispeći u tavi dok ne postane hrskava, ocijediti na papirnom ubrusu i isjeckati.",
      "Pečeni pomfrit staviti na tanjir ili u vatrostalnu posudu.",
      "Odmah dok je vruć posuti rendanim sirom da se otopi.",
      "Pospite sjeckanom slaninom i mladim lukom.",
      "Poslužiti sa kiselom pavlakom ili ranch umakom."
    ],
    equipment: [{ name: "Rerna ili friteza" }, { name: "Tava" }],
    macros: { protein: 20, carbs: 45, fat: 35, calories: 575 }
  },
  {
    id: 75,
    name: "Pohovana Piletina na Američki Način (Fried Chicken)",
    category: Category.PILETINA,
    description: "Izuzetno hrskava i sočna piletina, marinirana u mlaćenici i pržena u dubokom ulju. Pravi soul food.",
    image: "https://picsum.photos/seed/friedchicken/800/600",
    ingredients: [
      { name: "Komadi piletine (batak, zabatak, krilca)", quantity: "1kg" },
      { name: "Mlaćenica (buttermilk)", quantity: "500ml" },
      { name: "Brašno", quantity: "2 šolje" },
      { name: "So, biber, aleva paprika, bijeli luk u prahu", quantity: "po 1 kašika" },
      { name: "Ulje za prženje", quantity: "1.5l" }
    ],
    steps: [
      "Piletinu staviti u zdjelu, preliti mlaćenicom i ostaviti u frižideru najmanje 4 sata, a najbolje preko noći.",
      "U drugoj zdjeli pomiješati brašno i sve začine.",
      "Izvaditi piletinu iz mlaćenice, ocijediti višak i uvaljati u začinjeno brašno. Dobro pritisnuti da se brašno zalijepi.",
      "Zagrijati ulje u dubokoj, teškoj šerpi na 175°C.",
      "Pažljivo spuštati komade piletine u ulje, bez pretrpavanja.",
      "Pržiti 6-8 minuta sa svake strane, dok ne postane tamno zlatna i pečena iznutra.",
      "Vaditi na rešetku da se ocijedi.",
      "Poslužiti toplo."
    ],
    equipment: [{ name: "Duboka teška šerpa" }, { name: "Dvije zdjele" }],
    macros: { protein: 45, carbs: 25, fat: 40, calories: 640 }
  },
  {
    id: 76,
    name: "Tofu Stir-fry sa Kikiriki Sosom",
    category: Category.PROTEINSKA,
    description: "Ukusno vegetarijansko jelo, sa hrskavim tofuom, povrćem i kremastim, pikantnim umakom od kikirikija.",
    image: "https://picsum.photos/seed/tofustirfry/800/600",
    ingredients: [
      { name: "Čvrsti tofu", quantity: "400g" },
      { name: "Brokula, paprika, mrkva", quantity: "miješano povrće" },
      { name: "Kikiriki puter (nezaslađen)", quantity: "3 kašike" },
      { name: "Soja sos", quantity: "3 kašike" },
      { name: "Med ili javorov sirup", quantity: "1 kašika" },
      { name: "Sok od limete", quantity: "1 kašika" },
      { name: "Sriracha (ljuti sos)", quantity: "po ukusu" }
    ],
    steps: [
      "Tofu ocijediti, pritisnuti da izađe višak vode i isjeći na kocke.",
      "Na malo ulja u woku ispržiti tofu dok ne postane zlatan i hrskav. Izvaditi sa strane.",
      "U wok dodati povrće i pržiti par minuta.",
      "Za umak, pomiješati kikiriki puter, soja sos, med, sok od limete, srirachu i malo tople vode da se dobije glatka smjesa.",
      "Vratiti tofu u wok, preliti umakom i sve dobro promiješati.",
      "Poslužiti preko riže ili rezanaca."
    ],
    equipment: [{ name: "Wok ili duboka tava" }],
    macros: { protein: 25, carbs: 30, fat: 20, calories: 390 }
  },
  {
    id: 77,
    name: "Kozice sa Bijelim Lukom i Peršunom",
    category: Category.NISKOKALORICNA,
    description: "Brzo i elegantno jelo, kozice pržene na maslinovom ulju sa puno bijelog luka i svježeg peršuna.",
    image: "https://picsum.photos/seed/kozicebijeliluk/800/600",
    ingredients: [
      { name: "Očišćene kozice", quantity: "400g" },
      { name: "Bijeli luk", quantity: "4 čehna, sitno sjeckan" },
      { name: "Maslinovo ulje", quantity: "3 kašike" },
      { name: "Bijelo vino", quantity: "50ml" },
      { name: "Svježi peršun", quantity: "šaka, sjeckan" },
      { name: "Limunov sok", quantity: "po ukusu" },
      { name: "Tucana ljuta paprika", quantity: "prstohvat" }
    ],
    steps: [
      "U tavi zagrijati maslinovo ulje na srednjoj vatri.",
      "Dodati bijeli luk i tucanu papriku, pržiti 30 sekundi dok ne zamiriše.",
      "Pojačati vatru, dodati kozice i pržiti 1-2 minute sa svake strane dok ne postanu ružičaste.",
      "Zaliti bijelim vinom i kuhati dok alkohol ne ispari.",
      "Skloniti s vatre, umiješati peršun i limunov sok.",
      "Poslužiti odmah uz hljeb za umakanje."
    ],
    equipment: [{ name: "Tava" }],
    macros: { protein: 30, carbs: 5, fat: 15, calories: 275 }
  },
  {
    id: 78,
    name: "Janjetina ispod Sača (Peke)",
    category: Category.FANCY,
    description: "Tradicionalni način pripreme mesa koje postaje nevjerovatno mekano i sočno, kuhano satima ispod metalnog poklopca prekrivenog žarom.",
    image: "https://picsum.photos/seed/janjetinaispodsaca/800/600",
    ingredients: [
      { name: "Janjeći but ili plećka", quantity: "2-3 kg" },
      { name: "Krompir", quantity: "1.5 kg" },
      { name: "Mrkva", quantity: "4 kom" },
      { name: "Crveni luk", quantity: "3 glavice" },
      { name: "Bijeli luk", quantity: "1 glavica" },
      { name: "Bijelo vino", quantity: "200ml" },
      { name: "Ruzmarin, so, biber, ulje", quantity: "po ukusu" }
    ],
    steps: [
      "Meso dobro posoliti i pobiberiti.",
      "Krompir i povrće očistiti i narezati na krupne komade.",
      "U veliku okruglu tepsiju (tepsiju od sača) staviti meso na sredinu.",
      "Okolo rasporediti krompir i povrće, dodati grančice ruzmarina i cijele čehne bijelog luka.",
      "Sve preliti uljem i vinom.",
      "Pripremiti jak žar. Staviti tepsiju na podlogu, poklopiti sačem.",
      "Nagrnuti žar preko sača.",
      "Peći oko 2-3 sata. Na pola pečenja, sač se može otvoriti da se meso i krompir okrenu.",
      "Meso je gotovo kad se počne odvajati od kosti."
    ],
    equipment: [{ name: "Sač (peka) i oprema za roštilj" }],
    macros: { protein: 50, carbs: 40, fat: 45, calories: 765 }
  },
  {
    id: 79,
    name: "Tajlandska Salata sa Govedinom",
    category: Category.SALATE,
    description: "Eksplozija okusa: ljuto, kiselo, slano i slatko u jednoj salati sa tanko rezanim pečenim biftekom i svježim povrćem.",
    image: "https://picsum.photos/seed/thaisalad/800/600",
    ingredients: [
      { name: "Goveđi biftek ili ramstek", quantity: "300g" },
      { name: "Krastavac, mrkva, crveni luk", quantity: "tanko narezano" },
      { name: "Mješavina zelenih salata", quantity: "po potrebi" },
      { name: "Svježa menta i korijander", quantity: "šaka" },
      { name: "Riblji sos (fish sauce)", quantity: "3 kašike" },
      { name: "Sok od limete", quantity: "3 kašike" },
      { name: "Smeđi šećer", quantity: "1 kašika" },
      { name: "Čili", quantity: "po ukusu" }
    ],
    steps: [
      "Biftek ispeći na grill tavi do željene pečenosti (obično medium-rare). Ostaviti da odmara, pa narezati na tanke trakice.",
      "Za dresing, pomiješati riblji sos, sok od limete, šećer i sjeckani čili.",
      "U velikoj zdjeli pomiješati narezano povrće, listove salate i začinsko bilje.",
      "Dodati trakice govedine.",
      "Preliti dresingom i lagano promiješati.",
      "Po želji posuti tostiranim kikirikijem."
    ],
    equipment: [{ name: "Grill tava" }, { name: "Velika zdjela za salatu" }],
    macros: { protein: 35, carbs: 15, fat: 15, calories: 335 }
  },
  {
    id: 80,
    name: "Pizza sa Mortadelom i Pistacijama",
    category: Category.PIZZE,
    description: "Moderna i gurmanska bijela pizza, sa kremastom podlogom, mortadelom, pistacijama i burrata sirom.",
    image: "https://picsum.photos/seed/pizzamortadela/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla" },
      { name: "Rikota ili mascarpone sir", quantity: "kao podloga" },
      { name: "Mozzarella", quantity: "100g" },
      { name: "Mortadela", quantity: "80g, tanko rezana" },
      { name: "Pistacije, grubo sjeckane", quantity: "2 kašike" },
      { name: "Burrata sir (opcionalno)", quantity: "za kraj" }
    ],
    steps: [
      "Zagrijati rernu na maksimalnu temperaturu.",
      "Razvući tijesto. Premazati ga tankim slojem rikote.",
      "Pospite rendanom mozzarellom.",
      "Peći 8-10 minuta.",
      "Izvaditi pizzu iz rerne.",
      "Preko vruće pizze rasporediti kriške mortadele i posuti sjeckanim pistacijama.",
      "Ako koristite burratu, stavite je na sredinu pizze da se lagano otopi.",
      "Pokapati maslinovim uljem i poslužiti."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 30, carbs: 75, fat: 40, calories: 780 }
  },
  {
    id: 81,
    name: "Corn Dog",
    category: Category.JUNK_FOOD,
    description: "Hrenovka na štapiću, umočena u gusto tijesto od kukuruznog brašna i pržena u dubokom ulju. Popularni američki street food.",
    image: "https://picsum.photos/seed/corndog/800/600",
    ingredients: [
      { name: "Hrenovke", quantity: "8 kom" },
      { name: "Kukuruzno brašno", quantity: "1 šolja" },
      { name: "Pšenično brašno", quantity: "1 šolja" },
      { name: "Šećer", quantity: "1/4 šolje" },
      { name: "Prašak za pecivo", quantity: "2 kašičice" },
      { name: "Jaje", quantity: "1 kom" },
      { name: "Mlijeko", quantity: "1 šolja" },
      { name: "Drveni štapići", quantity: "8 kom" },
      { name: "Ulje za prženje", quantity: "1.5l" }
    ],
    steps: [
      "Hrenovke nabosti na drvene štapiće.",
      "U zdjeli pomiješati sve suhe sastojke.",
      "U drugoj zdjeli umutiti jaje i mlijeko, pa dodati suhim sastojcima i izmiješati glatko tijesto.",
      "Tijesto presuti u visoku čašu da bi se hrenovke lakše umakale.",
      "Zagrijati ulje na 180°C.",
      "Svaku hrenovku na štapiću umočiti u tijesto da se potpuno prekrije.",
      "Pažljivo pržiti u ulju 2-3 minute dok ne postanu zlatno-smeđe.",
      "Vaditi na papirni ubrus.",
      "Poslužiti uz kečap i senf."
    ],
    equipment: [{ name: "Duboka šerpa" }, { name: "Visoka čaša" }],
    macros: { protein: 15, carbs: 40, fat: 25, calories: 445 }
  },
  {
    id: 82,
    name: "Sogandolma",
    category: Category.BOSANSKA,
    description: "Luk punjen mljevenim mesom i rižom, kuhan u paradajz sosu. Jelo puno slatkoće od kuhanog luka.",
    image: "https://picsum.photos/seed/sogandolma/800/600",
    ingredients: [
      { name: "Velike glavice crvenog luka", quantity: "6-8 kom" },
      { name: "Mljevena junetina", quantity: "400g" },
      { name: "Riža", quantity: "100g" },
      { name: "Koncentrat paradajza", quantity: "2 kašike" },
      { name: "So, biber, crvena paprika", quantity: "po ukusu" }
    ],
    steps: [
      "Glavicama luka odrezati vrh i dno, pa ih kuhati u vodi 15-20 minuta da omekšaju.",
      "Pažljivo razdvojiti slojeve luka da se dobiju 'čašice'.",
      "Sredinu luka sitno nasjeckati i pomiješati sa mljevenim mesom, rižom i začinima.",
      "Puniti slojeve luka pripremljenim filom.",
      "Slagati punjene lukove u šerpu.",
      "Razmutiti koncentrat paradajza u vodi i preliti preko luka.",
      "Kuhati na laganoj vatri oko 1 sat.",
      "Poslužiti toplo uz kiselu pavlaku."
    ],
    equipment: [{ name: "Šerpa" }, { name: "Zdjela" }],
    macros: { protein: 25, carbs: 20, fat: 15, calories: 315 }
  },
  {
    id: 83,
    name: "Piletina u Sosu od Gljiva",
    category: Category.PILETINA,
    description: "Kremasti i bogati umak od šampinjona i pavlake savršeno se slaže sa prženim pilećim fileima.",
    image: "https://picsum.photos/seed/piletinagljive/800/600",
    ingredients: [
      { name: "Pileći filei", quantity: "500g" },
      { name: "Šampinjoni", quantity: "300g" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Pavlaka za kuhanje", quantity: "250ml" },
      { name: "Bijelo vino", quantity: "50ml (opcionalno)" },
      { name: "So, biber, svježi peršun", quantity: "po ukusu" }
    ],
    steps: [
      "Pileće filee posoliti, pobiberiti i ispržiti na tavi. Izvaditi sa strane.",
      "U istoj tavi dinstati sjeckani luk dok ne omekša.",
      "Dodati gljive narezane na listiće i pržiti dok ne puste vodu i ona ne ispari.",
      "Zaliti vinom i kuhati dok ne ispari.",
      "Sipati pavlaku za kuhanje, začiniti i pustiti da se krčka par minuta.",
      "Vratiti piletinu u umak i kuhati sve zajedno još 5 minuta.",
      "Posuti svježim peršunom i poslužiti uz tjesteninu ili njoke."
    ],
    equipment: [{ name: "Tava" }],
    macros: { protein: 45, carbs: 10, fat: 25, calories: 445 }
  },
  {
    id: 84,
    name: "Skuša sa Roštilja",
    category: Category.PROTEINSKA,
    description: "Jednostavna i zdrava plava riba, pečena na roštilju, prelivena maslinovim uljem, bijelim lukom i peršunom.",
    image: "https://picsum.photos/seed/skusarostilj/800/600",
    ingredients: [
      { name: "Cijela skuša, očišćena", quantity: "2 kom" },
      { name: "Bijeli luk", quantity: "3 čehna" },
      { name: "Svježi peršun", quantity: "šaka" },
      { name: "Maslinovo ulje", quantity: "4 kašike" },
      { name: "Limun", quantity: "1 kom" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Skuše dobro posoliti i pobiberiti iznutra i izvana.",
      "Peći na dobro zagrijanom roštilju 5-7 minuta sa svake strane.",
      "Dok se riba peče, napraviti marinadu: sitno nasjeckati bijeli luk i peršun, pa pomiješati sa maslinovim uljem.",
      "Pečenu ribu odmah preliti pripremljenom marinadom.",
      "Poslužiti uz kriške limuna i kuhan krompir."
    ],
    equipment: [{ name: "Roštilj ili grill tava" }],
    macros: { protein: 40, carbs: 2, fat: 25, calories: 393 }
  },
  {
    id: 85,
    name: "Pečeni Batat sa Cimetom",
    category: Category.NISKOKALORICNA,
    description: "Slatki krompir (batat) pečen u rerni, sa malo cimeta i maslinovog ulja. Jednostavan i zdrav prilog.",
    image: "https://picsum.photos/seed/pecenibatat/800/600",
    ingredients: [
      { name: "Batat (slatki krompir)", quantity: "2 velika" },
      { name: "Maslinovo ulje", quantity: "2 kašike" },
      { name: "Cimet", quantity: "1 kašičica" },
      { name: "So", quantity: "prstohvat" }
    ],
    steps: [
      "Zagrijati rernu na 200°C.",
      "Batat oguliti i narezati na prutiće ili kockice.",
      "Staviti batat u zdjelu, preliti maslinovim uljem, posuti cimetom i solju.",
      "Dobro promiješati da se svi komadi oblože.",
      "Rasporediti na tepsiju obloženu papirom za pečenje u jednom sloju.",
      "Peći 25-30 minuta, okrećući na pola pečenja, dok ne omekša i ne karamelizira se.",
      "Poslužiti toplo."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }],
    macros: { protein: 4, carbs: 45, fat: 8, calories: 268 }
  },
  {
    id: 86,
    name: "Biftek u Zelenom Papru",
    category: Category.FANCY,
    description: "Klasično jelo iz francuskih bistroa: sočan biftek u kremastom umaku od konjaka i zelenog papra u zrnu.",
    image: "https://picsum.photos/seed/biftekzelenipapar/800/600",
    ingredients: [
      { name: "Goveđi biftek", quantity: "2 odreska (po 200g)" },
      { name: "Zeleni papar u zrnu (iz tegle)", quantity: "2 kašike" },
      { name: "Konjak ili brendi", quantity: "30ml" },
      { name: "Pavlaka za kuhanje", quantity: "150ml" },
      { name: "Puter", quantity: "1 kašika" },
      { name: "So", quantity: "po ukusu" }
    ],
    steps: [
      "Bifteke posoliti i ispeći na zagrijanoj tavi do željene pečenosti. Izvaditi i držati na toplom.",
      "Smanjiti vatru, u tavu dodati puter i zrna zelenog papra, malo ih zgnječiti.",
      "Pažljivo uliti konjak i flambirati (zapaliti). Pustiti da plamen izgori.",
      "Dodati pavlaku za kuhanje i miješati dok se umak malo ne zgusne.",
      "Vratiti bifteke u umak na kratko.",
      "Poslužiti odmah, prelivene umakom."
    ],
    equipment: [{ name: "Tava" }],
    macros: { protein: 45, carbs: 5, fat: 35, calories: 515 }
  },
  {
    id: 87,
    name: "Salata od Piletine i Avokada",
    category: Category.SALATE,
    description: "Kremasta i zasitna salata sa komadićima piletine, avokadom, kukuruzom i laganim dresingom od jogurta.",
    image: "https://picsum.photos/seed/piletinaavokado/800/600",
    ingredients: [
      { name: "Pečena ili kuhana pileća prsa", quantity: "300g, isjeckana" },
      { name: "Avokado", quantity: "1 zreo, na kockice" },
      { name: "Kukuruz šećerac", quantity: "1 šolja" },
      { name: "Crveni luk", quantity: "1/4 glavice, sitno sjeckan" },
      { name: "Grčki jogurt ili pavlaka", quantity: "3 kašike" },
      { name: "Limunov sok", quantity: "1 kašika" },
      { name: "So, biber, korijander", quantity: "po ukusu" }
    ],
    steps: [
      "U zdjeli pomiješati isjeckanu piletinu, kukuruz i crveni luk.",
      "U drugoj posudi pomiješati jogurt, limunov sok i začine za dresing.",
      "Preliti dresing preko piletine i promiješati.",
      "Pažljivo dodati kockice avokada i lagano promiješati da se ne raspadnu.",
      "Poslužiti u listovima salate ili kao sendvič."
    ],
    equipment: [{ name: "Dvije zdjele" }],
    macros: { protein: 35, carbs: 20, fat: 20, calories: 400 }
  },
  {
    id: 88,
    name: "Domaća Pizza iz Tave",
    category: Category.PIZZE,
    description: "Brza i jednostavna pizza za koju vam ne treba rerna. Tijesto se peče u tavi, a rezultat je iznenađujuće dobar.",
    image: "https://picsum.photos/seed/pizzatava/800/600",
    ingredients: [
      { name: "Brašno", quantity: "1.5 šolja" },
      { name: "Suhi kvasac", quantity: "1 kašičica" },
      { name: "Topla voda", quantity: "1/2 šolje" },
      { name: "Paradajz sos, sir, dodaci", quantity: "po želji" }
    ],
    steps: [
      "Zamijesiti tijesto od brašna, kvasca, soli, šećera, tople vode i malo ulja. Ostaviti da odstoji 20 minuta.",
      "Razvaljati tijesto na veličinu tave.",
      "Zagrijati nauljenu tavu na srednje niskoj vatri. Staviti tijesto i peći 5-7 minuta poklopljeno.",
      "Okrenuti tijesto. Na pečenu stranu brzo namazati sos i staviti dodatke.",
      "Poklopiti i peći još 5-7 minuta, dok se donja strana ne ispeče, a sir ne otopi.",
      "Poslužiti odmah."
    ],
    equipment: [{ name: "Tava sa poklopcem" }],
    macros: { protein: 20, carbs: 60, fat: 25, calories: 545 }
  },
  {
    id: 89,
    name: "Punjene Gljive sa Sirom",
    category: Category.JUNK_FOOD,
    description: "Veliki šampinjoni punjeni krem sirom, bijelim lukom i začinima, pa zapečeni u rerni.",
    image: "https://picsum.photos/seed/punjenegljive/800/600",
    ingredients: [
      { name: "Veliki šampinjoni (Portobello)", quantity: "8 kom" },
      { name: "Krem sir", quantity: "150g" },
      { name: "Parmezan, rendani", quantity: "3 kašike" },
      { name: "Bijeli luk", quantity: "2 čehna, sitno sjeckan" },
      { name: "Krušne mrvice", quantity: "2 kašike" },
      { name: "So, biber, peršun", quantity: "po ukusu" }
    ],
    steps: [
      "Zagrijati rernu na 200°C.",
      "Gljivama odstraniti drške. Drške sitno nasjeckati.",
      "Na malo ulja propržiti sjeckane drške i bijeli luk.",
      "U zdjeli pomiješati krem sir, parmezan, pržene drške, peršun i začine.",
      "Puniti klobuke gljiva pripremljenim filom.",
      "Pospite vrh krušnim mrvicama.",
      "Poredati u tepsiju i peći 15-20 minuta dok ne porumene.",
      "Poslužiti toplo."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }],
    macros: { protein: 8, carbs: 10, fat: 15, calories: 207 }
  },
  {
    id: 90,
    name: "Uštipci",
    category: Category.BOSANSKA,
    description: "Brzi, mekani i prozračni zalogaji od tijesta, prženi u dubokom ulju. Mogu biti slani ili slatki.",
    image: "https://picsum.photos/seed/ustipci/800/600",
    ingredients: [
      { name: "Brašno", quantity: "500g" },
      { name: "Jogurt", quantity: "200ml" },
      { name: "Jaja", quantity: "2 kom" },
      { name: "Prašak za pecivo", quantity: "1 kesica" },
      { name: "So", quantity: "1 kašičica" },
      { name: "Ulje za prženje", quantity: "1l" }
    ],
    steps: [
      "U zdjeli umutiti jaja, dodati jogurt i so.",
      "Postepeno dodavati brašno pomiješano sa praškom za pecivo, miješajući dok se ne dobije gusto, ljepljivo tijesto.",
      "Zagrijati ulje u dubokoj šerpi.",
      "Kašikom vaditi tijesto i spuštati u vrelo ulje.",
      "Pržiti uštipke sa obje strane dok ne postanu zlatno-smeđi i napuhani.",
      "Vaditi na papirni ubrus da se ocijedi višak masnoće.",
      "Poslužiti tople uz kajmak, sir, ajvar ili džem."
    ],
    equipment: [{ name: "Duboka šerpa" }, { name: "Zdjela" }],
    macros: { protein: 12, carbs: 45, fat: 20, calories: 408 }
  },
  {
    id: 91,
    name: "Grilana Pileća Prsa s Povrćem",
    category: Category.PILETINA,
    description: "Jednostavan, zdrav i brz ručak. Sočna pileća prsa sa roštilja poslužena sa grilanim tikvicama, paprikom i patlidžanom.",
    image: "https://picsum.photos/seed/grilanapiletina/800/600",
    ingredients: [
      { name: "Pileća prsa", quantity: "400g" },
      { name: "Tikvica", quantity: "1 kom" },
      { name: "Patlidžan", quantity: "1 manji" },
      { name: "Crvena paprika", quantity: "1 kom" },
      { name: "Maslinovo ulje", quantity: "3 kašike" },
      { name: "Limunov sok, origano, so, biber", quantity: "za marinadu" }
    ],
    steps: [
      "Piletinu i povrće narezati na deblje kriške.",
      "Napraviti marinadu od maslinovog ulja, limunovog soka i začina.",
      "Preliti marinadu preko piletine i povrća i ostaviti da stoji 20-30 minuta.",
      "Zagrijati grill tavu.",
      "Peći piletinu 4-5 minuta sa svake strane.",
      "Peći povrće par minuta sa svake strane dok ne dobije tragove roštilja i ne omekša.",
      "Poslužiti sve zajedno."
    ],
    equipment: [{ name: "Grill tava" }],
    macros: { protein: 40, carbs: 12, fat: 15, calories: 343 }
  },
  {
    id: 92,
    name: "Pureća Prsa u Umaku od Senfa",
    category: Category.PROTEINSKA,
    description: "Mekana pureća prsa u kremastom i blago pikantnom umaku od senfa i vrhnja.",
    image: "https://picsum.photos/seed/puretinasenf/800/600",
    ingredients: [
      { name: "Pureći odresci", quantity: "500g" },
      { name: "Senf (Dijon)", quantity: "2 kašike" },
      { name: "Pavlaka za kuhanje", quantity: "200ml" },
      { name: "Crveni luk", quantity: "1 manja glavica" },
      { name: "Pileći temeljac", quantity: "100ml" },
      { name: "So, biber, svježi vlasac", quantity: "po ukusu" }
    ],
    steps: [
      "Pureće odreske posoliti, pobiberiti i ispržiti na tavi. Izvaditi sa strane.",
      "Na istoj masnoći dinstati sitno sjeckani luk.",
      "Dodati senf i temeljac, promiješati.",
      "Sipati pavlaku i kuhati par minuta dok se umak ne zgusne.",
      "Vratiti puretinu u umak i sve zajedno krčkati još 5 minuta.",
      "Posuti svježim sjeckanim vlascem.",
      "Poslužiti uz kuhanu rižu ili krompir."
    ],
    equipment: [{ name: "Tava" }],
    macros: { protein: 45, carbs: 8, fat: 20, calories: 392 }
  },
  {
    id: 93,
    name: "Salata od Krastavaca i Kopra",
    category: Category.NISKOKALORICNA,
    description: "Izuzetno osvježavajuća i lagana ljetna salata sa tanko rezanim krastavcima u kremastom dresingu od jogurta i kopra.",
    image: "https://picsum.photos/seed/salatakrastavac/800/600",
    ingredients: [
      { name: "Krastavac", quantity: "2 velika" },
      { name: "Grčki jogurt", quantity: "150g" },
      { name: "Svježi kopar", quantity: "2 kašike, sjeckan" },
      { name: "Bijeli luk", quantity: "1 čehno, sitno sjeckan" },
      { name: "Limunov sok", quantity: "1 kašika" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Krastavce oprati i narezati na vrlo tanke kolutove. Malo posoliti i ostaviti da puste vodu, pa ocijediti.",
      "U zdjeli pomiješati jogurt, sjeckani kopar, bijeli luk i limunov sok.",
      "Začiniti solju i biberom.",
      "Dodati ocijeđene krastavce u dresing i dobro promiješati.",
      "Ostaviti u frižideru da se dobro ohladi prije serviranja."
    ],
    equipment: [{ name: "Zdjela" }],
    macros: { protein: 5, carbs: 10, fat: 5, calories: 105 }
  },
  {
    id: 94,
    name: "Foie Gras na Tostu",
    category: Category.FANCY,
    description: "Vrhunski delikates: guščija ili pačija jetra kratko pržena, poslužena na prepečenom brioš hljebu sa džemom od smokava.",
    image: "https://picsum.photos/seed/foiegras/800/600",
    ingredients: [
      { name: "Svježa foie gras (guščija/pačija jetra)", quantity: "150g" },
      { name: "Brioš hljeb", quantity: "2 kriške" },
      { name: "Džem od smokava ili luka", quantity: "2 kašičice" },
      { name: "Krupna morska so, svježe mljeveni biber", quantity: "po ukusu" }
    ],
    steps: [
      "Foie gras narezati na kriške debljine oko 2 cm.",
      "Jako zagrijati suhu tavu (bez ulja).",
      "Kratko peći kriške foie gras, otprilike 1 minutu sa svake strane, dok ne dobiju zlatnu koricu, a unutra ostanu mekane.",
      "Izvaditi na tanjir.",
      "U istoj tavi na otopljenoj masnoći kratko prepeći kriške brioš hljeba.",
      "Na tostirani brioš namazati malo džema od smokava.",
      "Preko džema staviti pečenu foie gras.",
      "Odmah posuti krupnom solju i biberom i poslužiti."
    ],
    equipment: [{ name: "Tava" }],
    macros: { protein: 10, carbs: 20, fat: 50, calories: 570 }
  },
  {
    id: 95,
    name: "Waldorf Salata",
    category: Category.SALATE,
    description: "Klasična američka salata sa hrskavim jabukama, celerom, orasima i grožđem u kremastom majonez dresingu.",
    image: "https://picsum.photos/seed/waldorfsalata/800/600",
    ingredients: [
      { name: "Jabuka (Granny Smith)", quantity: "2 kom" },
      { name: "Celerova stabljika", quantity: "3 kom" },
      { name: "Orasi, tostirani", quantity: "1/2 šolje" },
      { name: "Crveno grožđe, prepolovljeno", quantity: "1 šolja" },
      { name: "Majoneza", quantity: "1/2 šolje" },
      { name: "Limunov sok", quantity: "1 kašika" },
      { name: "Listovi zelene salate", quantity: "za podlogu" }
    ],
    steps: [
      "Jabuke i celer narezati na kockice.",
      "U zdjeli pomiješati jabuke, celer, orahe i grožđe.",
      "U maloj posudi pomiješati majonezu i limunov sok. Začiniti solju i biberom.",
      "Preliti dresing preko salate i lagano promiješati.",
      "Servirati na podlozi od listova zelene salate."
    ],
    equipment: [{ name: "Zdjela" }],
    macros: { protein: 5, carbs: 25, fat: 30, calories: 390 }
  },
  {
    id: 96,
    name: "Pizza Vegetariana",
    category: Category.PIZZE,
    description: "Pizza bogata raznovrsnim svježim povrćem, savršena za one koji ne jedu meso.",
    image: "https://picsum.photos/seed/pizzavegetariana/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla" },
      { name: "Paradajz sos", quantity: "1/2 šolje" },
      { name: "Mozzarella", quantity: "150g" },
      { name: "Paprika, tikvica, gljive, crveni luk", quantity: "miješano povrće" },
      { name: "Masline", quantity: "šaka" },
      { name: "Origano", quantity: "prstohvat" }
    ],
    steps: [
      "Zagrijati rernu na maksimalnu temperaturu.",
      "Povrće narezati na tanke kriške ili listiće.",
      "Razvući tijesto, premazati ga sosom i posuti sirom.",
      "Rasporediti povrće i masline po pizzi.",
      "Posuti origanom.",
      "Peći 10-15 minuta dok povrće ne omekša i rubovi ne porumene."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 20, carbs: 80, fat: 25, calories: 625 }
  },
  {
    id: 97,
    name: "Krofne sa Čokoladom",
    category: Category.JUNK_FOOD,
    description: "Mekane, prozračne i slatke krofne pržene u ulju, prelivene čokoladnom glazurom.",
    image: "https://picsum.photos/seed/krofne/800/600",
    ingredients: [
      { name: "Brašno", quantity: "500g" },
      { name: "Mlijeko", quantity: "250ml, toplo" },
      { name: "Suhi kvasac", quantity: "1 kesica" },
      { name: "Šećer", quantity: "50g" },
      { name: "Jaja", quantity: "2 žumanjka" },
      { name: "Puter", quantity: "50g, otopljen" },
      { name: "Čokolada za kuhanje", quantity: "100g, za glazuru" }
    ],
    steps: [
      "Aktivirati kvasac u toplom mlijeku sa malo šećera.",
      "U zdjeli pomiješati brašno, ostatak šećera, žumanjke, otopljeni puter i aktivirani kvasac. Zamijesiti glatko tijesto.",
      "Ostaviti tijesto na toplom da se udvostruči (oko 1 sat).",
      "Razvaljati tijesto na debljinu prsta i vaditi krofne okruglom modlom.",
      "Ostaviti krofne da odstoje još 20 minuta.",
      "Pržiti u zagrijanom ulju sa obje strane dok ne porumene.",
      "Otopiti čokoladu na pari i umakati gornju stranu krofni."
    ],
    equipment: [{ name: "Duboka šerpa" }, { name: "Zdjela" }],
    macros: { protein: 8, carbs: 50, fat: 20, calories: 412 }
  },
  {
    id: 98,
    name: "Zeljanica (Burek sa špinatom)",
    category: Category.BOSANSKA,
    description: "Sočna i ukusna pita sa filom od špinata (ili blitve), sira i jaja.",
    image: "https://picsum.photos/seed/zeljanica/800/600",
    ingredients: [
      { name: "Gotove jufke za pitu", quantity: "500g" },
      { name: "Špinat ili blitva", quantity: "500g" },
      { name: "Mladi sir", quantity: "300g" },
      { name: "Jaja", quantity: "2 kom" },
      { name: "Kisela pavlaka", quantity: "100g" },
      { name: "So, ulje", quantity: "po potrebi" }
    ],
    steps: [
      "Špinat oprati, kratko blanširati, ocijediti i sitno nasjeckati.",
      "U zdjeli pomiješati špinat, izmrvljeni sir, jaja, pavlaku i so.",
      "Slagati pitu kao i sirnicu: premazati dvije jufke uljem, nafilovati i urolati.",
      "Redati u nauljenu tepsiju (u krug ili kao pravougaone redove).",
      "Premazati uljem i peći na 200°C oko 30-40 minuta.",
      "Pečenu pitu zaliti sa malo kipuće vode pomiješane sa puterom ili pavlakom da omekša i bude sočnija."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }],
    macros: { protein: 18, carbs: 40, fat: 22, calories: 430 }
  },
  {
    id: 99,
    name: "Piletina s Limunom i Ruzmarinom",
    category: Category.PILETINA,
    description: "Aromatična i sočna piletina pečena u rerni, sa svježim limunom i ruzmarinom koji daju mediteranski šmek.",
    image: "https://picsum.photos/seed/piletinalimun/800/600",
    ingredients: [
      { name: "Cijelo pile ili komadi piletine", quantity: "1.5 kg" },
      { name: "Limun", quantity: "2 kom" },
      { name: "Ruzmarin", quantity: "3-4 grančice" },
      { name: "Bijeli luk", quantity: "1 glavica" },
      { name: "Maslinovo ulje", quantity: "3 kašike" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Zagrijati rernu na 200°C.",
      "Piletinu dobro posoliti i pobiberiti sa svih strana.",
      "Jedan limun i glavicu bijelog luka prepoloviti i staviti u unutrašnjost pileta, zajedno sa grančicom ruzmarina.",
      "Piletinu staviti u tepsiju, preliti maslinovim uljem.",
      "Drugi limun narezati na kriške i poredati oko i po piletini, zajedno sa ostatkom ruzmarina.",
      "Peći oko 1 sat i 15 minuta, ili dok sokovi ne budu bistri kad se zabode nož.",
      "Ostaviti da odmara 10 minuta prije rezanja."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija" }],
    macros: { protein: 50, carbs: 5, fat: 25, calories: 445 }
  },
  {
    id: 100,
    name: "Jaja sa Špinatom i Feta Sirom",
    category: Category.PROTEINSKA,
    description: "Brz i zdrav obrok, idealan za doručak ili laganu večeru. Jaja pečena na podlozi od špinata i feta sira.",
    image: "https://picsum.photos/seed/jajaspinat/800/600",
    ingredients: [
      { name: "Jaja", quantity: "4 kom" },
      { name: "Svježi špinat", quantity: "200g" },
      { name: "Feta sir", quantity: "100g" },
      { name: "Crveni luk", quantity: "1/2 glavice" },
      { name: "Bijeli luk", quantity: "1 čehno" },
      { name: "Maslinovo ulje", quantity: "1 kašika" }
    ],
    steps: [
      "Na maslinovom ulju dinstati sjeckani crveni i bijeli luk.",
      "Dodati špinat i dinstati dok ne uvene.",
      "Izmrviti feta sir preko špinata.",
      "Napraviti 4 udubljenja u smjesi i u svako razbiti po jedno jaje.",
      "Poklopiti i peći na laganoj vatri 5-7 minuta, dok se bjelanjci ne stegnu, a žumanjci ostanu tečni.",
      "Posoliti i pobiberiti po ukusu i poslužiti odmah."
    ],
    equipment: [{ name: "Tava sa poklopcem" }],
    macros: { protein: 25, carbs: 8, fat: 22, calories: 330 }
  },
  {
    id: 101,
    name: "Pileća Prsa Kuhana na Pari sa Kvinojom",
    category: Category.NISKOKALORICNA,
    description: "Izuzetno zdrav i čist obrok, sa nemasnim proteinima i kompleksnim ugljikohidratima. Savršeno za sportiste.",
    image: "https://picsum.photos/seed/piletinakvinoja/800/600",
    ingredients: [
      { name: "Pileća prsa", quantity: "200g" },
      { name: "Kvinoja", quantity: "1/2 šolje" },
      { name: "Limun", quantity: "1/2 kom" },
      { name: "Začinsko bilje (peršun, vlasac)", quantity: "po ukusu" },
      { name: "So, biber", quantity: "po ukusu" }
    ],
    steps: [
      "Pileća prsa posoliti, pobiberiti i staviti u posudu za kuhanje na pari.",
      "Preko piletine staviti kriške limuna.",
      "Kuhati na pari 15-20 minuta, dok piletina ne bude potpuno kuhana.",
      "Kvinoju skuhati prema uputama na pakovanju.",
      "Kuhanu piletinu narezati na kriške.",
      "Pomiješati kuhanu kvinoju sa sjeckanim začinskim biljem.",
      "Poslužiti piletinu uz kvinoju."
    ],
    equipment: [{ name: "Posuda za kuhanje na pari" }, { name: "Lonac" }],
    macros: { protein: 45, carbs: 40, fat: 5, calories: 385 }
  },
  {
    id: 102,
    name: "Kamenice sa Limunom",
    category: Category.FANCY,
    description: "Sirove, svježe kamenice, afrodizijak i delikates, poslužene jednostavno sa kriškama limuna.",
    image: "https://picsum.photos/seed/kamenice/800/600",
    ingredients: [
      { name: "Svježe kamenice", quantity: "12 kom" },
      { name: "Limun", quantity: "1 kom" },
      { name: "Mignonette sos (opcionalno)", quantity: "za serviranje" },
      { name: "Led", quantity: "za podlogu" }
    ],
    steps: [
      "Kamenice dobro oprati četkom pod hladnom vodom.",
      "Pažljivo otvoriti kamenice posebnim nožem, pazeći da se ne prospe tečnost iz njih.",
      "Gornju ljusku baciti, a donju sa mesom i tečnošću rasporediti na podlogu od drobljenog leda.",
      "Limun narezati na kriške.",
      "Poslužiti odmah sa kriškama limuna i po želji Mignonette sosom (ocat, ljutika, papar).",
      "Kamenica se jede tako što se prelije sa par kapi limuna i isrče iz ljuske."
    ],
    equipment: [{ name: "Nož za kamenice" }, { name: "Tanjir za serviranje" }],
    macros: { protein: 10, carbs: 5, fat: 3, calories: 87 }
  },
  {
    id: 103,
    name: "Salata od Leće sa Povrćem",
    category: Category.SALATE,
    description: "Hranjiva i zasitna vegetarijanska salata, puna proteina i vlakana. Odlična za ponijeti na posao.",
    image: "https://picsum.photos/seed/salatalece/800/600",
    ingredients: [
      { name: "Zelena ili smeđa leća", quantity: "1 šolja" },
      { name: "Crvena paprika", quantity: "1 kom, sjeckana" },
      { name: "Mrkva", quantity: "1 kom, rendana" },
      { name: "Crveni luk", quantity: "1/4 glavice, sjeckan" },
      { name: "Peršun", quantity: "šaka, sjeckan" },
      { name: "Maslinovo ulje", quantity: "3 kašike" },
      { name: "Crveni vinski ocat", quantity: "2 kašike" }
    ],
    steps: [
      "Leću skuhati prema uputama, ocijediti i ohladiti.",
      "U velikoj zdjeli pomiješati ohlađenu leću sa sjeckanim povrćem i peršunom.",
      "U maloj posudi umutiti maslinovo ulje, ocat, so i biber za dresing.",
      "Preliti dresing preko salate i dobro promiješati.",
      "Može se poslužiti odmah ili ohlađena."
    ],
    equipment: [{ name: "Lonac" }, { name: "Velika zdjela za salatu" }],
    macros: { protein: 18, carbs: 40, fat: 12, calories: 340 }
  },
  {
    id: 104,
    name: "Pizza sa Plodovima Mora",
    category: Category.PIZZE,
    description: "Pizza Frutti di Mare, sa mješavinom škampa, dagnji i drugih morskih plodova.",
    image: "https://picsum.photos/seed/pizzamorskiplodovi/800/600",
    ingredients: [
      { name: "Tijesto za pizzu", quantity: "1 kugla" },
      { name: "Paradajz sos", quantity: "1/2 šolje" },
      { name: "Mješavina plodova mora (smrznuta)", quantity: "200g" },
      { name: "Bijeli luk", quantity: "2 čehna, sjeckan" },
      { name: "Svježi peršun", quantity: "2 kašike, sjeckan" },
      { name: "Maslinovo ulje", quantity: "po potrebi" }
    ],
    steps: [
      "Odmrznuti plodove mora i dobro ih ocijediti.",
      "Zagrijati rernu na maksimalnu temperaturu.",
      "Razvući tijesto, premazati ga sosom.",
      "Rasporediti plodove mora po pizzi.",
      "Pospite sjeckanim bijelim lukom.",
      "Peći 10-12 minuta. Sir se često ne stavlja na ovu pizzu.",
      "Izvaditi iz rerne, posuti svježim peršunom i pokapati maslinovim uljem.",
      "Poslužiti odmah."
    ],
    equipment: [{ name: "Rerna" }, { name: "Tepsija za pizzu" }],
    macros: { protein: 30, carbs: 75, fat: 15, calories: 555 }
  },
  {
    id: 105,
    name: "Milkshake od Vanilije",
    category: Category.JUNK_FOOD,
    description: "Gusti, kremasti i hladni napitak od sladoleda od vanilije i mlijeka. Klasik koji svi vole.",
    image: "https://picsum.photos/seed/milkshake/800/600",
    ingredients: [
      { name: "Sladoled od vanilije", quantity: "3 velike kugle" },
      { name: "Mlijeko", quantity: "150ml" },
      { name: "Ekstrakt vanilije", quantity: "1/2 kašičice" },
      { name: "Šlag", quantity: "za dekoraciju (opcionalno)" }
    ],
    steps: [
      "Staviti sladoled, mlijeko i ekstrakt vanilije u blender.",
      "Miksati dok ne postane glatko i kremasto. Za gušći shake, dodati manje mlijeka.",
      "Sipati u visoku čašu.",
      "Po želji, ukrasiti šlagom i višnjom.",
      "Poslužiti odmah sa debelom slamkom."
    ],
    equipment: [{ name: "Blender" }],
    macros: { protein: 10, carbs: 45, fat: 20, calories: 400 }
  },
  {
    id: 106,
    name: "Pileća Supa s Rezancima",
    category: Category.PILETINA,
    description: "Domaća supa koja liječi dušu i tijelo. Bistra supa sa piletinom, povrćem i domaćim rezancima.",
    image: "https://picsum.photos/seed/pilecasupa/800/600",
    ingredients: [
      { name: "Pileće meso za supu (leđa, vrat, krilca)", quantity: "500g" },
      { name: "Mrkva", quantity: "3 kom" },
      { name: "Peršunov korijen", quantity: "1 kom" },
      { name: "Celerov korijen", quantity: "komadić" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Domaći rezanci za supu", quantity: "šaka" },
      { name: "So, biber u zrnu, svježi peršun", quantity: "po ukusu" }
    ],
    steps: [
      "Staviti piletinu i očišćeno povrće u komadu u veliki lonac.",
      "Naliti hladnom vodom, posoliti i dodati biber u zrnu.",
      "Kuhati na laganoj vatri 1.5 - 2 sata. Skidati pjenu koja se stvara na vrhu.",
      "Procijediti supu. Meso i mrkvu isjeckati na sitne komade.",
      "Bistru supu vratiti na vatru da proključa.",
      "Dodati rezance i kuhati par minuta dok ne omekšaju.",
      "U tanjir sipati supu sa rezancima, dodati komadiće piletine i mrkve.",
      "Posuti svježim sjeckanim peršunom."
    ],
    equipment: [{ name: "Veliki lonac" }],
    macros: { protein: 15, carbs: 20, fat: 8, calories: 212 }
  },
  {
    id: 107,
    name: "Janjeći gulaš",
    category: Category.PROTEINSKA,
    description: "Aromatični gulaš od janjetine sa povrćem i crnim vinom, sporo kuhan do savršenstva.",
    image: "https://picsum.photos/seed/janjecigulas/800/600",
    ingredients: [
      { name: "Janjetina od plećke", quantity: "800g, na kocke" },
      { name: "Crveni luk", quantity: "3 glavice" },
      { name: "Mrkva", quantity: "2 kom" },
      { name: "Crno vino", quantity: "200ml" },
      { name: "Goveđi temeljac", quantity: "400ml" },
      { name: "Ruzmarin, timijan, lovorov list", quantity: "po ukusu" }
    ],
    steps: [
      "Na ulju propržiti janjetinu dok ne porumeni sa svih strana. Izvaditi sa strane.",
      "Na istoj masnoći dinstati sjeckani luk i mrkvu.",
      "Vratiti meso, zaliti crnim vinom i kuhati dok alkohol ne ispari.",
      "Dodati temeljac, začinsko bilje, so i biber.",
      "Poklopiti i kuhati na laganoj vatri 2-2.5 sata dok meso ne postane izuzetno mekano.",
      "Poslužiti uz palentu ili njoke."
    ],
    equipment: [{ name: "Veliki lonac s poklopcem" }],
    macros: { protein: 40, carbs: 15, fat: 30, calories: 510 }
  },
  {
    id: 108,
    name: "Rizoto sa Gljivama",
    category: Category.FANCY,
    description: "Kremasti rižoto sa miješanim šumskim gljivama, parmezanom i bijelim vinom.",
    image: "https://picsum.photos/seed/rizotogljive/800/600",
    ingredients: [
      { name: "Arborio riža", quantity: "300g" },
      { name: "Miješane gljive (vrganji, šampinjoni)", quantity: "400g" },
      { name: "Crveni luk", quantity: "1 glavica" },
      { name: "Bijeli luk", quantity: "2 čehna" },
      { name: "Bijelo vino", quantity: "100ml" },
      { name: "Povrtni temeljac", quantity: "1l, vruć" },
      { name: "Parmezan, rendani", quantity: "50g" },
      { name: "Maslac i peršun", quantity: "po potrebi" }
    ],
    steps: [
      "Na maslinovom ulju pržiti narezane gljive dok ne porumene. Izvaditi sa strane.",
      "U istu tavu dodati malo maslaca, pa dinstati sjeckani crveni luk i bijeli luk.",
      "Dodati rižu i pržiti je par minuta.",
      "Zaliti vinom i pustiti da ispari.",
      "Postepeno dodavati vrući temeljac, kutlaču po kutlaču, miješajući.",
      "Kad je riža skoro gotova, vratiti gljive u tavu.",
      "Skloniti s vatre, umiješati maslac, parmezan i sjeckani peršun.",
      "Poslužiti odmah."
    ],
    equipment: [{ name: "Šerpa" }, { name: "Šporet" }],
    macros: { protein: 15, carbs: 60, fat: 20, calories: 480 }
  }
];
