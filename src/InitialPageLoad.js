import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createTitle() {
    const title = document.createElement('div');
    const titleImg = document.createElement('img');
    titleImg.src = 'assets/eating.png';
    title.appendChild(titleImg);
    title.classList.add('title');
    return title;
}

function removeClass() {
    const main = document.querySelector('#main');
    main.classList = '';
    return main;
}

function homeBtn() {
    const wrapper = document.createElement('div');
    const homeButton = document.createElement('button');
    wrapper.append(homeButton);
    wrapper.classList.add('wrapper');
    wrapper.classList.add('home_btn');
    homeButton.classList.add('heading_btn');
    homeButton.classList.add('active');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        const headBtn = document.querySelectorAll('.heading_btn');
        if(e.target.classList.contains("heading_btn")) {
            removeClass();
            headBtn.forEach((button) => {
                button.classList.remove("active");
            });
            e.target.classList.add("active");
            loadHome();
        }  
    })
    return wrapper;
}

function menuBtn() {
    const wrapper = document.createElement('div');
    const menuButton = document.createElement('button');
    wrapper.append(menuButton);
    wrapper.classList.add('wrapper');
    wrapper.classList.add('menu_btn');
    menuButton.classList.add('heading_btn');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        const headBtn = document.querySelectorAll('.heading_btn');
        if(e.target.classList.contains("heading_btn")) {
            removeClass();
            headBtn.forEach((button) => {
                button.classList.remove("active");
            });
            e.target.classList.add("active");
            loadMenu();
        }    
    })
    return wrapper;
}

function contactBtn() {
    const wrapper = document.createElement('div');
    const contactButton = document.createElement('button');
    wrapper.append(contactButton);
    wrapper.classList.add('wrapper');
    wrapper.classList.add('contact_btn');
    contactButton.classList.add('heading_btn');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        const headBtn = document.querySelectorAll('.heading_btn');
        if(e.target.classList.contains("heading_btn")) {
            removeClass();
            headBtn.forEach((button) => {
                button.classList.remove("active");
            });
            e.target.classList.add("active");
            loadContact();
        }       
    })
    return wrapper;
}

function createNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.appendChild(homeBtn());
    nav.appendChild(menuBtn());
    nav.appendChild(contactBtn());
    return nav;
}

function createHeader() {
    const header = document.createElement('div');
    header.setAttribute("id", "header");
    header.appendChild(createTitle());
    header.appendChild(createNav());
    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.setAttribute("id", "main");
    return main;
}


function initializePage() {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    loadHome();
    return content;
}

export default initializePage;