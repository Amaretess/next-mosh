
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="navbar nav ">
                    <Link className="nav-link" aria-current="page" href="/">Home</Link>
                    <Link className="nav-link" href="/users">Users</Link>
                    <Link className="nav-link" href="/posts">Posts</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
