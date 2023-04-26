let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'All Purpose Projector',
        price: 15000,
        tag: 'Product8',
        inCart: 0 

    },

    {
        name: 'Redmi Note 13',
        price: 15000,
        tag: 'Product6',
        inCart: 0 

    },

    {
        name: 'Viva Smart TV',
        price: 4999,
        tag:'Product7',
        inCart: 0 

    },

    {
        name: 'Smart Watch',
        price: 999,
        tag:'Product5',
        inCart: 0 

    },

    {
        name: 'Power Bank',
        price: 999,
        tag: 'product4',
        inCart: 0 

    },

    {
        name: 'OTG Adapter',
        price: 100,
        tag: 'product3',
        inCart: 0 

    },

    {
        name: 'Bavin Headphone',
        price: 999,
        tag: 'product2',
        inCart: 0 

    },

    {
        name: 'Oppo A16K',
        price: 999,
        tag: 'product1',
        inCart: 0 

    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => { 
        alert("You have successfully added item to your cart");
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
setItems(product);
}

function setItems(product){
let cartItems = localStorage.getItem('productsInCart');
cartItems =  JSON.parse(cartItems);

if(cartItems != null){
    
    if(cartItems[product.name] == undefined){
        cartItems = {
            ...cartItems,
            [product.name]: product
        }
    }
    cartItems[product.name].inCart += 1;
}else{
    product.inCart = 1;
 cartItems = {
    [product.name]: product
}
}

localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    //console.log("The Product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
  
   // console.log("My cartCost is", cartCost);
   // console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        product.price); 
    }else{
        localStorage.setItem("totalCost", product.price);
    }

    
    //console.log(typeof product.price);
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
    console.log(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <button>X</button>
            <img src="./product/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
            <div class="price">${item.price}.00 </div>
            <div class="quantity">
            <button><</button>
            <span>${item.inCart}
            <button>></button>
            </div>
            <div class="total">
            ₱${item.inCart * item.price}.00
            </div>`;
        });
       
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        ₱${cartCost}.00
        </h4> 
        </div>`;

        
    }

}

displayCart();



