

let sub_btn_ele=document.getElementById("user_form")
let text_inpt_ele=document.getElementById("text_input")
let password_input_ele=document.getElementById("password_input")
let category_ele=document.getElementById("category")
sub_btn_ele.addEventListener("submit",function(event){
    event.preventDefault()
    console.log("submit btn clicked")
})
text_inpt_ele.addEventListener("blur",function(e){
    if(e.target.value==""){
        alert("please enter valid name")
    }
})

password_input_ele.addEventListener("focus",function(e){
    if(e.target.value.length<8){
        console.log("please enter atleast 8 character...")
    }
})
category_ele.addEventListener("change",function(){
    console.log("change addEventListener is triggerd")
})