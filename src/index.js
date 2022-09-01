
const tasks = document.getElementById('tasks');
const button = document.querySelector('input[type="submit"]');
let description = document.getElementById('new-task-description');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  button.addEventListener('click', (event) => {
    event.preventDefault();
    addTextToList();

  });
});

function addTextToList() {
  const li = document.createElement('li');
  li.innerHTML = description.value;
  tasks.appendChild(li);
}

