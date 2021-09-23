import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import logo from '../../assets/logo.png';

import {Container, Input, Logo, Button} from './styles'



function SignIn(){

    const { signed, loading, user, signIn } = useContext(AuthContext);

    console.log({signed})
    console.log({loading})

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