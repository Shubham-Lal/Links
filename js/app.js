const shareButtons = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
    e.preventDefault();

    const link = this.getAttribute('link');

    try {
        await navigator.clipboard.writeText(link);
    } catch (error) {
        console.log(error);
    }
};

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));