// Fonction pour ajouter un produit au panier
function addToCart(productName, productPrice) {
    // Créer un élément de liste pour le produit ajouté au panier
    var cartItem = document.createElement('li');
    cartItem.textContent = productName + ' - $' + productPrice;

    // Ajouter l'élément à la liste du panier
    document.getElementById('cart').appendChild(cartItem);

    // Vous pouvez également mettre à jour le total du panier ici si nécessaire

    // Afficher un message pour indiquer que le produit a été ajouté au panier
    alert('Produit ajouté au panier : ' + productName);
}

