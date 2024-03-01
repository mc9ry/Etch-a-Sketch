const containerDiv = document.createElement('div'); 
containerDiv.classList.add('container-div'); 
document.body.appendChild(containerDiv); 

function createDiv(){
const div1 = document.createElement('div'); 
div1.classList.add('childDiv'); 

containerDiv.appendChild(div1); 
}

for(let x = 0; x<16; x++){
    for(let i = 0; i<16; i++){
    createDiv(); 
}
}



 