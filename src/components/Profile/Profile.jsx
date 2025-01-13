import React, { useState } from 'react';

import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Avatar } from '@mui/material';
import CustomTimeline from '../Timeline/CustomTimeline.jsx';
import resumeData from '../../utils/resumeData.jsx';

function Profile(props) {

	return (
		<Card>
			<CardHeader title={resumeData.profile.title} subheader={resumeData.profile.subheader} />
			<CardMedia image={props.img} sx={{ clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)", height: "200px", marginTop: "-25px" }} />
			<Avatar sx={{ marginTop: "-25px", marginLeft: "10px", fontFamily: 'Bonbon', fontWeight: 'bold', fontSize: 'xx-large', }}>A</Avatar>
			<CardContent sx={{ padding: "0" }}>
				<CustomTimeline children={resumeData.profile.menu} />
			</CardContent>
			<CardActions>
				<Button size="small">{resumeData.profile.textBtn} {resumeData.profile.iconBtn}</Button>
			</CardActions>
		</Card>
	);
};

export default Profile