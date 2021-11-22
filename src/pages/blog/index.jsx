import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Row, Col } from 'antd';
import PostCard from '../../components/PostCard';
import SEO from '../../components/Seo';
import ContentLayout from '../contentLayout';

const Blog = ({ data }) => (
	<ContentLayout page="blog">
		<SEO
			title="Blog"
			description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
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
		<div className="marginTopTitle">
			<h1 className="titleSeparate">Blog</h1>
		</div>
		<Row gutter={[20, 20]}>
			{data.allMarkdownRemark &&
				data.allMarkdownRemark.edges.map((val, key) => (
					// val.node.frontmatter.show &&
					<Col key={key} xs={24} sm={24} md={12} lg={8}>
						<PostCard data={val} />
					</Col>
				))}
		</Row>
	</ContentLayout>
);

Blog.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
		}).isRequired,
	}).isRequired,
};

export const query = graphql`
	{
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { fileAbsolutePath: { regex: "/index.md$/" } }
		) {
			edges {
				node {
					frontmatter {
						date
						path
						title
						tags
						show
						excerpt
						cover {
							childImageSharp {
								fluid(maxWidth: 288) {
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

export default Blog;
