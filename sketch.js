var starImg, bgImg, bg;
var star, starBody;
var ney, neyIMG


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    starImg = loadImage("images/star.png");
    bgImg = loadImage("images/starryNight.jpg");
    neyIMG = loadImage("images/neymito.png");

}

function setup() {
    createCanvas(windowWidth,windowHeight);

    
    bg = createSprite(100,100);
    bg.addImage(bgImg);

    ney = createSprite(600,550);
    ney.addImage(neyIMG);
    ney.scale = 0.5;
    //ney.debug = true;

    star = createSprite(650, 30);
    star.addImage(starImg);
    star.scale = 0.2;

    engine = Engine.create();
    world = engine.world;

    starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
    World.add(world, starBody);

    Engine.run(engine);

}

function draw() {
    background(0);
    
    ney.x = mouseX;
    star.velocityY = 3;
    if (star.isTouching(ney)){
    star.velocityY = 0;

    }

    
  


    drawSprites();
}
