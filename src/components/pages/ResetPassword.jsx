import { Link } from "react-router-dom"
import { Form, Button } from 'react-bootstrap';

export default function ResetPassword() {
    return (
        <>
            <div className="reset-password">
                <h1>Reset Password</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Reset Password
                    </Button>
                </Form>
                <p>
                    Already have an account? <Link to="login">Login</Link>
                </p>
            </div>
        </>
    )
}
