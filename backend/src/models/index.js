const User = require('./Users');
const Task = require('./Task');

//un usuario tiene muchas tareas
User.hasMany(Task);

//Una tarea pertenece a un usuario
Task.belongsTo(User);

module.exports = {User,Task};