(function () {
    var arr = [];
    function Snake(obj) {
      obj = obj || {};
      this.width = obj.width || 20;
      this.height =obj.height || 20;
      this.direction ='right';//默认方向向右
      this.body = [
          //真正蛇的坐标，要用x/y*蛇节的宽高
          {x: 3, y: 2, col: '#9C5715'},//水平方向第三个格子，垂直方向第2个
          {x: 2, y: 2, col: '#B56815'},
          {x: 1, y: 2, col: '#D07E21'}
      ]
    }
    Snake.prototype.render= function () {
        //清除原来的蛇
        for(var i = 0;i<arr.length;i++){
            map.removeChild(arr[0]);//删掉画面中的div
            arr.splice(0,1);//删掉存在数组里面的div
        }
        this.body.forEach(function (item) {
            var div = document.createElement('div');
            arr.push(div);
            div.style.width = this.width+'px';
            div.style.height = this.height +'px';
            div.style.backgroundColor = item.col;
            div.style.left = item.x * this.width+'px';
            div.style.top = item.y * this.height+'px';
            div.style.position = 'absolute';
            map.appendChild(div)
        }.bind(this))//指向实例的render里的this被绑定进来
    };
    Snake.prototype.move=function (){
        //修改this.body中每一个对象的x,y的值
        for(var i = this.body.length-1; i>0;i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        //修改蛇头坐标
        // this.body[0].x +=1
        switch (this.direction) {
            case 'left':
                this.body[0].x -=1;
                break;
            case 'right':
                this.body[0].x +=1;
                break;
            case 'top':
                this.body[0].y -=1;
                break;
            case 'bottom':
                this.body[0].y +=1;
                break;
        }
    };
   window.Snake =Snake;
})();
