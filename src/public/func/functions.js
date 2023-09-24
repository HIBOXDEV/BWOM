


const aboutUsElement = document.querySelector(".about-us");
const scrollPositionToShowAboutUs = 180; // Píxel en el que quieres mostrar el elemento

window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;

    if (scrollY > scrollPositionToShowAboutUs) {
        aboutUsElement.classList.add("visible"); // Agrega la clase "visible"
    } else {
        aboutUsElement.classList.remove("visible"); // Quita la clase "visible" para ocultar el elemento
    }
});

const recentBlogsElement = document.querySelector(".recent-blogs");
const scrollPositionToShowRecentBlogs = 250; // Píxel en el que quieres mostrar el elemento

window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;

    if (scrollY > scrollPositionToShowRecentBlogs) {
        recentBlogsElement.classList.add("visible"); // Agrega la clase "visible"
    } else {
        recentBlogsElement.classList.remove("visible"); // Quita la clase "visible" para ocultar el elemento
    }
});

// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const recentBlogsElement = document.querySelector(".recent-blogs");
    const scrollPositionToShowRecentBlogs = window.innerHeight / 2; // Aparece cuando la mitad de la sección es visible
    
    window.addEventListener("scroll", function() {
        const rect = recentBlogsElement.getBoundingClientRect();
        if (rect.top <= scrollPositionToShowRecentBlogs) {
            recentBlogsElement.classList.add("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const recentBlogsElement = document.querySelector(".about-us");
    
    function showRecentBlogs() {
        recentBlogsElement.classList.add("show");
    }

    // Llamar a la función después de un breve retraso (por ejemplo, 1000 milisegundos = 1 segundo)
    setTimeout(showRecentBlogs, 200); // Ajusta el tiempo según tus preferencias
});


document.addEventListener("DOMContentLoaded", function() {
    const groceryGameElement = document.querySelector(".grocerygame");

    // Agregar la clase "show" al elemento después de un retraso (por ejemplo, 2 segundos)
    setTimeout(function() {
        groceryGameElement.classList.add("show");
    }, 10); // Ajusta el tiempo de retraso según tus preferencias
});
