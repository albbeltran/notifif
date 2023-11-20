const User = require("../entities/User");


class UserManager {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    createUser(id, name, role) {
        const user = new User(id, name, role);
        this.userRepository.create(user);
        return user;
    }

    findUser(id) {
        const user = this.userRepository.find(id);
        // auth

        return user;

        // if(success) return user;
        // return null;
    }
}

module.exports = UserManager;