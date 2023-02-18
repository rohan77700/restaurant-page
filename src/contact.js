function createTitle() { 
    const title = document.createElement('div');
    const titleText = document.createElement('p');
    title.classList.add('contact_container');
    titleText.classList.add('contact_title');
    titleText.textContent = '場所';
    title.appendChild(titleText);
    return title;
}

function Address() {
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address_container');
    const addressTitle = document.createElement('div');
    addressTitle.classList.add('address_title');
    const address = document.createElement('p');
    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src ="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6506.427176161714!2d130.6224762!3d32.9205593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540581cbf255473%3A0xc1f116a9f0bd4fc!2sKonoha%2C%20Gyokuto%2C%20Tamana%20District%2C%20Kumamoto%20869-0303%2C%20Japan!5e1!3m2!1sen!2sin!4v1676710031015!5m2!1sen!2sin";
    addressTitle.textContent = 'Address';
    address.textContent = "Konoha, Gyokuto,\r\n";
    address.textContent += "Tamana District,\r\n";
    address.textContent += "Kumamoto 869-0303,\r\n";
    address.textContent += "JAPAN";
    addressContainer.appendChild(addressTitle);
    addressContainer.appendChild(address);
    addressContainer.appendChild(map);
    return addressContainer;
}

function loadContact() {
    const contactPage = document.querySelector('#main');
    contactPage.classList.add('contact_page');
    contactPage.textContent = '';
    contactPage.appendChild(createTitle());
    contactPage.appendChild(Address());
    return contactPage;
}

export default loadContact;