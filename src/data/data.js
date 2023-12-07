import globe from "../images/globe.jpg";
import pillar from "../images/pillar.jpg";
import shrine from "../images/shinto-shrine.jpg";
import books from "../images/book-hand.jpg";
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

const imageCarouselItemData3 = {
    imageSource: helperMixin.createImage(shrine),
    imageName: "Shinto Shrine Entrance",
    altName: "An entrance to the Shinto Shrine",
    imageHeight: 600,
    imageWidth: 600,
};

const imageCarouselItemData4 = {
    imageSource: helperMixin.createImage(books),
    imageName: "Holding Books",
    altName: "A giant hand holds books",
    imageHeight: 600,
    imageWidth: 600,
};

export {
    imageCarouselItemData1,
    imageCarouselItemData2,
    imageCarouselItemData3,
    imageCarouselItemData4,
};
