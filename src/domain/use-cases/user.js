const User = require("../entities/User");

class UserManager {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    create(name, role, password) {
        const user = new User(name, role, password);
        const users = this.userRepository.create(user);
        return users;
    }

    signIn(id, password) {
        const user = this.userRepository.find(id);
        const sucess = this.authService.matchPassword(password, user.password)
        if(sucess) return user;
        return null;
    }

    addFollow(id, authorId) {
        const user = this.userRepository.follow(id, authorId);
        return user;
    }

    getFollowingById(id) {
        const users = this.userRepository.following(id);
        return users;
    }

    getById(id) {
        const user = this.userRepository.find(id);
        return user;
    }
}

module.exports = UserManager;