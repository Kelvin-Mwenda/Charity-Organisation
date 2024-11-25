import { NavLink, Outlet } from 'react-router-dom'
import FooterLayout from './FooterLayout.jsx'
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs'


export default function Actions() {


    return(
        <>
            {/* HeaderLayout */}
            <Header/>
            <Breadcrumbs/>
            
            <div className="actions">
                <h1>What We Do</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel orci et felis semper semper. Sed faucibus, ex vel lobortis fermentum, mauris mi faucibus ante, id ullamcorper lorem quam in velit. Nullam et mauris auctor, malesuada lectus et, commodo turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae ipsum</p>
                <nav>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="news">News</NavLink>
                    <NavLink to="futureProjects">Future</NavLink>
                </nav>

                <Outlet/>
            </div>
            
            {/* <FooterLayout/> */}
            <FooterLayout/>
        </>
    )
}