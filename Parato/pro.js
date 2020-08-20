console.log("I am Pro");

function fun1(){
    return new Promise(function(resolve,reject){

        setTimeout(() => {
            let cond=true;
            if(cond){
                console.log("Problem Solved");
                resolve();
            }
            else{
                console.log("We are anable to solve this problem");
                reject();
            }
        }, 2000);

    })
}

fun1().then(setData).catch(doSomething);

function setData(){
    console.log("Problem Solved Bro Congralatuation");
    
}

function doSomething(){
    
    console.log("Problem not solved bro i am sorry");
}