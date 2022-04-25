import React from 'react';
import { Progress } from 'antd';

const ProgressBar = props => {
	const { text, percent, mt = '20px' } = props;
	return (
		<div style={{ marginTop: mt }}>
			<div>
				<Progress percent={percent || 0} strokeWidth={22} status="active" />
			</div>
			<div
				style={{
					position: 'absolute',
					marginTop: '-21px',
					marginLeft: '15px',
					color: 'white',
					fontSize: '12px',
				}}
			>
				<span style={{ fontSize: '12px' }}>{text || ''}</span>
			</div>
		</div>
	);
};

export default ProgressBar;
