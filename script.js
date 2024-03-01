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


const allBoxSelecter = document.querySelectorAll('.childDiv'); 
console.log(allBoxSelecter); 


const button = document.createElement('button'); 
button.textContent = 'clear';
containerDiv.appendChild(button); 

allBoxSelecter.forEach(box => {
    
    box.addEventListener('mouseenter', () => { 
     box.classList.add('stick'); 

    }); 

    button.addEventListener('click', () => {
        box.classList.remove('stick'); 

    }); 
     



    
});



//just assign another class or unassign the class for clear











 