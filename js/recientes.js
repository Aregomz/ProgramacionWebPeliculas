document.addEventListener("DOMContentLoaded", function() {
    // Llama a la API local para obtener los datos de las peliculas
    fetch('http://localhost:9000/peliculas/recientes')
        .then(response => response.json())
        .then(peliculas => {
            // Procesa los datos de las peliculas aquí
            console.log('Datos de recientes extraídos correctamente:', peliculas);

            // Obtén una referencia al contenedor del carrusel
            const peliculasCarousel = document.getElementById('contenedor-carrusel');

            // Variable para almacenar el HTML generado dinámicamente
            let dynamicHTML = '';


            peliculas.forEach(recientes => {
                dynamicHTML += `
                
                <div class="contenedor-carrusel">
                <div class="carrusel" >
               <div class="pelicula">
                <a href="../vistas/detalles.html?id={$recientes.idPelicula}"><img src="${recientes.imagen}" alt=""> </a>
            </div>
            </div>
            </div>
                `;
            });

            // Inserta el HTML generado dinámicamente en el marcador
            peliculasCarousel.insertAdjacentHTML('beforeend', dynamicHTML);

        })
        .catch(error => {
            console.error('Error al obtener datos de recientes:', error);
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar datos de películas
    
        fetch(`http://localhost:9000/series/recientes`)
            .then(response => response.json())
            .then(series => {
                // Procesa los datos de las películas aquí
                console.log(`Datos de recientes extraídos correctamente:`, series);

                // Obtén una referencia al contenedor del carrusel
                const seriesCarousel2 = document.getElementById('contenedor-carrusel2');

                // Variable para almacenar el HTML generado dinámicamente
                let dynamicHTML = '';

                series.forEach(recientes => {
                    dynamicHTML += `
                    <div class="contenedor-carrusel carrusel-segundo">
                    <div class="carrusel">
                        <div class="pelicula">
                            <a href="../vistas/detalles.html?id={$recientes.idSeries}"><img src="${recientes.imagen}" alt=""> </a>
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