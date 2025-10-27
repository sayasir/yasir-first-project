  let screen=document.querySelector('.input-box input');
  let taskcontainer=document.querySelector('.new-task');
  
function adding(){



     if(screen.value.length==0){
        alert('hi')
     }
     else{
          taskcontainer.innerHTML+=`
              <div class="task">
               <span class="textinscreen">${screen.value}</span>
               
               <button class="delete">delete</button>
                  <button class="edit">edit</button>
            </div>
          `;
          let curentvalue=document.querySelectorAll('.delete');
         for(let i=0; i<curentvalue.length; i++){
            curentvalue[i].onclick=function(){
                      this.parentElement.remove()
            }
         }

         let currenttask=document.querySelectorAll('.task');
         for(let i=0; i<currenttask.length; i++){
            currenttask[i].onclick=function(){
     this.querySelector('.textinscreen').classList.toggle('completed');
            }
         }


        //  let edit=document.querySelectorAll('.edit');
        //  for(let i=0; i<edit.length; i++){
        //     edit[i].onclick=function(e){
        //         this.querySelector('.textinscreen').innerHTML=screen.value;
        //     }
        //  }
        let edit = document.querySelectorAll('.edit');
for(let i = 0; i < edit.length; i++){
    edit[i].onclick = function(){
        // parent task-ல் உள்ள textinscreen update செய்யும்
        this.parentElement.querySelector('.textinscreen').innerText = screen.value;
    } }

          screen.value=""
     }

    

     
}

screen.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        adding();
    }
});

// function editing(){
//     let text=document.querySelector('.textinscreen')
//     text.textContent=screen.value
// }
// // Input field மற்றும் task container select செய்தல்
// let screen = document.querySelector('.input-box input');
// let taskcontainer = document.querySelector('.new-task');

// // Function to add new task
// function adding() {
//     // Input empty check
//     if (screen.value.trim() === "") {
//         alert('தயவு செய்து ஒரு task எழுதவும்');
//         return;
//     }

//     // Create new task div
//     let div = document.createElement('div');
//     div.className = 'task';
//     div.innerHTML = `
//         <span class="textinscreen">${screen.value}</span>
//         <button class="delete">delete</button>
//     `;

//     // Delete button functionality
//     div.querySelector('.delete').onclick = function() {
//         this.parentElement.remove(); // task remove
//     }

//     // Append new task to container
//     taskcontainer.appendChild(div);

//     // Clear input
//     screen.value = '';
// }

// // Enter key press-இல் கூட add செய்ய
// screen.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         adding();
//     }
// });
