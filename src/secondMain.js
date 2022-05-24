let arr = [
  {
    id: "1",
    name: "Abdulla",
    lastName: "Avloniy",
    born: 1878,
    bornDate: 5,
    bornMonth: "Aug",
    died: 1934,
    diedDate: 24,
    diedMonth: "May",
    books: 34,
    audio: 13,
    genre: "temuriy",
    img: "https://imgur.com/bwXa8aS.png",
    desc: "Abdulla Avloniy 1878 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. A. Avloniy mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.",
    jobs: "Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "1",
        bookImg: "https://imgur.com/HbyVBkw.png",
        bookName: "Dunyoning ishlari",
        bookRating: 4.1,
        bookGenre: "temuriy",
        bookSenario: "Tarixiy",
        published: 2021,
        bookPage: 376,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.`,

        bookInfoTwo: `

        Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
        `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "2",
        bookImg: "https://imgur.com/lrTr8Oq.png",
        bookName: "Ikki eshik orasi",
        bookRating: 4.3,
        bookGenre: "jadid",
        bookPage: 376,
        published: 2021,
        bookSenario: "Tarixiy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.`,

        bookInfoTwo: `x


        Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
        `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "3",
        bookImg: "https://imgur.com/AJ3NriS.png",
        bookName: "Tushda kechgan umrlar",
        bookRating: 4.4,
        bookGenre: "sovet",
        bookPage: 376,
        published: 2021,
        bookSenario: "Tarixiy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.`,

        bookInfoTwo: `

        Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
        `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "4",
        bookImg: "https://imgur.com/0mTLhYl.png",
        bookName: "“Ajdar”ning tabasi",
        bookRating: 3.9,
        bookGenre: "mustaqillik",
        bookPage: 376,
        published: 2021,
        bookSenario: "Tarixiy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.`,

        bookInfoTwo: `

        Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
        `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
];
