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
    // if(crawlIMG.style.visibility == "hidden") {
    //     crawlIMG.style.visibility = "visible";
    //     sawanoAudio.play();
    //     sawanoAudio.currentTime = 36;
    // }
    // else{
    //     crawlIMG.style.visibility = "hidden";
    //     sawanoAudio.pause();
    // }
})

var img = document.getElementById("dog"),
    btn = document.getElementById("button");

btn.addEventListener("click", () => {
    if(img.className === "in") {
        img.className = "out";
    }
    else {
        img.className = "in";
    }
})