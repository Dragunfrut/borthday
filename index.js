const crawlButton = document.getElementById("crawlButton");
const sawanoAudio = document.getElementById("sawano");
const crawlIMG = document.getElementById("crawl");
const image = document.querySelector(".image");
const birthdayButton = document.getElementById("birthdayButton")
const birthdayAudio = document.getElementById("birthday")
const fireIMG = document.getElementById("fire")

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
        sawanoAudio.currentTime = 0;
    }
})

birthdayButton.addEventListener("click", () => {
    if(fireIMG.className === "in") {
        fireIMG.className = "out";
        image.style.height = "0";
        birthdayAudio.pause();
    }
    else {
        fireIMG.className = "in";
        birthdayAudio.play();
        birthdayAudio.currentTime = 0;
    }
})