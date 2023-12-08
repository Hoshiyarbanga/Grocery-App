var dloc = window.location.href;
var dsplt = dloc.split("?");
let secondOperand = dsplt[1];
var abc = secondOperand.split("=");
let second = abc[1];

fetch("https://fakestoreapi.com/products")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach((product) => {
            if (product.id == second) {
                const card = `<div class="col-lg-5">
                                     <div class="card" style="width:28rem;">
                                          <img src="${product.image}" alt="..." id="cart-img" width="100%" height="500px">
                                           
                                     </div>
                               </div>
                               <div class="col-lg-7">
                                     <div class="title">
                                        <h2 id="title-product">${product.title}</h2>
                                     </div>
                                     <div class="price">
                                        <h3 id="price-project">${product.price}</h3>
                                     </div>
                                   
                                     <div class="description">
                                       
                                        <p>${product.description}</p>
                                     </div>
                                     <div class="card-body">
                                                <input type="number" min="3" max="10" value="3" id="quantity">
                                                 <a href="#" class="card-link btn btn-primary" onclick="AddCart()">Add to Cart</a>
                                             
                                             </div>
                            </div>`;
                document
                    .getElementById("detail")
                    .insertAdjacentHTML("beforeend", card);
                  

            }
        });
    })
    .catch((error) => console.log(error));


    function AddCart(){
       let img = document.getElementById('cart-img').src;
       let title = document.getElementById('title-product').innerHTML;
       let price = document.getElementById('price-project').innerHTML;
       let quantity = document.getElementById('quantity').value;
       var  exsit = JSON.parse(localStorage.getItem('cart-page')) || [];
       var cartpage= [{
        "img":img,
        "title":title,
        "price":price,
        "quantity":quantity,
    }];
    exsit.push(cartpage);
    let json = JSON.stringify(exsit)
     localStorage.setItem('cart-page',json);
    }