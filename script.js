* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #0a0f1c;
}

body {
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

/* کانتێنەری سەرەکی - دیزاینی درێژی (ئاسۆیی) */
.app-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/* لای چەپ - لیستی کەناڵەکان */
.channels-sidebar {
    width: 35%;
    min-width: 180px;
    background: rgba(8, 12, 25, 0.98);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* بۆ شاشەی بچووک */
@media (max-width: 700px) {
    .channels-sidebar {
        width: 40%;
    }
}

.sidebar-header {
    padding: 1rem;
    background: #03060c;
}

.sidebar-header h2 {
    font-size: 1.2rem;
    background: linear-gradient(135deg, #fff, #5db0ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.search-wrapper {
    background: #1e2a3a;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    margin-top: 12px;
    display: flex;
    gap: 8px;
    align-items: center;
}

.search-wrapper input {
    background: transparent;
    border: none;
    color: white;
    width: 100%;
    outline: none;
    font-size: 0.9rem;
}

.search-wrapper input::placeholder {
    color: #9aa4bf;
}

.channels-list {
    flex: 1;
    overflow-y: auto;
    padding: 0.8rem;
}

.channel-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #111a2a;
    margin-bottom: 8px;
    padding: 12px;
    border-radius: 1.2rem;
    cursor: pointer;
    border-left: 3px solid transparent;
    transition: all 0.15s;
}

.channel-card:hover {
    background: #1a2638;
}

.channel-card.active {
    background: #1f3a60;
    border-left-color: #3b82f6;
}

.channel-logo {
    font-size: 1.5rem;
}

.channel-name {
    flex: 1;
    font-weight: 500;
    color: #f0f3fa;
}

.delete-channel {
    background: none;
    border: none;
    color: #ff9f8f;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 2rem;
}

.delete-channel:hover {
    background: rgba(255, 100, 100, 0.2);
}

.add-channel-btn {
    background: #2d4a7c;
    border: none;
    padding: 12px;
    margin: 10px;
    border-radius: 2rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}

.add-channel-btn:hover {
    background: #3d5a8c;
}

/* لای ڕاست */
.video-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #010101;
}

.video-wrapper {
    background: #000;
    flex: 2;
    min-height: 55%;
}

video {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.epg-section {
    background: #0a0e16e6;
    padding: 0.8rem;
    flex: 1;
    overflow-y: auto;
}

.epg-section h4 {
    color: #a0b4e0;
    margin-bottom: 12px;
    font-size: 0.9rem;
}

.epg-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.epg-item {
    background: #111b26;
    padding: 10px 12px;
    border-radius: 14px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.epg-time {
    font-family: monospace;
    min-width: 70px;
    color: #7aa9ff;
    font-weight: bold;
}

.epg-title {
    color: #e0e4f0;
}

/* 
   ============================================
   فێڵکردن لە براوزەر - ڕێگای سەرەکی
   کاتێک مۆبایلەکە بە ستونی بێت،
   تەواوی پەڕەکە بە 90 پلە دەسوڕێنین بە درێژی
   ============================================
*/
@media screen and (orientation: portrait) {
    .app-container {
        position: absolute;
        top: 0;
        left: 100vw;           /* بەرەو دەرەوەی شاشە */
        width: 100vh;          /* بەرزی دەکاتە پانی */
        height: 100vw;         /* پانی دەکاتە بەرز */
        transform: rotate(90deg);
        transform-origin: 0% 0%;
    }
}

/* کاتێک بە درێژی بێت، دیزاینەکە بە شێوەی ئاسایی */
@media screen and (orientation: landscape) {
    .app-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        transform: rotate(0deg);
    }
        }
