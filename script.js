const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskError = document.getElementById("taskError");

// Form Validation
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Name validation
  if (nameValue === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else if (nameValue.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Message validation
  if (messageValue === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else if (messageValue.length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    contactForm.reset();
  }
});

// To-Do List Functionality
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskValue = taskInput.value.trim();
  taskError.textContent = "";

  if (taskValue === "") {
    taskError.textContent = "Please enter a task before adding.";
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
