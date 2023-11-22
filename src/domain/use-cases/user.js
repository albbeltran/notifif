const User = require("../entities/User");
const Follow = require("../entities/Follow");

class UserManager {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    create(id, name, password, role) {
        const user = new User(id, name, password, role);
        const users = this.userRepository.create(user);
        return users;
    }

    async signIn(id, password) {
        try {
            const user = this.userRepository.find(id);
            await this.authService.matchPassword(password, user.password);
            return user;
        } catch {
            return null;
        }
    }

    getById(id) {
        const user = this.userRepository.find(id);
        return user;
    }

    getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    addFollow(id, authorId) {
        const follow = new Follow(id, authorId);
        const user = this.userRepository.follow(follow);
        return user;
    }

    removeFollow(visitorId, profileId) {
        return this.userRepository.unfollow(visitorId, profileId);
    }

    getFollowingById(id) {
        const users = this.userRepository.following(id);
        return users;
    }

    getAllFollows() {
        return this.userRepository.getAllFollows();
    }

    isFollowing(visitorId, profileId) {
        const isFollowing = this.userRepository.isFollowing(visitorId, profileId);
        console.log(isFollowing)
        if(!isFollowing.length) return false;
        return true;
    }
}

module.exports = UserManager;