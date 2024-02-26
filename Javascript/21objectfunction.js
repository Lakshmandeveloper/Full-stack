let calc ={
    sum:function(a,b) { return a+b},
    sub:(a,b) => { return a-b}
}

calc.sum(2,7)
//calc.sub(3,4)


function language(name,country){           //es5
    this.name=name;
    this.country=country;
    this.greet= ( ) => { return `say hi to ${name}`}
}

var hindi= new language('hindi','India')
// language {name: 'hindi', country: 'India', greet: ƒ}



class language1{                         // es6
    constructor(name,country){
        this.name=name;
        this.country=country;
    }
    greet =( ) =>{ return `say hi to ${name}`}
}

var hindi=new language1('hindi','India')

