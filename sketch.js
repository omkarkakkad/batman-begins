const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var maxDrops = 100;

var thunder,thunder1,thunder2,thunder3,thunder4;
var thunderFrame = 0;

var drops = [];

function preload(){

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,850);

    engine = Engine.create();
    world = engine.world;  

    umbrella = new Umbrella(220,580);

if(frameCount % 100 === 0){
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)))
        
    }  
}

}

function draw(){
    Engine.update(engine);
    
    background("black");
    
    var rand = Math.round(random(1,4));

    if(frameCount % 80 === 0){
        thunderFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,80),15,10);

    switch(rand){
     case 1:thunder.addImage(thunder1);
        break;
    case 2:thunder.addImage(thunder2);
        break;
    case 3:thunder.addImage(thunder3);
        break;
    case 4:thunder.addImage(thunder4);
        break;
     default:break;
    }

    thunder.scale = random(0.4,0.6);

    }

if(thunderFrame + 10 === frameCount && thunder){
    thunder.destroy(); 
}

for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].update();
}
    
   

umbrella.display();

    drawSprites();
}   

