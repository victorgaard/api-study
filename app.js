let users = [];

async function loadUsers() {
    const response = await fetch('./data/users.json');

    document.getElementById('URL').innerHTML = `Fetching users from ${response.url}`;
    document.getElementById('result').innerHTML = `API call status: ${response.status}`;
    
    users = await response.json();
    
    users.map(user => {
        const usersSelect = document.getElementById('users');
        const idAssign = document.createElement('option');
        idAssign.setAttribute("id", user.id);
        usersSelect.appendChild(idAssign).innerHTML = user.name;
    })

    return users;
}

loadUsers();

function setInnerHtmlById(id, value) {
    document.getElementById(id).innerHTML = '';
}

function updateValues(data) {
    Object.entries(data).forEach(([id, value]) => setInnerHtmlById(id, value));
}

function handleChange() {
    const selected = event.target.value;
    const user = users.find(user => user.name === selected);

    updateValues({
        fullName: user ? `Full name: ${user.name}` : '', 
        phoneNumber: user ? `Phone number: ${user.phone}` : '', 
        address: user ? `Street: ${user.address.street}` : '',
        city: user ? `City: ${user.address.city}` : '',
        state: user ? `State: ${user.address.state}` : '';
    });   
}
