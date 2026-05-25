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
  },
  ur: {
    navHome: 'ہوم', navMovies: 'فلمیں', navSeries: 'سیریز', navTv: 'ٹی وی', navLanguage: 'زبان',
    boxTvTitle: 'ٹیلی ویژن', boxTvDesc: '1000+ عالمی چینلز\nکھیل • خبریں • فلمیں • بچے', boxTvBadge: 'لائیو',
    boxMoviesTitle: 'فلمیں', boxMoviesDesc: 'ہزاروں فلمیں\nایکشن • ڈرامہ • کامیڈی • رومانس', boxMoviesBadge: 'نئی فلمیں',
    boxSeriesTitle: 'سیریز', boxSeriesDesc: 'مقبول سیریز\nنئے سیزن • ہفتہ وار', boxSeriesBadge: 'دیکھنا جاری رکھیں',
    boxCinemaTitle: 'سینما روم', boxCinemaDesc: 'اپنے دوستوں کو مدعو کریں\nمل کر فلم دیکھیں اور بحث کریں', boxCinemaBadge: 'روم بنائیں'
  },
  bn: {
    navHome: 'হোম', navMovies: 'সিনেমা', navSeries: 'সিরিজ', navTv: 'টিভি', navLanguage: 'ভাষা',
    boxTvTitle: 'টেলিভিশন', boxTvDesc: '1000+ বিশ্ব চ্যানেল\nখেলা • খবর • সিনেমা • শিশু', boxTvBadge: 'লাইভ',
    boxMoviesTitle: 'সিনেমা', boxMoviesDesc: 'হাজার হাজার সিনেমা\nঅ্যাকশন • ড্রামা • কমেডি • রোমান্স', boxMoviesBadge: 'নতুন সিনেমা',
    boxSeriesTitle: 'সিরিজ', boxSeriesDesc: 'ট্রেন্ডিং সিরিজ\nনতুন সিজন • সাপ্তাহিক', boxSeriesBadge: 'দেখা চালিয়ে যান',
    boxCinemaTitle: 'সিনেমা রুম', boxCinemaDesc: 'আপনার বন্ধুদের আমন্ত্রণ জানান\nএকসাথে সিনেমা দেখুন এবং আলোচনা করুন', boxCinemaBadge: 'রুম তৈরি করুন'
  },
  vi: {
    navHome: 'Trang chủ', navMovies: 'Phim', navSeries: 'Phim bộ', navTv: 'TV', navLanguage: 'Ngôn ngữ',
    boxTvTitle: 'Truyền hình', boxTvDesc: '1000+ Kênh thế giới\nThể thao • Tin tức • Phim • Trẻ em', boxTvBadge: 'TRỰC TIẾP',
    boxMoviesTitle: 'Phim', boxMoviesDesc: 'Hàng ngàn bộ phim\nHành động • Chính kịch • Hài • Lãng mạn', boxMoviesBadge: 'Phim mới',
    boxSeriesTitle: 'Phim bộ', boxSeriesDesc: 'Phim bộ thịnh hành\nMùa mới • Hàng tuần', boxSeriesBadge: 'Tiếp tục xem',
    boxCinemaTitle: 'Phòng chiếu', boxCinemaDesc: 'Mời bạn bè của bạn\nCùng xem và thảo luận phim', boxCinemaBadge: 'Tạo phòng'
  },
  th: {
    navHome: 'หน้าหลัก', navMovies: 'ภาพยนตร์', navSeries: 'ซีรีส์', navTv: 'ทีวี', navLanguage: 'ภาษา',
    boxTvTitle: 'โทรทัศน์', boxTvDesc: '1000+ ช่องทั่วโลก\nกีฬา • ข่าว • ภาพยนตร์ • เด็ก', boxTvBadge: 'ถ่ายทอดสด',
    boxMoviesTitle: 'ภาพยนตร์', boxMoviesDesc: 'ภาพยนตร์หลายพันเรื่อง\nแอคชั่น • ดราม่า • ตลก • โรแมนติก', boxMoviesBadge: 'ภาพยนตร์ใหม่',
    boxSeriesTitle: 'ซีรีส์', boxSeriesDesc: 'ซีรีส์ยอดนิยม\nซีซั่นใหม่ • รายสัปดาห์', boxSeriesBadge: 'ดูต่อ',
    boxCinemaTitle: 'ห้องภาพยนตร์', boxCinemaDesc: 'เชิญเพื่อนของคุณ\nดูและพูดคุยภาพยนตร์ด้วยกัน', boxCinemaBadge: 'สร้างห้อง'
  },
  uk: {
    navHome: 'Головна', navMovies: 'Фільми', navSeries: 'Серіали', navTv: 'ТБ', navLanguage: 'Мова',
    boxTvTitle: 'Телебачення', boxTvDesc: '1000+ світових каналів\nСпорт • Новини • Фільми • Діти', boxTvBadge: 'ПРЯМИЙ ЕФІР',
    boxMoviesTitle: 'Фільми', boxMoviesDesc: 'Тисячі фільмів\nБойовик • Драма • Комедія • Романтика', boxMoviesBadge: 'Новинки',
    boxSeriesTitle: 'Серіали', boxSeriesDesc: 'Популярні серіали\nНові сезони • Щотижня', boxSeriesBadge: 'Продовжити перегляд',
    boxCinemaTitle: 'Кінозал', boxCinemaDesc: 'Запроси друзів\nДивіться та обговорюйте фільми разом', boxCinemaBadge: 'Створити кімнату'
  },
  nl: {
    navHome: 'Home', navMovies: 'Films', navSeries: 'Series', navTv: 'TV', navLanguage: 'Taal',
    boxTvTitle: 'Televisie', boxTvDesc: '1000+ Wereldkanalen\nSport • Nieuws • Films • Kinderen', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Films', boxMoviesDesc: 'Duizenden films\nActie • Drama • Komedie • Romantiek', boxMoviesBadge: 'Nieuwe films',
    boxSeriesTitle: 'Series', boxSeriesDesc: 'Populaire series\nNieuwe seizoenen • Wekelijks', boxSeriesBadge: 'Blijf kijken',
    boxCinemaTitle: 'Bioscoopzaal', boxCinemaDesc: 'Nodig je vrienden uit\nBekijk en bespreek films samen', boxCinemaBadge: 'Maak kamer'
  },
  el: {
    navHome: 'Αρχική', navMovies: 'Ταινίες', navSeries: 'Σειρές', navTv: 'TV', navLanguage: 'Γλώσσα',
    boxTvTitle: 'Τηλεόραση', boxTvDesc: '1000+ Παγκόσμια κανάλια\nΑθλητισμός • Ειδήσεις • Ταινίες • Παιδιά', boxTvBadge: 'ΖΩΝΤΑΝΑ',
    boxMoviesTitle: 'Ταινίες', boxMoviesDesc: 'Χιλιάδες ταινίες\nΔράση • Δράμα • Κωμωδία • Ρομαντισμός', boxMoviesBadge: 'Νέες ταινίες',
    boxSeriesTitle: 'Σειρές', boxSeriesDesc: 'Δημοφιλείς σειρές\nΝέες σεζόν • Εβδομαδιαία', boxSeriesBadge: 'Συνέχεια παρακολούθησης',
    boxCinemaTitle: 'Αίθουσα κινηματογράφου', boxCinemaDesc: 'Καλέστε τους φίλους σας\nΔείτε και συζητήστε ταινίες μαζί', boxCinemaBadge: 'Δημιουργία δωματίου'
  },
  ro: {
    navHome: 'Acasă', navMovies: 'Filme', navSeries: 'Seriale', navTv: 'TV', navLanguage: 'Limba',
    boxTvTitle: 'Televiziune', boxTvDesc: '1000+ Canale mondiale\nSport • Știri • Filme • Copii', boxTvBadge: 'ÎN DIRECT',
    boxMoviesTitle: 'Filme', boxMoviesDesc: 'Mii de filme\nAcțiune • Dramă • Comedie • Romantism', boxMoviesBadge: 'Filme noi',
    boxSeriesTitle: 'Seriale', boxSeriesDesc: 'Seriale populare\nSezoane noi • Săptămânal', boxSeriesBadge: 'Continuă vizionarea',
    boxCinemaTitle: 'Sală de cinema', boxCinemaDesc: 'Invită-ți prietenii\nVizionează și discută filme împreună', boxCinemaBadge: 'Creează cameră'
  },
  id: {
    navHome: 'Beranda', navMovies: 'Film', navSeries: 'Serial', navTv: 'TV', navLanguage: 'Bahasa',
    boxTvTitle: 'Televisi', boxTvDesc: '1000+ Saluran Dunia\nOlahraga • Berita • Film • Anak-anak', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Film', boxMoviesDesc: 'Ribuan film\nAksi • Drama • Komedi • Romantis', boxMoviesBadge: 'Film Baru',
    boxSeriesTitle: 'Serial', boxSeriesDesc: 'Serial Populer\nMusim baru • Mingguan', boxSeriesBadge: 'Lanjutkan Menonton',
    boxCinemaTitle: 'Ruang Bioskop', boxCinemaDesc: 'Undang teman-teman Anda\nTonton dan diskusikan film bersama', boxCinemaBadge: 'Buat Ruang'
  },
  da: {
    navHome: 'Hjem', navMovies: 'Film', navSeries: 'Serier', navTv: 'TV', navLanguage: 'Sprog',
    boxTvTitle: 'Fjernsyn', boxTvDesc: '1000+ Verdenskanaler\nSport • Nyheder • Film • Børn', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Film', boxMoviesDesc: 'Tusindvis af film\nAction • Drama • Komedie • Romantik', boxMoviesBadge: 'Nye film',
    boxSeriesTitle: 'Serier', boxSeriesDesc: 'Populære serier\nNye sæsoner • Ugentligt', boxSeriesBadge: 'Fortsæt med at se',
    boxCinemaTitle: 'Biografrum', boxCinemaDesc: 'Inviter dine venner\nSe og diskuter film sammen', boxCinemaBadge: 'Opret rum'
  },
  no: {
    navHome: 'Hjem', navMovies: 'Filmer', navSeries: 'Serier', navTv: 'TV', navLanguage: 'Språk',
    boxTvTitle: 'Fjernsyn', boxTvDesc: '1000+ Verdenskanaler\nSport • Nyheter • Filmer • Barn', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Filmer', boxMoviesDesc: 'Tusenvis av filmer\nAksjon • Drama • Komedie • Romantikk', boxMoviesBadge: 'Nye filmer',
    boxSeriesTitle: 'Serier', boxSeriesDesc: 'Populære serier\nNye sesonger • Ukentlig', boxSeriesBadge: 'Fortsett å se',
    boxCinemaTitle: 'Kinorom', boxCinemaDesc: 'Inviter vennene dine\nSe og diskuter filmer sammen', boxCinemaBadge: 'Opprett rom'
  },
  fi: {
    navHome: 'Koti', navMovies: 'Elokuvat', navSeries: 'Sarjat', navTv: 'TV', navLanguage: 'Kieli',
    boxTvTitle: 'Televisio', boxTvDesc: '1000+ Maailman kanavat\nUrheilu • Uutiset • Elokuvat • Lapset', boxTvBadge: 'LIVE',
    boxMoviesTitle: 'Elokuvat', boxMoviesDesc: 'Tuhansia elokuvia\nToiminta • Draama • Komedia • Romantiikka', boxMoviesBadge: 'Uudet elokuvat',
    boxSeriesTitle: 'Sarjat', boxSeriesDesc: 'Suositut sarjat\nUudet kaudet • Viikoittain', boxSeriesBadge: 'Jatka katsomista',
    boxCinemaTitle: 'Elokuvahuone', boxCinemaDesc: 'Kutsu ystäväsi\nKatso ja keskustele elokuvista yhdessä', boxCinemaBadge: 'Luo huone'
  },
  syr: {
    navHome: 'ܒܝܬܐ', navMovies: 'ܐܣܛܪܢܐ', navSeries: 'ܣܕܪܐ', navTv: 'ܬܦܝܬܐ', navLanguage: 'ܠܫܢܐ',
    boxTvTitle: 'ܬܦܝܬܐ', boxTvDesc: '1000+ ܩܢܝܬܐ ܕܟܠܗ ܥܠܡܐ\nܣܦܘܪܬܐ • ܫܡܥܬܐ • ܐܣܛܪܢܐ • ܝܠܕܐ', boxTvBadge: 'ܚܝܐ',
    boxMoviesTitle: 'ܐܣܛܪܢܐ', boxMoviesDesc: 'ܐܠܦܢܐ ܕܐܣܛܪܢܐ\nܚܝܠܐ • ܕܪܐܡܐ • ܓܘܚܟܐ • ܪܚܡܐ', boxMoviesBadge: 'ܐܣܛܪܢܐ ܚܕܬܐ',
    boxSeriesTitle: 'ܣܕܪܐ', boxSeriesDesc: 'ܣܕܪܐ ܝܕܝܥܐ\nܐܪܒܥܝܬܐ ܚܕܬܬܐ • ܒܟܠ ܫܒܘܥܐ', boxSeriesBadge: 'ܐܫܠܡ ܠܚܙܝܬܐ',
    boxCinemaTitle: 'ܒܝܬ ܐܣܛܪܢܐ', boxCinemaDesc: 'ܩܪܐ ܠܪܚܡܟ\nܚܙܝ ܘܐܫܬܘܬܦ ܥܠ ܐܣܛܪܢܐ ܟܚܕܐ', boxCinemaBadge: 'ܥܒܕ ܫܘܫܠܐ'
  }
};

// RTL زمانەکان (ئەردو زیادکرا)
const rtlLanguages = ['ar', 'ckb', 'ckb-badini', 'fa', 'ur'];

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
  if (browserLang === 'ur') return 'ur';
  if (browserLang === 'bn') return 'bn';
  if (browserLang === 'vi') return 'vi';
  if (browserLang === 'th') return 'th';
  if (browserLang === 'uk') return 'uk';
  if (browserLang === 'nl') return 'nl';
  if (browserLang === 'el') return 'el';
  if (browserLang === 'ro') return 'ro';
  if (browserLang === 'id') return 'id';
  if (browserLang === 'da') return 'da';
  if (browserLang === 'no') return 'no';
  if (browserLang === 'fi') return 'fi';
  if (browserLang === 'syr') return 'syr';
  return 'ckb';
}

// تەرجەمەکردن
function updateLanguage() {
  const lang = getCurrentLanguage();
  const texts = translationsData[lang];
  if (!texts) return;
  
  const elements = {
    navHome: document.getElementById('navHome'),
    navMovies: document.getElementById('navMovies'),
    navSeries: document.getElementById('navSeries'),
    navTv: document.getElementById('navTv'),
    langLabel: document.getElementById('langLabel'),
    boxTvTitle: document.getElementById('boxTvTitle'),
    boxTvDesc: document.getElementById('boxTvDesc'),
    boxTvBadge: document.getElementById('boxTvBadge'),
    boxMoviesTitle: document.getElementById('boxMoviesTitle'),
    boxMoviesDesc: document.getElementById('boxMoviesDesc'),
    boxMoviesBadge: document.getElementById('boxMoviesBadge'),
    boxSeriesTitle: document.getElementById('boxSeriesTitle'),
    boxSeriesDesc: document.getElementById('boxSeriesDesc'),
    boxSeriesBadge: document.getElementById('boxSeriesBadge'),
    boxCinemaTitle: document.getElementById('boxCinemaTitle'),
    boxCinemaDesc: document.getElementById('boxCinemaDesc'),
    boxCinemaBadge: document.getElementById('boxCinemaBadge')
  };
  
  for (const [key, element] of Object.entries(elements)) {
    if (element && texts[key]) element.innerText = texts[key];
  }
  
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
