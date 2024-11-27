import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderNav() {
    const isActive = (path) => window.location.pathname === path;

    return (
        <>
            <header className="sticky-top bg-body shadow-sm">
                <nav>
                    <a
                        href="/"
                        className={isActive("/") ? "active-link" : ""}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className={isActive("/about") ? "active-link" : ""}
                    >
                        About
                    </a>
                    <a
                        href="/projects"
                        className={isActive("/projects") ? "active-link" : ""}
                    >
                        Projects
                    </a>
                    <a
                        href="/plans"
                        className={isActive("/plans") ? "active-link" : ""}
                    >
                        Campaigns
                    </a>
                    <a
                        href="/news"
                        className={isActive("/news") ? "active-link" : ""}
                    >
                        News
                    </a>
                    <a
                        href="/contact"
                        className={isActive("/contact") ? "active-link" : ""}
                    >
                        Contact
                    </a>
                    <a
                        href="/donate"
                        className={isActive("/donate") ? "active-link" : ""}
                    >
                        Donate
                    </a>
                </nav>
                <div className="profile">
                    <a
                        href="/signup"
                        className={isActive("/signup") ? "active-link" : ""}
                        style={{backgroundColor:'darkgreen',color:'white'}}
                    >
                        Sign Up
                    </a>
                    <a
                        href="/login" style={{backgroundColor:'white',color:'darkgreen',border:'1px solid darkgreen',borderRadius:'4px'}}
                    >
                        Login
                    </a>
                    <div>
                        <a
                            href="/profile"
                            className={`my-profile ${
                                isActive("/profile") ? "active-link" : ""
                            }`}
                            style={{
                                backgroundImage: 'url(../src/assets/father.jpg)'
                            }}
                        ></a>
                    </div>
                </div>
            </header>
        </>
    );
}







// //import { NavLink } from 'react-router-dom'
// import 'react-bootstrap'
// import 'bootstrap/scss/bootstrap.scss';
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function HeaderNav() {
//     return (
//         <>
//             <header className="sticky-top bg-body shadow-sm">
//                 <nav> 
//                     <a href="/">Home</a>
//                     <a href="/about">About</a>
//                     <a href="/projects">Projects</a>
//                     <a href="/plans">Campaigns</a>
//                     <a href="/news">News</a>
//                     <a href="/contact">Contact</a>
//                     <a href="/donate">Donate</a>
//                 </nav>
//                 <div className="profile">
//                         <a href="signup">Sign Up</a>
//                         <a href="Login">Login</a>
//                         <div>
//                             <a href="profile" className="my-profile" style={{backgroundImage : 'url(../src/assets/father.jpg)'}}></a>
//                         </div>
                        
//                     </div>
//             </header>
//         </>
//     )
// }
