

function playVideo() {
    video = document.getElementById("mobile-video");
    playBtn = document.getElementById("video-play-btn");
    var videoState = video.getAttribute("data-videoState");
    if (videoState == "paused") {
        console.log("video spielt ab")
        video.play();
        video.setAttribute("data-videoState", "playing");
        playBtn.style.opacity = "0";
    } else if (videoState == "playing") {
        console.log("video pausiert")
        video.pause();
        video.setAttribute("data-videoState", "paused");
        playBtn.style.opacity = "1";
    }
}

playBtn = document.getElementById("video-play-btn");

function displayVideoButton() {
    var videoPanel = document.getElementById("mobile-video");
    video = document.getElementById("mobile-video");
    var videoState = video.getAttribute("data-videoState");
    if (videoState == "playing") {
        playBtn.style.opacity = "1";
        setTimeout(() => { playBtn.style.opacity = "0"; }, 2000);
    }
}
