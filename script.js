// ==================== تەرجەمەکان ====================
const translationsData = {
  ckb: {
    navHome: 'ماڵەوە', navMovies: 'فیلم', navSeries: 'زنجیرە', navTv: 'تەلەڤزیۆن', navLanguage: 'زمان',
    boxTvTitle: 'تەلەڤزیۆن', boxTvDesc: 'زیاتر لە ١٠٠٠ کەناڵی جیهانی\nوەرزش • هەواڵ • فیلم • منداڵان', boxTvBadge: 'ڕاستەوخۆ',
    boxMoviesTitle: 'فیلم', boxMoviesDesc: 'هەزاران فیلمی بەناوبانگ\nئەکشن • دراما • کۆمێدی • ڕۆمانسی', boxMoviesBadge: 'نوێترین فیلمەکان',
    boxSeriesTitle: 'زنجیرە', boxSeriesDesc: 'بەناوبانگترین زنجیرەکان\nوەرزی نوێ • هەفتانە', boxSeriesBadge: 'بەردەوام بینین',
    boxCinemaTitle: 'ژووری سینەما', boxCinemaDesc: 'هاوڕێکانت بانگهێشت بکە\nبەیەکەوە سەیری فیلم بکەن و تاوتوێ بکەن', boxCinemaBadge: 'دروستکردنی ژوور'
  },
  'ckb-badini': {
    navHome: 'مالەوە', navMovies: 'فلیم', navSeries: 'زنجیرە', navTv: 'تەلەڤزیۆن', navLanguage: 'زوان',
    boxTvTitle: 'تەلەڤزیۆن', boxTvDesc: 'ژێدەر لە ١٠٠٠ کەناڵی جیهانی\nوەرزش • هەواڵ • فلیم • مناڵان', boxTvBadge: 'ڕاستەوخۆ',
    boxMoviesTitle: 'فلیم', boxMoviesDesc: 'هەزاران فلیمی بەناوبانگ\nئەکشن • دراما • کۆمێدی • ڕۆمانس', boxMoviesBadge: 'نوێترین فلیمەکان',
    boxSeriesTitle: 'زنجیرە', boxSeriesDesc: 'بەناوبانگترین زنجیرەکان\nوەرزی نوێ • هەفتانە', boxSeriesBadge: 'بەردەوام بینین',
    boxCinemaTitle: 'ژووری سینەما', boxCinemaDesc: 'هاوڕێکانت بانگهێشت بکە\nبەیەکەوە سەیری فلیم بکەن و تاوتوێ بکەن', boxCinemaBadge: 'دروستکردنی ژوور'
  },
  kmr: {
    navHome: 'Mal', navMovies: 'Fîlm', navSeries: 'Rêzefîlm', navTv: 'Televîzyon', navLanguage: 'Ziman',
    boxTvTitle: 'Televîzyon', boxTvDesc: 'Zêdetirî 1000 kanalên cîhanê\nWerziş • Nûçe • Fîlm • Zarok', boxTvBadge: 'Rastewexo',
    boxMoviesTitle: 'Fîlm', boxMoviesDesc: 'Hezaran fîlmên navdar\nAksiyon • Drama • Komedî • Romantîk', boxMoviesBadge: 'Fîlmên nû',
    boxSeriesTitle: 'Rêzefîlm', boxSeriesDesc: 'Rêzefîlmên herî navdar\nSezona nû • Haftane', boxSeriesBadge: 'Berdewam temaşe',
    boxCinemaTitle: 'Odeya Sînemayê', boxCinemaDesc: 'Hevalên xwe vexwîne\nBi hev re fîlmê temaşe bikin û nîqaş bikin', boxCinemaBadge: 'Odeyê çêbike'
  },
  ar: {
    navHome: 'الرئيسية', navMovies: 'أفلام', navSeries: 'مسلسلات', navTv: 'تلفزيون', navLanguage: 'اللغة',
    boxTvTitle: 'تلفزيون', boxTvDesc: 'أكثر من ١٠٠٠ قناة عالمية\nرياضة • أخبار • أفلام • أطفال', boxTvBadge: 'مباشر',
    boxMoviesTitle: 'أفلام', boxMoviesDesc: 'آلاف الأفلام الشهيرة\nأكشن • دراما • كوميدي • رومانسي', boxMoviesBadge: 'أحدث الأفلام',
    boxSeriesTitle: 'مسلسلات', boxSeriesDesc: 'أشهر المسلسلات\nمواسم جديدة • أسبوعياً', boxSeriesBadge: 'متابعة',
    boxCinemaTitle: 'غرفة السينما', boxCinemaDesc: 'ادعُ أصدقائك\nشاهدوا الفيلم معاً وناقشوه', boxCinemaBadge: 'إنشاء غرفة'
  },
  en: {
    navHome: 'Home', navMovies: 'Movies', navSeries: 'Series', navTv: 'TV', navLanguage: 'Language',
    boxTvTitle: 'TV', boxTvDesc: '1000+ World Channels\nSports • News • Movies • Kids', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Movies', boxMoviesDesc: 'Thousands of Movies\nAction • Drama • Comedy • Romance', boxMoviesBadge: 'New Releases',
    boxSeriesTitle: 'Series', boxSeriesDesc: 'Trending Series\nNew Seasons • Weekly', boxSeriesBadge: 'Continue Watching',
    boxCinemaTitle: 'Cinema Room', boxCinemaDesc: 'Invite your friends\nWatch and discuss movies together', boxCinemaBadge: 'Create Room'
  },
  tr: {
    navHome: 'Ana Sayfa', navMovies: 'Filmler', navSeries: 'Diziler', navTv: 'TV', navLanguage: 'Dil',
    boxTvTitle: 'Televizyon', boxTvDesc: '1000+ Dünya Kanalı\nSpor • Haber • Film • Çocuk', boxTvBadge: 'CANLI',
    boxMoviesTitle: 'Filmler', boxMoviesDesc: 'Binlerce Film\nAksiyon • Dram • Komedi • Romantik', boxMoviesBadge: 'Yeni Filmler',
    boxSeriesTitle: 'Diziler', boxSeriesDesc: 'Popüler Diziler\nYeni Sezonlar • Haftalık', boxSeriesBadge: 'İzlemeye Devam Et',
    boxCinemaTitle: 'Sinema Odası', boxCinemaDesc: 'Arkadaşlarını davet et\nBirlikte film izleyin ve tartışın', boxCinemaBadge: 'Oda Oluştur'
  },
  fa: {
    navHome: 'صفحه اصلی', navMovies: 'فیلم‌ها', navSeries: 'سریال‌ها', navTv: 'تلویزیون', navLanguage: 'زبان',
    boxTvTitle: 'تلویزیون', boxTvDesc: 'بیش از ۱۰۰۰ کانال جهانی\nورزش • اخبار • فیلم • کودکان', boxTvBadge: 'زنده',
    boxMoviesTitle: 'فیلم', boxMoviesDesc: 'هزاران فیلم محبوب\nاکشن • درام • کمدی • رمانتیک', boxMoviesBadge: 'جدیدترین فیلم‌ها',
    boxSeriesTitle: 'سریال', boxSeriesDesc: 'محبوب‌ترین سریال‌ها\nفصل جدید • هفتگی', boxSeriesBadge: 'ادامه تماشا',
    boxCinemaTitle: 'اتاق سینما', boxCinemaDesc: 'دوستان خود را دعوت کنید\nبا هم فیلم تماشا کنید و بحث کنید', boxCinemaBadge: 'ایجاد اتاق'
  },
  ru: {
    navHome: 'Главная', navMovies: 'Фильмы', navSeries: 'Сериалы', navTv: 'ТВ', navLanguage: 'Язык',
    boxTvTitle: 'Телевидение', boxTvDesc: '1000+ мировых каналов\nСпорт • Новости • Кино • Дети', boxTvBadge: 'ПРЯМОЙ ЭФИР',
    boxMoviesTitle: 'Фильмы', boxMoviesDesc: 'Тысячи фильмов\nБоевик • Драма • Комедия • Романтика', boxMoviesBadge: 'Новинки',
    boxSeriesTitle: 'Сериалы', boxSeriesDesc: 'Популярные сериалы\nНовые сезоны • Еженедельно', boxSeriesBadge: 'Продолжить просмотр',
    boxCinemaTitle: 'Кинокомната', boxCinemaDesc: 'Пригласи друзей\nСмотрите и обсуждайте фильмы вместе', boxCinemaBadge: 'Создать комнату'
  },
  fr: {
    navHome: 'Accueil', navMovies: 'Films', navSeries: 'Séries', navTv: 'TV', navLanguage: 'Langue',
    boxTvTitle: 'Télévision', boxTvDesc: '1000+ chaînes mondiales\nSport • Actualités • Films • Enfants', boxTvBadge: 'EN DIRECT',
    boxMoviesTitle: 'Films', boxMoviesDesc: 'Des milliers de films\nAction • Drame • Comédie • Romance', boxMoviesBadge: 'Nouveautés',
    boxSeriesTitle: 'Séries', boxSeriesDesc: 'Séries populaires\nNouvelles saisons • Hebdomadaire', boxSeriesBadge: 'Continuer',
    boxCinemaTitle: 'Salle de cinéma', boxCinemaDesc: 'Invitez vos amis\nRegardez et discutez des films ensemble', boxCinemaBadge: 'Créer une salle'
  },
  es: {
    navHome: 'Inicio', navMovies: 'Películas', navSeries: 'Series', navTv: 'TV', navLanguage: 'Idioma',
    boxTvTitle: 'Televisión', boxTvDesc: '1000+ canales mundiales\nDeportes • Noticias • Películas • Niños', boxTvBadge: 'EN VIVO',
    boxMoviesTitle: 'Películas', boxMoviesDesc: 'Miles de películas\nAcción • Drama • Comedia • Romance', boxMoviesBadge: 'Nuevos Estrenos',
    boxSeriesTitle: 'Series', boxSeriesDesc: 'Series populares\nNuevas temporadas • Semanal', boxSeriesBadge: 'Continuar',
    boxCinemaTitle: 'Sala de cine', boxCinemaDesc: 'Invita a tus amigos\nVean y discutan películas juntos', boxCinemaBadge: 'Crear sala'
  },
  pt: {
    navHome: 'Início', navMovies: 'Filmes', navSeries: 'Séries', navTv: 'TV', navLanguage: 'Idioma',
    boxTvTitle: 'Televisão', boxTvDesc: '1000+ canais mundiais\nEsportes • Notícias • Filmes • Crianças', boxTvBadge: 'AO VIVO',
    boxMoviesTitle: 'Filmes', boxMoviesDesc: 'Milhares de filmes\nAção • Drama • Comédia • Romance', boxMoviesBadge: 'Novos Lançamentos',
    boxSeriesTitle: 'Séries', boxSeriesDesc: 'Séries populares\nNovas temporadas • Semanal', boxSeriesBadge: 'Continuar',
    boxCinemaTitle: 'Sala de cinema', boxCinemaDesc: 'Convide seus amigos\nAssistam e discutam filmes juntos', boxCinemaBadge: 'Criar sala'
  },
  de: {
    navHome: 'Startseite', navMovies: 'Filme', navSeries: 'Serien', navTv: 'TV', navLanguage: 'Sprache',
    boxTvTitle: 'Fernsehen', boxTvDesc: '1000+ Weltsender\nSport • Nachrichten • Filme • Kinder', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Filme', boxMoviesDesc: 'Tausende Filme\nAction • Drama • Komödie • Romanze', boxMoviesBadge: 'Neuerscheinungen',
    boxSeriesTitle: 'Serien', boxSeriesDesc: 'Beliebte Serien\nNeue Staffeln • Wöchentlich', boxSeriesBadge: 'Weiterschauen',
    boxCinemaTitle: 'Kinoraum', boxCinemaDesc: 'Lade deine Freunde ein\nSchaut und diskutiert Filme gemeinsam', boxCinemaBadge: 'Raum erstellen'
  },
  sv: {
    navHome: 'Hem', navMovies: 'Filmer', navSeries: 'Serier', navTv: 'TV', navLanguage: 'Språk',
    boxTvTitle: 'TV', boxTvDesc: '1000+ världskanaler\nSport • Nyheter • Filmer • Barn', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Filmer', boxMoviesDesc: 'Tusentals filmer\nAction • Drama • Komedi • Romantik', boxMoviesBadge: 'Nyheter',
    boxSeriesTitle: 'Serier', boxSeriesDesc: 'Populära serier\nNya säsonger • Veckovis', boxSeriesBadge: 'Fortsätt titta',
    boxCinemaTitle: 'Biografsalong', boxCinemaDesc: 'Bjud in dina vänner\nTitta och diskutera filmer tillsammans', boxCinemaBadge: 'Skapa rum'
  },
  it: {
    navHome: 'Home', navMovies: 'Film', navSeries: 'Serie TV', navTv: 'TV', navLanguage: 'Lingua',
    boxTvTitle: 'Televisione', boxTvDesc: '1000+ canali mondiali\nSport • Notizie • Film • Bambini', boxTvBadge: 'DIRETTA',
    boxMoviesTitle: 'Film', boxMoviesDesc: 'Migliaia di film\nAzione • Dramma • Commedia • Romance', boxMoviesBadge: 'Nuove Uscite',
    boxSeriesTitle: 'Serie TV', boxSeriesDesc: 'Serie popolari\nNuove stagioni • Settimanali', boxSeriesBadge: 'Continua a guardare',
    boxCinemaTitle: 'Sala cinema', boxCinemaDesc: 'Invita i tuoi amici\nGuarda e discuti i film insieme', boxCinemaBadge: 'Crea sala'
  },
  'zh-CN': {
    navHome: '首页', navMovies: '电影', navSeries: '剧集', navTv: '电视', navLanguage: '语言',
    boxTvTitle: '电视', boxTvDesc: '1000+ 全球频道\n体育 • 新闻 • 电影 • 儿童', boxTvBadge: '直播',
    boxMoviesTitle: '电影', boxMoviesDesc: '数千部电影\n动作 • 剧情 • 喜剧 • 爱情', boxMoviesBadge: '最新电影',
    boxSeriesTitle: '剧集', boxSeriesDesc: '热门剧集\n新季 • 每周更新', boxSeriesBadge: '继续观看',
    boxCinemaTitle: '影院房间', boxCinemaDesc: '邀请你的朋友\n一起观看和讨论电影', boxCinemaBadge: '创建房间'
  },
  'zh-TW': {
    navHome: '首頁', navMovies: '電影', navSeries: '劇集', navTv: '電視', navLanguage: '語言',
    boxTvTitle: '電視', boxTvDesc: '1000+ 全球頻道\n體育 • 新聞 • 電影 • 兒童', boxTvBadge: '直播',
    boxMoviesTitle: '電影', boxMoviesDesc: '數千部電影\n動作 • 劇情 • 喜劇 • 愛情', boxMoviesBadge: '最新電影',
    boxSeriesTitle: '劇集', boxSeriesDesc: '熱門劇集\n新季 • 每週更新', boxSeriesBadge: '繼續觀看',
    boxCinemaTitle: '影院房間', boxCinemaDesc: '邀請你的朋友\n一起觀看和討論電影', boxCinemaBadge: '創建房間'
  },
  ko: {
    navHome: '홈', navMovies: '영화', navSeries: '시리즈', navTv: 'TV', navLanguage: '언어',
    boxTvTitle: '텔레비전', boxTvDesc: '1000+ 세계 채널\n스포츠 • 뉴스 • 영화 • 어린이', boxTvBadge: '실시간',
    boxMoviesTitle: '영화', boxMoviesDesc: '수천 편의 영화\n액션 • 드라마 • 코미디 • 로맨스', boxMoviesBadge: '최신 영화',
    boxSeriesTitle: '시리즈', boxSeriesDesc: '인기 시리즈\n새 시즌 • 매주', boxSeriesBadge: '계속 시청',
    boxCinemaTitle: '시네마 룸', boxCinemaDesc: '친구 초대하기\n함께 영화를 보고 토론하세요', boxCinemaBadge: '방 만들기'
  },
  hi: {
    navHome: 'होम', navMovies: 'फिल्में', navSeries: 'सीरीज', navTv: 'टीवी', navLanguage: 'भाषा',
    boxTvTitle: 'टेलीविजन', boxTvDesc: '1000+ विश्व चैनल\nखेल • समाचार • फिल्में • बच्चे', boxTvBadge: 'लाइव',
    boxMoviesTitle: 'फिल्में', boxMoviesDesc: 'हजारों फिल्में\nएक्शन • ड्रामा • कॉमेडी • रोमांस', boxMoviesBadge: 'नई फिल्में',
    boxSeriesTitle: 'सीरीज', boxSeriesDesc: 'ट्रेंडिंग सीरीज\nनए सीज़न • साप्ताहिक', boxSeriesBadge: 'देखना जारी रखें',
    boxCinemaTitle: 'सिनेमा कक्ष', boxCinemaDesc: 'अपने दोस्तों को आमंत्रित करें\nसाथ में फिल्म देखें और चर्चा करें', boxCinemaBadge: 'कक्ष बनाएं'
  },
  ja: {
    navHome: 'ホーム', navMovies: '映画', navSeries: 'シリーズ', navTv: 'テレビ', navLanguage: '言語',
    boxTvTitle: 'テレビ', boxTvDesc: '1000+ 世界のチャンネル\nスポーツ • ニュース • 映画 • 子供', boxTvBadge: 'ライブ',
    boxMoviesTitle: '映画', boxMoviesDesc: '何千もの映画\nアクション • ドラマ • コメディ • ロマンス', boxMoviesBadge: '新着映画',
    boxSeriesTitle: 'シリーズ', boxSeriesDesc: '人気シリーズ\n新シーズン • 毎週', boxSeriesBadge: '続きを見る',
    boxCinemaTitle: 'シネマルーム', boxCinemaDesc: '友達を招待する\n一緒に映画を見て話し合う', boxCinemaBadge: 'ルームを作成'
  },
  pl: {
    navHome: 'Strona główna', navMovies: 'Filmy', navSeries: 'Seriale', navTv: 'TV', navLanguage: 'Język',
    boxTvTitle: 'Telewizja', boxTvDesc: '1000+ kanałów światowych\nSport • Wiadomości • Filmy • Dzieci', boxTvBadge: 'NA ŻYWO',
    boxMoviesTitle: 'Filmy', boxMoviesDesc: 'Tysiące filmów\nAkcja • Dramat • Komedia • Romans', boxMoviesBadge: 'Nowości',
    boxSeriesTitle: 'Seriale', boxSeriesDesc: 'Popularne seriale\nNowe sezony • Co tydzień', boxSeriesBadge: 'Kontynuuj oglądanie',
    boxCinemaTitle: 'Pokój kinowy', boxCinemaDesc: 'Zaproś znajomych\nOglądajcie i dyskutujcie o filmach razem', boxCinemaBadge: 'Utwórz pokój'
  }
};

// RTL زمانەکان
const rtlLanguages = ['ar', 'ckb', 'ckb-badini', 'fa'];

// زمانی ڕاستەوخۆ دەستنیشان بکە
function getCurrentLanguage() {
  let savedLang = localStorage.getItem('exinflix_language');
  if (savedLang && translationsData[savedLang]) return savedLang;
  if (navigator.language === 'zh-CN') return 'zh-CN';
  if (navigator.language === 'zh-TW' || navigator.language === 'zh-HK') return 'zh-TW';
  let browserLang = navigator.language.split('-')[0];
  if (browserLang === 'ckb' || browserLang === 'ku') return 'ckb';
  if (browserLang === 'ar') return 'ar';
  if (browserLang === 'en') return 'en';
  if (browserLang === 'fa') return 'fa';
  if (browserLang === 'hi') return 'hi';
  if (browserLang === 'ja') return 'ja';
  if (browserLang === 'pl') return 'pl';
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
  const boxCinemaTitle = document.getElementById('boxCinemaTitle');
  const boxCinemaDesc = document.getElementById('boxCinemaDesc');
  const boxCinemaBadge = document.getElementById('boxCinemaBadge');
  
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
  if (boxCinemaTitle) boxCinemaTitle.innerText = texts.boxCinemaTitle;
  if (boxCinemaDesc) boxCinemaDesc.innerText = texts.boxCinemaDesc;
  if (boxCinemaBadge) boxCinemaBadge.innerText = texts.boxCinemaBadge;
  
  if (rtlLanguages.includes(lang)) {
    document.body.classList.remove('ltr');
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
    document.body.classList.add('ltr');
  }
}

function setLanguage(langCode) {
  if (translationsData[langCode]) {
    localStorage.setItem('exinflix_language', langCode);
    updateLanguage();
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) dropdown.classList.remove('show');
  }
}

function navigateTo(page) {
  window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function() {
  updateLanguage();
  
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
  
  const boxTv = document.getElementById('boxTv');
  const boxMovies = document.getElementById('boxMovies');
  const boxSeries = document.getElementById('boxSeries');
  const boxCinemaRoom = document.getElementById('boxCinemaRoom');
  
  if (boxTv) boxTv.onclick = () => navigateTo('live-tv.html');
  if (boxMovies) boxMovies.onclick = () => navigateTo('movies.html');
  if (boxSeries) boxSeries.onclick = () => navigateTo('series.html');
  if (boxCinemaRoom) boxCinemaRoom.onclick = () => alert('پەڕەی ژووری سینەما - لە داهاتوودا زیاد دەکرێت');
});
