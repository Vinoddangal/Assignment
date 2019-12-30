var BoxCollision = document.createElement("div");
BoxCollision.style.width = "100px";
BoxCollision.style.height = "100px";
BoxCollision.style.background = "LIGHTGREEN";
document.body.appendChild(BoxCollision);


var MoveBy = 5;

window,addEventListener('load', () =>{
    BoxCollision.style.position = "absolute";
    BoxCollision.style.left = 0;
    BoxCollision.style.top = 0;
});

window.addEventListener('keydown',(e) => {
    switch (e.key) {
        case 'ArrowLeft' :
            BoxCollision.style.left = parseInt(BoxCollision.style.left) - MoveBy + 'px';
            break;
        case 'ArrowRight' :
            BoxCollision.style.left = parseInt(BoxCollision.style.left) + MoveBy + 'px';
            break;
        case 'ArrowUp' :
            BoxCollision.style.top = parseInt(BoxCollision.style.top) - MoveBy + 'px';
            break;
        case 'ArrowDown' :
            BoxCollision.style.top = parseInt(BoxCollision.style.top) + MoveBy + 'px';
            break;
    }
});