function createAbout()
{
    const aboutDiv = document.createElement('div');
    const mainImg = document.createElement('img');
    const descr = document.createElement('div');

    aboutDiv.classList.add('about');
    aboutDiv.classList.add('content-sect');
    aboutDiv.setAttribute('id', 'about-section');
    mainImg.classList.add('about-img');
    mainImg.setAttribute('src', './img/tea-making.jpeg');
    mainImg.setAttribute('alt', 'an image of a man making a tea');
    descr.classList.add('about-para');
    descr.innerText = 'Hailing from the traditional haven of spices, we are a group of very passionate individuals whose mission is to make the world taste some of the best food available on Earth';

    aboutDiv.append(mainImg);
    aboutDiv.append(descr);
    return aboutDiv;
}

function initAbout()
{
    const contentDiv = document.getElementById('content');
    contentDiv.append(createAbout());
}

export default initAbout;