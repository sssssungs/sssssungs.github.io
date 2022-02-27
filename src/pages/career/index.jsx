import React from 'react';
import SEO from '../../components/Seo';
import ContentLayout from '../contentLayout';
import style from './career.module.less';

const Career = () => (
	<ContentLayout page="career">
		<SEO
			title="Blog"
			description="I love various web technologies and other stuff related to javascript and other trends"
			path="blog"
			keywords={[
				'Randy',
				'FullStack developer',
				'Frontend developer',
				'Javascript',
				'Typescript',
				'ReactJS',
			]}
		/>
		<>
			<ul className={style.timeline}>
				<li>
					<div className={style.directionR}>
						<div className={style.flagWrapper}>
							<span className={style.flag}>Hanyang University</span>
							<span className={style.timeWrapper}>
								<span className={style.time}>2008.03 - 2015.02</span>
							</span>
						</div>
						<div className={style.desc}>Majored in Electronic engineering (Bachelor Degree)</div>
					</div>
				</li>

				<li>
					<div className={style.directionL}>
						<div className={style.flagWrapper}>
							<span className={style.flag}>SK Holdings (C&C)</span>
							<span className={style.timeWrapper}>
								<span className={style.time}>2015.07 - 2020.03</span>
							</span>
						</div>
						<div className={style.desc}>
							2015.07 - 2018.02
							<br />
							Full-Stack Developer (JQuery, HTML/CSS, Java, Spring, Jenkins, Oracle, Mybatis)
							<br />
							<br />
							<p>
								✔️ Developed several internal communication systems for semiconductor
								factory-manufacturing
							</p>
						</div>
						<div className={style.horizontalLine} />
						<div className={style.desc}>
							2018.03 - 2020.03
							<br /> Full-Stack Developer (React, Redux, MySQL, Jenkins, ELK, DC/OS, Java, Grafana,
							Git, Nginx)
							<br />
							<br />
							<p>
								✔️ Developed the hiring application for regional college students who were in
								college to get their job in IT company
							</p>
							<p>
								✔️ Developed a CI/CD console in private cloud system for developers in workplace
							</p>
						</div>
					</div>
				</li>
				<li>
					<div className={style.directionR}>
						<div className={style.flagWrapper}>
							<span className={style.flag}>CLO Virtual Fashion</span>
							<span className={style.timeWrapper}>
								<span className={style.time}>2020.08 - present</span>
							</span>
						</div>
						<div className={style.desc}>
							Frontend Developer (React, Redux, Mobx, Typescript, Nextjs, Emotionjs, Material UI,
							Storybook, AWS, K8S)
							<br />
							<br />
							<p>
								✔️ CLO-SET (
								<a href="https://style.clo-set.com" target="_blank" rel="noopener noreferrer">
									https://style.clo-set.com
								</a>
								)<br />
								Communication cloud PLM platform for Fashion industry focusing on making 3D assets,
								garments and etc.
							</p>
							<p>
								✔️ CONNECT (
								<a href="https://connect.clo-set.com" target="_blank" rel="noopener noreferrer">
									https://connect.clo-set.com
								</a>
								)<br />
								Open marketplace for online users to buy or sell their 3D assets and archive their
								portfolios. (Metaverse-oriented)
							</p>
						</div>
					</div>
				</li>
			</ul>
		</>
	</ContentLayout>
);
export default Career;
