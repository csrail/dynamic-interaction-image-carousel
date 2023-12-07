import { imageCarouselItemData1, imageCarouselItemData2 } from "./data/data";
import ImageCarouselItem from "./javascript/imageCarouselItem";
import ImageCarouselItemView from "./javascript/imageCarouselItemView";

(() => {
    const carouselItemView = ImageCarouselItemView();
    const carouselItem = ImageCarouselItem();

    carouselItem.setState(imageCarouselItemData1);
    document.body.appendChild(carouselItemView.displayView(carouselItem));

    carouselItem.setState(imageCarouselItemData2);
    document.body.appendChild(carouselItemView.displayView(carouselItem));

    return {};
})();
