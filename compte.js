// register.js
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envoyer les données au serveur pour enregistrement
    // Note: Cette partie doit être gérée côté serveur pour des raisons de sécurité
    console.log(`Inscription - Nom d'utilisateur: ${username}, E-mail: ${email}, Mot de passe: ${password}`);
});
