document.getElementById('showItems').addEventListener('click', function() {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const itemsDiv = document.getElementById('items');
    itemsDiv.innerHTML = items.map(item => `<p>${item}</p>`).join('');
});
