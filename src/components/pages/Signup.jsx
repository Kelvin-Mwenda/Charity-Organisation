
import { Form, Button} from 'react-bootstrap';

export default function Signup() {
    return (
        <>
            <div className="sign-up">
                <div className="signup-form" style={{backgroundImage:'url(../src/assets/schoolsupplies.jpg)'}}>
                <h1>Sign Up</h1>
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Last Name" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" required/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
