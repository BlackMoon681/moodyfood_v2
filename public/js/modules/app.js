import { initTableSelection } from './booking/tableSelection.js';
import { initTimeSlots } from './booking/timeSlots.js';
import { initGallery } from './components/gallery.js';
import { initAnimations } from './utils/animations.js';
import { initTooltips } from './utils/tooltips.js';
import { initTheme } from './utils/theme.js';
import { setupEventListeners } from './utils/events.js';

export const initApp = () => {
    // Initialize all modules
    initTheme();
    initTableSelection();
    initTimeSlots();
    initGallery();
    initAnimations();
    initTooltips();
    setupEventListeners();
};