document.addEventListener("DOMContentLoaded", function() {
    // Create a new section element
    const newSection = document.createElement('section');

    // Set an ID attribute for the new section (optional)
    newSection.id = 'newSection';

    // Add some content to the new section
    newSection.innerHTML = `
        <h2>SERVICIOS DE WRAP</h2>
        <h5>Esto son nuestros Serivicos</h5>
        <p>
Nos especializamos en ofrecer servicios de envoltura de vehículos de alta calidad, diseñados para satisfacer todas sus necesidades de personalización y protección.
<BR>
Nos encantaría ayudarlo/a a transformar y proteger su vehículo con nuestras envolturas de primera categoría. 
<BR>
Ya sea que esté buscando un nuevo look, proteger la pintura original de su auto, o promocionar su negocio con una envoltura publicitaria, estamos aquí para hacer realidad su visión.
<BR>
<BR>
Al elegir nuestro servicio, puede esperar:
<BR>
<BR>
-Materiales de la más alta calidad que garantizan durabilidad y un acabado impecable.
<BR>
-Instalación profesional por expertos altamente capacitados.
<BR>
-Opciones personalizadas para satisfacer sus necesidades y preferencias específicas.
<BR>
<BR>


    `;
    // Set the background color and text color
    newSection.style.backgroundColor = 'brown';
    newSection.style.color = "white";

    // Append the new section to an existing element in the DOM
    const container = document.getElementById('container');
    container.appendChild(newSection);
});
