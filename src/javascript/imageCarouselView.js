const ImageCarouselView = (imageCarouselItemViewsObject = {}) => {
    const imageCarouselItemViews = imageCarouselItemViewsObject;

    const buildImageCarousel = (views) => {
        const component = document.createElement("div");
        component.classList.add("image-item");
        component.appendChild(views.getView());

        return component;
    };

    const processImages = (imageElements) => {
        let indexPosition;

        imageElements.forEach((element, index) => {
            if (element.classList.contains("visible")) {
                element.classList.remove("visible");
                indexPosition = index;
            }

            if (index === indexPosition + 1) {
                element.classList.add("visible");
            } else if (indexPosition + 1 === imageElements.length) {
                imageElements[0].classList.add("visible");
                indexPosition = 0;
            }
        });
    };

    const buildImageCarouselComponent = () => {
        const container = document.createElement("div");
        const imageCarouselMainContainer = document.createElement("div");
        const imageCarouselContainer = document.createElement("div");
        const imageCarousel = buildImageCarousel(imageCarouselItemViews);

        const imageCarouselLeftArrowContainer = document.createElement("div");
        const imageCarouselRightArrowContainer = document.createElement("div");

        const imageCarouselSecondaryContainer = document.createElement("div");
        const imageCarouselDots = document.createElement("div");

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
