import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../context/User';

export default function PublicRoute({component: Component, ...rest}) {
    const { user } = useContext(UserContext)

    return (
        <Route {...rest} render={componentProps => (
            user ? <Redirect to="/home" /> : <Component {...componentProps} />
        )}
    />
    )
}