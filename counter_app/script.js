function onIncremenet(){
    console.log("onIncremenet function is triggered")
    let count_ele=document.getElementById("count")
    // console.log(count_ele,count_ele.textContent)
        let number =parseInt(count_ele.textContent) // '0' => 0
        
    count_ele.textContent=number+1 // 3 
    let value = parseInt(count_ele.textContent)
    if(value>0){
        count_ele.style.color="green"
    }else if(value<0){
        count_ele.style.color="red"
    }else{
        count_ele.style.color="black"
    }

}


function onDecerement(){
    let count_ele=document.getElementById("count")
    let number =parseInt(count_ele.textContent)
        count_ele.textContent =number-1

    let value = parseInt(count_ele.textContent)
    if(value>0){
        count_ele.style.color="green"
    }else if(value<0){
        count_ele.style.color="red"
    }else{
        count_ele.style.color="black"
    }
}