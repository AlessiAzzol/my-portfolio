
import { Typography, Card, } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useLanguage } from '../context/LanguageContext.jsx';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from '@mui/material/styles/styled';
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';


const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme }) => ({
	marginLeft: 'auto',

	variants: [
		{
			props: ({ expand }) => !expand,
			style: {
				transform: 'rotate(0deg)',
			},
		},
		{
			props: ({ expand }) => !!expand,
			style: {
				transform: 'rotate(180deg)',
			},
		},
	],
}));

function Portfolio() {
	const { data } = useLanguage();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (

		<Card sx={{
			margin: 2,
			padding: 3,
			overflow: "auto",
			maxHeight: "75vh",
		}}>
			<Typography variant="h6">{data.pages.portfolio.title}</Typography>
			<Typography >{data.pages.portfolio.description}</Typography>
			{data.pages.portfolio.projects.map((project, index) => (
				<Card key={`projectBox` + index} sx={{
					width: 345,
					margin: 2,
				}}>
					<CardHeader key={`header` + index}
						title={project.title}
						subheader={project.subheader}
					/>
					<CardMedia key={`media` + index}
						component="img"
						height="194"
						image={project.img}
					/>
					<CardContent key={`shortBody` + index}>
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>
							{project.shortDescription}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton key={`gitButton` + index} aria-label="github" href={project.reference}
							target="_blank">
							<GitHubIcon />
						</IconButton>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
						>
							<ExpandMoreIcon />
						</ExpandMore>
					</CardActions>


					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent key={`longBody` + index}>
							<Typography variant="body2" sx={{ color: 'text.secondary' }}>
								{project.longDescription}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			))
			}

		</Card>



	);
}

export default Portfolio
