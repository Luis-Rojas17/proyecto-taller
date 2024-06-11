document.addEventListener("DOMContentLoaded", function() {
    // Create a new section element
    const newSection = document.createElement('section');

    // Set an ID attribute for the new section (optional)
    newSection.id = 'newSection';

    // Add some content to the new section
    newSection.innerHTML = `
        <h2>INFORMACION DE AUTO SERVICIO ROJAS TALLER</h2>
        <br>
        <h5>¡Oferta Especial!
        <br>
Por tiempo limitado, obtén un 10% de descuento en tu primer servicio con nosotros. No pierdas esta oportunidad de transformar y proteger tu vehículo con los mejores.
<br<
<br>
Contáctanos hoy mismo para una consulta gratuita:
<br>
📧 AutoServiciosRojas17@email.com
<br>
📞 +52 492 105 4705</h5>
        


    `;
    // Set the background color and text color
    newSection.style.backgroundColor = 'brown';
    newSection.style.color = "white";

    // Append the new section to an existing element in the DOM
    const container = document.getElementById('container');
    container.appendChild(newSection);
});
