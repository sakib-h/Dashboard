import React from "react";
import { useStateContext } from "../Context/ContextProvider";
const Button = ({
	icon,
	bgColor,
	color,
	bgHoverColor,
	size,
	text,
	borderRadius,
	width,
}) => {
	const { setIsClicked, initialState } = useStateContext();
	return (
		<div>
			<button
				type="button"
				style={{
					backgroundColor: bgColor,
					color,
					borderRadius,
				}}
				className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
				onClick={() => setIsClicked(initialState)}
			>
				{icon} {text}
			</button>
		</div>
	);
};

export default Button;
