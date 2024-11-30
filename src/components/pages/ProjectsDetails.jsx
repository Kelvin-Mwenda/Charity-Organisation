import {  useLoaderData, useParams } from "react-router-dom"
//import {Image} from 'react-bootstrap';
import FooterLayout from './FooterLayout.jsx'
import Header from './Header.jsx'

export default function ProjectsDetails() {
    const project= useLoaderData()
    const { id } = useParams()

    return (
        <>
            {/* HeaderLayout */}
            <Header/>


            <div className="account shadow-sm" style={{color:'#057d55', textAlign: 'start'}}>
                <h2 className="text-center" style={{color:'#057d55', textAlign: 'start'}}>{project.name}</h2>

                <div className="details-intro">
                    <div className="detail-image" style={{ backgroundImage: `url(../src/assets/${project.image})`}}>

                        {/* <Image src={"../src/assets/" + project.image} alt="Company Logo" className="details-image"/> */}
                    </div>

                    <div className="my-p-details">
                        <div className="detail">
                            <p style={{margin:'10px 1px',color:'black'}}>Description: </p>
                            <p style={{color:'#057d55',fontSize:'1rem', textAlign: 'start',margin:'10px 1px'}}>{project.description}</p>
                            <p></p>
                        </div>

                        <div className="detail">
                            <p style={{margin:'10px 1px',color:'black'}}>Status: </p>
                            <p style={{color:'#057d55',fontSize:'1rem', textAlign: 'start',margin:'10px 1px'}}>{project.status}</p>
                            <p></p>
                        </div>

                        <div className="detail">
                            <p style={{margin:'10px 1px',color:'black'}}>Location: </p>
                            <p style={{color:'#057d55',fontSize:'1rem', textAlign: 'start',margin:'10px 1px'}}>{project.startDate}</p>
                            <p></p>
                        </div>

                        <div className="detail">
                            <p style={{margin:'10px 1px',color:'black'}}>End Date: </p>
                            <p style={{color:'#057d55',fontSize:'1rem', textAlign: 'start',margin:'10px 1px'}}>{project.endDate}</p>
                            <p></p>
                        </div>

                        <div className="detail">
                            <p style={{margin:'10px 1px',color:'black'}}>Goal Amount: </p>
                            <p style={{color:'#057d55',fontSize:'1rem', textAlign: 'start',margin:'10px 1px'}}>{project.goalAmount}</p>
                            <p></p>
                        </div>

                        <div className="detail">
                            <p style={{margin:'10px 1px',color:'black'}}>Raised Amount: </p>
                            <p style={{color:'#057d55',fontSize:'1rem', textAlign: 'start',margin:'10px 1px'}}>{project.volunteers}</p>
                            <p></p>
                        </div>
                    </div>
                </div>

                
            </div>

            <p className="details-id">{id}</p>

            {/* <FooterLayout/> */}
            <FooterLayout/>
        </>
        
    )
}

//loader function
export const ProjectDetailsLoader = async ({params}) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/projects/' +  id )

    if(!res.ok){
        throw new Error('Could not fetch the project details...')
    }

    return res.json()
}
