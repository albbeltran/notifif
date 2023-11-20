class UserRepository {
    constructor() {
        this.users = [
            {
                id: 1,
                name: "Max",
                role: "alumno"
            },
            {
                id: 2,
                name: "Jorge",
                role: "administrativo"
            }
        ];
    }

    create(user) {
        this.users.push(user);
    }

    find(id) {
        return this.users.filter(user => user.id === Number(id));
    }

    getAll() {
        return this.users;
    }
}

module.exports = UserRepository;