class player{
    constructor(x, y, id){
        this.id = id;
        this.r = 32;
        this.b =  Bodies.circle(x,y,this.r, 8);
        World.add(engine.world, this.b);
      
    }
    aplyForce(force){
        Matter.Body.applyForce(this.b, this.b.position,  force)
    }
    checkInput(){
        const delta = deltaNew - deltaOld;
        if (keyIsDown(LEFT_ARROW)) {
           this.aplyForce([-1000* delta, 0]);
           console.log(-1000* delta);
        }else if(keyIsDown(RIGHT_ARROW)) {

        }

        if (keyIsDown(UP_ARROW)) {
           
        }else if(keyIsDown(DOWN_ARROW)) {

        }

    }
    update(){
        this.checkInput();
    }
    display(){
      push();
      
        translate(this.b.position.x,this.b.position.y);
       // rotate(this.b.angle);
        fill(255);
        circle(0,0,this.r*2);
      
      pop();
    }
  }