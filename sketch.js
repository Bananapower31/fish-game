var bg, bgImg;
var fish, fishImg;
var shark, sharkImg, sharkGroup;
var starfish, starfishImg, starfishGroup;
var fishy_bullet;
var game_over_screen;
var ground;
var starfishheight, sharkheight;
var score;
var lives;

function preload() {
  fishImg = loadImage("images/fishy.png");
  sharkImg = loadImage("images/shark.png");
  starfishImg = loadImage("images/starfish.png");
  bgImg = loadImage("images/background.png");
  fishy_bullet = loadImage("images/gamingfishy.png");
  game_over_screen = loadImage("images/gameover.png");
}

function setup() {
  createCanvas(490, 270);
  bg = createSprite(400, 100, 962, 181);
  bg.addImage(bgImg);
  bg.x = bg.width;
  bg.velocityX = -10;
  bg.scale = 2;
  fish = createSprite(10, 100, 30, 10);
  fish.addImage(fishImg);
  fish.scale = 0.27;
  sharkGroup = createGroup();
  starfishGroup = createGroup();
  lives = 3;
  score = 0;
}

function draw() {
  background("white");
  if (bg.x < -480) {
    bg.x = bg.width / 2;
  }
  if (keyDown("UP_ARROW")) {
    fish.y = fish.y - 10;
  }
  if (keyDown("DOWN_ARROW")) {
    fish.y = fish.y + 10;
  }
  if (keyDown("LEFT_ARROW")) {
    fish.x = fish.x - 7;
  }
  if (keyDown("RIGHT_ARROW")) {
    fish.x = fish.x + 10;
  }
  if (fish.isTouching(starfish || shark)) {
    lives = lives - 1;
  }
  text("lives", 10, -300);
  text("score: " + score, 500, 50);
  spawnstarfish();
  spawnshark();
  drawSprites();
}

function spawnstarfish() {
  starfishheight = Math.round(random(10, 300));
  if (frameCount % 30 === 0) {
    starfish = createSprite(490, starfishheight, 30, 10);
    starfish.addImage(starfishImg);
    starfish.scale = 0.17;
    starfish.velocityX = -10;
    starfishGroup.add(starfish);
  }
}

function spawnshark() {
  sharkheight = Math.round(random(10, 300));
  if (frameCount % 50 === 0) {
    shark = createSprite(490, sharkheight, 30, 10);
    shark.addImage(sharkImg);
    shark.scale = 0.17;
    shark.velocityX = -10;
    sharkGroup.add(shark);
  }
}
