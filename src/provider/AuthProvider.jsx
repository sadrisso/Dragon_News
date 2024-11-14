import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const authInfo = {
        name: 'Hi'
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;