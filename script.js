const message = () => {
  alert(
    "Bonjour, nous vous informont que le site est en cours de création. Vous pouvez quand même le consulter, Ceci dit pour le moment vous ne pouvez pas encore directement commender sur le site et nous nous escusont d'avance pour toute les gènes que cela pourrait éventuellement vous occasionner. Si jamais vous êtes intérressé par un ou plusieurs article, vous pourrez nous en faire par directement par mail, et nous choisirons ensemble la meilleure solution pour pouvoir vous satisfaire, cela reste notre plus grande préocupation. Notre équipe prend soin de ces client et de sa future clientelle, nous vous souhaitons tous ensemble la bienvenue !"
  );
};

window.onload = message;

// montre la position où on se situe
const position = document.getElementById("position");
position.textContent = "Acceuil";
