import Account from "./Account";
import Donations from "./Donations";
import Notifications from "./Notifications";
import ResetPassword from "./ResetPassword";


export default function Profile() {
    return (
        <>
            <div className="profile">
                <div className="profile-nav">
                    <nav>
                        <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Notifications</a></li>
                            <li><a href="#">Donations</a></li>
                            <li><a href="#">Reset Password</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="profile-details">
                    <Account/>
                    <Notifications/>
                    <Donations/>
                    <ResetPassword/>
                </div>
            </div>
        </>
    )
}