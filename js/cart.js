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
    updateCartTotal();
  });
}
let sumTotal = 0;
function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cartdivs")[0];
  const cartRows = cartItemContainer.getElementsByClassName("cartdiv");
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    const price = cartRow.getElementsByClassName("itemprice");
    const totalPrice = price[0].innerHTML;

    let total = parseFloat(totalPrice.replace("Price:", ""));

    sumTotal = total * cartRows.length;
    console.log(sumTotal);
  }
}
