const ImageCarouselItemViews = (
    imageCarouselItemView,
    ...imageCarouselItems
) => {
    const getView = () => {
        const component = document.createDocumentFragment();
        imageCarouselItems.forEach((item) => {
            component.appendChild(imageCarouselItemView.getView(item));
        });
        return component;
    };

    return { getView };
};

export default ImageCarouselItemViews;
