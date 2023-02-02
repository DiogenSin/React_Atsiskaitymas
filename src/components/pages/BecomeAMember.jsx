import { NavLink } from "react-router-dom"

const BecomeAMember = () => {

    return (

        <div id="becomeAMember">
            <h3>Want to read our Articles or add one?</h3>
            <h1>Become a Member!</h1>
            <button type="button"><NavLink to="/registration">Registration</NavLink></button>
        </div>
    )
}

export default BecomeAMember