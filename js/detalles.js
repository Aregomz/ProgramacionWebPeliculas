document.addEventListener("DOMContentLoaded", function() {
    // Obtén el ID de la película de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const peliculaId = urlParams.get("id");

    // Verifica si peliculaId es válido antes de hacer la solicitud
    if (!peliculaId) {
        console.error("ID de película no válido.");
        return; // Puedes mostrar un mensaje de error o redirigir a una página de error.
    }

    // Realiza una solicitud al servidor API para obtener los detalles de la película
    fetch(`http://localhost:9000/detalles/${peliculaId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los detalles de la película');
            }
            return response.json();
        })
        .then(pelicula => {
            // Actualiza los elementos HTML con los detalles de la película
            document.getElementById("poster").src = pelicula.URL;
            document.getElementById("titulo").textContent = pelicula.Nombre;
            document.getElementById("calificacion").textContent = pelicula.Calificacion;
            document.getElementById("fechaEstreno").textContent = pelicula.FechasDeEstreno;
            document.getElementById("descripcion").textContent = pelicula.Descripcion;
        })
        .catch(error => {
            console.error("Error al obtener detalles de la película:", error);
        });
});
