export const updateBookingSummary = () => {
    const selectedTable = document.querySelector('.table-selector.selected');
    const selectedTime = document.querySelector('.time-slot.selected');
    const guests = document.getElementById('guests');
    const summary = document.getElementById('booking-summary');

    if (!summary) return;

    const tableInfo = selectedTable ? `Table ${selectedTable.dataset.tableId}` : 'No table selected';
    const timeInfo = selectedTime ? `at ${selectedTime.dataset.time}` : 'No time selected';
    const guestsInfo = guests?.value ? `for ${guests.value} ${guests.value === '1' ? 'person' : 'people'}` : '';

    summary.innerHTML = `
        <div class="summary-item">
            <i class="fas fa-chair me-2"></i>${tableInfo}
        </div>
        <div class="summary-item">
            <i class="fas fa-clock me-2"></i>${timeInfo}
        </div>
        ${guestsInfo ? `
        <div class="summary-item">
            <i class="fas fa-users me-2"></i>${guestsInfo}
        </div>
        ` : ''}
    `;
};

export const initBookingSummary = () => {
    const guests = document.getElementById('guests');
    if (guests) {
        guests.addEventListener('change', updateBookingSummary);
    }
    updateBookingSummary();
};