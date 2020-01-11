function Box(width, height, x, y, border, backgroundcolor, image){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.border = border;
    this.position = 'absolute';
    this.backgroundcolor = backgroundcolor;
   // this.id = id;
    this.image = image;

    var div = document.createElement('div');
    this.draw = function(){
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.border = this.border;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.position = this.position;
        div.style.backgroundcolor = this.backgroundcolor;
        div.style.backgroundImage = "url("+this.image +")";
        div.style.backgroundSize = '50px 50px';
        document.body.appendChild(div);
        //div.setAttribute('id',this.id);
    }
}