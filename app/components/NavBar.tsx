import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <ul>
            <li className=''>
                <Link href="/users" >Users</Link>
                <Link href="/posts" >Posts</Link>
            </li>
        </ul>
    )
}

export default NavBar
