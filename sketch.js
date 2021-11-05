var dogman, preDm
var petey, PrePet
var LilPetey, PreLP
var Cheif, PreC
var Sarah_Hatoff, PreSH
var Eighty_HD, preEHD
var earth, preE
var road, PreR
var textcool, preT

var racer11
var racer22
var racer33
var racer44
var racer55
var racer66

var Preracer1
var Preracer2
var Preracer3
var Preracer4
var Preracer5

var brick_group
var preWall


var gamestate = 1





function preload(){
    preDm = loadAnimation("Dog-man.png")
    prePet= loadAnimation("Petey.png")
    preLP = loadAnimation("Lil'petey.png")
    preC = loadAnimation("Cheif.png")
    preSH = loadAnimation("Sarah hatoff.png")
    preEHD = loadAnimation("80-HD.png")
    preE = loadImage("Earth.png")
    preR = loadImage("Road.png")
    preT = loadImage("TExt.png")

    Preracer1 = loadAnimation("5.png", "5 - Copy.png")
    Preracer2 = loadAnimation("6.png", "6 - Copy.png")
    Preracer3 = loadAnimation("7.png", "7 - Copy.png")
    Preracer4 = loadAnimation("1.png", "2.png")
    Preracer5 = loadAnimation("3.png", "4.png")
    Preracer6 = loadAnimation("8.png", "8 - Copy.png")
    preWall = loadAnimation("brick_wall.png")
    

}

function setup() {
 createCanvas(windowWidth, windowHeight)
 background("blue")
 earth = createSprite(750,200,200,200)
 earth.addImage(preE)
 earth.scale = 2.7
 
 road = createSprite(750,605,200,200)
 road.addImage(preR)  

 
 dogman = createSprite(400,200,200,200)
 dogman.addAnimation("Runner1", preDm)
 dogman.scale = 0.5

 petey = createSprite(700,200,200,200)
 petey.addAnimation("Runner2", prePet)
 petey.scale = 0.7

 LilPetey = createSprite(1050,200,200,200)
 LilPetey.addAnimation("Runner3", preLP)
 LilPetey.scale = 0.5

 Cheif = createSprite(400,550,200,200)
 Cheif.addAnimation("Runner4", preC)
 Cheif.scale = 0.4

 Sarah_Hatoff = createSprite(700,550,200,200)
 Sarah_Hatoff.addAnimation("Runner5", preSH)
 Sarah_Hatoff.scale = 0.4

 Eighty_HD = createSprite(1050,550,200,200)
 Eighty_HD.addAnimation("Runner6", preEHD)
 Eighty_HD.scale = 0.3

 textcool = createSprite(1350,200,200,200)
 textcool.addImage(preT)
 textcool.scale = 0.5

 
 racer11 = createSprite(200,555,200,200)
 racer11.addAnimation("Runner1", Preracer1)
 racer11.visible = false;

 racer22 = createSprite(200,555,200,200)
 racer22.addAnimation("Runner2", Preracer2)
 racer22.scale  = 0.2
 racer22.visible = false;

 racer33 = createSprite(200,555,200,200)
 racer33.addAnimation("Runner3", Preracer3)
 racer33.scale = 0.5
 racer33.visible = false;

 racer44 = createSprite(200,555,200,200)
 racer44.addAnimation("Runner4", Preracer4)
 racer44.scale = 0.7
 racer44.visible = false;

 racer55 = createSprite(200,555,200,200)
 racer55.addAnimation("Runner5", Preracer5)
 racer55.scale = 0.3
 racer55.visible = false;

 racer66 = createSprite(200,555,200,200)
 racer66.addAnimation("Runner6", Preracer6)
 racer66.scale = 2
 racer66.visible = false;

 brick_group = new Group();


console.log("Refresh at any zoom to match window dimensions")
}

function draw() {
 
road.velocityX = -10

if (road.x < 0){
    road.x = road.width/2
   }


if(mousePressedOver(dogman)){

    dogman.visible = false;
    Sarah_Hatoff.visible = false;
    Cheif.visible = false;
    petey.visible = false;
    LilPetey.visible = false;
    Eighty_HD.visible = false;
    textcool.visible = false;

    racer11.visible = true;
    racer22.visible = false;
    racer33.visible = false;
    racer44.visible = false;
    racer55.visible = false;
    racer66.visible = false;
 
}
 

 
if(mousePressedOver(Cheif)){
 

    dogman.visible = false;
    Sarah_Hatoff.visible = false;
    Cheif.visible = false;
    petey.visible = false;
    LilPetey.visible = false;
    Eighty_HD.visible = false;
    textcool.visible = false;

    racer11.visible = false;
    racer22.visible = false;
    racer33.visible = false;
    racer44.visible = false;
    racer55.visible = false;
    racer66.visible = true;
}
 
if(mousePressedOver(Sarah_Hatoff)){
    
    dogman.visible = false;
    Sarah_Hatoff.visible = false;
    Cheif.visible = false;
    petey.visible = false;
    LilPetey.visible = false;
    Eighty_HD.visible = false;
    textcool.visible = false;

    racer44.visible = true;
    racer11.visible = false;
    racer22.visible = false;
    racer33.visible = false;
    racer55.visible = false;
    racer66.visible = false;
    
}



if(mousePressedOver(LilPetey)){
  

    dogman.visible = false;
    Sarah_Hatoff.visible = false;
    Cheif.visible = false;
    petey.visible = false;
    LilPetey.visible = false;
    Eighty_HD.visible = false;
    textcool.visible = false;

    racer44.visible = false;
    racer11.visible = false;
    racer22.visible = true;
    racer33.visible = false;
    racer55.visible = false;
    racer66.visible = false;
    

    
}

if(mousePressedOver(Eighty_HD)){
   

    dogman.visible = false;
    Sarah_Hatoff.visible = false;
    Cheif.visible = false;
    petey.visible = false;
    LilPetey.visible = false;
    Eighty_HD.visible = false;
    textcool.visible = false;

    racer44.visible = false;
    racer11.visible = false;
    racer22.visible = false;
    racer33.visible = false;
    racer55.visible = true;
    racer66.visible = false;
}

if(mousePressedOver(petey)){
    

    dogman.visible = false;
    Sarah_Hatoff.visible = false;
    Cheif.visible = false;
    petey.visible = false;
    LilPetey.visible = false;
    Eighty_HD.visible = false;
    textcool.visible = false;

    racer44.visible = false;
    racer11.visible = false;
    racer22.visible = false;
    racer33.visible = true;
    racer55.visible = false;
    racer66.visible = false;
}





    spawnBrick();
    drawSprites();
  
}







function spawnBrick(){
    if (frameCount % 100 == 0){
        var brickWall = createSprite(200,555, 200,200);
        brickWall.addImage(preWall)
        brickWall.x = Math.round(random(200,1300))
        brick_group.add(brickWall)
     }
    }