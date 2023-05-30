document.getElementById('envoyer').addEventListener('click', function() {
    var choix1 = document.getElementById('choix1');
    var valeurChoix1 = choix1.options[choix1.selectedIndex].value;
  
    var nutritionSection = document.getElementById('nutrition');
  
    if (valeurChoix1 === "option1") {
      this.style.color = "red";
      nutritionSection.style.display = 'block'; // Si 'option1' est sélectionnée, afficher l'élément avec l'id 'nutrition'
    } else {
      this.style.color = "white";
      nutritionSection.style.display = 'none'; // Si une autre option est sélectionnée, masquer l'élément avec l'id 'nutrition'
    }
  });
  