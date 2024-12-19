import React from 'react';
import 'tailwindcss/tailwind.css';
function Header() {
    return (
        <div className="container mx-auto d-flex items-center justify-between">
            <ul className="flex space-x-4 float-right mt-5">
              <li><a className="nav-link scrollto active text-black" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto text-black" href="#about">About</a></li>
              <li><a className="nav-link scrollto text-black" href="#skills">Projects</a></li>
              <li><a className="nav-link scrollto text-black" href="#skills">Skills</a></li>
              <li><a className="nav-link scrollto text-black" href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}
export default Header;  