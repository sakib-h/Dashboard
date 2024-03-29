import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Search,
	Inject,
	Toolbar,
	Sort,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../Data/dummy";
import { Header } from "../Components";

const Employees = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Employees" />

			<GridComponent
				width="auto"
				dataSource={employeesData}
				allowPaging
				allowSorting
				toolbar={["Search"]}
			>
				<ColumnsDirective>
					{employeesGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Search, Toolbar, Sort]} />
			</GridComponent>
		</div>
	);
};

export default Employees;
