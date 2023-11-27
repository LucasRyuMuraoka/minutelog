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
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { Container, Button, Elipse, Form, Image, ImageContainer, Input, InputContainer, Label, Main, Question, Title, Subtitle, TitleContainer } from "./styles";
import { UsersService } from "../../services/users.service";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState(""); 

	const [isDisabled, setIsDisabled] = useState(false);

	const usersService = new UsersService();
	const navigate = useNavigate();
	useDinamicPageTitle("SignUp");

	const handleSubmit = (e) => {
		e.preventDefault();

		const alert = toast.loading("Carregando...");
		setIsDisabled(true);

		usersService.create({ name, email, password }).then(async () => {
			await useTimeout(2000);

			toast.update(alert, {
				render: `Conta criada! Aguarde...`,
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
			navigate("/login");
		}).catch(async error => {
			console.clear();
			const message = (error.response.data.messages[0] === "User already exist in database!" ? "The E-MAIL field is invalid." : error.response.data.messages[0]);

			await useTimeout(2000);

			toast.update(alert, {
				render: message,
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
						<Title>Crie sua conta</Title>
						<Form onSubmit={ handleSubmit }>
							<InputContainer>
								<Label htmlFor="email">Nome:</Label>
								<Input type="text" id="email" placeholder="Informe seu primeiro nome..." value={ name } onChange={ (e) => setName(e.target.value) } required/>
							</InputContainer>
							<InputContainer>
								<Label htmlFor="email">E-mail:</Label>
								<Input type="text" id="email" placeholder="Informe seu e-mail..." value={ email } onChange={ (e) => setEmail(e.target.value) } required/>
							</InputContainer>
							<InputContainer>
								<Label htmlFor="password">Senha:</Label>
								<Input type="password" id="password" placeholder="Informe sua senha..." value={ password } onChange={ (e) => setPassword(e.target.value) } required/>
							</InputContainer>
							<Button type="submit" disabled={ isDisabled }>{ isDisabled ? "Carregando..." : "Criar" }</Button>
						</Form>
						<Question>
							Já tem uma conta? <Link to="/login" className="link">
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

export { Signup };
