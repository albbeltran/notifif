class AuthService {
    matchPassword(attemptPass, password) {
        // bycrypt
        return new Promise((resolve, reject) => {
            if(password === attemptPass) resolve();
            reject();
        })
    }

    hashPassword(plainPassword) {
    }
}

module.exports = AuthService;