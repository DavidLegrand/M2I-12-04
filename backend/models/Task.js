const priorities = {
  low: "Basse",
  medium: "Moyenne",
  high: "Haute",
};

class TaskModel {
  id;
  createdBy = 1;
  assignedTo = 1;
  constructor(obj = {}) {
    var defaults = {
      id: this.id,
      createdBy: this.createdBy,
      assignedTo: this.assignedTo,
      title: "",
      description: "",
      completed: false,
      created: new Date(),
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
      priority: priorities.medium,
    };
    if (obj.created)
      obj.created = new Date(obj.created);

    if (obj.deadline)
      obj.deadline = new Date(obj.deadline);
      
    Object.assign(this, { ...defaults, ...obj });
  }
}

module.exports = TaskModel