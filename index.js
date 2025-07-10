const crawlButton = document.getElementById("crawlButton");
const sawanoAudio = document.getElementById("sawano");
const crawlIMG = document.getElementById("crawl");
const image = document.querySelector(".image");

crawlButton.addEventListener("click", () => {
    if(crawlIMG.className === "in") {
        crawlIMG.className = "out";
        image.style.height = "0";
        sawanoAudio.pause();
    }
    else {
        crawlIMG.className = "in";
        image.style.height = "100%";
        sawanoAudio.play();
        sawanoAudio.currentTime = 37;
    }
})