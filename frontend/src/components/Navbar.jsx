// import logo from '../img/insta.png'
// import './Navbar.css'
// import { Link } from 'react-router-dom'

// const Navbar = () => {

//     return (
//         <>
//             <div className='navbar'>
//                 {/* <Link to={"/"}> */}
//                 <img src={logo} alt="" />
//                 {/* </Link> */}
//                 <ul>
//                     <Link to={"/signup"}><li>SignUp</li></Link>
//                     <Link to={"/signin"}><li>SignIn</li></Link>
//                     <Link to={"/profile"}><li>Profile</li></Link>
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default Navbar



import React from 'react';
import logo from '../img/insta.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { path: "/signup", label: "SignUp" },
        { path: "/signin", label: "SignIn" },
        { path: "/profile", label: "Profile" },
        { path: "/createpost", label: "CreatePost" },
    ];

    return (
        <div className='navbar'>
            {/* <Link to={"/"}> */}
            <img src={logo} alt="Logo" />
            {/* </Link> */}
            <ul>
                {navLinks.map((link, index) => (
                    <Link key={index} to={link.path}>
                        <li>{link.label}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
