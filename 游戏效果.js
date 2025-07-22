let isGameOver=false
class Game{
    constructor(select,scoreEle,gameoverbg){
        this.startbtn=document.querySelector("#start")
        this.gameoverimg=document.querySelector(gameoverbg)
        //地图
        this.map=document.querySelector(select)
        //计分板
        this.scoreEle = document.querySelector(scoreEle)
        //食物
        this.food=new Food(select)
        //蛇
        this.snake=new Snake(select)
        //定义计时器
        this.timer=0
        //得分
        
        this.cunt=0
    }
    //定义游戏开始方法
    start(){
        
        this.gameoverimg.style.display="none"
        this.timer= setInterval(() => {
            //让蛇动起来
            this.snake.move()
            //判断是否迟到食物
            if(this.snake.isEat(this.food.x,this.food.y)){
                //吃到食物蛇变长，调用增加蛇头方法
                this.snake.createHead()
                //食物位置更新
                this.food.foodPos()
               //调用更新增加分数
               this.scorechange()
            }
            //判断蛇是否死亡
            if (this.snake.isDie()){
                clearInterval(this.timer)
                this.gameover()
            }
        },100);
    }
    //暂停
    pause() {
        clearInterval(this.timer)
    }
    //重新开始
    restart() {
        //释放开始按钮
        this.startbtn.disabled = false
        window.location.reload()
    }
    //改变方向
    change(type) {
        this.snake.direction = type
    }
    //得分增加
    scorechange(){
        //得分增加
        this.cunt++
        this.scoreEle.innerText = this.cunt
    }
    //游戏结束
    gameover(){
        this.gameoverimg.style.display="block"
        isGameOver=true
        const audio = document.querySelector('audio')
        audio.pause()
        new Audio('./结束音乐.mp3').play()
        // 禁用掉开始按钮
        this.startbtn.disabled=true

        
    }
    
}