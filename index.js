myButton = document.querySelector("#crawlButton");
let myImg = document.querySelector("#crawl");

myButton.addEventListener("click", () => {

    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden";
    }
})