const searchForm = document.querySelector('.search-container'),
    searchInput = searchForm.querySelector('input');

function handleSearch(event) {
    event.preventDefault();
    const searchText = searchInput.value;

    location.href = 'https://www.google.com/search?q=' + searchText;
}

searchForm.addEventListener('submit', handleSearch);
