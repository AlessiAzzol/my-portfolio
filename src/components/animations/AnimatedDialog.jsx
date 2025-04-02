import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Dialog, DialogActions, Button } from "@mui/material";


function AnimatedDialog({ sx, onClick, open, children }) {
	const [isOpen, setOpen] = useState(open);

	useEffect(() => {
		setOpen(open);
	}, [open]);

	const handleClose = () => {
		setOpen(false);
		if (onClick) onClick();
	};

	return (

		<Dialog
			sx={sx}
			open={isOpen}
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			{children}
			<DialogActions>
				<Button onClick={onClick}>Back</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AnimatedDialog;
