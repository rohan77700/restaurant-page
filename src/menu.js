function createTitle() {
    const title = document.createElement('div');
    title.classList.add('menu_container');
    const titleText = document.createElement('p');
    titleText.textContent = "メニュー";
    titleText.classList.add('menu_title');
    title.appendChild(titleText);
    return title;
}

function createFoodItem(foodname,src) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu_item');
    const foodImg = document.createElement('img');
    foodImg.classList.add('food_img');
    foodImg.src = src;
    const foodName = document.createElement('div');
    foodName.classList.add('food_name');
    foodName.textContent = foodname;
    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    return menuItem;
}

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu_list');
    menu.appendChild(createFoodItem('Ichiraku Ramen', 'assets/ichiraku_ramen.jpg'));
    menu.appendChild(createFoodItem('Shoyu Ramen', 'assets/shoyu_ramen.jpg'));
    menu.appendChild(createFoodItem('Miso Ramen','assets/miso_ramen.jpg'));
    menu.appendChild(createFoodItem('Cappuccino','assets/cappuccino.jpg'));
    menu.appendChild(createFoodItem('Dalgona','assets/dalgona.jpg'));
    menu.appendChild(createFoodItem('Cold Brew','assets/cold_brew.jpg'));
    return menu;
}

function loadMenu() {
    const menuPage = document.querySelector('#main');
    menuPage.classList.add('menu_page');
    menuPage.textContent = '';
    menuPage.appendChild(createTitle());
    menuPage.appendChild(createMenu());
    return menuPage;
}

export default loadMenu;