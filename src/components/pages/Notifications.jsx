import { Image } from "react-bootstrap";


export default function Notifications() {
    return (
        <>
            <div className="notify">
                <h1>Notifications</h1>
                <div className="container">
                    <div className="notify-icon">
                        <Image src='./src/assets/notify-icon.png' alt="notify-icon" style={{height:'25%'}}/>
                        <p>11 minutes ago...</p>
                    </div>
                    <div className="notify-message">
                        <p>$ 200 was successfully donated to the charity organization.</p>
                    </div>
                    <div className="notify-delete">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
