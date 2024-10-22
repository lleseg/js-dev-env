import { getUsers, deleteUser } from './api/userApi';

import './index.css';
// Populate table of users via API call
getUsers().then(result => {
  let usersBody = '';

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Se usa Array para crear un array real de la colección DOM
  // getElementByClassname solo devuelve un objeto Array
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;

      event.preventDefault();
      deleteUser(element.attributes['data-id'].value);

      const row = element.parentNode.parentNode;

      row.parentNode.removeChild(row);
    };
  });
});
