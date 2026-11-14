const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/summary', TaskController.getTaskSummary);
router.get('/overdue', TaskController.getOverdueTasks);
router.get('/employee/:name', TaskController.getTasksByEmployee);
router.get('/status/:status', TaskController.getTasksByStatus);
router.get('/priority/:priority', TaskController.getTasksByPriority);

router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskById);
router.post('/', TaskController.createTask);
router.put('/:id', TaskController.updateTask);
router.patch('/:id', TaskController.patchTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;
