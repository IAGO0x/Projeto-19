var menina,meninaimage
var background1,backgroundimage
var axeGroup=new Group();
 function preload(){
    meninaimage=loadImage("m.png")
    backgroundimage=loadImage("floresta.png")
    axeImg=loadImage("axe.png")
    //policeimage=loadImage("police.png")
    //zombieimage=loadImage("zombie.png")

}

function setup() {
    createCanvas(1200,600)
    background("black")
    background1=createSprite(0,0,1200,600);
    background1.addImage("B",backgroundimage)
    background1.scale=1.3 
    background1.velocityX = -5

    menina=createSprite(120,450,20,50);
    menina.addImage("M",meninaimage)
    menina.scale=0.1
 
}

function draw() {
    if (background1.x < 0){ 
       background1.x = background1.width/2; 
    }
    createAxes()
    drawSprites()
    
 
}
function createAxes() { 
    if (frameCount % 60 === 0) {
        var axe = createSprite(600,165,10,40);
        axe.addImage(axeImg);
        axe.scale=0.03;
        axe.velocityX = -5;
        axe.lifetime = 200; 
        axeGroup.add(axe); 
    }
}