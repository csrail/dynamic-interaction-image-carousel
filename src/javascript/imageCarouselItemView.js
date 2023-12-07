const ImageCarouselItemView = () => {
    const buildImage = (imageCarouselItem) => {
        const image = imageCarouselItem.getImageSource();
        image.height = imageCarouselItem.getImageHeight();
        image.width = imageCarouselItem.getImageWidth();

        return image;
    };

    const getView = (imageCarouselItem) => buildImage(imageCarouselItem);

    return { getView };
};

export default ImageCarouselItemView;
