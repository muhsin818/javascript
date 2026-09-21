function showCountryInfo() {
  // Get the selected country
  let country = document.getElementById("country").value;

  // Get the information card
  let info = document.getElementById("countryInfo");

  // Country information
  let countries = {
    kenya: {
      name: "Kenya",
      capital: "Nairobi",
      population: "About 55 million",
      continent: "Africa",
      language: "Swahili & English",
      currency: "Kenyan Shilling (KES)",
      area: "580,367 km²",
    },

    nigeria: {
      name: "Nigeria",
      capital: "Abuja",
      population: "About 230 million",
      continent: "Africa",
      language: "English",
      currency: "Nigerian Naira (NGN)",
      area: "923,768 km²",
    },

    egypt: {
      name: "Egypt",
      capital: "Cairo",
      population: "About 110 million",
      continent: "Africa",
      language: "Arabic",
      currency: "Egyptian Pound (EGP)",
      area: "1,001,450 km²",
    },

    southAfrica: {
      name: "South Africa",
      capital: "Pretoria",
      population: "About 63 million",
      continent: "Africa",
      language: "11 official languages",
      currency: "South African Rand (ZAR)",
      area: "1,221,037 km²",
    },

    ghana: {
      name: "Ghana",
      capital: "Accra",
      population: "About 35 million",
      continent: "Africa",
      language: "English",
      currency: "Ghanaian Cedi (GHS)",
      area: "238,533 km²",
    },

    tanzania: {
      name: "Tanzania",
      capital: "Dodoma",
      population: "About 70 million",
      continent: "Africa",
      language: "Swahili & English",
      currency: "Tanzanian Shilling (TZS)",
      area: "945,087 km²",
    },

    ethiopia: {
      name: "Ethiopia",
      capital: "Addis Ababa",
      population: "About 135 million",
      continent: "Africa",
      language: "Amharic",
      currency: "Ethiopian Birr (ETB)",
      area: "1,104,300 km²",
    },

    usa: {
      name: "United States",
      capital: "Washington, D.C.",
      population: "About 340 million",
      continent: "North America",
      language: "English",
      currency: "US Dollar (USD)",
      area: "9,833,520 km²",
    },

    uk: {
      name: "United Kingdom",
      capital: "London",
      population: "About 69 million",
      continent: "Europe",
      language: "English",
      currency: "Pound Sterling (GBP)",
      area: "243,610 km²",
    },

    japan: {
      name: "Japan",
      capital: "Tokyo",
      population: "About 124 million",
      continent: "Asia",
      language: "Japanese",
      currency: "Japanese Yen (JPY)",
      area: "377,975 km²",
    },
  };

  // If no country is selected
  if (country === "") {
    info.innerHTML = `
            <div class="welcome-icon">🌎</div>

            <h2>Select a Country</h2>

            <p>
                Choose a country from the dropdown above
                to see its geographic information.
            </p>
        `;

    return;
  }

  // Get selected country's data
  let data = countries[country];

  // Display information
  info.innerHTML = `

        <h2>🌍 ${data.name}</h2>

        <div class="info-grid">

            <div class="info-item">
                <div class="icon">🏛️</div>
                <h3>Capital City</h3>
                <p>${data.capital}</p>
            </div>


            <div class="info-item">
                <div class="icon">👥</div>
                <h3>Population</h3>
                <p>${data.population}</p>
            </div>


            <div class="info-item">
                <div class="icon">🌎</div>
                <h3>Continent</h3>
                <p>${data.continent}</p>
            </div>


            <div class="info-item">
                <div class="icon">🗣️</div>
                <h3>Language</h3>
                <p>${data.language}</p>
            </div>


            <div class="info-item">
                <div class="icon">💰</div>
                <h3>Currency</h3>
                <p>${data.currency}</p>
            </div>


            <div class="info-item">
                <div class="icon">📐</div>
                <h3>Area</h3>
                <p>${data.area}</p>
            </div>

        </div>
    `;
}
