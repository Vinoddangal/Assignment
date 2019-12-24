var boxred = document.createElement("div");
boxred.style.width = "100px";
boxred.style.height = "100px";
boxred.style.background = "RED";
boxred.style.position = "absolute";
document.body.appendChild(boxred);

var boxyellow = document.createElement("div");
boxyellow.style.width = "100px";
boxyellow.style.height = "100px";
boxyellow.style.background = "YELLOW";
boxyellow.style.left = "110px";
boxyellow.style.position = "absolute";
document.body.appendChild(boxyellow);

// var canvas = document.getElementById("mycanves");
// var ctx = canvas.getContext("2d");
       
// function rect(x,y,w,h,color)
//     {
        // ctx.beginPath();
        // ctx.rect(x,y,w,h);
        // ctx.fillStyle = color;
        // ctx.fill();
        // ctx.closePath();
//     }
// rect(10, 20, 30, 50 , "RED");
// rect(60, 20, 30, 50, "YELLOW");