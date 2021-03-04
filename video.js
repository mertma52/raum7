let currentVideo
let playBtn

function playVideo(videoObject) {
    video = videoObject;
    currentVideo = video;
    playBtn = video.nextElementSibling;
    console.log(playBtn);
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



function displayVideoButton() {
    var videoState = currentVideo.getAttribute("data-videoState");
    if (videoState == "playing") {
        playBtn.style.opacity = "1";
        setTimeout(() => { playBtn.style.opacity = "0"; }, 2000);
    }
}
