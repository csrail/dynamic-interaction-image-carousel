const ImageCarouselItemView = () => {
    const buildImage = (imageCarouselItem) => {
        const image = imageCarouselItem.getImageSource();
        image.height = imageCarouselItem.getImageHeight();
        image.width = imageCarouselItem.getImageWidth();

        return image;
    };

    const buildVisibleImage = (imageCarouselItem, index) => {
        const image = buildImage(imageCarouselItem);
        image.classList.add("hidden");
        image.classList.add("visible");
        image.setAttribute("data-image-index", index);

        return image;
    };

    const buildHiddenImage = (imageCarouselItem, index) => {
        const image = buildImage(imageCarouselItem);
        image.classList.add("hidden");
        image.setAttribute("data-image-index", index);

        return image;
    };

    return { buildVisibleImage, buildHiddenImage };
};

export default ImageCarouselItemView;
