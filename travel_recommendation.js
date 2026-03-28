const searchBtn = document.getElementById('searchBtn');

function search() {
    const input = document.getElementById('destination');
    const resultDiv = document.getElementById('searchDiv');
    resultDiv.innerHTML = '';

    fetch ('/travel_recomendation_api.json')

}


btnSearch.addEventListener('click', searchCondition);