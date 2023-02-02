import { NavLink } from "react-router-dom"
import UserContext from "../contexts/UserContexts"
import { useContext } from "react"

const Footer = () => {

    const { loggedIn } = useContext(UserContext)

    return (

        <>
        <footer>
        <img src="https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png" alt="" />
          
            {
                loggedIn ?
                <ul>
                    <h4>For members</h4>
                    <li><NavLink to="/home">Articles</NavLink></li>
                    <li><NavLink to="/add">Add an Article</NavLink></li>
                </ul>
                :
                <>
                <ul>
                    <h4>For visitors</h4>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/registration">Registration</NavLink></li>
                </ul>
                <ul>
                    <h4>For members</h4>
                    <li><NavLink to="/become-a-member">Articles</NavLink></li>
                    <li><NavLink to="/become-a-member">Add an Article</NavLink></li> 
                </ul>
                </>
            }
        <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Negros&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </footer>
        </>
    )
}

export default Footer