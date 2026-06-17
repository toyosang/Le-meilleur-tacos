// ===== MENU DATA =====
const menuData = [
  { cat: 'tacos', name: 'Dinde', price: '25 DH' },
  { cat: 'tacos', name: 'Kefta Viande', price: '30 DH' },
  { cat: 'tacos', name: 'Kefta Dinde', price: '25 DH' },
  { cat: 'tacos', name: 'Merguez', price: '25 DH' },
  { cat: 'tacos', name: 'Nuggets', price: '25 DH' },
  { cat: 'tacos', name: 'Escalope', price: '25 DH' },
  { cat: 'tacos', name: 'Mixte', price: '30 DH' },
  { cat: 'tacos', name: 'Gratiné', price: '30 DH' },
  { cat: 'tacos', name: 'Le Meilleur Tacos', price: '30 DH', star: true },
  { cat: 'burger', name: 'Hamburger', price: '13 DH' },
  { cat: 'burger', name: 'Cheese Burger', price: '15 DH' },
  { cat: 'burger', name: 'Double Burger', price: '20 DH' },
  { cat: 'burger', name: 'Chicken Burger', price: '16 DH' },
  { cat: 'burger', name: 'Quality Burger', price: '17 DH' },
  { cat: 'burger', name: 'Le Meilleur Burger', price: '22 DH', star: true },
  { cat: 'sandwiches', name: 'Thon', price: '10 DH' },
  { cat: 'sandwiches', name: 'Omelette', price: '10 DH' },
  { cat: 'sandwiches', name: 'Dinde', price: '15 DH' },
  { cat: 'sandwiches', name: 'Viande Hachée', price: '20 DH' },
  { cat: 'sandwiches', name: 'Merguez', price: '15 DH' },
  { cat: 'sandwiches', name: 'Nuggets', price: '15 DH' },
  { cat: 'sandwiches', name: 'Escalope', price: '15 DH' },
  { cat: 'sandwiches', name: 'Poulet', price: '15 DH' },
  { cat: 'sandwiches', name: 'Mixte', price: '20 DH' },
  { cat: 'panini', name: 'Thon', price: '11 DH' },
  { cat: 'panini', name: 'Omelette', price: '11 DH' },
  { cat: 'panini', name: 'Dinde', price: '16 DH' },
  { cat: 'panini', name: 'Viande Hachée', price: '20 DH' },
  { cat: 'panini', name: 'Merguez', price: '15 DH' },
  { cat: 'panini', name: 'Nuggets', price: '16 DH' },
  { cat: 'panini', name: 'Escalope', price: '16 DH' },
  { cat: 'panini', name: 'Poulet', price: '16 DH' },
  { cat: 'panini', name: 'Mixte', price: '20 DH' },
  { cat: 'chika', name: 'Dinde', price: '16 DH' },
  { cat: 'chika', name: 'Viande Hachée', price: '20 DH' },
  { cat: 'chika', name: 'Merguez', price: '15 DH' },
  { cat: 'chika', name: 'Nuggets', price: '16 DH' },
  { cat: 'chika', name: 'Escalope', price: '16 DH' },
  { cat: 'chika', name: 'Poulet', price: '16 DH' },
  { cat: 'chika', name: 'Mixte', price: '20 DH' },
  { cat: 'souffle', name: 'Dinde', price: '25 DH' },
  { cat: 'souffle', name: 'Kefta', price: '25 DH' },
  { cat: 'souffle', name: 'Kefta Viande', price: '30 DH' },
  { cat: 'souffle', name: 'Fruit', price: '35 DH' },
  { cat: 'souffle', name: 'Mixte', price: '30 DH' },
  { cat: 'plats', name: 'Dinde', price: '25 DH' },
  { cat: 'plats', name: 'Viande Hachée', price: '30 DH' },
  { cat: 'plats', name: 'Merguez', price: '25 DH' },
  { cat: 'plats', name: 'Nuggets', price: '25 DH' },
  { cat: 'plats', name: 'Escalope', price: '25 DH' },
  { cat: 'plats', name: 'Mixte', price: '30 DH' },
  { cat: 'gratin', name: 'Dinde', price: '25 DH' },
  { cat: 'gratin', name: 'Kefta', price: '25 DH' },
  { cat: 'gratin', name: 'Kefta Viande', price: '30 DH' },
  { cat: 'gratin', name: 'Fruit', price: '35 DH' },
  { cat: 'gratin', name: 'Mixte', price: '30 DH' },
  { cat: 'salades', name: 'Nicoise Petite', price: '15 DH' },
  { cat: 'salades', name: 'Chicken', price: '17 DH' },
  { cat: 'salades', name: 'Dinde', price: '20 DH' },
  { cat: 'pizza', name: 'Thon', petite: '20 DH', grande: '35 DH' },
  { cat: 'pizza', name: 'Dinde', petite: '25 DH', grande: '40 DH' },
  { cat: 'pizza', name: 'Margarita', petite: '15 DH', grande: '30 DH' },
  { cat: 'pizza', name: 'Végétarienne', petite: '20 DH', grande: '35 DH' },
  { cat: 'pizza', name: 'Bolognaise', petite: '25 DH', grande: '40 DH' },
  { cat: 'pizza', name: 'Portofino', petite: '30 DH', grande: '40 DH' },
  { cat: 'pizza', name: 'Orientale', petite: '25 DH', grande: '35 DH' },
  { cat: 'pizza', name: 'Fruits de Mer', petite: '30 DH', grande: '50 DH' },
  { cat: 'pizza', name: 'Quatre Saisons', petite: '35 DH', grande: '55 DH' },
  { cat: 'pizza', name: 'Le Meilleur', petite: '35 DH', grande: '55 DH', star: true },
  { cat: 'jus', name: 'Orange', price: '10 DH' },
  { cat: 'jus', name: 'Banane', price: '10 DH' },
  { cat: 'jus', name: 'Pomme', price: '10 DH' },
  { cat: 'jus', name: 'Fraise', price: '12 DH' },
  { cat: 'jus', name: 'Ananas', price: '15 DH' },
  { cat: 'jus', name: 'Papaye', price: '13 DH' },
  { cat: 'jus', name: 'Avocat', price: '10 DH' },
  { cat: 'jus', name: 'Avocat Fruits', price: '15 DH' },
  { cat: 'jus', name: 'Panachée', price: '10 DH' },
  { cat: 'jus', name: 'Pêche', price: '10 DH' },
  { cat: 'jus', name: 'Poire', price: '12 DH' },
  { cat: 'jus', name: 'Datte', price: '10 DH' },
  { cat: 'jus', name: 'Amande', price: '12 DH' },
  { cat: 'jus', name: 'Mangue', price: '15 DH' },
  { cat: 'jus', name: 'Panachée Orange', price: '15 DH' }
];

// ===== TRANSLATIONS =====
const translations = {
  fr: {
    logo: 'Le Meilleur Tacos',
    navHome: 'Accueil',
    navMenu: 'Menu',
    navAbout: 'À Propos',
    navContact: 'Contact',
    navOrder: 'Commander',
    heroSub: 'Le Goût de l\'Excellence',
    heroCta1: 'Voir le Menu',
    heroCta2: 'Commander sur WhatsApp',
    menuTitle: 'Notre Menu',
    filterAll: 'Tout',
    filterTacos: 'Tacos',
    filterBurger: 'Burger',
    filterSandwiches: 'Sandwiches',
    filterPanini: 'Panini',
    filterChika: 'Chika',
    filterSouffle: 'Soufflé',
    filterPlats: 'Plats',
    filterGratin: 'Gratin',
    filterSalades: 'Salades',
    filterPizza: 'Pizza',
    filterJus: 'Jus',
    aboutTitle: 'À Propos',
    aboutText: 'Le Meilleur Tacos — depuis 2018. Nous vous offrons une restauration rapide de qualité supérieure avec un goût exceptionnel.',
    aboutVal1: 'Ingrédients Frais',
    aboutVal2: 'Portions Généreuses',
    aboutVal3: 'Goût Exceptionnel',
    contactTitle: 'Contactez-Nous',
    contactSub: 'Commandez directement via WhatsApp pour une livraison rapide ou à emporter !',
    contactAddrLabel: 'Adresse',
    contactAddr: 'LE MEILLEUR TACOS، إنزكان 80000',
    contactHoursLabel: 'Horaires',
    contactHours: 'Tous les jours: 13h00 - 01h00',
    contactCtaText: 'Prêt à commander ?',
    contactWhatsApp: 'Commander sur WhatsApp',
    footerText: '© 2024 Le Meilleur Tacos. Tous droits réservés.',
    whatsappMsg: 'Bonjour Le Meilleur Tacos, je voudrais commander:',
    catTacos: 'Tacos',
    catBurger: 'Burger',
    catSandwiches: 'Sandwiches',
    catPanini: 'Panini',
    catChika: 'Chika',
    catSouffle: 'Soufflé',
    catPlats: 'Plats',
    catGratin: 'Gratin',
    catSalades: 'Salades',
    catPizza: 'Pizza',
    catJus: 'Jus',
    petite: 'Petite',
    grande: 'Grande'
  },
  en: {
    logo: 'Le Meilleur Tacos',
    navHome: 'Home',
    navMenu: 'Menu',
    navAbout: 'About',
    navContact: 'Contact',
    navOrder: 'Order Now',
    heroSub: 'The Taste of Excellence',
    heroCta1: 'View Menu',
    heroCta2: 'Order on WhatsApp',
    menuTitle: 'Our Menu',
    filterAll: 'All',
    filterTacos: 'Tacos',
    filterBurger: 'Burger',
    filterSandwiches: 'Sandwiches',
    filterPanini: 'Panini',
    filterChika: 'Chika',
    filterSouffle: 'Soufflé',
    filterPlats: 'Plates',
    filterGratin: 'Gratin',
    filterSalades: 'Salads',
    filterPizza: 'Pizza',
    filterJus: 'Juices',
    aboutTitle: 'About Us',
    aboutText: 'Le Meilleur Tacos — since 2018. We offer premium fast food with exceptional taste.',
    aboutVal1: 'Fresh Ingredients',
    aboutVal2: 'Generous Portions',
    aboutVal3: 'Exceptional Taste',
    contactTitle: 'Contact Us',
    contactSub: 'Order directly via WhatsApp for fast delivery or takeaway!',
    contactAddrLabel: 'Address',
    contactAddr: 'LE MEILLEUR TACOS، إنزكان 80000',
    contactHoursLabel: 'Hours',
    contactHours: 'Daily: 1:00 PM - 1:00 AM',
    contactCtaText: 'Ready to order?',
    contactWhatsApp: 'Order Now on WhatsApp',
    footerText: '© 2024 Le Meilleur Tacos. All rights reserved.',
    whatsappMsg: 'Hello Le Meilleur Tacos, I would like to order:',
    catTacos: 'Tacos',
    catBurger: 'Burger',
    catSandwiches: 'Sandwiches',
    catPanini: 'Panini',
    catChika: 'Chika',
    catSouffle: 'Soufflé',
    catPlats: 'Plates',
    catGratin: 'Gratin',
    catSalades: 'Salads',
    catPizza: 'Pizza',
    catJus: 'Juices',
    petite: 'Small',
    grande: 'Large'
  },
  ar: {
    logo: 'لو ميلور تاكوس',
    navHome: 'الرئيسية',
    navMenu: 'القائمة',
    navAbout: 'من نحن',
    navContact: 'اتصل بنا',
    navOrder: 'اطلب الآن',
    heroSub: 'طعم التميز',
    heroCta1: 'شاهد القائمة',
    heroCta2: 'اطلب عبر واتساب',
    menuTitle: 'قائمتنا',
    filterAll: 'الكل',
    filterTacos: 'تاكوس',
    filterBurger: 'برغر',
    filterSandwiches: 'ساندويتشات',
    filterPanini: 'بانيني',
    filterChika: 'شكيا',
    filterSouffle: 'سوفلي',
    filterPlats: 'أطباق',
    filterGratin: 'غرتان',
    filterSalades: 'سلطات',
    filterPizza: 'بيتزا',
    filterJus: 'عصائر',
    aboutTitle: 'من نحن',
    aboutText: 'لو ميلور تاكوس — منذ 2018. نقدم لكم أشهى المأكولات السريعة بجودة عالية ومذاق استثنائي.',
    aboutVal1: 'مكونات طازجة',
    aboutVal2: 'حصص سخية',
    aboutVal3: 'طعم استثنائي',
    contactTitle: 'اتصل بنا',
    contactSub: 'اطلب مباشرة عبر واتساب للتوصيل السريع أو الوجبات الجاهزة!',
    contactAddrLabel: 'العنوان',
    contactAddr: 'LE MEILLEUR TACOS، إنزكان 80000',
    contactHoursLabel: 'ساعات العمل',
    contactHours: 'يومياً: 13:00 - 01:00',
    contactCtaText: 'مستعد للطلب؟',
    contactWhatsApp: 'اطلب الآن عبر واتساب',
    footerText: '© 2024 لو ميلور تاكوس. جميع الحقوق محفوظة.',
    whatsappMsg: 'مرحباً لو ميلور تاكوس، أريد أن أطلب:',
    catTacos: 'تاكوس',
    catBurger: 'برغر',
    catSandwiches: 'ساندويتشات',
    catPanini: 'بانيني',
    catChika: 'شكيا',
    catSouffle: 'سوفلي',
    catPlats: 'أطباق',
    catGratin: 'غرتان',
    catSalades: 'سلطات',
    catPizza: 'بيتزا',
    catJus: 'عصائر',
    petite: 'صغيرة',
    grande: 'كبيرة'
  }
};

const catOrder = ['tacos','burger','sandwiches','panini','chika','souffle','plats','gratin','salades','pizza','jus'];

// ===== STATE =====
let currentLang = localStorage.getItem('lang') || 'fr';
let currentFilter = 'all';

// ===== DOM REFS =====
const menuGrid = document.getElementById('menuGrid');
const filterBar = document.getElementById('filterBar');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileClose = document.getElementById('mobileClose');
const scrollTopBtn = document.getElementById('scrollTop');
const floatWhatsApp = document.getElementById('floatWhatsApp');

// ===== MENU RENDER =====
function renderMenu(filter) {
  const items = filter === 'all' ? menuData : menuData.filter(i => i.cat === filter);
  const grouped = {};
  items.forEach(item => {
    if (!grouped[item.cat]) grouped[item.cat] = [];
    grouped[item.cat].push(item);
  });
  let html = '';
  catOrder.forEach(cat => {
    if (!grouped[cat]) return;
    const catKey = 'cat' + cat.charAt(0).toUpperCase() + cat.slice(1);
    const catLabel = translations[currentLang][catKey] || cat;
    html += '<div class="category-label">' + catLabel + '</div>';
    grouped[cat].forEach(item => {
      if (item.petite && item.grande) {
        html += '<div class="pizza-card" data-category="' + item.cat + '">' +
          '<div class="pizza-name">' + item.name + (item.star ? ' <span class="badge"><i class="fa-solid fa-star"></i> Le Meilleur</span>' : '') + '</div>' +
          '<div class="pizza-sizes">' +
            '<span class="size-badge">' + translations[currentLang].petite + ': ' + item.petite + '</span>' +
            '<span class="size-divider">|</span>' +
            '<span class="size-badge">' + translations[currentLang].grande + ': ' + item.grande + '</span>' +
          '</div></div>';
      } else {
        html += '<div class="menu-item" data-category="' + item.cat + '">' +
          '<div class="menu-item-name">' + item.name + (item.star ? ' <span class="badge"><i class="fa-solid fa-star"></i> Le Meilleur</span>' : '') + '</div>' +
          '<div class="menu-item-price">' + item.price + '</div></div>';
      }
    });
  });
  menuGrid.innerHTML = html;
}

// ===== FILTER =====
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderMenu(filter);
}

// ===== LANGUAGE =====
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];
  document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
  document.querySelectorAll('.flag-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  const msg = encodeURIComponent(t.whatsappMsg);
  const waUrl = 'https://wa.me/212627639944?text=' + msg;
  document.querySelectorAll('a[href*="wa.me/212627639944"]').forEach(a => { a.href = waUrl; });
  renderMenu(currentFilter);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const key = 'filter' + btn.dataset.filter.charAt(0).toUpperCase() + btn.dataset.filter.slice(1);
    if (t[key]) btn.textContent = t[key];
  });
}

// ===== EVENT LISTENERS =====
filterBar.addEventListener('click', function(e) {
  var btn = e.target.closest('.filter-btn');
  if (btn) setFilter(btn.dataset.filter);
});

document.querySelectorAll('.flag-btn[data-lang]').forEach(function(btn) {
  btn.addEventListener('click', function() { switchLanguage(btn.dataset.lang); });
});

hamburgerBtn.addEventListener('click', function() { mobileMenu.classList.add('open'); });
mobileClose.addEventListener('click', function() { mobileMenu.classList.remove('open'); });
mobileMenu.querySelectorAll('a').forEach(function(a) {
  a.addEventListener('click', function() { mobileMenu.classList.remove('open'); });
});

window.addEventListener('scroll', function() {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      var offset = window.innerWidth < 768 ? 60 : 80;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});

// ===== INIT =====
setTimeout(function() {
  document.getElementById('loading-screen').classList.add('hidden');
}, 1500);

AOS.init({ duration: 600, once: true });
switchLanguage(currentLang);
setFilter('all');
