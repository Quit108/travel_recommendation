const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDiv = document.getElementById('searchDiv');

function search(event) {
    event.preventDefault();

    const input = document.getElementById('destination').value.toLowerCase();
    resultDiv.innerHTML = ''

    fetch ('./travel_recommendation_api.json')
        .then (response => response.json())
        .then (data => {
            if (input === "beach" || input === "beaches") {

                resultDiv.style.display = 'grid';
                resultDiv.innerHTML = '';
                
                data.beaches.forEach(beach => {
                    resultDiv.innerHTML += `
                                <div class="result-card">
                                    <img src="${beach.imageUrl}" alt="${beach.name}">
                                    <h2>${beach.name}</h2>
                                    <p>${beach.description}</p>
                                </div>`;
                }); 
            } else if (input === "temple" || input === "temples") {
                resultDiv.style.display = 'grid';
                resultDiv.innerHTML = '';
                
                data.temples.forEach(temple => {
                    resultDiv.innerHTML += `
                                <div class="result-card">
                                    <img src="${temple.imageUrl}" alt="${temple.name}">
                                    <h2>${temple.name}</h2>
                                    <p>${temple.description}</p>
                                </div>`;
                });
            } else if (input === "country" || input === "countries") {
                resultDiv.style.display = 'grid';
                resultDiv.innerHTML = '';
                
                data.countries.forEach(country => {
                    country.cities.forEach(city => {
                        resultDiv.innerHTML += `
                                <div class="result-card">
                                    <img src="${city.imageUrl}" alt="${city.name}">
                                    <h2>${city.name}</h2>
                                    <p>${city.description}</p>
                                </div>
                        `
                    })
                });
            } else {
                    resultDiv.innerHTML = '<p>Sorry! No Matching Results! :( </p>';   
            }
        })
        .catch (error => console.error('Errore fetching:', error))

}

function clearSearch(event) {
    event.preventDefault();
    resultDiv.innerHTML = '';
}

searchBtn.addEventListener('click', search);
clearBtn.addEventListener('click', clearSearch);