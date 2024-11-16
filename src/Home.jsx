
import {Image,Button} from 'react-bootstrap';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export default function Home () {
    const {text} = useTypewriter(
        {
            words: ["Compassion", "Hope", "Love"],
            loop:{},
            typeSpeed: 150,
            deleteSpeed:100
        }
    )
    return(
        <>
            <div className="hero-section" style={{backgroundImage : 'url(../src/assets/schoolsupplies.jpg)'}}>
                <div className="home-verse ms-3">
                    <h1 className="mb-5">Empowering Communities with {''} 
                        <span>
                            {text}
                            <Cursor />
                        </span>
                    </h1>
                
                    <p>
                        The fund was formally instituted in the year …. However a lot of education support activities had taken place before then, and now the fund boasts of 20 beneficiaries, some of whom have transited to employment while …. are still in school.
                    </p>
                    <Button as="a" variant="success">
                        Donate
                    </Button>
                </div>
            </div> 

            <div className="home-content">
                <div className="home-intro">
                    <h1>ABOUT US</h1>
                    <div className="about-us">
                        <div className="about-text">
                            <p>
                                The <b>Fr. Wasonga Education and Development</b> Fund is a non-governmental organization supporting the educational and development needs of Children with a special focus on girls who have over the years, been exposed to different types of vulnerabilities, and the boy child, whose plight is emerging as a key issue of concern in the modern world.
                            </p>
                            <p>
                                The Wasonga Girls and Boy Education and Development Fund (WGBED) is founded on the Christ&#39;s teaching in.
                            </p>
                            <p className="home-verse">
                                <b>Mathew 25: 40</b><br/><i>&#39;…Whatever you did  to  one of least of these brothers and sisters of mine, you did for me.&#39;</i></p><p>The fund was formally instituted in the year …. However a lot of education support activities had taken place before then, and now the fund boasts of 20 beneficiaries, some of whom have transited to employment while …. are still in school.
                            </p>
                        </div>
                        <div className="about-image">
                            <Image xs={4} src="../src/assets/youth.jpg" alt="Company Logo" style={{height:'25%'}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="objectives">
                <div className="objectives-section">
                    <div className="vision">
                            <h1>Our Vision</h1>
                            <p>A world free of poverty</p>
                    </div>

                    <div className="mission">
                            <h1>Our Mission</h1>
                            <p>To propagate and nurture education and self-reliance .</p>
                    </div>

                    <div className="goal">
                            <h1>Our Goal</h1>
                            <p>To empower poor families so that they can meet their basic needs and give a helping hand to others.</p>
                    </div>
                </div>
            </div>

            <div className="strategy">
                <h1>STRATEGY</h1>
                <p>
                    <ol>
                        <li>To identify and support bright students from needy households and support them through their education process while helping them and their families to rise economically through entrepreneurship and self-employment. </li>
                        <li>Integrating social entrepreneurship within the sponsorship program to enhance its sustainability.</li>
                    </ol>
                </p>
            </div>

            <div className="sponsors">
                <h1>Our Sponsors</h1>
                <p>
                    The programs of FGBED have over the years been supported through the Founder’s personal savings, allowances and income generating activities and, in few occasions, through appeals to well-wishers.
                </p>
            </div>

            <div className="current-situation">
                <div className="current-situation-details">
                    <h1>Current Situation</h1>
                    <div className="situation-details">
                        <div>
                            <h4>The Program has sized down the number of beneficiaries and some are out of school for lack of funds.</h4>
                            <p>The increased financial demands on educational needs aggravated by social factors that saw a change in the management of family premises on which the program’s income generating activities were run and the ministry/apostolate dynamics, a huge financial gap exists.</p>
                        </div>
                        <div>
                            <h4>A high risk of cyclic dependency and poverty due to the low economic levels of the beneficiaries&#39; families. </h4>
                            <p>Over 95% of them can hardly meet their basic needs. Without concrete empowerment interventions, the sponsorship program may take long to bear on poverty reduction.</p>
                        </div>
                    </div>
                    <div className="whats-next">
                        <h2>What’s Next</h2>
                        <p>
                            We seek to broaden our economic base to be able to reach and empower more poor children and families, and more importantly to increase the transition rate from illiteracy to literacy, from poverty to economic independence. To achieve this:
                        </p>
                        <ol>
                            <li>We invite well-wishers, individual and cooperate donors to join hands with us to transform lives of vulnerable children</li>
                            <li>We invite well-wishers, individual and cooperate donors to join hands with us to transform lives of vulnerable children</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonial">
                    <div className="testimonial-image">
                        <img src="" alt="testimonial image"/>
                    </div>
                    <div className="testimonial-text">
                        <h3>Halima</h3>
                        <p>“The impact of AAM Nation Care extends beyond education. They have provided essential medical care that was previously out of reach for us. Regular health check-ups and access to necessary treatments have improved our family&#39;s overall well-being. Knowing that my children are healthy brings me immense peace of mind.”</p>
                    </div>
                </div>
            </div>

        </>
    )
}
