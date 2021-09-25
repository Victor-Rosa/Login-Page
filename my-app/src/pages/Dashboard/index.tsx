

import logo from '../../assets/logo.png';


import {Container,  Logo} from './styles'



function Dashboard(){
  

    return(
        <Container>
            <Logo src={logo} alt="code logo" />
        </Container>
    )
}

export default Dashboard;