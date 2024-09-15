
const token = localStorage.getItem('token');

if (!token) {
    window.location.href = 'index.html';
}

let data = JSON.parse(localStorage.getItem('users')) || [];

window.onload = function() {
    renderUserList();
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const user = {
        firstName: firstName,
        lastName: lastName,
        
    };

    data.push(user);

   

    document.getElementById('userForm').reset();

    renderUserList();
});

function renderUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; 

    data.map((user, i) => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.innerHTML = ` ${i + 1} isim ${user.firstName} familia ${user.lastName} `;
        userList.appendChild(userItem);
    });
}