
import {  useAuth } from '../../contexts/auth';

import logo from '../../assets/logo.png';

import {Container, Input, Logo, Button} from './styles'



function SignIn(){

    const { loading, signIn } = useAuth();

    

    function handleSignIn(){
        signIn()
    }

    return(
        <Container>
            <Logo src={logo} alt="code logo" />
            <Input type="text" defaultValue="example@email.com" />
            <Input type="password" defaultValue="example1234" />
            <Button onClick={handleSignIn}>
                {loading ? 'Carregando' : 'Entrar'}
            </Button>
        </Container>
    )
}

export default SignIn;