/* import List from '../List/List.jsx'; */
import React, { useState } from 'react';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';

import { Fab, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Tooltip } from '@mui/material';


function Sidenav() {
	const menu = [
		{ title: "Home", href: "#", tooltip: "Home", icon: <CottageRoundedIcon /> },
		{ title: "About", href: "#", tooltip: "About", icon: <InfoRoundedIcon /> },
		{ title: "Services", href: "#", tooltip: "Services", icon: <EuroRoundedIcon /> },
		{ title: "Contact", href: "#", tooltip: "Contact", icon: <DraftsRoundedIcon /> }
	];


	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		console.log(open)
		setOpen((open) => (open === true ? false : true));
	};

	return (
		<Drawer variant="permanent" open={open}>
			<Fab color="secondary" onClick={handleDrawerOpen}>A</Fab>
			<List>
				{menu.map((item, index) => (
					<Tooltip key={index} title={item.title} arrow placement="right">
						<ListItem >
							<ListItemButton	>
								<ListItemIcon>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.title} />
							</ListItemButton>
						</ListItem>
					</Tooltip>
				))}
			</List>
		</Drawer>
	);
};

export default Sidenav