let products =
[
    {
        name: 'Uva',
        tag: 'uva',
        type: 'Itália',
        imagem: 'https://statics.angeloni.com.br/super/files/produtos/164224/164224_1_zoom.jpg',
        price: 9,
        inCart: 0
    },
    {
        name: 'Morango',
        tag: 'morango',
        type: 'Albion',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_741461-MLB31121407872_062019-W.jpg',
        price: 12,
        inCart: 0
    },
    {
        name: 'Banana',
        tag: 'banana',
        type: 'Prata',
        imagem: 'https://static.carrefour.com.br/medias/sys_master/images/images/h9d/hca/h00/h00/14506624450590.jpg',
        price: 4,
        inCart: 0
    },
    {
        name: 'Framboesa',
        tag: 'framboesa',
        type: 'Vermelha',
        imagem: 'https://www.dventoempolpa.com.br/wp-content/uploads/2018/10/Framboesa-1.jpg',
        price: 15,
        inCart: 0
    },
    {
        name: 'Manga',
        tag: 'manga',
        type: 'Palmer',
        imagem: 'https://static.carrefour.com.br/medias/sys_master/images/images/h46/h3c/h00/h00/13957618860062.jpg',
        price: 6,
        inCart: 0
    },
    {
        name: 'Maçã',
        tag: 'maçã',
        type: 'Granny Smith',
        imagem: 'https://d26lpennugtm8s.cloudfront.net/stores/001/194/977/products/maca-verde11-f2675088a3817ad9c615897570128348-640-0.jpg',
        price: 5,
        inCart: 0
    },
    {
        name: 'Kiwi',
        tag: 'kiwi',
        type: 'Gold',
        imagem: 'https://static3.tcdn.com.br/img/img_prod/450860/1116_1_20190611093621.jpg',
        price: 11,
        inCart: 0
    },
    {
        name: 'Laranja',
        tag: 'laranja',
        type: 'Bahia',
        imagem: 'https://www.macsupermercados.com.br/wp-content/uploads/2019/06/laranja-bahia.jpg',
        price: 7,
        inCart: 0
    }
]

if(document.getElementById('insiraProduto'))
{
    let insiraProduto = document.getElementById('insiraProduto');
    products.forEach(obj => 
        {
                insiraProduto.innerHTML += 
                `
                <div class="image">
                    <img src="${obj.imagem}" alt="uva"></img>
                    <h3>${obj.name}</h3>
                    <h5>${obj.type}</h5>
                    <h3>R$${obj.price}</h3>
                    <a class="add-cart cart1" href="#">Adicionar ao carrinho</a>
                    <input type="hidden" value="15"></input>
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
                <span class="sm-hide">${item.name}</span>
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
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
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
