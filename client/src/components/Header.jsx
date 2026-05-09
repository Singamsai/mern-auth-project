import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="flex items-center justify-between px-8 py-4 shadow-md">
                {/* Left Side */}
                <h1 className="text-2xl font-bold text-blue-600">
                    Auth App
                </h1>

                {/* Right Side */}
                <ul className="flex gap-6 text-lg font-medium">
                    <Link to="/">
                        <li className="hover:text-blue-600">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hover:text-blue-600">
                            About
                        </li>
                    </Link>
                    <Link to="/signup">
                        <li className="hover:text-blue-600">
                            SignUp
                        </li>
                    </Link>
                    <Link to="/signin">
                        <li className="hover:text-blue-600">
                            SignIn
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li className="hover:text-blue-600">
                            Profile
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>

    )
}
