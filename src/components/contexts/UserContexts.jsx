import { createContext, useState, useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [userList, setUserList] = useState(null)
    const [loginFailed, setLoginFailed] = useState(false)


    const getUserData = async() => {

        const fetchData = await fetch('http://localhost:3001/users')
        .then (res => res.json())
        setUserList(fetchData)
    }

    const handleLogin = (loginData) => {

        const loginVerification = userList.find(user => user.email === loginData.email && user.password === loginData.password)
        
        loginVerification ? setLoggedIn(true) : setLoginFailed(true)
    }


    useEffect(() => {
        getUserData()
      }, [])


    return (

        <UserContext.Provider
            value={{
                handleLogin,
                loggedIn,
                loginFailed
            }}
        >
            {children}
        </UserContext.Provider>

    )

}


export { UserProvider }
export default UserContext
