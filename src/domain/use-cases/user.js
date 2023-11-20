const User = require("../entities/User");
const Follow = require("../entities/Follow");

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

    getById(id) {
        const user = this.userRepository.find(id);
        return user;
    }

    addFollow(id, authorId) {
        const follow = new Follow(id, authorId);
        const user = this.userRepository.follow(follow);
        return user;
    }

    getFollowingById(id) {
        const users = this.userRepository.following(id);
        return users;
    }
    
    getAllFollows() {
        return this.userRepository.getAllFollows();
    }
}

module.exports = UserManager;