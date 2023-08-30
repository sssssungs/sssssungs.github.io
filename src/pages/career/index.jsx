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
		<div className="marginTopTitle">
			<h1 className="titleSeparate">Career</h1>
		</div>
		<ul className={style.timeline}>
			<li>
				<div className={style.directionR}>
					<div className={style.flagWrapper}>
						<span className={style.flag}>Hanyang university</span>
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
						<b>Full-Stack Developer</b>
						<br /> (JQuery, HTML, CSS, Java, Spring, Jenkins, Oracle, Mybatis)
						<br />
						<br />
						<p>
							✔️ Developed internal web based communication systems for semiconductor manufacturers
							and engineers.
						</p>
					</div>
					<div className={style.horizontalLine} />
					<div className={style.desc}>
						2018.03 - 2020.03
						<br /> <b>Frontend Developer (witn BFF)</b>
						<br />
						(React, Redux, MySQL, Oracle, Nodejs, Jenkins, ELK, DC/OS, Java, Grafana, Git, Nginx)
						<br />
						<br />
						<p>
							✔️ Developed the hiring application for regional college students who were in college
							to get their job in IT company.
						</p>
						<p>
							✔️ Developed a CI/CD console in private cloud system for developers working in
							semiconductor manufacturing factory.
						</p>
					</div>
				</div>
			</li>
			<li>
				<div className={style.directionR}>
					<div className={style.flagWrapper}>
						<span className={style.flag}>CLO Virtual Fashion</span>
						<span className={style.timeWrapper}>
							<span className={style.time}>
								2020.08 - <i>present</i>
							</span>
						</span>
					</div>
					<div className={style.desc}>
						<b>Frontend Developer</b>
						<br />
						(React, Redux, Mobx, Javascript, Typescript, Nextjs, Yarnberry, Emotionjs, Material UI,
						Storybook, AWS, K8S, Azure, Figma, Zeplin, Framer, JIRA, confluence, Slack)
						<br />
						<br />
						<p>
							✔️ CLO-SET (
							<a href="https://style.clo-set.com" target="_blank" rel="noopener noreferrer">
								https://style.clo-set.com
							</a>
							)<br />
							Cloud PLM (Product lifecycle management) platform for fashion industry focusing on
							communication and decision making, management.
						</p>
						<span>• Refactored annotation features</span>
						<br />
						<span>• Developed history of billing for advanced paid plan</span>
						<br />
						<br />
						<p>
							✔️{' '}
							<b>
								CONNECT (
								<a href="https://connect.clo-set.com" target="_blank" rel="noopener noreferrer">
									https://connect.clo-set.com
								</a>
								)
							</b>
							<br />
							CLO-SET CONNECT is a global community for fashion creators to empower their digital
							assets through open marketplace, portfolio management tools, and networking solutions.
						</p>
						<span>
							• Upgraded payment system with Stripe and Paypal SDK including cart page renewal
						</span>
						<br />
						<span>
							• Refactored the fabric categories which is search filter categories having nested
							parent-children object structures
						</span>
						<br />
						<span>• Optimized web-based service to mobile web design</span>
						<br />
						<span>• Developed the notification system using web socket api</span>
						<br />
						<span>• Performance enhancement on web service</span>
						<br />
						<br />
						<p>✔️ Developing Design system </p>
						<p>✔️ Back office admin for CLO-SET & CONNECT</p>
					</div>
				</div>
			</li>
		</ul>
	</ContentLayout>
);
export default Career;
