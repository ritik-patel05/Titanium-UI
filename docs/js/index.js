// Top Navbar toggles

const topNavbarToggles = () => {
	const navbarBurger = document.getElementById("navbarBurger");
	const navbarMenu = document.getElementById("navbarMenu");

	navbarBurger.addEventListener("click", (event) => {
		navbarBurger.classList.toggle("is-active");
		navbarMenu.classList.toggle("is-active");
	});
}

topNavbarToggles();

// Side Navbar mobile toggles

const sideNavbarToggles = () => {
	let showNav = false;

	const docs = document.getElementById('docs');
	const overlay = document.getElementById('docsNavOverlay');
	const nav = document.getElementById('docsNav');
	const navButton = document.getElementById('docsNavButton');

	navButton.addEventListener('click', (event) => {
		showNav = !showNav;
		updateUI();
	});

	overlay.addEventListener('click', (event) => {
		showNav = false;
		updateUI();
	});

	const updateUI = () => {
		if (showNav) {
			docs.classList.add('showing-overlay');
			nav.classList.add("is-shown");
		} else {
			docs.classList.remove('showing-overlay');
			nav.classList.remove('is-shown');
		}
	};
}

sideNavbarToggles();

// Snackbar previews

const snackbarPreviews = () => {
	document.addEventListener('click', (event) => {
		let id = event.target.dataset.id;
		if (!id) return;

		let elem = document.getElementById(id);
		elem.style.display = 'flex';
		setTimeout(() => {
			elem.style.display = 'none';
		}, 5000);
	})
}

snackbarPreviews();