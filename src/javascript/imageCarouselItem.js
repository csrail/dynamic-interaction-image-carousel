const imageCarouselItem = (obj = {}) => {
   const { imageName, imageSource, altName, imageHeight, imageWidth } = obj

    const getimageName = () => imageName
    const getImageSource = () => imageSource
    const getAltName = () => altName
    const getImageHeight = () => imageHeight
    const getImageWidth = () => imageWidth

    return { getimageName, getImageSource, getAltName, getImageHeight, getImageWidth }
}

export default imageCarouselItem
