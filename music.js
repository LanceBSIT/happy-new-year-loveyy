const audio = document.getElementById("audio1");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const cover = document.querySelector(".cover");
const smallCover = document.querySelector(".small-cover");

const playlistItems = document.querySelectorAll(".choices");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;

  currentTime.textContent = formatTime(audio.currentTime);
  duration.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// FORMAT TIME
function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// LOAD SONG INTO PLAYER
function loadSong(item) {
  songTitle.textContent = item.dataset.title;
  songArtist.textContent = item.dataset.artist;
  cover.src = item.dataset.cover;
  smallCover.src = item.dataset.cover;
  audio.src = item.dataset.audio;

  audio.currentTime = 0;
}

playlistItems.forEach((item) => {
  item.addEventListener("click", () => {
    loadSong(item);
    audio.play();
    playBtn.textContent = "⏸";
  });
});
