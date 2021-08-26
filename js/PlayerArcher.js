class playerArcher{

    constructor(x, y, w, h){

        var options = {
            isStatic : true
        };
        this.image = loadImage("assets/playerArcher.png");

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);

        Matter.Body.setAngle(this.body, -PI/2);

        World.add(world, this.body);

    }

    display(){
        
        var pos = this.body.position;
        var angle = this.angle;

        translate(pos.x, pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);

    /*    if(move === "UP" &&  PlayerArcher.body.angle < 1.77){

            angleValue = -0.1;

        } else {

            angleValue = 0.1;
        }

        if(move === "DOWN" &&  PlayerArcher.body.angle > 1.47){

            angleValue = -0.1;

        } else {
            
            angleValue = 0.1;
        }*/

    }
    
}