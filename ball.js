function ball(){
    this.x = width/2;
    this.y = height/2
    var bounce;
    var color = 255;
    var speed = 5;
    var score = 0;
    var game = true;
    this.plane = function(dir){
        
        if(dir <= 40){
            dir = 40;
        }
        if(dir >= 600){
            dir = 600;
        }
        var leftEnd = dir - 40;
        var rightEnd = dir + 40; 
        if(game){
            if(this.y >= 435){
                if(this.x >= leftEnd && this.x <= rightEnd){
                    if(bounce === 3){
                        bounce = 2;
                        score += 1;
                        speed += 0.5;
                    }else{
                        bounce = 1;
                        score += 1;
                        speed += 0.5;
                    }
            }
        }
        }   
    }
    this.bounce = function(){
        if(this.x <= 10){
            if(bounce === 4){
                bounce = 3;
                speed += 0.1;
            }else{bounce = 2;}
        }else if(this.y <= 0){
            if(bounce === 1){
                bounce = 4;
                speed += 0.1;
            }else{
                bounce = 3;
                speed += 0.1;
            }
        }else if(this.x >= 630){
            if(bounce === 2){
                bounce = 1;
                speed += 0.1;
            }else{bounce = 4;}
        }else if(this.y > 480){
            fill(255);
            textAlign(LEFT);
            text("GAME OVER", 230, 240);
            color = 0;
            speed = 0;
            game = false;
            var elem = document.getElementById("GameMaster").innerHTML = '<p class="GameOver">GAME OVER </p>' + '<p class="final_score">' + 'your score was:' + str(score) + '</p>';
        }
        
    }    
    this.move = function(){
        if(bounce === 1){
            this.y -= speed;
            this.x -= speed;
        }else if(bounce === 2){
            this.y -= speed;
            this.x += speed;
        }else if(bounce === 3){
            this.y += speed;
            this.x += speed;
        }else if(bounce === 4){
            this.y += speed;
            this.x -= speed;
        }else if(bounce === 5){
            this.x = 1000;
            this.y = 600;
        }
        else{
            this.y += speed/2;
        }
        
    } 
    this.score = function(){
        return score;
    }

    this.show = function(){
        fill(color);
        ellipse(this.x, this.y, 30, 30);
    }



}