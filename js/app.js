const websiteButton = document.querySelector('.share-button');
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

websiteButton.addEventListener('click', copyText);
shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));