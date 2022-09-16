

function getnotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        var noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes)
    }
    return noteobj
}
function getval() {
    // making heading value array
    let val = localStorage.getItem("val");
    if (val == null) {
        var valobj = [];
    }
    else {
        valobj = JSON.parse(val);
    }
    return valobj;
}

let addtxt = document.getElementById('addTxt');
let btn = document.getElementById('addBtn');
btn.addEventListener('click', function () {
    let myobj = getnotes();
    console.log(myobj);
    myobj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(myobj));
    addtxt.value = '';
    myobj = getval();
    myobj.push(heading.value);
    localStorage.setItem('val', JSON.stringify(myobj));
    heading.value = '';
    showNotes()
})

function showNotes() {
    let valobj = getval();
    let noteobj = getnotes();
    ind = 0;
    let notesElm = document.getElementById("notes");
    var html = '';
    Array.from(noteobj).forEach(function (element, index) {
        if (valobj[ind] == 'Topic' || valobj[ind] == '' || valobj[ind] == null) {
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
            html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="${index}e"style="color: #660066">${valobj[ind]}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id,${ind})" class="btn btn-primary">Delete Note</button>
                        <button id="${index}"onclick="mrkimp(this.id)" class="btn btn-primary"> mark imp </button>
                    </div>
                </div>`;
            ind += 1;
        }
    });

    if (noteobj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

    noteobj = [];
}
let search = document.getElementById('searchTxt')
search.addEventListener('input', function () {
    //console.log("searching")
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            //console.log('inputval',inputVal);
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    }
    )
})

function deleteNote(index, inde) {
    let valobj = getval();
    let noteobj = getnotes();

    ind = 0;
    noteobj.splice(index, 1)
    valobj.splice(inde, 1)
    localStorage.setItem('notes', JSON.stringify(noteobj))
    localStorage.setItem('val', JSON.stringify(valobj))
    showNotes()
}