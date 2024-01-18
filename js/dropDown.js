
const dropdownButton = document.getElementById('dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

function toggleDropdown(){
    dropdownMenu.classList.toggle('show')
    searchBar.classList.remove('show')
};

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-menu')){
        dropdownMenu.classList.remove('show')
    }
});

dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleDropdown()
});
