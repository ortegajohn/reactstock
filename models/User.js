 module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("iStock_users", {
   first_name: DataTypes.STRING,
   last_name: DataTypes.STRING,
   username: DataTypes.STRING,
   password: DataTypes.STRING
  });
  return User;
};
