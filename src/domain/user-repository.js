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

    find(id) {
        return this.users.filter(user => user.id === Number(id));
    }

    getAll() {
        return this.users;
    }
}

module.exports = UserRepository;