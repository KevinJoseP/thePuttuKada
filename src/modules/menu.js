function createMenuItem(imgUrl, alt, descr)
{
    const menuItemDiv = document.createElement('div');
    const menuImg = document.createElement('img');
    const menuP = document.createElement('p');

    menuItemDiv.classList.add('menu-item');
    menuImg.classList.add('menu-img');
    menuP.classList.add('menu-descr');

    menuImg.setAttribute('src', imgUrl);
    menuImg.setAttribute('alt', alt);

    menuP.innerText = descr;

    menuItemDiv.append(menuImg);
    menuItemDiv.append(menuP);

    return menuItemDiv;
}

function createMenu()
{
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    menuDiv.classList.add('content-sect');
    console.log("creating menu");
    menuDiv.setAttribute('id', 'menu-section');

    menuDiv.append(createMenuItem('./img/puttu-only.jpeg',
                                    'Puttu image',
                                    'Puttu  Rs.50'));

    menuDiv.append(createMenuItem('./img/beef-curry.jpeg',
                                    'beef curry image',
                                    'Beef Curry  Rs.280'));
    
    menuDiv.append(createMenuItem('./img/chicken-curry.jpeg',
                                    'Chicken curry image',
                                    'Chicken Curry  Rs.190'));

    menuDiv.append(createMenuItem('./img/kadalacurry.jpeg',
                                    'Kadala curry image',
                                    'Kadala Curry  Rs.180'));

    menuDiv.append(createMenuItem('./img/pappadam.jpeg',
                                    'Pappadam Image',
                                    'Pappadam Rs.50'));
    return menuDiv;
                                    
}

function initMenu()
{
    const contentDiv = document.getElementById('content');
    contentDiv.append(createMenu());
}

export default initMenu;