const ImageCarouselItemViews = (
    imageCarouselItemView,
    ...imageCarouselItems
) => {
    const getView = () => {
        const component = document.createDocumentFragment();
        let count = 0;

        imageCarouselItems.forEach((item, index) => {
            if (index === 0) {
                component.appendChild(
                    imageCarouselItemView.buildVisibleImage(item, count),
                );
            } else {
                component.appendChild(
                    imageCarouselItemView.buildHiddenImage(item, count),
                );
            }
            count += 1;
        });
        return component;
    };

    return { getView };
};

export default ImageCarouselItemViews;
