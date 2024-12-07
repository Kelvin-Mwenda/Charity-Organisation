import { useLoaderData } from "react-router-dom"
import FooterLayout from './FooterLayout.jsx'
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs'

export default function FutureProjects() {
    const futureProjects = useLoaderData()

    return (
        <>
            {/* HeaderLayout */}
            <Header/>
            <Breadcrumbs/>

            <h1 className="text-center" style={{color:'#057d55', fontStyle:'bold'}}>Future Projects</h1>
            <div className="projects">
                {futureProjects.map(project => (
                    <li key={project.id} to={`/futureProjects/${project.id}`} style={{ backgroundImage: `url(../src/assets/${project.image})`}}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p><br/>
                        <p><i style={{color:"#c2c2c2"}}> {project.location}</i></p><br/>
                        <p><i style={{color:"#c2c2c2"}}> {project.plannedStartDate}</i></p><br/>
                        <p><i style={{color:"#c2c2c2"}}>Goal Amount: {project.goalAmount}</i></p><br/>
                        <p><i style={{color:"#c2c2c2"}}>Expected volunteers: {project.expectedVolunteers}</i></p>
                    </li>
                ))}
            </div>

            {/* <FooterLayout/> */}
            <FooterLayout/>
        </>
        
    )
}


//loader function
export const futureProjectsLoader = async () => {
    const res = await fetch('http://localhost:4000/futureProjects')

    return res.json()
}