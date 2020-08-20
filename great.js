let button=document.getElementById('fetchData');
let view=document.getElementById('viewData');
let html=""
button.addEventListener('click',function(){
    theavi().then(data=>{
        console.log("first")
          
        data.forEach(element => {
            html +=`<li>${element.login}</li>`
           
        });
 
        console.log("second")
        view.innerHTML=html;
    })
  console.log("third")

});

async function theavi(){
    let response= await fetch('https://api.github.com/users');
    let data= await response.json();
    return data;
}

