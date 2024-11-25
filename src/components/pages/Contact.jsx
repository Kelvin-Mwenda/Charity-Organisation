//import FooterLayout from '../src/components/layouts/FooterLayout.jsx'
import { redirect, useActionData } from "react-router-dom"
import { Form, Button} from 'react-bootstrap';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTiktok,
    faLinkedin,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import FooterLayout from './FooterLayout.jsx'


export default function Contact() {
    const data = useActionData()

    return(
        <>
            <div className="home-intro">
                

                <div className="contact">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="contact-us">
                        <div className="contact-us-form">
                            <Form method="post" action="/contact">
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Your Full name</Form.Label>
                                    <Form.Control type="name" name="name" placeholder="Full name" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'10px'}} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Email" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'10px'}} required/>
                                </Form.Group>
                                {data && data.error && <p>{data.error}</p>}
                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        name="message" 
                                        rows={4} 
                                        placeholder="Write your message here" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'20px'}} 
                                        required 
                                    />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        <div className="contact-us-brief">
                            <div>
                                <p><FontAwesomeIcon icon={faMobileAlt} size="1x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/></p>
                                <p style={{marginLeft:'-10px'}}>0720803208</p>
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faEnvelope} size="1x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/></p> 
                                    <p>wasilpaul@yahoo.com </p>
                            </div>
                            <div><p>123 Charity Avenue</p><p></p></div>
                            <div className="mb-5"><p>ELDORET,  KENYA, 30100</p><p></p></div>

                            {/* Social Media Icons */}
                            <div className="social-media-styles">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/>
                                </a>
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTiktok} size="2x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/>
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/>
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* <FooterLayout/> */}
            <FooterLayout/>
        </>
    )
}

export const contactAction = async ({request}) => {
    console.log(request)
    const data = await request.formData()

    const submission =  {
        email: data.get('email'),
        message: data.get('message'),
    }

    if(submission.message.length < 10){
        return{error: 'Message should be more than 1o words...'}
    }

    console.log(submission)
    return redirect('/contact')
}