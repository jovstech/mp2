let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Projector',
        price: 15000,
        inCart: 0 

    },

    {
        name: 'Redmi Note 13r',
        price: 15000,
        inCart: 0 

    },

    {
        name: 'Viva Smart TV',
        price: 4999,
        inCart: 0 

    },

    {
        name: 'Oppo A16K',
        price: 599,
        inCart: 0 

    },

    {
        name: 'Bavin Headphone',
        price: 12500,
        inCart: 0 

    },

    {
        name: 'OTG Adapter',
        price: 100,
        inCart: 0 

    },

    {
        name: 'PowerBank',
        price: 999,
        inCart: 0 

    },

    {
        name: 'Smart Switch',
        price: 999,
        inCart: 0 

    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
       
        cartNumbers();
    })
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
   
}