const newTask = function (title, description) {
  const task = {
    title,
    description,
    complete: false,
    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
};

const task1 = newTask(
  "Finishing my new assignment for today",
  "I have 10 tasks. "
);
const task2 = newTask(
  "Finishing my old assignment for this week",
  "I have 9 tasks incomplete"
);
const task3 = newTask(
  "start my new assighnment for tomorrow",
  "I have a weekend assignment, i don not have a free time"
);

const tasks = [task1, task2, task3];

for (let task of tasks) {
  task.logState();
  task.markCompleted();
  task.logState();
}
