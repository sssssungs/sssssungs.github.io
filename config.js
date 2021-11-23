module.exports = {
	siteUrl: 'https://sssssungs.github.io',
	siteTitle: 'Sungsik R. Won',
	siteDescription: 'Frontend Engineer',
	author: 'Rolwin Reevan',
	postsForArchivePage: 3,
	defaultLanguage: 'en',
	pages: {
		home: '/',
		blog: 'blog',
		resume: 'resume',
		tag: 'tags',
	},
	social: {
		github: 'https://github.com/sssssungs',
		instagram: 'https://www.instagram.com/sssssungs/',
		rss: '/rss.xml',
	},
	contactFormUrl:
		process.env.CONTACT_FORM_ENDPOINT ||
		'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
	googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-1LBVTYLESG',
	tags: {
		javascript: {
			name: 'javascript',
			description:
				'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
			color: '#f0da50',
		},
		nodejs: {
			name: 'nodejs',
			description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
			color: '#90c53f',
		},
		typescript: {
			name: 'typescript',
			description:
				'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
			color: '#257acc',
		},
		react: {
			name: 'react',
			description: 'React is an open source JavaScript library used for designing user interfaces.',
			color: '#61dbfa',
		},
		html: {
			name: 'html',
			description:
				'A markup language that powers the web. All websites use HTML for structuring the content.',
			color: '#dd3431',
		},
		css: {
			name: 'css',
			description:
				'CSS is used to style the HTML element and to give a very fancy look for the web application.',
			color: '#43ace0',
		},
		functionalProgramming: {
			name: 'functionalProgramming',
			description:
				'A programming paradigm where programs are constructed by applying and composing functions.',
			color: '#db34e7',
		},
		codingFont: {
			name: 'codingFont',
			description: 'A font used by programmers when they are working which is "CODING".',
			color: '#179047',
		},
		designSystem: {
			name: 'designSystem',
			description:
				'The single source of truth which groups all the elements allowing the teams to design, realize and develop a product.',
			color: '#f86747',
		},
		docker: {
			name: 'docker',
			description: 'Docker is an open platform for developing, shipping, and running applications.',
			color: '#089CC7',
		},
		kubernetes: {
			name: 'kubernetes',
			description:
				'An open-source system that automates the deployment, scaling, and management of applications run in containers.',
			color: '#261a81',
		},
		sql: {
			name: 'sql',
			description:
				'Structured Query Language, commonly known as SQL, is a standard programming language for relational databases.',
			color: '#e13535',
		},
		database: {
			name: 'database',
			description:
				'A Database is a collection of information that is organized so that it can be easily accessed, managed and updated.',
			color: '#13be30',
		},
	},
};
