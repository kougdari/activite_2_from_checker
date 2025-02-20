document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nom = document.getElementById("nom").value.trim();
    let prenoms = document.getElementById("prenoms").value.trim();
    let dateNaissance = document.getElementById("dateNaissance").value;
    let telephone = document.getElementById("telephone").value.trim();
    let motivation = document.getElementById("motivation").value.trim();

    let age = calculerAge(dateNaissance);
    if (age < 18) {
        alert("Vous devez avoir au moins 18 ans pour vous inscrire.");
        return;
    }

    if (!/^(01)\d{8}$/.test(telephone)) {
        alert("Le numéro de téléphone doit commencer par '01' et contenir 10 chiffres.");
        return;
    }

    if (motivation.length < 1000 || motivation.length > 2500) {
        alert("La motivation doit contenir entre 1000 et 2500 caractères.");
        return;
    }

    // Affichage des résultats
    document.getElementById("resNom").innerText = nom;
    document.getElementById("resPrenoms").innerText = prenoms;
    document.getElementById("resDateNaissance").innerText = dateNaissance;
    document.getElementById("resTelephone").innerText = telephone;
    document.getElementById("resMotivation").innerText = motivation;

    document.getElementById("resultat").classList.remove("hidden");
});

function calculerAge(dateNaissance) {
    let naissance = new Date(dateNaissance);
    let today = new Date();
    let age = today.getFullYear() - naissance.getFullYear();
    let mois = today.getMonth() - naissance.getMonth();
    if (mois < 0 || (mois === 0 && today.getDate() < naissance.getDate())) {
        age--;
    }
    return age;
}
