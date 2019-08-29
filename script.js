var diaries=[["aaaaaaaaaaaaa","bbbbbbbbbbbb"],["cccc"],["dddddddd","eeeeeeeeeeeeeeeeeeeeeeeee"]];

function toggle(){
    var diary = document.getElementsByClassName('diary');
    for(let i=0;i<diary.length;i++){          
        if(diary[i]==this){
            this.setAttribute("data-toggle","1");
            var notes=diaries[i];
            var area=document.getElementsByClassName("sectionsPane")[0];
            var html='<div class="createNote"><button>Add Note&nbsp&nbsp<img src="plus.svg"></button></div>';
            for(let j=0;j<notes.length;j++){;
                html+='<div><button class="note" onclick="toggle2(this)">'+notes[j]+'</button></div>';
            }
            area.innerHTML=html;
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
            //  console.log(ref.innerHTML);
             document.getElementsByClassName("notesPane")[0].innerHTML=ref.innerHTML;
         }
         else{
             note[i].style.color="black";
         }
     }
}

var diary = document.getElementsByClassName('diary');
for(let i = 0;i<diary.length;i++){
    diary[i].addEventListener('click',toggle);
};