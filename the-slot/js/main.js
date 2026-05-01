// js/main.js

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "../assets/images/atlas.webp";

img.onload = () => {
  console.log("loaded!");
  atlas_draw();
};

// draw function
function atlas_draw() {
  ctx.drawImage(img, 0, 0, 32, 32, 0, 0, 32, 32);
}
