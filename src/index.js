import { imageCarouselItemData1, imageCarouselItemData2 } from "./data/data";
import ImageCarouselItem from "./javascript/imageCarouselItem";
import ImageCarouselItemView from "./javascript/imageCarouselItemView";
import ImageCarouselItemViews from "./javascript/imageCarouselItemViews";
import ImageCarouselView from "./javascript/imageCarouselView";

(() => {
    const imageCarouselItemView = ImageCarouselItemView();
    const imageCarouselItem1 = ImageCarouselItem(imageCarouselItemData1);
    const imageCarouselItem2 = ImageCarouselItem(imageCarouselItemData2);

    const imageCarouselItemViews = ImageCarouselItemViews(
        imageCarouselItemView,
        imageCarouselItem1,
        imageCarouselItem2,
    );

    const imageCarouselView = ImageCarouselView(imageCarouselItemViews);

    document.body.appendChild(imageCarouselView.displayView());

    return {};
})();
