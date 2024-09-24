document.addEventListener('DOMContentLoaded', function() {
    // Create and add the search input field
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search products...');
    document.querySelector('.product-list').prepend(searchInput);

    // Add event listener for the search input
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const items = document.querySelectorAll('.product-list ul li');
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
