import React, { useState } from 'react';
import { Layout } from 'antd';
import Lottie from 'react-lottie';
import animationData from '../images/78259-loading.json';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import ScrollHOC from './scrollHOC';

export default () => {
	const [loading, setLoading] = useState(true);
	return (
		<ScrollHOC>
			<Layout className="outerPadding">
				<Layout className="container">
					<Header />
					<SidebarWrapper>
						<>
							{loading ? (
								<Lottie
									options={{
										animationData,
										loop: 1,
										autoplay: true,
									}}
									isStopped={false}
									isPaused={false}
									isClickToPauseDisabled={false}
									eventListeners={[
										{
											eventName: 'complete',
											callback: () => setLoading(false),
										},
									]}
								/>
							) : (
								<div>
									<AboutMe />
									<Skills />
								</div>
							)}
						</>
					</SidebarWrapper>
				</Layout>
			</Layout>
		</ScrollHOC>
	);
};
