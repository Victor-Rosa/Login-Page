import { Component } from "react";

interface  Props {

}

interface State {
    signed: boolean;
}



export default class User extends Component <{}, State> {


    constructor(props: Props) {
        super(props);
        
        
        this.state = {
            signed: false,
        };
    }


    componentDidMount() {} // Antigo useEffect


    componentDidCatch(){

    } // Error boundary 

    componentWillUnmount(){} // Quando o component for desmontado, finalizado  da aplicação
    

    render(){
        return (
            <div>{this.state.signed}</div>
        )
    }
}