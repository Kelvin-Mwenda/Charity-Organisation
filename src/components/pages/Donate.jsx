// import { useState } from "react"
import { NavLink,Outlet } from 'react-router-dom'
import FooterLayout from './FooterLayout.jsx'
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs'

export default function Donate() {



    return(
        <>
            {/* HeaderLayout */}
            <Header/>
            <Breadcrumbs/>

            <div className="hero-section" style={{ backgroundImage : 'url(../src/assets/schoolsupplies.jpg)'}}>
                <div className="home-verse ms-3">
                    <h1 className="mb-5">DONATE</h1>
                    <p>Support Our Program.</p>
                </div>
            </div>

            <div className="home-intro">
                <div className="one-time">
                    <h1>GIVE NOW</h1>
                    <p>Take action by making a tax-deductible donation to invisible children.</p>
                    <NavLink to="onetime">One-time Donation</NavLink>
                </div>

                <div className="monthly">
                    <h1>Recurring Donation</h1>
                    <p>Donate to Invisible Children on recurring basis and become a Fourth Estate Member.</p>
                    <NavLink to="monthly">Recurring Donation</NavLink>
                </div>
            </div>

            <main>
                <Outlet />
            </main>

            {/* <FooterLayout/> */}
            <FooterLayout/>
        </>
    )
}
