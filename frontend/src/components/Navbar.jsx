import logo from '../img/insta.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({login}) => {

    const loginStatus = () => {
        const token = localStorage.getItem('jwt')
        if (login || token) {
            return [
            <>
                <Link to={"/profile"}><li>Profile</li></Link>
                <Link to={"/createpost"}><li>CreatePost</li></Link>
                <Link to={"/"}>
                <button className="primaryBtn">Log Out</button>
                    </Link>
            </>
            ]
        }
        else{
            return [
                <>
                 <Link to={"/signup"}><li>SignUp</li></Link>
                 <Link to={"/signin"}><li>SignIn</li></Link>
                </>
            ]
        }
    }


    return (
        <>
            <div className='navbar'>
                {/* <Link to={"/"}> */}
                <img src={logo} alt="" />
                {/* </Link> */}
                <ul>
                   {loginStatus()}
                   
                </ul>
            </div>
        </>
    )
}

export default Navbar



// import React from 'react';
// import logo from '../img/insta.png';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

   
//     const navLinks = [
//         { path: "/signup", label: "SignUp" },
//         { path: "/signin", label: "SignIn" },
//         { path: "/profile", label: "Profile" },
//         { path: "/createpost", label: "CreatePost" },
//     ];

//     return (
//         <div className='navbar'>
//             {/* <Link to={"/"}> */}
//             <img src={logo} alt="Logo" />
//             {/* </Link> */}
//             <ul>
//                 {navLinks.map((link, index) => (
//                     <Link key={index} to={link.path}>
//                         <li>{link.label}</li>
//                     </Link>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Navbar;
