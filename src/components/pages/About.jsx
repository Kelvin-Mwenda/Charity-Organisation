import { useState } from "react"
import { Navigate } from "react-router-dom"
import {Image,Button} from 'react-bootstrap';

export default function About(){
    const [user,setUser] = useState('chocs')

    if(!user){
        return <Navigate to="/home" replace={true}/>
    }

    return(
        <>
            <div className="about-us">
                <div className="intro">
                    <div className="about-content">
                        <h1 className="about">About Us</h1>
                        <p>The Fr. Wasonga Education and Development Fund is a non-governmental organization supporting the educational and development needs of Children with a special focus on girls who have over the years, been exposed to different types of vulnerabilities, and the boy child, whose plight is emerging as a key issue of concern in the modern world.</p>
                    </div>
                    <div className="about-image">
                        <Image src="../src/assets/youth.jpg" alt="Company Logo" style={{height:'25%'}}/>
                    </div>
                </div>

                <div className="intro2">
                    <p>The Wasonga Girls and Boy Education and Development Fund (WGBED) is founded on the Christ&#39;s teaching in Mathew 25: 40 
                    “…Whatever you did to one of the least of these brothers and sisters of mine, you did for me.” The fund was formally instituted in the year. However, a lot of education support activities had taken place before then, and now the fund boasts of 20 beneficiaries, some of whom have transited to employment while …. are still in school.</p>
                </div>

                <div className="about-2">
                    <div className="about-2-image">
                        <Image src="../src/assets/father.jpg" alt="Company Logo" style={{height:'25%'}}/>
                    </div>
                    <div className="about-2-content">
                        <h1 className="about">ABOUT THE FOUNDER</h1>
                        <p>Rev. Fr. Sylvanus Wasonga, the founder and CEO of WGBED, is a senior Catholic Priest, an accountant and a proponent women and Children empowerment. He has served in different capacities in the public, private and church domains and has mentored and supported many young people from personal resources and in few occasions with the support of friends. His family and social backgrounds are the motivation for his devotion to women and girlchild empowerment.</p>
                    </div>
                </div>

                <div className="about-3">
                    <p>Rev. Fr. Sylvanus Wasonga, the founder and CEO of WGBED, is a senior Catholic Priest, an accountant and a proponent women and Children empowerment. He has served in different capacities in the public, private and church domains and has mentored and supported many young people from personal resources and in few occasions with the support of friends. His family and social backgrounds are the motivation for his devotion to women and girlchild empowerment.
                    “ My siblings and I are a product of our mother&#39;s dedicated hard work as a vendor at a local municipal market. This fact makes me appreciate the need to empower women, for women influence the lives of many”.
                    Fr. Wasonga is sensitive to the needs of the poor, giving up all his resources to ensure that the lives of the needy he interacts with are transformed.
                    “Working as a Catechist, a local government employee and now as a Priest has exposed me to the needs of children and their families. This has made me sensitive to the plight of the poor and the desire to build a sustainable support system burns in me. I believe that great potentials lie in all people, all they need is a chance to develop”.</p>
                </div>

                <div className="objectives">
                    <div className="objectives-section">
                        <div className="vision">
                            <h1>Our Vision</h1>
                            <p>A world free of poverty.</p>
                        </div>

                        <div className="mission">
                            <h1>Our Mission</h1>
                            <p>To propagate and nurture education and self-reliance.</p>
                        </div>

                        <div className="goal">
                            <h1>Our Goal</h1>
                            <p>To empower poor families so that they can meet their basic needs and give a helping hand to others.</p>
                        </div>
                    </div>
                </div>

                <div className="about-beneficiaries">
                    <h1 className="about">BENEFICIARIES</h1>
                    <p>WGBED targets well performing children from poor families within the urban and peri-urban settlements. These are mainly identified through referrals and direct contacts. The fund has so far benefited 38 beneficiaries. Currently the program has 18 active beneficiaries (students) while … applications are still pending. The target is to reach and empower ….. children and their families in 2024.</p>
                </div>

                <div className="about-beneficiaries">
                    <h1 className="about">WGBED PROGRAMS</h1>
                    <p>The main WGBED programs are:
                        <ol>
                            <li>Education sponsorship: Aims at meeting the educational needs of the children including school fees and education materials and ensuring that the beneficiaries successfully complete their education journey.</li>
                            <li>Economic empowerment: Aims at:
                                <span>
                                    <ul>
                                        <li>Building the economic capacity of families of the sponsored children to enable them support themselves, meet where possible some of the beneficiaries&#39; educational needs and the educational needs of the beneficiaries&#39; siblings.</li>
                                        <li>Building the economic base of the organization through the social enterprise for economic sustainability of the fund.</li>
                                    </ul>
                                </span>
                            </li>
                        </ol>
                    </p>
                </div>

                <Button as="a" variant="success" onClick={() => setUser(null)}>
                    Logout
                </Button>
            </div>
        </>
    )
}