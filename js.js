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
const codingLabel = select('.coding-label');
codingIcon.forEach((icon) => {
	icon.icons.addEventListener('mouseenter', () => {
		textContent(codingLabel, icon.name);
		codingLabel.style.color = icon.color;
		icon.icons.style.color = icon.color;
	});

	icon.icons.addEventListener('mouseleave', () => {
		textContent(codingLabel, '');
	});
});
