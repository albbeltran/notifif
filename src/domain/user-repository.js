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
            }
        ];

        this.follows = []
    }

    create(user) {
        user.id = this.users.length + 1;
        this.users.push(user);
        return this.users;
    }

    getAll() {
        return this.users;
    }

    follow(id, authorId) {
        const user = this.find(id)[0];
        const following = this.find(authorId)[0];
    
        const newFollow = {
            id: this.follows.length++,
            followedId: user.id,
            followingId: following.id
        }

        this.follows.push(newFollow);

        return newFollow;
    }

    find(id) {
        return this.users.filter(user => user.id === Number(id));
    }
}

module.exports = UserRepository;