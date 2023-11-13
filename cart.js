

// Fonction pour supprimer un produit du panier
function removeFromCart(index) {
    var cartItem = document.querySelectorAll('#cart tbody tr')[index];
    if (cartItem) {
        cartItem.remove();
        updateTotal();
    }
}

// Fonction pour mettre à jour le total du panier
function updateTotal() {
    var total = 0;
    var cartRows = document.querySelectorAll('#cart tbody tr');

    cartRows.forEach(function (row) {
        var price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('Fcfa', '').replace(',', ''));
        var quantity = parseInt(row.querySelector('td:nth-child(5) input').value);
        total += price * quantity;
    });

    // Mettre à jour le total affiché
    document.querySelector('#subtotal td:last-child').textContent = total.toLocaleString('fr-FR') + 'Fcfa';
}

// Ajouter des écouteurs d'événements pour les boutons de suppression du panier
document.addEventListener('DOMContentLoaded', function () {
    var removeButtons = document.querySelectorAll('#cart tbody tr td:first-child a');

    removeButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            removeFromCart(index);
        });
    });

    // Ajouter un écouteur d'événements pour la modification de la quantité
    var quantityInputs = document.querySelectorAll('#cart tbody tr td:nth-child(5) input');

    quantityInputs.forEach(function (input) {
        input.addEventListener('change', function () {
            updateTotal();
        });
    });

    // Ajouter un écouteur d'événements pour le bouton "Appliquer" du coupon
    var applyCouponButton = document.getElementById('coupon').querySelector('button');
    applyCouponButton.addEventListener('click', function () {
        
    });
});


//Varier la quantité de produit

// Fonction pour augmenter la quantité d'un produit
function increaseQuantity(button) {
    var input = button.parentNode.querySelector('.quantity-input');
    var currentValue = parseInt(input.value);
    input.value = currentValue + 1;
    updateTotal();
}

// Fonction pour diminuer la quantité d'un produit
function decreaseQuantity(button) {
    var input = button.parentNode.querySelector('.quantity-input');
    var currentValue = parseInt(input.value);
    


    if (currentValue > 1) {
        input.value = currentValue - 1;
        updateTotal();
    }
}



document.addEventListener('DOMContentLoaded', function () {
   

    // Ajouter un écouteur d'événements pour la modification de la quantité
    var quantityInputs = document.querySelectorAll('#cart tbody tr td:nth-child(5) input');

    quantityInputs.forEach(function (input) {
        input.addEventListener('change', function () {
            updateTotal();
        });
    });
    
    // Ajouter un écouteur d'événements pour le bouton "Appliquer" du coupon
    var applyCouponButton = document.getElementById('coupon').querySelector('button');
    applyCouponButton.addEventListener('click', function () {
        
    });
});

