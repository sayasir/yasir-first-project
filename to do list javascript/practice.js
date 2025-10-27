const screen=document.querySelector('.input-btn input');
const container=document.querySelector('.search-history');
function add(){
    if(screen.value.length == 0){
        alert('please type something')
    }
    else{
      container.innerHTML+=`
      <div class="box">
    <span class="text-content">
    ${screen.value}
    </span>
    <button class="delete">
 <i class="far fa-trash-alt"></i>
    </button>
   

</div>
      
     `;
      const currenttask=document.querySelectorAll('.delete');
     for(let i=0; i<currenttask.length; i++){
        currenttask[i].onclick= function(){
             this.parentNode.remove();
        }
     }
      var tasks = document.querySelectorAll(".text-content");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick =function(){
                this.classList.toggle('completed');
            }
        }







        screen.value="";
    }
}


screen.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      
        add()// call your push function
    }
});
