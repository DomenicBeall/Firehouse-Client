import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route } from 'react-router-dom';

type ProtectedRouteProps = {
    path: string,
    exact: boolean,
    children: any
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isAuthenticated) {
        return (
            <Route path={props.path}>
                {props.children}
            </Route>
        );
    } else {
        loginWithRedirect();
        return <div>Loading...</div>;
    }
};

export default ProtectedRoute;
