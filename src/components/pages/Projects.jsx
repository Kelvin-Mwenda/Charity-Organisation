import { useLoaderData,Link } from "react-router-dom"
import {Image} from 'react-bootstrap';

export default function Projects() {
    const projects = useLoaderData()

    return(
        <>
            <div className="projects-intro">
                <div className="projects-intro-title">
                    <h1 style={{textAlign:'center', color: 'rgb(5, 125, 85)'}}>What We Do</h1>
                </div>

                <div className="projects-intro">
                    <div className="intro1-image">
                        <Image src="../src/assets/father.jpg" alt="Company Logo" style={{height:'25%'}}/>
                    </div>
                    
                    <div className="intro1-text">
                        <h1 style={{textAlign:'center', color: 'rgb(5, 125, 85)'}}>EDUCATION SPONSORSHIP</h1>
                        <p>
                            Aims at meeting the educational needs of the children including school fees and education materials and ensuring that the beneficiaries successfully complete their education journey.
                        </p>
                    </div>
                </div>

                <div className="projects-intro">
                    <div className="intro1-text">
                        <h1 style={{textAlign:'center', color: 'rgb(5, 125, 85)'}}>ECONOMIC EMPOWERMENT</h1>
                        <p>
                            <ol>
                                <li>
                                    Building the economic capacity of families of the sponsored children to enable them support themselves, meet where possible some of the beneficiaries’ educational needs and the educational needs of the beneficiaries’ siblings.
                                    </li>
                                <li>
                                    Building the economic base of the organization through the social enterprise for economic sustainability of the fund.
                                </li>
                            </ol>
                        </p>
                    </div>
                    <div className="intro1-image">
                        <Image src="../src/assets/father.jpg" alt="Company Logo" style={{height:'25%'}}/>
                    </div>
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