let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let thumbnails = document.querySelectorAll(".img-gallery img");

let currentIndex = 0;

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;

 
  thumbnails.forEach((img, index) => {
    if (img.src === pic) {
      currentIndex = index;
    }
  });
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

function prevImg() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  fullImg.src = thumbnails[currentIndex].src;
}

function nextImg() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  fullImg.src = thumbnails[currentIndex].src;
}
