// ناوی "زمان" بە هەموو زمانەکان
const languageNames = {
  ckb: 'زمان', 'ckb-badini': 'زوان', kmr: 'Ziman', ar: 'اللغة', en: 'Language', tr: 'Dil', fa: 'زبان',
  ru: 'Язык', fr: 'Langue', es: 'Idioma', pt: 'Idioma', de: 'Sprache', sv: 'Språk', it: 'Lingua',
  'zh-CN': '语言', 'zh-TW': '語言', ko: '언어', hi: 'भाषा', ja: '言語', pl: 'Język', ur: 'زبان',
  bn: 'ভাষা', vi: 'Ngôn ngữ', th: 'ภาษา', uk: 'Мова', nl: 'Taal', el: 'Γλώσσα', ro: 'Limba',
  id: 'Bahasa', da: 'Sprog', no: 'Språk', fi: 'Kieli', syr: 'ܠܫܢܐ'
};

// تەرجەمەکان
const translations = {
  ckb: {
    navHome: 'ماڵەوە', navMovies: 'فیلم', navSeries: 'زنجیرە', navTv: 'تەلەڤزیۆن',
    boxTvTitle: 'تەلەڤزیۆن', boxTvDesc: 'زیاتر لە ١٠٠٠ کەناڵی جیهانی\nوەرزش • هەواڵ • فیلم • منداڵان', boxTvBadge: 'ڕاستەوخۆ',
    boxMoviesTitle: 'فیلم', boxMoviesDesc: 'هەزاران فیلمی بەناوبانگ\nئەکشن • دراما • کۆمێدی • ڕۆمانسی', boxMoviesBadge: 'نوێترین فیلمەکان',
    boxSeriesTitle: 'زنجیرە', boxSeriesDesc: 'بەناوبانگترین زنجیرەکان\nوەرزی نوێ • هەفتانە', boxSeriesBadge: 'بەردەوام بینین',
    boxCinemaTitle: 'ژووری سینەما', boxCinemaDesc: 'هاوڕێکانت بانگهێشت بکە\nبەیەکەوە سەیری فیلم بکەن و تاوتوێ بکەن', boxCinemaBadge: 'دروستکردنی ژوور'
  },
  en: {
    navHome: 'Home', navMovies: 'Movies', navSeries: 'Series', navTv: 'TV',
    boxTvTitle: 'TV', boxTvDesc: '1000+ World Channels\nSports • News • Movies • Kids', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Movies', boxMoviesDesc: 'Thousands of Movies\nAction • Drama • Comedy • Romance', boxMoviesBadge: 'New Releases',
    boxSeriesTitle: 'Series', boxSeriesDesc: 'Trending Series\nNew Seasons • Weekly', boxSeriesBadge: 'Continue Watching',
    boxCinemaTitle: 'Cinema Room', boxCinemaDesc: 'Invite your friends\nWatch and discuss movies together', boxCinemaBadge: 'Create Room'
  },
  ar: {
    navHome: 'الرئيسية', navMovies: 'أفلام', navSeries: 'مسلسلات', navTv: 'تلفزيون',
    boxTvTitle: 'تلفزيون', boxTvDesc: 'أكثر من ١٠٠٠ قناة عالمية\nرياضة • أخبار • أفلام • أطفال', boxTvBadge: 'مباشر',
    boxMoviesTitle: 'أفلام', boxMoviesDesc: 'آلاف الأفلام الشهيرة\nأكشن • دراما • كوميدي • رومانسي', boxMoviesBadge: 'أحدث الأفلام',
    boxSeriesTitle: 'مسلسلات', boxSeriesDesc: 'أشهر المسلسلات\nمواسم جديدة • أسبوعياً', boxSeriesBadge: 'متابعة',
    boxCinemaTitle: 'غرفة السينما', boxCinemaDesc: 'ادعُ أصدقائك\nشاهدوا الفيلم معاً وناقشوه', boxCinemaBadge: 'إنشاء غرفة'
  },
  tr: {
    navHome: 'Ana Sayfa', navMovies: 'Filmler', navSeries: 'Diziler', navTv: 'TV',
    boxTvTitle: 'Televizyon', boxTvDesc: '1000+ Dünya Kanalı\nSpor • Haber • Film • Çocuk', boxTvBadge: 'CANLI',
    boxMoviesTitle: 'Filmler', boxMoviesDesc: 'Binlerce Film\nAksiyon • Dram • Komedi • Romantik', boxMoviesBadge: 'Yeni Filmler',
    boxSeriesTitle: 'Diziler', boxSeriesDesc: 'Popüler Diziler\nYeni Sezonlar • Haftalık', boxSeriesBadge: 'İzlemeye Devam Et',
    boxCinemaTitle: 'Sinema Odası', boxCinemaDesc: 'Arkadaşlarını davet et\nBirlikte film izleyin ve tartışın', boxCinemaBadge: 'Oda Oluştur'
  },
  fa: {
    navHome: 'صفحه اصلی', navMovies: 'فیلم‌ها', navSeries: 'سریال‌ها', navTv: 'تلویزیون',
    boxTvTitle: 'تلویزیون', boxTvDesc: 'بیش از ۱۰۰۰ کانال جهانی\nورزش • اخبار • فیلم • کودکان', boxTvBadge: 'زنده',
    boxMoviesTitle: 'فیلم', boxMoviesDesc: 'هزاران فیلم محبوب\nاکشن • درام • کمدی • رمانتیک', boxMoviesBadge: 'جدیدترین فیلم‌ها',
    boxSeriesTitle: 'سریال', boxSeriesDesc: 'محبوب‌ترین سریال‌ها\nفصل جدید • هفتگی', boxSeriesBadge: 'ادامه تماشا',
    boxCinemaTitle: 'اتاق سینما', boxCinemaDesc: 'دوستان خود را دعوت کنید\nبا هم فیلم تماشا کنید و بحث کنید', boxCinemaBadge: 'ایجاد اتاق'
  }
};

// زمانەکانی تر بۆ ئینگلیزی
const otherLangs = ['ru', 'fr', 'es', 'pt', 'de', 'sv', 'it', 'zh-CN', 'zh-TW', 'ko', 'hi', 'ja', 'pl', 'ur', 'bn', 'vi', 'th', 'uk', 'nl', 'el', 'ro', 'id', 'da', 'no', 'fi', 'syr', 'kmr'];
otherLangs.forEach(lang => { translations[lang] = translations.en; });
translations['ckb-badini'] = translations.ckb;

const rtlLanguages = ['ar', 'ckb', 'ckb-badini', 'fa', 'ur'];

function getCurrentLanguage() {
  let savedLang = localStorage.getItem('exinflix_language');
  if (savedLang && languageNames[savedLang]) return savedLang;
  return 'ckb';
}

function updateLanguage() {
  const lang = getCurrentLanguage();
  const texts = translations[lang] || translations.en;
  
  // گۆڕینی نوسینی "زمان" لەسەر ئایکۆنەکە
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.innerText = languageNames[lang] || 'Language';
  
  // گۆڕینی مینووەکان
  document.getElementById('navHome').innerText = texts.navHome;
  document.getElementById('navMovies').innerText = texts.navMovies;
  document.getElementById('navSeries').innerText = texts.navSeries;
  document.getElementById('navTv').innerText = texts.navTv;
  
  // گۆڕینی بۆکسەکان
  document.getElementById('boxTvTitle').innerText = texts.boxTvTitle;
  document.getElementById('boxTvDesc').innerText = texts.boxTvDesc;
  document.getElementById('boxTvBadge').innerText = texts.boxTvBadge;
  document.getElementById('boxMoviesTitle').innerText = texts.boxMoviesTitle;
  document.getElementById('boxMoviesDesc').innerText = texts.boxMoviesDesc;
  document.getElementById('boxMoviesBadge').innerText = texts.boxMoviesBadge;
  document.getElementById('boxSeriesTitle').innerText = texts.boxSeriesTitle;
  document.getElementById('boxSeriesDesc').innerText = texts.boxSeriesDesc;
  document.getElementById('boxSeriesBadge').innerText = texts.boxSeriesBadge;
  document.getElementById('boxCinemaTitle').innerText = texts.boxCinemaTitle;
  document.getElementById('boxCinemaDesc').innerText = texts.boxCinemaDesc;
  document.getElementById('boxCinemaBadge').innerText = texts.boxCinemaBadge;
  
  // RTL یان LTR
  if (rtlLanguages.includes(lang)) {
    document.body.classList.remove('ltr');
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
    document.body.classList.add('ltr');
  }
}

function setLanguage(langCode) {
  if (languageNames[langCode]) {
    localStorage.setItem('exinflix_language', langCode);
    updateLanguage();
    document.getElementById('languageDropdown').classList.remove('show');
  }
}

function navigateTo(page) {
  window.location.href = page;
}

// کاتێک پەڕەکە بار دەبێت
document.addEventListener('DOMContentLoaded', function() {
  updateLanguage();
  
  // ئایکۆنی زمان
  document.getElementById('languageIcon').onclick = function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
  };
  
  // داخستنی لیست کاتێک لە دەرەوە کلیک دەکەیت
  document.onclick = function() {
    document.getElementById('languageDropdown').classList.remove('show');
  };
  
  document.getElementById('languageDropdown').onclick = function(e) {
    e.stopPropagation();
  };
  
  // هەڵبژاردنی زمان
  document.querySelectorAll('.language-option').forEach(opt => {
    opt.onclick = function() {
      setLanguage(this.getAttribute('data-lang'));
    };
  });
  
  // بۆکسەکان
  document.getElementById('boxTv').onclick = () => navigateTo('live-tv.html');
  document.getElementById('boxMovies').onclick = () => navigateTo('movies.html');
  document.getElementById('boxSeries').onclick = () => navigateTo('series.html');
  document.getElementById('boxCinemaRoom').onclick = () => alert('پەڕەی ژووری سینەما - لە داهاتوودا زیاد دەکرێت');
});
