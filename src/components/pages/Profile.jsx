import { Routes, Route, NavLink } from 'react-router-dom';
import Account from './Account';
import Donations from './Donations';
import Notifications from './Notifications';
import ResetPassword from './ResetPassword';
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs'

export default function Profile() {
    
    return (
        <>
            {/* HeaderLayout */}
            <Header/>             
            <Breadcrumbs/>

            <div className="My-Profile">
                <div className="profile-nav">
                    <nav>
                        <ul>
                            <li><NavLink to="Profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink></li>
                            <li><NavLink to="notifications" className={({ isActive }) => isActive ? "active" : ""}>Notifications</NavLink></li>
                            <li><NavLink to="donations" className={({ isActive }) => isActive ? "active" : ""}>Donations</NavLink></li>
                            <li><NavLink to="reset-password" className={({ isActive }) => isActive ? "active" : ""}>Reset Password</NavLink></li>
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Logout</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="profile-details">
                    <Routes>
                        {/* Nested routes */}
                        <Route path="/" element={<Account />} />
                        <Route path="Profile" element={<Account />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="donations" element={<Donations />} />
                        <Route path="reset-password" element={<ResetPassword />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}






// import Account from "./Account";
// import Donations from "./Donations";
// import Notifications from "./Notifications";
// import ResetPassword from "./ResetPassword";
// import Header from './Header.jsx'
// import Breadcrumbs from './Breadcrumbs'


// export default function Profile() {
//     return (
//         <>
//             {/* HeaderLayout */}
//             <Header/>
//             <Breadcrumbs/>
            
//             <div className="profile">
//                 <div className="profile-nav">
//                     <nav>
//                         <ul>
//                             <li><a href="/">Profile</a></li>
//                             <li><a href="#">Notifications</a></li>
//                             <li><a href="#">Donations</a></li>
//                             <li><a href="#">Reset Password</a></li>
//                             <li><a href="#">Logout</a></li>
//                         </ul>
//                     </nav>
//                 </div>

//                 <div className="profile-details">
//                     <Account/>
//                     <Notifications/>
//                     <Donations/>
//                     <ResetPassword/>
//                 </div>
//             </div>
//         </>
//     )
// }
