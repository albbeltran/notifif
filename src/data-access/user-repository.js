const { users } = require("../../data");
const { follows } = require("../../data");

class UserRepository {
    constructor() {
        this.users = users;
        this.follows = follows;
    }

    create(user) {
        this.users.push(user);
        return this.users;
    }

    getAll() {
        return this.users;
    }

    follow(newFollow) {
        this.follows.push(newFollow);
        const followingUser = this.find(newFollow.followingId);

        return followingUser;
    }

    unfollow(visitorId, profileId) {
        return this.follows.filter(follow => !(follow.followerId === Number(visitorId) && follow.followingId === Number(profileId)));
    }

    following(id) {
        const following = [];

        this.follows.forEach(follow => follow.followerId === Number(id) ? following.push(this.find(follow.followingId)) : '');

        return following;
    }

    getAllFollows() {
        return this.follows;
    }

    isFollowing(visitorId, profileId) {
        return this.follows.filter(follow => follow.followerId === Number(visitorId) && follow.followingId === Number(profileId));
    }

    find(id) {
        return this.users.filter(user => user.id === Number(id))[0];
    }
}

module.exports = UserRepository;