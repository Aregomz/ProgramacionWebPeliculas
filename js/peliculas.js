document.addEventListener("DOMContentLoaded", function() {
    // Llama a la API local para obtener los datos de las series
    fetch('http://localhost:9000/peliculas/terror')
        .then(response => response.json())
        .then(peliculas => {
            // Procesa los datos de las series aquí
            console.log('Datos de series extraídos correctamente:', peliculas);

            // Obtén una referencia al contenedor del carrusel
            const peliculasCarousel = document.getElementById('contenedor-carrusel');

            // Variable para almacenar el HTML generado dinámicamente
            let dynamicHTML = '';


            peliculas.forEach(terror => {
                dynamicHTML += `
                
                <div class="contenedor-carrusel">
                <div class="carrusel" >
               <div class="pelicula">
                <a href="###"><img src="${terror.imagen}" alt=""> </a>
            </div>
            </div>
            </div>
                `;
            });

            // Inserta el HTML generado dinámicamente en el marcador
            peliculasCarousel.insertAdjacentHTML('beforeend', dynamicHTML);

        })
        .catch(error => {
            console.error('Error al obtener datos de series:', error);
        });
});

  