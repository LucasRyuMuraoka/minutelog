import { Header } from "../../header";
import { Link } from "react-router-dom";
import { arrowSvg, personSvg } from "../../../assets/icons/icons";
import { Container, AnchorAndTitleContainer, Content, Elipse, Image, Title, TitleContainer, ImageAndElipse, BtnNewPoint, TitleMinimal, } from "./styles";

const MainHome = () => {
	return(
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
									<img src={ arrowSvg } className="arrow"/>
								</span>
							</Link>
						</AnchorAndTitleContainer>
						<ImageAndElipse>
							<Image src={ personSvg } />
							<Elipse />
						</ImageAndElipse>
					</Content>
				:
					<Content className="w-login">
						<TitleContainer className="w-login">
							<TitleMinimal>O seu último ponto foi em:</TitleMinimal>
							<TitleMinimal className="italic">01/11/2023 às 11:51</TitleMinimal>
						</TitleContainer>
						<BtnNewPoint>Bater Ponto</BtnNewPoint>
						<Link to="/history" className="link">
								<span className="anchor hover-underline-animation-purple">
									Checar histórico
								</span>
						</Link>
					</Content>
			}
		</Container>
	);
}

export { MainHome };
