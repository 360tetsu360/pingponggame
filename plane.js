function Plane(){
    this.x = width/2;

    this.show = function(){
        fill(255);
        rect(this.x -= 40, 450,80,20)
    }
    this.move = function(dir){
        if(dir <= 40){
            dir = 40;
        }
        if(dir >= 600){
            dir = 600;
        }
        this.x = dir;
    }
    this.return = function(){
        return this.x
    }
}