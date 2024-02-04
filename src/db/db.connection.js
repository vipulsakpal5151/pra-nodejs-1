const mysql = require('mysql')

class MySQLDatabase {
  constructor() {
    this.dbConfig = {
      host: 'localhost',
      user: 'root',
      password: '', // Replace with your MySQL password
      database: 'test',
    }
    this.connection = mysql.createPool(config);
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.db.connect(err => {
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

  close() {
    return new Promise((resolve, reject) => {
      this.db.end(err => {
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
}


module.exports = MySQLDatabase
