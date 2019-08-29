var diaries=[];

function toggle(ref){
    var diary = document.getElementsByClassName('diary');
    for(let i=0;i<diary.length;i++){          
        if(diary[i]==ref){
            ref.setAttribute("data-toggle","1");
            var notes=diaries[i];
            var area=document.getElementsByClassName("sectionsPane")[0];
            var bhtml='<div class="createNote"><button onclick="noter()">Add Note&nbsp&nbsp<img src="plus.svg"></button></div>';
            var html="";
            for(let j=0;j<notes.length;j++){;
                html+='<div><button class="note" onclick="toggle2(this)">'+notes[j]+'</button></div>';
            }
            area.innerHTML=bhtml+html;
        }
        else{
            diary[i].setAttribute("data-toggle","0");
        }
    }  
}

function toggle2(ref){
     var note=document.getElementsByClassName("note");
     for(let i=0;i<note.length;i++){
         if(note[i]==ref){
             ref.style.color="#1989EA";
             document.getElementsByClassName("notesPane")[0].innerHTML=ref.innerHTML;
         }
         else{
             note[i].style.color="black";
         }
     }
}

function adder(){
    var name = prompt("New diary Name:", "Diary");
    if(name==null){
        name="Diary";
    }
    place=document.getElementsByClassName("diariesPane")[0];
    var html='<div class="diary" onclick="toggle(this)" data-toggle="0"><button>'+name+'</button></div>';
    place.innerHTML+=html;
    diaries.push([]);
}

function noter(){
    var note = prompt("Note:", "Text");
    if(note==null){
        note="Text";
    }
    var diary = document.getElementsByClassName('diary');
    for(let i=0;i<diary.length;i++){ 
        if(diary[i].getAttribute("data-toggle")==1){
            diaries[i].push(note);
            toggle(diary[i]);
        }
    }
}