const ImageCarouselItem = (obj = {}) => {
    let { imageName, imageSource, altName, imageHeight, imageWidth } = obj;

    const setState = (newObject) => {
        imageSource = newObject.imageSource;
        imageHeight = newObject.imageHeight;
        imageWidth = newObject.imageWidth;
    };

    const getImageName = () => imageName;
    const getImageSource = () => imageSource;
    const getAltName = () => altName;
    const getImageHeight = () => imageHeight;
    const getImageWidth = () => imageWidth;

    return {
        setState,
        getImageName,
        getImageSource,
        getAltName,
        getImageHeight,
        getImageWidth,
    };
};

export default ImageCarouselItem;
