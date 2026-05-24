// ==================== تەرجەمەکان ====================
const translationsData = {
  ckb: {
    navHome: 'ماڵەوە', navMovies: 'فیلم', navSeries: 'زنجیرە', navTv: 'تەلەڤزیۆن', navLanguage: 'زمان',
    boxTvTitle: 'تەلەڤزیۆن', boxTvDesc: 'زیاتر لە ١٠٠٠ کەناڵی جیهانی\nوەرزش • هەواڵ • فیلم • منداڵان', boxTvBadge: 'ڕاستەوخۆ',
    boxMoviesTitle: 'فیلم', boxMoviesDesc: 'هەزاران فیلمی بەناوبانگ\nئەکشن • دراما • کۆمێدی • ڕۆمانسی', boxMoviesBadge: 'نوێترین فیلمەکان',
    boxSeriesTitle: 'زنجیرە', boxSeriesDesc: 'بەناوبانگترین زنجیرەکان\nوەرزی نوێ • هەفتانە', boxSeriesBadge: 'بەردەوام بینین'
  },
  'ckb-badini': {
    navHome: 'مالەوە', navMovies: 'فلیم', navSeries: 'زنجیرە', navTv: 'تەلەڤزیۆن', navLanguage: 'زوان',
    boxTvTitle: 'تەلەڤزیۆن', boxTvDesc: 'ژێدەر لە ١٠٠٠ کەناڵی جیهانی\nوەرزش • هەواڵ • فلیم • مناڵان', boxTvBadge: 'ڕاستەوخۆ',
    boxMoviesTitle: 'فلیم', boxMoviesDesc: 'هەزاران فلیمی بەناوبانگ\nئەکشن • دراما • کۆمێدی • ڕۆمانس', boxMoviesBadge: 'نوێترین فلیمەکان',
    boxSeriesTitle: 'زنجیرە', boxSeriesDesc: 'بەناوبانگترین زنجیرەکان\nوەرزی نوێ • هەفتانە', boxSeriesBadge: 'بەردەوام بینین'
  },
  kmr: {
    navHome: 'Mal', navMovies: 'Fîlm', navSeries: 'Rêzefîlm', navTv: 'Televîzyon', navLanguage: 'Ziman',
    boxTvTitle: 'Televîzyon', boxTvDesc: 'Zêdetirî 1000 kanalên cîhanê\nWerziş • Nûçe • Fîlm • Zarok', boxTvBadge: 'Rastewexo',
    boxMoviesTitle: 'Fîlm', boxMoviesDesc: 'Hezaran fîlmên navdar\nAksiyon • Drama • Komedî • Romantîk', boxMoviesBadge: 'Fîlmên nû',
    boxSeriesTitle: 'Rêzefîlm', boxSeriesDesc: 'Rêzefîlmên herî navdar\nSezona nû • Haftane', boxSeriesBadge: 'Berdewam temaşe'
  },
  ar: {
    navHome: 'الرئيسية', navMovies: 'أفلام', navSeries: 'مسلسلات', navTv: 'تلفزيون', navLanguage: 'اللغة',
    boxTvTitle: 'تلفزيون', boxTvDesc: 'أكثر من ١٠٠٠ قناة عالمية\nرياضة • أخبار • أفلام • أطفال', boxTvBadge: 'مباشر',
    boxMoviesTitle: 'أفلام', boxMoviesDesc: 'آلاف الأفلام الشهيرة\nأكشن • دراما • كوميدي • رومانسي', boxMoviesBadge: 'أحدث الأفلام',
    boxSeriesTitle: 'مسلسلات', boxSeriesDesc: 'أشهر المسلسلات\nمواسم جديدة • أسبوعياً', boxSeriesBadge: 'متابعة'
  },
  en: {
    navHome: 'Home', navMovies: 'Movies', navSeries: 'Series', navTv: 'TV', navLanguage: 'Language',
    boxTvTitle: 'TV', boxTvDesc: '1000+ World Channels\nSports • News • Movies • Kids', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Movies', boxMoviesDesc: 'Thousands of Movies\nAction • Drama • Comedy • Romance', boxMoviesBadge: 'New Releases',
    boxSeriesTitle: 'Series', boxSeriesDesc: 'Trending Series\nNew Seasons • Weekly', boxSeriesBadge: 'Continue Watching'
  },
  tr: {
    navHome: 'Ana Sayfa', navMovies: 'Filmler', navSeries: 'Diziler', navTv: 'TV', navLanguage: 'Dil',
    boxTvTitle: 'Televizyon', boxTvDesc: '1000+ Dünya Kanalı\nSpor • Haber • Film • Çocuk', boxTvBadge: 'CANLI',
    boxMoviesTitle: 'Filmler', boxMoviesDesc: 'Binlerce Film\nAksiyon • Dram • Komedi • Romantik', boxMoviesBadge: 'Yeni Filmler',
    boxSeriesTitle: 'Diziler', boxSeriesDesc: 'Popüler Diziler\nYeni Sezonlar • Haftalık', boxSeriesBadge: 'İzlemeye Devam Et'
  },
  fa: {
    navHome: 'صفحه اصلی', navMovies: 'فیلم‌ها', navSeries: 'سریال‌ها', navTv: 'تلویزیون', navLanguage: 'زبان',
    boxTvTitle: 'تلویزیون', boxTvDesc: 'بیش از ۱۰۰۰ کانال جهانی\nورزش • اخبار • فیلم • کودکان', boxTvBadge: 'زنده',
    boxMoviesTitle: 'فیلم', boxMoviesDesc: 'هزاران فیلم محبوب\nاکشن • درام • کمدی • رمانتیک', boxMoviesBadge: 'جدیدترین فیلم‌ها',
    boxSeriesTitle: 'سریال', boxSeriesDesc: 'محبوب‌ترین سریال‌ها\nفصل جدید • هفتگی', boxSeriesBadge: 'ادامه تماشا'
  },
  ru: {
    navHome: 'Главная', navMovies: 'Фильмы', navSeries: 'Сериалы', navTv: 'ТВ', navLanguage: 'Язык',
    boxTvTitle: 'Телевидение', boxTvDesc: '1000+ мировых каналов\nСпорт • Новости • Кино • Дети', boxTvBadge: 'ПРЯМОЙ ЭФИР',
    boxMoviesTitle: 'Фильмы', boxMoviesDesc: 'Тысячи фильмов\nБоевик • Драма • Комедия • Романтика', boxMoviesBadge: 'Новинки',
    boxSeriesTitle: 'Сериалы', boxSeriesDesc: 'Популярные сериалы\nНовые сезоны • Еженедельно', boxSeriesBadge: 'Продолжить просмотр'
  },
  fr: {
    navHome: 'Accueil', navMovies: 'Films', navSeries: 'Séries', navTv: 'TV', navLanguage: 'Langue',
    boxTvTitle: 'Télévision', boxTvDesc: '1000+ chaînes mondiales\nSport • Actualités • Films • Enfants', boxTvBadge: 'EN DIRECT',
    boxMoviesTitle: 'Films', boxMoviesDesc: 'Des milliers de films\nAction • Drame • Comédie • Romance', boxMoviesBadge: 'Nouveautés',
    boxSeriesTitle: 'Séries', boxSeriesDesc: 'Séries populaires\nNouvelles saisons • Hebdomadaire', boxSeriesBadge: 'Continuer'
  },
  es: {
    navHome: 'Inicio', navMovies: 'Películas', navSeries: 'Series', navTv: 'TV', navLanguage: 'Idioma',
    boxTvTitle: 'Televisión', boxTvDesc: '1000+ canales mundiales\nDeportes • Noticias • Películas • Niños', boxTvBadge: 'EN VIVO',
    boxMoviesTitle: 'Películas', boxMoviesDesc: 'Miles de películas\nAcción • Drama • Comedia • Romance', boxMoviesBadge: 'Nuevos Estrenos',
    boxSeriesTitle: 'Series', boxSeriesDesc: 'Series populares\nNuevas temporadas • Semanal', boxSeriesBadge: 'Continuar'
  },
  pt: {
    navHome: 'Início', navMovies: 'Filmes', navSeries: 'Séries', navTv: 'TV', navLanguage: 'Idioma',
    boxTvTitle: 'Televisão', boxTvDesc: '1000+ canais mundiais\nEsportes • Notícias • Filmes • Crianças', boxTvBadge: 'AO VIVO',
    boxMoviesTitle: 'Filmes', boxMoviesDesc: 'Milhares de filmes\nAção • Drama • Comédia • Romance', boxMoviesBadge: 'Novos Lançamentos',
    boxSeriesTitle: 'Séries', boxSeriesDesc: 'Séries populares\nNovas temporadas • Semanal', boxSeriesBadge: 'Continuar'
  },
  de: {
    navHome: 'Startseite', navMovies: 'Filme', navSeries: 'Serien', navTv: 'TV', navLanguage: 'Sprache',
    boxTvTitle: 'Fernsehen', boxTvDesc: '1000+ Weltsender\nSport • Nachrichten • Filme • Kinder', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Filme', boxMoviesDesc: 'Tausende Filme\nAction • Drama • Komödie • Romanze', boxMoviesBadge: 'Neuerscheinungen',
    boxSeriesTitle: 'Serien', boxSeriesDesc: 'Beliebte Serien\nNeue Staffeln • Wöchentlich', boxSeriesBadge: 'Weiterschauen'
  },
  sv: {
    navHome: 'Hem', navMovies: 'Filmer', navSeries: 'Serier', navTv: 'TV', navLanguage: 'Språk',
    boxTvTitle: 'TV', boxTvDesc: '1000+ världskanaler\nSport • Nyheter • Filmer • Barn', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Filmer', boxMoviesDesc: 'Tusentals filmer\nAction • Drama • Komedi • Romantik', boxMoviesBadge: 'Nyheter',
    boxSeriesTitle: 'Serier', boxSeriesDesc: 'Populära serier\nNya säsonger • Veckovis', boxSeriesBadge: 'Fortsätt titta'
  },
  it: {
    navHome: 'Home', navMovies: 'Film', navSeries: 'Serie TV', navTv: 'TV', navLanguage: 'Lingua',
    boxTvTitle: 'Televisione', boxTvDesc: '1000+ canali mondiali\nSport • Notizie • Film • Bambini', boxTvBadge: 'DIRETTA',
    boxMoviesTitle: 'Film', boxMoviesDesc: 'Migliaia di film\nAzione • Dramma • Commedia • Romance', boxMoviesBadge: 'Nuove Uscite',
    boxSeriesTitle: 'Serie TV', boxSeriesDesc: 'Serie popolari\nNuove stagioni • Settimanali', boxSeriesBadge: 'Continua a guardare'
  },
  zh: {
    navHome: '首页', navMovies: '电影', navSeries: '剧集', navTv: '电视', navLanguage: '语言',
    boxTvTitle: '电视', boxTvDesc: '1000+ 全球频道\n体育 • 新闻 • 电影 • 儿童', boxTvBadge: '直播',
    boxMoviesTitle: '电影', boxMoviesDesc: '数千部电影\n动作 • 剧情 • 喜剧 • 爱情', boxMoviesBadge: '最新电影',
    boxSeriesTitle: '剧集', boxSeriesDesc: '热门剧集\n新季 • 每周更新', boxSeriesBadge: '继续观看'
  },
  ko: {
    navHome: '홈', navMovies: '영화', navSeries: '시리즈', navTv: 'TV', navLanguage: '언어',
    boxTvTitle: '텔레비전', boxTvDesc: '1000+ 세계 채널\n스포츠 • 뉴스 • 영화 • 어린이', boxTvBadge: '실시간',
    boxMoviesTitle: '영화', boxMoviesDesc: '수천 편의 영화\n액션 • 드라마 • 코미디 • 로맨스', boxMoviesBadge: '최신 영화',
    boxSeriesTitle: '시리즈', boxSeriesDesc: '인기 시리즈\n새 시즌 • 매주', boxSeriesBadge: '계속 시청'
  }
};

// RTL زمانەکان
const rtlLanguages = ['ar', 'ckb', 'ckb-badini', 'fa'];

// زمانی ڕاستەوخۆ دەستنیشان بکە
function getCurrentLanguage() {
  let savedLang = localStorage.getItem('exinflix_language');
  if (savedLang && translationsData[savedLang]) return savedLang;
  let browserLang = navigator.language.split('-')[0];
  if (browserLang === 'ckb' || browserLang === 'ku') return 'ckb';
  if (browserLang === 'ar') return 'ar';
  if (browserLang === 'en') return 'en';
  if (browserLang === 'fa') return 'fa';
  return 'ckb';
}

// تەرجەمەکردن
function updateLanguage() {
  const lang = getCurrentLanguage();
  const texts = translationsData[lang];
  if (!texts) return;
  
  const navHome = document.getElementById('navHome');
  const navMovies = document.getElementById('navMovies');
  const navSeries = document.getElementById('navSeries');
  const navTv = document.getElementById('navTv');
  const langLabel = document.getElementById('langLabel');
  const boxTvTitle = document.getElementById('boxTvTitle');
  const boxTvDesc = document.getElementById('boxTvDesc');
  const boxTvBadge = document.getElementById('boxTvBadge');
  const boxMoviesTitle = document.getElementById('boxMoviesTitle');
  const boxMoviesDesc = document.getElementById('boxMoviesDesc');
  const boxMoviesBadge = document.getElementById('boxMoviesBadge');
  const boxSeriesTitle = document.getElementById('boxSeriesTitle');
  const boxSeriesDesc = document.getElementById('boxSeriesDesc');
  const boxSeriesBadge = document.getElementById('boxSeriesBadge');
  
  if (navHome) navHome.innerText = texts.navHome;
  if (navMovies) navMovies.innerText = texts.navMovies;
  if (navSeries) navSeries.innerText = texts.navSeries;
  if (navTv) navTv.innerText = texts.navTv;
  if (langLabel) langLabel.innerText = texts.navLanguage;
  if (boxTvTitle) boxTvTitle.innerText = texts.boxTvTitle;
  if (boxTvDesc) boxTvDesc.innerText = texts.boxTvDesc;
  if (boxTvBadge) boxTvBadge.innerText = texts.boxTvBadge;
  if (boxMoviesTitle) boxMoviesTitle.innerText = texts.boxMoviesTitle;
  if (boxMoviesDesc) boxMoviesDesc.innerText = texts.boxMoviesDesc;
  if (boxMoviesBadge) boxMoviesBadge.innerText = texts.boxMoviesBadge;
  if (boxSeriesTitle) boxSeriesTitle.innerText = texts.boxSeriesTitle;
  if (boxSeriesDesc) boxSeriesDesc.innerText = texts.boxSeriesDesc;
  if (boxSeriesBadge) boxSeriesBadge.innerText = texts.boxSeriesBadge;
  
  // RTL یان LTR
  if (rtlLanguages.includes(lang)) {
    document.body.classList.remove('ltr');
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
    document.body.classList.add('ltr');
  }
}

// گۆڕینی زمان
function setLanguage(langCode) {
  if (translationsData[langCode]) {
    localStorage.setItem('exinflix_language', langCode);
    updateLanguage();
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) dropdown.classList.remove('show');
  }
}

// نەیڤیگەیشن
function navigateTo(page) {
  window.location.href = page;
}

// کاتێک پەڕەکە بار بوو
document.addEventListener('DOMContentLoaded', function() {
  updateLanguage();
  
  // ئایکۆنی زمان
  const langIcon = document.getElementById('languageIcon');
  const langDropdown = document.getElementById('languageDropdown');
  
  if (langIcon) {
    langIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      if (langDropdown) langDropdown.classList.toggle('show');
    });
  }
  
  document.addEventListener('click', () => {
    if (langDropdown) langDropdown.classList.remove('show');
  });
  
  if (langDropdown) {
    langDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  
  document.querySelectorAll('.language-option').forEach(opt => {
    opt.addEventListener('click', function() {
      setLanguage(this.getAttribute('data-lang'));
    });
  });
  
  // بۆکسەکان
  const boxTv = document.getElementById('boxTv');
  const boxMovies = document.getElementById('boxMovies');
  const boxSeries = document.getElementById('boxSeries');
  
  if (boxTv) boxTv.onclick = () => navigateTo('live-tv.html');
  if (boxMovies) boxMovies.onclick = () => navigateTo('movies.html');
  if (boxSeries) boxSeries.onclick = () => navigateTo('series.html');
});
