import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import ScrollHOC from './scrollHOC';

const ContentLayout = ({ page, children }) => (
	<ScrollHOC>
		<Layout className="outerPadding">
			<Layout className="container">
				<Header page={page} />
				<SidebarWrapper>
					<>{children}</>
				</SidebarWrapper>
			</Layout>
		</Layout>
	</ScrollHOC>
);

export default ContentLayout;
