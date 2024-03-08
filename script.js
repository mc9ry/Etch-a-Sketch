const containerDiv = document.createElement('div'); 
containerDiv.classList.add('container-div'); 
document.body.appendChild(containerDiv); 

function createDiv(){
const div1 = document.createElement('div'); 
div1.classList.add('childDiv'); 

containerDiv.appendChild(div1); 
}

let dimensions = prompt("What dimensions would you like the grid to be?"); 
let squareSize = 400/dimensions; 






for(let x = 0; x<dimensions; x++){
    for(let i = 0; i<dimensions; i++){
    createDiv(); 
}
}







const button = document.createElement('button'); 
button.textContent = 'clear';
containerDiv.appendChild(button); 

const allBoxSelecter = document.querySelectorAll('.childDiv'); 

allBoxSelecter.forEach(box => {

    box.style.width = `${squareSize}px`;
    box.style.height = `${squareSize}px`;
     



    
});

allBoxSelecter.forEach(box => {



    box.addEventListener('mouseenter', () => { 
     box.classList.add('stick'); 

    }); 

    button.addEventListener('click', () => {
        box.classList.remove('stick'); 

    }); 
     



    
});



//just assign another class or unassign the class for clear











 