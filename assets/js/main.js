// =============== Video play/pause

const video = document.getElementById("video");
const playButton = document.getElementById("playButton");

// When the play button is clicked
playButton.addEventListener("click", () => {
  // Play the video
  video.play();
  // Hide the play button
  playButton.classList.add("hidden");
});

// When the video is clicked (to pause)
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.classList.add("hidden");
  } else {
    video.pause();
    playButton.classList.remove("hidden");
  }
});

// Show the play button again if the video ends
video.addEventListener("ended", () => {
  playButton.classList.remove("hidden");
});
