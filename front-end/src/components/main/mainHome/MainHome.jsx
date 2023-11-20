/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Header } from "../../header";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../../toast/Toast";
import { useTimeout } from "../../../hooks/UseTimeout";
import { arrowSvg, personSvg } from "../../../assets/icons/icons";
import { Container, AnchorAndTitleContainer, Content, Elipse, Image, Title, TitleContainer, ImageAndElipse, BtnNewPoint, TitleMinimal, } from "./styles";
import { PointsService } from "../../../services/points.service";
import { toast } from "react-toastify";

const MainHome = () => {

	const navigate = useNavigate();
	const pointsService = new PointsService();
	
	const [ lastPointInfos, setLastPointInfos ] = useState("");
	const [ userId, setUserId ] = useState("");

	const [ isDisabled, setIsDisabled ] = useState(false);

	useEffect(() => {
		setUserId(sessionStorage.getItem("token"));
	}, []);

	useEffect(() => {
		if(userId) {
			pointsService.findLastPointById(userId).then(lastPoint => {
				let lastPointInfosSrtring = lastPoint.date + " às ";

				if(lastPoint.fourthPoint !== null) {
					lastPointInfosSrtring += lastPoint.fourthPoint;
				} else if(lastPoint.thirdPoint !== null) {
					lastPointInfosSrtring += lastPoint.thirdPoint;
				} else if(lastPoint.secondPoint !== null) {
					lastPointInfosSrtring += lastPoint.secondPoint;
				} else {
					lastPointInfosSrtring += lastPoint.firstPoint;
				}

				setLastPointInfos(lastPointInfosSrtring);
			}).catch(console.log);
		}
	}, [userId])

	const handleNewPoint = () => {

		const alert = toast.loading("Carregando...");
		setIsDisabled(true);

		if(userId) {
			pointsService.newPoint(userId).then(async () => {
				await useTimeout(2000);

				toast.update(alert, {
					render: `Ponto batido! Aguarde...`,
					type: "success",
					isLoading: false,
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				await useTimeout(2000);
				navigate("/history")
			}).catch((error) => {
				console.log(error);
				setIsDisabled(false);
			});
		}
	}

	return (
		<Container>
			<Header />
			{
				(!sessionStorage.getItem("token")) ?
					<Content>
						<AnchorAndTitleContainer>
							<TitleContainer>
								<Title>Realize login para</Title>
								<Title>ter acesso a plataforma</Title>
							</TitleContainer>
							<Link to="/login" className="link">
								<span className="anchor">
									Clique aqui
									<img src={ arrowSvg } className="arrow" alt="Pequena seta roxa apontando para a direita"/>
								</span>
							</Link>
						</AnchorAndTitleContainer>
						<ImageAndElipse>
							<Image src={ personSvg } alt="Homem branco magro de blusa roxa andando da esquerda para direita" />
							<Elipse />
						</ImageAndElipse>
					</Content>
				:
					<Content className="w-login">
						<TitleContainer className="w-login">
							{
								!lastPointInfos ?
									<TitleMinimal>Você ainda não bateu ponto!</TitleMinimal>	
								:
									<>
										<TitleMinimal>O seu último ponto foi em:</TitleMinimal>
										<TitleMinimal className="italic">{ lastPointInfos }</TitleMinimal>
									</>
							}
						</TitleContainer>
						<BtnNewPoint onClick={ handleNewPoint } disabled={ isDisabled }>Bater Ponto</BtnNewPoint>
						<Link to="/history" className="link">
								<span className="anchor hover-underline-animation-purple">
									Checar histórico
								</span>
						</Link>
					</Content>
			}
			<Toast /> 
		</Container>
	);
}

export { MainHome };
