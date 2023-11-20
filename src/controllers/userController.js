class UserController {
    constructor(userManager) {
        this.userManager = userManager;
    }

    createUser(req, res) {
        const { name, role, password } = req.body;
        const users = this.userManager.createUser(name, role, password);
        res.send(users);
    }

    signIn(req, res) {
        const { id, password } = req.body;
        const user = this.userManager.signIn(id, password);
        res.send(user);
    }

    addFollow(req, res) {
        const { id, authorId } = req.body;
        const user = this.userManager.addFollow(id, authorId);
        res.send(user);
    }
}

module.exports = UserController;