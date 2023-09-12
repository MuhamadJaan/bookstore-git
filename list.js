shopping();
function shopping() {
    let cartitems = [];
    if (!localStorage.getItem('cart')) {
        cartitems = [];
    } else {
        cartitems = JSON.parse(localStorage.getItem('cart'))
    }
    let html = ""
    let totalQty=0;
    let totalPrice=0;
    for (let index = 0; index < cartitems.length; index++) {
        let std = cartitems[index];
        totalQty+=std.quantity
        totalPrice+=std.price*std.quantity;
        console.log(std.price)
        console.log(std);
        html += `
        <tr>
        <td colspan="2"> <img width="50px" src="${std.img}"></td>
        <td scope="col">${std.name}</td>
        <td scope="col">${std.quantity}</td>
        <td scope="col"><span>$ ${std.price}</span></td>
        <td scope="col"><span>$ ${std.price * std.quantity} </span></td>
        <th scope="col"><button class="btn btn-warning text-light fs-3" onclick="deleteCartItem(${index})">-</button></th>
                        </tr>
        `
    }
    document.getElementById('CartTable').innerHTML = html;
    document.getElementById('totalQty').innerHTML = totalQty;
    document.getElementById('totalPrice').innerHTML = "$"+totalPrice;

}
function deleteCartItem(index) {
    let cartitems = [];
    if (!localStorage.getItem('cart')) {
        cartitems = [];
    } else {
        cartitems = JSON.parse(localStorage.getItem('cart'))
    }    
    cartitems.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cartitems))
    shopping();
}
function countitmmm() {
    let cartitems = [];
    if (!localStorage.getItem('cart')) {
        cartitems = [];
    } else {
        cartitems = JSON.parse(localStorage.getItem('cart'))
    }
    document.getElementById('coiunytt').innerHTML=cartitems.length
    
}
