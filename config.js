module.exports = {
	siteUrl: 'https://sssssungs.github.io',
	siteTitle: `Sungsik Won :-)`,
	siteDescription: 'Frontend Engineer',
	author: '',
	postsForArchivePage: 3,
	defaultLanguage: 'en',
	pages: {
		home: '/',
		career: 'career',
		blog: 'blog',
		tag: 'tags',
	},
	social: {
		github: 'https://github.com/sssssungs',
		instagram: 'https://www.instagram.com/sssssungs/',
		linkedin: 'https://www.linkedin.com/in/sungsik-won-3a5263176/',
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
				'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages',
			color: '#f0da50',
		},
		nodejs: {
			name: 'nodejs',
			description: 'Node.js is a tool for executing JavaScript in a variety of environments',
			color: '#90c53f',
		},
		typescript: {
			name: 'typescript',
			description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript',
			color: '#257acc',
		},
		react: {
			name: 'react',
			description: 'React is an open source JavaScript library used for designing user interfaces',
			color: '#61dbfa',
		},
		html: {
			name: 'html',
			description:
				'A markup language that powers the web. All websites use HTML for structuring the content',
			color: '#dd3431',
		},
		css: {
			name: 'css',
			description:
				'CSS is used to style the HTML element and to give a very fancy look for the web application',
			color: '#43ace0',
		},
		functionalProgramming: {
			name: 'functionalProgramming',
			description:
				'A programming paradigm where programs are constructed by applying and composing functions',
			color: '#db34e7',
		},
		codingFont: {
			name: 'codingFont',
			description: 'A font used by programmers when they are working which is "CODING"',
			color: '#179047',
		},
		docker: {
			name: 'docker',
			description: 'Docker is an open platform for developing, shipping, and running applications',
			color: '#089CC7',
		},
		kubernetes: {
			name: 'kubernetes',
			description:
				'An open-source system that automates the deployment, scaling, and management of applications run in containers',
			color: '#261a81',
		},
		sql: {
			name: 'sql',
			description:
				'Structured Query Language, commonly known as SQL, is a standard programming language for relational databases',
			color: '#e55757',
		},
		database: {
			name: 'database',
			description:
				'A Database is a collection of information that is organized so that it can be easily accessed, managed and updated',
			color: '#fc0202',
		},
		nextjs: {
			name: 'nextjs',
			description:
				'An open-source development framework built on top of Node.js enabling React based web applications functionalities',
			color: '#2B2B2B',
		},
		webpack: {
			name: 'webpack',
			description:
				'Webpack is an open-source JavaScript module bundler. It can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included',
			color: '#6C96DD',
		},
		testing: {
			name: 'testing',
			description:
				'JavaScript testing is a chain of processes to ensure correctness of any JavaScript codebase',
			color: '#c2a013',
		},
		network: {
			name: 'network',
			description:
				'A network consists of two or more computers that are linked in order to share resources (such as printers and CDs), exchange files, or allow electronic communications',
			color: '#803c17',
		},
		designSystem: {
			name: 'designSystem',
			description:
				'The single source of truth which groups all the elements that will allow the teams to design, realize and develop a product',
			color: '#25b66e',
		},
		softwareDevelopment: {
			name: 'softwareDevelopment',
			description:
				'Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software',
			color: '#b62561',
		},
		algorithm: {
			name: 'algorithm',
			description:
				'A finite sequence of rigorous instructions, typically used to solve a class of specific problems or to perform a computation',
			color: '#c46a39',
		},
		redux: {
			name: 'redux',
			description:
				'Redux is an open-source JavaScript library from Facebook for managing and centralizing application state',
			color: '#7F42C3',
		},
		seo: {
			name: 'seo',
			description: `"Search Engine Optimization", which means the process of improving your site to increase its visibility when people search for products or services related to your business in search engines.`,
			color: '#d7187e',
		},
	},
};
