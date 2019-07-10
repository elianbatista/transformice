class player{
    constructor(x, y, id){
        this.id = id;
        this.r = 62;
        this.b =  Bodies.circle(x,y,this.r, 8);
        // this.b.isStatic = true;
        World.add(engine.world, this.b);
      
        
    }
    aplyForce(force){
        Matter.Body.applyForce(this.b, this.b.position,  force);
    }
    checkInput(){
   
        if (keyIsDown(LEFT_ARROW)) {
  
           this.aplyForce(new Matter.Vector.create(-0.01,0));
        }else if(keyIsDown(RIGHT_ARROW)) {
          this.aplyForce(new Matter.Vector.create(0.01,0));
        }

        if (keyIsDown(UP_ARROW)) {
           
        }else if(keyIsDown(DOWN_ARROW)) {

        }

    }
    update(){
        this.checkInput();
    }
    display(id){
     // push();
       // rotate(this.b.angle);
        fill(255,0,0);
        circle(this.b.position.x,this.b.position.y,this.r*2);
    
      //pop();
    }
}
class protoPlayer{
  constructor(x, y, id){
    this.pos = createVector(x,y);
    this.r = 62;
    this.id = id;
  }
  display(){
    fill(0,255,0);
    circle(this.pos.x,this.pos.y,this.r*2);
   
  }

}
