class Box {

    constructor(x, y, width, height){
        //JSON format of data respresentation { key1:value1, key2:value2, key3:value3 }
        var options = {
            restitution: 1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){

        push();
        
        var pos = this.body.position;
        var angle = this.body.angle;

        

        translate(pos.x,pos.y);
        rotate(angle);

        rectMode(CENTER);
        fill('red');
        rect(0, 0, this.width, this.height);

        pop();
    }


}