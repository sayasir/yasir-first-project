const sec=document.querySelector('.sec');
const min=document.querySelector('.min');
const hrs=document.querySelector('.hrs');

setInterval(checktime, 1000);
 
function checktime(){
    const time=new Date();
   let seconds = time.getSeconds()/60;
    let minutes = (seconds+time.getMinutes())/60;
    let hours = (minutes+time.getHours())/12;
     
   
    
    sec.style.setProperty('--rotation',seconds*360)
    min.style.setProperty('--rotation',minutes*360)
    hrs.style.setProperty('--rotation',hours*360)


}
checktime()
