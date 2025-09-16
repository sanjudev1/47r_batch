let num_ele=document.getElementById("number")
let num=3


   let DeadLine= setInterval(function(){
       num_ele.textContent=num
       num-=1
       if(num==-1){
        clearInterval(DeadLine)
       }

    },1000) // 1 sec 

    