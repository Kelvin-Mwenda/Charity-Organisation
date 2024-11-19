
import { Form, Button} from 'react-bootstrap';

export default function Login() {
    return (
        <>
            <div className="sign-up">
                <div className="signup-form" style={{backgroundImage:'url(../src/assets/schoolsupplies.jpg)'}}>
                <h1>Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" required/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
