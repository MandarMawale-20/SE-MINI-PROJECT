const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavtn = document.querySelector('#close_nav-btn');
// opens nav dropdown
const openNav = () => { 
navItems.style.display = 'flex'; 
openNavBtn.style.display = 'none';1
closeNavBtn.style.display = 'inline-block'; 
}
// close nav dropdoun |
const closeNav = () => { 
navItems.style.display = 'none'; 
openNavBtn. style.display = 'inline-block'; 
closeNavBtn.style.display = 'inline-blocK'; 
} 
openNavBtn.addEventListener('click', openNav); 
closeNavBtn. addEventListener('click', closeNav); 