const mysqlDb = require('./db.connection')

class DBUtils {
    constructor() {
        this.dbInstance = new mysqlDb()
    }

    async datad() {
        return "OKAY"
    }

    async connect() {
        return new Promise((resolve, reject) => {
            this.dbInstance.db.connect(err => {
                if (err) {
                console.error('MySQL connection error:', err)
                reject(err)
                } else {
                console.log('Connected to MySQL')
                resolve()
                }
            })
        })
    }

    async close() {
        return new Promise((resolve, reject) => {
            this.dbInstance.db.end(err => {
                if (err) {
                console.error('Error closing MySQL connection:', err)
                reject(err)
                } else {
                console.log('MySQL connection closed')
                resolve()
                }
            })
        })
    }

    async executeQuery(query, params = []) {
        console.log('MySQL executeQuery ===', this.dbInstance)
        if (!this.dbInstance) {
            this.dbInstance = new mysqlDb()
        }
        await this.connect()



        return new Promise((resolve, reject) => {
            this.dbInstance.db.query(query, params, (err, results) => {
                if (err) {
                reject(err)
                } else {
                resolve(results)
                }
            })
        }).finally(() => this.close())
    }
}

module.exports = DBUtils  