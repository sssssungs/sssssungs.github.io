import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import style from './postCard.module.less';
import Utils from '../../utils/pageUtils';

const PostCard = props => {
	const {
		data: {
			node: { frontmatter },
		},
	} = props;

	return (
		<div className={style.postCard}>
			<Link to={Utils.resolvePageUrl(frontmatter.path)}>
				<div className={style.postCardImg}>
					<img
						src={frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''}
						width="100%"
						height="100%"
						alt="images"
					/>
				</div>
			</Link>
			<div className={style.mrTp20}>
				<p>
					<span className={style.dateHolder}>
						{frontmatter
							? moment(new Date(frontmatter.date), 'YYYYMMDD').format('MMM Do YYYY')
							: ''}
					</span>
				</p>
				<Link to={Utils.resolvePageUrl(frontmatter.path)}>
					<h3>{frontmatter ? frontmatter.title : ''}</h3>
				</Link>
				<Link to={Utils.resolvePageUrl(frontmatter.path)}>
					<p>{frontmatter ? frontmatter.excerpt : ''}</p>
				</Link>
				<div className={style.tags}>
					{frontmatter.tags.map((tag, index) => (
						<Link key={index} to={`/tags/${tag}`}>{`#${tag}`}</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default PostCard;
