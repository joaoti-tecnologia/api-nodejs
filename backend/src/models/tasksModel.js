const connection = require("./connection");

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks;");
    return tasks;
};

const addTask = async (task) => {
    const { title } = task;

    const query = "INSERT INTO tasks (title, status) VALUES (?, ?);";
    const [addTask] = await connection.execute(query, [title, "Pendente"]);

    return {insertId: addTask.insertId};
};

const deleteTask = async (id) => {
    const [deleteTask] = await connection.execute("DELETE FROM tasks WHERE id = ?", [id]);
    return deleteTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
    const [updateTask] = await connection.execute(query, [title, status, id]);
    return updateTask;
};

module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask
};
