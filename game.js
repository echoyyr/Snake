(function (){
    function Game() {
        this.food = new Food();
        this.snake = new Snake();
    }

    Game.prototype.start = function () {
        // 1.蛇和食物渲染到页面上
        this.food.render();
        // 2.让蛇动起来
        var timeid = setInterval(function () {
            this.snake.move();//默认指向window
            //3.通过格子数判断蛇头是否撞墙
            var maxX =  map.offsetWidth/this.snake.width-1;
            var maxY = map.offsetHeight/this.snake.height -1;
            //获取到蛇头
            var head = this.snake.body[0];
            if(head.x<0||head.y<0||head.x>maxX||head.y>maxY){
                alert('game over');
                clearInterval(timeid);
                return;//位置已经超出，就不需要渲染了
            }
            this.snake.render();//新的位置已经出来了，已经判断了，所以写在判断下方

            //4.判断蛇吃到食物，重新渲染一个新的食物，蛇要变长
            //4.1获取食物的坐标
                // this.food.x
                // this.food.y
            //4.2获取蛇头的坐标
            var x = this.snake.body[0].x*this.snake.width;
            var y = this.snake.body[0].y*this.snake.height;
            //4.3判断是否重合
            if(this.food.x == x && this.food.y == y){
               this.food.render();
               // this.snake.body.push({//会闪一下
               //     x:0,
               //     y:0,
               //     col:'red'
               //  })
               var last = this.snake.body[this.snake.body.length-1];//把最后一个蛇节的数据地址复制给了last
               this.snake.body.push({
                   x: last.x,
                   y: last.y,
                   col: last.col
               })
            }
            this.snake.render();

        }.bind(this),200)//指向实例的this(Game)
        //3.监听键盘事件
        document.onkeydown = function (e) {
            // console.log(e.key)
            switch (e.keyCode) {
                case 37:
                    if(this.snake.direction === 'right')break;//相反的方向
                    this.snake.direction = 'left';//this默认指向document
                    break;
                case 38:
                    if(this.snake.direction === 'bottom')break;
                    this.snake.direction = 'top';
                    break;
                case 39:
                    if(this.snake.direction === 'left')break;
                    this.snake.direction = 'right';
                    break;
                case 40:
                    if(this.snake.direction === 'top')break;
                    this.snake.direction = 'bottom';
                    break;
            }
        }.bind(this)
    };


    window.Game  = Game;
})();
