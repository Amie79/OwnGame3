var bg_img;
var web_img;
var treasure_img, treasure1_img;
var skeleton_img, skeleton2_img;
var pirate_img;
var pirate1_img;
var treasurebox;
var pirate;
var pirate_animation;
var skeleton;
var maze_img;
var sword=0;
var   web1_destroyed=0;
var web2_destroyed=0;
var empty_img;
function preload(){

  bg_img=loadImage("images/brownpath.jpg");
  web_img=loadImage("images/swb.png");
  treasure_img=loadImage("images/treasyre.png");
  treasure1_img=loadImage("images/uh.png");
  skeleton_img=loadImage("images/ghost11.png");
  skeleton2_img=loadImage("images/ghost22.png")
  pirate_img=loadImage("images/jake1.png");
  pirate1_img=loadImage("images/jake11.png");
  pirate_animation=loadAnimation(pirate_img, pirate1_img);
  maze_img=loadImage("images/grass1.png");
  empty_img=loadImage("images/empty.png")

}
function setup() {
  createCanvas(1520,660);
  treasurebox1=createSprite(70,70);
  treasurebox1.addImage(treasure1_img);
  treasurebox1.scale=0.4;
  
  treasurebox2=createSprite(1430,90)
  treasurebox2.scale=0.4;
  treasurebox3=createSprite(1430,550);
  treasurebox3.scale=0.4;
  treasurebox4=createSprite(50,550);
  treasurebox4.scale=0.4;

 treasurebox1.addImage(treasure1_img);
treasurebox2.addImage(treasure1_img);
treasurebox3.addImage(treasure1_img);
treasurebox4.addImage(treasure1_img);

  web1=createSprite(40,20,100,50);
  web1.debug=false;
  web1.setCollider("circle",0,0,160);
  web2=createSprite(1500,20,20,20);
  web3=createSprite(1500,600,20,20);
  web4=createSprite(40,600,50,40);
  web1.addImage(web_img);
  web2.addImage(web_img);
  web3.addImage(web_img);
  web4.addImage(web_img);
 
  
  pirate=createSprite(300,200);
 
 pirate.scale=0.4;

 skeleton=createSprite(700,400);
 skeleton.addImage(skeleton_img);
 skeleton.scale=0.5;
 skeleton.visible=false;

 pirate.debug=false;
 pirate.setCollider("rectangle",0,0,200,200);
 treasurebox2.debug=true;
 treasurebox1.setCollider("rectangle",0,0,300,300);
 treasurebox2.setCollider("rectangle",0,0,300,300);


 wall1=createSprite(350,450,550,10);
 //wall1.addImage(maze_img);
 wall2=createSprite(300,350,10,170);
 wall3=createSprite(400,130,440,10);
 wall4=createSprite(370,600,350,10);
 wall5=createSprite(1110,610,330,10);
 wall6=createSprite(1110,20,330,10);
 wall7=createSprite(1110,450,330,10);
 wall8=createSprite(1110,180,330,10);
wall1.shapeColor="black";
wall2.shapeColor="black";
wall3.shapeColor="black";
wall4.shapeColor="black";
wall5.shapeColor="black";
wall6.shapeColor="black";
wall7.shapeColor="black";
wall8.shapeColor="black";
}

function draw() {
  background("brown");  

  if(keyDown('a'))
  {
    pirate.addImage(pirate_img);
    pirate.scale=0.2;
    sword=1;
  }
  else
  {
    pirate.addImage(pirate1_img);
    pirate.scale=0.4;
    sword=0;
  }
      if(keyDown(UP_ARROW))
      {
        pirate.y= pirate.y-10;
        
      }
      if(keyDown(DOWN_ARROW))
      {
        pirate.y= pirate.y+10;
        
      }
      if(keyDown(LEFT_ARROW))
      {
        pirate.x= pirate.x-10;
        
      }
      if(keyDown(RIGHT_ARROW))
      {
        pirate.x= pirate.x+10;
        
      }
  
  if(pirate.isTouching(web1) && sword==1)
    {
      web1.destroy();
    web1_destroyed=1;
    }
    if(pirate.isTouching(treasurebox1) && web1_destroyed==1 )
    {
      treasurebox1.addImage(treasure_img);
    } 
    else
    treasurebox1.addImage(treasure1_img);


    if(pirate.isTouching(web2) && sword==1)
    {
      web2.destroy();
    web2_destroyed=1;
    }

    if(pirate.isTouching(treasurebox2) && web2_destroyed==1 )
    {
      treasurebox2.addImage(empty_img);
      treasurebox2.scale=1.5;
      skeleton.visible=true;
      skeleton.x=900;
      skeleton.y=90;
      skeleton.velocityX=3;
      skeleton.scale=0.3;
      
    } 
    else
    {
    treasurebox2.addImage(treasure1_img);
  treasurebox2.scale=0.5;  
  }
  if(keyDown('w'))
  skeleton.addImage(skeleton2_img);
  else
  skeleton.addImage(skeleton_img);
  
 
drawSprites();
}

