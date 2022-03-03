import React from 'react';
import { Layout } from 'antd';
// import Lottie from 'react-lottie';
// import animationData from '../images/loading-hand.json';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import ScrollHOC from './scrollHOC';

const ContentLayout = ({ page, children }) => (
	// const [loading, setLoading] = useState(true);

	<ScrollHOC>
		<Layout className="outerPadding">
			<Layout className="container">
				<Header page={page} />
				<SidebarWrapper>
					{/*{loading ? (*/}
					{/*	<div className="content-layout">*/}
					{/*		<Lottie*/}
					{/*			options={{*/}
					{/*				animationData,*/}
					{/*				loop: 1,*/}
					{/*				autoplay: true,*/}
					{/*			}}*/}
					{/*			isStopped={false}*/}
					{/*			isPaused={false}*/}
					{/*			isClickToPauseDisabled={false}*/}
					{/*			eventListeners={[*/}
					{/*				{*/}
					{/*					eventName: 'complete',*/}
					{/*					callback: () => setLoading(false),*/}
					{/*				},*/}
					{/*			]}*/}
					{/*			style={{ height: '75vh' }}*/}
					{/*		/>*/}
					{/*	</div>*/}
					{/*) : (*/}
					<>{children}</>
					{/*)}*/}
				</SidebarWrapper>
			</Layout>
		</Layout>
	</ScrollHOC>
);

export default ContentLayout;
