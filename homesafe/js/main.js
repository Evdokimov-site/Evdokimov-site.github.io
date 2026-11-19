/* =========================================================
   HomeSafe — общая логика: шапка, подвал, корзина, страницы
   ========================================================= */

const SITE = {
  name: "HomeSafe",
  phone: "8 800 000-00-00",
  phoneHref: "+78000000000",
  phone2: "8 (495) 000-00-00",
  email: "hello@homesafe.ru",
  address: "Москва, ул. Примерная, д. 1, офис 10",
  hours: "Пн–Пт 9:00–20:00, Сб 10:00–18:00",
  freeShipping: 5000
};

const ICONS = {
  cart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>',
  plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>',
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  wrench: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8"/><path d="M3 21l6-6"/><path d="M14.7 6.3 17 4l3 3-2.3 2.3"/></svg>',
  chat: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>',
  phone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  clock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  card: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>',
  trash: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  tg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 4.3 2.9 11.5c-1 .4-1 1.8.1 2.1l4.6 1.4 1.8 5.6c.3.8 1.3 1 1.9.4l2.6-2.5 4.7 3.5c.7.5 1.7.1 1.9-.7L23 5.6c.2-1-.7-1.7-1.5-1.3zM9.6 14.6l-.4 3.6-1.2-3.9 9.6-6.3z"/></svg>',
  vk: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8 17.5c-5.6 0-8.8-3.8-9-10.2h2.8c.1 4.7 2.2 6.6 3.8 7V7.3h2.7v4c1.6-.2 3.2-2 3.8-4h2.6c-.4 2.5-2.3 4.3-3.6 5 1.3.6 3.4 2.2 4.2 5.2h-2.9c-.6-2-2.2-3.5-4.1-3.7v3.7z"/></svg>'
};

const LOGO_MARK = `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
  <rect width="40" height="40" rx="12" fill="#E0522B"/>
  <path d="M9 19 20 10l11 9v12H9z" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M20 28.5c-2.9 0-4.5-1.8-4.5-4 0-2.5 2.2-3.4 2.7-5.6 1.3.9 1.8 2.2 1.8 2.2s1-1.1 1-2.7c1.9 1.3 3.5 3.4 3.5 5.8 0 2.5-1.8 4.3-4.5 4.3z" fill="#fff"/>
</svg>`;

/* ---------- Storage helpers (safe) ---------- */
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* ignore */ }
  }
};

/* ---------- Cart ---------- */
const Cart = {
  key: "homesafe_cart",
  items() { return store.get(this.key, {}); },
  save(items) { store.set(this.key, items); updateCartBadge(); },
  add(id, qty = 1) {
    const items = this.items();
    items[id] = (items[id] || 0) + qty;
    this.save(items);
  },
  set(id, qty) {
    const items = this.items();
    if (qty <= 0) delete items[id]; else items[id] = qty;
    this.save(items);
  },
  remove(id) { this.set(id, 0); },
  clear() { this.save({}); },
  count() { return Object.values(this.items()).reduce((a, b) => a + b, 0); },
  lines() {
    const items = this.items();
    return Object.keys(items)
      .map(id => ({ product: PRODUCTS.find(p => p.id === id), qty: items[id] }))
      .filter(l => l.product);
  },
  total() { return this.lines().reduce((s, l) => s + l.product.price * l.qty, 0); }
};

function updateCartBadge() {
  document.querySelectorAll(".cart-count").forEach(el => {
    const n = Cart.count();
    el.textContent = n;
    el.dataset.count = n;
  });
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(html) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.innerHTML = html;
  requestAnimationFrame(() => el.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

function addToCart(id, qty = 1, btn) {
  Cart.add(id, qty);
  const p = PRODUCTS.find(x => x.id === id);
  toast(`${ICONS.check} <span>${p ? p.name : "Товар"} — в корзине</span> <a href="cart.html">Оформить</a>`);
  if (btn) {
    btn.classList.add("added");
    const prev = btn.innerHTML;
    if (btn.classList.contains("add-btn")) btn.innerHTML = ICONS.check;
    setTimeout(() => { btn.classList.remove("added"); if (btn.classList.contains("add-btn")) btn.innerHTML = prev; }, 1400);
  }
}

/* ---------- Header / Footer ---------- */
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = document.body.dataset.page || "";
  const nav = [
    ["catalog.html", "Каталог", "catalog"],
    ["catalog.html?place=home", "Для дома", "home"],
    ["catalog.html?place=auto", "Для авто", "auto"],
    ["catalog.html?sale=1", "Акции", "sale"],
    ["contacts.html#delivery", "Доставка", "delivery"],
    ["contacts.html", "Контакты", "contacts"]
  ];
  const params = new URLSearchParams(location.search);
  const current = page === "catalog"
    ? (params.get("place") || (params.get("sale") ? "sale" : "catalog"))
    : page === "contacts" ? "contacts" : "";

  el.innerHTML = `
    <div class="topbar">
      <div class="container">
        <div class="topbar-note"><span class="dot"></span> Доставим по России за 1–5 дней · бесплатно от ${formatPrice(SITE.freeShipping)}</div>
        <nav aria-label="Служебное меню">
          <a href="contacts.html#about">О компании</a>
          <a href="contacts.html#delivery">Доставка</a>
          <a href="contacts.html#payment">Оплата</a>
          <a href="index.html#blog">Блог</a>
          <a href="contacts.html#faq">FAQ</a>
        </nav>
      </div>
    </div>
    <header class="header">
      <div class="container">
        <a class="logo" href="index.html" aria-label="${SITE.name} — на главную">
          ${LOGO_MARK}<span class="logo-text">Home<span>Safe</span></span>
        </a>
        <nav class="main-nav" aria-label="Основное меню">
          ${nav.map(([href, label, key]) => `<a href="${href}" class="${current === key ? "active" : ""}">${label}</a>`).join("")}
        </nav>
        <form class="search" action="catalog.html" role="search">
          ${ICONS.search}
          <input type="search" name="q" placeholder="Огнетушитель, датчик дыма…" aria-label="Поиск по каталогу" value="${(params.get("q") || "").replace(/"/g, "&quot;")}">
        </form>
        <div class="header-actions">
          <div class="header-phone">
            <a href="tel:${SITE.phoneHref}">${SITE.phone}</a>
            <small>Звонок бесплатный</small>
          </div>
          <a class="cart-btn" href="cart.html" aria-label="Корзина">
            ${ICONS.cart}<span class="cart-count" data-count="0">0</span>
          </a>
          <button class="burger" type="button" aria-label="Меню" aria-expanded="false">${ICONS.menu}</button>
        </div>
      </div>
      <div class="mobile-menu container">
        <form class="search" action="catalog.html" role="search">
          ${ICONS.search}
          <input type="search" name="q" placeholder="Поиск по каталогу" aria-label="Поиск по каталогу">
        </form>
        ${nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
        <a href="tel:${SITE.phoneHref}"><strong>${SITE.phone}</strong></a>
      </div>
    </header>`;

  const burger = el.querySelector(".burger");
  const menu = el.querySelector(".mobile-menu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.innerHTML = open ? ICONS.close : ICONS.menu;
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="logo" href="index.html">${LOGO_MARK}<span class="logo-text">Home<span>Safe</span></span></a>
            <p class="footer-about">Противопожарное оборудование для дома, дачи, автомобиля и офиса. Подбираем, доставляем, обслуживаем.</p>
            <div class="socials">
              <a href="#" aria-label="Telegram">${ICONS.tg}</a>
              <a href="#" aria-label="ВКонтакте">${ICONS.vk}</a>
            </div>
          </div>
          <div>
            <h4>Каталог</h4>
            <ul>
              ${CATEGORIES.slice(0, 6).map(c => `<li><a href="catalog.html?cat=${c.id}">${c.name}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h4>Покупателям</h4>
            <ul>
              <li><a href="contacts.html#delivery">Доставка</a></li>
              <li><a href="contacts.html#payment">Оплата</a></li>
              <li><a href="contacts.html#service">Обслуживание и перезарядка</a></li>
              <li><a href="contacts.html#faq">Вопросы и ответы</a></li>
              <li><a href="index.html#blog">Блог</a></li>
            </ul>
          </div>
          <div>
            <h4>Контакты</h4>
            <a class="footer-phone" href="tel:${SITE.phoneHref}">${SITE.phone}</a>
            <p style="margin:4px 0 12px">${SITE.hours}</p>
            <p style="margin:0"><a href="mailto:${SITE.email}">${SITE.email}</a><br>${SITE.address}</p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} ${SITE.name}. Все права защищены.</span>
          <span><a href="#">Политика конфиденциальности</a> · <a href="#">Пользовательское соглашение</a></span>
        </div>
      </div>
    </footer>`;
}

/* ---------- Product card ---------- */
function badgeHTML(p) {
  if (p.badge === "sale" && p.oldPrice) return `<span class="badge">−${Math.round((1 - p.price / p.oldPrice) * 100)}%</span>`;
  if (p.badge === "new") return `<span class="badge new">Новинка</span>`;
  if (p.badge === "hit") return `<span class="badge hit">Хит</span>`;
  return "";
}

function productCard(p) {
  const cat = CATEGORIES.find(c => c.id === p.cat);
  return `
    <article class="product-card">
      ${badgeHTML(p)}
      <a class="art photo" href="product.html?id=${p.id}" aria-label="${p.name}">${productImage(p, 480, 480, p.id)}</a>
      <div class="body">
        <div class="cat">${cat ? cat.name : ""}</div>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <p class="short">${p.short}</p>
        <div class="foot">
          <div><span class="price">${formatPrice(p.price)}</span>${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}</div>
          <button class="add-btn" type="button" data-add="${p.id}" aria-label="Добавить в корзину">${ICONS.plus}</button>
        </div>
      </div>
    </article>`;
}

/* Делегирование кликов «в корзину» */
document.addEventListener("click", e => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  e.preventDefault();
  addToCart(btn.dataset.add, 1, btn);
});

/* ---------- Forms (демо-отправка) ---------- */
function bindDemoForms() {
  document.querySelectorAll("form[data-demo]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const ok = form.querySelector(".form-success");
      if (ok) ok.classList.add("show");
      form.querySelectorAll("input, textarea").forEach(i => { if (i.type !== "checkbox") i.value = ""; });
    });
  });
}

/* ---------- Phone mask ---------- */
function bindPhoneMask() {
  document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener("input", () => {
      let d = input.value.replace(/\D/g, "");
      if (d.startsWith("8")) d = "7" + d.slice(1);
      if (!d.startsWith("7")) d = "7" + d;
      d = d.slice(0, 11);
      let out = "+7";
      if (d.length > 1) out += " (" + d.slice(1, 4);
      if (d.length >= 4) out += ") " + d.slice(4, 7);
      if (d.length >= 7) out += "-" + d.slice(7, 9);
      if (d.length >= 9) out += "-" + d.slice(9, 11);
      input.value = out;
    });
  });
}

/* =========================================================
   Pages
   ========================================================= */

function initHome() {
  // Категории
  const catGrid = document.getElementById("cat-grid");
  if (catGrid) {
    catGrid.innerHTML = CATEGORIES.map((c, i) => {
      const n = PRODUCTS.filter(p => p.cat === c.id).length;
      if (i === 6) {
        return `<a class="cat-card wide" href="catalog.html?cat=${c.id}">
          <h3>${c.name}</h3>
          <p>Готовые наборы под квартиру и дачу — дешевле, чем покупать по отдельности.</p>
          <div class="cat-photo">${productImage(c, 560, 320, "c" + c.id)}</div></a>`;
      }
      return `<a class="cat-card" href="catalog.html?cat=${c.id}">
        <h3>${c.name}</h3><span class="cat-count">${n} ${plural(n, "товар", "товара", "товаров")}</span>
        <div class="cat-photo">${productImage(c, 560, 320, "c" + c.id)}</div></a>`;
    }).join("") + `<a class="cat-card cat-all" href="catalog.html">
        <h3>Весь каталог</h3><span class="cat-count">${PRODUCTS.length} ${plural(PRODUCTS.length, "товар", "товара", "товаров")}</span>
        <span class="cat-all-arrow">${ICONS.arrow}</span></a>`;
  }

  // Популярные
  const popular = document.getElementById("popular");
  if (popular) {
    const ids = ["foam-2", "kit-home", "spray-500", "auto-kit", "design-white", "detector-wifi", "ampoule-1", "blanket"];
    popular.innerHTML = ids.map(id => productCard(PRODUCTS.find(p => p.id === id))).join("");
  }

  // Сценарии
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.addEventListener("click", () => {
    tabs.forEach(t => { t.classList.toggle("active", t === tab); t.setAttribute("aria-selected", t === tab); });
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + tab.dataset.tab));
  }));
  document.querySelectorAll("[data-mini]").forEach(box => {
    const ids = box.dataset.mini.split(",");
    box.innerHTML = ids.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      return `<a class="mini-product" href="product.html?id=${p.id}">
        <div class="art photo">${productImage(p, 300, 300, "m" + p.id + box.id)}</div>
        <div class="name">${p.name}</div><div class="price">${formatPrice(p.price)}</div></a>`;
    }).join("");
  });
}

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}

function initCatalog() {
  const params = new URLSearchParams(location.search);
  const state = {
    cats: new Set(params.get("cat") ? [params.get("cat")] : []),
    place: params.get("place") || "",
    sale: params.get("sale") === "1",
    q: (params.get("q") || "").trim().toLowerCase(),
    min: "", max: "",
    sort: "popular"
  };

  const catBox = document.getElementById("f-cats");
  catBox.innerHTML = CATEGORIES.map(c => {
    const n = PRODUCTS.filter(p => p.cat === c.id).length;
    return `<label class="check"><input type="checkbox" value="${c.id}" ${state.cats.has(c.id) ? "checked" : ""}> ${c.name} <span class="n">${n}</span></label>`;
  }).join("");

  const chips = document.getElementById("chips");
  const chipList = [["", "Все"], ...Object.entries(PLACES).map(([k, v]) => [k, v.name])];
  chips.innerHTML = chipList.map(([k, label]) => `<button type="button" class="chip ${state.place === k ? "active" : ""}" data-place="${k}">${label}</button>`).join("")
    + `<button type="button" class="chip ${state.sale ? "active" : ""}" data-sale>Со скидкой</button>`;

  const title = document.getElementById("catalog-title");
  if (state.cats.size === 1) title.textContent = CATEGORIES.find(c => c.id === [...state.cats][0])?.name || "Каталог";
  else if (state.place) title.textContent = "Для: " + PLACES[state.place].name.toLowerCase();
  else if (state.sale) title.textContent = "Акции и скидки";
  else if (state.q) title.textContent = `Поиск: «${params.get("q")}»`;

  const grid = document.getElementById("catalog-grid");
  const count = document.getElementById("catalog-count");

  function apply() {
    let list = PRODUCTS.filter(p =>
      (!state.cats.size || state.cats.has(p.cat)) &&
      (!state.place || p.places.includes(state.place)) &&
      (!state.sale || p.oldPrice) &&
      (!state.q || (p.name + " " + p.short).toLowerCase().includes(state.q)) &&
      (state.min === "" || p.price >= +state.min) &&
      (state.max === "" || p.price <= +state.max)
    );
    if (state.sort === "cheap") list.sort((a, b) => a.price - b.price);
    if (state.sort === "expensive") list.sort((a, b) => b.price - a.price);
    if (state.sort === "popular") list.sort((a, b) => b.reviews - a.reviews);
    if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
    count.textContent = `${list.length} ${plural(list.length, "товар", "товара", "товаров")}`;
    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="empty"><h3>Ничего не нашлось</h3><p>Попробуйте убрать часть фильтров или позвоните нам — подберём оборудование под вашу задачу.</p><button class="btn btn-outline btn-sm" type="button" id="reset2">Сбросить фильтры</button></div>`;
    const r2 = document.getElementById("reset2");
    if (r2) r2.addEventListener("click", reset);
  }

  function reset() {
    state.cats.clear(); state.place = ""; state.sale = false; state.q = ""; state.min = ""; state.max = "";
    catBox.querySelectorAll("input").forEach(i => i.checked = false);
    document.getElementById("f-min").value = ""; document.getElementById("f-max").value = "";
    chips.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.place === ""));
    title.textContent = "Каталог";
    apply();
  }

  catBox.addEventListener("change", e => {
    if (e.target.checked) state.cats.add(e.target.value); else state.cats.delete(e.target.value);
    apply();
  });
  chips.addEventListener("click", e => {
    const chip = e.target.closest(".chip"); if (!chip) return;
    if (chip.hasAttribute("data-sale")) { state.sale = !state.sale; chip.classList.toggle("active", state.sale); }
    else {
      state.place = chip.dataset.place;
      chips.querySelectorAll("[data-place]").forEach(c => c.classList.toggle("active", c === chip));
    }
    apply();
  });
  document.getElementById("f-min").addEventListener("input", e => { state.min = e.target.value; apply(); });
  document.getElementById("f-max").addEventListener("input", e => { state.max = e.target.value; apply(); });
  document.getElementById("sort").addEventListener("change", e => { state.sort = e.target.value; apply(); });
  document.getElementById("reset").addEventListener("click", reset);
  document.querySelector(".filters-toggle").addEventListener("click", () => document.querySelector(".filters").classList.toggle("open"));

  apply();
}

function initProduct() {
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  const cat = CATEGORIES.find(c => c.id === p.cat);
  document.title = `${p.name} — купить в ${SITE.name}`;

  document.getElementById("crumbs").innerHTML =
    `<a href="index.html">Главная</a><span><a href="catalog.html">Каталог</a></span><span><a href="catalog.html?cat=${cat.id}">${cat.name}</a></span><span>${p.name}</span>`;
  const gallery = document.getElementById("gallery");
  gallery.classList.toggle("has-photo", !!p.img);
  gallery.innerHTML = badgeHTML(p) + productImage(p, 900, 900, "pg" + p.id);

  const stars = "★★★★★".slice(0, Math.round(p.rating)) + "☆☆☆☆☆".slice(0, 5 - Math.round(p.rating));
  document.getElementById("info").innerHTML = `
    <h1>${p.name}</h1>
    <div class="rating"><span class="stars">${stars}</span> ${p.rating.toFixed(1)} · ${p.reviews} ${plural(p.reviews, "отзыв", "отзыва", "отзывов")}</div>
    <p class="lead">${p.short}</p>
    <div class="buy-box">
      <div><span class="price">${formatPrice(p.price)}</span>${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}</div>
      <div class="stock">${ICONS.check} В наличии на складе, отправим сегодня</div>
      <div class="buy-row">
        <div class="qty"><button type="button" data-q="-1" aria-label="Меньше">−</button><input id="qty" value="1" inputmode="numeric" aria-label="Количество"><button type="button" data-q="1" aria-label="Больше">+</button></div>
        <button class="btn btn-primary" type="button" id="buy">${ICONS.cart} В корзину</button>
        <a class="btn btn-outline" href="cart.html" id="buy-now">Купить сейчас</a>
      </div>
    </div>
    <div class="perks">
      <div>${ICONS.truck} Доставка 1–5 дней, бесплатно от ${formatPrice(SITE.freeShipping)}</div>
      <div>${ICONS.shield} Сертифицировано, гарантия производителя</div>
      <div>${ICONS.wrench} QR-код для сервисного учёта и напоминаний о проверке</div>
    </div>
    <div class="ptabs">
      <div class="ptab-nav" role="tablist">
        <button class="active" data-ptab="desc" type="button">Описание</button>
        <button data-ptab="specs" type="button">Характеристики</button>
        <button data-ptab="ship" type="button">Доставка и оплата</button>
      </div>
      <div class="ptab active" id="ptab-desc"><p>${p.desc}</p><p>Подходит для: ${p.places.map(k => PLACES[k].name.toLowerCase()).join(", ")}.</p></div>
      <div class="ptab" id="ptab-specs"><table class="specs">${Object.entries(p.specs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}</table></div>
      <div class="ptab" id="ptab-ship"><p>Курьером по Москве — на следующий день. В регионы — транспортной компанией или в пункт выдачи за 2–5 дней. Оплата картой онлайн, при получении или по счёту для юрлиц.</p><a class="link-arrow" href="contacts.html#delivery">Подробнее ${ICONS.arrow}</a></div>
    </div>`;

  const qty = document.getElementById("qty");
  document.querySelectorAll("[data-q]").forEach(b => b.addEventListener("click", () => {
    qty.value = Math.max(1, (parseInt(qty.value, 10) || 1) + +b.dataset.q);
  }));
  document.getElementById("buy").addEventListener("click", e => addToCart(p.id, Math.max(1, parseInt(qty.value, 10) || 1), e.currentTarget));
  document.getElementById("buy-now").addEventListener("click", () => Cart.add(p.id, Math.max(1, parseInt(qty.value, 10) || 1)));
  document.querySelectorAll("[data-ptab]").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("[data-ptab]").forEach(x => x.classList.toggle("active", x === b));
    document.querySelectorAll(".ptab").forEach(t => t.classList.toggle("active", t.id === "ptab-" + b.dataset.ptab));
  }));

  const related = PRODUCTS.filter(x => x.id !== p.id && (x.cat === p.cat || x.places.some(pl => p.places.includes(pl)))).slice(0, 4);
  document.getElementById("related").innerHTML = related.map(productCard).join("");
}

function initCart() {
  const root = document.getElementById("cart-root");

  function render() {
    const lines = Cart.lines();
    if (!lines.length) {
      root.innerHTML = `<div class="cart-empty">
        <svg width="120" height="120" viewBox="0 0 200 200">${artSVG({ type: "kit", color: "#E0522B" }, "empty").replace(/^<svg[^>]*>|<\/svg>$/g, "")}</svg>
        <h2>Корзина пока пуста</h2>
        <p style="color:var(--ink-2)">Загляните в каталог или начните с готового комплекта для квартиры.</p>
        <div class="hero-cta" style="justify-content:center"><a class="btn btn-primary" href="catalog.html">Перейти в каталог</a><a class="btn btn-outline" href="product.html?id=kit-home">Комплект для квартиры</a></div>
      </div>`;
      return;
    }
    const total = Cart.total();
    const left = Math.max(0, SITE.freeShipping - total);
    const ship = left ? 390 : 0;
    root.innerHTML = `
      <div class="cart-layout">
        <div class="cart-list">
          ${lines.map(({ product: p, qty }) => `
            <div class="cart-item" data-id="${p.id}">
              <a class="art photo" href="product.html?id=${p.id}">${productImage(p, 200, 200, "ci" + p.id)}</a>
              <div><a class="name" href="product.html?id=${p.id}">${p.name}</a><div class="unit">${formatPrice(p.price)} / шт.</div></div>
              <div class="qty"><button type="button" data-cq="-1" aria-label="Меньше">−</button><input value="${qty}" inputmode="numeric" aria-label="Количество" data-cqi><button type="button" data-cq="1" aria-label="Больше">+</button></div>
              <div class="sum">${formatPrice(p.price * qty)}</div>
              <button class="remove" type="button" data-rm aria-label="Удалить">${ICONS.trash}</button>
            </div>`).join("")}
          <button class="btn btn-outline btn-sm" type="button" id="clear" style="justify-self:start">Очистить корзину</button>
        </div>
        <aside class="summary">
          <h3>Ваш заказ</h3>
          <div class="summary-row"><span>Товары (${Cart.count()})</span><span>${formatPrice(total)}</span></div>
          <div class="summary-row"><span>Доставка</span><span>${ship ? formatPrice(ship) : "бесплатно"}</span></div>
          ${left ? `<div class="free-ship">Добавьте товаров на ${formatPrice(left)} — и доставка будет бесплатной<div class="progress"><i style="width:${Math.min(100, total / SITE.freeShipping * 100)}%"></i></div></div>` : `<div class="free-ship">${ICONS.check} Бесплатная доставка</div>`}
          <div class="summary-row summary-total"><span>Итого</span><span>${formatPrice(total + ship)}</span></div>
          <form class="form" id="checkout">
            <input class="field" name="name" placeholder="Имя" required autocomplete="name">
            <input class="field" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required autocomplete="tel">
            <input class="field" name="city" placeholder="Город и адрес доставки" required autocomplete="street-address">
            <button class="btn btn-primary btn-block" type="submit">Оформить заказ</button>
            <p class="form-note" style="color:var(--muted);margin:0">Менеджер позвонит, чтобы подтвердить заказ и время доставки.</p>
          </form>
        </aside>
      </div>`;
    bindPhoneMask();
  }

  root.addEventListener("click", e => {
    const item = e.target.closest(".cart-item");
    if (e.target.closest("#clear")) { Cart.clear(); render(); return; }
    if (!item) return;
    const id = item.dataset.id;
    const cur = Cart.items()[id] || 1;
    if (e.target.closest("[data-cq]")) { Cart.set(id, Math.max(1, cur + +e.target.closest("[data-cq]").dataset.cq)); render(); }
    if (e.target.closest("[data-rm]")) { Cart.remove(id); render(); }
  });
  root.addEventListener("change", e => {
    if (!e.target.matches("[data-cqi]")) return;
    const id = e.target.closest(".cart-item").dataset.id;
    Cart.set(id, Math.max(1, parseInt(e.target.value, 10) || 1));
    render();
  });
  root.addEventListener("submit", e => {
    if (e.target.id !== "checkout") return;
    e.preventDefault();
    const num = Math.floor(100000 + Math.random() * 900000);
    Cart.clear();
    root.innerHTML = `<div class="cart-empty">
      <div class="feature-icon" style="margin:0 auto 18px;width:64px;height:64px;border-radius:50%">${ICONS.check}</div>
      <h2>Спасибо, заказ №${num} принят!</h2>
      <p style="color:var(--ink-2)">Мы перезвоним в течение 15 минут в рабочее время, чтобы подтвердить детали.</p>
      <a class="btn btn-primary" href="index.html">На главную</a></div>`;
  });

  render();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  updateCartBadge();
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "catalog") initCatalog();
  if (page === "product") initProduct();
  if (page === "cart") initCart();
  bindDemoForms();
  bindPhoneMask();
});
