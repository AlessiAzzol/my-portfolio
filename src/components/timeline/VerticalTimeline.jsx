import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function VerticalTimeline({ children }) {
	return (
		<Timeline sx={{
			margin: 0,
			paddingBottom: 0,
			[`& .${timelineItemClasses.root}:before`]: {
				flex: 0,
				padding: 0,

			},
		}}>
			{children.map((child, index) => (
				<TimelineItem key={index} >
					<TimelineSeparator>
						<TimelineDot sx={{ margin: 0, }}>{child.icon}</TimelineDot>
						{index !== children.length - 1 && (
							<TimelineConnector />
						)}
					</TimelineSeparator>
					<TimelineContent sx={{ paddingTop: 0, }} >
						<Typography ><>{child.title}</></Typography>
						<Typography variant="caption" color='textSecondary'><em>{child.date}</em></Typography>
						<Typography color='textSecondary'>{child.content}</Typography>
					</TimelineContent>
				</TimelineItem>
			))
			}
		</Timeline >
	);
}

export default VerticalTimeline;