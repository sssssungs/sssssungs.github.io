import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import * as style from './skill.module.less';

const SkillsProgress = () => (
	<div className={`${style.skillSectionSpacing}`}>
		<h2 className="titleSeparate">Skills</h2>
		<Row gutter={[20, 20]}>
			<Col xs={24} sm={24} md={12}>
				<ProgressBar percent={90} text="Typescript" mt="0px" />
				<ProgressBar percent={85} text="React" />
				<ProgressBar percent={85} text="Jquery" />
				<ProgressBar percent={80} text="Git" />
				<ProgressBar percent={60} text="K8S" />
				<ProgressBar percent={50} text="Azure" />
				<ProgressBar percent={40} text="AWS" />
			</Col>
			<Col xs={24} sm={24} md={12}>
				<ProgressBar percent={90} text="Javascript" mt="0px" />
				<ProgressBar percent={85} text="Redux" />
				<ProgressBar percent={80} text="Oracle" />
				<ProgressBar percent={70} text="Java" />
				<ProgressBar percent={60} text="NodeJS" />
				<ProgressBar percent={45} text="Graphql" />
				<ProgressBar percent={40} text="Docker" />
			</Col>
		</Row>
	</div>
);

export default SkillsProgress;
