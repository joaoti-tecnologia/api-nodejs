const express = require("express");

const taskController = require("./controllers/taskController");
const taskMiddleware = require("./middlewares/tasksMiddlewares");

const router = express.Router();

router.get("/tasks", taskController.getAll);
router.post("/tasks", taskMiddleware.validatitulo, taskController.addTask);
router.delete("/tasks/:id", taskController.deleteTask);
router.put("/tasks/:id", taskMiddleware.validatitulo, taskMiddleware.validastatus, taskController.updateTask);

module.exports = router;
