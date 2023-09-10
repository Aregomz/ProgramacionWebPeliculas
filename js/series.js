document.addEventListener("DOMContentLoaded", function() {
    // Llama a la API local para obtener los datos de las series
    fetch('http://localhost:9000/series/terror')
        .then(response => response.json())
        .then(series => {
            // Procesa los datos de las series aquí
            console.log('Datos de terror extraídos correctamente:', series);

            // Obtén una referencia al contenedor del carrusel
            const seriesCarousel = document.getElementById('contenedor-carrusel');

            // Variable para almacenar el HTML generado dinámicamente
            let dynamicHTML = '';


            series.forEach(terror => {
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
            seriesCarousel.insertAdjacentHTML('beforeend', dynamicHTML);

        })
        .catch(error => {
            console.error('Error al obtener datos de terror:', error);
        });

        document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar datos de películas
    
        fetch(`http://localhost:9000/series/amor`)
            .then(response => response.json())
            .then(series => {
                // Procesa los datos de las películas aquí
                console.log(`Datos de amor extraídos correctamente:`, series);

                // Obtén una referencia al contenedor del carrusel
                const seriesCarousel2 = document.getElementById('contenedor-carrusel2');

                // Variable para almacenar el HTML generado dinámicamente
                let dynamicHTML = '';

                series.forEach(amor => {
                    dynamicHTML += `
                    <div class="contenedor-carrusel carrusel-segundo">
                    <div class="carrusel">
                        <div class="pelicula">
                            <a href="$../vistas/detalles.html?id={$terror.idSeries}"><img src="${amor.imagen}" alt=""> </a>
                        </div>
                        </div>
                        </div>    
                    `;
                });

                // Inserta el HTML generado dinámicamente en el carrusel correspondiente
                seriesCarousel2.insertAdjacentHTML('beforeend', dynamicHTML);

            })
            .catch(error => {
                console.error(`Error al obtener datos de amor:`, error);
            });
    }

);
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar datos de películas
    
        fetch(`http://localhost:9000/series/amor`)
            .then(response => response.json())
            .then(series => {
                // Procesa los datos de las películas aquí
                console.log(`Datos de amor extraídos correctamente:`, series);

                // Obtén una referencia al contenedor del carrusel
                const seriesCarousel2 = document.getElementById('contenedor-carrusel2');

                // Variable para almacenar el HTML generado dinámicamente
                let dynamicHTML = '';

                series.forEach(amor => {
                    dynamicHTML += `
                    <div class="contenedor-carrusel carrusel-segundo">
                    <div class="carrusel">
                        <div class="pelicula">
                            <a href="../vistas/detalles.html?id={$amor.idSeries}"><img src="${amor.imagen}" alt=""> </a>
                        </div>
                        </div>
                        </div>    
                    `;
                });

                // Inserta el HTML generado dinámicamente en el carrusel correspondiente
                seriesCarousel2.insertAdjacentHTML('beforeend', dynamicHTML);

            })
            .catch(error => {
                console.error(`Error al obtener datos de amor:`, error);
            });
    }

);

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar datos de películas
    
        fetch(`http://localhost:9000/series/accion`)
            .then(response => response.json())
            .then(series => {
                // Procesa los datos de las películas aquí
                console.log(`Datos de accion extraídos correctamente:`, series);

                // Obtén una referencia al contenedor del carrusel
                const seriesCarousel3 = document.getElementById('contenedor-carrusel3');

                // Variable para almacenar el HTML generado dinámicamente
                let dynamicHTML = '';

                series.forEach(accion => {
                    dynamicHTML += `
                    <div class="contenedor-carrusel carrusel-tercero">
                    <div class="carrusel">
                        <div class="pelicula">
                            <a href="../vistas/detalles.html?id={$accion.idSeries}"><img src="${accion.imagen}" alt=""> </a>
                        </div>
                        </div>
                        </div>    
                    `;
                });

                // Inserta el HTML generado dinámicamente en el carrusel correspondiente
                seriesCarousel3.insertAdjacentHTML('beforeend', dynamicHTML);

            })
            .catch(error => {
                console.error(`Error al obtener datos de accion:`, error);
            });
    }

);