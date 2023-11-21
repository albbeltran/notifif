import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

function AuthProvider(props) {
    const [user, setUser] = useState(null);

    return <AuthContext.Provider {...props} value={{ user, setUser }} />;
}

export { AuthProvider, useAuth };