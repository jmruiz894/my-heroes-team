import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm.jsx'

export default function Login( props ) {
    return (
        <div className="container row">
            <LoginForm {...props} />
        </div>
    )
}
