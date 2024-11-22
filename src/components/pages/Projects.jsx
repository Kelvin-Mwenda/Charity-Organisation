import { useLoaderData,Link } from "react-router-dom"
import {Image} from 'react-bootstrap';

export default function Projects() {
    const projects = useLoaderData()

    return(
        <>
            <div className="home-intro">
                <div className="about-image">
                    <Image xs={4} src="../src/assets/father.jpg" alt="Company Logo" style={{height:'75%'}} className="about-image"/>
                </div>

                <div className="about-text">
                    <h1 className="text-center" style={{color:'#057d55', fontStyle:'bold'}}>What We Do</h1>
                    <p>
                        Aims at meeting the educational needs of the children including school fees and education materials and ensuring that the beneficiaries successfully complete their education journey.
                    </p>
                </div>
            </div>

            <div className="home-intro">
                    <div className="about-text">
                        <h1 className="text-center" style={{color:'#057d55', fontStyle:'bold'}}>EDUCATION SPONSORSHIP</h1>
                        <p>
                            Aims at meeting the educational needs of the children including school fees and education materials and ensuring that the beneficiaries successfully complete their education journey.
                        </p>
                    </div>

                    <div className="about-image">
                        <Image xs={4} src="../src/assets/father.jpg" alt="Company Logo" style={{height:'75%'}} className="about-image"/>
                    </div>
                </div>

            <h1 style={{textAlign:'center', color: 'rgb(5, 125, 85)'}}>OUR COMPLETED PROJECTS</h1>
            
            <div className="projects">
                {projects.map(project => (
                    <Link key={project.id} to={project.id.toString()} style={{ backgroundImage: `url(../src/assets/${project.image})`}}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p className="last-child">Status: {project.status}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

//loader function
export const projectsLoader = async () => {
    const res = await fetch('http://localhost:4000/projects')

    if(!res.ok){
        throw new Error('Could not find the projects...')
    }

    return res.json()
} 