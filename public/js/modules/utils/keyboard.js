export const initKeyboardNavigation = () => {
    const handleArrowKeys = (elements, currentIndex, key) => {
        let newIndex = currentIndex;
        
        switch (key) {
            case 'ArrowRight':
                newIndex = (currentIndex + 1) % elements.length;
                break;
            case 'ArrowLeft':
                newIndex = (currentIndex - 1 + elements.length) % elements.length;
                break;
            case 'ArrowDown':
                newIndex = (currentIndex + Math.sqrt(elements.length)) % elements.length;
                break;
            case 'ArrowUp':
                newIndex = (currentIndex - Math.sqrt(elements.length) + elements.length) % elements.length;
                break;
        }

        elements[newIndex].focus();
    };

    ['table-selector', 'time-slot'].forEach(className => {
        const elements = Array.from(document.getElementsByClassName(className));
        elements.forEach((element, index) => {
            element.addEventListener('keydown', (e) => {
                if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                    e.preventDefault();
                    handleArrowKeys(elements, index, e.key);
                }
            });
        });
    });
};