import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo-senac.png';
import { FiLogIn } from 'react-icons/fi';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt='Logo senac' />

            <form>
                <h1>Faça seu Login</h1>

                <input type='email' placeholder='E-mail' />

                <input type='password' placeholder='Senha' />
                
                <button type='submit'>Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="login" placeholder='criar conta'>
                <FiLogIn>
                    Criar conta
                </FiLogIn>
            </a>
        </Content>
        <Background/>
    </Container>
);

export default SignIn;