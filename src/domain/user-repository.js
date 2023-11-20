class UserRepository {
    constructor() {
        this.users = [
            {
                id: 1,
                name: "Max",
                password: "ok",
                role: "alumno"
            },
            {
                id: 2,
                name: "Jorge",
                password: "ok",
                role: "administrativo"
            },
            {
                id: 3,
                name: "Jorge",
                password: "ok",
                role: "administrativo"
            }
        ];

        this.follows = [
            { id: 1, followerId: 3, followingId: 1 },
            { id: 2, followerId: 3, followingId: 2 },
            { id: 3, followerId: 1, followingId: 2 }
        ]
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

    following(id) {
        const following = [];

        this.follows.forEach(follow => follow.followerId === id ? following.push(this.find(follow.followingId)) : '');

        return following;
    }

    find(id) {
        return this.users.filter(user => user.id === Number(id))[0];
    }
}

module.exports = UserRepository;