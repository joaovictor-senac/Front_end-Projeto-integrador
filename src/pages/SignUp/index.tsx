import { Container, Content, Background } from "./styles";
import logoImg from '../../assets/logo-senac.png';
import { FiArrowLeft } from 'react-icons/fi';

const SignUp: React.FC = () => (
    <Container>
    <Background/>
        <Content>
            <img src={logoImg} alt='Logo senac' />

            <form>
                <h1>Faça seu cadastro</h1>
                <input type='name' placeholder='nome' />
                <input type='email' placeholder='E-mail' />
                <input type='password' placeholder='Senha' />
                <button type='submit'>Cadastrar</button>
            </form>

            <a href="login" placeholder='criar conta'>
                <FiArrowLeft/>
                    Voltar para logon
            </a>
        </Content>
    </Container>
);

export default SignUp;