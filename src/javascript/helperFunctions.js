const helperMixin = (() => {
    const createImage = (source) => {
        const image = new Image();
        image.src = source;

        return image;
    };
    return {
        createImage,
    };
})();

export default helperMixin;
