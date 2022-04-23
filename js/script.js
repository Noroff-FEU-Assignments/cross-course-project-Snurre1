const url = "https://thomashenriksen.no/gamehub/wp-json/wc/store/products"
const contain = document.querySelector(".product-list")
async function getdata(){
    try{
        const response = await fetch(url)
        const result = await response.json()

        contain.innerHTML = "";

        for (let i =0; i< result.length; i++){

            contain.innerHTML += `<div class= product-card>
                                   <a href=details.html?id=${result[i].id}>
                                    <div><h3>${result[i].name}</h3></div>
                                   <div>
                                    <img src="${result[i].images[0].src}"/></div>
                                   </a>¨
                                 <div class=productbtndiv>
                                  <a href=details.html?id=${result[i].id}>
                                   <button class=productbtn href=details.html?id=${result[i].id}>View details</button>
                                   </a>
                                 </div>
                                </div>`
        }
    
    
    }catch(error){}
}
getdata()