let products =
[
    {
        name: 'Uvaum',
        tag: 'uvaum',
        fruta: 'Uva',
        type: 'Sémillon',
        medida: 500,
        produtor: 'Família Medina',
        imagem: 'images/d1.jpg',
        price: 9,
        inCart: 0,
        inStock: 3
    },
    {
        name: 'Uvadois',
        tag: 'uvadois',
        fruta: 'Uva',
        type: 'Merlot',
        medida: 500,
        produtor: 'Família Denaro',
        imagem: 'images/d2.jpg',
        price: 12,
        inCart: 0,
        inStock: 9
    },
    {
        name: 'Uvatres',
        tag: 'uvatres',
        fruta: 'Uva',
        type: 'Malbec',
        medida: 300,
        produtor: 'Família Denaro',
        imagem: 'images/d3.jpg',
        price: 15,
        inCart: 0,
        inStock: 2
    },
    {
        name: 'Uvaquatro',
        tag: 'uvaquatro',
        fruta: 'Uva',
        type: 'Grenache',
        medida: 200,
        produtor: 'Fazenda das Uvas',
        imagem: 'images/d4.jpg',
        price: 14,
        inCart: 0,
        inStock: 6
    },
    {
        name: 'Morangoum',
        tag: 'morangoum',
        fruta: 'Morango',
        type: 'Albion',
        medida: 500,
        produtor: 'Frutas da Terra',
        imagem: 'images/d5.jpg',
        price: 10,
        inCart: 0,
        inStock: 5
    },
    {
        name: 'Morangodois',
        tag: 'morangodois',
        fruta: 'Morango',
        type: 'Capri',
        medida: 500,
        produtor: 'Frutas da Terra',
        imagem: 'images/d6.jpg',
        price: 13,
        inCart: 0,
        inStock: 4
    },
    {
        name: 'Mangaum',
        tag: 'mangaum',
        fruta: 'Manga',
        type: 'Palmer',
        medida: 450,
        produtor: 'Frutas da Terra',
        imagem: 'images/d7.jpg',
        price: 5,
        inCart: 0,
        inStock: 1
    },
    {
        name: 'Mangadois',
        tag: 'mangadois',
        fruta: 'Manga',
        type: 'Tommy',
        medida: 650,
        produtor: 'Fazenda Mesina',
        imagem: 'images/d8.jpg',
        price: 4,
        inCart: 0,
        inStock: 1
    }
]

if(document.getElementById('insiraProduto'))
{
    let insiraProduto = document.getElementById('insiraProduto');
    products.forEach(obj => 
        {
                insiraProduto.innerHTML += 
                `
                <div class="${obj.fruta}" style="display: none;">
                <div class="image">
                    <img src="${obj.imagem}" alt="uva"></img>
                    <h3>${obj.type}</h3>
                    <p>Peso: ${obj.medida} gramas</p>
                    <p>Produtor: ${obj.produtor}</p>
                    <h3>R$${obj.price}</h3>
                    <input type="number" placeholder="1" min="0" max="${obj.inStock}"><button class="add-cart cart1">Adicionar Carrinho</button></input>
                </div>
                </div>
                `
        })
}

let carts = document.querySelectorAll('.add-cart');

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    // let productNumbers = localStorage.getItem('cartNumbers');
    // productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="${item.imagem}" />
                <p>${item.fruta}</p>
                <span class="sm-hide" style="display: none;" >${item.name}</span>
            </div>
            <div class="price sm-hide">R$${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">R$${item.inCart * item.price},00</div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Valor Total</h4>
                <h4 class="basketTotal">R$${cart},00</h4>
            </div>`

        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();
