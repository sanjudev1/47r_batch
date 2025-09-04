function fliptheCoin(){
   let coin_image_ele=document.getElementById("coin_image")
   let random_num=Math.random()*100 // decimal points
   random_num=Math.ceil(random_num) // interger

   if(random_num%2==0){
    coin_image_ele.src="https://img.freepik.com/free-vector/digital-currency-indian-rupee-symbol-golden-coin_1017-42459.jpg?t=st=1756874416~exp=1756878016~hmac=7840121c64aba2672a98641eb2e89e2b621bb8cdf11e1b394785a6ef657bb06e&w=1480"
   }else{
    coin_image_ele.src="https://img.freepik.com/premium-photo/golden-coin-with-dollar-sign-white-background_476612-9765.jpg"
   }
}