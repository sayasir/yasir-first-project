let outputscreen=document.getElementById('screen');

function display(num){
 
   outputscreen.value+=num;

}
function clearResult(){
    outputscreen.value=""
}
function deleted(){
    outputscreen.value=outputscreen.value.slice(0,-1)
}
function calculate(){
    try{
 outputscreen.value=eval(outputscreen.value)
    }
    catch{
    setTimeout(()=>{
 outputscreen.value="error"
        },10)

             setTimeout(()=>{
 outputscreen.value=""
        },1000)

    }
   
}

// Keyboard support
window.addEventListener('keydown', function(e) {
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];
    
    if (allowedKeys.includes(e.key)) {
        e.preventDefault();
        display(e.key);
    }
    else if (e.key === 'Enter') {
        e.preventDefault();
        calculate();
    }
    else if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        deleted();
    }
    else if (e.key.toLowerCase() === 'c') {
        e.preventDefault();
        clearResult();
    }
});