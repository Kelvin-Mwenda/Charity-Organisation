
import { Form, Button} from 'react-bootstrap';
import Title from './Title'

export default function Signup() {
    return (
        <>
            {/* HeaderLayout */}
            <Title/>

            <div className="sign-up" style={{backgroundImage:'url(../src/assets/schoolsupplies.jpg)'}}>
                <h1 className='text-center'>Sign Up</h1>
                <div className="login-intro">
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'10px'}} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Last Name" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'10px'}} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'10px'}} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'10px'}} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" style={{fontStyle: 'oblique', border:'1px solid #057d55', marginBottom:'20px'}} required/>
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
