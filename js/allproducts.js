fetch('https://fakestoreapi.com/products')
.then(res=>{
   return res.json();
})
.then(data=>{
  data.forEach(product => {
    const card = `
    <div class="col-sm-5 card" style="width: 18rem;">
        <img src="${product.image}" alt="..." width="100%" height="200px">
        <div class="card-body">
<h5 class="card-title">${product.title}</h5>
 </div>
 <ul class="list-group list-group-flush">
<li class="list-group-item" >${product.price} Rs</li>

</ul>
<a href="http://127.0.0.1:5500/product_detail.html?id=${product.id}" class="card-link btn btn-primary">Detail</a>
<div class="card-body">
</div>
        </div>`;

        
    document.getElementById('products').insertAdjacentHTML('beforeend',card);
  })
})
.catch(error => console.log(error));