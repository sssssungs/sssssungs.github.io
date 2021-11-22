import React from 'react';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import ContentLayout from './contentLayout';

export default () => (
	<ContentLayout page="home">
		<>
			<AboutMe />
			<Skills />
		</>
	</ContentLayout>
);
