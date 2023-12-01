    document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll(".images img");
        const leftButton = document.querySelector(".slide.left");
        const rightButton = document.querySelector(".slide.right");
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        }

        leftButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        rightButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        // Mostrar a primeira imagem inicialmente
        showImage(currentIndex);
    });
