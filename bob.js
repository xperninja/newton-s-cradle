class Bob {
    constructor(x,y,radius) {
      var options = {
        restitution:1,
          isStatic: false,
          friction:0,
          density:0.8

      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
    
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push ();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("purple");
      ellipse(0,0, this.radius);
      pop ();
    }
  };
