import { NavLink } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/scss/bootstrap.scss';
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeaderNav() {
    return (
        <>
            <header className="sticky-top bg-light shadow-sm">
                <nav> 
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="plans">Campaigns</NavLink>
                    <NavLink to="news">News</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="donate">Donate</NavLink>
                </nav>
                <div className="profile">
                        <NavLink to="signup">Sign Up</NavLink>
                        <NavLink to="login">Login</NavLink>
                        <div>
                            <NavLink to="profile" className="my-profile" style={{backgroundImage : 'url(../src/assets/father.jpg)'}}></NavLink>
                        </div>
                        
                    </div>
            </header>
        </>
    )
}
