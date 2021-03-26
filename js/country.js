const countryDetail = document.getElementById('countryDetail')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener('DOMContentLoaded', (e) => {
  fetchData()
})

const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()

    const dataFilter = data.filter((item) => item.name === params)

    country(dataFilter)
  } catch (error) {
    console.log(error)
  }
}

let borderArray = []

const country = (data) => {
  let elementos = ''
  data.forEach((item) => {
    let fixedPopulation = new Intl.NumberFormat().format(item.population)

    elementos += `
        <div class="modal">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="modal-content">
							<h2>${item.name}</h2>
							<div>
									<p>
										<strong>Native Name:</strong>
										${item.nativeName}
									</p>
									<p>
										<strong>Caital:</strong>
										${item.capital}
									</p>
									<p>
										<strong>Region:</strong>
										${item.region}
									</p>
									<p>
										<strong>Sub-Region:</strong>
										${item.subregion}
									</p>
									<p>
										<strong>Population:</strong>
										${fixedPopulation}
									</p>
									<p>
										<strong>Demonym:</strong>
										${item.demonym}
									</p>
									<p>
										<strong>Languages:</strong>
										${item.languages.map((language) => language.name)}
									</p>
									<p>
										<strong>Currencies:</strong>
										${item.currencies.map((currency) => currency.name)}
									</p>
									<p>
										<strong>Currencies Symbol:</strong>
										${item.currencies.map((currency) => currency.symbol)}
									</p>
									<p>
										<strong>Borders:</strong>
										${item.borders}
									</p>
								</div>
            </div>
        </div>
        `
  })
  countryDetail.innerHTML = elementos
}
