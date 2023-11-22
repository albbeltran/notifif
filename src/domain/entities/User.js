class User {
    // static counter = 0;

    constructor(id, name, password, role) {
        // this.id = ++User.counter;
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}

module.exports = User;