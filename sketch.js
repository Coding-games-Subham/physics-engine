const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,ball1,ball2,ball3;
var ball4,ball5,ball6,box;
var ground2,ground3,ground4;
var box1,box2,box4,box5,box6,box3;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    
    var ball_options ={
        restitution:1.4
          
    }
    var box_options ={
        restitution:0

    }

    ground1 = Bodies.rectangle(400,790,800,30,ground_options);
    World.add(world,ground1);

    ground2 = Bodies.rectangle(400,10,800,30,ground_options);
    World.add(world,ground2);

    ground3 = Bodies.rectangle(790,400,30,800,ground_options);
    World.add(world,ground3);

    ground4 = Bodies.rectangle(10,400,30,800,ground_options);
    World.add(world,ground4);

    box1 = Bodies.rectangle(600,780,40,40,box_options);
    World.add(world,box1);

    box2 = Bodies.rectangle(600,760,40,40,box_options);
    World.add(world,box2);

    box3 = Bodies.rectangle(600,780,40,40,box_options);
    World.add(world,box3);

    box4 = Bodies.rectangle(570,760,40,40,box_options);
    World.add(world,box4);

    box5 = Bodies.rectangle(570,780,40,40,box_options);
    World.add(world,box5);

    box6 = Bodies.rectangle(570,740,40,40,box_options);
    World.add(world,box6);
    
    ball1=Bodies.circle(290,300,20,ball_options);
    World.add(world,ball1);
    
    ball2=Bodies.circle(300,400,20,ball_options);
    World.add(world,ball2);

    ball3=Bodies.circle(310,290,20,ball_options);
    World.add(world,ball3);

     ball4=Bodies.circle(200,320,20,ball_options);
    World.add(world,ball4);

    ball5=Bodies.circle(320,370,20,ball_options);
    World.add(world,ball5);

    ball6=Bodies.circle(330,360,20,ball_options);
    World.add(world,ball6);

    box=Bodies.circle(360,350,20,ball_options);
    World.add(world,box);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground1.position.x,ground1.position.y,800,30);
    rect(ground2.position.x,ground2.position.y,800,30);
    rect(ground3.position.x,ground3.position.y,30,800);
    rect(ground4.position.x,ground4.position.y,30,800);

    rect(box1.position.x,box1.position.y,40,40);
    rect(box2.position.x,box2.position.y,40,40);
    rect(box3.position.x,box3.position.y,40,40);
    rect(box4.position.x,box4.position.y,40,40);
    rect(box5.position.x,box5.position.y,40,40);
    rect(box6.position.x,box6.position.y,40,40);
     
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20,20);
    ellipse(ball2.position.x,ball2.position.y,20,20);
    ellipse(ball3.position.x,ball3.position.y,20,20);
    ellipse(ball4.position.x,ball4.position.y,20,20);
    ellipse(ball5.position.x,ball5.position.y,20,20);
    ellipse(ball6.position.x,ball6.position.y,20,20);
    ellipse(box.position.x,box.position.y,20,20);

}


