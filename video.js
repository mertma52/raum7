function playVideo() {
    video = document.getElementById("mobile-video");
    var videoState = video.getAttribute("data-videoState");
    if (videoState == "paused") {
        console.log("video spielt ab")
        video.play();
        video.setAttribute("data-videoState", "playing");
    } else if (videoState == "playing") {
        console.log("video pausiert")
        video.pause();
        video.setAttribute("data-videoState", "paused");
    }
}
