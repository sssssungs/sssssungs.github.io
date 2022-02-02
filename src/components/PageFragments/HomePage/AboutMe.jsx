import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../About';
import { domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
	paraOne: `Hello guys! And welcome with my big love! My name is <b>Sungsik Won</b>. I'm a <b><u>Frontend developer</u></b> who is
    passionate about various web technologies. I have an experience of nearly 3 and half years working as a full-stack developer with <b><u>Jquery, Spring framework and Oracle/SQL</u></b> in Semiconductor industry. 
    Also about 2 years of <b><u>React, Redux, Typescript and Next.js</u></b>, too. I also have hands on experience working with cloud infrastructures like <b><u>DC/OS (Apache Mesos), CI/CD with ELK and AWS</u></b> a little and have deployed applications
    keeping scalability in mind.`,
	paraTwo: `Currently I'm working mostly with <b><u>javascript/typescript library like React and Next.js with Emotion.</u></b> 
	I'm always a learner and a self taught programmer. <b><u>Speaking English</u></b> always has been on my todo list so that I can communicate with English speaker in real life.
	Nowadays, I'm <b><u>learning French</u></b> for fun. It's very attractive language I think.<br/> 
	Thank you for reading and have a good one! 🤩`,
};

const AboutMe = () => (
	<>
		<div>
			<SEO
				title="Welcome Home"
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
			<p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
			<p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
		</div>
		<Row gutter={[20, 20]}>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					img="born.png"
					width={110}
					height={110}
					alt="location image"
					textH4="Born and bought up in"
					textH3="South Korea"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={110}
					height={110}
					img="coffee.png"
					alt="coffee image"
					textH4="Love Coffee"
					textH3="Happiness and Energy"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={110}
					height={110}
					img="social.png"
					alt="meeting image"
					textH4="Socially Active"
					textH3="Awkward sometimes"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={110}
					height={110}
					img="workout.png"
					alt="motorcycle image"
					textH4="Love to work out"
					textH3="Sweaty Smile"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={110}
					height={110}
					img="self-taught.png"
					alt="web image"
					textH4="Self Taught"
					textH3="Good Learner"
				/>
			</Col>
			<Col xs={24} sm={24} md={12} lg={8}>
				<AboutTile
					width={110}
					height={110}
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
