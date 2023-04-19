import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../context/User';

export default function PrivateRoute({component: Component, ...rest}) {
    const { user } = useContext(UserContext)

    return (
        <Route {...rest} render={componentProps => (
            user ? <Component {...componentProps} /> : <Redirect to="/login" />
        )}
    />
    )
}