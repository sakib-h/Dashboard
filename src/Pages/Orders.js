import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../Data/dummy";
import { Header } from "../Components";

const Orders = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Orders" />

			<GridComponent
				id="gridcomp"
				dataSource={ordersData}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport
				contextMenuItems={contextMenuItems}
			>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						Edit,
						ExcelExport,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Orders;
