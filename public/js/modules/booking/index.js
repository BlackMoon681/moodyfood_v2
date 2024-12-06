import { initTableSelection } from './tableSelection.js';
import { initTimeSlots } from './timeSlots.js';
import { initFormValidation } from './validation.js';
import { initBookingSummary } from './summary.js';
import { initKeyboardNavigation } from '../utils/keyboard.js';

export const initBooking = () => {
    const bookingComponents = [
        initTableSelection,
        initTimeSlots,
        initFormValidation,
        initBookingSummary,
        initKeyboardNavigation
    ];

    bookingComponents.forEach(init => init());
};