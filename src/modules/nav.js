function createNav(id, name)
{
    const navDiv = document.createElement('div');
    navDiv.classList.add('nav-options');
    navDiv.setAttribute('id', id);
    navDiv.innerText = name;

    return navDiv
}

function createNavCont()
{
    const navCont = document.createElement('nav');
    const mainIcon = document.createElement('div');
    const iconImg = document.createElement('img');
    const hotelName = document.createElement('div');
    const navOptCont = document.createElement('div');

    navCont.classList.add('navbar');

    mainIcon.classList.add('main-icon');

    iconImg.setAttribute('id', 'main-logo');
    iconImg.setAttribute('alt', 'The PuttuKada Logo');
    iconImg.setAttribute('src', './img/puttu.png');

    hotelName.classList.add('hotel-name');
    hotelName.innerText = 'The Puttukada';

    mainIcon.append(iconImg);
    mainIcon.append(hotelName);

    navOptCont.classList.add('nav-options-cont');

    navOptCont.append(createNav('menu-option', 'MENU'));
    navOptCont.append(createNav('about-option', 'ABOUT'));
    navOptCont.append(createNav('contact-option', 'CONTACT'));

    navCont.append(mainIcon);
    navCont.append(navOptCont);

    return navCont;
}

function initNav()
{
    const contentDiv = document.getElementById('content');
    contentDiv.append(createNavCont());
}

export default initNav;