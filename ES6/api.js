const getDiv = document.querySelector('.render-here');

const apiData = async () => {
    try {
        let data = await fetch('https://dummyjson.com/users', {
            method: 'GET'
        })
        const { users } = await data.json();

        users.forEach(user => {
            let divCard = document.createElement('div');

            divCard.className = `
        flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64
        hover:shadow-lg transition-shadow
      `;

            divCard.innerHTML = `
        <img src="${user.image}" alt="${user.firstName}" class="w-24 h-24 rounded-full mb-4 object-cover" />
        <h2 class="text-lg font-semibold">${user.firstName} ${user.lastName}</h2>
        <p class="text-sm text-gray-600">${user.email}</p>
        <p class="text-sm text-gray-500 mt-1">Age: ${user.age} | Gender: ${user.gender}</p>
        <p class="text-sm text-gray-500">Phone: ${user.phone}</p>
        <p class="text-sm text-gray-500">Username: ${user.username}</p>
      `;

            getDiv.appendChild(divCard);
        });


    } catch (e) {
        console.log(e);

    }
}

apiData();