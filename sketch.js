let player, enemy;
let playerHealth = 100;
let enemyHealth = 100;
let playerProjectiles = [];
let enemyProjectiles = [];
let bg;
let bgImage, groundImage;

function preload() {
  try {
    bgImage = loadImage('assets/background.png');
    groundImage = loadImage('assets/ground.png');
  } catch(e) {
    console.error('圖片載入失敗:', e);
    // 使用基本背景色作為備用
    bgImage = null;
    groundImage = null;
  }
}

function setup() {
  createCanvas(800, 600);
  // 初始化遊戲
}

function draw() {
  // 清除畫面
  clear();
  
  // 顯示背景
  if (bg) bg.display();
  
  // 更新和顯示角色
  if (player) player.update();
  if (enemy) enemy.update();
  
  // 更新發射物
  updateProjectiles();
  
  // 顯示UI
  displayUI();
  
  // 檢查遊戲結束
  checkGameOver();
}

function keyPressed() {
  // 按鍵控制
}

function updateProjectiles() {
  // 發射物更新邏輯
}

function displayUI() {
  // UI顯示邏輯
}

function checkGameOver() {
  // 遊戲結束檢查
}

class Background {
  constructor(bgImage, groundImage) {
    this.bgImage = bgImage;
    this.groundImage = groundImage;
    this.x = 0;
    this.y = 0;
    this.width = bgImage ? bgImage.width : width;
    this.groundY = height - (groundImage ? groundImage.height : 50);
  }

  display() {
    if (this.bgImage) {
      // 正常顯示背景圖
      image(this.bgImage, this.x, this.y);
      image(this.bgImage, this.x + this.width, this.y);
      image(this.bgImage, this.x - this.width, this.y);
    } else {
      // 使用基本背景色
      background(220);
    }

    if (this.groundImage) {
      // 正常顯示地面
      image(this.groundImage, this.x, this.groundY);
      image(this.groundImage, this.x + this.width, this.groundY);
      image(this.groundImage, this.x - this.width, this.groundY);
    } else {
      // 繪製基本地面
      fill(100);
      rect(0, this.groundY, width, height - this.groundY);
    }
  }
}
