

let image_ele=document.getElementById("image")

let decode_ele=document.getElementById("decode")
decode_ele.textContent="guess the output to save your country 2+3="

let Timer_ID=setTimeout(function(){
    image_ele.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVJ0nvPUrFfmwlQPigTPlFdEf-xNJ2QoWCw&s"


},5000)
let user_guess_ele=document.getElementById("user_guess")

function check(){
    if(user_guess_ele.value==5){
       clearTimeout(Timer_ID)
       alert("Your country is Saved")
    }
    user_guess_ele.value=""

}