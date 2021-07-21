/* eslint-disable func-names */
/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
/* App imports */
import Config from '../../../config';
import { Disqus } from 'gatsby-plugin-disqus';

class Comments extends React.Component {
	// componentDidMount() {
	// 	const { pageCanonicalUrl, pageId } = this.props;
	//
	// 	if (window.DISQUS) {
	// 		window.DISQUS.reset({
	// 			reload: true,
	// 			config() {
	// 				this.page.url = pageCanonicalUrl;
	// 				this.page.identifier = pageId;
	// 			},
	// 		});
	// 	} else {
	// 		window.disqus_config = () => {
	// 			this.page.url = pageCanonicalUrl;
	// 			this.page.identifier = pageId;
	// 		};
	// 		(function() {
	// 			// eslint-disable-next-line no-undef
	// 			const d = document;
	// 			const s = d.createElement('script');
	// 			s.src = Config.disqusScript;
	// 			s.setAttribute('data-timestamp', +new Date());
	// 			(d.head || d.body).appendChild(s);
	// 		})();
	// 	}
	// }

	render() {
		const { pageCanonicalUrl, pageId } = this.props;
		const disqusConfig = {
			identifier: pageCanonicalUrl,
			title: pageId,
		};
		return (
			<div>
				{/*<div id="disqus_thread" />*/}
				<Disqus config={disqusConfig} />
			</div>
		);
	}
}

Comments.propTypes = {
	pageCanonicalUrl: PropTypes.string.isRequired,
	pageId: PropTypes.string.isRequired,
};

export default Comments;
