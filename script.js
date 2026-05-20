// داتای بنەڕەتی
let channels = [
    { id: 1, name: "AL JAZEERA", logo: "🌍", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", epg: ["06:00 - هەواڵی بەیانی", "12:00 - کۆڕبەندی سیاسی", "18:00 - پەخشی ڕاستەوخۆ"] },
    { id: 2, name: "BBC WORLD", logo: "📺", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8", epg: ["07:00 - Global News", "14:00 - Tech Life", "20:00 - Documentary"] },
    { id: 3, name: "SPORT 24", logo: "⚽", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", epg: ["09:00 - پوختەی یارییەکان", "16:00 - یاری راستەوخۆ", "22:00 - گفتوگۆ"] }
];

let activeChannelId = 1;

// هەڵکردن لە LocalStorage
function loadFromStorage() {
    const saved = localStorage.getItem("iptv_channels_data");
    if (saved) {
        channels = JSON.parse(saved);
    }
    if (!channels || channels.length === 0) {
        channels = [
            { id: 1, name: "AL JAZEERA", logo: "🌍", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", epg: ["06:00 - هەواڵی بەیانی", "12:00 - کۆڕبەندی سیاسی", "18:00 - پەخشی ڕاستەوخۆ"] }
        ];
    }
    activeChannelId = channels[0].id;
}

// پاشەکەوتکردن لە LocalStorage
function saveToStorage() {
    localStorage.setItem("iptv_channels_data", JSON.stringify(channels));
}

// نمایش لیستی کەناڵەکان
function renderChannels() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filtered = channels.filter(ch => ch.name.toLowerCase().includes(searchTerm));
    const container = document.getElementById("channelsList");
    
    container.innerHTML = filtered.map(ch => `
        <div class="channel-card ${activeChannelId === ch.id ? 'active' : ''}" data-id="${ch.id}">
            <div class="channel-logo">${ch.logo || "📡"}</div>
            <div class="channel-name">${ch.name}</div>
            <button class="delete-channel" data-id="${ch.id}">🗑️</button>
        </div>
    `).join("");
    
    // کلیک لە کارتی کەناڵ
    document.querySelectorAll(".channel-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-channel")) return;
            const id = parseInt(card.dataset.id);
            if (id) setActiveChannel(id);
        });
    });
    
    // دوگمەی سڕینەوە
    document.querySelectorAll(".delete-channel").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            deleteChannel(id);
        });
    });
}

// چالاککردنی کەناڵ
function setActiveChannel(id) {
    const channel = channels.find(ch => ch.id === id);
    if (!channel) return;
    
    activeChannelId = id;
    const video = document.getElementById("videoPlayer");
    video.src = channel.url;
    video.load();
    video.play().catch(e => console.log("Auto-play blocked by browser"));
    
    renderChannels();
    renderEPG(channel);
}

// نمایش EPG
function renderEPG(channel) {
    const epgContainer = document.getElementById("epgContent");
    if (!channel.epg || channel.epg.length === 0) {
        epgContainer.innerHTML = '<div class="epg-item">هیچ بەرنامەیەک بەردەست نییە</div>';
        return;
    }
    
    epgContainer.innerHTML = channel.epg.map(prog => {
        const parts = prog.split(" - ");
        const time = parts[0];
        const title = parts.slice(1).join(" - ");
        return `
            <div class="epg-item">
                <span class="epg-time">⏰ ${time}</span>
                <span class="epg-title">${title || prog}</span>
            </div>
        `;
    }).join("");
}

// سڕینەوەی کەناڵ
function deleteChannel(id) {
    if (channels.length <= 1) {
        alert("ناتوانیت هەموو کەناڵەکان بسڕیتەوە، پێویستە لانیکەم یەک کەناڵ هەبێت");
        return;
    }
    
    channels = channels.filter(ch => ch.id !== id);
    if (activeChannelId === id) {
        setActiveChannel(channels[0].id);
    }
    saveToStorage();
    renderChannels();
}

// زیادکردنی کەناڵی نوێ
function addNewChannel() {
    const name = prompt("ناوی کەناڵ:");
    if (!name || name.trim() === "") return;
    
    const url = prompt("URL ی پەخش (m3u8 یان mp4):");
    if (!url || url.trim() === "") return;
    
    const newId = Date.now();
    channels.push({
        id: newId,
        name: name.trim(),
        logo: "📡",
        url: url.trim(),
        epg: ["بەرنامەی نوێ - کات دیار نییە"]
    });
    
    saveToStorage();
    renderChannels();
    setActiveChannel(newId);
}

// هەڵگرتنی orientation لە LocalStorage
function saveOrientationState() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    localStorage.setItem("iptv_orientation", isPortrait ? "portrait" : "landscape");
}

// چاودێری گۆڕانی orientation
function watchOrientation() {
    const mql = window.matchMedia("(orientation: portrait)");
    
    const handler = (e) => {
        saveOrientationState();
        // هەر کات orientation گۆڕا، پەڕەکە دووبارە بار ناکەینەوە
        // CSS خۆی rotation کارا دەکات
    };
    
    mql.addEventListener("change", handler);
    saveOrientationState();
}

// گەڕان
document.getElementById("searchInput").addEventListener("input", renderChannels);
document.getElementById("addChannelBtn").addEventListener("click", addNewChannel);

// دەستپێکردن
loadFromStorage();
renderChannels();
setActiveChannel(activeChannelId);
watchOrientation();
