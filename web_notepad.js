console.log('this is web notepad')
let heading = document.getElementById('heading')
//console.log('sessionStorage.length', sessionStorage.length)
showNotes()

/*
heading.addEventListener('click', function () {
        heading.value = ''
    console.log('sessionStorage', sessionStorage)
    console.log('heading.value', heading.value)
})




heading.addEventListener('blur', function () {
    if (heading.value == '') {
        heading.value = 'Topic'
        console.log('heading.value', heading.value)
    }
})
*/






let addTxt = document.getElementById("addTxt");
//console.log('addTxt', addTxt.value)
let btn = document.getElementById('addBtn')
btn.addEventListener('click', function (e) {
    // making heading value array
    let val = localStorage.getItem("val")
    //console.log('val', val)
    if (val == null) {
        var valobj = [];
        //console.log('inside val null');
    }

    else {
    
        valobj = JSON.parse(val)
        //console.log('valobj[1]', valobj[1])
    
    /*    
     // this too works 
        noteobj += notes;  
        console.log('noteobj1', noteobj);
    
        
        */
    }

    console.log('valobj', valobj)
    valobj.push(heading.value)
    localStorage.setItem('val', JSON.stringify(valobj))

    let notes = localStorage.getItem("notes")
    //console.log('notes', notes)
    if (notes == null) {
        var noteobj = [];
        //console.log('inside null');
    }


    /*
        // this too works 
        noteobj += notes;  
        console.log('noteobj1', noteobj);
    
        */
    else {
        noteobj = JSON.parse(notes)
        //console.log('noteobj', noteobj)
    }

    //console.log('type obj', typeof (noteobj))
    noteobj.push(addTxt.value)

    localStorage.setItem('notes', JSON.stringify(noteobj))
    
    heading.value = '';
    addTxt.value = '';
    showNotes()


})




var ind = 0;

function showNotes() {
    // making heading value array
    let val = localStorage.getItem("val")
    //console.log('val', val)
    if (val == null) {
        var valobj = [];
        //console.log('inside val null');
    }


    /*
        // this too works 
        noteobj += notes;  
        console.log('noteobj1', noteobj);
    
        */
    else {
        valobj = JSON.parse(val)
        //console.log('valobj[1]', valobj)
    }

    //console.log('type valobj', typeof (valobj))

    let notes = localStorage.getItem("notes")
    //console.log('notes', notes)
    if (notes == null) {
        var noteobj = [];
        //console.log('inside null');
    }


    /*
        // this too works 
        noteobj += notes;  
        console.log('noteobj1', noteobj);
    
        */
    else {
        noteobj = JSON.parse(notes)
        //console.log('noteobj', noteobj)
    }
    

    //console.log('type obj', typeof (noteobj))
    ind = 0;
    let notesElm = document.getElementById("notes");
    var html = '';
    Array.from(noteobj).forEach(function (element, index) {

        //console.log('index', index, "valobj[ind]", valobj[ind], "typeof(valobj[ind])", typeof (valobj[ind]))
        if (valobj[ind] == 'Topic' || valobj[ind] == '' || valobj[ind] == null) {

            //console.log('n')
            html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" style="color: #660066">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
            ind += 1;

        }
        else {
            //console.log('noteobj', element, 'index', index, "ind", ind)
            //console.log("ind", ind, "valobj[ind]", valobj[ind], 'element', element, 'index', index);
            html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="${index}e"style="color: #660066">${valobj[ind]}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id,${ind})" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
            //document.getElementById('notes').innerHTML += html;
            ind += 1;
        }
        //document.getElementById('notes').innerHTML = html;
        //console.log('html',html)
    });
    //console.log('html',html)

    if (noteobj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
    
    noteobj = [];
}

function deleteNote(index, inde) {
    // making heading value array
    let val = localStorage.getItem("val")
    //console.log('val', val)
    if (val == null) {
        var valobj = [];
        //console.log('inside val null');
    }


    /*
        // this too works 
        noteobj += notes;  
        console.log('noteobj1', noteobj);
    
        */
    else {
        valobj = JSON.parse(val)
        //console.log('valobj[1]', valobj)
    }

    //console.log('type valobj', typeof (valobj))

    let notes = localStorage.getItem("notes")
    //console.log('notes', notes)
    if (notes == null) {
        var noteobj = [];
        //console.log('inside null');
    }


    /*
        // this too works 
        noteobj += notes;  
        console.log('noteobj1', noteobj);
    
        */
    else {
        noteobj = JSON.parse(notes)
        //console.log('noteobj', noteobj)
    }

    //console.log('type obj', typeof (noteobj))
    ind = 0;
    noteobj.splice(index, 1)
    valobj.splice(inde, 1)
    localStorage.setItem('notes', JSON.stringify(noteobj))
    localStorage.setItem('val', JSON.stringify(valobj))
    showNotes()
}


let search = document.getElementById('searchTxt')
search.addEventListener('input',function(){
    //console.log("searching")
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            //console.log('inputval',inputVal);
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }}
        )
    /*
    // this is not working
        Array.from(noteCards).forEach(function(element){
            let tpc = document.getElementsByTagName('h5').innerText
            if(tpc.includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
        }
    )*/
    })
    































