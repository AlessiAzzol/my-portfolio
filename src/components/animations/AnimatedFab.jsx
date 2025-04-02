import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Fab from "@mui/material/Fab";

const AnimatedFab = ({ sx, onClick, children }) => {
	const [isHovered, setHover] = useState(false);

	const fabProps = useSpring({
		transform: isHovered ? "scale(1.5)" : "scale(1)",
	});

	return (
		<animated.div style={fabProps}>
			<Fab
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				sx={{ ...sx }}
				onClick={onClick}
			>
				{children}
			</Fab>
		</animated.div>
	);
};

export default AnimatedFab;
