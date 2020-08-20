let imgBox=document.querySelector('.imageBox');
let divBox=document.getElementsByClassName('whiteboxes');

imgBox.addEventListener('dragstart',(e)=>{
    console.log("Drag Start");
    e.target.className +=" hold"
    setTimeout(() => {
        e.target.className="hide"
    }, 0);
});

imgBox.addEventListener('dragend',(e)=>{
    console.log("Drag End");
    e.target.className="imageBox";
});

for(box of divBox){
    box.addEventListener('dragover',(e)=>{
        console.log('Drag Over');
        e.preventDefault();
        
    });

    box.addEventListener('dragenter',()=>{
        console.log('Drag Enter');
    });

    box.addEventListener('dragleave',()=>{
        console.log('Drag Leave');
    });

    box.addEventListener('drop',(e)=>{
        console.log('Drag Drop');
        e.target.append(imgBox)
    });
}

