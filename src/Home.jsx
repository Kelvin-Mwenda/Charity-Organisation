
//import FooterLayout from '../src/components/layouts/FooterLayout.jsx'
import { Image, Button } from 'react-bootstrap';
import { useTypewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTiktok,
    faLinkedin,
    faTwitter,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/scss/bootstrap.scss';




export default function Home () {
    const [text] = useTypewriter(
        {
            words: ["Compassion", "Hope", "Love"],
            typeSpeed: 150,
            deleteSpeed:100,
            loop: true,
        }
    )

    function scrollleft(){
        var left = document.querySelector('.testimonial');
        left.scrollBy(370,0);
    }

    function scrollright(){
        var right = document.querySelector('.testimonial');
        right.scrollBy(-370,0);
    }

    return(
        <>
            <div className="hero-section" style={{backgroundImage : 'url(../src/assets/schoolsupplies.jpg)'}}>
                <div className="home-verse">
                    <h1 className="mb-2">Empowering Communities with {''} 
                        <span style={{color:'#00b60f'}}>
                            {text}
                            {/* <Cursor cusorStyle={{ visibility: 'hidden', display:'none' }} /> */}
                        </span>
                    </h1>
                
                    <p>
                        Supporting the educational and development needs of Children with a special focus 
                    </p>
                </div>
            </div> 

            <div className="home-content">
                <div className="home-intro">
                    <div className="about-text">
                        <h1 className="text-center" style={{color:'#057d55', fontStyle:'bold'}}>ABOUT US</h1>
                        <p>
                            The <b>Fr. Wasonga Education and Development Fund</b> is a non-governmental organization supporting the educational and development needs of Children with a special focus on girls who have over the years, been exposed to different types of vulnerabilities, and the boy child, whose plight is emerging as a key issue of concern in the modern world.
                        </p>
                    </div>
                    <div className="about-image">
                        <Image xs={4} src="../src/assets/youth.jpg" alt="Company Logo" style={{height:'75%'}} className="about-image"/>
                    </div>
                </div>
                <div className="about-extra text-center p-5">
                    <p>
                        The Wasonga Girls and Boy Education and Development Fund is founded on the Christ&#39;s teaching in.
                    </p>
                    <p className="home-verse">
                        <b>Mathew 25: 40</b><br/><i>&#x22;…Whatever you did  to  one of least of these brothers and sisters of mine, you did for me.&#x22;</i></p><p>The fund was formally instituted in the year. However, a lot of education support activities had taken place before then, and now the fund boasts of 20 beneficiaries, some of whom have transited to employment while some are still in school.
                    </p>
                </div>
            </div>

            <div className="objectives mb-3">
                <div className="objectives-section">
                    <div className="vision">
                        <h1 className="text-center">Vision</h1>
                        <p className="text-center">A world free of poverty</p>
                    </div>

                    <div className="mission">
                        <h1 className="text-center">Mission</h1>
                        <p className="text-center">To propagate and nurture education and self-reliance .</p>
                    </div>

                    <div className="goal">
                        <h1 className="text-center">Goal</h1>
                        <p className="text-center">To empower poor families so that they can meet their basic needs and give a helping hand to others.</p>
                    </div>
                </div>
            </div>

            <div className="strategy">
                <h1 className="text-center">STRATEGY</h1>
                <p>
                    <ol>
                        <li>To identify and support bright students from needy households and support them through their education process while helping them and their families to rise economically through entrepreneurship and self-employment. </li>
                        <li>Integrating social entrepreneurship within the sponsorship program to enhance its sustainability.</li>
                    </ol>
                </p>
            </div>

            <div className="sponsors">
                <h1 className="text-center">Our Sponsors</h1>
                <p className="text-center">
                    The programs of FGBED have over the years been supported through the Founder’s personal savings, allowances and income generating activities and, in few occasions, through appeals to well-wishers.
                </p>
                <marquee className="marquee-style">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-style" />
                        </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} size="2x" className="icon-style" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-style" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="icon-style" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon-style" />
                    </a>
                </marquee>
            </div>

            <div className="current-situation mb-5">
                <h1 className="text-center" style={{color:'white'}}>Current Situation</h1>
                <div className="current-situation-details">
                    <div className="situation-details1">
                        <h3>Inadequate funds in the program.</h3>
                        <p>The increased financial demands on educational needs aggravated by social factors that saw a change in the management of family premises on which the program’s income generating activities were run and the ministry/apostolate dynamics, a huge financial gap exists.</p>
                    </div>

                    <div className="situation-details2">
                        <h3>High risk of cyclic dependency and poverty by the Beneficiaries&#39; families. </h3>
                        <p>Over 95% of them can hardly meet their basic needs. Without concrete empowerment interventions, the sponsorship program may take long to bear on poverty reduction.</p>
                    </div>
                </div>

                <div className="whats-next">
                    <h2 className="text-center">What’s Next</h2>
                    <p>
                        We seek to broaden our economic base to be able to reach and empower more poor children and families, and more importantly to increase the transition rate from illiteracy to literacy, from poverty to economic independence. To achieve this:
                    </p>
                    <ol>
                        <li>We invite well-wishers, individual and cooperate donors to join hands with us to transform lives of vulnerable children</li>
                        <li>We invite well-wishers, individual and cooperate donors to join hands with us to transform lives of vulnerable children</li>
                    </ol>
                </div>
            </div>

            <div className="testimonials">
                <h1 className="text-center">
                    Testimonials
                </h1>

                <div className="testimonial-container">
                    <div className="scroll-button ms-2">
                        <Button variant="success" className="icon" onClick={() => {scrollright()}}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </Button>
                    </div>

                    <div className="testimonial">

                        <div className="testimonial-text">
                            <div className="testimonial-image">
                                <img src="./src/assets/contact-us.jpg" alt="testimonial image" className="test-image"/>
                            </div>
                            <div className="test-text">
                                <h3 className="text-center">Halima</h3>
                                <p className="text-center">
                                    “The impact of AAM Nation Care extends beyond education. They have provided essential medical care that was previously out of reach for us. Regular health check-ups and access to necessary treatments have improved our family&#39;s overall well-being. Knowing that my children are healthy brings me immense peace of mind.”
                                </p>
                            </div>
                            
                        </div>

                        <div className="testimonial-text">
                            <div className="testimonial-image">
                                <img src="./src/assets/contact-us.jpg" alt="testimonial image" className="test-image"/>
                            </div>
                            <div className="test-text">
                                <h3 className="text-center">Halima</h3>
                                <p className="text-center">
                                    “The impact of AAM Nation Care extends beyond education. They have provided essential medical care that was previously out of reach for us. Regular health check-ups and access to necessary treatments have improved our family&#39;s overall well-being. Knowing that my children are healthy brings me immense peace of mind.”
                                </p>
                            </div>
                            
                        </div>

                        <div className="testimonial-text">
                            <div className="testimonial-image">
                                <img src="./src/assets/contact-us.jpg" alt="testimonial image" className="test-image"/>
                            </div>
                            <div className="test-text">
                                <h3 className="text-center">Halima</h3>
                                <p className="text-center">
                                    “The impact of AAM Nation Care extends beyond education. They have provided essential medical care that was previously out of reach for us. Regular health check-ups and access to necessary treatments have improved our family&#39;s overall well-being. Knowing that my children are healthy brings me immense peace of mind.”
                                </p>
                            </div>
                            
                        </div>

                        <div className="testimonial-text">
                            <div className="testimonial-image">
                                <img src="./src/assets/contact-us.jpg" alt="testimonial image" className="test-image"/>
                            </div>
                            <div className="test-text">
                                <h3 className="text-center">Halima</h3>
                                <p className="text-center">
                                    “The impact of AAM Nation Care extends beyond education. They have provided essential medical care that was previously out of reach for us. Regular health check-ups and access to necessary treatments have improved our family&#39;s overall well-being. Knowing that my children are healthy brings me immense peace of mind.”
                                </p>
                            </div>
                            
                        </div>

                    </div>

                    <div className="scroll-button">
                        <Button variant="success" className="icon" onClick={scrollleft}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* <FooterLayout/> */}
        </>
    )
}
