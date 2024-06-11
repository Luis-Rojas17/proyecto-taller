document.addEventListener("DOMContentLoaded", function() {
  // Create a new section element
  const newSection = document.createElement('section');

  // Set an ID attribute for the new section (optional)
  newSection.id = 'newSection';

  // Add some content to the new section
  newSection.innerHTML = `
      <h2>PRECICIOS DE NUESTRO SERVICIO</h2>
      <h5>Esto son nuestros Precicios</h5>
      <p>
      <br>
marchas: $300 pesos
<br>
alternadores: $300 pesos
<br>
luces: $200 pesos
<br>
cortos: $1500 pesos
<br>
Wrap: Depende de tu carro
<br>
ventanas: $300 pesos
<br>
abanicos: $400 pesos
<br>
tableros: $500 pesos 
<br>
sonido : $300 pesos
<br>
bomba del gas: $1000 pesos
<br>

  `;
  // Set the background color and text color
  newSection.style.backgroundColor = 'brown';
  newSection.style.color = "white";

  // Append the new section to an existing element in the DOM
  const container = document.getElementById('container');
  container.appendChild(newSection);
});
