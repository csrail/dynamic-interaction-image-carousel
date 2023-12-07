const ImageCarouselItemViews = (
    imageCarouselItemView,
    ...imageCarouselItems
) => {
    const getView = () => {
        const component = document.createDocumentFragment();
        imageCarouselItems.forEach((item, index) => {
            if (index === 0) {
                component.appendChild(
                    imageCarouselItemView.buildVisibleImage(item),
                );
            } else {
                component.appendChild(
                    imageCarouselItemView.buildHiddenImage(item),
                );
            }
        });
        return component;
    };

    return { getView };
};

export default ImageCarouselItemViews;
