import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../contexts/UserContexts'

const Menu = () => {

    const { loggedIn } = useContext(UserContext)

    return (
        <>
            <nav>
                <ul>
                    {
                        loggedIn ?
                        <>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/add">Add</NavLink></li>
                        </>
                        :
                        <>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/registration">Registration</NavLink></li>
                        </>
                    }
                </ul>
            </nav>
        </>
    )
}

export default Menu