const ImageCarouselView = (imageCarouselItemViewsObject = {}) => {
    const imageCarouselItemViews = imageCarouselItemViewsObject;
    let indexPosition = 0;

    const buildImageCarousel = (views) => {
        const component = document.createElement("div");
        component.classList.add("image-item");
        component.appendChild(views.getView());

        return component;
    };

    const processImages = (imageElements) => {
        const imageCarousel = [...imageElements];
        const visibleImage = document.querySelector("img[class~='visible']");

        visibleImage.classList.remove("visible");
        if (indexPosition + 1 >= imageCarousel.length) {
            indexPosition = 0;
        } else {
            indexPosition += 1;
        }

        imageCarousel[indexPosition].classList.add("visible");
    };

    const buildRightArrow = () => {
        const component = document.createElement("div");
        const arrowElement = document.createElement("div");
        arrowElement.classList.add("right-arrow");
        arrowElement.textContent = ">";

        arrowElement.addEventListener("click", () => {
            const imageCarousel = [...document.querySelectorAll("img")];
            const visibleImage = document.querySelector(
                "img[class~='visible']",
            );
            visibleImage.classList.remove("visible");
            if (indexPosition + 1 >= imageCarousel.length) {
                indexPosition = 0;
            } else {
                indexPosition += 1;
            }

            imageCarousel[indexPosition].classList.add("visible");
        });

        component.appendChild(arrowElement);

        return component;
    };

    const buildLeftArrow = () => {
        const component = document.createElement("div");
        const arrowElement = document.createElement("div");
        arrowElement.textContent = "<";
        arrowElement.classList.add("left-arrow");

        arrowElement.addEventListener("click", () => {
            const imageCarousel = [...document.querySelectorAll("img")];
            const visibleImage = document.querySelector(
                "img[class~='visible']",
            );

            visibleImage.classList.remove("visible");

            if (indexPosition === 0) {
                indexPosition = imageCarousel.length - 1;
                imageCarousel[indexPosition].classList.add("visible");
            } else {
                indexPosition -= 1;
                imageCarousel[indexPosition].classList.add("visible");
            }
        });

        component.appendChild(arrowElement);

        return component;
    };

    const buildImageCarouselComponent = () => {
        const container = document.createElement("div");
        const imageCarouselMainContainer = document.createElement("div");

        const imageCarouselContainer = document.createElement("div");
        const imageCarousel = buildImageCarousel(imageCarouselItemViews);

        const imageCarouselLeftArrowContainer = buildLeftArrow();
        const imageCarouselRightArrowContainer = buildRightArrow();

        const imageCarouselSecondaryContainer = document.createElement("div");
        const imageCarouselDots = document.createElement("div");

        imageCarouselMainContainer.classList.add("main-container");

        imageCarouselContainer.appendChild(imageCarousel);

        imageCarouselMainContainer.appendChild(imageCarouselLeftArrowContainer);
        imageCarouselMainContainer.appendChild(imageCarouselContainer);
        imageCarouselMainContainer.appendChild(
            imageCarouselRightArrowContainer,
        );
        imageCarouselSecondaryContainer.appendChild(imageCarouselDots);

        container.appendChild(imageCarouselMainContainer);
        container.appendChild(imageCarouselSecondaryContainer);

        return container;
    };

    const displayView = () => {
        return buildImageCarouselComponent();
    };

    return { displayView, processImages };
};

export default ImageCarouselView;
