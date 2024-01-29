 let url="http://localhost:4566/city";

function test( ){
    document.getElementById('cooupon').style.visibility ="visible"
}

function closediv( ){

    document.getElementById('cooupon').style.visibility ="hidden"
}

function changeColor(color){
    if(color=='red'){
        document.getElementById('cooupon').style.backgroundColor="red"
    }else if(color=='green'){
        document.getElementById('cooupon').style.backgroundColor="green"
    }

}

function getcity(){

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
                let element=document.createElement('option')
                let text=document.createTextNode(data[i].cityname)
                element.appendChild(text)
                
                document.getElementById('city').appendChild(element)
        }
    })
}
