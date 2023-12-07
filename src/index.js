import "./stylesheets/style.css";

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

    const imageNodeList = document.querySelectorAll("img");
    const imageElements = [...imageNodeList];

    const processImages = () => {
        let indexPosition;

        imageElements.forEach((element, index) => {
            if (element.classList.contains("visible")) {
                element.classList.remove("visible");
                indexPosition = index;
            }

            if (index === indexPosition + 1) {
                element.classList.add("visible");
            } else if (indexPosition + 1 === imageElements.length) {
                imageElements[0].classList.add("visible");
                indexPosition = 0;
            }
        });
    };

    console.log(document.querySelector("img[class~='visible']"));

    setInterval(processImages, 2000);

    return {};
})();
