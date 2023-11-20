const User = require("../entities/User");

class UserManager {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    createUser(id, name, role) {
        const user = new User(id, name, role);
        this.userRepository.create(user);
        return user;
    }

    signIn(id, password) {
        const user = this.userRepository.find(id);
        const sucess = this.authService.matchPassword(password, user[0].password)
        if(sucess) return user;
        return null;
    }
}

module.exports = UserManager;