const AuthContext = {
    user: null,
    setUser: (user) => {
        AuthContext.user = user;
    }
};

function useAuth() {
    return AuthContext;
}

function AuthProvider(props) {
    AuthContext.user = props.user;
    return props.children;
}

export { AuthProvider, useAuth };