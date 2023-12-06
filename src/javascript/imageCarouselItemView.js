const ImageCarouselItemView = () => {
    const buildImage = (imageCarouselItem) => {
        const image = imageCarouselItem.getImageSource();
        image.height = imageCarouselItem.getImageHeight();
        image.width = imageCarouselItem.getImageWidth();

        return image;
    };

    const displayView = (imageCarouselItem) => buildImage(imageCarouselItem);

    return { displayView };
};

export default ImageCarouselItemView;
