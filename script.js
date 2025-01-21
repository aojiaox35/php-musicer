const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const cover = document.getElementById('cover');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

// 示例歌曲列表
const songs = [
    { title: '歌曲1', artist: '艺术家1', src: 'song1.mp3', cover: 'cover1.jpg' },
    { title: '歌曲2', artist: '艺术家2', src: 'song2.mp3', cover: 'cover2.jpg' },
    { title: '歌曲3', artist: '艺术家3', src: 'song3.mp3', cover: 'cover3.jpg' }
];

let songIndex = 0;

// 加载歌曲
function loadSong(song) {
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

// 播放歌曲
function playSong() {
    playBtn.textContent = '暂停';
    audio.play();
}

// 暂停歌曲
function pauseSong() {
    playBtn.textContent = '播放';
    audio.pause();
}

// 播放/暂停切换
playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.textContent === '暂停';
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// 上一首
prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

// 下一首
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

// 更新进度条
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// 点击进度条跳转
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

// 歌曲结束时自动下一首
audio.addEventListener('ended', () => {
    nextBtn.click();
});

// 初始化加载第一首歌
loadSong(songs[songIndex]);
