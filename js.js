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

//Contact Function
const directContactLabel = getById('direct-contact-label');
const socialContactLabel = getById('social-contact-label');
const contactLinks = selectAll('.contact-link');
const contactCloseX = getById('contact-close-x');

const contactLinksObj = [
	{
		contactName: 'Gmail',
		link: contactLinks[0],
		contactLabel: directContactLabel,
		color: 'var(--accent)',
		effects: 'var(--googleBS)',
	},
	{
		contactName: 'WhatsApp',
		link: contactLinks[1],
		contactLabel: directContactLabel,
		color: 'var(--whatsapp)',
		effects: 'var(--whatsappBS)',
	},
	{
		contactName: 'Facebook',
		link: contactLinks[2],
		contactLabel: socialContactLabel,
		color: 'var(--facebook)',
		effects: 'var(--facebookBS)',
	},
	{
		contactName: 'Instagram',
		link: contactLinks[3],
		contactLabel: socialContactLabel,
		color: 'var(--instagram)',
		effects: 'var(--instagramBS)',
	},
	{
		contactName: 'Threads',
		link: contactLinks[4],
		contactLabel: socialContactLabel,
		color: 'var(--contrast-light)',
		effects: 'var(--threadsBS)',
	},
];

function toggleContactContainerClose(arr, container) {
	for (let toggle of arr) {
		toggle.addEventListener(click, () => {
			if (container.classList.contains(flexActive)) {
				toggleClass(container, flexActive);
			}
		});
	}
}

function contactHoverLabelUpdate(arr, parentContainer) {
	arr.forEach((links) => {
		links.link.addEventListener('mouseover', () => {
			textContent(links.contactLabel, links.contactName);
			links.contactLabel.style.color = links.color;
			parentContainer.style.boxShadow = links.effects;
		});

		links.link.addEventListener('mouseleave', () => {
			if (links.contactLabel === directContactLabel) {
				textContent(directContactLabel, 'Contact Me');
			}

			if (links.contactLabel === socialContactLabel) {
				textContent(socialContactLabel, 'Find Me On');
				socialContactLabel.style.color = 'var(--accent)';
			}

			directContactLabel.style.color = 'var(--accent)';
			parentContainer.style.border = 'none';
			parentContainer.style.boxShadow = 'inset 2px 2px 8px var(--accent)';
		});
	});
}

const contactCtaBtn = getById('contact-cta-btn').addEventListener(click, () => {
	//Toggle Open Contact Container
	const contactContainer = getById('contact-container');
	if (!contactContainer.classList.contains(flexActive)) {
		toggleClass(contactContainer, flexActive);
	}

	//Contact Icon hover effects function
	contactHoverLabelUpdate(contactLinksObj, contactContainer);

	//Toggle Close Contact Container
	const closeContactContainerToggles = Array.of(contactCloseX, contactContainer);
	toggleContactContainerClose(closeContactContainerToggles, contactContainer);

	// contactContainer.addEventListener('mouseleave', () => {
	// 	if (contactContainer.classList.contains(flexActive)) {
	// 		toggleClass(contactContainer, flexActive);
	// 	}
	// });

	window.addEventListener(keyup, (e) => {
		if (e.key == 'Escape' && contactContainer.classList.contains(flexActive)) {
			toggleClass(contactContainer, flexActive);
		}
	});
});

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

//**Project Card Section */
//Project Object
const projects = [
	{ name: 'Astro Zone', img: './assets/projectImages/astroZone.png', info: '#', view: '#' },
	{ name: 'Solar Gallery', img: './assets/projectImages/solar_gallery.png', info: '#', view: '#' },
	{
		name: 'Medical Landing',
		img: './assets/projectImages/medical_landing.png',
		info: '#',
		view: '#',
	},
	{ name: 'SaaS', img: './assets/projectImages/SaaS.png', info: '#', view: '#' },
	{ name: 'Caltube', img: './assets/projectImages/caltube.png', info: '#', view: '#' },
	{ name: 'Log In Form', img: './assets/projectImages/login_form.png', info: '#', view: '#' },
	{ name: 'Pokemon', img: './assets/projectImages/Pokemon.png', info: '#', view: '#' },
	{ name: 'Portfolio One', img: './assets/projectImages/portfolio_one.png', info: '#', view: '#' },
	{ name: 'Portfolio Two', img: './assets/projectImages/astroZone.png', info: '#', view: '#' },
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
