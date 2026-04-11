const User = require('./users');
const Task = require('./task');

//un usuario tiene muchas tareas
User.hasMany(Task);

//Una tarea pertenece a un usuario
Task.belongsTo(User);

module.exports = {User,Task};