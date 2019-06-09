(function () {
    var container;//用于存储已经渲染到页面上的食物
    function Food(obj) { //
        obj = obj || {};//防止用户不传参数，下面代码报错
        this.width = obj.width || 20;
        this.height = obj.height ||20;
        this.bgc = obj.bgc || '#FDFA65';
        this.x = obj.x || 0;
        this.y = obj.y || 0;
    }
    Food.prototype.render = function () {
        //把原来的食物清除掉
        if(container){
            map.removeChild(container);
        }
        var div = document.createElement('div');
        container = div;//container也指向食物

        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.bgc;
        //food只new一次,所以获取随机数的代码不写在构造函数中，因为如果蛇吃到食物了，我们需要重新调用render方法
        //食物应在格子中
        this.x = Tool.getRandom(0,map.offsetWidth/this.width-1)*this.width;
        this.y = Tool.getRandom(0,map.offsetHeight/this.height-1)*this.height;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.position = 'absolute'
        map.appendChild(div);
    };
    window.Food = Food;//由于food.js里面所有代码放在了自调用函数中，导致全局无法获取Food函数
})();


