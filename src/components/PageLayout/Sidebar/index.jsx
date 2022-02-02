import React from 'react';
import { Affix, Layout, Row, Col } from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const { github, instagram, linkedin } = Config.social;

const DomContent = () => (
	<aside>
		<div className={style.profileAvatar} />
		<div className={`${style.name} centerAlign`}>
			<div className={`${style.boxName} centerAlign`}>
				<h2>
					<span>Sungsik R. Won</span>
				</h2>
			</div>
			<div className={`${style.badge} ${style.badgeGray}`}>Frontend Developer</div>
			<div className="centerAlign box">
				<a href={github} target="_blank" rel="noopener noreferrer">
					<FA name="github" />
				</a>
				<a href={instagram} target="_blank" rel="noopener noreferrer">
					<FA name="instagram" />
				</a>
				<a href={linkedin} target="_blank" rel="noopener noreferrer">
					<FA name="linkedin" />
				</a>
			</div>
			<ul className={`box ${style.badge} contactBlock`}>
				<li className={`${style.contactBlockItem}`}>
					<div className={`${style.iconMargin}`}>
						<FeatherIcon size="19" icon="calendar" />
					</div>
					<div className={`${style.contactText}`}> Aug 31</div>
				</li>
				<li className={`${style.contactBlockItem}`}>
					<div className={`${style.iconMargin}`}>
						<FeatherIcon size="19" icon="map-pin" />
					</div>
					<div className={`${style.contactText}`}>Seoul, South Korea</div>
				</li>
				<li className={`${style.contactBlockItem}`}>
					<span className={`${style.iconMargin}`}>
						<FeatherIcon size="19" icon="mail" />
					</span>

					<a
						href="mailto:&#115;&#115;&#115;&#115;&#115;&#117;&#110;&#103;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
						target="_top"
					>
						<span className={style.emailHider}>@</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>
);

const Sidebar = props => {
	const [width] = useWindowSize();
	const { children } = props;
	const { pathname } = globalHistory.location;
	let domContent = <DomContent />;
	if (width > 997) {
		domContent = (
			<Affix offsetTop={0}>
				<DomContent />
			</Affix>
		);
	}
	if (width < 768) {
		domContent = <></>;
		if (pathname === '/') {
			domContent = <DomContent />;
		}
	}
	return (
		<>
			<Layout>
				<Content className={`${style.content} ${style.background}`}>
					<Row>
						<Col sm={24} md={9} lg={6} className={style.sidebarContent}>
							{domContent}
						</Col>
						<Col sm={24} md={15} lg={18}>
							<Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
								{children}
							</Layout>
						</Col>
					</Row>
				</Content>
			</Layout>
		</>
	);
};

export const Sidebar404 = props => {
	const { children } = props;
	return (
		<Layout>
			<Content className={`${style.content} ${style.background} `}>
				<Row>
					<Col sm={24} md={24} lg={24}>
						<Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
							{children}
						</Layout>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
};

export default Sidebar;
