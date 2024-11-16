import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumbs from '../pages/Breadcrumbs'
import {Image} from 'react-bootstrap';
import 'react-bootstrap'



export default function Header(){


    return(
        <>
            <div className="title">
                <Image xs={3} src="../src/assets/wasonga.jpg" alt="Company Logo" className="logo"/>
                <div className="title-description">
                    <h2>FR. WASONGA’S GIRLS AND BOY EDUCATIONAL AND DEVELOPMENT FUND</h2>
                    <p style={{color: "#ffff",fontSize: '14px',margin:'0'}}>P. O. Box 5145 – 30100 ELDORET – KENYA<br/>
                        TEL: 0720803208, EMAIL: wasilpaul@yahoo.com 
                    </p>
                </div>
            </div>
            <header className="shadow-lg justify-content-center sticky-top ms-0" style={{margin: "0 -20px 0 -20px"}}>
                    <nav>
                        <NavLink to="home">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="projects">Projects</NavLink>
                        <NavLink to="plans">Campaigns</NavLink>
                        <NavLink to="news">News</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                        <NavLink to="donate">
                                Donate
                        </NavLink>
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
