import { Redirect, Route, RouteProps } from "react-router";

interface Props extends RouteProps {
 isPrivate: boolean,
 signed: boolean,
}


export default function CustomRoute({isPrivate, signed, ...rest}: Props){

  if (isPrivate && !signed){
    <Redirect to="/" ></Redirect>;

  }

  return <Route {...rest}/>
}