// import { Link } from 'react-router-dom';
// import './Navbar.css';
//
// function Navbar() {
//     return (
//         <nav>
//             <h2>Portfolio</h2>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/projects">Projects</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     );
// }
//
// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => setSidebarVisible(true);
    const hideSidebar = () => setSidebarVisible(false);

    return (
        <>
            <nav className="sticky-top">
                <ul className={sidebarVisible ? 'sidebar show' : 'sidebar'}>
                    <li>
                        <button className="icon-btn" onClick={hideSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </button>
                    </li>
                    <li><Link to="/" onClick={hideSidebar}><b>Home</b></Link></li>
                    <li><Link to="/projects" onClick={hideSidebar}>Projects</Link></li>
                    <li><Link to="/about" onClick={hideSidebar}>About</Link></li>
                    <li><Link to="/contact" onClick={hideSidebar}>Contact</Link></li>
                </ul>

                <ul>
                    <li><Link to="/"><b>Home</b></Link></li>
                    <li className="hideOnMobile"><Link to="/projects">Projects</Link></li>
                    <li className="hideOnMobile"><Link to="/about">About</Link></li>
                    <li className="hideOnMobile"><Link to="/contact">Contact</Link></li>
                    <li>
                        <button className="icon-btn" onClick={showSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Logo section */}
            {/*<div className="logo1 mb-1">*/}
            {/*    <img src="/logo1.jpeg" alt="Logo" className="logo rounded-3 d-block" />*/}
            {/*</div>*/}
        </>
    );
}

export default Navbar;

