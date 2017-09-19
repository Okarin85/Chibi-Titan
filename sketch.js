let player;
let enemy;
let enemyup;
let bg;
let offset = 0;

function Bird(){
  this.x = windowHeight / 10;
  this.y = windowHeight / 2;
  this.velocity = 0;
  this.gravity = 1;

  this.show = function(){
    image(Mikasa, this.x, this.y);
  }

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y > windowHeight - 125){
      this.y = windowHeight - 125;
      this.velocity = 0;
    }

    if(this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }

    if(this.velocity > 20){
      this.velocity = 20;
    }

    if(this.velocity < -20){
      this.velocity = -20;
    }
  }
}

function Titan(){
  this.x = windowWidth;
  this.y = windowHeight - 400;

  this.show = function(){
    image(titan, this.x + offset, this.y);
  }
}

function TitanUp(){
  this.x = windowWidth * 2;
  this.y = 0;

  this.show = function(){
    image(titanup, this.x + offset, this.y);
  }
}

function setup() {
  player = new Bird();
  enemy = new Titan();
  enemyup = new TitanUp();
  createCanvas(windowWidth, windowHeight);
  Mikasa = loadImage("Mikasa.png");
  titan = loadImage("Titan1.png");
  titanup = loadImage("titanup.png");
  bg = loadImage("forest.jpg");
}

function draw() {
  background(bg);
  player.show();
  player.update();
  enemy.show();
  enemyup.show();
  offset--;
}

function mouseClicked(){
    player.velocity -= 20;
}
