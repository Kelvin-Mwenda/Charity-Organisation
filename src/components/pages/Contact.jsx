import {  Form, redirect, useActionData } from "react-router-dom"
import { Button } from 'react-bootstrap';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTiktok,
    faLinkedin,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
    const data = useActionData()

    return(
        <>
            <div className="contact">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                </div>

                <div className="contact-us">
                    <div className="contact-us-form">
                        <Form method="post" action="/contact">
                            <label>
                                <span>Your Full name: </span>
                                <input type="name" name="name" required />
                            </label>

                            <label>
                                <span>Your email: </span>
                                <input type="email" name="email" required />
                            </label>

                            {data && data.error && <p>{data.error}</p>}

                            <label>
                                <span>Your message: </span>
                                <textarea name="message" required></textarea>
                            </label>
                            <Button as="a" variant="success" className="donate-button">
                                Submit
                            </Button>
                        </Form>
                    </div>

                    <div className="contact-us-brief">
                        <p>
                            <span><FontAwesomeIcon icon={faMobileAlt} size="2x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/></span>
                                0720803208
                        </p>
                        <p>
                            <span><FontAwesomeIcon icon={faEnvelope} size="2x" className="icon-style" style={{color:'rgb(5, 125, 85'}}/></span>
                                wasilpaul@yahoo.com 
                        </p>

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