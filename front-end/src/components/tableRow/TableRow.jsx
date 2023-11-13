import { TableData } from "./styles";

/* eslint-disable react/prop-types */
const TableRow = ({ item }) => {
	return(
		<tr>
			<TableData className="text-center text-muted">{ item.day }</TableData>
			<TableData className="text-center text-muted">{ item.firstPoint }</TableData>
			<TableData className="text-center text-muted">{ item.secondPoint }</TableData>
			<TableData className="text-center text-muted">{ item.thirdPoint }</TableData>
			<TableData className="text-center text-muted">{ item.fourthPoint }</TableData>
		</tr>
	);
}

export { TableRow };
