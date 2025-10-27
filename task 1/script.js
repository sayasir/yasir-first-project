const icon1 = document.querySelector('.icon1');
const hover1 = document.querySelector('.hover1');

icon1.addEventListener('mouseover', () => {
    
      hover1Timer =setTimeout(()=>{
         hover1.style.display='block';
    
    },500)
});

icon1.addEventListener('mouseout', () => {
    clearTimeout(hover1Timer);
    hover1.style.display = 'none';
});

const icon2= document.querySelector('.icon2');
const hover2=document.querySelector('.hover2');

icon2.addEventListener('mouseover',()=>{
  
    hover2Timer= setTimeout(()=>{
         hover2.style.display='block';
    },500)
})
icon2.addEventListener('mouseout',()=>{
  clearTimeout(hover2Timer);
    hover2.style.display='none';
})