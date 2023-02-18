function justuImage() {
    const justuImg = document.createElement('div');
    justuImg.classList.add('img_container');
    const topImg = document.createElement('img');
    topImg.classList.add('top_img');
    topImg.src = 'assets/chef.jpg';
    const bottomImg = document.createElement('img');
    bottomImg.classList.add('bottom_img');
    bottomImg.src = 'assets/assist.chef.jpg';
    justuImg.appendChild(bottomImg);
    justuImg.appendChild(topImg);
    return justuImg;
}

function Welcome() {
    const welcomeBox = document.createElement('div');
    const welcomeText = document.createElement('p');
    welcomeBox.classList.add('home_text');
    welcomeBox.classList.add('welcome');
    welcomeText.textContent = 'いらっしゃいませ';
    welcomeBox.appendChild(welcomeText);
    return welcomeBox;
}

function Order() {
    const justuOrder = document.createElement('div');
    const aboutText = document.createElement('p');
    justuOrder.classList.add('home_text');
    justuOrder.classList.add('slogan');
    aboutText.textContent = "ご注文はお決まりですか？";
    justuOrder.appendChild(aboutText);
    return justuOrder;
}

function loadHome() {
    const homePage = document.querySelector('#main');
    homePage.classList.add('home_page');
    homePage.textContent = '';
    homePage.appendChild(Welcome());
    homePage.appendChild(justuImage());
    homePage.appendChild(Order());
    return homePage;
}

export default loadHome;