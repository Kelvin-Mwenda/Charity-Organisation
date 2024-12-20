import { Link, useLocation } from "react-router-dom"


export default function Breadcrumbs() {
    const location = useLocation()
    let currentLink = ""

    // const crumbs = location.pathname.split("/").filter(crumb => crumb!== "")
    //     .map(crumb =>{
    //         currentLink += `/${crumb}`
            
    //         return(
    //             <div className="crumb" key={crumb}>
    //                 {/* <Link to="/">Home &rarr; </Link> */}
    //                 <Link to={currentLink}>{crumb}</Link>
    //             </div>
    //         )
    //     })

    const capitalizeWords = (str) => {
        return str
            .split(" ") // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
            .join(" "); // Join the words back
    };

    const crumbs = location.pathname
        .split("/")
        .filter(crumb => crumb !== "")
        .map(crumb => {
            currentLink += `/${crumb}`;

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{capitalizeWords(crumb)}</Link>
                </div>
            );
        });


    return (
        <div className="breadcrumbs" > 
            {crumbs}
        </div>
    )
}
