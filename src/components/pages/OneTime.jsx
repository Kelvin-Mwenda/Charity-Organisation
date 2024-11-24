import { useState } from 'react';
import {Image,Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export default function OneTime() {
    const [send,setSend] = useState(false);

    function contact() {
        setSend(true);
        if (send === true) {
            <Navigate to="contact"/>
        }
    }

    return (
        <>
            <div className="one-timeP">
                <div className="onetime-banner">
                    <div className="banner-image mb-2">
                        <Image src="../src/assets/youth.jpg" alt="Company Logo" className="img-fluid"/>
                    </div>

                    <div className="banner-text">
                        We are proudly non-profit, non-corporate and Non-compromised. Thousands of people like you help us stand up for a bright future for a young generation. We rely on donations to carry out our missions to help the invisible children
                    </div>
                </div>

                <div className="onetime-form">                                                                 
                    <h1>ONE TIME DONATION</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label style={{color:'#057d55'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicAmount" className="mb-3">
                            <Form.Label style={{color:'#057d55'}}>Amount</Form.Label>
                            <Form.Control type="number" placeholder="$" required/>
                        </Form.Group>
                        <div className="justify-content-center mb-3">
                            <Button type="submit" variant="success" className="donate-button ms-5">
                                Master Card
                            </Button>
                            <Button type="submit" variant="success" className="donate-button ms-3">
                                Visa
                            </Button>
                        </div>
                    </Form>
                    <p>
                        Please read our privacy policy here.  Your payment details will be processed by Braintree, a PayPal company ( for credit/debit cards ) or PayPal  a record of your donations will be stored by our organisatioin. <br/>
                        <span>Other ways to give : <b><i>SEPA/BACS I Check I Bitcoin</i></b></span><br/>
                        Problems donating? Visit our FAQ to most common question.  Still having problems? <Button type="submit" onClick={contact} className="ms-0 p-0" style={{textDecoration:'none', color:'#057d55', cursor:'pointer', backgroundColor:'transparent', border:'none'}}>
                            send us an email.
                        </Button>
                    </p>
                    
                </div>
            </div>
        </>
    )
}
