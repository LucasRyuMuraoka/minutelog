import { useEffect, useState } from "react";
import { PointsService } from "../../services/points.service";
import { TableRow } from "../tableRow/TableRow"
import { TableHead, Table, Container } from "./styles";

const TableList = () => {

	const [ items, setItems ] = useState([]);
	const [ userId, setUserId ] = useState("");
	const pointsService = new PointsService();

	useEffect(() => {
		setUserId(sessionStorage.getItem("token"));
	}, []);

	useEffect(() => {
		if(userId) {
			pointsService.findByUserId(userId).then(data => {
				setItems(data);
			}).catch(error => {
				console.log(error);
			});
		}
	}, [userId]);

	return (
		<Container>
			<Table className="table">
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
						items.length === 0 ?
							<TableRow item={{}}/>
						: 
							items.map(item => <TableRow key={ item.date } item={ item }/>)
					}
				</tbody>
			</Table>
		</Container>
	);
}

export { TableList };
