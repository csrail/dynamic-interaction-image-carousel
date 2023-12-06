import ImageCarouselItem from "./imageCarouselItem";

const ImageCarouselItemView = (imageCarouselItem = ImageCarouselItem()) => {
    const { getImageName, getImageSource, getImageHeight, getImageWidth } =
        imageCarouselItem;

    const buildImage = () => {
        const image = getImageSource();
        image.height = getImageHeight();
        image.width = getImageWidth();

        return image;
    };

    const displayView = () => buildImage();

    return { displayView };
};

export default ImageCarouselItemView;
