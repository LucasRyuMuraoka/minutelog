import styled from "styled-components";

const TableHead = styled.th`
	font-size: 1.15rem;
	font-weight: 800;
	white-space: nowrap;
	cursor: default;
`;

const Container = styled.section`
	position: relative;
	overflow: auto;

	height: 130px;

	@media only screen and (max-width: 950px) {
		width: 90%;
	}
`;

const Table = styled.table`
	position: absolute;
	width: 100%;

	@media only screen and (max-width: 950px) {
		width: 500px;
	}
`;

export {
	TableHead,
	Container,
	Table,
};
