
let sentence_ele=document.getElementById("sentence")
let formated_sentence=sentence_ele.textContent.split("").map(function(each){
    return `<span>${each}</span>`
})

sentence_ele.innerHTML=formated_sentence.join('')
console.log(sentence_ele.textContent)



let user_input_ele=document.getElementById("user_input")

let all_span_elemts=document.querySelectorAll("span")



document.body.addEventListener('keydown',function(e){
     if(e.key!=="Shift" &&  e.key!=="Tab" ){
      
         user_input_ele.value=user_input_ele.value+e.key
     }
    let cur_val=user_input_ele.value

    for(let i=0;i<cur_val.length;i++){
        if(cur_val[i]==all_span_elemts[i].textContent){
            all_span_elemts[i].style.color="#ffff"
        }else{
            all_span_elemts[i].style.color="#99091a"
        }
    }

    for(let i=cur_val.length;i<sentence_ele.textContent.length;i++){
        all_span_elemts[i].style.color="#9c93a3"
    }
    
})