import { showNotification } from '../utils/notifications.js';

export const initFormValidation = () => {
    const form = document.getElementById('booking-form');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const tableId = document.getElementById('selected-table')?.value;
        const time = document.getElementById('selected-time')?.value;
        
        if (!tableId) {
            showNotification('Please select a table', 'error');
            return;
        }
        
        if (!time) {
            showNotification('Please select a time', 'error');
            return;
        }
        
        form.submit();
    });
};