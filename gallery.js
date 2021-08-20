let LButton = document.querySelector("#LeftButton");
let RButton = document.querySelector("#RightButton");
let photoGal = document.querySelector(".photoGallery");
let Current = document.querySelector("#CurrentImg");

let imgs = Gallerydata;
let currentImgNumber = 0;
Current.src = imgs[currentImgNumber]; // runs when page first loads

LButton.onclick = function() {
    if (currentImgNumber > 0) {
        currentImgNumber = currentImgNumber - 1;
        Current.src = imgs[currentImgNumber];

    }
    else {
        Current.src = imgs[0];
    }
}

RButton.onclick = function() {    
    if (currentImgNumber < 5) {
        currentImgNumber = currentImgNumber + 1;
        Current.src = imgs[currentImgNumber];

    }
    else {
        Current.src = imgs[5];
    }
}