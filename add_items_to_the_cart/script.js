arr=["biryani","munafa","curd rice","tiger rice","sambar rice","apricort"]

let items_con_ele=document.getElementById("items_container")

function displayItems(){
    for(let i=0;i<arr.length;i++){
   let item=document.createElement("p")
let delete_btn =document.createElement("button")
delete_btn.textContent="Delete"
   delete_btn.style.border="red 1px solid"
   delete_btn.style.color="red"
   delete_btn.onclick=function(){
    console.log(i,"cur index")
    arr.splice(i,1)
    console.log(arr)
    items_con_ele.textContent=""
    displayItems()
   }
   item.textContent=arr[i] 
   item.appendChild(delete_btn)
   items_con_ele.appendChild(item)

}

}
displayItems()

function addItems(){
    let ele=document.getElementById("user_input")
    let cur_val= ele.value 
    arr.push(cur_val)
    ele.value=""
    items_con_ele.textContent=""
   displayItems()
}