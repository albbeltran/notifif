class UserController {
    constructor(userManager) {
        this.userManager = userManager;
    }

    create(req, res) {
        const { id, role, password } = req.body;
        const users = this.userManager.create(id, role, password);
        res.send(users);
    }

    async signIn(req, res) {
        const { id, password } = req.body;
        const user = await this.userManager.signIn(id, password);
        res.json(user);
    }

    getById(req, res) {
        const id = req.params.id;
        const user = this.userManager.getById(id);
        res.send(user);
    }

    addFollow(req, res) {
        const { id, authorId } = req.body;
        const user = this.userManager.addFollow(id, authorId);
        res.send(user);
    }

    getFollowingById(req, res) {
        const id = req.params.id;
        const users = this.userManager.getFollowingById(id);
        res.send(users);
    }

    getAllFollows(req, res) {
        const follows = this.userManager.getAllFollows();
        res.send(follows);
    }
}

module.exports = UserController;