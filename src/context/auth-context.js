import React, {useState, useEffect} from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedIn === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', '1')
  
  };


    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}
