import { Form, Image, Button } from 'react-bootstrap';

export default function MonthlyPayment() {
    return (
        <>
            <div className="monthly-body">
                <div className="monthly-banner">
                    <div className="banner-image">
                        <Image src="../src/assets/youth.jpg" alt="Company Logo" style={{height:'25%'}}/>
                    </div>

                    <div className="banner-text">
                        We are proudly non-profit, non-corporate and Non-compromised. Thousands of people like you help us stand up for a bright future for a young generation. We rely on donations to carry out our missions to help the invisible children
                    </div>
                </div>

                <div className="monthly-form">
                    <h1>DONATE NOW</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicFrequency">
                            <Form.Label>How Often</Form.Label>
                            <Form.Control as="select" required>
                                <option value="" disabled>
                                    -- Select an option --
                                </option>
                                <option value="weekly">Weekly</option>
                                <option value="fortnight">Fortnight</option>
                                <option value="monthly">Monthly</option>
                                <option value="annually">Annually</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="$" required/>
                        </Form.Group>

                        <Button type="submit" variant="success" className="donate-button ms-2">
                            Master Card
                        </Button>

                        <Button type="submit" variant="success" className="donate-button ms-2">
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
