import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 shadow-md">
        {/* Left Side */}
        <h1 className="text-2xl font-bold text-blue-600">Auth App</h1>

        {/* Right Side */}
        <ul className="flex gap-6 text-lg font-medium">
          {currentUser ? (
            <Link to="/">
              <li className="hover:text-blue-600">Home</li>
            </Link>
          ) : null}
          {currentUser ? (
            <Link to="/about">
              <li className="hover:text-blue-600">About</li>
            </Link>
          ) : null}
          {currentUser ? null : (
            <Link to="/signup">
              <li className="hover:text-blue-600">SignUp</li>
            </Link>
          )}
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePic}
                alt="Profile"
                className="w-7 h-7 rounded-full object-cover"
              />
            ) : (
              <li className="hover:text-blue-600">SignIn</li>
            )}
          </Link>
        </ul>
      </nav>
    </div>
  );
}
