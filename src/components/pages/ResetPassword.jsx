import { Link } from "react-router-dom"
import { Form, Button } from 'react-bootstrap';

export default function ResetPassword() {
    return (
        <>
            <div className="reset-password">
                <h1 className="text-center" style={{ textAlign: 'start'}}>Reset Password</h1>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'10px'}} placeholder="Enter new password" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm new password" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'20px'}} required/>
                        </Form.Group>
                    <Button variant="success" type="submit" style={{ border:'1px solid #057d55', marginBottom:'20px'}}>
                        Reset Password
                    </Button>
                </Form>
                <p>
                    Already have an account? <Link to="/login" style={{textDecoration:'none', color:'#057d55', cursor:'pointer', backgroundColor:'transparent', border:'none'}}>Login</Link>
                </p>
            </div>
        </>
    )
}
