const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');
const resuumeBtn = document.getElementById('resume-btn');
const closeButton = document.getElementById('close-button');
const body = document.body;

function closeNavbar() {
	navbarLinks.classList.remove('active');
	resuumeBtn.classList.remove('active');
	body.classList.remove('no-scroll');
}

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
	resuumeBtn.classList.toggle('active');
	body.classList.toggle('no-scroll')
});

closeButton.addEventListener('click', closeNavbar);

window.addEventListener('resize', () => {
	if (window.innerWidth > 880) {
		closeNavbar();
	}
});

const navbarLinksItems = document.querySelectorAll('.section-item-container a');
navbarLinksItems.forEach(link => {
	link.addEventListener('click', closeNavbar);
});