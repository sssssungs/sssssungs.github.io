import React from 'react';
import { Disqus } from 'gatsby-plugin-disqus';

const Comment = ({ pageCanonicalUrl, pageId }) => {
	const disqusConfig = {
		identifier: pageCanonicalUrl,
		title: pageId,
	};
	return (
		<div>
			<Disqus config={disqusConfig} />
		</div>
	);
};

export default Comment;
