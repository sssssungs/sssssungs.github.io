import React from 'react';
import { Layout } from 'antd';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

import 'prismjs/themes/prism-solarizedlight.css';
import './highlight-syntax.less';
import * as style from './post.module.less';
import ScrollHOC from '../../pages/scrollHOC';

const Post = ({ data }) => {
	const { html, frontmatter } = data.markdownRemark;
	const {
		title,
		cover: {
			childImageSharp: { fluid },
		},
		excerpt,
		path,
	} = frontmatter;

	return (
		<ScrollHOC>
			<Layout className="outerPadding">
				<Layout className="container">
					<SEO
						title={title}
						description={excerpt}
						path={path}
						keywords={[
							'FullStack developer',
							'Javascript',
							'ReactJS',
							'NodeJS',
							'Gatsby',
							'technology',
						]}
					/>
					<Header page="blog" />
					<SidebarWrapper>
						<div className="marginTopTitle">
							<div className={style.title}>
								<h1>{title}</h1>
							</div>
							<div className={style.bannerImgContainer}>
								<Img className={style.bannerImg} fluid={fluid} title={excerpt} alt={title} />
							</div>
							<article className={style.blogArticle} dangerouslySetInnerHTML={{ __html: html }} />
						</div>
					</SidebarWrapper>
				</Layout>
			</Layout>
		</ScrollHOC>
	);
};

export const pageQuery = graphql`
	query($postPath: String!) {
		markdownRemark(frontmatter: { path: { eq: $postPath } }) {
			html
			timeToRead
			frontmatter {
				title
				date(formatString: "DD MMM YYYY")
				tags
				path
				excerpt
				show
				cover {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		}
		allMarkdownRemark(
			filter: {
				frontmatter: { path: { ne: $postPath } }
				fileAbsolutePath: { regex: "/index.md$/" }
			}
		) {
			edges {
				node {
					frontmatter {
						path
						title
						tags
						excerpt
						show
						cover {
							childImageSharp {
								fluid(maxWidth: 600) {
									...GatsbyImageSharpFluid_tracedSVG
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default Post;
