const selectInput = document.querySelectorAll('select');

// THE FIRST ELEMENT CHILD OF A SELECT INPUT IS THE OPTION VALUE

// FIRST SELECT INPUT FOR HOUR
for (let i = 12; i > 0; i--){
    selectInput[0].firstElementChild.insertAdjacentHTML('afterend',`<option value= ${i}>${i}</option>`);
}


// SECOND SELECT INPUT FOR MINUTE
for (let i = 60; i > 0; i--){
    selectInput[1].firstElementChild.insertAdjacentHTML('afterend',`<option value= ${i}>${i}</option>`);
}





























































const displayOne = document.querySelector('.display__one');
const displayTwo = document.querySelector('.display__two');

[...selectInput].forEach((pop)=>{
    pop.addEventListener('change',()=>{
        
        if (pop.classList.contains('demo__one')){
            displayOne.textContent = pop.value;
        }
        else if (pop.classList.contains('demo__two')){
            displayTwo.textContent = pop.value;
        }
        else{}
    });
});
