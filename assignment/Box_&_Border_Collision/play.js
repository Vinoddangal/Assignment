function main(){
    this.boxarr = new Array();
    var bx = [];
    var xv = [];

    var that = this;
    this.initBox = function(){
        var xpos = 0;
        for (var i=0; i<2; i++){
            var id= "box"+1;
            this.obj = new Box(50,50,xpos,250, "", "red", "img/box.png");
            this.boxarr.push(this.obj);
            xpos +=((container.width) - 50);
            
        }
    }
    this.drawBox = function(){
        for(var i=1; i<=this.boxarr.length; i++)
        this.boxarr[i-1].draw();
    }

    this.Move = function(){
    for(var i = 0; i<this.boxarr.length; i++){
        bx[i] = this.boxarr[i].x;
        //console.log(this.boxarr[1].x);
         
    }
        xv[0] = 5;
        xv[1]= -5;
    }

    this.gameloop =setInterval(function(){
        for(var i=0; i< that.boxarr.length; i++)
        {
            bx[i] += xv[i];
            that.boxarr[i].x = bx[i];
            //console.log(xv[0]);
            if (bx[i] < 0 && xv[i]<0){
                xv[i] =-xv[i];
               // console.log("left");
            }
            if(bx[i] > 550 && xv[i] > 0){
                xv[i] = -xv[i];
               // console.log("right");
            }

            //collision
            if(i==0){
                if(bx[i] + 50 > bx[i+1] && 
                    bx[i] < bx[i+1] +50)
                {
                    xv[i] = -xv[i];
                }
            }
            else{
                if(bx[i-1] +50 > bx[i] && 
                    bx[i-1] < bx[i] + 50)
                {
                    xv[i] = -xv[i];
                }
            }
            that.drawBox();
        }
        
    },100);
}


var container = new Box(600,600,0,0,"3px solid #8B4513","blue","");
container.draw();
var obj = new main();
obj.initBox();
obj.drawBox();
obj.Move();
obj.gameloop;