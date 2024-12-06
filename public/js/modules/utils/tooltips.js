export const initTooltips = () => {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(element => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.dataset.tooltip;
        
        const showTooltip = () => {
            document.body.appendChild(tooltip);
            const rect = element.getBoundingClientRect();
            
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
            tooltip.classList.add('show');
        };
        
        const hideTooltip = () => {
            tooltip.classList.remove('show');
            tooltip.remove();
        };
        
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
};