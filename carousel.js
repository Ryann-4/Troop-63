    const imageUrls = [
      "https://codehs.com/uploads/740ffb834b7b6dcc59a41d27c66990ae?text=Image+1",
      "https://codehs.com/uploads/fef992eadaed70b563d886eeba99aba0?text=Image+2",
      "https://codehs.com/uploads/18426a4920a31a86f3030161ff7e5e97?text=Image+3",
      "https://codehs.com/uploads/8057d872d7692baff45215484700c528?text=Image+4",
      "https://codehs.com/uploads/abf740fbd40b0c11f8b315a36cad07f4?text=Image+5"
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
      }, 300); // Fade-out duration
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