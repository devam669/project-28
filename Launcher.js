class Launcher{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.08,
        length:20
    
    
    }

    this.pointB=pointB
    this.launcher=Constraint.create(options)
    World.add(world,this.sling)
    }
    fly(){
    this.launcher.bodyA= null
    
    }
    attach(body){
    this.launcher.bodyA=body
    
    }
    display(){
        image(this.launcher1,200,20)
        image(this.launcher2,170,20)
    if(this.launcher.bodyA){
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    push()
    
    if(pointA.x<220){
        stroke(48,22,8)
        strokeWeight(7)
        line(pointA.x-30,pointA.y,pointB.x,pointB.y)
        line(pointA.x-30,pointA.y,pointB.x+30,pointB.y-3)
        image(this.sling3,pointA.x-30,pointA.y-10,15,30)
    
    }
    else{
    stroke(48,22,8)
    strokeWeight(3)
    line(pointA.x-30,pointA.y,pointB.x,pointB.y)
    line(pointA.x-30,pointA.y,pointB.x+30,pointB.y-3)
    image(this.sling3,pointA.x+25,pointA.y-10,15,30)
    }
    pop()
    }
    }
    }