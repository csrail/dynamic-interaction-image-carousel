import { imageCarouselItemData1 } from "./data/data";
import ImageCarouselItem from "./javascript/imageCarouselItem";

(() => {
    const carouselItem1 = ImageCarouselItem(imageCarouselItemData1);
    const image = carouselItem1.getImageSource();
    image.height = carouselItem1.getImageHeight();
    image.width = carouselItem1.getImageWidth();
    document.body.appendChild(image);

    return {};
})();
