function createFooter()
{
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    const descr = document.createElement('p');
    descr.innerText = "made with \u2665 by Kevin Jose";

    footer.append(descr);

    return footer;
}

function initFooter()
{
    const contentDiv = document.getElementById('content');
    contentDiv.append(createFooter());
}


export default initFooter;