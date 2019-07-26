const products = [...document.querySelectorAll('.product')],
        cartBlock = document.querySelector('.cart'),
            cart = cartBlock.querySelector('.cart__products');
                

for ( const product of products ) {

    const btns = {
        dec: product.querySelector('.product__quantity-control_dec'),
        inc: product.querySelector('.product__quantity-control_inc'),
        add: product.querySelector('.product__add'),
    };

    const newItem = {
        amount: product.querySelector('.product__quantity-value'),
        id: product.dataset.id,
        img: product.querySelector('.product__image')
    }

    btns.dec.addEventListener('click', () => {
        if ( +newItem.amount.textContent === 1) return;

        newItem.amount.textContent--;
    });

    btns.inc.addEventListener('click', () => {
        newItem.amount.textContent++;
    });

    btns.add.addEventListener('click', () => {

        itemsInCart = [...cart.children];

        if ( productFound(newItem.id) === undefined ) {
            
            cart.insertAdjacentHTML('afterbegin', getProductHTML(newItem));
            cartBlock.classList.add('cart-active');
            animate(newItem.img, product, [...cart.children][0]);

        } else {
            itemsInCart.forEach( item => {

                if (item.dataset.id === newItem.id) {
                    
                    const curAmount = item.querySelector('.cart__product-count');
                    const newItemAmount = +curAmount.textContent + +newItem.amount.textContent;
                    curAmount.textContent = newItemAmount;  
                    animate(newItem.img, product, item);
                };     
            });
        };
        saveCart();  
    });    
};

cart.addEventListener('click', (e) => {
    const btn = e.target;

    if ( btn.classList.contains('cart__product-delete') ) {
        
        btn.closest('.cart__product').remove();

        if (cart.children.length === 0) cartBlock.classList.remove('cart-active');

        saveCart();
    }
});

window.addEventListener('load', () => {
    cart.innerHTML = JSON.parse(localStorage.getItem('cart'));

    if (cart.children.length) cartBlock.classList.add('cart-active');
});

function getProductHTML(item) {
    return `<div class="cart__product" data-id="${item.id}">
                <img class="cart__product-image" src="${item.img.src}">
                <div class="cart__product-delete">&times;</div>
                <div class="cart__product-count">${item.amount.textContent}</div>
            </div>`;
};

function productFound (newItemID) {
    return itemsInCart.find( item => {
      return item.dataset.id === newItemID;
    });
};

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart.innerHTML));
};

function animate(newItemPic, product, item) {
    
    const coords = getCoords(newItemPic, item);
    const imgCopy = getImgCopy(product, newItemPic);

    let id = setTimeout(function fn() {

        if (parseInt(imgCopy.style.left) < coords.xDiff && parseInt(imgCopy.style.top) > coords.yDiff) {
            imgCopy.style.top = (parseInt(imgCopy.style.top) + coords.stepY) + 'px';
            imgCopy.style.left = (parseInt(imgCopy.style.left) + coords.stepX) + 'px';

            setTimeout(fn, 10);

        } else {

            imgCopy.remove();
        };
    }, 10);
};

function getCoords (newItemPic, item) {
    const productCoords = newItemPic.getBoundingClientRect(),
            inCartCoords = item.getBoundingClientRect();

    const xDiff = Math.floor(inCartCoords.x - productCoords.x),
            yDiff = Math.floor(inCartCoords.y - productCoords.y);

    const stepX = Math.floor(xDiff / 15),
            stepY = Math.floor(yDiff / 15);

    return {xDiff, yDiff, stepX, stepY};
};

function getImgCopy(product, newItemPic) {
    const imgCopy = newItemPic.cloneNode(false);

    imgCopy.style.position = 'absolute';
    imgCopy.style.top = '59px';
    imgCopy.style.left = '0px';

    product.insertBefore(imgCopy, newItemPic);

    return imgCopy;
};
©
