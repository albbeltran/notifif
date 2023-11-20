class User {
    static counter = 0;

    constructor(name, role, password) {
        this.id = ++User.counter;
        this.name = name;
        this.role = role;
        this.password = password;
    }
}

module.exports = User;