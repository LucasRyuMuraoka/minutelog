import { loginSvg } from "../../assets/icons/icons";
import sucessGif from "../../assets/videos/videos";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Elipse, Form, Image, ImageContainer, Input, InputContainer, Label, Main, Question, Title, Subtitle, TitleContainer } from "./styles";

const Login = () => {
	
	const navigate = useNavigate();
	useDinamicPageTitle("Login");

	const handleSubmit = () => {
		sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0xvZ2dlZCI6dHJ1ZSwibmFtZSI6IkFkbWluIn0.hRMnmKdgkGNpAxdKBOfY0NavTb2cX2THD_nKvTYXxYw");
		navigate("/");
	}

	return (
		<>
		<Container>
			<Header />

			{
				sessionStorage.getItem("token") ?
					<TitleContainer>
						<Title className="w-img">Você já está logado! <img src={ sucessGif } /></Title>
						<Subtitle>
							Caso queira, é possivel fazer <span className="hover-underline-animation-purple">logout</span> e entrar em uma outra conta.
						</Subtitle>
					</TitleContainer>
				:
					<Main>
						<Title>Realize Login</Title>
						<Form onSubmit={ handleSubmit }>
							<InputContainer>
								<Label htmlFor="email">E-mail:</Label>
								<Input type="text" id="email" placeholder="Informe seu e-mail..." required/>
							</InputContainer>
							<InputContainer>
								<Label htmlFor="password">Password:</Label>
								<Input type="password" id="password" placeholder="Informe sua senha..." required/>
							</InputContainer>
							<Button>Logar</Button>
						</Form>
						<Question>
							Não tem login? <Link to="/sign" className="link">
								<span className="anchor hover-underline-animation-purple">Clique aqui.</span>
							</Link>
						</Question>

						<ImageContainer>
							<Image src={ loginSvg } />
							<Elipse />
						</ImageContainer>		
					</Main>
			}
		</Container>

		<Footer className="block-on-bottom"/>
		</>
	);
}

export { Login };
