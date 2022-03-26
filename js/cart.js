let removeCartItemButtons = document.getElementsByClassName("btn-danger");
const container = document.querySelector(".cartdivs");
const data = JSON.parse(localStorage.items);
for (let i = 0; i < data.length; i++) {
  container.innerHTML += `<div class="cartdiv">
                             <h2>${data[i].name}</h2>
                             <img class="cartimg" src="${data[i].img}"/>
                             <p class="itemprice">Price:${data[i].price}</p>
                             <button class="btn-danger">remove</button></div>`;
}

for (let i = 0; i < removeCartItemButtons.length; i++) {
  const button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    
  });
}
let sum = [];
let sumTotal = 0;
function updateCartTotal() {
  for(let i=0; i<data.length; i++){
     console.log(data[i])
    const total = parseFloat(data[i].price.replace("£",""))
    updatePrice = function calc(){
      sumTotal = total * data.length;
    }
    updatePrice()
    const showPrice = document.querySelector(".totalprice");
      showPrice.innerHTML = "Total price: " + sumTotal + "€";
  } 

}
  

updateCartTotal();
