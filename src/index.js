import initNav from './modules/nav';
import initMenu from './modules/menu';
import initAbout from './modules/about';
import initFooter from './modules/footer';

init();

function init()
{
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    initNav();
    initAbout();
    initFooter();
    addEvents();
}

function loadAbout(e)
{
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    initNav();
    initAbout();
    initFooter();
    addEvents();
}

function loadMenu(e)
{
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    initNav();
    initMenu();
    initFooter();
    addEvents(); 
}

function addEvents()
{
    const aboutBtn = document.getElementById('about-option');
    const menuBtn = document.getElementById('menu-option');
    aboutBtn.addEventListener('click', loadAbout);
    menuBtn.addEventListener('click', loadMenu);
}
