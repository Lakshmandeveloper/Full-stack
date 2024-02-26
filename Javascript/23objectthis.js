var firstname="michael"
var lastname="peter"
var sayHi ={
    firstname:"zoe",
    lastname :'lisa',
    greet : function( ){
        return `say Hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet());