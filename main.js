let products =
[
    {
        name: 'Uva',
        tag: 'Itália',
        imagem: 'https://statics.angeloni.com.br/super/files/produtos/164224/164224_1_zoom.jpg',
        price: 9,
        inCart: 0
    },
    {
        name: 'Morango',
        tag: 'Albion',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_741461-MLB31121407872_062019-W.jpg',
        price: 12,
        inCart: 0
    },
    {
        name: 'Uva',
        tag: 'Merlot',
        imagem: 'https://shop.viverosbarber.com/content/productos/merlot-merlot.jpg',
        price: 6,
        inCart: 0
    },
    {
        name: 'Banana',
        tag: 'Prata',
        imagem: 'https://static.carrefour.com.br/medias/sys_master/images/images/h9d/hca/h00/h00/14506624450590.jpg',
        price: 4,
        inCart: 0
    },
    {
        name: 'Framboesa',
        tag: 'Vermelha',
        imagem: 'https://www.dventoempolpa.com.br/wp-content/uploads/2018/10/Framboesa-1.jpg',
        price: 15,
        inCart: 0
    },
    {
        name: 'Manga',
        tag: 'Palmer',
        imagem: 'https://static.carrefour.com.br/medias/sys_master/images/images/h46/h3c/h00/h00/13957618860062.jpg',
        price: 6,
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
                    <h5>${obj.tag}</h5>
                    <h3>R$${obj.price}</h3>
                    <a class="add-cart cart1" href="#">Adicionar ao carrinho</a>
                    <input type="hidden" value="15"></input>
                </div>
                `
        })
}

let carts = document.querySelectorAll('.add-cart');

for (let i=0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () =>
    {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers()
{
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers)
    {
        document.querySelector('.carrinho span').textContent = productNumbers;
    }
}

function cartNumbers(product)
{
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers)
    {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.carrinho span').textContent = productNumbers + 1;
    }
    else
    {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.carrinho span').textContent = 1;
    }

    setItems(product);
}

function setItems(product)
{
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);


    if(cartItems != null)
    {
        if(cartItems[product.tag] == undefined)
        {
            cartItems =
            {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    }
    else
    {
        product.inCart = 1;

        cartItems = 
        {
           [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    console.log("my cartItem are", cartItems);
}

function totalCost(product)
{
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null)
    {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else
    {
        localStorage.setItem("totalCost", product.price);
    }

    console.log("total preco is", cartCost)

}

function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    if( cartItems && productContainer)
    {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>
            {
                productContainer.innerHTML += 
                `
                <div class="product">
                    <ion-icon name="close-circle">
                    </ion-icon>
                    <img class="imgCarrinho" src="${item.imagem}"></img>
                    <span>${item.name}</span>
                </div>
                <div class="price">${item.price}</div>
                <div class="quantity">
                    <ion-icon class="decrease" name="arrow-dropleft-circle">
                    </ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon class="increase" name="arrow-dropright-circle">
                    </ion-icon>
                </div>
                <div class="total">
                    R$
                    ${item.inCart*item.price},00
                </div>
                `
            })
    }

    console.log(cartItems);
}

onLoadCartNumbers();
displayCart();