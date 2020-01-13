function Box(width, height, x, y, image){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.position = 'absolute';
    this.image = image;
    this.box = null;
    this.speed = 5;
    this.direction =1;
    var that = this;

    var maindiv = document.createElement('div');
    
    this.draw = function(){
        maindiv.style.width = this.width + 'px';
        maindiv.style.height = this.height + 'px';
        maindiv.style.left = this.x + 'px';
        maindiv.style.top = this.y + 'px';
        maindiv.style.position = this.position;
        maindiv.style.background = "url("+this.image +")";
        maindiv.style.backgroundSize = '50px 50px';
        this.box = maindiv;
        document.body.appendChild(maindiv);
    }
    this.move = function(){
        that.speed *=that.direction; //if(direction -1 5*-1 = -5 else 5*1=5)
        that.x += that.speed;
        this.draw();
        this.checkCollsion();  
    }
    this.checkCollsion = function(){
        if(that.x >= 550 || this.x<=0){
           that.direction = -that.direction;
        }
    }
}