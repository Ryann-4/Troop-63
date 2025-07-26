    const imageUrls = [
      "https://codehs.com/uploads/e66bb94f3c41d5831d6f5ac30e974804?text=Image+1",
      "https://codehs.com/uploads/29a33481d460ace59d247da4d910b0d5?text=Image+2",
      "https://codehs.com/uploads/a9d7dd4ef9b857a0570db3d09e78a0d7?text=Image+3",
      "https://codehs.com/uploads/7a69e0edd90a208df914b080f5ab27b8?text=Image+4",
      "https://codehs.com/uploads/7a69e0edd90a208df914b080f5ab27b8?text=Image+5"
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById("carousel-image");
    const dotsContainer = document.getElementById("dots-container");
    let dots = [];
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }
    function showImage(index) {
      imageElement.style.opacity = 0;
      setTimeout(() => {
        imageElement.src = imageUrls[index];
        updateDots();
        imageElement.onload = () => {
          imageElement.style.opacity = 1;
        };
      }, 300);
    }
    function goToImage(index) {
      currentIndex = index;
      showImage(currentIndex);
      resetAutoSlide();
    }
    function createDots() {
      imageUrls.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => goToImage(index));
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
    }
    let autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      showImage(currentIndex);
    }, 5000);
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        showImage(currentIndex);
      }, 5000);
    }
    createDots();
    showImage(currentIndex);