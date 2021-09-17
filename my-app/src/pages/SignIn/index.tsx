import logo from '../../assets/logo.png';
import {Container, Input, Logo, Button} from './styles'


function SignIn(){
    return(
        <Container>
            <Logo src={logo} alt="code logo" />
            <Input type="text" defaultValue="example@email.com" />
            <Input type="password" defaultValue="example1234" />
            <Button>Entrar</Button>
        </Container>
    )
}

export default SignIn;