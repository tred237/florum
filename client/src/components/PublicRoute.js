import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../context/User';

export default function PublicRoute({component: Component, componentProps, ...rest}) {
    const { user } = useContext(UserContext)

    return (
        <Route {...rest} render={() => (
            user ? <Redirect to="/home" /> : <Component {...componentProps} />
        )}
    />
    )
}