// Add type="module" to script tag in base.html.twig
document.addEventListener('DOMContentLoaded', () => {
    // Initialize table selection
    const tableSelectors = document.querySelectorAll('.table-selector');
    const selectedTableInput = document.getElementById('selected-table');
    const bookingSummary = document.getElementById('booking-summary');

    function updateBookingSummary() {
        const selectedTable = document.querySelector('.table-selector.selected');
        const selectedTime = document.querySelector('.time-slot.selected');
        const guests = document.getElementById('guests');

        if (!bookingSummary) return;

        const tableInfo = selectedTable ? `Table ${selectedTable.dataset.tableId}` : 'No table selected';
        const timeInfo = selectedTime ? `at ${selectedTime.dataset.time}` : 'No time selected';
        const guestsInfo = guests?.value ? `for ${guests.value} ${guests.value === '1' ? 'person' : 'people'}` : '';

        bookingSummary.innerHTML = `
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
    }

    tableSelectors.forEach(table => {
        table.addEventListener('click', () => {
            tableSelectors.forEach(t => t.classList.remove('selected'));
            table.classList.add('selected');
            if (selectedTableInput) {
                selectedTableInput.value = table.dataset.tableId;
            }
            updateBookingSummary();
        });
    });

    // Initialize time slots
    const timeSlots = document.querySelectorAll('.time-slot');
    const selectedTimeInput = document.getElementById('selected-time');

    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
            if (selectedTimeInput) {
                selectedTimeInput.value = slot.dataset.time;
            }
            updateBookingSummary();
        });
    });

    // Form validation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            const tableId = selectedTableInput?.value;
            const time = selectedTimeInput?.value;

            if (!tableId || !time) {
                e.preventDefault();
                alert('Please select both a table and time slot');
            }
        });
    }

    // Initialize guests select change handler
    const guestsSelect = document.getElementById('guests');
    if (guestsSelect) {
        guestsSelect.addEventListener('change', updateBookingSummary);
    }

    // Initial summary update
    updateBookingSummary();
});