// var Box = document.createElement("div");
// Box.style.width = "600px";
// Box.style.height = "610px";
// Box.style.position = "absolute";
// Box.style.outline = "1px solid black";
// document.body.appendChild(Box);

// var box1 = document.createElement("div");
// box1.style.width = "100px";
// box1.style.height = "100px";
// box1.style.position = "relative";
// box1.style.background = "SKYBLUE";
// document.body.appendChild(box1);

// var box2 = document.createElement("div");
// box2.style.width = "100px";
// box2.style.height = "100px";
// box2.style.position = "relative";
// box2.style.background = "RED";
// document.body.appendChild(box2);

// var MoveLR = 0;
// var MoveUD = 0;
// function MoveBox(press)
// {
//     if(press.keyCode==37 || press.keyCode==65)  // Move Left
//     {
//         // if(MoveLR>0)
//         // {
//         // MoveLR -=5;
//         // box1.style.left = MoveLR + 'px';
//         // }
//     }

//     if(press.keyCode==39 || press.keyCode==68)  // Move Right
//     {
//         // if(MoveLR<500)
//         // {
//         //     MoveLR +=5;
//         //     box1.style.left = MoveLR + 'px';
//         // }
//     }

//     if(press.keyCode==40 || press.keyCode==83)  // Move Down 
//     {
//         // if(MoveUD>-510)
//         // {
//         //     MoveUD -=5;
//         //     box1.style.bottom =    MoveUD + 'px';
//         // }
//     }

//     if(press.keyCode==38 || press.keyCode==87) // Move Up
//     {
//         // if(MoveUD<0)
//         // {
//         //     MoveUD +=5;
//         //     box1.style.bottom = MoveUD + 'px';
//         // }
//     }
// }
// // document.onkeydown = MoveBox;

// var toppos = 0;
// var inc = 0;
// function draw(top){
//     box1.style.left = top +'px';
//     box2.style.left = top +'px';
// }
// setInterval(function()
// {
//     toppos += inc;
//     if(toppos > 495) //check if ball reach at floor
//     { 
//         inc -=5;
//     }
//     else if (toppos <=0){
//         inc +=5;
//     }
//     draw(toppos);
// }
// , 100);

