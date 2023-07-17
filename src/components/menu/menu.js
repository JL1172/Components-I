import './menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Social Media',
  'Subscribe'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

  /*creating the architecture that only needs to be made once*/ 
  const divClassHeader = document.querySelector('.header');
  const menu = document.createElement('div');
  const ul = document.createElement('ul');
  divClassHeader.appendChild(menu);
  menu.appendChild(ul);
  menu.classList.add('menu');
  const articles = document.querySelector('.articles');
//
function menuMaker(item) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = item;

    li.addEventListener('mouseenter',evt=> {
        evt.target.style.borderBottom = '1px solid white';
        evt.target.style.letterSpacing = '.2rem';
        evt.target.style.transition = '.3s'
        li.style.color = '#FFD480';
    });
    li.addEventListener('mouseleave',evt=> {
      evt.target.style.borderBottom = 'none';
      evt.target.style.letterSpacing = '0';
      evt.target.style.transition = '.3s'
      li.style.color = 'white';
  });
    const menuButton = document.querySelector('.menu-button');
      menuButton.addEventListener('click',evt => {
        menu.classList.add('menu--open');
        menuButton.style.transform = 'rotate(90deg)';
        menuButton.style.transition = '.3s';
        articles.style.filter = 'blur(5px)';
      });
    menu.addEventListener('mouseleave', evt => {
      menu.classList.remove('menu--open');
      menuButton.style.transform = '';
      menuButton.style.transition = '.3s';
      articles.style.filter = 'blur(0)';
    });
    
      return menu; 
}
menuItems.forEach(item=> {
  menuMaker(item);
});
//





