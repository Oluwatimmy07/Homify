const menuItems = document.querySelectorAll('.ul-holder div');

// Create indicators inside each menu item
menuItems.forEach(item => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    item.appendChild(indicator);
});

// Function to activate and apply color
function activateItem(el) {
    menuItems.forEach(item => {
        item.classList.remove('active');
        const ind = item.querySelector('.indicator');
        if (ind) ind.style.backgroundColor = 'transparent';
    });

    el.classList.add('active');
    const color = el.getAttribute('data-color');
    const text = el.querySelector('p');
    const indicator = el.querySelector('.indicator');

    if (text) text.style.color = color;
    if (indicator) indicator.style.backgroundColor = color;
    
    // Reset others' text color
    menuItems.forEach(item => {
        if (item !== el) {
            const p = item.querySelector('p');
            if (p) p.style.color = '#999'; // Default
        }
    });
}

// Initialize
activateItem(menuItems[0]);

// Event listeners
menuItems.forEach(item => {
    item.addEventListener('click', () => activateItem(item));
});
