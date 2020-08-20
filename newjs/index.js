let addButton=document.getElementById('addNotes');
let getText=document.getElementById('addTxt');
let getTitle=document.getElementById('addTitle');
let notes_collection=document.getElementById('notes');
showNotes()
addButton.addEventListener('click',function(e){
 let notes=localStorage.getItem('notes');
  if(notes==null){
      notesObj=[];
  }
  else{
      notesObj=JSON.parse(notes);
  }
  let info={
    title:getTitle.value,
    notes:getText.value
  }
  notesObj.push(info);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  getText.value="";
  getTitle.value="";
  console.log(notesObj);
  showNotes();
})


   function showNotes(){
    let html="";
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.forEach(function(element,index) {
        html +=`<div class=" noteCard my-2 mx-3 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.notes}</p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`
    });

    if(notesObj.length !=0){
        notes_collection.innerHTML=html;
    }
    else{
        notes_collection.innerHTML="<h5>You have no notes to show! use 'Add Notes' section above to add notes.</h5>"
    }
}

function deleteNotes(index){
  let notes=localStorage.getItem('notes');
  if(notes==null && titles==null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  showNotes();
}

let search=document.getElementById('search');
search.addEventListener('input',function(){
  let searchText=search.value.toLowerCase();
  let noteCard=document.getElementsByClassName('noteCard');
  Array.from(noteCard).forEach(function(element) {
  let cardText=element.getElementsByTagName('p')[0].innerText.toLowerCase();
  // console.log(searchText,cardText)
  if(cardText.includes(searchText)){
    element.style.display='block';
  }
  else{
    element.style.display='none';
  }
  });
})



