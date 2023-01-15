import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../About';
import { domHtml } from '../../../utils/stripTags';
import style from './aboutme.module.less';

import SEO from '../../Seo';

const pageText = {
	paraOne: `Hello guys! And welcome with my big love! My name is Sungsik Won (English name is Randy🤪!). I'm a Frontend developer who is
    passionate about various web technologies. I have an experience of nearly 3 and half years working as a full-stack developer with Jquery, Spring framework and Oracle/SQL in Semiconductor industry. 
    Also about 3 years of React, Redux, Typescript and Next.js, too. I also have hands on experience working with cloud infrastructures like DC/OS (Apache Mesos), CI/CD with ELK and AWS a little and have deployed applications
    keeping scalability in mind. Recently, I usually use an Azure with kubernetes for cloud infrastructures and Storybook for archiving of Design system components.`,
	paraTwo: `I'm working mostly with javascript/typescript library like React and Next.js with Emotion, Redux-saga and Mobx. 
	I'm always a learner 😃 and a self-taught programmer. Speaking English 🇬🇧 always has been on my todo list so that I can communicate with English speaker in real life.
	Nowadays, I'm learning French 🇫🇷, very attractive language. <br/> 
	Thank you for reading my article and have a beautiful day! 🤩`,
};

const AboutMe = () => (
	<>
		<div>
			<SEO
				title="Hello to the dev world"
				description="Wanna know about me? Come and check me!"
				path=""
				keywords={[
					'Sungsik',
					'Randy',
					'FullStack developer',
					'Frontend developer',
					'Javascript',
					'Typescript',
					'ReactJS',
				]}
			/>
			<h1 className="titleSeparate">About Me</h1>
			<p className={style.paragraph} dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
			<p className={style.paragraph} dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
			<br />
		</div>
		<Row gutter={[20, 20]}>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					img="born.png"
					width={100}
					height={100}
					alt="location image"
					textH4="Born and bought up in"
					textH3="South Korea"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={100}
					height={100}
					img="coffee.png"
					alt="coffee image"
					textH4="Love to break"
					textH3="Happiness and Energy"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={100}
					height={100}
					img="social.png"
					alt="meeting image"
					textH4="Socially Active"
					textH3="Good communicator"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={100}
					height={100}
					img="workout.png"
					alt="motorcycle image"
					textH4="Love to work out"
					textH3="Healthy body and spirit"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={100}
					height={100}
					img="study.png"
					alt="web image"
					textH4="Self Taught"
					textH3="Always nice Learner"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={100}
					height={100}
					img="gradu.png"
					alt="graduation image"
					textH4="Pursued B.Tech in"
					textH3="Electronic Engineering"
				/>
			</Col>
		</Row>
	</>
);

export default AboutMe;
