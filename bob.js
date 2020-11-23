class Bob {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }

      this.r=r;
      this.body = Bodies.circle(x, y, r/2, options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("violet");
      ellipse(0,0,this.r/2,this.r/2);
      pop();
    }
  };