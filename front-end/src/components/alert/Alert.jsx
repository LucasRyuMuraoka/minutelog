/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Toast } from "../toast/Toast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTimeout } from "../../hooks/UseTimeout";
import { UsersService } from "../../services/users.service";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Form, Input, InputContainer, Label } from "./styles";

import "./styles.css";

const Alert = ({ userInformations, title, isDelete }) => {

	const [ name, setName ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	const [ isDisabled, setIsDisabled ] = useState(false);

	const navigate = useNavigate();
	const usersService = new UsersService();

	useEffect(() => {
		if(userInformations) {
			setName(userInformations.name);
			setEmail(userInformations.email);
			setPassword(userInformations.password);
		}
	}, [userInformations]);

	const handleUpdate = (e) => {
		e.preventDefault();

		const alert = toast.loading("Carregando...");
		setIsDisabled(true);
		
		if(userInformations) {
			usersService.update(userInformations.id, { name, email, password }).then(async () => {
				await useTimeout(2000);

				toast.update(alert, {
					render: `Atualizado com sucesso! Aguarde...`,
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
				window.location.reload();
			}).catch(async () => {
				await useTimeout(2000);

				toast.update(alert, {
					render: "Campos inválidos",
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
	}

	const handleDelete = (e) => {
		e.preventDefault();

		const alert = toast.loading("Carregando...");
		setIsDisabled(true);

		if(userInformations) {
			usersService.delete(userInformations.id).then(async () => {
				await useTimeout(2000);

				toast.update(alert, {
					render: `Sua conta foi deletada! Até breve.`,
					type: "warning",
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
			});
		}
	}

	return (
		<>
			<AlertDialog.Root>
				<AlertDialog.Trigger asChild>
					<button className={ isDelete ? "Button red" : "Button violet" }>{ title }</button>
				</AlertDialog.Trigger>
				<AlertDialog.Portal>
					<AlertDialog.Overlay className="AlertDialogOverlay" />
					<AlertDialog.Content className="AlertDialogContent">
						{
							isDelete ?
								<>
									<AlertDialog.Title className="AlertDialogTitle">Você tem certeza?<span className="alert">* Ação Permanente *</span></AlertDialog.Title>
									<AlertDialog.Description className="AlertDialogDescription">
										Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seu dados de nossos servidores.
									</AlertDialog.Description>
									<div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
										<AlertDialog.Cancel asChild>
											<button className="Button mauve" disabled={ isDisabled }>Cancelar</button>
										</AlertDialog.Cancel>
										<button className="Button red" onClick={ handleDelete } disabled={ isDisabled }>Sim, excluir conta</button>
									</div>
								</>
							:
								<>
									<AlertDialog.Title className="AlertDialogTitle">Atualizar conta<span className="alert">Campos obrigatórios *</span></AlertDialog.Title>
									<Form onSubmit={ handleUpdate }>
										<InputContainer>
											<Label>Nome:&nbsp;<span>*</span></Label>
											<Input type="text" placeholder="Informe seu novo nome..." value={ name } onChange={ (e) => setName(e.target.value) } required={ true }/>
										</InputContainer>
										<InputContainer>
											<Label>E-mail:&nbsp;<span>*</span></Label>
											<Input type="email" placeholder="Informe seu novo e-mail..." value={ email } onChange={ (e) => setEmail(e.target.value) } required={ true }/>
										</InputContainer>
										<InputContainer>
											<Label>Senha:&nbsp;<span>*</span></Label>
											<Input type="password" placeholder="Informe sua nova senha..." value={ password } onChange={ (e) => setPassword(e.target.value) } required={ true }/>
										</InputContainer>

										<div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
											<AlertDialog.Cancel asChild>
												<button className="Button mauve" disabled={ isDisabled }>Cancelar</button>
											</AlertDialog.Cancel>
											<button type="submit" className="Button violet" disabled={ isDisabled }>Atualizar dados</button>
										</div>
									</Form>
								</>
						}
					</AlertDialog.Content>
				</AlertDialog.Portal>
			</AlertDialog.Root>
			<Toast />
		</>
	);
};

export { Alert };
