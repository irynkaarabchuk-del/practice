const iconBlock = document.getElementById('iconBlock');
const iconOpen = document.getElementById('iconOpen');
const iconClose = document.getElementById('iconClose');
const mainMenu = document.getElementById('mainMenu');

iconBlock.addEventListener('click', () => {
    iconOpen.classList.toggle('d-none')
    iconClose.classList.toggle('d-none')
    mainMenu.classList.toggle('menu-open')
})


const exploreBtn = document.getElementById('exploreBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

exploreBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});