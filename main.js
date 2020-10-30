let products =
[
    {
        name: 'Uvaum',
        tag: 'uvaum',
        fruta: 'Uva',
        type: 'Uva itália',
        medida: 500,
        produtor: 'Fazenda Boa',
        imagem: 'images/d1.jpg',
        price: 12,
        inCart: 0,
        inStock: 3
    },
    {
        name: 'Uvadois',
        tag: 'uvadois',
        fruta: 'Uva',
        type: 'Uva itália',
        medida: 500,
        produtor: 'Fazenda da fartura',
        imagem: 'images/d2.jpg',
        price: 10,
        inCart: 0,
        inStock: 9
    },
    {
        name: 'Uvatres',
        tag: 'uvatres',
        fruta: 'Uva',
        type: 'Uva itália',
        medida: 300,
        produtor: 'Claúdio',
        imagem: 'images/d3.jpg',
        price: 8,
        inCart: 0,
        inStock: 2
    },
    {
        name: 'Uvaquatro',
        tag: 'uvaquatro',
        fruta: 'Uva',
        type: 'Uva Merlot',
        medida: 200,
        produtor: 'Pedro',
        imagem: 'images/d4.jpg',
        price: 7,
        inCart: 0,
        inStock: 6
    },
    {
        name: 'Uvacinco',
        tag: 'uvacinco',
        fruta: 'Uva',
        type: 'Uva Merlot',
        medida: 200,
        produtor: 'João',
        imagem: 'images/d4.jpg',
        price: 8,
        inCart: 0,
        inStock: 6
    },
    {
        name: 'Uvaseis',
        tag: 'uvaseis',
        fruta: 'Uva',
        type: 'Uva Itália',
        medida: 200,
        produtor: 'Glorinha',
        imagem: 'images/d4.jpg',
        price: 10,
        inCart: 0,
        inStock: 6
    },
    {
        name: 'Morangoum',
        tag: 'morangoum',
        fruta: 'Morango',
        type: 'Morango Albion',
        medida: 300,
        produtor: 'Fazenda Boa Esperança',
        imagem: 'images/d5.jpg',
        price: 6,
        inCart: 0,
        inStock: 5
    },
    {
        name: 'Morangodois',
        tag: 'morangodois',
        fruta: 'Morango',
        type: 'Morango Capri',
        medida: 500,
        produtor: 'Fazenda Bom Negócio',
        imagem: 'images/d5.jpg',
        price: 5,
        inCart: 0,
        inStock: 2
    },
    {
        name: 'Morangotres',
        tag: 'morangotres',
        fruta: 'Morango',
        type: 'Morango Capri',
        medida: 500,
        produtor: 'Estufa Claúdia',
        imagem: 'images/d5.jpg',
        price: 6,
        inCart: 0,
        inStock: 2
    },
    {
        name: 'Morangoquatro',
        tag: 'morangoquatro',
        fruta: 'Morango',
        type: 'Morango Albion',
        medida: 400,
        produtor: 'Shimay',
        imagem: 'images/d5.jpg',
        price: 7,
        inCart: 0,
        inStock: 2
    },
    {
        name: 'Morangocinco',
        tag: 'morangocinco',
        fruta: 'Morango',
        type: 'Morango Capri',
        medida: 250,
        produtor: 'Rancho dos Morangos',
        imagem: 'images/d5.jpg',
        price: 10,
        inCart: 0,
        inStock: 2
    },
    {
        name: 'Mangaum',
        tag: 'mangaum',
        fruta: 'Manga',
        type: 'Manga Palmer',
        medida: 450,
        produtor: 'Fazenda Boa',
        imagem: 'images/d7.jpg',
        price: 5,
        inCart: 0,
        inStock: 1
    },
    {
        name: 'Mangadois',
        tag: 'mangadois',
        fruta: 'Manga',
        type: 'Manga Tommy',
        medida: 650,
        produtor: 'Fazenda Bom Negócio',
        imagem: 'images/d8.jpg',
        price: 6,
        inCart: 0,
        inStock: 1
    },
    {
        name: 'Mangatres',
        tag: 'mangatres',
        fruta: 'Manga',
        type: ' Manga Palmer',
        medida: 350,
        produtor: 'Zé',
        imagem: 'images/d8.jpg',
        price: 3,
        inCart: 0,
        inStock: 1
    },
    {
        name: 'Mangaquatro',
        tag: 'mangaquatro',
        fruta: 'Manga',
        type: 'Manga Tommy',
        medida: 450,
        produtor: 'Fazenda da Fartura',
        imagem: 'images/d8.jpg',
        price: 4,
        inCart: 0,
        inStock: 1
    },
    {
        name: 'Produtorum',
        tag: 'produtorum',
        fruta: 'BomNegocio',
        type: 'Manga Tommy',
        medida: 250,
        produtor: 'Fazenda Bom Negócio',
        imagem: 'images/d8.jpg',
        price: 6,
        inCart: 0,
        inStock: 1
    },
    {
        name: 'Produtordois',
        tag: 'produtordois',
        fruta: 'BomNegocio',
        type: 'Morango Albion',
        medida: 250,
        produtor: 'Fazenda Bom Negócio',
        imagem: 'images/d8.jpg',
        price: 5,
        inCart: 0,
        inStock: 1
    },
    {
        name: 'Produtortres',
        tag: 'produtortres',
        fruta: 'BomNegocio',
        type: 'Uva Merlot',
        medida: 650,
        produtor: 'Fazenda Bom Negócio',
        imagem: 'images/d8.jpg',
        price: 10,
        inCart: 0,
        inStock: 1
    },
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
                    <h3>${obj.type}</h3>
                    <p>Peso: ${obj.medida} gramas</p>
                    <p>Produtor: ${obj.produtor}</p>
                    <h3>R$${obj.price}</h3>
                    <input type="number" placeholder="1" min="0" max="${obj.inStock}"><button class="add-cart cart1">Comprar</button></input>
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
            `<div class="product"><ion-icon name="close-circle"></ion-icon>
                <p>${item.fruta}<p>
                <p>${item.produtor}</p>
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
