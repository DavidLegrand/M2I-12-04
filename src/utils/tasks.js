
function getRemaining(task) {
  return Math.ceil(
    (task.deadline.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
}

function getStatus(task) {
  return task.completed ? "Terminée" : task.priority
}

function getCompleted(task) {
  return task.completed ? "Terminée" : "En cours"
}

function getVariant(task) {
  switch (true) {
    case task.completed:
      return "light"
    case task.priority === "Basse":
      return "success"
    case task.priority === "Haute":
      return "danger"
    default:
      return "warning"
  }
}

export { getCompleted, getRemaining, getStatus, getVariant }