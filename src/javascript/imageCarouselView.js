const ImageCarouselView = (imageCarouselItemViewsObject = {}) => {
    const imageCarouselItemViews = imageCarouselItemViewsObject;
    let indexPosition = 0;
    let intervalId;

    const updateIndexPosition = (newIndex) => {
        indexPosition = newIndex;
        return indexPosition;
    };

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

    const setProcessImagesInterval = () => {
        const imageCarousel = [...document.querySelectorAll("img")];
        intervalId = setInterval(processImages, 5000, imageCarousel);
        return intervalId;
    };

    const clearProcessImagesInterval = () => {
        clearInterval(intervalId);
        setProcessImagesInterval();
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
            clearProcessImagesInterval(intervalId);
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
            clearProcessImagesInterval(intervalId);
        });

        component.appendChild(arrowElement);

        return component;
    };

    const buildDots = (imageCount) => {
        const component = document.createElement("div");
        for (let i = 0; i < imageCount; i += 1) {
            const dotElement = document.createElement("span");
            dotElement.classList.add("dot");
            dotElement.setAttribute("data-image-index", i.toString());
            component.appendChild(dotElement);

            dotElement.addEventListener("click", () => {
                const { imageIndex } = dotElement.dataset;
                const selectedImage = document.querySelector(
                    `img[data-image-index='${imageIndex}']`,
                );
                const currentImage = document.querySelector(
                    "img[class~='visible']",
                );
                currentImage.classList.remove("visible");

                selectedImage.classList.add("visible");
                updateIndexPosition(+imageIndex);

                clearProcessImagesInterval();
            });
        }
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
        const imageCarouselDots = buildDots(
            imageCarouselItemViews.getImageCount(),
        );

        container.classList.add("image-carousel-container");
        imageCarouselMainContainer.classList.add("main-container");
        imageCarouselSecondaryContainer.classList.add("secondary-container");

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

    return { displayView, setProcessImagesInterval };
};

export default ImageCarouselView;
