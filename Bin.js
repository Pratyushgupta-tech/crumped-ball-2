class Bin {
    constructor(x,y,width,height){
    
    var option={
    
    isStatic:true
    
    }
    
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbin .png")
    World.add(world,this.body);
    
    }
     display(){
       var pos = this.body.position;
    
    fill("red");
    translate(pos.x,pos.y);
    rectMode(CENTER);
     imageMode(CENTER);
     rect(pos.x, pos.y,this.width,this.height);
     image(this.image,0,-90,this.width,this.height)
    
     } 
    
    
    }