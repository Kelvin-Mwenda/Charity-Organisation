import { useLoaderData } from "react-router-dom"
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs'
import FooterLayout from './FooterLayout.jsx'

export default function News() {
    const news = useLoaderData()
    
    return(
        <>
            {/* HeaderLayout */}
            <Header/>
            <Breadcrumbs/>

            <h1 className="text-center" style={{color:'#057d55', fontStyle:'bold'}}>News</h1>
            <div className="projects">
                {news.map(project => (
                    <li key={project.id} style={{ backgroundImage: `url(../src/assets/${project.image})`}}>
                        <h4>{project.title}</h4>
                        <p>{project.content}</p>
                        <p><i style={{color:"white"}}>{project.author}</i></p>
                        <p><i style={{color:"white"}}>{project.date}</i></p>
                    </li>
                ))}
            </div>

            {/* <FooterLayout/> */}
            <FooterLayout/>
        </>
    )
}

//loader function
export const newsLoader = async () => {
    const res = await fetch('http://localhost:4000/news')

    if(!res.ok){
        throw new Error('Could not find the news...')
    }

    return res.json()
}