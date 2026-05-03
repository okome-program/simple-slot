// js/main.js

const startbtn = document.getElementById("startbtn");
const point = document.getElementById("point");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "./assets/images/atlas.webp";

let player_point = 5000;
let player_point_p = 0;
let point_bool = false;

let slot_at = 0;
let slot_bt = 0;
let slot_ct = 0;

let slot_ap = 0;
let slot_bp = 0;
let slot_cp = 0;

let btn_p = 0;
let endbool = false;


img.onload = () => {
  atlas_draw();
};

// draw function
function atlas_draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(16, 112, 256, 96);
  if (slot_ap > 192) { 
  	ctx.drawImage(img, 0, slot_ap, 32, slot_ap - (224 - slot_ap), 32, 128, 64, 2 * (224 - slot_ap));
    ctx.drawImage(img, 0, 0, 32, 32 - (224 - slot_ap), 32, 128 + (224 - slot_ap), 64, 2 * (32 - (224 - slot_ap)));
  }else {
    ctx.drawImage(img, 0, slot_ap, 32, 32, 32, 128, 64, 64);
  }
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
      slot_ct = 50;
      point_bool = true;
      player_point_p = 0;
      startbtn.textContent = "stop";
    }else if(player_point < 100) {
      player_point = 300;
    }
  }else if (btn_p == 1) {
    slot_at--;
    btn_p = 2;
  }else if (btn_p == 2) {
    slot_bt--;
    btn_p = 3;
  }else if (btn_p == 3) {
    slot_ct--;
    btn_p = 4;
  }else if (btn_p == 4 && endbool == true) {
    slot_at = 0;
    slot_bt = 0;
    slot_ct = 0;
    
    point.textContent = player_point + " point";
    startbtn.textContent = "start";
    player_point += player_point_p;
    endbool = false;
    btn_p = 0;
  }
  
});

function update() {
  if (btn_p < 5 && btn_p > 0) {
    const slot_ap_math = Math.floor(slot_ap / 32) * 32;
    if (slot_at == 40) {
      slot_ap += 4;
		}else if (slot_at > 0 && slot_at < 40) {
      slot_ap += 8;
      slot_at--;
		}else if (slot_at == 0 && slot_ap != slot_ap_math) {
      slot_ap += 8;
		}
		if (slot_ap > 223) {
      slot_ap = 0;
    }
    
    const slot_bp_math = Math.floor(slot_bp / 32) * 32;
    if (slot_bt == 40) {
      slot_bp += 16;
    }else if (slot_bt > 0 && slot_bt < 40) {
      slot_bp += 8;
      slot_bt--;
    }else if (slot_bt == 0 && slot_bp != slot_bp_math) {
    	slot_bp += 8;
    }
    if (slot_bp > 223) {
      slot_bp = 0;
    }
    
    const slot_cp_math = Math.floor(slot_cp / 32) * 32;
    if (slot_ct == 50) {
      slot_cp += 16;
    }else if (slot_ct > 0 && slot_ct < 60) {
      slot_cp += 8;
      slot_ct--;
    }else if (slot_ct == 0 && slot_cp != slot_cp_math) {
      slot_cp += 8;
    }
    if (slot_cp > 223) {
      slot_cp = 0;
    }
    
    if (slot_at == 0 && slot_ap == slot_ap_math) {
      if (slot_bt == 0 && slot_bp == slot_bp_math) {
        if (slot_ct == 0 && slot_cp == slot_cp_math) {
          if (slot_ap == slot_bp) {
            if (slot_bp == slot_cp) {
              if (point_bool == true) {
                player_point_p = 1000;
                point_bool = false;
              }
            }
            if (point_bool == true) {
              player_point_p = 300;
            }
          }else if(slot_bp == slot_cp && point_bool == true) {
            player_point_p = 300;
          }
          
          startbtn.textContent = "+" + player_point_p;
          endbool = true;
        }
      }
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

