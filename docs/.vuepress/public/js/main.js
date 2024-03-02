const update_image = () => {
    console.log("update_image");
    const images = document.querySelectorAll(".docs-image");
    images.forEach(image => {
        new Viewer(image);
    });
};

// setInterval(update_image, 1000);

// window.onhashchange = update_image;
