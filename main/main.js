document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los elementos de producto en la página
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        // Obtén los botones y el input de cantidad dentro del card
        const decreaseBtn = card.querySelector('#decrease');
        const increaseBtn = card.querySelector('#increase');
        const quantityInput = card.querySelector('#quantity');

        // botones con un identificador único
        if (decreaseBtn && increaseBtn && quantityInput) {
            decreaseBtn.addEventListener('click', function() {
                let quantity = parseInt(quantityInput.value);
                if (quantity > 1) {
                    quantityInput.value = quantity - 1;
                }
            });

            increaseBtn.addEventListener('click', function() {
                let quantity = parseInt(quantityInput.value);
                quantityInput.value = quantity + 1;
            });
        }
    });
});
