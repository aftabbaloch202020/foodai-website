    var swiper = new Swiper(".mySwiper", {
        loop:true,
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
    });






    let cart = [];

const buttons = document.querySelectorAll(".add-cart");
const cartItems = document.querySelector(".cart-items");
const total = document.getElementById("total");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let name = btn.dataset.name;
        let price = Number(btn.dataset.price);

        let existing = cart.find(item => item.name === name);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="cart-row">
                <div>
                    <strong>${item.name}</strong><br>
                    $${item.price} × ${item.qty}
                </div>
                
                <div>
                    <button onclick="removeItem(${index})">X</button>
                </div>
            </div>
        `;
    });

    total.innerText = totalPrice;
}

function removeItem(i) {
    cart.splice(i, 1);
    updateCart();
}