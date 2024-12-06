export const initTableSelection = () => {
    const tableElements = document.querySelectorAll('.table-selector');
    const selectedTable = document.getElementById('selected-table');

    tableElements.forEach(table => {
        table.addEventListener('click', function() {
            tableElements.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
            
            if (selectedTable) {
                selectedTable.value = this.dataset.tableId;
            }
            
            this.classList.add('pulse');
            setTimeout(() => this.classList.remove('pulse'), 500);
        });
    });
};