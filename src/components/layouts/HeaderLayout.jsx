import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumbs from '../pages/Breadcrumbs'
import {Image} from 'react-bootstrap';
import 'react-bootstrap'
import 'bootstrap/scss/bootstrap.scss';
import "bootstrap/dist/css/bootstrap.min.css";



export default function Header(){


    return(
        <>
            <div className="title">
                <Image xs={3} src="../src/assets/wasonga.jpg" alt="Company Logo" className="logo d-md-none d-lg-block"/>
                <div className="title-description" style={{color:'rgb(5, 125, 85)',fontSize: '0.5rem',margin:'0'}}>
                    <h1>FR. WASONGA’S GIRLS AND BOY EDUCATIONAL AND DEVELOPMENT FUND</h1>
                    <p  style={{fontSize: '12px',margin:'0'}}>P. O. Box 5145 – 30100 ELDORET – KENYA
                        TEL: 0720803208, EMAIL: wasilpaul@yahoo.com 
                    </p>
                </div>
            </div>
            <header className="shadow-lg justify-content-center sticky-top ms-0" style={{margin: "0 -20px 0 -20px"}}>
                <nav> 
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="plans">Campaigns</NavLink>
                    <NavLink to="news">News</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="donate">Donate</NavLink>
                    <NavLink to="signup">Sign Up</NavLink>
                    <NavLink to="login">Login</NavLink>
                    <div className="profile">
                        <NavLink to="profile">Profile</NavLink>
                    </div>
                </nav>
                
            </header>

            <div className="root-layout">
                <Breadcrumbs/>

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
