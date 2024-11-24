import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="error">
            <h1>404 - Page Not Found</h1>
            <p>The page you&#39;re looking for doesn&#39;t exist.</p>
            <p>Go to the <Link to="/" style={{textDecoration:'none', color:'#057d55'}}>Homepage</Link>.</p>
        </div>
    )
}
