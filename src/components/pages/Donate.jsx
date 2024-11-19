import { useState } from "react"
import {Button} from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom'

export default function Donate() {

    const [payment, setPayment] = useState(null);

    // Conditional navigation based on payment state
    if (payment === "onetime") {
        return <Navigate to="onetime" replace={true}/>;
    } else if (payment === "monthly") {
        return <Navigate to="monthly" replace={true}/>;
    }

    return(
        <>
            <div className="hero-section" style={{ backgroundImage : 'url(../src/assets/schoolsupplies.jpg)'}}>
                <div className="home-verse ms-3">
                    <h1 className="mb-5">DONATE</h1>
                    <p>Support Our Program.</p>
                </div>
            </div>

            <div className="donation-method">
                <div className="one-time">
                    <h1>GIVE NOW</h1>
                    <p>Take action by making a tax-deductible donation to invisible children.</p>
                    <Button as="a" variant="success" className="donate-button" onClick={() => setPayment("onetime")}>
                        One-time Donation
                    </Button>
                </div>

                <div className="monthly">
                    <h1>Recurring Donation</h1>
                    <p>Donate to Invisible Children on recurring basis and become a Fourth Estate Member.</p>
                    <Button as="a" variant="success" className="donate-button" onClick={() => setPayment("monthly")}>
                        Recurring Donation
                    </Button>
                </div>
            </div>

            <main>
                <Outlet />
            </main>

        </>
    )
}
