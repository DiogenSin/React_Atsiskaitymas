import { NavLink } from "react-router-dom"

const Footer = () => {

    return (

        <>
        <footer>
        <img src="https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png" alt="" />
        <ul>
            <h4>For visitors</h4>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/registration">Registration</NavLink></li>
        </ul>
        <ul>
            <h4>For members</h4>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/new-Article">Add an Article</NavLink></li>
        </ul>
        <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Negros&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </footer>
        </>
    )
}

export default Footer