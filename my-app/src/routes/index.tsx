import { Switch, Route } from "react-router";

import SignIn from '../pages/SignIn'

export default function Routes(){

    return(
        <Switch> 
            <Route path="/login" component={SignIn} exact/>
            <Route path="/" component={SignIn}/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
        </Switch>
    )
}