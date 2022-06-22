import { ButtonHTMLAttributes } from "react";
import { Container  } from "../../pages/SignIn/styles";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = () => (
    <Container>
        <button type="button"/>
    </Container>
);

export default Button