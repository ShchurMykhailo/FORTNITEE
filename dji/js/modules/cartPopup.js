const cart = document.querySelector('.js-cart');
const overlay = document.querySelector('.js-overlay');
const openCartButton = document.querySelector('.js-cart-btn');
const closeCartElements = document.querySelectorAll('.js-close-cart');


const getScrollbarWidth = () => {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollbarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollbarWidth;
};

const scroll = getScrollbarWidth();

const toggleCart = (isActive) => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    document.body.style.marginRight = isActive ? `${scroll}px` : `0px`;
    cart.classList.toggle('active', isActive);
    overlay.classList.toggle('active', isActive);
};

const openCart = () => {
    openCartButton.addEventListener('click', () => {
        
        // document.body.style.overflow = 'hidden';
        // document.body.style.marginRight = `${scroll}px`;
        // cart.classList.add('active');
        // overlay.classList.add('active');

        toggleCart(true);
    });
};
const closeCart = () => {
    closeCartElements.forEach((item) => {
        item.addEventListener('click', () => {
            // document.body.style.overflow = '';
            // document.body.style.marginRight = `0px`;
            // cart.classList.remove('active');
            // overlay.classList.remove('active');
            toggleCart(false);
        });
    });   
};



export {
    openCart,
    closeCart
};