document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;
    const slider = document.querySelector(".slides");

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function changeSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => changeSlide(i));
    });

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 5000); // Muda a imagem automaticamente a cada 5 segundos

    // Mostra o primeiro slide corretamente ao carregar a página
    showSlide(currentIndex);
});
