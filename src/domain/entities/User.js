class User {
    // static counter = 0;

    constructor(id, role, password) {
        // this.id = ++User.counter;
        this.id = id;
        // this.name = name;
        this.role = role;
        this.password = password;
    }
}

module.exports = User;