class A{
    constructor(frd33){
        
         this.state1 = "frd1";
         this.state2 = "frd2";
         this.state3 = frd33;
    

    }
    myfunction(){
        console.log(this.state1);
        
    
    }
}
class B extends A{
    myfunction2(){
        
        console.log(this.myfunction3());
    }
    myfunction3(){
        console.log(this.state2);
        console.log(this.state3);
    }
}
let objA = new A("frd3");
let objB = new B();
objB.myfunction2();
objA.myfunction();