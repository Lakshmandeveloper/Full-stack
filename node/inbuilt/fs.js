
var fs=require('fs');
// fs.writeFile('Mycode.txt',"welcome to node",(err) =>{
//         if(err) throw err;
//         console.log('File is created')
// })

// fs.appendFile('Mycode.txt',"welcome to node2 \n",(err) =>{
//         if(err) throw err;
//         console.log('File is created')
// })


// fs.readFile('Mycode.txt','utf-8',(err,data) =>{
//          if(err) throw err;
//          console.log(data)
// })


// fs.rename('Mycode.txt','Mytext.txt',(err) =>{
//         if(err) throws(err);
//         console.log('File renamed')
// })

fs.unlink('Mytext.txt',(err) =>{
        if(err) throws(err);
        console.log('File Deleted')
})