

let head_ele=document.getElementById("heading")

function addStyle(){
    head_ele.style.color="blue"
}

let bg_color_btn_ele=document.getElementById("bg-color_btn")

// here i am adding onevent listener
bg_color_btn_ele.onclick=function(){
  document.body.style.backgroundColor="green"
}

let bg_color_addevtbtn=document.getElementById("bg_color_addevtbtn")

// here i want to add addevent listener 

bg_color_addevtbtn.addEventListener("keyup",function(e){
    console.log(e)
   document.body.style.backgroundColor="pink"
})



let password_ele=document.getElementById("password_ele")
let sentence_ele=document.getElementById("sentence")
password_ele.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        if(password_ele.value==sentence_ele.textContent){
            console.log("you did very well...")
            sentence_ele.style.color="green"
        }else{
            sentence_ele.style.color="red"
        }
    }
})