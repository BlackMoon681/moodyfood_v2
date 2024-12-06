export const initGallery = () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImage');
    
    if (!modal || !modalImg) return;
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });
    
    const closeBtn = document.querySelector('.gallery-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }
};