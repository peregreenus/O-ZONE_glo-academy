const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');

    const openCart = function () {
        cartModal.style.display = 'flex';
    };

    const closeCart = function () {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);

};

export default cart;