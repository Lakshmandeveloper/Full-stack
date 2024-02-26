let dbobj={ }
dbobj.user=[
    {
        name:"alvin",
        city:'boston'
    },
    {
        name:'priya',
        city:'paris'
    }
]
dbobj.dbquery={

        sum:function(a,b) { return a+b},
        sub:(a,b) => { return a-b}
    }

  module.exports=dbobj; //es5

  //export default dbobj //es6
