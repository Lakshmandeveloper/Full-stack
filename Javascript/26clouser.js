// global scope
// local scope
// enclose something { }


 var a=10;
 function add( ){
    var b=20;
    return a+b;

 }
 console.log("add>>",add( ))
 console.log("add>>", a)
 console.log("add>>", b) // This is gonna throw an error bcz b is not a global 

