import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const signIn = ({ email, password }) => {
      console.log({ email, password });
    };

    return (
        <AuthContext.Provider value={{ signIn, user }} {...props} />
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
