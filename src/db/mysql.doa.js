// dbConfig.js
const mysql = require('mysql');

class Database {
  constructor() {
    this.connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test',
    })
  }

  query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}

module.exports = Database;
