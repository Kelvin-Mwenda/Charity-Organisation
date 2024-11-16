import {Button} from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom'

export default function Donate() {
    return (
        <>
            <div className="hero-section" style={{backgroundImage : 'url(../src/assets/schoolsupplies.jpg)'}}>
                <div className="home-verse ms-3">
                    <h1 className="mb-5">DONATE</h1>
                    <p>Support Our Program.</p>
                </div>
            </div>

            <div className="donation-method">
                <div className="one-time">
                    <h1>GIVE NOW</h1>
                    <p>Take action by making a tax-deductible donation to invisible children.</p>
                    <Button as="a" variant="success" className="donate-button">
                        <NavLink to="onetime" style={{color:'#ffff',textDecoration:'none'}}>
                            One-time Donation
                        </NavLink>
                    </Button>
                </div>
                <div className="monthly">
                    <h1>Recurring Donation</h1>
                    <p>Donate to Invisible Children on recurring basis and become a Fourth Estate Member.</p>
                    <Button as="a" variant="success" className="donate-button">
                        <NavLink to="monthly" style={{color:'#ffff',textDecoration:'none'}}>
                            Recurring Donation
                        </NavLink>
                    </Button>
                </div>
            </div>

            <Outlet/>
            
        </>
    )
}
