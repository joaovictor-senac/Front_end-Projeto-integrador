import React, { useRef, useCallback, useContext } from "react";
import { Container, Content, Background } from "./styles";
import LogoImg from '../../assets/logo-senac.png';

import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Form } from '@unform/web';
import { FormHandles } from "@unform/core";
import { useToast } from "../../hooks/toast";
import { AuthContext } from "../../context/AuthContex";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";


interface SignInFormData {

    email: string;
    senha: string;

}

const SignIn: React.FC = () => {

    const FormRef = useRef<FormHandles>(null);
    const { signIn } = useContext(AuthContext);
    const { addToast } = useToast();
    const handleSubmit = useCallback(async (data: SignInFormData) => {

        console.log(data);

        try {
            
            FormRef.current?.setErrors({});

            const schema = Yup.object().shape({

                email: Yup.string().required('e-mail é obrigatorio').email(),
                senha: Yup.string().required('a senha tambem é obrigatoria'),

            });

            await schema.validate(data, {

                abortEarly: false,

            });

            await signIn({

                email: data.email,
                senha: data.senha,

            });

        } catch(err) {
            console.log(err);
            addToast();
        }

    },
    [signIn, addToast]
    
    );

    return(
        <Container>

            <Content>

                <img src={LogoImg} alt="logo-Senac" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça o seu login</h1>

                    <Input name="Email" icon={FiMail} type="email" placeholder="E-mail" />
                    <Input name="senha" icon={FiLock} type='password' placeholder="Senha" />
                    
                    <Button type="submit">Entrar</Button>

                    <a href="forgot">esqueci a minha senha</a>
                </Form>

                <Link to="/signup" placeholder="criar conta">
                    
                    <FiLogIn/>
                        criar conta

                </Link>
            </Content>
            <Background/>
        </Container>
    );

}

export default SignIn;