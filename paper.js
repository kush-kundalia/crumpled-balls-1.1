class Paper{
    constructor(x, y ,r){
        const options = {
            restitution: 0.9,
            inertia:600,
            volume: 50000,
            friction :100 ,
            density :1.2 ,
            isStatic : false
          };
    this.body = Matter.Bodies.circle(x,y,r,options);
    Matter.World.add(world , this.body);
    // this.r = r;
    // restitution = 2; 
}

display(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    fill(255,20,147);
    strokeWeight(0.5);
    circle(0, 0, this.r);
    pop();
}
}