const searchBtn = document.getElementById('btnSearch');
const resetBtn = document.getElementById('btnReset');
const contactBtn = document.getElementById('contactBtn');

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

function search() {
    const input = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('searchResults');

    fetch (travel_recommendation_api.json)
        .then (response => response.json())
        .then (data => {
            const result = data.find(item => item.name.toLowerCase() === input OR input.slice(0, (input.length-1)));

            if (result && result === "countries") {

                resultDiv.innerHTML += `<h2>${countries[1].name}</h2>`;
                resultDiv.innerHTML += `<img src="${countries[1].imageUrl}" alt="hjh">`;
            } else {
                resultDiv.innerHTML = 'Condition not Found.';
            }
        })
        .catch(error => {
            console.error('Error', error);
            resultDiv.innerHTML = 'An Error Occured while fetching Data.';
        });
}

resetBtn.addEventListener('click', clearSearch);
searchBtn.addEventListener('click', search);