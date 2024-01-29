// function add(){
//     var a = document.getElementById("first").value;
//     var b=document.getElementById("second").value;
//     var out= Number(a)+Number(b);
//     document.getElementById('output').innerText=`Sum of Numbers is ${out}`
// }

// function sub(){
//     var a = document.getElementById("first").value;
//     var b=document.getElementById("second").value;
//     var out= Number(a)-Number(b);
//     document.getElementById('output').innerText=`diff of Numbers is ${out}`
// }

function calc(opt){
    var a =document.getElementById('first').value;
    var b=document.getElementById('second').value;
    var out;
    if(opt=='add'){
        out=`sum is ${Number(a)+Number(b)}`;
    } else if(opt=='sub'){
        out=`sub is ${Number(a)-Number(b)}`;
    }else if(opt=='mul'){
        out=`Mul is ${Number(a)*Number(b)}`;
    }else if(opt=='div'){
        out=`divison is ${Number(a)/Number(b)}`;
    }
    else if(opt=='mod'){
        out=`Modulus is ${Number(a)%Number(b)}`;
    }


    document.getElementById("output").innerText=out
}