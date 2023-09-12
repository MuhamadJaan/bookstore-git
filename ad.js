let array = [
    {
        id: 11,
        img: "asset/img/k4.png",
        name: "Lines from Hanen",
        price: 15.00,

    },
    {
        id: 12,
        img: "asset/img/k5.png",
        name: "Lines from roye",
        price: 16.00,

    },
    {
        id: 13,
        img: "asset/img/k6.png",
        name: "Lines from albert",
        price: 12.00,

    },
    {
        id: 14,
        img: "asset/img/k8.png",
        name: "Lines from breakli",
        price: 17.00,

    },
    {
        id: 15,
        img: "asset/img/k9.png",
        name: "Lines from thomsen",
        price: 25.00,

    },
    {
        id: 16,
        img: "asset/img/k10.png",
        name: "Lines from mecher",
        price: 10.00,

    },
];
home = "";

for (let index = 0; index < array.length; index++) {

    let item = array[index];
    console.log(item);

    home += `
    
    <div class="col-md-4 mt-5">
    <img src="${item.img}" alt="">
    <h1>${item.name}</h1>
    <span class="text-success">$ ${item.price}</span>
    <span>_______</span>
    <br><br>
    <input id="qty${index}" type="number"> <br>
    <button onclick="AddtoCard(${index})" class="mt-3 rounded-pill bg-success text-light">Add to cart</button>
</div>`

}

document.getElementById('list').innerHTML = home;

function AddtoCard(index) {
    let student = array[index];
    let qtyVal =Number(document.getElementById('qty' + index).value);
    // console.log(qtyVal);
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
    };
    if (exists === 0) {
        student = { ...student, ...{ quantity: qtyVal } }
        // console.log(array);
        cartitems.push(student)
        localStorage.setItem('cart', JSON.stringify(cartitems));
    } else {
        alert('cart already exists')
    }
    countCartItem();
}

function countCartItem() {
    let book = [];
    if (!localStorage.getItem('cart')) {
        book = [];
    } else {
        book = JSON.parse(localStorage.getItem('cart'));
    }
    document.getElementById('count').innerHTML = book.length;

}

