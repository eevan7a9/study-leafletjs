import countriesDataCovid from "./dummy-data-covid.js";
import latLongCountryName from "./latlng-name.js";

var mymap = L.map("map").setView([54, -2], 5);

const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution
}).addTo(mymap);

// L.marker([51.5, -0.09]).addTo(mymap);
// L.marker([14.599512, 120.984222]).addTo(mymap);

// console.log(latLong);

const getGeoCountryName = function(countriesData, latLongData) {
  const coutries = countriesData.map(country => {
    const countryName = country.Country.trim().toLowerCase();
    if (countryName) {
      const foundCountry = latLongData.find(
        data => data.name.trim().toLowerCase() == countryName
      );
      if (foundCountry) {
        country.latLang = foundCountry.latlng;
        return country;
      }
    }
  });
  return coutries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
};

const countries = getGeoCountryName(countriesDataCovid, latLongCountryName);
console.log(countries);

const topTen = countries.slice(0, 10);

countries.forEach(country => {
  if (country && country.latLang.length) {
    const radius = 30000 + country.TotalConfirmed * 5;

    const circle = L.circle(country.latLang, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: radius
    }).addTo(mymap);
    circle.bindPopup(
      `<b>Confirmed:${country.TotalConfirmed}</b><br><b>Deaths:${country.TotalDeaths}</b>`,
      {
        closeOnClick: false,
        autoClose: false
      }
    );
    const inTopTen = topTen.some(top => top.Country == country.Country);
    if (inTopTen) {
      circle.openPopup();
    }
  }
});
mymap.setView([42.83333333, 12.83333333], 5);
