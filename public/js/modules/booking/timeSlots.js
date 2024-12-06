import { showNotification } from '../utils/notifications.js';
import { updateBookingSummary } from './summary.js';

export const initTimeSlots = () => {
    const timeSlots = document.querySelectorAll('.time-slot');
    const selectedTimeInput = document.getElementById('selected-time');
    let selectedSlot = null;

    const handleTimeSelection = (slot) => {
        if (selectedSlot) {
            selectedSlot.classList.remove('selected');
            selectedSlot.setAttribute('aria-selected', 'false');
        }
        
        slot.classList.add('selected');
        slot.setAttribute('aria-selected', 'true');
        selectedSlot = slot;
        
        if (selectedTimeInput) {
            selectedTimeInput.value = slot.dataset.time;
        }

        showNotification(`Time ${slot.dataset.time} selected`);
        updateBookingSummary();
    };

    if (timeSlots.length > 0) {
        timeSlots.forEach(slot => {
            slot.setAttribute('aria-selected', 'false');
            slot.addEventListener('click', () => handleTimeSelection(slot));
            slot.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTimeSelection(slot);
                }
            });
        });
    }
};