function openmenu(){
  
    const menubox=document.querySelector('.menu-box')
    menubox.classList.toggle('open-menu')
}
document.addEventListener("click", (event) => {
  const menubox = document.querySelector('.menu-box');
  const menubtn = document.querySelector('.menu'); // make sure your button has this class
  
  // check: menu is open + click is outside
  if (
    menubox.classList.contains('open-menu') && 
    !menubox.contains(event.target) && 
    event.target !== menubtn
  ) {
    menubox.classList.remove('open-menu');
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('moreBtn');
  const extra = document.getElementById('extraInfo');

  button.addEventListener('click', () => {
    if(extra.style.display === 'none') {
      extra.style.display = 'block';
      button.textContent = 'Show Less';
    } else {
      extra.style.display = 'none';
      button.textContent = 'Show More';
    }
  });
});

// const calculator=document.querySelector('.calculator')
// const Todolist=document.querySelector('.Todolist');
// const dinogame=document.querySelector('.dinogame');
// const Feedback=document.querySelector('.Feedback');

// if(!window.location.hash){
//     window.location.hash = "#Calculator";
// }
//  let sections=document.querySelectorAll('.main section')

// function routingpage(){
//    let changehash= window.location.hash.substring(1)
//    console.log("Hash changed:", changehash);

//  console.log(sections.length)
//  sections.forEach((element)=>{
//     element.classList.remove('pageshow')
//  })
//  const getpage=document.querySelector(`.${changehash}`)
//  console.log(getpage)
//  if(getpage){
// getpage.classList.add('pageshow')
//  }
 
 
// }
//  routingpage()
// window.addEventListener("hashchange", () => {
  
//   routingpage()
// });


if (!window.location.hash){
  window.location.hash="#home"
}

let sections=document.querySelectorAll('section')

function routingpage(){
    console.log(window.location.hash)

  sections.forEach((element)=>{
    element.classList.remove('pageshow')
  })
    let hashchange=window.location.hash.substring(1)
    console.log(hashchange)
    console.log(sections)
    let changesection=document.querySelector(`.${hashchange}`)
    console.log("this:",changesection)
  if(changesection){
    changesection.classList.add('pageshow')
  }
}
routingpage()
/ window.addEventListener("hashchange", () => {
  
  routingpage()
});


// now routing is finished

  




const nameInput = document.getElementById("nameInput");
const descInput = document.getElementById("descInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const displayDiv = document.getElementById("displayDiv");

// Show stored data on page load
showData();

// Add button
addBtn.onclick = function () {
  const name = nameInput.value.trim();
  const desc = descInput.value.trim();

  if (name === "" || desc === "") {
    alert("Please fill both fields!");
    return;
  }

  const data = JSON.parse(localStorage.getItem("feedback")) || [];
  data.push({ name, desc });

  localStorage.setItem("feedback", JSON.stringify(data));

  nameInput.value = "";
  descInput.value = "";

  showData();
};

// Clear button
clearBtn.onclick = function () {
  localStorage.removeItem("feedback");
  displayDiv.innerHTML = "";
};

// Function to show stored feedback
function showData() {
  displayDiv.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("feedback")) || [];

  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("feedback-item");
    div.innerHTML = `<strong>${item.name}</strong><br>${item.desc}`;
    displayDiv.appendChild(div);
  });
}





// calculator-part

  const screen=document.querySelector('.screen-container input')
function handleclick(num){
if(screen.value==="wrong syntax"){
  screen.value="";
}
 screen.value+=num;
}
function calculate(){
  try{
    screen.value=eval(screen.value)
  }
 catch (error) {
    // Code to handle the error
    screen.value= "wrong syntax"
}

  
}
function cleared(){
screen.value=""
}
function del(){
  screen.value=screen.value.slice(0,-1);
}





// // todo list start

// // Select elements
// const inputBox = document.querySelector('.input-container input');
// const addButton = document.querySelector('.addlist');
// const taskContainer = document.querySelector('.newtask-container');


// // Function to add new task
// function addlist() {
//     const value = inputBox.value.trim();

//     if (value === "") {
//         alert('Type something');
//         return;
//     }

//     // Create task div
//     const newTask = document.createElement('div');
//     newTask.classList.add('newtask');

//     // Create input for task text
//     const taskInput = document.createElement('input');
//     taskInput.classList.add('taskinput');
//     taskInput.value = value;
//     taskInput.readOnly = true;
//     taskInput.disabled = true;

//     // Create Edit button
//     const editButton = document.createElement('button');
//     editButton.classList.add('edittask');
//     editButton.textContent = "Edit";

//     // Create Delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('deltask');
//     deleteButton.textContent = "Delete";

//     // Delete task
//     deleteButton.addEventListener('click', () => {
//         newTask.remove();
//          updateLocalStorage();
//     });

//     // Edit/Save task
//     editButton.addEventListener('click', () => {
//         if (editButton.textContent === "Edit") {
//             taskInput.readOnly = false;
//             taskInput.disabled = false;
//             taskInput.focus();
//             editButton.textContent = "Save";
//         } else {
//             taskInput.readOnly = true;
//             taskInput.disabled = true;
//             editButton.textContent = "Edit";
//         }
//     });

//     // Append elements
//     newTask.appendChild(taskInput);
//     newTask.appendChild(editButton);
//     newTask.appendChild(deleteButton);
//     taskContainer.appendChild(newTask);
    

//     // Clear input box
//     inputBox.value = "";
//      updateLocalStorage();
// }

// // Add button click
// addButton.addEventListener('click', addlist);

// // Add task on Enter key
// inputBox.addEventListener('keydown', (event) => {
//     if (event.key === "Enter") {
//         addlist();
//     }
// });



// function updateLocalStorage() {
//     const tasks = [];
//     taskContainer.querySelectorAll('.newtask input').forEach(input => {
//         tasks.push(input.value);
//     });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Load tasks from localStorage on page load
// window.addEventListener('DOMContentLoaded', () => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     savedTasks.forEach(task => {
//         inputBox.value = task;
//         addlist();
//     });
// });

// updateLocalStorage()





// Select elements
const inputBox = document.querySelector('.input-container input');
const addButton = document.querySelector('.addlist');
const taskContainer = document.querySelector('.newtask-container');

// Function to update localStorage
function updateLocalStorage() {
    const tasks = [];
    taskContainer.querySelectorAll('.newtask input').forEach(input => {
        tasks.push(input.value);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Your addlist() function (unchanged)
function addlist() {
    const rvalue = inputBox.value.trim();

    if (rvalue === "") {
        alert('Type something');
        return;
    }

    // Create task div
    const newTask = document.createElement('div');
    newTask.classList.add('newtask');

    // Create input for task text
    const taskInput = document.createElement('input');
    taskInput.classList.add('taskinput');
    taskInput.value = rvalue;
    taskInput.readOnly = true;
    taskInput.disabled = true;

    // Create Edit button
    const editButton = document.createElement('button');
    editButton.classList.add('edittask');
    editButton.textContent = "Edit";

    // Create Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deltask');
    deleteButton.textContent = "Delete";

    // Delete task
    deleteButton.addEventListener('click', () => {
        newTask.remove();
        updateLocalStorage();
    });

    // Edit/Save task
    editButton.addEventListener('click', () => {
        if (editButton.textContent === "Edit") {
            taskInput.readOnly = false;
            taskInput.disabled = false;
            taskInput.focus();
            editButton.textContent = "Save";
        } else {
            taskInput.readOnly = true;
            taskInput.disabled = true;
            editButton.textContent = "Edit";
            updateLocalStorage();
        }
    });

    // Append elements
    newTask.appendChild(taskInput);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    taskContainer.appendChild(newTask);

    // Clear input box
    inputBox.value = "";
    updateLocalStorage();
}

// Add button click
addButton.addEventListener('click', addlist);

// Add task on Enter key
inputBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addlist();
    }
});

// Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        // Manually create a task element without calling addlist()
        const newTask = document.createElement('div');
        newTask.classList.add('newtask');

        const taskInput = document.createElement('input');
        taskInput.classList.add('taskinput');
        taskInput.value = task;
        taskInput.readOnly = true;
        taskInput.disabled = true;

        const editButton = document.createElement('button');
        editButton.classList.add('edittask');
        editButton.textContent = "Edit";

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deltask');
        deleteButton.textContent = "Delete";

        // Delete functionality
        deleteButton.addEventListener('click', () => {
            newTask.remove();
            updateLocalStorage();
        });

        // Edit/Save functionality
        editButton.addEventListener('click', () => {
            if (editButton.textContent === "Edit") {
                taskInput.readOnly = false;
                taskInput.disabled = false;
                taskInput.focus();
                editButton.textContent = "Save";
            } else {
                taskInput.readOnly = true;
                taskInput.disabled = true;
                editButton.textContent = "Edit";
                updateLocalStorage();
            }
        });

        newTask.append(taskInput, editButton, deleteButton);
        taskContainer.appendChild(newTask);
    });
});







// dinogamestart
let dino=document.querySelector('.dino')
let isJumping = false;
function jump(){
  if (isJumping) return;
  isJumping = true;
  if(!dino.classList.contains('dinojump')){
  dino.classList.add('dinojump')
  }
  
 
   setTimeout(()=>{
    dino.classList.remove('dinojump')
    isJumping = false;
   },500)
}

let cactus1=document.querySelector('.cactus1')
let cactus2=document.querySelector('.cactus2')
let cactus3=document.querySelector('.cactus3')
let cactusinterval;

function updateNumber() {
  const numTag = document.querySelector('.num');
  let current = parseInt(numTag.textContent) || 0;
  numTag.textContent = current + 1;
}

function resetNumber() {
  const numTag = document.querySelector('.num');
  numTag.textContent = 0;
}

function start() {
  const allcactus = [cactus1, cactus2, cactus3];
  clearInterval(cactusinterval);
  resetNumber(); // every time start, reset to 0

  cactusinterval = setInterval(() => {
    const randomindex = Math.floor(Math.random() * allcactus.length);
    let charecter = allcactus[randomindex];

    if (!charecter.classList.contains('cactusmove')) {
      charecter.classList.add('cactusmove');
    }

    let passed = false;
    let gameOver = false;

    let checkLeft = setInterval(() => {
      let leftValue = parseInt(window.getComputedStyle(charecter).getPropertyValue('left'));
      let dino = document.querySelector('.dino');
      let topvalue = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

      if (!gameOver && leftValue <= 70 && leftValue >= 30 && topvalue == 238 ||!gameOver && leftValue <= 60 && leftValue >= 30 && topvalue >= 210) {
        gameOver = true;
        clearInterval(checkLeft);
        clearInterval(cactusinterval);
        resetNumber();
        alert('Game Over!');
        return; 
      }

      // ✅ Only update score if not game over
      if (!gameOver && leftValue <= 29 && !passed) {
        passed = true;
        updateNumber();
      }

    }, 50);

    setTimeout(() => {
      charecter.classList.remove('cactusmove');
    }, 700);

  }, 1400);
}



// function start(){
// //  console.log(cactus1,cactus2)
// //  console.log(cactus3)
//  const allcactus =[cactus1,cactus2,cactus3];
//  clearInterval(cactusinterval);
//  cactusinterval=setInterval(()=>{

// const randomindex=Math.floor(Math.random()*allcactus.length)
//  let charecter=allcactus[randomindex]

// //  console.log(charecter)
 
//      if(!charecter.classList.contains('cactusmove')){
// charecter.classList.add('cactusmove')
//  }

//   let checkLeft = setInterval(() => {
//       let leftValue = parseInt(window.getComputedStyle(charecter).getPropertyValue('left'));
//      let dino=document.querySelector('.dino')
    
//      let topvalue=parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
//       if (leftValue <= 55 && topvalue == 238 && leftValue >=30 ) {
//         alert('stop')
      
//   //         let screen5 = document.querySelector('.count');
//   // let current = parseInt(screen5.textContent) || 0;



//      clearInterval(checkLeft);
//          clearInterval(cactusinterval);
         
//       }
//      if (leftValue <= 29) {
 
// //   setTimeout(()=>{
// // screen5.textContent = current + 1;
// //   },300)
// // setInterval(()=>{
// //    let screen5 = document.querySelector('.count');
// //   // let current = parseInt(screen5.textContent) || 0;
// //   let current=0;
// //  let sample= current+1
// //     screen5.textContent=sample
// // })
     
     
  
// }
      
//    }, 50);
//  setTimeout(()=>{
//   charecter.classList.remove('cactusmove')
//  },700)


//  },1400)
 



// }

function call(){
  let cactus1=document.querySelector('.cactus1')
let cactus2=document.querySelector('.cactus2')
let cactus3=document.querySelector('.cactus3')
}
call()



// function checkposition(){
//    console.log(cactus1,cactus2)
//  console.log(cactus3)
//  setInterval(()=>{
// let leftcactus1=parseInt(getComputedStyle(cactus1).getPropertyValue("left"));
//  console.log(leftcactus1)

// },100)

 

// }
//  if(leftcactus1>=0 && leftcactus1 <=30 ){
//   alert('stop')
// }
// checkposition()




// let cactus1 = document.querySelector('.cactus1');
// let cactus2 = document.querySelector('.cactus2');
// let cactus3 = document.querySelector('.cactus3');

// let cactusinterval;
// let score = 0;

// function start() {
//   const allcactus = [cactus1, cactus2, cactus3];
//   clearInterval(cactusinterval);

//   cactusinterval = setInterval(() => {
//     const randomindex = Math.floor(Math.random() * allcactus.length);
//     let charecter = allcactus[randomindex];

//     if (!charecter.classList.contains('cactusmove')) {
//       charecter.classList.add('cactusmove');
//     }

//     let checkLeft = setInterval(() => {
//       let leftValue = parseInt(window.getComputedStyle(charecter).getPropertyValue('left'));
//       let dino = document.querySelector('.dino');
//       let topvalue = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

//       // Collision detection
//       if (leftValue <= 55 && topvalue == 238 && leftValue >= 30) {
//         alert('Game Over');
//         clearInterval(checkLeft);
//         clearInterval(cactusinterval);
//       }

//       // When cactus passes dino (left < 0)
//       if (leftValue <= -20) {
//         score++;
//         document.querySelector('.count').textContent = score;
//         clearInterval(checkLeft);
//       }
//     }, 50);

//     // Remove movement class after animation
//     setTimeout(() => {
//       charecter.classList.remove('cactusmove');
//     }, 1000);
//   }, 1400);
// }
