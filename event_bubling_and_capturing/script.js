

let parent_ele=document.getElementById("parent")
let child_ele=document.getElementById("child")
let sub_child_ele=document.getElementById("subchild")
parent_ele.addEventListener("click",function(){
    console.log("parent is triggered...")
},true)

child_ele.addEventListener("click",function(){
    console.log("child is triggered..")
},true)

sub_child_ele.addEventListener("click",function(){
    console.log("sub child is triggered...")
},false) 
