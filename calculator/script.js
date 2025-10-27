const outputscreen = document.getElementById('screen');

function display(num) {
   
    outputscreen.value += num;
}
function clearResult(){
    outputscreen.value=""
}
function calculate(){
    try{
 outputscreen.value = eval(outputscreen.value);
    }
   catch(err){

    outputscreen.value='invalid syntax'
          setTimeout(() => {
            outputscreen.value = "";
        }, 900);

   }
}
function deleted(){
    outputscreen.value=outputscreen.value.slice(0,-1)
}
// Only keyboard 1 key
// keyboard event for only 1 key
document.addEventListener("keydown", function(e) {
    if (e.key === "1" || e.code === "Numpad1") {
        e.preventDefault(); // inputல default 1 வருவதை தடுக்கும்
        display("1");       // உங்கள் display function call
    }
});

