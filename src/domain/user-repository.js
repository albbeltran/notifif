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
            {
                "id": 1,
                "authorId": 2
            },
            {
                "id": 3,
                "authorId": 1
            }
        ]
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
        const user = this.find(id);
        const author = this.find(authorId);
    
        const newFollow = {
            id: ++this.follows.length,
            followedId: user.id,
            followingId: author.id
        }

        this.follows.push(newFollow);

        return newFollow;
    }

    following(id) {
        const following = [];
    
        this.follows.forEach(follow => follow.id === id ? following.push(this.find(follow.authorId)) : '');
    
        return following;
    }

    find(id) {
        return this.users.filter(user => user.id === Number(id))[0];
    }
}

module.exports = UserRepository;