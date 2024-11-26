//import { NavLink } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/scss/bootstrap.scss';
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeaderNav() {
    return (
        <>
            <header className="sticky-top bg-body shadow-sm">
                <nav> 
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/plans">Campaigns</a>
                    <a href="/news">News</a>
                    <a href="/contact">Contact</a>
                    <a href="/donate">Donate</a>
                </nav>
                <div className="profile">
                        <a href="signup">Sign Up</a>
                        <a href="Login">Login</a>
                        <div>
                            <a href="profile" className="my-profile" style={{backgroundImage : 'url(../src/assets/father.jpg)'}}></a>
                        </div>
                        
                    </div>
            </header>
        </>
    )
}
