async function createHtml() {
  const users = await getUser();

  for(let user of users) {
    const todos = await getTodos(user.id);
    userList.innerHTML += `<div class="userItem">
  <ul id="userInformation">
    <li><strong>First Name:</strong> ${user.firstName}</li>
    <li><strong>Last Name:</strong> ${user.lastName}</li>
    <li><strong>Age:</strong> ${user.age}</li>
    <li><strong>Gender:</strong> ${user.gender}</li>
    <li><strong>E-mail:</strong> ${user.email}</li>
    <li><strong>Phone:</strong> ${user.phone}</li>
  </ul>
  <ul id="addressInformation">
    <li><strong>Adress:</strong> ${user.address.address}</li>
    <li><strong>City:</strong> ${user.address.city}</li>
    <li><strong>State:</strong> ${user.address.state}</li>
    <li><strong>Country:</strong> ${user.address.country}</li>
  </ul>
  ${todos.map(x =>`<div class="todos"><p><b>Todos:</b> <span>${x.todo}</span></p></div>`).join("")}
</div>`
  };
}

async function getUser() {
  const { users } = await fetch("https://dummyjson.com/users").then((res) => res.json());
  return users;
}

async function getTodos(userId) {
  const { todos } = await fetch(`https://dummyjson.com/users/${userId}/todos`)
  .then((res) => res.json());
  return todos;
}

createHtml();