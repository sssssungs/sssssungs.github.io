import React from 'react';

const ScrollHOC = ({ children }) => {
	const [scrolled, setScrolled] = React.useState('0');

	const scrollProgress = () => {
		const scrollPx = document.documentElement.scrollTop;
		const winHeightPx =
			document.documentElement.scrollHeight - document.documentElement.clientHeight;
		setScrolled(`${(scrollPx / winHeightPx) * 100}%`);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', scrollProgress);
		return () => window.removeEventListener('scroll', scrollProgress);
	}, []);

	const progressContainerStyle = {
		background: 'transparent',
		height: '12px',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		zIndex: 99,
	};

	const progressBarStyle = {
		height: '12px',
		background: '#1890ff',
		width: scrolled,
	};
	return (
		<>
			<div style={progressContainerStyle}>
				<div style={progressBarStyle} />
			</div>
			{children}
		</>
	);
};

export default ScrollHOC;
