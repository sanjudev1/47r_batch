
arr = [
  "balayya",
  "Ntr",
  "Mahesh",
  "S_babu",
  "rashima",
  "sam",
  "bhagya sri",
  "savitri",
  "durga"
];


index=Math.random()*arr.length 
index= Math.round(index)
system_generated_name=arr[index]



let chance=0
function checkResult(){
  chance+=1
  let ele=document.getElementById("input")
  if(ele.value==system_generated_name){
    if(chance==1){

      alert("your answer is correct you got gold medal")
    }else if(chance==2){
      alert("your answer is correct you got silver medal")
    }else if(chance==3){
      alert("your answer is correct you got bronze medal")
    }else{
      alert("Thank you for participating try again to get medal")
    }
  }
}