document.addEventListener("DOMContentLoaded", function() {
    // Create a new section element
    const newSection = document.createElement('section');

    // Set an ID attribute for the new section (optional)
    newSection.id = 'newSection';

    // Add some content to the new section
    newSection.innerHTML = `
        <h2>SERVICIOS</h2>
        <h5>Esto son nuestros Serivicos</h5>
        <p>
        <h4 style="background-color: #7a0606"> Servicios Destacados:</b>
    <br>
    
<li>1.Envoltura de Cambio de Color: Amplia variedad de colores y acabados (mate, brillo, satinado, metálico) para darle a tu auto una nueva personalidad.</li>
    
    <li>2.Envoltura Publicitaria: Promociona tu negocio con diseños personalizados que convertirán tu vehículo en una herramienta de marketing móvil.</li>
   
   <li>3.Protección de Pintura (PPF): Película transparente para proteger tu auto contra rasguños, astillas y otros daños menores.</li>
   
    <li>4.Envoltura de Detalles: Personaliza partes específicas de tu auto, como espejos, techo y capó, para un toque único.</li>
    <br>
    
  <b>Servicios de Reparación:</b>
    <br>
    
  <li>1.Arreglo de Carros: Servicio completo de reparación y mantenimiento de vehículos.</li>
    
  <li>2.Reparación de Marchas: Diagnóstico y reparación de problemas en la transmisión de tu auto.</li>
   
  <li>3.Alternadores: Servicio de reparación y reemplazo de alternadores para asegurar el correcto funcionamiento eléctrico.</li>
   
  <li>4.Luces: Instalación y reparación de sistemas de iluminación, incluyendo faros, luces traseras y luces interiores.</li>
    
  <li>5.Cortos: Diagnóstico y reparación de cortocircuitos eléctricos.</li>
   
  <li>6.Ventanas: Reparación y reemplazo de ventanas y sistemas de elevación.</li>
  
  <li>7.Abanicos: Mantenimiento y reparación de sistemas de enfriamiento y ventilación.</li>
   
  <li>8.Tableros: Diagnóstico y reparación de problemas en el tablero de instrumentos.</li>
    
  <li>9.Sistemas de Sonido: Instalación y reparación de equipos de sonido y entretenimiento.</li>
    
  <li>10.Bombas de Gas: Reemplazo y reparación de bombas de gasolina.</h4></li>
  <br>
  
    <br>
    <br>

    `;
    // Set the background color and text color
    newSection.style.backgroundColor = 'brown';
    newSection.style.color = "white";

    // Append the new section to an existing element in the DOM
    const container = document.getElementById('container');
    container.appendChild(newSection);
});
