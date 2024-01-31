const db = require('../../db/db.connection');

// Your resolver functions
const root = {
    getUser: ({ id }) => {
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user WHERE id = ?', [id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0]);
          }
        });
      });
    },
    getUserEmail: ({ name }) => {
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user WHERE name = ?', [name], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0]);
          }
        });
      });
    },
  };

module.exports = root