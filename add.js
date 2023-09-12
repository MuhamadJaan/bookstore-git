let cart = [
    {
        id: 1,
        img: "asset/img/k4.png",
        name: "Lines from poems",
        price: 20.00,
    },
    {
        id: 2,
        img: "asset/img/k5.png",
        name: "line from victor jack",
        price: 10.00,
    },
    {
        id: 3,
        img: "asset/img/k6.png",
        name: "Lines from  jassan",
        price: 12.00,
    },
];

let html = '';
for (let index = 0; index < cart.length; index++) {
    let item = cart[index];
    console.log(item);
    html += `
    <div class="col-md-4 mt-5">
                <img src="${item.img}" alt="">
                <h1>${item.name}</h1>
                <p>$<span>${item.price}</span></p>
                <span class="text-success">_______</span>
                <br>
                <input type="number" id="qty${index}"> <br>
                <button onclick="AddtoCard(${index})"  class="mt-3 rounded-pill bg-success text-light">Add to cart</button>
                </span>
            </div>`
}

document.getElementById('cart').innerHTML = html;

function AddtoCard(index) {
    let quly = Number(document.getElementById('qty' + index).value);
    console.log(quly)
    let student = cart[index];
    console.log(student);
    let cartitems = [];
    if (!localStorage.getItem('cart')) {
        cartitems = [];
    } else {
        cartitems = JSON.parse(localStorage.getItem('cart'))
    }

    let exists = 0;
    for (let i = 0; i < cartitems.length; i++) {

        if (cartitems[i].id === student.id) {
            exists = 1;
        }
    }
    if (exists === 0) {
        student = { ...student, ...{ quantity: quly } }

        cartitems.push(student)
        localStorage.setItem('cart', JSON.stringify(cartitems));

    } else {
        alert('cart is already exists')
    }
    countCartItem();

}

function countCartItem() {
    let book = [];

    if (!localStorage.getItem('cart')) {
        book = [];
    }
    else {

        book = JSON.parse(localStorage.getItem('cart'));
    }

    document.getElementById('counCartitem').innerHTML = book.length;
}

