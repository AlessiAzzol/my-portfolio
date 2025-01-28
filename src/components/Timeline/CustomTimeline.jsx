import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function CustomTimeline({ children }) {
	return (
		<Timeline sx={{
			[`& .${timelineItemClasses.root}:before`]: {
				flex: 0,
				padding: 0,
			},
		}}>
			{children.map((child, index) => (
				<TimelineItem key={index} >
					<TimelineSeparator>
						<TimelineDot sx={{ margin: "0", }}>{child.icon}</TimelineDot>
						{index !== children.length - 1 && (
							<TimelineConnector />
						)}
					</TimelineSeparator>
					<TimelineContent sx={{ paddingTop: "0", }} color="textSecondary">
						<Typography><strong>{child.title}</strong></Typography>
						<Typography variant="caption"><em>{child.date}</em></Typography>
						<Typography>{child.content}</Typography>
					</TimelineContent>
				</TimelineItem>
			))
			}
		</Timeline >
	);
}

export default CustomTimeline;