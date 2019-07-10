class parede{
    constructor(x,y,w,h){
        var floorCategory = 0x0001
        this.b = Bodies.rectangle(x,y,w,h,{ isStatic: true });
        this.b.collisionFilter.category = 0x0001;
        World.add(engine.world, this.b);
        this.w = w;
        this.h = h;   
    }
    display(){
        stroke(255,0,0);
        rect(this.b.position.x, this.b.position.y, this.w,this.h);
    }
}
class limite{
    constructor(x,y,w,h,g){
        this.list = [];
        this.list.push(new parede(x+g/2,y+h/2,g,h))
        this.list.push(new parede(x+(w-g/2),y+h/2,g,h))
        this.list.push(new parede(x+w/2,y+g/2,w,g))
        this.list.push(new parede(x+w/2,y+(h-g/2),w,g))
    }
    display(){
        for(let i = 0; i<this.list.length;i++){
            this.list[i].display();
        }
    }
}