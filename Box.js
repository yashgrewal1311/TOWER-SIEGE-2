class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        'restitution':0.4,
        'friction':0.3,
        'density':0.4

    }
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.visibility = 255;

    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke(100,200,100);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      strokeWeight(4);
      stroke(100,200,100);
      rect(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
}
