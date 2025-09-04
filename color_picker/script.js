
let btn0=document.getElementById("green_btn")

let btn1=document.getElementById("yellow_btn")

let btn2= document.getElementById("purple_btn")

let btn3 = document.getElementById("pink_btn")

arr=["green","yellow","purple","pink"]

btn0.style.backgroundColor=arr[0]
btn1.style.backgroundColor=arr[1]
btn2.style.backgroundColor=arr[2]
btn3.style.backgroundColor=arr[3]


document.body.style.backgroundColor="black"
// for(let i=0;i<arr.length;i++){

// `btn${i}`.style.backgroundColor="green"
// console.log(`btn${i}`)
// `btn${i}`.style.color="white"
// }







function all_in_one(color){
  document.body.style.backgroundColor=color
}