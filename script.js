function calculerMarge() {
  const semences = parseFloat(document.getElementById("semences").value) || 0;
  const engrais = parseFloat(document.getElementById("engrais").value) || 0;
  const mainOeuvre = parseFloat(document.getElementById("mainOeuvre").value) || 0;
  const autres = parseFloat(document.getElementById("autres").value) || 0;
  const prixVente = parseFloat(document.getElementById("prixVente").value) || 0;

  const totalCouts = semences + engrais + mainOeuvre + autres;
  const marge = prixVente - totalCouts;

  const resultatDiv = document.getElementById("resultat");
  resultatDiv.innerHTML = `
    ✅ Coût total : <strong>${totalCouts.toLocaleString()} FCFA</strong><br>
    💰 Marge bénéficiaire : <strong>${marge.toLocaleString()} FCFA</strong>
  `;
}
