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

    getUserById(req, res) {
        const {id} = req.body;
        const user = this.userManager.getUserById(id);
        res.send(user);
    }

    addFollow(req, res) {
        const { id, authorId } = req.body;
        const user = this.userManager.addFollow(id, authorId);
        res.send(user);
    }

    getFollowingById(req, res) {
        const {id} = req.body;
        const users = this.userManager.getFollowingById(id);
        res.send(users);
    }
}

module.exports = UserController;