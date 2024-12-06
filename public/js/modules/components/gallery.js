import { showNotification } from '../utils/notifications.js';

export const initGallery = () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    
    const modalImg = document.createElement('img');
    modalImg.className = 'gallery-modal-content';
    modal.appendChild(modalImg);
    
    document.body.appendChild(modal);
    
    const handleImageClick = (img) => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        showNotification('Image opened in gallery view');
    };
    
    const handleModalClick = () => {
        modal.style.display = 'none';
    };
    
    galleryImages.forEach(img => {
        img.addEventListener('click', () => handleImageClick(img));
    });
    
    modal.addEventListener('click', handleModalClick);
};