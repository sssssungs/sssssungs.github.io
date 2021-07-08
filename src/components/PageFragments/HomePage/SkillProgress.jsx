import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import style from './skill.module.less';

const SkillsProgress = () => (
	<div className={`${style.skillSectionSpacing}`}>
		<h2 className="titleSeparate">My Skills</h2>
		<Row gutter={[20, 20]}>
			<Col xs={24} sm={24} md={12}>
				<ProgressBar percent={90} text="Javascript" mt="0px" />
				<ProgressBar percent={85} text="Typescript" />
				<ProgressBar percent={85} text="React" />
				<ProgressBar percent={85} text="Redux" />
				<ProgressBar percent={85} text="Jquery" />
				<ProgressBar percent={70} text="NodeJS" />
			</Col>
			<Col xs={24} sm={24} md={12}>
				<ProgressBar percent={85} text="Oracle" mt="0px" />
				<ProgressBar percent={70} text="Java" />
				<ProgressBar percent={50} text="K8S" />
				<ProgressBar percent={50} text="ELK" />
				<ProgressBar percent={50} text="Jenkins" />
				<ProgressBar percent={50} text="DC/OS" />
			</Col>
		</Row>
	</div>
);

export default SkillsProgress;
