import {Image} from 'react-bootstrap';

export default function Title() {
    return (
        <>
            <div className="title">
                <a href="/">
                    <Image xs={3} src="../src/assets/wasonga.jpg" alt="Company Logo" className="logo d-md-none d-lg-block"/>
                </a>
                <div className="title-description" style={{color:'rgb(5, 125, 85)',fontSize: '0.5rem',margin:'0'}}>
                    <h1>FR. WASONGA&#39;S GIRLS AND BOY EDUCATIONAL AND DEVELOPMENT FUND</h1>
                    <p  style={{fontSize: '12px',margin:'0'}}>P. O. Box 5145 – 30100 ELDORET – KENYA
                        TEL: 0720803208, EMAIL: wasilpaul@yahoo.com 
                    </p>
                </div>
            </div>
        </>
    )
}
