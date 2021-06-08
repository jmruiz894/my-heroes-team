import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem("token") ? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default ProtectedRoute;