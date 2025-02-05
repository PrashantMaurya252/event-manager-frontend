import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const context = createContext()

const GlobalContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [token,setToken] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    // const location = useLocation()
    // let pathname = location.pathname

    const logout=()=>{
        setUser(null)
        setToken(null)
        localStorage.set("user","")
        localStorage.set("token","")
    }

    const provider={
        user:user,
        setUser:setUser,
        token:token,
        setToken:setToken,
        isLoggedIn:isLoggedIn,
        setIsLoggedIn:setIsLoggedIn,
        logout:logout
    }

    useEffect(()=>{
        const currentToken = localStorage.getItem("token")
        const currentUser = localStorage.getItem("user")

        if(currentToken && currentUser){
            setUser(JSON.parse(currentUser))
            setToken(currentToken)
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    },[token])
  return (
    <context.Provider value={provider}>
     {children}
    </context.Provider>
  )
}

export default GlobalContext