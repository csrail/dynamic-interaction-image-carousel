import globe from "../images/globe.jpg";
import pillar from "../images/pillar.jpg";
import helperMixin from "../javascript/helperFunctions";

const imageCarouselItemData1 = {
    imageSource: helperMixin.createImage(globe),
    imageName: "Globe",
    altName: "Abstract globe drawn with interspaced dots.",
    imageHeight: 600,
    imageWidth: 600,
};

const imageCarouselItemData2 = {
    imageSource: helperMixin.createImage(pillar),
    imageName: "Pillar",
    altName: "Three pillars make a temple.",
    imageHeight: 600,
    imageWidth: 600,
};

export { imageCarouselItemData1, imageCarouselItemData2 };
