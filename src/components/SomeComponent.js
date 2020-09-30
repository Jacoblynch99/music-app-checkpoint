import React from 'react'
import { Link } from 'react-router-dom'

const SomeComponent = (props) => {
    return (
        <div>
            <h1>Welcome to the SomeComponent Page</h1>
            <p>
                There's lots to do and see here but if you want the full range
                of capabilities provided by this App, you need to checkout the
                <Link to="/dash">Dashboard Page</Link>.
            </p>
        </div>
    )
}

export default SomeComponent
