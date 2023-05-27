document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const inputTask = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')

  form.addEventListener('submit', createNewTask)
});

const createNewTask = (e) => {
  // stop the form from trying to submit
  e.preventDefault()
  
  const inputTask = document.getElementById('new-task-description')
  const newTask = document.createElement('li')
  const btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click', deleteButton)

  newTask.textContent = inputTask.value
  newTask.appendChild(btn)
  tasks.appendChild(newTask)

  e.target.reset()
}

const deleteButton = (e) => {
  const task = document.querySelector('li')
  task.remove()
}