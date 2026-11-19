/* =========================================================
   HomeSafe — данные каталога и SVG-иллюстрации товаров
   Чтобы добавить товар — допишите объект в массив PRODUCTS.
   ========================================================= */

const CATEGORIES = [
  { id: "spray",       name: "Огнетушащие спреи",            art: { type: "spray", color: "#E0522B" } },
  { id: "foam",        name: "Воздушно-эмульсионные огнетушители", art: { type: "extinguisher", color: "#C9CCD1" } },
  { id: "ampoule",     name: "Противопожарные ампулы",       art: { type: "ampoule", color: "#E0522B" } },
  { id: "module",      name: "Подвесные модули",             art: { type: "module", color: "#E0522B" } },
  { id: "gas",         name: "Газовое пожаротушение",        art: { type: "gascyl", color: "#E0522B" } },
  { id: "design",      name: "Дизайнерские огнетушители",    art: { type: "extinguisher", color: "#2A211D" } },
  { id: "kits",        name: "Комплекты для дома",           art: { type: "kit", color: "#E0522B" } },
  { id: "auto",        name: "Автонаборы",                   art: { type: "autokit", color: "#2A211D" } },
  { id: "detectors",   name: "Датчики дыма",                 art: { type: "detector", color: "#FFFFFF" } },
  { id: "accessories", name: "Аксессуары",                   art: { type: "bracket", color: "#8C7E75" } }
];

/* place: home — квартира, dacha — дом и дача, auto — автомобиль, office — офис */
const PRODUCTS = [
  {
    id: "spray-500", cat: "spray", name: "Огнетушащий спрей HomeSafe 500 мл",
    price: 1290, oldPrice: 1590, badge: "sale", rating: 4.9, reviews: 128,
    places: ["home", "auto", "dacha"],
    art: { type: "spray", color: "#E0522B" },
    short: "Компактный баллон для кухни, сумки и бардачка. Тушит масло, пластик и проводку.",
    desc: "Аэрозольный спрей, который справляется с возгоранием на начальной стадии: загоревшееся масло на сковороде, тлеющая проводка, ткань или пластик. Не требует проверок и перезарядки — достаточно следить за сроком годности на корпусе. Безопасен для людей и животных, легко смывается водой.",
    specs: { "Объём": "500 мл", "Классы пожара": "A, B, E, F", "Время работы": "до 20 сек", "Температура хранения": "от −20 до +50 °C", "Срок годности": "5 лет", "Вес": "0,7 кг" }
  },
  {
    id: "spray-duo", cat: "spray", name: "Набор спреев «Кухня + авто», 2 шт",
    price: 2290, oldPrice: 2580, badge: "sale", rating: 4.8, reviews: 54,
    places: ["home", "auto"],
    art: { type: "spray", color: "#E9A23B" },
    short: "Два спрея по 500 мл: один на кухню, второй — в машину.",
    desc: "Удобный набор для тех, кто хочет закрыть два самых частых сценария сразу. Каждый баллон работает независимо, поставляется с настенным держателем.",
    specs: { "Комплектация": "2 спрея × 500 мл, 2 держателя", "Классы пожара": "A, B, E, F", "Срок годности": "5 лет", "Вес набора": "1,5 кг" }
  },
  {
    id: "foam-2", cat: "foam", name: "Огнетушитель воздушно-эмульсионный ОВЭ-2",
    price: 4900, badge: "hit", rating: 4.9, reviews: 211,
    places: ["home", "office", "auto"],
    art: { type: "extinguisher", color: "#C9CCD1" },
    short: "Стальной корпус, 2 литра. Подходит для квартиры, офиса и автомобиля.",
    desc: "Воздушно-эмульсионный огнетушитель создаёт на поверхности плёнку, которая охлаждает очаг и не даёт ему разгореться снова. Не пачкает помещение порошком, остатки убираются влажной тряпкой. На корпусе — QR-код для постановки на сервисный учёт.",
    specs: { "Объём заряда": "2 л", "Классы пожара": "A, B, E (до 1000 В)", "Длина струи": "3 м", "Корпус": "нержавеющая сталь", "Перезарядка": "раз в 10 лет", "Вес": "3,4 кг" }
  },
  {
    id: "foam-4", cat: "foam", name: "Огнетушитель воздушно-эмульсионный ОВЭ-4",
    price: 6900, rating: 4.8, reviews: 96,
    places: ["dacha", "office"],
    art: { type: "extinguisher", color: "#B5BAC1" },
    short: "Увеличенный заряд для частного дома, гаража и небольшого офиса.",
    desc: "Версия с удвоенным зарядом для помещений площадью до 100 м². Подходит для гаража, мастерской, котельной частного дома. Простой запуск одной рукой.",
    specs: { "Объём заряда": "4 л", "Классы пожара": "A, B, E (до 1000 В)", "Длина струи": "4 м", "Корпус": "нержавеющая сталь", "Перезарядка": "раз в 10 лет", "Вес": "6,2 кг" }
  },
  {
    id: "design-white", cat: "design", name: "Дизайнерский огнетушитель Nordic, белый",
    price: 8900, badge: "new", rating: 5.0, reviews: 37,
    places: ["home", "office"],
    art: { type: "extinguisher", color: "#F4EFE8" },
    short: "Матовый белый корпус, который не нужно прятать в шкаф.",
    desc: "Огнетушитель, который хорошо смотрится в интерьере: матовый корпус, лаконичная форма, деревянная подставка в комплекте. Внутри — тот же надёжный воздушно-эмульсионный заряд.",
    specs: { "Объём заряда": "2 л", "Классы пожара": "A, B, E", "Цвет": "белый матовый", "Подставка": "дуб, в комплекте", "Вес": "3,6 кг" }
  },
  {
    id: "design-black", cat: "design", name: "Дизайнерский огнетушитель Nordic, графит",
    price: 8900, rating: 4.9, reviews: 22,
    places: ["home", "office"],
    art: { type: "extinguisher", color: "#2A211D" },
    short: "Графитовый корпус для лофта, кабинета или студии.",
    desc: "Тёмная версия дизайнерского огнетушителя. Корпус покрыт износостойкой порошковой краской, не оставляет отпечатков.",
    specs: { "Объём заряда": "2 л", "Классы пожара": "A, B, E", "Цвет": "графит", "Подставка": "дуб, в комплекте", "Вес": "3,6 кг" }
  },
  {
    id: "ampoule-1", cat: "ampoule", name: "Противопожарная ампула самосрабатывающая",
    price: 2490, rating: 4.7, reviews: 63,
    places: ["home", "dacha", "office"],
    art: { type: "ampoule", color: "#E0522B" },
    short: "Срабатывает сама при +68 °C — для электрощитов и кладовых.",
    desc: "Ампула крепится над потенциальным очагом — в электрощитке, серверном шкафу, кладовой. При нагреве колба разрушается и распыляет огнетушащее вещество. Работает без электричества и участия человека.",
    specs: { "Температура срабатывания": "+68 °C", "Защищаемый объём": "до 3 м³", "Классы пожара": "A, B, C, E", "Срок службы": "10 лет", "Вес": "1,1 кг" }
  },
  {
    id: "module-2", cat: "module", name: "Подвесной модуль порошкового пожаротушения МПП-2",
    price: 3290, rating: 4.8, reviews: 41,
    places: ["dacha", "office"],
    art: { type: "module", color: "#E0522B" },
    short: "Автоматическая защита гаража, бани, котельной.",
    desc: "Модуль монтируется на потолок и срабатывает автоматически при появлении открытого огня. Подходит для помещений, где люди бывают нечасто: гараж, предбанник, котельная, склад.",
    specs: { "Масса заряда": "2 кг", "Защищаемая площадь": "до 12 м²", "Срабатывание": "термозамок / пусковой провод", "Срок службы": "10 лет" }
  },
  {
    id: "module-gas", cat: "module", name: "Подвесной модуль газовый МГП-3",
    price: 12900, badge: "new", rating: 4.9, reviews: 12,
    places: ["office"],
    art: { type: "module", color: "#5F7F6A" },
    short: "Не оставляет следов — для серверных и архивов.",
    desc: "Газовый модуль тушит без порошка и влаги, поэтому подходит для помещений с электроникой и документами. После срабатывания достаточно проветрить помещение.",
    specs: { "Огнетушащее вещество": "хладон", "Защищаемый объём": "до 8 м³", "Срабатывание": "автоматическое", "Срок службы": "10 лет" }
  },
  {
    id: "gas-sgp", cat: "gas", name: "Средство газового пожаротушения СГП-1",
    price: 7400, rating: 4.8, reviews: 29,
    places: ["office", "auto"],
    art: { type: "gascyl", color: "#E0522B" },
    short: "Компактный баллон для электрощитов, шкафов и моторных отсеков.",
    desc: "Небольшой баллон с газовым составом, который подаётся по трубке прямо в защищаемый объём. Можно запускать вручную или автоматически по сигналу датчика.",
    specs: { "Объём": "1 л", "Защищаемый объём": "до 1,5 м³", "Запуск": "ручной / автоматический", "Срок службы": "10 лет" }
  },
  {
    id: "kit-home", cat: "kits", name: "Комплект «Безопасная квартира»",
    price: 7990, oldPrice: 9370, badge: "sale", rating: 5.0, reviews: 74,
    places: ["home"],
    art: { type: "kit", color: "#E0522B" },
    short: "Огнетушитель ОВЭ-2, спрей для кухни и два датчика дыма.",
    desc: "Всё, что нужно для типичной двух-трёхкомнатной квартиры, в одной коробке. Мы подобрали состав так, чтобы закрыть кухню, спальню и коридор. Экономия по сравнению с покупкой по отдельности — около 15%.",
    specs: { "Состав": "ОВЭ-2, спрей 500 мл, 2 датчика дыма", "Для площади": "до 80 м²", "Монтаж": "крепёж в комплекте", "Вес": "4,9 кг" }
  },
  {
    id: "kit-dacha", cat: "kits", name: "Комплект «Дом и дача»",
    price: 13900, oldPrice: 15960, badge: "sale", rating: 4.9, reviews: 31,
    places: ["dacha"],
    art: { type: "kit", color: "#5F7F6A" },
    short: "ОВЭ-4, подвесной модуль для бани или гаража, ампула для щитка и 3 датчика.",
    desc: "Набор для частного дома: защищает жилые комнаты, электрощиток и хозяйственное помещение. Подходит для дачи, где хозяева бывают не каждый день.",
    specs: { "Состав": "ОВЭ-4, МПП-2, ампула, 3 датчика дыма", "Для площади": "до 150 м²", "Монтаж": "крепёж в комплекте" }
  },
  {
    id: "auto-kit", cat: "auto", name: "Автонабор HomeSafe Drive",
    price: 3490, badge: "hit", rating: 4.9, reviews: 159,
    places: ["auto"],
    art: { type: "autokit", color: "#2A211D" },
    short: "Огнетушитель, аптечка и знак аварийной остановки в одной сумке.",
    desc: "Обязательный набор автомобилиста в аккуратной сумке на липучке, которая не катается по багажнику. Огнетушитель воздушно-эмульсионный — не оставляет порошка в салоне.",
    specs: { "Состав": "огнетушитель 1 л, аптечка, знак", "Сумка": "с липучкой для багажника", "Вес": "2,3 кг" }
  },
  {
    id: "detector-1", cat: "detectors", name: "Автономный датчик дыма ИП-01",
    price: 990, rating: 4.7, reviews: 302,
    places: ["home", "dacha", "office"],
    art: { type: "detector", color: "#FFFFFF" },
    short: "Громкий сигнал 85 дБ, работает от батарейки до 3 лет.",
    desc: "Оптический датчик, который замечает дым ещё до появления открытого огня и включает громкую сирену. Монтируется на потолок за пять минут, батарейка в комплекте.",
    specs: { "Тип": "оптико-электронный", "Громкость сигнала": "85 дБ", "Питание": "батарейка 9 В", "Работа без замены": "до 3 лет", "Площадь контроля": "до 30 м²" }
  },
  {
    id: "detector-wifi", cat: "detectors", name: "Умный датчик дыма с Wi-Fi",
    price: 2490, badge: "new", rating: 4.8, reviews: 46,
    places: ["home", "dacha"],
    art: { type: "detector", color: "#FBE7DD" },
    short: "Присылает уведомление на телефон, даже если вас нет дома.",
    desc: "Датчик подключается к домашнему Wi-Fi и отправляет push-уведомление при срабатывании и разряде батареи. Удобно для дачи и квартиры, где живут пожилые родители.",
    specs: { "Связь": "Wi-Fi 2,4 ГГц", "Громкость сигнала": "85 дБ", "Питание": "батарейка, до 2 лет", "Приложение": "iOS / Android" }
  },
  {
    id: "bracket-sgp", cat: "accessories", name: "Кронштейн для средства газового пожаротушения",
    price: 1700, rating: 4.6, reviews: 18,
    places: ["office", "auto"],
    art: { type: "bracket", color: "#8C7E75" },
    short: "Крепление для СГП-1: кронштейн, метизы и резиновая втулка.",
    desc: "Надёжно фиксирует баллон СГП-1 на стене, в шкафу или моторном отсеке. Резиновая втулка гасит вибрацию.",
    specs: { "Совместимость": "СГП-1", "Комплектация": "кронштейн, метизы, втулка", "Материал": "сталь с порошковым покрытием" }
  },
  {
    id: "blanket", cat: "accessories", name: "Противопожарное покрывало 1×1 м",
    price: 1190, rating: 4.8, reviews: 87,
    places: ["home", "dacha"],
    art: { type: "blanket", color: "#E0522B" },
    short: "Накройте горящую сковороду — и огонь погаснет без воды.",
    desc: "Покрывало из негорючей ткани в настенном футляре. Достаточно потянуть за ленты и накрыть очаг. Хорошо работает на кухне и у мангала.",
    specs: { "Размер": "1 × 1 м", "Материал": "стеклоткань", "Футляр": "настенный, с лентами", "Термостойкость": "до 550 °C" }
  }
];

/* ---------- Фото товаров (стоки Unsplash, бесплатная лицензия) ----------
   Чтобы заменить фото — поменяйте ссылку. Параметры размера
   (?w=…&h=…&fit=crop) подставляются автоматически функцией photo().
   Можно указать любую ссылку на картинку, в том числе своё фото. */
const PRODUCT_PHOTOS = {
  "spray-500":     "https://images.unsplash.com/photo-1771233459195-61787ebe6c6d",
  "spray-duo":     "https://images.unsplash.com/photo-1777991642635-3877651ce879",
  "foam-2":        "https://images.unsplash.com/photo-1592838754746-4af9f09f526f",
  "foam-4":        "https://images.unsplash.com/photo-1625958936686-a9343dc35b5b",
  "design-white":  "https://images.unsplash.com/photo-1496745109441-36ea45fed379",
  "design-black":  "https://images.unsplash.com/photo-1712640379137-6d2532f887a7",
  "ampoule-1":     "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5",
  "module-2":      "https://images.unsplash.com/photo-1785682117611-586d39bfd5f2",
  "module-gas":    "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee",
  "gas-sgp":       "https://images.unsplash.com/photo-1761758674188-2b8e4c89c5e2",
  "kit-home":      "https://images.unsplash.com/photo-1649836215936-41c76a724233",
  "kit-dacha":     "https://images.unsplash.com/photo-1772034736198-b194e4d72a1e",
  "auto-kit":      "https://images.unsplash.com/photo-1631844321841-f6e67698158f",
  "detector-1":    "https://images.unsplash.com/photo-1767672857994-73a27b723506",
  "detector-wifi": "https://images.unsplash.com/photo-1585367437379-e0b71bb18156",
  "bracket-sgp":   "https://images.unsplash.com/photo-1722227089176-a981d2544b5f",
  "blanket":       "https://images.unsplash.com/photo-1661045683419-334355083b2d"
};

const CATEGORY_PHOTOS = {
  spray:       "https://images.unsplash.com/photo-1771233459195-61787ebe6c6d",
  foam:        "https://images.unsplash.com/photo-1592838754746-4af9f09f526f",
  ampoule:     "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5",
  module:      "https://images.unsplash.com/photo-1785682117611-586d39bfd5f2",
  gas:         "https://images.unsplash.com/photo-1761758674188-2b8e4c89c5e2",
  design:      "https://images.unsplash.com/photo-1712640379137-6d2532f887a7",
  kits:        "https://images.unsplash.com/photo-1649836215936-41c76a724233",
  auto:        "https://images.unsplash.com/photo-1631844321841-f6e67698158f",
  detectors:   "https://images.unsplash.com/photo-1767672857994-73a27b723506",
  accessories: "https://images.unsplash.com/photo-1722227089176-a981d2544b5f"
};

PRODUCTS.forEach(p => { if (PRODUCT_PHOTOS[p.id]) p.img = PRODUCT_PHOTOS[p.id]; });
CATEGORIES.forEach(c => { if (CATEGORY_PHOTOS[c.id]) c.img = CATEGORY_PHOTOS[c.id]; });

/* Ссылка на фото нужного размера (для Unsplash добавляет параметры обрезки) */
function photo(url, w, h) {
  if (!url) return "";
  if (!/images\.unsplash\.com/.test(url)) return url;
  return `${url}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;
}

/* Картинка товара: фото, если есть, иначе SVG-заглушка */
function productImage(item, w, h, uid) {
  if (item.img) {
    return `<img src="${photo(item.img, w, h)}" srcset="${photo(item.img, w * 2, h ? h * 2 : 0)} 2x" alt="${item.name.replace(/"/g, "&quot;")}" loading="lazy" decoding="async">`;
  }
  return artSVG(item.art, uid);
}

const PLACES = {
  home:   { name: "Квартира" },
  dacha:  { name: "Дом и дача" },
  auto:   { name: "Автомобиль" },
  office: { name: "Офис" }
};

/* ---------- SVG-иллюстрации ---------- */
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
  r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function isLight(hex) {
  const n = parseInt(hex.slice(1), 16);
  return ((n >> 16) * 0.3 + ((n >> 8) & 255) * 0.59 + (n & 255) * 0.11) > 170;
}
const MARK = (x, y, s, c) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 9 L10 1 L20 9 V20 H0 Z" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/><path d="M10 17c-2.6 0-4-1.6-4-3.6 0-2.2 2-3 2.4-5 1.2.8 1.6 2 1.6 2s.9-1 .9-2.4c1.7 1.2 3.1 3 3.1 5.2 0 2.2-1.6 3.8-4 3.8z" fill="${c}"/></g>`;

function artSVG(art, uid) {
  const c = art.color || "#E0522B";
  const d = shade(c, -40), l = shade(c, 40);
  const ink = isLight(c) ? "#2A211D" : "#FFFFFF";
  const id = "g" + (uid || Math.random().toString(36).slice(2, 8));
  const grad = `<defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${d}"/><stop offset=".35" stop-color="${l}"/><stop offset=".6" stop-color="${c}"/><stop offset="1" stop-color="${d}"/></linearGradient></defs>`;
  const shadow = `<ellipse cx="100" cy="186" rx="52" ry="7" fill="#2A211D" opacity=".08"/>`;
  let body = "";
  switch (art.type) {
    case "extinguisher":
      body = `
        <path d="M86 30 h22 l6 10 h-34 z" fill="#2A211D"/>
        <path d="M108 32 q30 -6 34 22 l-6 2 q-4 -16 -26 -14 z" fill="#2A211D"/>
        <rect x="112" y="22" width="30" height="7" rx="3.5" fill="#2A211D"/>
        <rect x="70" y="40" width="58" height="140" rx="26" fill="url(#${id})"/>
        <rect x="70" y="150" width="58" height="10" fill="${d}" opacity=".35"/>
        <rect x="80" y="82" width="38" height="44" rx="6" fill="${ink}" opacity=".92"/>
        ${MARK(89, 92, 1, "#E0522B")}
        <rect x="84" y="116" width="30" height="3" rx="1.5" fill="${isLight(ink) ? "#2A211D" : "#FFFFFF"}" opacity=".35"/>
        <path d="M136 56 q10 40 -6 70" fill="none" stroke="#2A211D" stroke-width="5" stroke-linecap="round"/>`;
      break;
    case "spray":
      body = `
        <rect x="84" y="22" width="30" height="16" rx="4" fill="#2A211D"/>
        <rect x="108" y="26" width="16" height="6" rx="3" fill="#2A211D"/>
        <path d="M78 46 q0 -8 10 -8 h22 q10 0 10 8 z" fill="${d}"/>
        <rect x="74" y="46" width="50" height="134" rx="12" fill="url(#${id})"/>
        <rect x="74" y="88" width="50" height="50" fill="${ink}" opacity=".95"/>
        ${MARK(89, 100, 1, c)}
        <rect x="82" y="128" width="34" height="3" rx="1.5" fill="${isLight(ink) ? "#2A211D" : "#FFFFFF"}" opacity=".3"/>`;
      break;
    case "ampoule":
      body = `
        <rect x="40" y="40" width="120" height="12" rx="6" fill="#8C7E75"/>
        <rect x="94" y="52" width="12" height="18" fill="#8C7E75"/>
        <ellipse cx="100" cy="122" rx="54" ry="54" fill="url(#${id})"/>
        <ellipse cx="82" cy="100" rx="16" ry="10" fill="#fff" opacity=".35"/>
        <rect x="88" y="66" width="24" height="14" rx="4" fill="#2A211D"/>
        <circle cx="100" cy="126" r="20" fill="#fff" opacity=".92"/>
        ${MARK(90, 116, 1, c)}`;
      break;
    case "module":
      body = `
        <rect x="92" y="18" width="16" height="36" fill="#8C7E75"/>
        <rect x="60" y="14" width="80" height="10" rx="5" fill="#8C7E75"/>
        <path d="M30 100 q0 -50 70 -50 q70 0 70 50 q0 30 -70 30 q-70 0 -70 -30z" fill="url(#${id})"/>
        <ellipse cx="100" cy="128" rx="58" ry="12" fill="${d}"/>
        <rect x="90" y="132" width="20" height="14" rx="4" fill="#2A211D"/>
        <circle cx="100" cy="92" r="18" fill="#fff" opacity=".92"/>
        ${MARK(90, 82, 1, c)}
        <path d="M70 160 l-6 14 M100 160 v16 M130 160 l6 14" stroke="${c}" stroke-width="4" stroke-linecap="round" opacity=".35"/>`;
      break;
    case "gascyl":
      body = `
        <rect x="88" y="20" width="24" height="18" rx="4" fill="#2A211D"/>
        <path d="M112 28 h24 q8 0 8 8 v40" fill="none" stroke="#8C7E75" stroke-width="5" stroke-linecap="round"/>
        <rect x="76" y="36" width="48" height="144" rx="24" fill="url(#${id})"/>
        <rect x="84" y="86" width="32" height="40" rx="6" fill="#fff" opacity=".95"/>
        ${MARK(90, 96, 1, c)}
        <rect x="76" y="150" width="48" height="8" fill="#2A211D" opacity=".25"/>`;
      break;
    case "detector":
      body = `
        <ellipse cx="100" cy="76" rx="70" ry="16" fill="#E8DCCD"/>
        <path d="M30 76 v34 q0 26 70 26 q70 0 70 -26 v-34 q0 16 -70 16 q-70 0 -70 -16z" fill="${shade(c, -20)}"/>
        <ellipse cx="100" cy="76" rx="70" ry="16" fill="${c}" stroke="#E8DCCD" stroke-width="2"/>
        ${[-40, -24, -8, 8, 24, 40].map(x => `<rect x="${98 + x}" y="98" width="4" height="22" rx="2" fill="#2A211D" opacity=".12"/>`).join("")}
        <circle cx="100" cy="76" r="9" fill="#E0522B"/>
        <circle cx="100" cy="76" r="3.5" fill="#fff"/>
        <path d="M60 156 q40 22 80 0" fill="none" stroke="#E0522B" stroke-width="4" stroke-linecap="round" opacity=".35"/>
        <path d="M72 168 q28 14 56 0" fill="none" stroke="#E0522B" stroke-width="4" stroke-linecap="round" opacity=".2"/>`;
      break;
    case "kit":
      body = `
        <path d="M24 84 l76 -26 l76 26 v84 l-76 18 l-76 -18z" fill="#E8C9A6"/>
        <path d="M100 58 v128" stroke="#C9A47E" stroke-width="2"/>
        <path d="M24 84 l76 18 l76 -18" fill="none" stroke="#C9A47E" stroke-width="2"/>
        <rect x="58" y="22" width="30" height="88" rx="14" fill="url(#${id})"/>
        <rect x="64" y="12" width="18" height="12" rx="3" fill="#2A211D"/>
        <rect x="98" y="38" width="22" height="66" rx="6" fill="#E9A23B"/>
        <rect x="100" y="30" width="18" height="10" rx="3" fill="#2A211D"/>
        <ellipse cx="146" cy="66" rx="22" ry="6" fill="#fff" stroke="#E8DCCD" stroke-width="2"/>
        <path d="M124 66 v14 q0 8 22 8 q22 0 22 -8 v-14" fill="#F4EBDF"/>
        <path d="M24 84 l76 18 v84 l-76 -18z" fill="#F0D7BB"/>
        ${MARK(48, 124, 1.4, "#B83E1C")}`;
      break;
    case "autokit":
      body = `
        <rect x="26" y="70" width="148" height="104" rx="16" fill="${c}"/>
        <rect x="26" y="70" width="148" height="22" rx="11" fill="${shade(c, 25)}"/>
        <path d="M72 70 v-14 q0 -10 10 -10 h36 q10 0 10 10 v14" fill="none" stroke="${shade(c, 25)}" stroke-width="8"/>
        <rect x="40" y="108" width="40" height="40" rx="8" fill="#fff"/>
        <path d="M60 116 v24 M48 128 h24" stroke="#E0522B" stroke-width="6" stroke-linecap="round"/>
        <path d="M120 148 l20 -36 l20 36z" fill="none" stroke="#E0522B" stroke-width="6" stroke-linejoin="round"/>
        <rect x="88" y="104" width="22" height="50" rx="10" fill="#E0522B"/>`;
      break;
    case "bracket":
      body = `
        <rect x="40" y="40" width="120" height="16" rx="4" fill="${c}"/>
        <rect x="40" y="40" width="16" height="120" rx="4" fill="${c}"/>
        <path d="M56 92 h56 a28 28 0 0 1 0 56 h-56" fill="none" stroke="${shade(c, -20)}" stroke-width="12"/>
        <circle cx="48" cy="72" r="5" fill="#fff"/><circle cx="48" cy="140" r="5" fill="#fff"/>
        <circle cx="120" cy="48" r="5" fill="#fff"/>
        <rect x="104" y="112" width="28" height="16" rx="8" fill="#2A211D"/>`;
      break;
    case "blanket":
      body = `
        <rect x="52" y="24" width="96" height="140" rx="12" fill="url(#${id})"/>
        <rect x="64" y="40" width="72" height="52" rx="6" fill="#fff" opacity=".95"/>
        ${MARK(85, 50, 1.5, c)}
        <path d="M84 164 v18 M116 164 v18" stroke="#2A211D" stroke-width="7" stroke-linecap="round"/>
        <circle cx="84" cy="184" r="5" fill="#2A211D"/><circle cx="116" cy="184" r="5" fill="#2A211D"/>
        <rect x="64" y="110" width="72" height="4" rx="2" fill="#fff" opacity=".4"/>
        <rect x="64" y="122" width="52" height="4" rx="2" fill="#fff" opacity=".4"/>`;
      break;
  }
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${grad}${shadow}${body}</svg>`;
}

function formatPrice(n) {
  return n.toLocaleString("ru-RU") + " ₽";
}
