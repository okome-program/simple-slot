// js/main.js

const startbtn = document.getElementById("startbtn");
const point = document.getElementById("point");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "./assets/images/atlas.webp";

let slot_at = 0;
let slot_bt = 0;
let slot_ct = 0;

img.onload = () => {
  atlas_draw();
};

// draw function
function atlas_draw() {
  ctx.drawImage(img, 0, 0, 32, 32, 32, 128, 64, 64);
  ctx.drawImage(img, 0, 32, 32, 32, 96, 128, 64, 64);
}
