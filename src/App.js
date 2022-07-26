import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./Components";
import {
	ECommerce,
	Orders,
	Employees,
	Customers,
	Kanban,
	Editor,
	Calendar,
	ColorPicker,
	Line,
	Area,
	Bar,
	Pie,
	Financial,
	ColorMapping,
	Pyramid,
	Stacked,
} from "./Pages";

import { useStateContext } from "./Context/ContextProvider";

function App() {
	const {
		activeMenu,
		themeSettings,
		setThemeSettings,
		currentColor,
		currentMode,
	} = useStateContext();
	return (
		<div className={currentMode === "Dark" ? "dark" : ""}>
			<div className="App">
				<div className="flex relative dark:bg-main-dark-bg">
					<div className="fixed right-4 bottom-4 z-1000">
						<Tooltip title="Setting" arrow>
							<button
								type="button"
								className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full"
								style={{
									background: currentColor,
								}}
								onClick={() => {
									setThemeSettings(true);
								}}
							>
								<FiSettings />
							</button>
						</Tooltip>
					</div>

					{activeMenu ? (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
							<Sidebar />
						</div>
					) : (
						<div className="w-0 dark:bg-secondary-dark-bg">
							<Sidebar />
						</div>
					)}
					<div
						className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
							activeMenu ? " md:ml-72" : " flex-2"
						}`}
					>
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
							<Navbar />
						</div>
						<div>
							{themeSettings && <ThemeSettings />}
							<Routes>
								{/* Dashboard */}
								<Route
									path="/"
									element={<ECommerce />}
								/>
								<Route
									path="/ECommerce"
									element={<ECommerce />}
								/>

								{/* Pages */}
								<Route
									path="/orders"
									element={<Orders />}
								/>
								<Route
									path="/employees"
									element={<Employees />}
								/>
								<Route
									path="/customers"
									element={<Customers />}
								/>

								{/* Apps */}
								<Route
									path="/kanban"
									element={<Kanban />}
								/>
								<Route
									path="/editor"
									element={<Editor />}
								/>
								<Route
									path="/calendar"
									element={<Calendar />}
								/>
								<Route
									path="/color-picker"
									element={<ColorPicker />}
								/>

								{/* charts */}
								<Route
									path="/line"
									element={<Line />}
								/>
								<Route
									path="/area"
									element={<Area />}
								/>
								<Route
									path="/bar"
									element={<Bar />}
								/>
								<Route
									path="/pie"
									element={<Pie />}
								/>
								<Route
									path="/financial"
									element={<Financial />}
								/>
								<Route
									path="/color-mapping"
									element={<ColorMapping />}
								/>
								<Route
									path="/pyramid"
									element={<Pyramid />}
								/>
								<Route
									path="/stacked"
									element={<Stacked />}
								/>
							</Routes>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
