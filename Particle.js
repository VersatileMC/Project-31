class Particles {

  constructor(x,y){
      var options={
          isStatic:false
      }
      
      this.body=Bodies.circle(x,y,5,options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
  }

  display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, 10,10);
  }


}