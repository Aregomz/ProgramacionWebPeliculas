
// Carrusel 1
const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.pelicula');
const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

// Event listener flecha derecha del primer carrusel
flechaderecha.addEventListener('click', () => {
    const scrollAmount = fila.offsetWidth; // Ancho del carrusel
    const currentPosition = fila.scrollLeft;
    const newPosition = currentPosition + scrollAmount;
    
    smoothScroll(fila, currentPosition, newPosition);
});

// Event listener flecha izquierda del primer carrusel
flechaizquierda.addEventListener('click', () => {
    const scrollAmount = fila.offsetWidth; // Ancho del carrusel
    const currentPosition = fila.scrollLeft;
    const newPosition = currentPosition - scrollAmount;
    
    smoothScroll(fila, currentPosition, newPosition);
});

// Función para realizar el desplazamiento suave
function smoothScroll(element, start, end) {
    const duration = 500; 
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
            const ease = easeOutQuad(elapsedTime, 0, 1, duration);
            element.scrollLeft = start + (end - start) * ease;
            requestAnimationFrame(animate);
        } else {
            element.scrollLeft = end;
        }
    }

    // Función de aceleración (easeOutQuad)
    function easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    }

    requestAnimationFrame(animate);
}

// Carrusel 2
const filaSegundo = document.querySelector('.carrusel-segundo');
const flechaIzquierdaSegundo = document.getElementById('flecha-izquierda-segundo');
const flechaDerechaSegundo = document.getElementById('flecha-derecha-segundo');

// Event listener flecha derecha del segundo carrusel
flechaDerechaSegundo.addEventListener('click', () => {
    const scrollAmount = filaSegundo.offsetWidth; // Ancho del carrusel
    const currentPosition = filaSegundo.scrollLeft;
    const newPosition = currentPosition + scrollAmount;
    
    smoothScroll(filaSegundo, currentPosition, newPosition);
});

// Event listener flecha izquierda del segundo carrusel
flechaIzquierdaSegundo.addEventListener('click', () => {
    const scrollAmount = filaSegundo.offsetWidth; // Ancho del carrusel
    const currentPosition = filaSegundo.scrollLeft;
    const newPosition = currentPosition - scrollAmount;
    
    smoothScroll(filaSegundo, currentPosition, newPosition);
});

// Tercer Carrusel
const filaTercero = document.querySelector('.carrusel-tercero');
const flechaIzquierdaTercero = document.getElementById('flecha-izquierda-tercero');
const flechaDerechaTercero = document.getElementById('flecha-derecha-tercero');

// Event listener flecha derecha del tercer carrusel
flechaDerechaTercero.addEventListener('click', () => {
    const scrollAmount = filaTercero.offsetWidth;
    const currentPosition = filaTercero.scrollLeft;
    const newPosition = currentPosition + scrollAmount;

    smoothScroll(filaTercero, currentPosition, newPosition);
});

// Event listener flecha izquierda del tercer carrusel
flechaIzquierdaTercero.addEventListener('click', () => {
    const scrollAmount = filaTercero.offsetWidth;
    const currentPosition = filaTercero.scrollLeft;
    const newPosition = currentPosition - scrollAmount;

    smoothScroll(filaTercero, currentPosition, newPosition);
});


// hover peliculas

peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


