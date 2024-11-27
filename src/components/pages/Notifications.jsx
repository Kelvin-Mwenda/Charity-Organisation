//import { Image } from "react-bootstrap";


export default function Notifications() {
    return (
        <>
            <div className="notify">
                <h1 className="text-center" style={{color:'#057d55', textAlign: 'start'}}>Notifications</h1>

                <div className="notification shadow-sm">
                    <div className="my-profile">
                        <div className="notify-icon" style={{
                                backgroundImage: 'url(../src/assets/father.jpg)',
                            }}>
                        </div>

                        <div className="notify-title">
                            <p style={{color:'#057d55', textAlign: 'start'}}>Paypal</p>
                        </div>
                    </div>

                    <div className="notify-message" style={{fontSize:'0.9rem'}}>
                        <p>$ 200 was successfully donated to the charity organization.</p>
                        <div className="notify-delete">
                        
                        </div>
                    </div>
                    <p style={{color:'#057d55',fontSize:'0.8rem'}}>3 days ago...</p>
                </div>

                <div className="notification shadow-sm">
                    <div className="my-profile">
                        <div className="notify-icon" style={{
                                backgroundImage: 'url(../src/assets/father.jpg)',
                            }}>
                        </div>

                        <div className="notify-title">
                            <p style={{color:'#057d55', textAlign: 'start'}}>Master Card</p>
                        </div>
                    </div>

                    <div className="notify-message">
                        <p>$ 1,000 was successfully donated to the charity organization.</p>
                        <div className="notify-delete">
                        
                        </div>
                    </div>
                    <p style={{color:'#057d55',fontSize:'0.8rem'}}>1 hour ago...</p>
                </div>

                <div className="notification shadow-sm">
                    <div className="my-profile">
                        <div className="notify-icon" style={{
                                backgroundImage: 'url(../src/assets/father.jpg)',
                            }}>
                        </div>

                        <div className="notify-title">
                            <p style={{color:'#057d55', textAlign: 'start'}}>PayPal</p>
                        </div>
                    </div>

                    <div className="notify-message">
                        <p>$ 5,000 was successfully donated to the charity organization.</p>
                        <div className="notify-delete">
                        
                        </div>
                    </div>
                    <p style={{color:'#057d55',fontSize:'0.8rem'}}>10 minutes ago...</p>
                </div>

            </div>
        </>
    )
}
