const crawlButton = document.getElementById("crawlButton");
const sawanoAudio = document.getElementById("sawano");
const crawlIMG = document.getElementById("crawl");

crawlButton.addEventListener("click", () => {
    if(crawlIMG.className === "in") {
        crawlIMG.className = "out";
        sawanoAudio.pause();
    }
    else {
        crawlIMG.className = "in";
        sawanoAudio.play();
        sawanoAudio.currentTime = 37;
    }
})