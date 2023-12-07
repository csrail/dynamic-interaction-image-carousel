const ImageCarouselView = (
    imageCarouselItemView = {},
    imageCarouselItem = {},
) => {
    const buildImageCarousel = (view, item) => {
        const component = document.createElement("div");
        component.classList.add("image-item");
        component.appendChild(view.displayView(item));

        return component;
    };

    const buildImageCarouselComponent = () => {
        const container = document.createElement("div");
        const imageCarouselMainContainer = document.createElement("div");
        const imageCarouselContainer = document.createElement("div");
        const imageCarousel = buildImageCarousel(
            imageCarouselItemView,
            imageCarouselItem,
        );

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

    return { displayView };
};

export default ImageCarouselView;
