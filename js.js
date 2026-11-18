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

// Generate Coding Badge
const codingBadge = [
	{
		label: 'HTML',
		icon: 'fa-html5',
		color: 'var(--html)',
		boxShadow: 'var(--htmlBS)',
		bgGradient: 'var(--htmlGbg)',
	},
	{
		label: 'CSS',
		icon: 'fa-css',
		color: 'var(--css)',
		boxShadow: 'var(--cssBS)',
		bgGradient: 'var(--cssGbg)',
	},
	{
		label: 'JS',
		icon: 'fa-js',
		color: 'var(--js)',
		boxShadow: 'var(--jsBS)',
		bgGradient: 'var(--jsGbg)',
	},
	{
		label: 'Git Hub',
		icon: 'fa-github',
		color: 'var(--github)',
		boxShadow: 'var(--ghBS)',
		bgGradient: 'var(--githubGbg)',
	},
];

codingBadge.forEach((badge) => {
	const codingBadgeContainer = getById('coding-badge-container');

	//Create Coding Badge
	const codingBadge = createElement('div');
	addClass(codingBadge, 'coding-badge');
	addClass(codingBadge, 'container');
	appendChild(codingBadgeContainer, codingBadge);
	codingBadge.style.boxShadow = badge.boxShadow;

	//Create icon container
	const iconContainer = createElement('div');
	addClass(iconContainer, 'icon-container');
	appendChild(codingBadge, iconContainer);

	//Generate Coding Icons
	const codingIcon = createElement('i');
	addClass(codingIcon, 'fa-brands');
	addClass(codingIcon, badge.icon);
	appendChild(iconContainer, codingIcon);
	codingIcon.style.color = badge.color;

	//Create Coding Badge Label
	const badgeLabel = createElement('span');
	addClass(badgeLabel, 'badge-label');
	textContent(badgeLabel, badge.label);
	badgeLabel.style.color = badge.color;
	appendChild(codingBadge, badgeLabel);

	codingBadge.addEventListener('mouseover', () => {
		codingBadgeContainer.style.boxShadow = badge.boxShadow;
		codingBadgeContainer.style.background = badge.bgGradient;
	});

	codingBadge.addEventListener('mouseleave', () => {
		codingBadgeContainer.style.boxShadow = 'var(--black)';
		codingBadgeContainer.style.background = 'var(--black)';
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
