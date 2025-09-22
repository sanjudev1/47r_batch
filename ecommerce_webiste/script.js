let products_con=document.getElementById("products")


fetch("https://fakestoreapi.com/products").then(
    function(response){
     return response.json()
    }
).then(
    function(arr){
        console.log(arr) //[{},{},{},{}]
       for(let i=0;i<arr.length;i++){
        let card=document.createElement("div")
        card.classList="card"
        let image_ele=document.createElement("img")
        image_ele.style.width="100px"
        image_ele.src=arr[i].image
        let h1_ele=document.createElement("p")
        h1_ele.textContent=arr[i].title
        card.appendChild(image_ele)
        card.appendChild(h1_ele)
        products_con.appendChild(card)
       }
    }
)