import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import avatar from "../Data/avatar.jpg";
import { useStateContext } from "../Context/ContextProvider";
import { Cart, Chat, Notification, UserProfile } from ".";

const Navbar = () => {
	// --> Getting items from contenct
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext();

	// --> Getting device width on screen load

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

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
				></span>
				{icon}
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
			<div className="flex">
				<NabButton
					title="Cart"
					customFunc={() => handleClick("cart")}
					color="blue"
					icon={<FiShoppingCart />}
				/>
				<NabButton
					title="Chat"
					dotColor="#03C9D7"
					customFunc={() => {
						handleClick("chat");
					}}
					color="blue"
					icon={<BsChatLeft />}
				/>

				<NabButton
					title="Notification"
					dotColor="#03C9D7"
					customFunc={() => {
						handleClick("notification");
					}}
					color="blue"
					icon={<RiNotification3Line />}
				/>

				<Tooltip title="Profile" arrow>
					<div
						className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
						onClick={() => {}}
					>
						<img
							src={avatar}
							alt="Profile"
							className="rounded-full w-8 h-8"
						/>
						<p>
							<span className="text-gray-400 text-14">Hi,</span>{" "}
							<span className="text-gray-400 font-bold ml-1 text-14">
								Michael
							</span>
						</p>
						<MdKeyboardArrowDown className="text-gray-400 text-14" />
					</div>
				</Tooltip>
				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;
