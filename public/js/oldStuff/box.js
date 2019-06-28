class parede{
  constructor(x,y,w,h, angle){
    this.b =  Bodies.rectangle(x,y,w,h,{ isStatic: true });
    this.b.angle = angle;
    World.add(engine.world, this.b);
    this.w = w;
    this.h = h;
  }
  display(){
    push();
      translate(this.b.position.x,this.b.position.y);
      rotate(this.b.angle);
      fill(0);
      rect(0,0,this.w,this.h);
    
    pop();
  }
}