// ============================================
// داتا - گروپەکان و کەناڵەکان
// ============================================

let groups = [
    { id: 1, name: "Recently Viewed", icon: "🕐" },
    { id: 2, name: "All", icon: "📺" },
    { id: 3, name: "Favorite", icon: "⭐" },
    { id: 4, name: "Kurdish Channel", icon: "🏔️" },
    { id: 5, name: "Sport Channel", icon: "⚽" }
];

let allChannels = [
    { id: 1, name: "AL JAZEERA", logo: "🌍", groupId: 2, url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { id: 2, name: "BBC WORLD", logo: "📺", groupId: 2, url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
    { id: 3, name: "SPORT 24", logo: "⚽", groupId: 5, url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { id: 4, name: "KURDISTAN 24", logo: "🏔️", groupId: 4, url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { id: 5, name: "RUDAW", logo: "📡", groupId: 4, url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
    { id: 6, name: "CNN", logo: "🌎", groupId: 2, url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { id: 7, name: "FOX SPORTS", logo: "🏈", groupId: 5, url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }
];

let favoriteChannels = []; // کەناڵەکانی فەیڤەریت
let recentlyViewed = [];   // دوایین کەناڵە بینراوەکان
let activeGroupId = 2;     // گروپی چالاک (بە دەستپێک All)
let activeChannelId = null;

// ============================================
// LocalStorage
// ============================================

function saveData() {
    localStorage.setItem("iptv_groups", JSON.stringify(groups));
    localStorage.setItem("iptv_all_channels", JSON.stringify(allChannels));
    localStorage.setItem("iptv_favorites", JSON.stringify(favoriteChannels));
    localStorage.setItem("iptv_recently_viewed", JSON.stringify(recentlyViewed));
}

function loadData() {
    const savedGroups = localStorage.getItem("iptv_groups");
    const savedChannels = localStorage.getItem("iptv_all_channels");
    const savedFav = localStorage.getItem("iptv_favorites");
    const savedRecent = localStorage.getItem("iptv_recently_viewed");
    
    if (savedGroups) groups = JSON.parse(savedGroups);
    if (savedChannels) allChannels = JSON.parse(savedChannels);
    if (savedFav) favoriteChannels = JSON.parse(savedFav);
    if (savedRecent) recentlyViewed = JSON.parse(savedRecent);
    
    // گروپی All دەبێت هەمیشە هەبێت
    if (!groups.find(g => g.name === "All")) {
        groups.push({ id: 2, name: "All", icon: "📺" });
    }
}

// ============================================
// کۆکردنەوەی کەناڵەکان بەپێی گروپ
// ============================================

function getChannelsByGroup(groupId) {
    if (groupId === 3) { // Favorite
        return favoriteChannels.map(favId => allChannels.find(ch => ch.id === favId)).filter(ch => ch);
    }
    if (groupId === 1) { // Recently Viewed
        return recentlyViewed.map(recId => allChannels.find(ch => ch.id === recId)).filter(ch => ch);
    }
    return allChannels.filter(ch => ch.groupId === groupId);
}

// ============================================
// نمایش گروپەکان
// ============================================

function renderGroups() {
    const container = document.getElementById("groupsList");
    container.innerHTML = groups.map(group => `
        <div class="group-item ${activeGroupId === group.id ? 'active' : ''}" data-id="${group.id}">
            <span class="group-icon">${group.icon}</span>
            <span class="group-name">${group.name}</span>
            ${group.name !== "All" && group.name !== "Recently Viewed" && group.name !== "Favorite" ? 
                `<button class="delete-group" data-id="${group.id}">🗑️</button>` : ''}
        </div>
    `).join("");
    
    document.querySelectorAll(".group-item").forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-group")) return;
            const id = parseInt(item.dataset.id);
            if (id) setActiveGroup(id);
        });
    });
    
    document.querySelectorAll(".delete-group").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            deleteGroup(id);
        });
    });
}

function setActiveGroup(groupId) {
    activeGroupId = groupId;
    const group = groups.find(g => g.id === groupId);
    document.getElementById("currentGroupTitle").innerText = group ? group.name : "Channels";
    renderGroups();
    renderChannels();
}

function deleteGroup(id) {
    if (groups.length <= 1) {
        alert("ناتوانیت هەموو گروپەکان بسڕیتەوە");
        return;
    }
    groups = groups.filter(g => g.id !== id);
    if (activeGroupId === id) setActiveGroup(groups[0].id);
    saveData();
    renderGroups();
}

// ============================================
// نمایش کەناڵەکان بەپێی گروپی چالاک
// ============================================

function renderChannels() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    let channelsList = getChannelsByGroup(activeGroupId);
    
    channelsList = channelsList.filter(ch => ch.name.toLowerCase().includes(searchTerm));
    
    const container = document.getElementById("channelsList");
    container.innerHTML = channelsList.map(ch => `
        <div class="channel-card ${activeChannelId === ch.id ? 'active' : ''}" data-id="${ch.id}">
            <span class="channel-logo">${ch.logo || "📡"}</span>
            <span class="channel-name">${ch.name}</span>
        </div>
    `).join("");
    
    document.querySelectorAll(".channel-card").forEach(card => {
        card.addEventListener("click", (e) => {
            const id = parseInt(card.dataset.id);
            if (id) playChannel(id);
        });
    });
}

function playChannel(id) {
    const channel = allChannels.find(ch => ch.id === id);
    if (!channel) return;
    
    activeChannelId = id;
    const video = document.getElementById("videoPlayer");
    video.src = channel.url;
    video.load();
    video.play().catch(e => console.log("auto-play blocked"));
    
    // زیادکردن بۆ Recently Viewed
    if (!recentlyViewed.includes(id)) {
        recentlyViewed.unshift(id);
        if (recentlyViewed.length > 10) recentlyViewed.pop();
        saveData();
        renderGroups(); // تازەکردنەوەی گروپەکان بۆ نیشاندانی ژمارە
    }
    
    renderChannels();
}

// ============================================
// زیادکردن بۆ Favorite
// ============================================

function addToFavorite() {
    if (!activeChannelId) {
        alert("تکایە یەکەمجار کەناڵێک هەڵبژێرە");
        return;
    }
    
    if (favoriteChannels.includes(activeChannelId)) {
        alert("ئەم کەناڵە پێشتر لە فەیڤەریتدا هەیە");
        return;
    }
    
    favoriteChannels.push(activeChannelId);
    saveData();
    
    // تازەکردنەوەی گروپەکان بۆ نیشاندانی فەیڤەریت
    renderGroups();
    
    // ئەگەر گروپی چالاک Favorite بێت، لیستەکە تازە بکەوە
    if (activeGroupId === 3) {
        renderChannels();
    }
    
    alert("✅ کەناڵەکە زیاد کرا بۆ Favorite");
}

// ============================================
// زیادکردنی گروپی نوێ
// ============================================

function addNewGroup() {
    const name = prompt("ناوی گروپی نوێ:");
    if (!name || name.trim() === "") return;
    
    const newId = Date.now();
    groups.push({
        id: newId,
        name: name.trim(),
        icon: "📁"
    });
    
    saveData();
    renderGroups();
    setActiveGroup(newId);
}

// ============================================
// گەڕان
// ============================================

document.getElementById("searchInput").addEventListener("input", renderChannels);
document.getElementById("addGroupBtn").addEventListener("click", addNewGroup);
document.getElementById("addFavoriteBtn").addEventListener("click", addToFavorite);

// ============================================
// دەستپێکردن
// ============================================

loadData();
renderGroups();
setActiveGroup(activeGroupId);
renderChannels();
