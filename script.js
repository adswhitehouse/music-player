// Variables
let playPauseBtn = document.querySelector(".jsPlayBtn");
let track = document.querySelector(".jsTrack");
let rangeInput = document.querySelector(".jsRangeInput");

// Create play/pause element
let playPauseIcon = document.createElement("i");
playPauseIcon.classList.add("fa-solid", "fa-play");

// Track is initially paused
playPauseBtn.appendChild(playPauseIcon);

// When track loads, range max is equal to track length and range value initializes as current time of track
track.onloadedmetadata = () => {
  rangeInput.max = track.duration;
  rangeInput.value = track.currentTime;
};

// Plays/pauses track/switches icon/progress bar updates with current track duration depending on whether song is playing or paused
let isPlaying = false;
let interval;
playPauseBtn.addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    track.play();
    playPauseIcon.className = "fa-solid fa-pause";
    interval = setInterval(() => {
      rangeInput.value = track.currentTime;
    }, 1000);
  } else {
    clearInterval(interval);
    isPlaying = false;
    playPauseIcon.className = "fa-solid fa-play";
    track.pause();
  }
});

// Progress bar can be changed and will update track duration
rangeInput.onchange = () => {
  track.currentTime = rangeInput.value;
};
