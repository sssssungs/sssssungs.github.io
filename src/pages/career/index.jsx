import React from 'react';
import SEO from '../../components/Seo';
import ContentLayout from '../contentLayout';
import AboutMe from '../../components/PageFragments/HomePage/AboutMe';
import Skills from '../../components/PageFragments/HomePage/SkillProgress';

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
			<AboutMe />
			<Skills />
		</>
	</ContentLayout>
);
export default Career;
