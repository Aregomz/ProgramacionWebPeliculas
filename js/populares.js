document.addEventListener("DOMContentLoaded", function() {
    // Llama a la API local para obtener los datos de las series
    fetch('http://localhost:9000/peliculas/populares')
        .then(response => response.json())
        .then(peliculas => {
            // Procesa los datos de las series aquí
            console.log('Datos de populares extraídos correctamente:', peliculas);

            // Obtén una referencia al contenedor del carrusel
            const peliculasCarousel = document.getElementById('contenedor-carrusel');

            // Variable para almacenar el HTML generado dinámicamente
            let dynamicHTML = '';


            peliculas.forEach(populares => {
                dynamicHTML += `
                
                <div class="contenedor-carrusel">
                <div class="carrusel" >
               <div class="pelicula">
                <a href="###"><img src="${populares.imagen}" alt=""> </a>
            </div>
            </div>
            </div>
                `;
            });

            // Inserta el HTML generado dinámicamente en el marcador
            peliculasCarousel.insertAdjacentHTML('beforeend', dynamicHTML);

        })
        .catch(error => {
            console.error('Error al obtener datos de populares:', error);
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar datos de películas
    
        fetch(`http://localhost:9000/series/populares`)
            .then(response => response.json())
            .then(series => {
                // Procesa los datos de las películas aquí
                console.log(`Datos de populares extraídos correctamente:`, series);

                // Obtén una referencia al contenedor del carrusel
                const seriesCarousel2 = document.getElementById('contenedor-carrusel2');

                // Variable para almacenar el HTML generado dinámicamente
                let dynamicHTML = '';

                series.forEach(populares => {
                    dynamicHTML += `
                    <div class="contenedor-carrusel carrusel-segundo">
                    <div class="carrusel">
                        <div class="pelicula">
                            <a href="###"><img src="${populares.imagen}" alt=""> </a>
                        </div>
                        </div>
                        </div>    
                    `;
                });

                // Inserta el HTML generado dinámicamente en el carrusel correspondiente
                seriesCarousel2.insertAdjacentHTML('beforeend', dynamicHTML);

            })
            .catch(error => {
                console.error(`Error al obtener datos de populares:`, error);
            });
    }

);
