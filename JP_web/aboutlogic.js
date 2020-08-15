let b_imageleft = document.querySelector("#b_imageleft");
let b_imageright = document.querySelector("#b_imageright");
let image = document.querySelector("#image");
let image_link = document.querySelector("#image_a");

let currentPainting = 1;
let num_paintings = 4;

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
    console.log("painting: " + currentPainting);
    image.src = "paul-beuchat-images/Paul-Beuchat-" + currentPainting + ".jpeg";
    image_link.href = "paul-beuchat-images/Paul-Beuchat-" + currentPainting + ".jpeg";
}

function nextImage() {
    currentPainting++;
    if (currentPainting > num_paintings)
        currentPainting = 1;
    console.log("painting: " + currentPainting);
    image.src = "paul-beuchat-images/Paul-Beuchat-" + currentPainting + ".jpeg";
    image_link.href = "paul-beuchat-images/Paul-Beuchat-" + currentPainting + ".jpeg";
}