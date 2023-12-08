const data = localStorage.getItem('cart-page');
const p = JSON.parse(data);
console.log(data);
console.log(p);
p.forEach(item =>{
    let row = `<tr>
    <th><img src="${item[0].img}" width="100px" height="100px"></th>
    <th>${item[0].title}</th>
    <th>${item[0].price * item[0].quantity}</th>
    <th><a href="http://127.0.0.1:5500/order_page.html?item=${item[0].img}&&title=${item[0].title}&&price=${item[0].price * item[0].quantity}">Buy Now</a>
        <a href="#">Remove from cart</a></th>
    </tr>`;
    document.getElementById('table-row').insertAdjacentHTML('beforeend',row);
}) 

