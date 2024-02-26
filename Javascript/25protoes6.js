class geo{
    constructor( ){
        this.lat=34.67
        this .long=78.99
    }
}

class language1 extends geo{
    constructor(name,country){
        super( )  //used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor
        this .name=name
        this.country=country
}
greet =( ) => { return `say Hi to ${name}`}

}

var hindi =new language1('hindi', "india")

//>hindi
//////////////////////////////// language1 {lat: 34.67, long: 78.99, name: 'hindi', country: 'india', greet: ƒ}