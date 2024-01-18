
const searchButton = document.querySelector('.Search-icon');
const searchBar = document.querySelector('.search-box');

function toggleSearch(){
    searchBar.classList.toggle('show')
    dropdownMenu.classList.remove('show')
};

document.addEventListener('click', (event) => {
    if (!event.target.closest('.box')){
        searchBar.classList.remove('show')
    }
});

searchButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleSearch()
});