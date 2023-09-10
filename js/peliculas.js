document.addEventListener("DOMContentLoaded", function() {
    // Llama a la API local para obtener los datos de las series
    fetch('http://localhost:9000/peliculas/terror')
        .then(response => response.json())
        .then(peliculas => {
            // Procesa los datos de las series aquí
            console.log('Datos de terror extraídos correctamente:', peliculas);

            // Obtén una referencia al contenedor del carrusel
            const peliculasCarousel = document.getElementById('contenedor-carrusel');

            // Variable para almacenar el HTML generado dinámicamente
            let dynamicHTML = '';


            peliculas.forEach(terror => {
                dynamicHTML += `
                
                <div class="contenedor-carrusel">
                <div class="carrusel" >
               <div class="pelicula">
                <a href="../vistas/detalles.html?id=${terror.idPelicula}">
                <img src="${terror.imagen}" alt=""> 
                </a>
            </div>
            </div>
            </div>
                `;
            });

            // Inserta el HTML generado dinámicamente en el marcador
            peliculasCarousel.insertAdjacentHTML('beforeend', dynamicHTML);

        })
        .catch(error => {
            console.error('Error al obtener datos de terror:', error);
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar datos de películas
    
        fetch(`http://localhost:9000/peliculas/amor`)
            .then(response => response.json())
            .then(peliculas => {
                // Procesa los datos de las películas aquí
                console.log(`Datos de amor extraídos correctamente:`, peliculas);

                // Obtén una referencia al contenedor del carrusel
                const peliculasCarousel2 = document.getElementById('contenedor-carrusel2');

                // Variable para almacenar el HTML generado dinámicamente
                let dynamicHTML = '';

                peliculas.forEach(amor => {
                    dynamicHTML += `
                    <div class="contenedor-carrusel carrusel-segundo">
                    <div class="carrusel">
                        <div class="pelicula">
                            <a href="../vistas/detalles.html?id=${amor.idPelicula}">
                            <img src="${amor.imagen}" alt=""> </a>
                        </div>
                        </div>
                        </div>    
                    `;
                });

                // Inserta el HTML generado dinámicamente en el carrusel correspondiente
                peliculasCarousel2.insertAdjacentHTML('beforeend', dynamicHTML);

            })
            .catch(error => {
                console.error(`Error al obtener datos de amor:`, error);
            });
    }

);

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar datos de películas
    
        fetch(`http://localhost:9000/peliculas/accion`)
            .then(response => response.json())
            .then(peliculas => {
                // Procesa los datos de las películas aquí
                console.log(`Datos de accion extraídos correctamente:`, peliculas);

                // Obtén una referencia al contenedor del carrusel
                const peliculasCarousel3 = document.getElementById('contenedor-carrusel3');

                // Variable para almacenar el HTML generado dinámicamente
                let dynamicHTML = '';

                peliculas.forEach(accion => {
                    dynamicHTML += `
                    <div class="contenedor-carrusel carrusel-tercero">
                    <div class="carrusel">
                        <div class="pelicula">
                            <a href="../vistas/detalles.html?id={$accion.idPelicula}">
                            <img src="${accion.imagen}" alt=""> </a>
                        </div>
                        </div>
                        </div>    
                    `;
                });

                // Inserta el HTML generado dinámicamente en el carrusel correspondiente
                peliculasCarousel3.insertAdjacentHTML('beforeend', dynamicHTML);

            })
            .catch(error => {
                console.error(`Error al obtener datos de accion:`, error);
            });
    }

);

