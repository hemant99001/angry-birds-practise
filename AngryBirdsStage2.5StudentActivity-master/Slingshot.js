class  Slingshot{
    constructor(body_A,body_B){
       var  options  = {
         body_A:body_A,
         body_B:body_B,
         stifness:0.04,
         length:10
       }
       this.slingshot = Constraint.create(options);
       World.add(world,this.slingshot);
    }
    display(){
        var point_A = this.slingshot.bodyA.position;
        var point_B = this.slingshot.bodyA.position;
        line(point_A.x,point_A.y,point_B.x,point_B.y);
    }
        }
