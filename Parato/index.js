console.log("This is Ajax Practice");

let fetch=document.getElementById('fetchData');
let getData=document.getElementById('getData');

let list=document.getElementById('list');

fetch.addEventListener('click',fetchDataFun);

getData.addEventListener('click',getDataFun);

function fetchDataFun(){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','hello.txt',true);
    //xhr.getResponseHeader('Content-type', 'application/json');
    xhr.onprogress=function(){
        // console.log('loading');
    }
    xhr.onload=function(){
        if(this.status==200){
            let obj=JSON.parse(this.responseText);
            let str="";
            for (key in obj) {
              str +=`<li>${obj[key].author}</li>`
            }
            list.innerHTML=str;
            console.log(obj);
        }
        else{
            console.log('oophs! something went wrong')
        }
    }

    xhr.send();
}

function getDataFun(){
    


}
