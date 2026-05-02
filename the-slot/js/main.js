// js/main.js

const startbtn = document.getElementById("startbtn");
const point = document.getElementById("point");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "./assets/images/atlas.webp";

let player_point = 5000;

let slot_at = 0;
let slot_bt = 0;
let slot_ct = 0;

let slot_ap = 0;
let slot_bp = 0;
let slot_cp = 0;

let btn_p = 0;


img.onload = () => {
  atlas_draw();
};

// draw function
function atlas_draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(16, 112, 256, 96);
  ctx.drawImage(img, 0, slot_ap, 32, 32, 32, 128, 64, 64);
  ctx.drawImage(img, 0, slot_bp, 32, 32, 112, 128, 64, 64);
  ctx.drawImage(img, 0, slot_cp, 32, 32, 192, 128, 64, 64);
}

startbtn.addEventListener("click", () => {
  if (btn_p == 0) {
    if (player_point > 99) {
      player_point -= 100;
      point.textContent = player_point + " point";
      btn_p = 1;
      slot_at = 40;
      slot_bt = 40;
      slot_ct = 60;
      startbtn.textContent = "stop";
    }
  }else if (btn_p == 1) {
    slot_at--;
    btn_p = 2;
  }
  
});

function update() {
  if (btn_p < 4 && btn_p > 0) {
    if (slot_at == 40) {
      slot_ap += 16;
    }else if (slot_at > 0 && slot_at < 40) {
      slot_ap += 8;
      slot_at--;
 		}
    if (slot_ap > 223) {
      slot_ap = 0;
    }
    
    slot_bp += 16;
    if (slot_bp > 223) {
      slot_bp = 0;
    }
    
    slot_cp += 16;
    if (slot_cp > 223) {
      slot_cp = 0;
    }
  }
}

const FPS = 20;
const interval = 1000 / FPS;
let lastTime = 0;

function loop(time) {
  if(time - lastTime >= interval) {
    update();
    atlas_draw();
    lastTime = time;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

