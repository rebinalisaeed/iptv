// ناوی "زمان" بە هەموو زمانەکان (هامان کۆدەکانی index.js)
const languageNames = {
  ckb: 'زمان', 'ckb-badini': 'زوان', kmr: 'Ziman', ar: 'اللغة', en: 'Language', tr: 'Dil', fa: 'زبان',
  ru: 'Язык', fr: 'Langue', es: 'Idioma', pt: 'Idioma', de: 'Sprache', sv: 'Språk', it: 'Lingua',
  'zh-CN': '语言', 'zh-TW': '語言', ko: '언어', hi: 'भाषा', ja: '言語', pl: 'Język', ur: 'زبان',
  bn: 'ভাষা', vi: 'Ngôn ngữ', th: 'ภาษา', uk: 'Мова', nl: 'Taal', el: 'Γλώσσα', ro: 'Limba',
  id: 'Bahasa', da: 'Sprog', no: 'Språk', fi: 'Kieli', syr: 'ܠܫܢܐ'
};

// تەرجەمەکانی پەڕەی فیلم
const translations = {
  ckb: {
    menuHome: 'کەتەگۆری سەرەتا', menuMovies: 'فیلم', menuSeries: 'زنجیرە', menuTv: 'کەناڵەکان', menuCinema: 'ژووری سینەما', menuProfile: 'پرۆفایل',
    sliderTitle: 'بەناوبانگەکانی ئەم هەفتەیە', moviesTitle: 'فیلمەکان',
    slide1Title: 'ئاگر لە دڵدا', slide1Desc: 'فیلمێکی ئەکشنی هەستبزوێن کە چیرۆکی پاڵەوانێکی گەنج دەگێڕێتەوە',
    slide2Title: 'ڕێگای مانگ', slide2Desc: 'درامایەکی دڵسۆز کە گەشتێکی سەرکێشیی مرۆڤی دەگێڕێتەوە',
    slide3Title: 'پەیکەری خوێن', slide3Desc: 'فیلمێکی فانتازی و ئەکشنی پڕ لە سەرکێشی',
    watchBtn: 'بینینی ئێستا',
    searchPlaceholder: 'گەڕان بۆ فیلم...',
    movies: [
      { title: 'ئاگر لە دڵدا', year: '2025', rating: '8.7', genre: 'ئەکشن' },
      { title: 'ڕێگای مانگ', year: '2024', rating: '8.2', genre: 'دراما' },
      { title: 'پەیکەری خوێن', year: '2025', rating: '7.9', genre: 'فانتازی' },
      { title: 'خەونی کۆتایی', year: '2024', rating: '8.4', genre: 'هەستبزوێن' },
      { title: 'شەقامەکانی تاران', year: '2025', rating: '9.1', genre: 'ئەکشن' }
    ]
  },
  en: {
    menuHome: 'Main Category', menuMovies: 'Movies', menuSeries: 'Series', menuTv: 'TV Channels', menuCinema: 'Cinema Room', menuProfile: 'Profile',
    sliderTitle: 'This Week\'s Top Picks', moviesTitle: 'Movies',
    slide1Title: 'Fire in the Heart', slide1Desc: 'An exciting action movie about a young hero',
    slide2Title: 'Moon Road', slide2Desc: 'A heartfelt drama about a human adventure',
    slide3Title: 'Blood Statue', slide3Desc: 'A fantasy action movie full of adventure',
    watchBtn: 'Watch Now',
    searchPlaceholder: 'Search for movies...',
    movies: [
      { title: 'Fire in the Heart', year: '2025', rating: '8.7', genre: 'Action' },
      { title: 'Moon Road', year: '2024', rating: '8.2', genre: 'Drama' },
      { title: 'Blood Statue', year: '2025', rating: '7.9', genre: 'Fantasy' }
    ]
  },
  ar: {
    menuHome: 'الفئة الرئيسية', menuMovies: 'أفلام', menuSeries: 'مسلسلات', menuTv: 'قنوات', menuCinema: 'غرفة السينما', menuProfile: 'الملف الشخصي',
    sliderTitle: 'الأكثر مشاهدة هذا الأسبوع', moviesTitle: 'الأفلام',
    slide1Title: 'نار في القلب', slide1Desc: 'فيلم أكشن مثير يحكي قصة بطل شاب',
    slide2Title: 'طريق القمر', slide2Desc: 'دراما مؤثرة عن رحلة إنسانية',
    slide3Title: 'تمثال الدم', slide3Desc: 'فيلم خيال وأكشن مليء بالمغامرات',
    watchBtn: 'مشاهدة الآن',
    searchPlaceholder: 'البحث عن أفلام...',
    movies: [
      { title: 'نار في القلب', year: '2025', rating: '8.7', genre: 'أكشن' },
      { title: 'طريق القمر', year: '2024', rating: '8.2', genre: 'دراما' }
    ]
  },
  tr: {
    menuHome: 'Ana Kategori', menuMovies: 'Filmler', menuSeries: 'Diziler', menuTv: 'Kanallar', menuCinema: 'Sinema Odası', menuProfile: 'Profil',
    sliderTitle: 'Bu Haftanın Popülerleri', moviesTitle: 'Filmler',
    slide1Title: 'Kalpteki Ateş', slide1Desc: 'Genç bir kahramanın hikayesini anlatan heyecanlı bir aksiyon filmi',
    slide2Title: 'Ay Yolu', slide2Desc: 'Bir insan macera yolculuğunu anlatan içten bir dram',
    slide3Title: 'Kan Heykeli', slide3Desc: 'Macera dolu bir fantastik aksiyon filmi',
    watchBtn: 'Şimdi İzle',
    searchPlaceholder: 'Filmlerde ara...',
    movies: [
      { title: 'Kalpteki Ateş', year: '2025', rating: '8.7', genre: 'Aksiyon' },
      { title: 'Ay Yolu', year: '2024', rating: '8.2', genre: 'Dram' }
    ]
  },
  fa: {
    menuHome: 'دسته اصلی', menuMovies: 'فیلم‌ها', menuSeries: 'سریال‌ها', menuTv: 'کانال‌ها', menuCinema: 'اتاق سینما', menuProfile: 'پروفایل',
    sliderTitle: 'محبوب‌ترین‌های این هفته', moviesTitle: 'فیلم‌ها',
    slide1Title: 'آتش در دل', slide1Desc: 'فیلم اکشن هیجان‌انگیز درباره قهرمانی جوان',
    slide2Title: 'راه ماه', slide2Desc: 'درام احساسی درباره یک سفر ماجراجویانه',
    slide3Title: 'مجسمه خون', slide3Desc: 'فیلم فانتزی و اکشن پر از ماجراجویی',
    watchBtn: 'تماشا کن',
    searchPlaceholder: 'جستجوی فیلم...',
    movies: [
      { title: 'آتش در دل', year: '2025', rating: '8.7', genre: 'اکشن' },
      { title: 'راه ماه', year: '2024', rating: '8.2', genre: 'درام' }
    ]
  }
};

// زمانەکانی تر بۆ ئینگلیزی
const otherLangs = ['ru', 'fr', 'es', 'pt', 'de', 'sv', 'it', 'zh-CN', 'zh-TW', 'ko', 'hi', 'ja', 'pl', 'ur', 'bn', 'vi', 'th', 'uk', 'nl', 'el', 'ro', 'id', 'da', 'no', 'fi', 'syr', 'kmr', 'ckb-badini'];
otherLangs.forEach(lang => { translations[lang] = translations.en; });

const rtlLanguages = ['ar', 'ckb', 'ckb-badini', 'fa', 'ur'];

function getCurrentLanguage() {
  let savedLang = localStorage.getItem('exinflix_language');
  if (savedLang && translations[savedLang]) return savedLang;
  return 'ckb';
}

let currentLanguage = getCurrentLanguage();

function updateLanguage() {
  const lang = currentLanguage;
  const t = translations[lang] || translations.en;
  
  // گۆڕینی مینووی ئاسۆیی
  document.getElementById('menuHome').innerText = t.menuHome;
  document.getElementById('menuMovies').innerText = t.menuMovies;
  document.getElementById('menuSeries').innerText = t.menuSeries;
  document.getElementById('menuTv').innerText = t.menuTv;
  document.getElementById('menuCinema').innerText = t.menuCinema;
  document.getElementById('menuProfile').innerText = t.menuProfile;
  
  // گۆڕینی مینووی سایدبار
  document.getElementById('sidebarHome').innerHTML = `<i class="fas fa-home"></i> ${t.menuHome}`;
  document.getElementById('sidebarMovies').innerHTML = `<i class="fas fa-film"></i> ${t.menuMovies}`;
  document.getElementById('sidebarSeries').innerHTML = `<i class="fas fa-play-circle"></i> ${t.menuSeries}`;
  document.getElementById('sidebarTv').innerHTML = `<i class="fas fa-tv"></i> ${t.menuTv}`;
  document.getElementById('sidebarCinema').innerHTML = `<i class="fas fa-users"></i> ${t.menuCinema}`;
  document.getElementById('sidebarProfile').innerHTML = `<i class="fas fa-user"></i> ${t.menuProfile}`;
  
  // گۆڕینی سلایدەر
  document.getElementById('sliderTitle').innerHTML = `<i class="fas fa-fire"></i> ${t.sliderTitle}`;
  document.getElementById('moviesTitle').innerHTML = `<i class="fas fa-film"></i> ${t.moviesTitle}`;
  document.getElementById('slide1Title').innerText = t.slide1Title;
  document.getElementById('slide1Desc').innerText = t.slide1Desc;
  document.getElementById('slide2Title').innerText = t.slide2Title;
  document.getElementById('slide2Desc').innerText = t.slide2Desc;
  document.getElementById('slide3Title').innerText = t.slide3Title;
  document.getElementById('slide3Desc').innerText = t.slide3Desc;
  document.querySelectorAll('.slide-btn').forEach(btn => btn.innerText = t.watchBtn);
  
  // گۆڕینی بۆشایی گەڕان
  const searchInput = document.getElementById('searchInput');
  if (searchInput && t.searchPlaceholder) {
    searchInput.placeholder = t.searchPlaceholder;
  }
  
  // گۆڕینی فیلمەکان
  const moviesGrid = document.getElementById('moviesGrid');
  moviesGrid.innerHTML = '';
  let moviesList = (t.movies && t.movies.length > 0) ? t.movies : translations.ckb.movies;
  moviesList.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-title', movie.title.toLowerCase());
    card.onclick = () => alert(`فیلمی ${movie.title} - لە داهاتوودا زیاد دەکرێت`);
    card.innerHTML = `
      <img src="https://placehold.co/300x450/1A1E2F/FF006E?text=${encodeURIComponent(movie.title)}">
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-year">${movie.year} • ${movie.genre}</div>
        <div class="movie-rating"><i class="fas fa-star"></i> ${movie.rating}</div>
      </div>
    `;
    moviesGrid.appendChild(card);
  });
  
  // RTL یان LTR
  if (rtlLanguages.includes(lang)) {
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }
}

// سلایدەر
let currentSlide = 0;

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.getElementById('slider');
  
  if (document.getElementById('prevBtn')) {
    document.getElementById('prevBtn').onclick = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    };
  }
  
  if (document.getElementById('nextBtn')) {
    document.getElementById('nextBtn').onclick = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    };
  }
}

// سایدبار
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuBtn = document.getElementById('menuIconBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');
  
  if (!sidebar || !overlay) return;
  
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  if (menuBtn) menuBtn.onclick = openSidebar;
  if (closeBtn) closeBtn.onclick = closeSidebar;
  if (overlay) overlay.onclick = closeSidebar;
}

// گەڕان
function initSearch() {
  const searchContainer = document.getElementById('searchContainer');
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const moviesGrid = document.getElementById('moviesGrid');
  
  if (!searchContainer || !searchBtn || !searchInput) return;
  
  searchBtn.onclick = () => {
    searchContainer.classList.toggle('show');
    if (searchContainer.classList.contains('show')) {
      searchInput.focus();
    } else {
      searchInput.value = '';
      document.querySelectorAll('.movie-card').forEach(card => card.classList.remove('hidden'));
      const noResultMsg = document.querySelector('.no-result');
      if (noResultMsg) noResultMsg.remove();
    }
  };
  
  searchInput.oninput = function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    let visibleCount = 0;
    
    movieCards.forEach(card => {
      const title = card.getAttribute('data-title');
      if (title && title.includes(searchTerm)) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });
    
    let noResultMsg = document.querySelector('.no-result');
    if (visibleCount === 0 && searchTerm !== '') {
      if (!noResultMsg) {
        const msg = document.createElement('div');
        msg.className = 'no-result';
        msg.innerText = 'هیچ فیلمێک نەدۆزرایەوە';
        moviesGrid.appendChild(msg);
      }
    } else {
      if (noResultMsg) noResultMsg.remove();
    }
  };
}

// کاتێک پەڕەکە بار دەبێت
document.addEventListener('DOMContentLoaded', function() {
  updateLanguage();
  initSlider();
  initSidebar();
  initSearch();
});
