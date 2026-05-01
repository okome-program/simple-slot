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
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(16, 256, 200, 96);
  ctx.drawImage(img, 0, 0, 32, 32, 32, 128, 64, 64);
  ctx.drawImage(img, 0, 32, 32, 32, 112, 128, 64, 64);
  ctx.drawImage(img, 0, 64, 32, 32, 192, 128, 64, 64);
}

const FPS = 20;
const interval = 1000 / FPS;
let lastTime = 0;

function loop(time) {
  if(time - lastTime >= interval) {
    lastTime = time;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

