const config = require('./config');

module.exports = [
	'gatsby-plugin-react-helmet',
	'gatsby-transformer-sharp',
	'gatsby-plugin-sharp',
	'gatsby-plugin-less',
	'gatsby-plugin-offline',
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'images',
			path: `${__dirname}/src/images`,
		},
	},
	{
		resolve: 'gatsby-plugin-manifest',
		options: {
			name: 'Sungsik Won',
			short_name: 'SS.W',
			start_url: '/',
			background_color: '#304CFD',
			theme_color: '#304CFD',
			display: 'standalone',
			icon: 'src/images/favicon-512.png', // This path is relative to the root of the site.
			legacy: true, // this will add apple-touch-icon links to <head>. Required for
			// versions prior to iOS 11.3.
		},
	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'markdown-pages',
			path: `${__dirname}/content`,
		},
	},
	{
		resolve: 'gatsby-transformer-remark',
		options: {
			plugins: [
				{
					resolve: 'gatsby-remark-images',
					options: {
						maxWidth: 1000,
						quality: 80,
						showCaptions: true,
						linkImagesToOriginal: false,
					},
				},
				{
					resolve: 'gatsby-remark-external-links',
					options: {
						rel: 'nofollow',
					},
				},
				'gatsby-remark-prismjs',
				'gatsby-remark-gifs',
			],
		},
	},
	{
		resolve: 'gatsby-plugin-i18n',
		options: {
			langKeyDefault: config.defaultLanguage,
			useLangKeyLayout: false,
		},
	},
	'gatsby-plugin-sitemap',
	'gatsby-plugin-robots-txt',
	{
		resolve: 'gatsby-plugin-antd',
		options: {
			javascriptEnabled: true,
		},
	},
	{
		resolve: 'gatsby-plugin-eslint-v2',
		options: {
			test: /\.js$|\.jsx$/,
			exclude: /(node_modules|.cache|public)/,
			stages: ['develop'],
			options: {
				emitWarning: true,
				failOnError: false,
			},
		},
	},
	{
		resolve: `gatsby-plugin-gtag`,
		options: {
			trackingId: config.googleAnalyticTrackingId, // 측정 ID
			head: false, // head에 tracking script를 넣고 싶다면 true로 변경
			anonymize: true,
		},
	},
	{
		resolve: 'gatsby-plugin-nprogress',
		options: {
			// Setting a color is optional.
			color: 'black',
			// Disable the loading spinner.
			showSpinner: true,
		},
	},
	{
		resolve: `gatsby-plugin-disqus`,
		options: {
			shortname: `sssssungs`,
		},
	},
];
