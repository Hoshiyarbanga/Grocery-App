var dloc = window.location.href;
var dsplt = dloc.split("?");
let secondOperand = dsplt[1];
var abc = secondOperand.split("=");
let second = abc[1];
let itemss = second.split("&&");
//for image
let imgss = itemss[0];
//for title
let titleproduct = abc[2];
let tt = titleproduct.split("&&");
let bb = tt[0];

let abbbc = bb.replaceAll("%"," ");
//document.write(bb)
let itemprice= abc[3];
document.write(itemprice);
const data = localStorage.getItem('cart-page');
const p = JSON.parse(data);
console.log(data);
console.log(p);
p.forEach((item) => {
    if (item[0].img == imgss) {
        console.log("success");
        let row = `<div class="imgg">
            <img src="${imgss}" width="50px" height="50px">
            <h2>${abbbc}</h2>
            <h1>price${itemprice}</h1>
            </div>`;
        document.getElementById('product-detail').insertAdjacentHTML('beforeend', row);
    }
})
function bookorder() {
    let name = document.getElementById('fname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let hosue = document.getElementById('house-no').value;
    let city = document.getElementById('city').value;
    let dist = document.getElementById('dist').value;
    let state = document.getElementById('state').value;
    let pincode = document.getElementById('pincode').value;
    var exsit = JSON.parse(localStorage.getItem('orderhistory')) || [];
    var orderhistory = [{
        "img": imgss,
        "title": abbbc,
        "name": name,
        "phone": phone,
        "email": email,
        "hosue": hosue,
        "city": city,
        "dist": dist,
        "state": state,
        "pincode": pincode,
    }];
    exsit.push(orderhistory);
    let json = JSON.stringify(exsit)
    localStorage.setItem('orderhistory', json);  
}

  
