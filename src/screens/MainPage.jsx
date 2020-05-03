import React from 'react'
import { Link } from 'react-router-dom'

const ScreenMainPage = () => {

    return (
        <div>this is main page
            <div><Link to='/product/'>Product Page</Link></div>
            <div><Link to='/product-avatar/'>Product Avatar Page</Link></div>
        </div>
    )
}

export default ScreenMainPage