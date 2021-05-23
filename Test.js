class Ground{
     constructor(x,y,width,height){
         var options={
        'isStatic': true
         }
         this.height=height
         this.width= width
         this.body= Bodies.rectangle(x,y,this.width,this.height,options)
         World . add(world,this.body)

     }

    display(){
        var pos = this.body.position
        fill('brown')
        rectMode(CENTER)
        rect(pos.x,pos.y,this.height,this.width)
        
    


    }
}