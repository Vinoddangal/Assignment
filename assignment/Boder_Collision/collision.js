var Box = document.createElement("div");
Box.style.width = "1350px";
Box.style.height = "610px";
Box.style.position = "absolute";
Box.style.outline = "1px solid black";
document.body.appendChild(Box);

var BoxCollision = document.createElement("div");
BoxCollision.style.width = "100px";
BoxCollision.style.height = "100px";
BoxCollision.style.position = "relative";
BoxCollision.style.background = "SKYBLUE";
document.body.appendChild(BoxCollision);

var MoveLR = 0;
var MoveUD = 0;
function MoveBox(press)
{
    if(press.keyCode==37 || press.keyCode==65)  // Move Left
    {
        if(MoveLR>0)
        {
        MoveLR -=5;
        BoxCollision.style.left = MoveLR + 'px';
        }
    }

    if(press.keyCode==39 || press.keyCode==68)  // Move Right
    {
        if(MoveLR<1250)
        {
            MoveLR +=5;
            BoxCollision.style.left = MoveLR + 'px';
        }
    }

    if(press.keyCode==40 || press.keyCode==83)  // Move Down 
    {
        if(MoveUD>-510)
        {
            MoveUD -=5;
            BoxCollision.style.bottom =    MoveUD + 'px';
        }
    }

    if(press.keyCode==38 || press.keyCode==87) // Move Up
    {
        if(MoveUD<0)
        {
            MoveUD +=5;
            BoxCollision.style.bottom = MoveUD + 'px';
        }
    }
}
document.onkeydown = MoveBox;