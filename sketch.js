let player;
let bg;

function Bird(){
  this.x = windowHeight / 10;
  this.y = windowHeight / 2;
  this.velocity = 0;
  this.gravity = 1;

  this.show = function(){
    image(img, this.x, this.y);
  }

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y > windowHeight - 50){
      this.y = windowHeight - 50;
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

function setup() {
  player = new Bird();
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1920, 1080);
  img = loadImage("Mikasa.png");
  bg = loadImage("forest.jpg");
}

function draw() {
  background(bg);
  player.show();
  player.update();
}

function mouseClicked(){
    player.velocity -= 20;
}
