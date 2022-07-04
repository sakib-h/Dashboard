import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdkeyboardArrowDown } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import avatar from "../Data/avatar.jpg";
import { useStateContext } from "../Context/ContextProvider";
import { Cart, Chat, Notification, UserProfile } from ".";
const Navbar = () => {
	const { activeMenu, setActiveMenu } = useStateContext();
	const NabButton = ({ title, customFunc, icon, color, dotColor }) => (
		<Tooltip title={title} arrow>
			<button
				type="button"
				onClick={customFunc}
				style={{ color }}
				className="relative text-xl rounded-full p-3 hover:bg-light-gray"
			>
				<span
					style={{ background: dotColor }}
					className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
				>
					{icon}
				</span>
			</button>
		</Tooltip>
	);
	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
			<NabButton
				title="Menu"
				customFunc={() =>
					setActiveMenu((prevActiveMenu) => !prevActiveMenu)
				}
				color="blue"
				icon={<AiOutlineMenu />}
			/>
		</div>
	);
};

export default Navbar;
