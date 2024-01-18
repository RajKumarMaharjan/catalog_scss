
const handBug = document.getElementById('handbug')
const handBugMenu = document.querySelector('.small-menu')
const menuItem = document.querySelector('.small-menu-item')

function toggleHandBugMenu(){
    handBugMenu.classList.toggle('show')
  
};

document.addEventListener('click', (event) => {
    if (!event.target.closest('.small-menu')){
        handBugMenu.classList.remove('show')
    }
});

handBug.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleHandBugMenu()
});

menuItem.addEventListener('click', toggleHandBugMenu)