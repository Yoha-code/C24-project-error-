const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, PlayerArcher;
var computer, computerBase, computerArrow;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  PlayerArcher = new playerArcher(350, 300, 120, 120);

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );

  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  computerArcher = new ComputerArcher(
    width - 690,
    computerBase.body.position.y - 430,
    120,
    120,
    0.1
  );
  
  //Create an arrow Object
  
  computerArrow = new ComputerArrow(10, 20, 100, 20, computerArcher.angle);

  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  PlayerArcher.display();
  computerArcher.display();

  computerArrow.display();  


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){

    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(PlayerArcher.body.angle);

  }
}



