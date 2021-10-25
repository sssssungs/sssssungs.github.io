import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
	paraOne: `Hello guys! And welcome with my big love! My name is <b>Sungsik Won</b>. I'm a <span style="font-size:17px;"><b><u>Frontend developer</u></b></span> who is
    passionate about various web technologies. I have an experience of nearly 3 and half years working as a full-stack developer with <span style="font-size:17px;"><b><u>Jquery, Spring framework and Oracle/SQL</u></b></span> in Semiconductor industry. 
    Also about 2 years of <span style="font-size:17px;"><b><u>React, Redux, Typescript and Next.js</u></b></span>, too. I also have hands on experience working with cloud infrastructures like <span style="font-size:17px;"><b><u>DC/OS (Apache Mesos), CI/CD with ELK and AWS</u></b></span> a little and have deployed applications
    keeping scalability in mind.`,
	paraTwo: `Currently I'm working mostly with javascript/typescript like React and Next.js with Emotion. 
	I'm always a learner and a self taught programmer. <span style="font-size:17px;"><b><u>Speaking English</u></b></span> always has been on my todo list so that I can communicate with English speaker in real life.
	Nowadays, I've started <span style="font-size:17px;"><b><u>studying French</u></b></span> for fun. It's very attractive language I think.<br/> 
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
