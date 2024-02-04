const db = require('../../src/db/db.connection');

class UserController {
    constructor() {}

    static async getUser(id) {
        const data = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE id = ?', [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        console.log("getUser || data::", data)
        return data[0];
    }
}

module.exports = UserController;
