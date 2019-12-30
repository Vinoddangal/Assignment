var box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.background = "RED";
document.body.appendChild(box);


var MoveBy = 10;


//load the box
window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.top = 0;
    box.style.left = 0;
});


//Moves box using arrow key
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft' :
            box.style.left = parseInt(box.style.left) - MoveBy + 'px'; //Move left
            break;
        case 'ArrowRight' :
            box.style.left = parseInt(box.style.left) + MoveBy + 'px'; //move Right
        break;
        case 'ArrowUp' : 
            box.style.top = parseInt(box.style.top) - MoveBy + 'px'; // Move Up
            break;
        case 'ArrowDown' :
            box.style.top = parseInt(box.style.top) + MoveBy + 'px'; // Move Down
            break;
    }
});