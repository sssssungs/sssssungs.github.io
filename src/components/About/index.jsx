import React from 'react';
import style from './about.module.less';

const AboutTile = async props => {
	const { img, textH4, textH3, alt, height, width } = props;
	return (
		<div className={style.aboutTile}>
			<div className={style.aboutBlock}>
				<img src={`../${img}`} height={height || 64} width={width || 64} alt={alt || ''} />
			</div>
			<div className={`textCenter ${style.mrTp26PX}`}>
				<h5>{textH4 || ''}</h5>
				<h4>{textH3 || ''}</h4>
			</div>
		</div>
	);
};

export default AboutTile;
