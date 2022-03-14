import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import style from './skill.module.less';

const SkillsProgress = () => (
	<div className={`${style.skillSectionSpacing}`}>
		<h2 className="titleSeparate">Skills</h2>
		<Row gutter={[20, 20]}>
			<Col xs={24} sm={24} md={12}>
				<ProgressBar percent={90} text="Javascript" mt="0px" />
				<ProgressBar percent={85} text="React" />
				<ProgressBar percent={85} text="Jquery" />
				<ProgressBar percent={70} text="NodeJS" />
				<ProgressBar percent={60} text="K8S" />
				<ProgressBar percent={50} text="Graphql" />
				<ProgressBar percent={40} text="DC/OS" />
			</Col>
			<Col xs={24} sm={24} md={12}>
				<ProgressBar percent={85} text="Typescript" mt="0px" />
				<ProgressBar percent={85} text="Redux" />
				<ProgressBar percent={85} text="Oracle" />
				<ProgressBar percent={70} text="Java" />
				<ProgressBar percent={50} text="ELK" />
				<ProgressBar percent={40} text="Jenkins" />
				<ProgressBar percent={40} text="Docker" />
			</Col>
		</Row>
	</div>
);

export default SkillsProgress;
