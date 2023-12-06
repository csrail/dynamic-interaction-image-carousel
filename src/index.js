import { imageCarouselItemData1 } from "./data/data";
import ImageCarouselItem from "./javascript/imageCarouselItem";
import ImageCarouselItemView from "./javascript/imageCarouselItemView";

(() => {
    const carouselItemView1 = ImageCarouselItemView();
    const carouselItem1 = ImageCarouselItem(imageCarouselItemData1);

    document.body.appendChild(carouselItemView1.displayView(carouselItem1));

    return {};
})();
