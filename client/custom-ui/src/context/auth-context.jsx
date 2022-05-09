import React, { createContext, useContext, useState } from 'react';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';

import config from '../config';

AWS.config.region = 'eu-central-1';


const AuthContext = createContext();

function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const signIn = ({ email, password }) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
          });
        
          const userPool = new CognitoUserPool({
            UserPoolId: config.USER_POOL_ID,
            ClientId: config.USER_POOL_WEB_CLIENT_ID,
          });
        
          const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });
        
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                setUser(result);
            },
            onFailure: err => {
                console.error(err)
            }
          });
    };

    return (
        <AuthContext.Provider value={{ signIn, user }} {...props} />
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
