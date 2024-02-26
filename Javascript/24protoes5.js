function Human (name,city){
    this.name=name
    this.city=city
}

function Robot(name){
    this.name=name
    this.legs=2
    this.age=10
}

var john= new Human('john','delhi')


var sophie=new Robot('sophie','penumantra')

Human.prototype=new Robot()

var navin=new Human('navin', "india")
