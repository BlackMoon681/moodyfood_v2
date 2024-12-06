import { showNotification } from '../utils/notifications.js';
import { updateBookingSummary } from './summary.js';

export const initTableSelection = () => {
    const tables = document.querySelectorAll('.table-selector');
    const selectedTableInput = document.getElementById('selected-table');
    let selectedTable = null;

    const handleTableSelection = (table) => {
        if (selectedTable) {
            selectedTable.classList.remove('selected');
            selectedTable.setAttribute('aria-selected', 'false');
        }
        
        table.classList.add('selected');
        table.setAttribute('aria-selected', 'true');
        selectedTable = table;
        
        if (selectedTableInput) {
            selectedTableInput.value = table.dataset.tableId;
        }

        table.classList.add('pulse');
        setTimeout(() => table.classList.remove('pulse'), 500);

        showNotification(`Table ${table.dataset.tableId} selected`);
        updateBookingSummary();
    };

    if (tables.length > 0) {
        tables.forEach(table => {
            table.setAttribute('aria-selected', 'false');
            table.addEventListener('click', () => handleTableSelection(table));
            table.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTableSelection(table);
                }
            });
        });
    }
};