document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', createNewTask)

});

const createNewTask = (e) => {
  // stop the form from trying to submit
  e.preventDefault()
  const inputTask = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')
  const newTask = document.createElement('li')
  const btn = document.createElement('button')
  btn.textContent = 'x'

  newTask.textContent = inputTask.value
  newTask.appendChild(btn)
  tasks.appendChild(newTask)

  e.target.reset()
}