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
        const author = this.find(authorId)[0];
        user.following = author;

        this.users = this.users.map(u => u.id !== user.id ? u : user);

        return user;
    }

    find(id) {
        return this.users.filter(user => user.id === Number(id));
    }
}

module.exports = UserRepository;