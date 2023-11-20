class AuthService {
    matchPassword(attemptPass, password) {
        // bycrypt
        if(password === attemptPass) return true;
        return false;
    }

    hashPassword(plainPassword) {
    }
}

module.exports = AuthService;