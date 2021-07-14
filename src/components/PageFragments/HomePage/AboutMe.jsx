import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
	paraOne: `Hello guys with my big love! My name is <b>Sungsik Won</b>. I'm a frontend developer who is
    passionate about various web technologies. I have an experience of nearly 3 and half years working as a full-stack developer with Jquery, Spring framework and Oracle/SQL in Semiconductor industry. 
    Also about 2 years of React, Redux, Typescript and Next.js, too. I also have hands on experience working with cloud infrastructures like DC/OS (Apache Mesos), CI/CD with ELK and AWS a little and have deployed applications
    keeping scalability in mind.`,
	paraTwo: `Currently I'm working mostly with javascript/typescript like React and Next.js with Emotion. I'm always a learner and a self taught programmer. Thank you for reading and have a good one! 🤩`,
};

const AboutMe = () => {
	const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
	return (
		<>
			<div>
				<SEO
					title="About"
					description={description}
					path=""
					keywords={[
						'Sungsik',
						'Randy',
						'FullStack developer',
						'Frontend developer',
						'Javascript',
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
						img="location.png"
						height={60}
						alt="location image"
						textH4="Born and bought up in"
						textH3="South Korea"
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<AboutTile
						img="coffee.png"
						alt="coffee image"
						textH4="Love Coffee"
						textH3="Happiness and Energy"
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<AboutTile
						img="meeting.png"
						alt="meeting image"
						textH4="Socially Active"
						textH3="Awkward sometimes"
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<AboutTile
						img="motorcycle.png"
						alt="motorcycle image"
						textH4="Love to work out"
						textH3="Sweaty Smile"
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<AboutTile
						img="web.png"
						alt="web image"
						textH4="Self Taught Programmer"
						textH3="Thanks to the Web Resources"
						height={60}
						width={60}
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<AboutTile
						img="graduation.png"
						alt="graduation image"
						textH4="Pursued B.Tech in"
						textH3="Electronic Engineering"
						height={60}
						width={60}
					/>
				</Col>
			</Row>
		</>
	);
};
export default AboutMe;
