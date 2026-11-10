//Utility DOM FUNCTIONS
const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);
//
//
const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

//Insert Logo Text
const logoText = getById('logo-text');
textContent(logoText, `<CalCodez/>`);

// Coding Icon Label Func
const codingIcons = selectAll('.fa-brands');
const codingIcon = [
	{ icons: codingIcons[0], name: 'HTML', color: '#e34c26' },
	{ icons: codingIcons[1], name: 'CSS', color: '#663399' },
	{ icons: codingIcons[2], name: 'JavaScript', color: '#f7df1e' },
	{ icons: codingIcons[3], name: 'Github', color: 'var(--contrast-dark)' },
];
const codingLabel = getById('coding-label');
codingIcon.forEach((icon) => {
	icon.icons.addEventListener('mouseenter', () => {
		textContent(codingLabel, icon.name);
		codingLabel.style.color = icon.color;
		icon.icons.style.color = icon.color;
	});

	icon.icons.addEventListener('mouseleave', () => {
		textContent(codingLabel, 'Skills');
		codingLabel.style.color = 'var(--contrast-dark)';
	});
});

//++Mobile Menu
const mobileMenuToggle = getById('mobile-menu-toggle');
const mobileMenu = getById('mobile-menu');
const activeMenu = 'mobile-menu-active';
const mobileNavLinks = selectAll('.mobile-nav-links');

mobileMenuToggle.addEventListener(click, () => {
	if (!mobileMenu.classList.contains(activeMenu)) {
		toggleClass(mobileMenu, activeMenu);
		for (let links of mobileNavLinks) {
			setTimeout(() => {
				toggleClass(links, flexActive);
				console.log(links);
			}, 200);
		}
	} else if (mobileMenu.classList.contains(activeMenu)) {
		toggleClass(mobileMenu, activeMenu);
		for (let links of mobileNavLinks) {
			toggleClass(links, flexActive);
		}
	}
});

//**Project Card Section */

//Project Object

const projects = [
	{ name: 'Astro Zone', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
	{ name: 'Solar Gallery', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
	{ name: 'Medical Landing', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
	{ name: 'SaaS', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
	{ name: 'Portfolio One', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
	{ name: 'Portfolio Two', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
	{ name: 'Portfolio Two', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
	{ name: 'Portfolio Two', img: './assets/images/CalvinC_One.jpg', info: '#', view: '#' },
];

projects.forEach((card) => {
	const projectCardContainer = getById('project-cards-container');

	//Create Project Card
	const projectCard = createElement('div');
	addClass(projectCard, 'project-card');
	addClass(projectCard, 'container');
	appendChild(projectCardContainer, projectCard);

	//Create project Card Image Container
	const cardImgContainer = createElement('div');
	addClass(cardImgContainer, 'card-img-container');
	appendChild(projectCard, cardImgContainer);

	//Create Project Card Image
	const projectImg = createElement('img');
	projectImg.src = card.img;
	appendChild(cardImgContainer, projectImg);

	//Create Project Name
	const projectName = createElement('h3');
	addClass(projectName, 'project-name');
	textContent(projectName, card.name);
	appendChild(projectCard, projectName);

	//Crate Project Button Container
	const projectBtnContainer = createElement('div');
	addClass(projectBtnContainer, 'card-btn-container');
	addClass(projectBtnContainer, 'container');
	appendChild(projectCard, projectBtnContainer);

	//Create Project Card Buttons
	const projectButtons = Array.of();

	for (let i = 0; i < 2; i++) {
		projectButtons.push(createElement('a'));
	}
	textContent(projectButtons[0], 'Info');
	textContent(projectButtons[1], 'View');

	projectButtons[0].src = card.info;
	projectButtons[1].src = card.view;

	for (let btns of projectButtons) {
		appendChild(projectBtnContainer, btns);
	}
});
