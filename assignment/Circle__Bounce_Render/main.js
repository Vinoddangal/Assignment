var Box = document.getElementById('Box');
var ball = document.getElementById('ball');


Box.style.top = "120px";
Box.style.margin = "auto";
Box.style.width = "300px";
Box.style.height = "300px";
Box.style.position = "relative";
Box.style.outline = "10px solid brown";


ball.style.left = "120px";
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.borderRadius = "50%";
ball.style.background = "RED";
ball.style.position = "relative";

var toppos = 0;
var inc = 0;
function draw(top){
    ball.style.top = top +'px';
}
setInterval(function()
{
    toppos += inc;
    if(toppos > 245) //check if ball reach at floor
    { 
        inc -=5;
    }
    else if (toppos <=0){
        inc +=5;
    }
    draw(toppos);
}
, 10);