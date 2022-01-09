import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
	const location = useLocation();
	const navList = document.querySelector('.nav__list');
	const navBtn = document.querySelector('.navbar__btn');

	useEffect(() => {
		window.scrollTo(0, 0);

		if (navList) {
			navList.classList.remove('is-active');
		}

		if (navBtn) {
			navBtn.classList.remove('is-active');
		}
	}, [location]);

	return <>{props.children}</>
};

export default ScrollToTop;