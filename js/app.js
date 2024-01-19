// Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
         1024:{
            items:4
        },
        1440:{
            items:5
        }
    }
});

$('.owl-prev').on('click', function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.owl-next').on('click', function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});

// Search box

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

// NavBar Dropdown Menu
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

// hamburger button

const hamburger = document.getElementById('hamburger')
const hamburgerMenu = document.querySelector('.small-menu')
const menuItem = document.querySelector('.small-menu-item')

function toggleHamburgerMenu(){
    hamburgerMenu.classList.toggle('show')
  
};

document.addEventListener('click', (event) => {
    if (!event.target.closest('.small-menu')){
        hamburgerMenu.classList.remove('show')
    }
});

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleHamburgerMenu()
});

menuItem.addEventListener('click', toggleHamburgerMenu)


