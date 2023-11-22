const users = [
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
        name: "Alberto",
        password: "ok",
        role: "administrativo"
    },
    {
        id: 4,
        name: "SEFI",
        password: "ok",
        role: "administrativo"
    },
    {
        id: 3,
        name: "Uni.DAO",
        password: "ok",
        role: "administrativo"
    }
]

const follows = [
    { id: 1, followerId: 3, followingId: 1 },
    { id: 2, followerId: 3, followingId: 2 },
    { id: 3, followerId: 1, followingId: 2 },
    { id: 4, followerId: 1, followingId: 3 }
]

const notifications = [
    // {
    //     "id": 1,
    //     "title": "Posada Jorge 1",
    //     "body": "Te invitamos a la posada FIFI",
    //     "authorId": 2,
    //     "authorName": "Jorge"
    // },
    // {
    //     "id": 2,
    //     "title": "Posada Jorge 2",
    //     "body": "Te invitamos a la posada FIFI",
    //     "authorId": 2,
    //     "authorName": "Jorge"
    // },
    // {
    //     "id": 3,
    //     "title": "Posada Alberto",
    //     "body": "Te invitamos a la posada FIFI",
    //     "authorId": 3,
    //     "authorName": "Alberto"
    // }
]

module.exports = {
    notifications,
    users,
    follows
}