import React from 'react';
import SEO from '../../components/Seo';
import ContentLayout from '../contentLayout';
import * as style from './career.module.less';

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
				<div className={style.directionL}>
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
							<b>
								✔️ CONNECT (
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
							• Upgraded the payment system by integrating Stripe and PayPal SDKs, including a
							complete cart page redesign
						</span>
						<br />
						<span>
							• Refactored fabric and garment categories, implementing nested parent-child object
							structures for enhanced search filtering
						</span>
						<br />
						<span>
							• Optimized the web-based service for mobile web design to improve accessibility and
							user experience
						</span>
						<br />
						<span>• Developed a real-time notification system using WebSocket APIs</span>
						<br />
						<span>
							• Built a text editor for the user community page utilizing the Headless Editor API
							(Tiptap)
						</span>
						<br />
						<span>• Enhanced overall web service performance through targeted optimizations</span>
						<br />
						<span>
							• Implemented frontend monitoring solutions with Datadog for improved system insights
						</span>
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
						<span>• Developed history of billing for paid subscription plan</span>
						<br />
						<br />
						<p>✔️ Developing Design system </p>
						<p>✔️ Back office admin for CLO-SET & CONNECT</p>
					</div>
				</div>
			</li>
			<li>
				<div className={style.directionR}>
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
							• Developed internal web based communication systems for semiconductor manufacturers
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
							• Developed a hiring website to help local college students launch their IT careers by
							connecting them with their first professional opportunities
						</p>
						<p>
							• Built the SK Hynix internal private cloud platform console, including a CI/CD
							management interface to streamline development workflows
						</p>
					</div>
				</div>
			</li>
			<li>
				<div className={style.directionL}>
					<div className={style.flagWrapper}>
						<span className={style.flag}>Hanyang university</span>
						<span className={style.timeWrapper}>
							<span className={style.time}>2008.03 - 2015.02</span>
						</span>
					</div>
					<div className={style.desc}>• Majored in Electronic engineering (Bachelor Degree)</div>
				</div>
			</li>
		</ul>
	</ContentLayout>
);
export default Career;
