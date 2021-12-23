
const btn = document.getElementById("btn_task");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
//crée un formulaire
    let taskAdd = document.createElement('form');
    taskAdd.setAttribute('action','#');
   
//crée un input de type checkbox
    let champT = document.createElement('input');
    champT.setAttribute('type','checkbox');
    champT.setAttribute('id','champT');
    //fonction=>Check la chekbox et l'envoie dans le "DONE"
    champT.addEventListener('change',(e)=>{
        e.preventDefault();
        e=e.target;
        let newForm = e.parentNode.parentNode.removeChild(e.parentNode);
        if(e.checked){
            document.getElementById('DONE').appendChild(newForm);
        }else{
            document.getElementById('TODO').appendChild(newForm);
        }
    });
    
//crée un input de type text
    let text = document.createElement('input');
    text.setAttribute('type','text');
    text.setAttribute('id','text0');
    //transporte ce qui est inscrit dans l'input de ajouter tache à l'input de taches à réaliser
    text.value = document.getElementById("add").value;
    
//crée un input de type button
    let but = document.createElement('input');
    but.setAttribute('type','button');
    but.setAttribute('id','button0');
    but.setAttribute('value','Delete');
    //crée la div et tout ces éléments 
    but.addEventListener('click',(e)=>{
        e.preventDefault();
        e=e.target
        e.parentNode.parentNode.removeChild(e.parentNode)
    });

    //crée un button Edit
    let but0 = document.createElement('input');
    but0.setAttribute('type','button');
    but0.setAttribute('id','button1');
    text.setAttribute('disabled', true);
    but0.setAttribute('value','Edit');
    //fonction pour que le Edit rende le input modifiable et crée un button valider sur le click du button Edit.
    but0.addEventListener('click',(e)=>{
        e.preventDefault();
        //avec le but0.disabled dans la fonction newBut permet de ne pas répéter le button au click
        but0.disabled = true
        let newBut = document.createElement('input');
        newBut.setAttribute('type','button');
        newBut.setAttribute('id','button2')
        text.removeAttribute('disabled','disabled');
        newBut.setAttribute('value','Valider');
        //fait apparaitre le button valider au click du EDIT
        taskAdd.appendChild(newBut);
        newBut.addEventListener('click',(e)=>{
            e.preventDefault();
            text.disabled=true
            but0.disabled = false
            taskAdd.removeChild(newBut);
        });
 
    });
 
//Ajoute chaque élément dans mon taskAdd
    taskAdd.appendChild(champT);
    taskAdd.appendChild(text);
    taskAdd.appendChild(but);
    taskAdd.appendChild(but0);
    
    //recupere la div en HTMl pour l'envoyer dans le JS
    let principal = document.getElementById("TODO");
    //Envoyer les enfants dans le parent div "TODO"
    principal.appendChild(taskAdd);
    document.getElementById("add").value="";
    
}
);





