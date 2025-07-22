class Snake{
    constructor(select){
        this.map=document.querySelector(select)
        //蛇的运动方向
        this.direction="right"
        //蛇的数组(把蛇的头和身体都会存在数组中，头从数组第0位开始)
        this.snakelist=[]
        //调用创建蛇函数
        this.createSnake()
    }
    //创建蛇头的函数
    createHead(){
        //获取数组当中的第0位找到蛇头
        const head=this.snakelist[0]
        console.log(head)
        //定义坐标
        const pos={x:0,y:0}
        if(head){
            //如果有蛇头那么创建新的蛇头放到原先蛇头后面坐标位置上
            //新蛇头坐标一定改变，改变方向需要罗列一下
            switch(this.direction){
                case "left":
                    pos.x=head.offsetLeft-20
                    pos.y=head.offsetTop
                    break;
                case "right":
                    pos.x=head.offsetLeft+20
                    pos.y=head.offsetTop
                    break;
                case "top":
                    pos.x = head.offsetLeft
                    pos.y = head.offsetTop-20
                    break;
                case "bottom":
                    pos.x = head.offsetLeft
                    pos.y = head.offsetTop+20
                default:
                    break;
            }
            //把原先的蛇头变为身体
            head.className="body"
        }
        //创建蛇头
        const div=document.createElement("div")
        //定义样式
        div.className="head"
        //把蛇头存入数组
        this.snakelist.unshift(div)
        //给蛇头定义坐标
        div.style.left=pos.x+"px"
        div.style.top=pos.y+"px"
        //放到地图中
        this.map.appendChild(div)

    }
    //创建一条蛇
    createSnake(){
        for(let i=0;i<4;i++){
            this.createHead()
        }
    }
    //蛇移动的方法
    move(){
        //蛇头前面出现蛇头，原来蛇头变蛇身，末尾删除一个蛇身
        //从数组当中移除
        const body=this.snakelist.pop()
        //从页面删除
        body.remove()
        //新增蛇头
        this.createHead()


    }
    isEat(foodX,foodY){
        //判断食物有没有吃到
        const head = this.snakelist[0]
        const headX=head.offsetLeft
        const headY=head.offsetTop
       if(foodX===headX && foodY===headY){
        return true
       }
       return false
    }
    //判断蛇是否死亡
    //是否撞墙
    isDie(){
        //判断蛇头是否到边界
        const head = this.snakelist[0]
        const headX = head.offsetLeft
        const headY = head.offsetTop
        if(headX<0 || headY<0 || headX>=this.map.clientWidth || headY>=this.map.clientHeight){
            return true
        }
            return false
    }

}