const countries = document.querySelector('#countries')

document.addEventListener('DOMContentLoaded', function (event) {
  fetchData()
})

const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    country(data)

    formData(data)
  } catch (error) {
    console.log(error)
  }
}

const country = (data) => {
  let elements = ''

  for (let [index, item] of data.entries()) {
    let fixedPopulation = new Intl.NumberFormat().format(item.population)
    elements += `
            <div class="card">
            <img src="${item.flag}" alt="Flag ${item.name}" class="img-fluid">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>
                        <b>Population: </b>
                        ${fixedPopulation}
                    </p>
                    <p class="country-region">
                        <b>Region: </b>
                        ${item.region}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${item.capital}
                    </p>
                    </br>
                    <a href="country.html?name=${item.name}">Read more...</a>
                </div>
            </div>
            `
  }

  countries.innerHTML = elements
}
