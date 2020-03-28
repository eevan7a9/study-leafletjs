import countriesDataHealthApi from "./dummy-data-api-health.js";
import latLongCountryCode from "./latlng-cc.js";

var mymap = L.map("map").setView([31.361912, 76.394333], 3);

const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution,
  noWrap: true
}).addTo(mymap);

// L.marker([51.5, -0.09]).addTo(mymap);
// L.marker([14.599512, 120.984222]).addTo(mymap);

// console.log(latLong);

const getCountryLatLongCountryCode = function(countriesData, latLongData) {
  const countries = countriesData.map(country => {
    if (country.country_code) {
      const item = latLongData[country.country_code.toLowerCase()];
      country = { ...country, ...item };
    }
    return country;
  });
  return countries;
};

const countries = getCountryLatLongCountryCode(
  countriesDataHealthApi,
  latLongCountryCode
);
console.log(countries);

countries.forEach(country => {
  if (country.lat && country.long) {
    L.marker([country.lat, country.long])
      .addTo(mymap)
      .bindPopup(
        `<b>Confirmed:${country.confirmed}</b><br><b>Deaths:${country.deaths}</b>`
      );
  }
});
