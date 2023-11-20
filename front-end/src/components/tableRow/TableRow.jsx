import { TableData } from "./styles";

/* eslint-disable react/prop-types */
const TableRow = ({ item }) => {
	return(
		<tr>
			<TableData className="text-center text-muted">{ item.date ? item.date : "Pending..." }</TableData>
			<TableData className="text-center text-muted">{ item.firstPoint ? item.firstPoint : "Pending..." }</TableData>
			<TableData className="text-center text-muted">{ item.secondPoint ? item.secondPoint : "Pending..." }</TableData>
			<TableData className="text-center text-muted">{ item.thirdPoint ? item.thirdPoint : "Pending..." }</TableData>
			<TableData className="text-center text-muted">{ item.fourthPoint ? item.fourthPoint : "Pending..." }</TableData>
		</tr>
	);
}

export { TableRow };
