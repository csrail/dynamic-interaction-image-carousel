const ImageCarouselItem = (obj = {}) => {
    const { imageName, imageSource, altName, imageHeight, imageWidth } = obj;

    const getImageName = () => imageName;
    const getImageSource = () => imageSource;
    const getAltName = () => altName;
    const getImageHeight = () => imageHeight;
    const getImageWidth = () => imageWidth;

    return {
        getImageName,
        getImageSource,
        getAltName,
        getImageHeight,
        getImageWidth,
    };
};

export default ImageCarouselItem;
