import { imageCarouselItemData1, imageCarouselItemData2 } from "./data/data";
import ImageCarouselItem from "./javascript/imageCarouselItem";
import ImageCarouselItemView from "./javascript/imageCarouselItemView";
import ImageCarouselView from "./javascript/imageCarouselView";

(() => {
    const imageCarouselItemView = ImageCarouselItemView();
    const imageCarouselItem = ImageCarouselItem();
    imageCarouselItem.setState(imageCarouselItemData1);

    const imageCarouselView = ImageCarouselView(
        imageCarouselItemView,
        imageCarouselItem,
    );

    document.body.appendChild(imageCarouselView.displayView());

    return {};
})();
