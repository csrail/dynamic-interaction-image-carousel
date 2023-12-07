import {
    imageCarouselItemData1,
    imageCarouselItemData2,
    imageCarouselItemData3,
    imageCarouselItemData4,
} from "./data/data";
import ImageCarouselItem from "./javascript/imageCarouselItem";
import ImageCarouselItemView from "./javascript/imageCarouselItemView";
import ImageCarouselItemViews from "./javascript/imageCarouselItemViews";
import ImageCarouselView from "./javascript/imageCarouselView";

(() => {
    const imageCarouselView = ImageCarouselView(
        ImageCarouselItemViews(
            ImageCarouselItemView(),
            ImageCarouselItem(imageCarouselItemData1),
            ImageCarouselItem(imageCarouselItemData2),
            ImageCarouselItem(imageCarouselItemData3),
            ImageCarouselItem(imageCarouselItemData4),
        ),
    );

    document.body.appendChild(imageCarouselView.displayView());

    return {};
})();
