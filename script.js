document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupération des valeurs du formulaire
    let nom = document.getElementById("nom").value;
    let prenoms = document.getElementById("prenoms").value;
    let dateNaissance = document.getElementById("date_naissance").value;
    let telephone = document.getElementById("telephone").value;
    let motivation = document.getElementById("motivation").value;

    // Affichage des informations dans la section de confirmation
    document.getElementById("confirmNom").textContent = nom;
    document.getElementById("confirmPrenoms").textContent = prenoms;
    document.getElementById("confirmDate").textContent = dateNaissance;
    document.getElementById("confirmTel").textContent = telephone;
    document.getElementById("confirmMotivation").textContent = motivation;

    // Rendre visible la section de confirmation
    document.getElementById("confirmation").classList.remove("hidden");

    // Réinitialiser le formulaire
    document.getElementById("inscriptionForm").reset();
});