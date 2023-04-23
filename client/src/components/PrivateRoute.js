import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../context/User';

export default function PrivateRoute({ component: Component, componentProps, ...rest }) {
    const { user } = useContext(UserContext)

    return (
        <Route {...rest} render={() => (
            user ? <Component {...componentProps} /> : <Redirect to="/login" />
        )}
    />
    )
}