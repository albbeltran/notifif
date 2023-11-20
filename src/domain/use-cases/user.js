const User = require("../entities/User");

class UserManager {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    createUser(name, role, password) {
        const user = new User(name, role, password);
        console.log(user)
        const users = this.userRepository.create(user);
        return users;
    }

    signIn(id, password) {
        const user = this.userRepository.find(id);
        const sucess = this.authService.matchPassword(password, user[0].password)
        if(sucess) return user;
        return null;
    }

    addFollow(id, authorId) {
        const user = this.userRepository.follow(id, authorId);
        return user;
    }
}

module.exports = UserManager;