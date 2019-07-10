class player{
    constructor(x, y, id, proto){
        this.id = id;
        this.r = 62;
        this.proto = proto;
        if(proto){
            this.pos = createVector(x,y);
        }else{
            this.b =  Bodies.circle(x,y,this.r, 8);
            this.b.collisionFilter.mask = 0x0001;
            // this.b.isStatic = true;
            World.add(engine.world, this.b);
        }
        
      
    }
    aplyForce(force){
        Matter.Body.applyForce(this.b, this.b.position,  force)
    }
    checkInput(){
   
        if (keyIsDown(LEFT_ARROW)) {
           this.aplyForce([-0.0000000001, 0]);
        }else if(keyIsDown(RIGHT_ARROW)) {

        }

        if (keyIsDown(UP_ARROW)) {
           
        }else if(keyIsDown(DOWN_ARROW)) {

        }

    }
    update(){
        this.checkInput();
    }
    display(id){
      push();
        if(this.proto){
          translate(this.pos.x,this.pos.y);
        }else{
          translate(this.b.position.x,this.b.position.y);
        }
        
       // rotate(this.b.angle);
        if(id == this.id){
          fill(255,0,0);
        }else{
          fill(0,255,0);
        }
        
        circle(0,0,this.r*2);
      
      pop();
    }
}
