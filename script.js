function calculerMarge() {
  const semences = parseFloat(document.getElementById("semences").value) || 0;
  const engrais = parseFloat(document.getElementById("engrais").value) || 0;
  const mainOeuvre = parseFloat(document.getElementById("mainOeuvre").value) || 0;
  const prixVente = parseFloat(document.getElementById("prixVente").value) || 0;

  const totalCouts = semences + mainOeuvre;
   // Calcul du bénéfice
  const benefice = prixVente - totalCouts;

  // Détermination de l'état
  let etat;
  if (benefice > 0) {
    etat = "Bénéfice";
  } else if (benefice === 0) {
    etat = "Équilibre";
  } else {
    etat = "Perte";
  }
 // Calcul de la marge en pourcentage
  const margePourcentage = ((benefice / totalCouts) * 100).toFixed(2);

  // Affichage des résultats
  const resultatDiv = document.getElementById("resultat");
  resultatDiv.innerHTML = `
     Coût total : <strong>${totalCouts.toLocaleString()} FCFA</strong><br>
     Bénéfice / Perte : <strong>${benefice.toLocaleString()} FCFA</strong><br>
     Marge : <strong>${margePourcentage} %</strong> (Profil)<br>
    État : <strong>${etat}</strong>
  `;
}
