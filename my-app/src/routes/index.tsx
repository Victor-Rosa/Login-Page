

import { Switch} from "react-router";
import { useAuth } from "../contexts/auth";

import Dashboard from "../pages/Dashboard";

import SignIn from '../pages/SignIn'
import CustomRoute from "./routes";
 

export default function Routes(){

    const {signed} = useAuth()

    return(
        <Switch>  
            <CustomRoute path="/dashboard" component={Dashboard} exact isPrivate={true} signed={signed}/>
            <CustomRoute path="/" component={SignIn} isPrivate={false} signed={signed}/>
        </Switch>
    )
}