class Task {
  constructor(id, title, description, assignedTo, priority, status, dueDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignedTo = assignedTo;
    this.priority = priority;
    this.status = status;
    this.dueDate = dueDate;
  }
}

let tasks = require('../data/tasks');

class TaskModel {
  static getAll() {
    return tasks;
  }

  static getById(id) {
    return tasks.find(t => t.id === Number(id));
  }

  static create(taskData) {
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = new Task(
      newId,
      taskData.title,
      taskData.description,
      taskData.assignedTo,
      taskData.priority,
      taskData.status,
      taskData.dueDate
    );
    tasks.push(newTask);
    return newTask;
  }

  static update(id, taskData) {
    const index = tasks.findIndex(t => t.id === Number(id));
    if (index === -1) return null;
    
    tasks[index] = {
      id: Number(id),
      title: taskData.title,
      description: taskData.description,
      assignedTo: taskData.assignedTo,
      priority: taskData.priority,
      status: taskData.status,
      dueDate: taskData.dueDate
    };
    return tasks[index];
  }

  static patch(id, taskData) {
    const task = tasks.find(t => t.id === Number(id));
    if (!task) return null;

    if (taskData.title !== undefined) task.title = taskData.title;
    if (taskData.description !== undefined) task.description = taskData.description;
    if (taskData.assignedTo !== undefined) task.assignedTo = taskData.assignedTo;
    if (taskData.priority !== undefined) task.priority = taskData.priority;
    if (taskData.status !== undefined) task.status = taskData.status;
    if (taskData.dueDate !== undefined) task.dueDate = taskData.dueDate;

    return task;
  }

  static delete(id) {
    const index = tasks.findIndex(t => t.id === Number(id));
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  }

  static getByStatus(status) {
    return tasks.filter(t => t.status.toLowerCase() === status.toLowerCase());
  }

  static getByPriority(priority) {
    return tasks.filter(t => t.priority.toLowerCase() === priority.toLowerCase());
  }

  static getSummary() {
    const total = tasks.length;
    const pending = tasks.filter(t => t.status.toLowerCase() === 'pending').length;
    const inProgress = tasks.filter(t => t.status.toLowerCase() === 'in progress').length;
    const completed = tasks.filter(t => t.status.toLowerCase() === 'completed').length;
    return { total, pending, inProgress, completed };
  }

  static getByEmployee(name) {
    return tasks.filter(t => t.assignedTo.toLowerCase() === name.toLowerCase());
  }

  static getOverdue() {
    const today = new Date().toISOString().split('T')[0];
    return tasks.filter(t => t.dueDate < today && t.status.toLowerCase() !== 'completed');
  }
}

module.exports = TaskModel;