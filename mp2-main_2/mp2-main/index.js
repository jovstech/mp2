let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Product8',
        price: 15000,
        inCart: 0 

    },

    {
        name: 'Product7',
        price: 15000,
        inCart: 0 

    },

    {
        name: 'Product6',
        price: 4999,
        inCart: 0 

    },

    {
        name: 'Product5',
        price: 599,
        inCart: 0 

    },

    {
        name: 'product4',
        price: 12500,
        inCart: 0 

    },

    {
        name: 'product3',
        price: 100,
        inCart: 0 

    },

    {
        name: 'product2',
        price: 999,
        inCart: 0 

    },

    {
        name: 'product1',
        price: 999,
        inCart: 0 

    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => { 
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
  
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

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
    let productContainer = document.querySelector(".products");
    console.log(cartItems);

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            
            <img src="./product/${item.name}.jpg">
            <span>${item.name}</span>
            </div>

            <div class="price">${item.price} </div>`
        });
    }
}

displayCart();



