// This component wraps a normal Route component
// It checks if the user is loaded and if they aren't redirects them to the login page

// Import dependency's
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route } from 'react-router-dom';
import Loading from "../pages/Loading";

// Define the structure of the props
type ProtectedRouteProps = {
    path: string,
    exact: boolean,
    children: any
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
    // Get relevant functions and values from Auth0
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    // If the user is still loading, show the loading screen
    if (isLoading) {
        return <Loading/>;
    }

    if (isAuthenticated) {
        // If the user is authenticated route them to where they want to go

        return (
            <Route exact={props.exact} path={props.path}>
                {props.children}
            </Route>
        );
    } else {
        // If the user isn't authenticated redirect them to Auth0 login
        loginWithRedirect();
        return <Loading/>;
    }
};

export default ProtectedRoute;
