var toppos = 1;
var gravity = 1;

setInterval(function()
{
    gravity +=1;
    toppos += gravity;

    if(toppos >= 550) //check if ball reach at floor
    { 
        gravity = -gravity; // reset gravity value
        toppos += gravity;
        
    }

    if(toppos <=3)
        {
            toppos +=7;
        }

    ball.style.top = toppos +"px";
    console.log(toppos);
}
, 100);