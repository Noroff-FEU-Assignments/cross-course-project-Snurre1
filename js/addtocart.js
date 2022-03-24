const cartBox = document.querySelector(".product-list");
const addToCart = document.getElementsByClassName("cartbutton");
let items = [];
for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function (event) {
    if (typeof Storage !== "undefined") {
      let item = {
        id: i + 1,
        name: event.target.parentElement.parentElement.children[0].childNodes[1]
          .innerHTML,
        img: event.target.parentElement.parentElement.children[0].childNodes[3]
          .currentSrc,
        price:
          event.target.parentElement.parentElement.children[0].childNodes[5]
            .innerHTML,
        no: 1,
      };
      if (JSON.parse(localStorage.getItem("items")) === null) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      } else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map((data) => {
          if (item.id === data.id) {
            item.no = item.no + 1;
          } else {
            items.push(data);
          }
        });
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      }
    } else {
      alert("local storage is not working on your browser");
    }
  });
}
