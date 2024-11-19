import {Image,Button} from 'react-bootstrap';
import { Form } from "react-router-dom"

export default function OneTime() {
    return (
        <>
            <div className="onetime-body">
                <div className="onetime-banner">
                    <div className="banner-image">
                        <Image src="../src/assets/youth.jpg" alt="Company Logo" style={{height:'25%'}}/>
                    </div>

                    <div className="banner-text">
                        We are proudly non-profit, non-corporate and Non-compromised. Thousands of people like you help us stand up for a bright future for a young generation. We rely on donations to carry out our missions to help the invisible children
                    </div>
                </div>

                <div className="onetime-form">                                                                                                                                                                                                                                                          
                    <h1>DONATE NOW</h1>
                    <Form method="post" action="/onetime">
                        <label>
                            <span>Email: </span>
                            <input type="email" name="email" placeholder="Email" required />
                        </label>

                        <label>
                            <span>Amount: </span>
                            <input type="number" name="amount" placeholder="Amount" required />
                        </label>

                        <p><span>Choose Payment</span> secure</p>
                        
                        <Button as="a" variant="success" className="donate-button">
                            Master Card
                        </Button>
                        <Button as="a" variant="success" className="donate-button">
                            Visa
                        </Button>
                        <p>
                            Please read our privacy policy here.  Your payment details will be processed by Braintree, a PayPal company ( for credit/debit cards ) or PayPal  a record of your donations will be stored by our organisatioin. 
                            <span>Other ways to give : SEPA/BACS I Check I Bitcoin</span>
                            Problems donating? Visit our FAQ to most common question.  Still having problems? send us an email.
                        </p>
                    </Form>
                </div>
            </div>
        </>
    )
}
