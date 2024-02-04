const UserController = require('../../controller/user.controller');

const root = {
  getUser: async ({ id }) => {
    try {
      const data = await UserController.getUser(id);
      return data;
    } catch (error) {
      console.error("Error in getUser resolver:", error.message);
      return null; // or throw new Error("Custom error message");
    }
  },
  getUserEmail: async ({ name }) => {
    try {
      const data = await UserController.getUserEmail(name);
      return data;
    } catch (error) {
      console.error("Error in getUserEmail resolver:", error.message);
      return null; // or throw new Error("Custom error message");
    }
  },
};

module.exports = root;
