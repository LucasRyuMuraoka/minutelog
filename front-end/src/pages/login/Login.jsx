/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import sucessGif from "../../assets/videos/videos";
import { useTimeout } from "../../hooks/UseTimeout";
import { loginSvg } from "../../assets/icons/icons";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../../components/toast/Toast";
import { AuthService } from "../../services/auth.service";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { Container, Button, Elipse, Form, Image, ImageContainer, Input, InputContainer, Label, Main, Question, Title, Subtitle, TitleContainer } from "./styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState(""); 

	const [isDisabled, setIsDisabled] = useState(false);

	const navigate = useNavigate();
	const authService = new AuthService();

	useDinamicPageTitle("Login");

	const handleSubmit = (e) => {
		e.preventDefault();

		const alert = toast.loading("Carregando...");
		setIsDisabled(true);

		authService.login({ email, password }).then(async (loggedUser) => {
			await useTimeout(2000);

			toast.update(alert, {
				render: `Olá, ${loggedUser.name}! Aguarde...`,
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
			navigate("/");
		}).catch(async error => {
			await useTimeout(2000);

			toast.update(alert, {
				render: error,
				type: "error",
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
			setIsDisabled(false);
		});
	}

	return (
		<>
		<Container>
			<Header />

			{
				sessionStorage.getItem("token") ?
					<TitleContainer>
						<Title className="w-img">Você já está logado! <img src={ sucessGif } alt="Icone redondo e verde com um V centralizado indicando sucesso" /></Title>
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
								<Input type="text" id="email" placeholder="Informe seu e-mail..." value={ email } onChange={ (e) => setEmail(e.target.value) } required/>
							</InputContainer>
							<InputContainer>
								<Label htmlFor="password">Password:</Label>
								<Input type="password" id="password" placeholder="Informe sua senha..." value={ password } onChange={ (e) => setPassword(e.target.value) } required/>
							</InputContainer>
							<Button type="submit" disabled={ isDisabled }>{ isDisabled ? "Carregando..." : "Entrar" }</Button>
						</Form>
						<Question>
							Não tem login? <Link to="/sign" className="link">
								<span className="anchor hover-underline-animation-purple">Clique aqui.</span>
							</Link>
						</Question>

						<ImageContainer>
							<Image src={ loginSvg } alt="Mulher negra com camiseta branca e calça roxa andando da esquerda para a direita"/>
							<Elipse />
						</ImageContainer>

						<Toast />
					</Main>
			}
		</Container>
	
		<Footer className="block-on-bottom"/>
		</>
	);
}

export { Login };
