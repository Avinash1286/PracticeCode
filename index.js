console.log("Hey Whats Up")
let button=document.getElementById('fetchData');
let view=document.getElementById('viewData');
button.addEventListener('click',function(){
    getData();
});

function getData(){
    fetch('https://api.github.com/users').then(response =>{    
        return response.json();
    }).then(data=>{
        // console.log(data);
       printData(data);    
    })
}

function printData(allData){
    let html="";
    allData.forEach(element => {
        console.log(element.login);
        html +=`<li>${element.login}</li>`
         
    });
    console.log(html);
     view.innerHTML=html;
}
