const container = document.querySelector("section")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://thomashenriksen.no/gamehub/wp-json/wc/store/products/"+id;

container.innerHTML = ""

async function getGame(){

    try{
        const response = await fetch(url);
        const result = await response.json();
        container.innerHTML =
                               ` <div><h3>${result.name}</h3></div>
                                <div><img src="${result.images[0].src}" alt="${result.images[0].alt}"></img>
                                </div>
                                <div><p>${result.description}</p></div>
                                <div><p>${result.prices.price} ${result.prices.currency_code}</p></div>`
                              


    }catch(error){}
}
getGame();