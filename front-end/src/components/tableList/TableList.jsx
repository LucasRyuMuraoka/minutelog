import { useEffect, useState } from "react";
import { TableRow } from "../tableRow/TableRow"
import { TableHead } from "./styles";

const TableList = () => {
	
	const [items, setItems] = useState([]);

	useEffect(() => {
		const itemsList = [
			{
				id: 1,
				day: "09/11/2023",
				firstPoint: "11:51:44",
				secondPoint: "13:00:00",
				thirdPoint: "14:00:00",
				fourthPoint: "18:00:44"
			},
			{
				id: 2,
				day: "10/11/2023",
				firstPoint: "11:51:44",
				secondPoint: "13:00:00",
				thirdPoint: "14:00:00",
				fourthPoint: "18:00:44"
			},
			{
				id: 3,
				day: "11/11/2023",
				firstPoint: "11:51:44",
				secondPoint: "13:00:00",
				thirdPoint: "14:00:00",
				fourthPoint: "Pendente"
			},
		];

		setItems(itemsList);
	}, []);

	return (
		<table className="table">
			<thead>
				<tr>
					<TableHead scope="col" className="text-center">Dia</TableHead>
					<TableHead scope="col" className="text-center">1º Ponto</TableHead>
					<TableHead scope="col" className="text-center">2º Ponto</TableHead>
					<TableHead scope="col" className="text-center">3º Ponto</TableHead>
					<TableHead scope="col" className="text-center">4º Ponto</TableHead>
				</tr>
			</thead>
			<tbody>
				{
					items.map(item => <TableRow key={ item.id } item={ item }/>)
				}
			</tbody>
		</table>
	);
}

export { TableList };
