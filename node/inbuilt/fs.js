var fs = require('fs');
fs.writeFile('mycode.txt','WELCOME TO NODEJS',(err)=>{
        if(err) throws(err);
        console.log("file is created")
})