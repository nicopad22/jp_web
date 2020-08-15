let b_imageleft = document.querySelector("#b_imageleft");
let b_imageright = document.querySelector("#b_imageright");
let image = document.querySelector("#image");
let image_link = document.querySelector("#image_a");

let currentPainting = 6;
let num_paintings = 13;

b_imageleft.onclick = function () {
    lastImage();
}

b_imageright.onclick = function() {
    nextImage();
}

function lastImage() {
    currentPainting--;
    if (currentPainting < 1)
        currentPainting = num_paintings;
    image.src = "low-res-paintings/painting-" + currentPainting + ".jpg";
    image_link.href = "paintings/painting-" + currentPainting + ".jpg";
}

function nextImage() {
    currentPainting++;
    if (currentPainting > num_paintings)
        currentPainting = 1;
    image.src = "low-res-paintings/painting-" + currentPainting + ".jpg";
    image_link.href = "paintings/painting-" + currentPainting + ".jpg";
}