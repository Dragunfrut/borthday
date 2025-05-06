const crawlButton = document.getElementById("crawlButton");
const sawanoAudio = document.getElementById("sawano");
const crawlIMG = document.getElementById("crawl");

crawlButton.addEventListener("click", () => {
    if(crawlIMG.style.visibility == "hidden") {
        crawlIMG.style.visibility = "visible";
        sawanoAudio.play();
        sawanoAudio.currentTime = 36;
    }
    else{
        crawlIMG.style.visibility = "hidden";
        sawanoAudio.pause();
        sawanoAudio.currentTime = 36;
    }
})