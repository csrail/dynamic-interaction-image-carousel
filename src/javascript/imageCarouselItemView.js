const ImageCarouselItemView = () => {
    const buildImage = (imageCarouselItem) => {
        const image = imageCarouselItem.getImageSource();
        image.height = imageCarouselItem.getImageHeight();
        image.width = imageCarouselItem.getImageWidth();

        return image;
    };

    const buildVisibleImage = (imageCarouselItem) => {
        const image = buildImage(imageCarouselItem);
        image.classList.add("hidden");
        image.classList.add("visible");

        return image;
    };

    const buildHiddenImage = (imageCarouselItem) => {
        const image = buildImage(imageCarouselItem);
        image.classList.add("hidden");

        return image;
    };

    return { buildVisibleImage, buildHiddenImage };
};

export default ImageCarouselItemView;
