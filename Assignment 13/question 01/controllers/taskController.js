const TaskModel = require('../models/taskModel');

const validateTaskFields = (data, isPatch = false) => {
  const errors = [];
  const validPriorities = ['Low', 'Medium', 'High'];
  const validStatuses = ['Pending', 'In Progress', 'Completed'];

  if (!isPatch || data.title !== undefined) {
    if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
      errors.push('Title is required and must be a non-empty string.');
    }
  }

  if (!isPatch || data.description !== undefined) {
    if (!data.description || typeof data.description !== 'string') {
      errors.push('Description is required and must be a string.');
    }
  }

  if (!isPatch || data.assignedTo !== undefined) {
    if (!data.assignedTo || typeof data.assignedTo !== 'string' || data.assignedTo.trim() === '') {
      errors.push('AssignedTo is required and must be a non-empty string.');
    }
  }

  if (!isPatch || data.priority !== undefined) {
    if (!data.priority || !validPriorities.includes(data.priority)) {
      errors.push(`Priority is required and must be one of: ${validPriorities.join(', ')}.`);
    }
  }

  if (!isPatch || data.status !== undefined) {
    if (!data.status || !validStatuses.includes(data.status)) {
      errors.push(`Status is required and must be one of: ${validStatuses.join(', ')}.`);
    }
  }

  if (!isPatch || data.dueDate !== undefined) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!data.dueDate || !dateRegex.test(data.dueDate)) {
      errors.push('DueDate is required and must be in YYYY-MM-DD format.');
    }
  }

  return errors;
};

class TaskController {
  static getAllTasks(req, res, next) {
    try {
      const tasks = TaskModel.getAll();
      res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
      next(error);
    }
  }

  static getTaskById(req, res, next) {
    try {
      const task = TaskModel.getById(req.params.id);
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found.' });
      }
      res.status(200).json({ success: true, data: task });
    } catch (error) {
      next(error);
    }
  }

  static createTask(req, res, next) {
    try {
      const errors = validateTaskFields(req.body, false);
      if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
      }

      const newTask = TaskModel.create(req.body);
      res.status(201).json({ success: true, data: newTask });
    } catch (error) {
      next(error);
    }
  }

  static updateTask(req, res, next) {
    try {
      const errors = validateTaskFields(req.body, false);
      if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
      }

      const updatedTask = TaskModel.update(req.params.id, req.body);
      if (!updatedTask) {
        return res.status(404).json({ success: false, message: 'Task not found.' });
      }
      res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
      next(error);
    }
  }

  static patchTask(req, res, next) {
    try {
      const errors = validateTaskFields(req.body, true);
      if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
      }

      const updatedTask = TaskModel.patch(req.params.id, req.body);
      if (!updatedTask) {
        return res.status(404).json({ success: false, message: 'Task not found.' });
      }
      res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
      next(error);
    }
  }

  static deleteTask(req, res, next) {
    try {
      const success = TaskModel.delete(req.params.id);
      if (!success) {
        return res.status(404).json({ success: false, message: 'Task not found.' });
      }
      res.status(200).json({ success: true, message: 'Task deleted successfully.' });
    } catch (error) {
      next(error);
    }
  }

  static getTasksByStatus(req, res, next) {
    try {
      const tasks = TaskModel.getByStatus(req.params.status);
      res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
      next(error);
    }
  }

  static getTasksByPriority(req, res, next) {
    try {
      const tasks = TaskModel.getByPriority(req.params.priority);
      res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
      next(error);
    }
  }

  static getTaskSummary(req, res, next) {
    try {
      const summary = TaskModel.getSummary();
      res.status(200).json({ success: true, data: summary });
    } catch (error) {
      next(error);
    }
  }

  static getTasksByEmployee(req, res, next) {
    try {
      const tasks = TaskModel.getByEmployee(req.params.name);
      res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
      next(error);
    }
  }

  static getOverdueTasks(req, res, next) {
    try {
      const tasks = TaskModel.getOverdue();
      res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TaskController;