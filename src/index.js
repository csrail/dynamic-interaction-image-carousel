import { imageCarouselItemData1, imageCarouselItemData2 } from "./data/data";
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
        ),
    );

    document.body.appendChild(imageCarouselView.displayView());

    return {};
})();
