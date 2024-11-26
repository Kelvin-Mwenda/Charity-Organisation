import { Link, useRouteError } from "react-router-dom"
import Title from './Title'

export default function ProjectsError() {
    const error = useRouteError()
    
    return (
        <>
            {/* HeaderLayout */}
            <div className="shadow-sm">
                <Title/>
            </div>

            <div className="error">
                <h1>Fetching Data Error</h1>
                <p>{error.message}</p>
                <p>Go to the <Link to="/" style={{textDecoration:'none', color:'#057d55'}}>Homepage</Link>.</p>
            </div>
        </>
    )
}
