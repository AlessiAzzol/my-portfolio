import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

function HorizontalStepper({ children }) {
	return (
		<Stepper alternativeLabel >
			{children.map((child, index) => (
				<Step key={index}>
					<StepLabel slots={{ stepIcon: () => child.icon }}>{child.title}</StepLabel>
				</Step>
			))}
		</Stepper  >
	);
}

export default HorizontalStepper;