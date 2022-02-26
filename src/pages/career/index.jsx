import React from 'react';
import SEO from '../../components/Seo';
import ContentLayout from '../contentLayout';
import style from './career.module.less';

const Career = () => (
	<ContentLayout page="home">
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
							<span className={style.flag}>Freelancer</span>
							<span className={style.timeWrapper}>
								<span className={style.time}>2013 - present</span>
							</span>
						</div>
						<div className={style.desc}>
							My current employment. Way better than the position before!
						</div>
					</div>
				</li>

				<li>
					<div className={style.directionL}>
						<div className={style.flagWrapper}>
							<span className={style.flag}>Apple Inc.</span>
							<span className={style.timeWrapper}>
								<span className={style.time}>2011 - 2013</span>
							</span>
						</div>
						<div className={style.desc}>
							My first employer. All the stuff I've learned and projects I've been working on.
						</div>
					</div>
				</li>

				<li>
					<div className={style.directionR}>
						<div className={style.flagWrapper}>
							<span className={style.flag}>Harvard University</span>
							<span className={style.timeWrapper}>
								<span className={style.time}>2008 - 2011</span>
							</span>
						</div>
						<div className={style.desc}>
							A description of all the lectures and courses I have taken and my final degree?
						</div>
					</div>
				</li>
			</ul>
		</>
	</ContentLayout>
);
export default Career;
