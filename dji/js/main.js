import products from './products.js';
import { renderProductCards } from './modules/productCards.js';
import { paginate } from './modules/pagination.js';
import { closeCart, openCart } from './modules/cartPopup.js';
import { cartData } from './modules/cartData.js';

window.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.js-products-list');

    renderProductCards(products, productContainer);
    // paginate(products);
    openCart();
    closeCart();
    cartData();
});

const btnOrder = document.querySelector('.js-btn-order');
btnOrder.addEventListener('click', (event) => {
    event.preventDefault();
    showAlert('Ваше замовлення прийняте!');
});

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.textContent = message;

    document.body.appendChild(alertBox);
    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
        document.body.removeChild(alertBox);
    }, 3000); // Повідомлення зникне через 3 секунди
}




