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

function handleChange() {
    const selected = event.target.value;

    if (selected === 'notThisOne') {
        document.getElementById('fullName').innerHTML = '';
        document.getElementById('phoneNumber').innerHTML = '';
        document.getElementById('address').innerHTML = '';
        document.getElementById('city').innerHTML = '';
        document.getElementById('state').innerHTML = '';    
        return;
    }

    const check = users.find(user => user.name === selected)
    document.getElementById('fullName').innerHTML = `Full name: ${check.name}`;
    document.getElementById('phoneNumber').innerHTML = `Phone number: ${check.phone}`;
    document.getElementById('address').innerHTML = `Street: ${check.address.street}`;
    document.getElementById('city').innerHTML = `City: ${check.address.city}`;
    document.getElementById('state').innerHTML = `State: ${check.address.state}`;    
}