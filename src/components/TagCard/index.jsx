import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './tags.module.less';

const TagCard = props => {
	const { img, name, description, color } = props;
	const tagPage = Config.pages.tag;
	return (
		<Link className={style.tagCard} to={Utils.resolvePageUrl(tagPage, name)}>
			<div className={style.tagCard}>
				<div className={style.tagImg}>
					<img src={img} width="100%" height="100%" alt="images" />
				</div>
				<div className={style.pd20px}>
					<div className="textCenter">
						<h4 style={{ color: `${color}`, wordBreak: 'break-all' }}>#{name}</h4>
					</div>
					<p>{description}</p>
				</div>
			</div>
		</Link>
	);
};

export default TagCard;
