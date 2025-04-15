const dynamicText = document.querySelector("h3 span");
const words = ["étudiant en informatique", "entrain de jouer aux échecs", "disponible"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar + " "; // Ajouter un espace après chaque mot écrit
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // Si on n'est pas en train de supprimer, on continue d'écrire
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // Si on est en train de supprimer, on continue de supprimer les caractères
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // Une fois le mot écrit ou supprimé, on alterne entre suppression et écriture
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");

        // Si on a terminé de supprimer un mot, on passe au mot suivant
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 1200); // Attendre un peu avant de commencer à taper ou supprimer
    }
}

typeEffect();


var swiper = new Swiper(".competences-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1068: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});