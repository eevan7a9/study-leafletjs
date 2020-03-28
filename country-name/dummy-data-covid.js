const countries = [
  {
    Country: "",
    Slug: "",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: " Azerbaijan",
    Slug: "-azerbaijan",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Afghanistan",
    Slug: "afghanistan",
    NewConfirmed: 16,
    TotalConfirmed: 110,
    NewDeaths: 0,
    TotalDeaths: 4,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Albania",
    Slug: "albania",
    NewConfirmed: 12,
    TotalConfirmed: 186,
    NewDeaths: 2,
    TotalDeaths: 8,
    NewRecovered: 14,
    TotalRecovered: 31
  },
  {
    Country: "Algeria",
    Slug: "algeria",
    NewConfirmed: 42,
    TotalConfirmed: 409,
    NewDeaths: 1,
    TotalDeaths: 26,
    NewRecovered: 0,
    TotalRecovered: 29
  },
  {
    Country: "Andorra",
    Slug: "andorra",
    NewConfirmed: 43,
    TotalConfirmed: 267,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Angola",
    Slug: "angola",
    NewConfirmed: 0,
    TotalConfirmed: 4,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Antigua and Barbuda",
    Slug: "antigua-and-barbuda",
    NewConfirmed: 0,
    TotalConfirmed: 7,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Argentina",
    Slug: "argentina",
    NewConfirmed: 87,
    TotalConfirmed: 589,
    NewDeaths: 4,
    TotalDeaths: 13,
    NewRecovered: 9,
    TotalRecovered: 72
  },
  {
    Country: "Armenia",
    Slug: "armenia",
    NewConfirmed: 39,
    TotalConfirmed: 329,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 10,
    TotalRecovered: 28
  },
  {
    Country: "Aruba",
    Slug: "aruba",
    NewConfirmed: 0,
    TotalConfirmed: 4,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Australia",
    Slug: "australia",
    NewConfirmed: 333,
    TotalConfirmed: 3143,
    NewDeaths: 0,
    TotalDeaths: 13,
    NewRecovered: 22,
    TotalRecovered: 194
  },
  {
    Country: "Austria",
    Slug: "austria",
    NewConfirmed: 748,
    TotalConfirmed: 7657,
    NewDeaths: 9,
    TotalDeaths: 58,
    NewRecovered: 113,
    TotalRecovered: 225
  },
  {
    Country: "Azerbaijan",
    Slug: "azerbaijan",
    NewConfirmed: 43,
    TotalConfirmed: 165,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 0,
    TotalRecovered: 15
  },
  {
    Country: "Bahamas",
    Slug: "bahamas",
    NewConfirmed: 1,
    TotalConfirmed: 10,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Bahamas, The",
    Slug: "bahamas-the",
    NewConfirmed: 0,
    TotalConfirmed: 4,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Bahrain",
    Slug: "bahrain",
    NewConfirmed: 8,
    TotalConfirmed: 466,
    NewDeaths: 0,
    TotalDeaths: 4,
    NewRecovered: 23,
    TotalRecovered: 227
  },
  {
    Country: "Bangladesh",
    Slug: "bangladesh",
    NewConfirmed: 4,
    TotalConfirmed: 48,
    NewDeaths: 0,
    TotalDeaths: 5,
    NewRecovered: 0,
    TotalRecovered: 11
  },
  {
    Country: "Barbados",
    Slug: "barbados",
    NewConfirmed: 6,
    TotalConfirmed: 24,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Belarus",
    Slug: "belarus",
    NewConfirmed: 8,
    TotalConfirmed: 94,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 3,
    TotalRecovered: 32
  },
  {
    Country: "Belgium",
    Slug: "belgium",
    NewConfirmed: 1049,
    TotalConfirmed: 7284,
    NewDeaths: 69,
    TotalDeaths: 289,
    NewRecovered: 183,
    TotalRecovered: 858
  },
  {
    Country: "Belize",
    Slug: "belize",
    NewConfirmed: 0,
    TotalConfirmed: 2,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Benin",
    Slug: "benin",
    NewConfirmed: 0,
    TotalConfirmed: 6,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Bhutan",
    Slug: "bhutan",
    NewConfirmed: 1,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Bolivia",
    Slug: "bolivia",
    NewConfirmed: 18,
    TotalConfirmed: 61,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Bosnia and Herzegovina",
    Slug: "bosnia-and-herzegovina",
    NewConfirmed: 46,
    TotalConfirmed: 237,
    NewDeaths: 1,
    TotalDeaths: 4,
    NewRecovered: 3,
    TotalRecovered: 5
  },
  {
    Country: "Brazil",
    Slug: "brazil",
    NewConfirmed: 432,
    TotalConfirmed: 3417,
    NewDeaths: 15,
    TotalDeaths: 92,
    NewRecovered: 0,
    TotalRecovered: 6
  },
  {
    Country: "Brunei",
    Slug: "brunei",
    NewConfirmed: 1,
    TotalConfirmed: 115,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 6,
    TotalRecovered: 11
  },
  {
    Country: "Bulgaria",
    Slug: "bulgaria",
    NewConfirmed: 29,
    TotalConfirmed: 293,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 1,
    TotalRecovered: 9
  },
  {
    Country: "Burkina Faso",
    Slug: "burkina-faso",
    NewConfirmed: 28,
    TotalConfirmed: 180,
    NewDeaths: 2,
    TotalDeaths: 9,
    NewRecovered: 2,
    TotalRecovered: 12
  },
  {
    Country: "Burma",
    Slug: "burma",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Cabo Verde",
    Slug: "cabo-verde",
    NewConfirmed: 1,
    TotalConfirmed: 5,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Cambodia",
    Slug: "cambodia",
    NewConfirmed: 3,
    TotalConfirmed: 99,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 1,
    TotalRecovered: 11
  },
  {
    Country: "Cameroon",
    Slug: "cameroon",
    NewConfirmed: 16,
    TotalConfirmed: 91,
    NewDeaths: 1,
    TotalDeaths: 2,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Canada",
    Slug: "canada",
    NewConfirmed: 640,
    TotalConfirmed: 4682,
    NewDeaths: 16,
    TotalDeaths: 54,
    NewRecovered: 72,
    TotalRecovered: 256
  },
  {
    Country: "Cape Verde",
    Slug: "cape-verde",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Cayman Islands",
    Slug: "cayman-islands",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Central African Republic",
    Slug: "central-african-republic",
    NewConfirmed: 0,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Chad",
    Slug: "chad",
    NewConfirmed: 0,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Channel Islands",
    Slug: "channel-islands",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Chile",
    Slug: "chile",
    NewConfirmed: 304,
    TotalConfirmed: 1610,
    NewDeaths: 1,
    TotalDeaths: 5,
    NewRecovered: 21,
    TotalRecovered: 43
  },
  {
    Country: "China",
    Slug: "china",
    NewConfirmed: 115,
    TotalConfirmed: 81897,
    NewDeaths: 5,
    TotalDeaths: 3296,
    NewRecovered: 539,
    TotalRecovered: 74720
  },
  {
    Country: "Colombia",
    Slug: "colombia",
    NewConfirmed: 48,
    TotalConfirmed: 539,
    NewDeaths: 0,
    TotalDeaths: 6,
    NewRecovered: 2,
    TotalRecovered: 10
  },
  {
    Country: "Congo (Brazzaville)",
    Slug: "congo-(brazzaville)",
    NewConfirmed: 0,
    TotalConfirmed: 4,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Congo (Kinshasa)",
    Slug: "congo-(kinshasa)",
    NewConfirmed: 0,
    TotalConfirmed: 51,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 2,
    TotalRecovered: 2
  },
  {
    Country: "Costa Rica",
    Slug: "costa-rica",
    NewConfirmed: 32,
    TotalConfirmed: 263,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 1,
    TotalRecovered: 3
  },
  {
    Country: "Cote d'Ivoire",
    Slug: "cote-divoire",
    NewConfirmed: 5,
    TotalConfirmed: 101,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 3
  },
  {
    Country: "Croatia",
    Slug: "croatia",
    NewConfirmed: 91,
    TotalConfirmed: 586,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 15,
    TotalRecovered: 37
  },
  {
    Country: "Cruise Ship",
    Slug: "cruise-ship",
    NewConfirmed: 0,
    TotalConfirmed: 712,
    NewDeaths: 0,
    TotalDeaths: 8,
    NewRecovered: 242,
    TotalRecovered: 567
  },
  {
    Country: "Cuba",
    Slug: "cuba",
    NewConfirmed: 13,
    TotalConfirmed: 80,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 3,
    TotalRecovered: 4
  },
  {
    Country: "Curacao",
    Slug: "curacao",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Cyprus",
    Slug: "cyprus",
    NewConfirmed: 16,
    TotalConfirmed: 162,
    NewDeaths: 2,
    TotalDeaths: 5,
    NewRecovered: 11,
    TotalRecovered: 15
  },
  {
    Country: "Czechia",
    Slug: "czechia",
    NewConfirmed: 354,
    TotalConfirmed: 2279,
    NewDeaths: 0,
    TotalDeaths: 9,
    NewRecovered: 1,
    TotalRecovered: 11
  },
  {
    Country: "Denmark",
    Slug: "denmark",
    NewConfirmed: 177,
    TotalConfirmed: 2200,
    NewDeaths: 11,
    TotalDeaths: 52,
    NewRecovered: 7,
    TotalRecovered: 57
  },
  {
    Country: "Diamond Princess",
    Slug: "diamond-princess",
    NewConfirmed: 0,
    TotalConfirmed: 712,
    NewDeaths: 0,
    TotalDeaths: 10,
    NewRecovered: 0,
    TotalRecovered: 597
  },
  {
    Country: "Djibouti",
    Slug: "djibouti",
    NewConfirmed: 1,
    TotalConfirmed: 12,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Dominica",
    Slug: "dominica",
    NewConfirmed: 0,
    TotalConfirmed: 11,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Dominican Republic",
    Slug: "dominican-republic",
    NewConfirmed: 93,
    TotalConfirmed: 581,
    NewDeaths: 10,
    TotalDeaths: 20,
    NewRecovered: 0,
    TotalRecovered: 3
  },
  {
    Country: "East Timor",
    Slug: "east-timor",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Ecuador",
    Slug: "ecuador",
    NewConfirmed: 192,
    TotalConfirmed: 1595,
    NewDeaths: 2,
    TotalDeaths: 36,
    NewRecovered: 0,
    TotalRecovered: 3
  },
  {
    Country: "Egypt",
    Slug: "egypt",
    NewConfirmed: 41,
    TotalConfirmed: 536,
    NewDeaths: 6,
    TotalDeaths: 30,
    NewRecovered: 14,
    TotalRecovered: 116
  },
  {
    Country: "El Salvador",
    Slug: "el-salvador",
    NewConfirmed: 0,
    TotalConfirmed: 13,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Equatorial Guinea",
    Slug: "equatorial-guinea",
    NewConfirmed: 0,
    TotalConfirmed: 12,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Eritrea",
    Slug: "eritrea",
    NewConfirmed: 0,
    TotalConfirmed: 6,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Estonia",
    Slug: "estonia",
    NewConfirmed: 37,
    TotalConfirmed: 575,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 3,
    TotalRecovered: 11
  },
  {
    Country: "Eswatini",
    Slug: "eswatini",
    NewConfirmed: 3,
    TotalConfirmed: 9,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Ethiopia",
    Slug: "ethiopia",
    NewConfirmed: 4,
    TotalConfirmed: 16,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Faroe Islands",
    Slug: "faroe-islands",
    NewConfirmed: 0,
    TotalConfirmed: 2,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Fiji",
    Slug: "fiji",
    NewConfirmed: 0,
    TotalConfirmed: 5,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Finland",
    Slug: "finland",
    NewConfirmed: 83,
    TotalConfirmed: 1041,
    NewDeaths: 2,
    TotalDeaths: 7,
    NewRecovered: 0,
    TotalRecovered: 10
  },
  {
    Country: "France",
    Slug: "france",
    NewConfirmed: 3851,
    TotalConfirmed: 33402,
    NewDeaths: 299,
    TotalDeaths: 1997,
    NewRecovered: 752,
    TotalRecovered: 5707
  },
  {
    Country: "French Guiana",
    Slug: "french-guiana",
    NewConfirmed: 0,
    TotalConfirmed: 18,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 6
  },
  {
    Country: "Gabon",
    Slug: "gabon",
    NewConfirmed: 0,
    TotalConfirmed: 7,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Gambia",
    Slug: "gambia",
    NewConfirmed: 0,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Gambia, The",
    Slug: "gambia-the",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Georgia",
    Slug: "georgia",
    NewConfirmed: 4,
    TotalConfirmed: 83,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 3,
    TotalRecovered: 14
  },
  {
    Country: "Germany",
    Slug: "germany",
    NewConfirmed: 6933,
    TotalConfirmed: 50871,
    NewDeaths: 75,
    TotalDeaths: 342,
    NewRecovered: 985,
    TotalRecovered: 6658
  },
  {
    Country: "Ghana",
    Slug: "ghana",
    NewConfirmed: 5,
    TotalConfirmed: 137,
    NewDeaths: 0,
    TotalDeaths: 4,
    NewRecovered: 1,
    TotalRecovered: 2
  },
  {
    Country: "Gibraltar",
    Slug: "gibraltar",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 1,
    TotalRecovered: 1
  },
  {
    Country: "Greece",
    Slug: "greece",
    NewConfirmed: 74,
    TotalConfirmed: 966,
    NewDeaths: 2,
    TotalDeaths: 28,
    NewRecovered: 16,
    TotalRecovered: 52
  },
  {
    Country: "Greenland",
    Slug: "greenland",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Grenada",
    Slug: "grenada",
    NewConfirmed: 0,
    TotalConfirmed: 7,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Guadeloupe",
    Slug: "guadeloupe",
    NewConfirmed: 3,
    TotalConfirmed: 56,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Guam",
    Slug: "guam",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Guatemala",
    Slug: "guatemala",
    NewConfirmed: 3,
    TotalConfirmed: 28,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 4
  },
  {
    Country: "Guernsey",
    Slug: "guernsey",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Guinea",
    Slug: "guinea",
    NewConfirmed: 4,
    TotalConfirmed: 8,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Guinea-Bissau",
    Slug: "guinea-bissau",
    NewConfirmed: 0,
    TotalConfirmed: 2,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Guyana",
    Slug: "guyana",
    NewConfirmed: 0,
    TotalConfirmed: 5,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Haiti",
    Slug: "haiti",
    NewConfirmed: 0,
    TotalConfirmed: 8,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Holy See",
    Slug: "holy-see",
    NewConfirmed: 0,
    TotalConfirmed: 4,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Honduras",
    Slug: "honduras",
    NewConfirmed: 16,
    TotalConfirmed: 68,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Hong Kong",
    Slug: "hong-kong",
    NewConfirmed: 1,
    TotalConfirmed: 115,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 1,
    TotalRecovered: 59
  },
  {
    Country: "Hong Kong SAR",
    Slug: "hong-kong-sar",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Hungary",
    Slug: "hungary",
    NewConfirmed: 39,
    TotalConfirmed: 300,
    NewDeaths: 0,
    TotalDeaths: 10,
    NewRecovered: 6,
    TotalRecovered: 34
  },
  {
    Country: "Iceland",
    Slug: "iceland",
    NewConfirmed: 88,
    TotalConfirmed: 890,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 15,
    TotalRecovered: 97
  },
  {
    Country: "India",
    Slug: "india",
    NewConfirmed: 160,
    TotalConfirmed: 887,
    NewDeaths: 0,
    TotalDeaths: 20,
    NewRecovered: 28,
    TotalRecovered: 73
  },
  {
    Country: "Indonesia",
    Slug: "indonesia",
    NewConfirmed: 153,
    TotalConfirmed: 1046,
    NewDeaths: 9,
    TotalDeaths: 87,
    NewRecovered: 11,
    TotalRecovered: 46
  },
  {
    Country: "Iran",
    Slug: "iran",
    NewConfirmed: 2926,
    TotalConfirmed: 32332,
    NewDeaths: 144,
    TotalDeaths: 2378,
    NewRecovered: 676,
    TotalRecovered: 11133
  },
  {
    Country: "Iran (Islamic Republic of)",
    Slug: "iran",
    NewConfirmed: 2926,
    TotalConfirmed: 32332,
    NewDeaths: 144,
    TotalDeaths: 2378,
    NewRecovered: 676,
    TotalRecovered: 11133
  },
  {
    Country: "Iraq",
    Slug: "iraq",
    NewConfirmed: 76,
    TotalConfirmed: 458,
    NewDeaths: 4,
    TotalDeaths: 40,
    NewRecovered: 17,
    TotalRecovered: 122
  },
  {
    Country: "Ireland",
    Slug: "ireland",
    NewConfirmed: 302,
    TotalConfirmed: 2121,
    NewDeaths: 3,
    TotalDeaths: 22,
    NewRecovered: 0,
    TotalRecovered: 5
  },
  {
    Country: "Israel",
    Slug: "israel",
    NewConfirmed: 342,
    TotalConfirmed: 3035,
    NewDeaths: 4,
    TotalDeaths: 12,
    NewRecovered: 11,
    TotalRecovered: 79
  },
  {
    Country: "Italy",
    Slug: "italy",
    NewConfirmed: 5909,
    TotalConfirmed: 86498,
    NewDeaths: 919,
    TotalDeaths: 9134,
    NewRecovered: 589,
    TotalRecovered: 10950
  },
  {
    Country: "Ivory Coast",
    Slug: "ivory-coast",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Jamaica",
    Slug: "jamaica",
    NewConfirmed: 0,
    TotalConfirmed: 26,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Japan",
    Slug: "japan",
    NewConfirmed: 81,
    TotalConfirmed: 1468,
    NewDeaths: 2,
    TotalDeaths: 49,
    NewRecovered: 13,
    TotalRecovered: 372
  },
  {
    Country: "Jersey",
    Slug: "jersey",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Jordan",
    Slug: "jordan",
    NewConfirmed: 23,
    TotalConfirmed: 235,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 17,
    TotalRecovered: 18
  },
  {
    Country: "Kazakhstan",
    Slug: "kazakhstan",
    NewConfirmed: 39,
    TotalConfirmed: 150,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 1,
    TotalRecovered: 3
  },
  {
    Country: "Kenya",
    Slug: "kenya",
    NewConfirmed: 0,
    TotalConfirmed: 31,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Korea, South",
    Slug: "korea-south",
    NewConfirmed: 91,
    TotalConfirmed: 9332,
    NewDeaths: 8,
    TotalDeaths: 139,
    NewRecovered: 384,
    TotalRecovered: 4528
  },
  {
    Country: "Kosovo",
    Slug: "kosovo",
    NewConfirmed: 15,
    TotalConfirmed: 86,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 1,
    TotalRecovered: 1
  },
  {
    Country: "Kuwait",
    Slug: "kuwait",
    NewConfirmed: 17,
    TotalConfirmed: 225,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 8,
    TotalRecovered: 57
  },
  {
    Country: "Kyrgyzstan",
    Slug: "kyrgyzstan",
    NewConfirmed: 14,
    TotalConfirmed: 58,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Laos",
    Slug: "laos",
    NewConfirmed: 0,
    TotalConfirmed: 6,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Latvia",
    Slug: "latvia",
    NewConfirmed: 36,
    TotalConfirmed: 280,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Lebanon",
    Slug: "lebanon",
    NewConfirmed: 23,
    TotalConfirmed: 391,
    NewDeaths: 2,
    TotalDeaths: 8,
    NewRecovered: 4,
    TotalRecovered: 27
  },
  {
    Country: "Liberia",
    Slug: "liberia",
    NewConfirmed: 0,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Libya",
    Slug: "libya",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Liechtenstein",
    Slug: "liechtenstein",
    NewConfirmed: 0,
    TotalConfirmed: 56,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Lithuania",
    Slug: "lithuania",
    NewConfirmed: 59,
    TotalConfirmed: 358,
    NewDeaths: 1,
    TotalDeaths: 5,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Luxembourg",
    Slug: "luxembourg",
    NewConfirmed: 152,
    TotalConfirmed: 1605,
    NewDeaths: 6,
    TotalDeaths: 15,
    NewRecovered: 34,
    TotalRecovered: 40
  },
  {
    Country: "Macao SAR",
    Slug: "macao-sar",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Macau",
    Slug: "macau",
    NewConfirmed: 0,
    TotalConfirmed: 10,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 10
  },
  {
    Country: "Madagascar",
    Slug: "madagascar",
    NewConfirmed: 3,
    TotalConfirmed: 26,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Malaysia",
    Slug: "malaysia",
    NewConfirmed: 130,
    TotalConfirmed: 2161,
    NewDeaths: 3,
    TotalDeaths: 26,
    NewRecovered: 44,
    TotalRecovered: 259
  },
  {
    Country: "Maldives",
    Slug: "maldives",
    NewConfirmed: 3,
    TotalConfirmed: 16,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 1,
    TotalRecovered: 9
  },
  {
    Country: "Mali",
    Slug: "mali",
    NewConfirmed: 7,
    TotalConfirmed: 11,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Malta",
    Slug: "malta",
    NewConfirmed: 5,
    TotalConfirmed: 139,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Martinique",
    Slug: "martinique",
    NewConfirmed: 5,
    TotalConfirmed: 37,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Mauritania",
    Slug: "mauritania",
    NewConfirmed: 0,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Mauritius",
    Slug: "mauritius",
    NewConfirmed: 13,
    TotalConfirmed: 94,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Mayotte",
    Slug: "mayotte",
    NewConfirmed: 4,
    TotalConfirmed: 11,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Mexico",
    Slug: "mexico",
    NewConfirmed: 110,
    TotalConfirmed: 585,
    NewDeaths: 2,
    TotalDeaths: 8,
    NewRecovered: 0,
    TotalRecovered: 4
  },
  {
    Country: "Moldova",
    Slug: "moldova",
    NewConfirmed: 22,
    TotalConfirmed: 199,
    NewDeaths: 1,
    TotalDeaths: 2,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Monaco",
    Slug: "monaco",
    NewConfirmed: 9,
    TotalConfirmed: 42,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Mongolia",
    Slug: "mongolia",
    NewConfirmed: 0,
    TotalConfirmed: 11,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Montenegro",
    Slug: "montenegro",
    NewConfirmed: 13,
    TotalConfirmed: 82,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Morocco",
    Slug: "morocco",
    NewConfirmed: 70,
    TotalConfirmed: 345,
    NewDeaths: 12,
    TotalDeaths: 23,
    NewRecovered: 3,
    TotalRecovered: 11
  },
  {
    Country: "Mozambique",
    Slug: "mozambique",
    NewConfirmed: 0,
    TotalConfirmed: 7,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Namibia",
    Slug: "namibia",
    NewConfirmed: 0,
    TotalConfirmed: 8,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Nepal",
    Slug: "nepal",
    NewConfirmed: 1,
    TotalConfirmed: 4,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Netherlands",
    Slug: "netherlands",
    NewConfirmed: 1179,
    TotalConfirmed: 8647,
    NewDeaths: 112,
    TotalDeaths: 547,
    NewRecovered: 0,
    TotalRecovered: 6
  },
  {
    Country: "New Zealand",
    Slug: "new-zealand",
    NewConfirmed: 85,
    TotalConfirmed: 368,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 10,
    TotalRecovered: 37
  },
  {
    Country: "Nicaragua",
    Slug: "nicaragua",
    NewConfirmed: 0,
    TotalConfirmed: 2,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Niger",
    Slug: "niger",
    NewConfirmed: 0,
    TotalConfirmed: 10,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Nigeria",
    Slug: "nigeria",
    NewConfirmed: 5,
    TotalConfirmed: 70,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 1,
    TotalRecovered: 3
  },
  {
    Country: "North Ireland",
    Slug: "north-ireland",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "North Macedonia",
    Slug: "north-macedonia",
    NewConfirmed: 18,
    TotalConfirmed: 219,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 0,
    TotalRecovered: 3
  },
  {
    Country: "Norway",
    Slug: "norway",
    NewConfirmed: 386,
    TotalConfirmed: 3755,
    NewDeaths: 5,
    TotalDeaths: 19,
    NewRecovered: 0,
    TotalRecovered: 6
  },
  {
    Country: "occupied Palestinian territory",
    Slug: "occupied-palestinian-territory",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Oman",
    Slug: "oman",
    NewConfirmed: 22,
    TotalConfirmed: 131,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 23
  },
  {
    Country: "Others",
    Slug: "others",
    NewConfirmed: 0,
    TotalConfirmed: 696,
    NewDeaths: 0,
    TotalDeaths: 6,
    NewRecovered: 0,
    TotalRecovered: 40
  },
  {
    Country: "Pakistan",
    Slug: "pakistan",
    NewConfirmed: 172,
    TotalConfirmed: 1373,
    NewDeaths: 2,
    TotalDeaths: 11,
    NewRecovered: 2,
    TotalRecovered: 23
  },
  {
    Country: "Palestine",
    Slug: "palestine",
    NewConfirmed: 0,
    TotalConfirmed: 22,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Panama",
    Slug: "panama",
    NewConfirmed: 116,
    TotalConfirmed: 674,
    NewDeaths: 1,
    TotalDeaths: 9,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Papua New Guinea",
    Slug: "papua-new-guinea",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Paraguay",
    Slug: "paraguay",
    NewConfirmed: 11,
    TotalConfirmed: 52,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 1,
    TotalRecovered: 1
  },
  {
    Country: "Peru",
    Slug: "peru",
    NewConfirmed: 55,
    TotalConfirmed: 635,
    NewDeaths: 2,
    TotalDeaths: 11,
    NewRecovered: 2,
    TotalRecovered: 16
  },
  {
    Country: "Philippines",
    Slug: "philippines",
    NewConfirmed: 96,
    TotalConfirmed: 803,
    NewDeaths: 9,
    TotalDeaths: 54,
    NewRecovered: 3,
    TotalRecovered: 31
  },
  {
    Country: "Poland",
    Slug: "poland",
    NewConfirmed: 168,
    TotalConfirmed: 1389,
    NewDeaths: 0,
    TotalDeaths: 16,
    NewRecovered: 0,
    TotalRecovered: 7
  },
  {
    Country: "Portugal",
    Slug: "portugal",
    NewConfirmed: 724,
    TotalConfirmed: 4268,
    NewDeaths: 16,
    TotalDeaths: 76,
    NewRecovered: 0,
    TotalRecovered: 43
  },
  {
    Country: "Puerto Rico",
    Slug: "puerto-rico",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Qatar",
    Slug: "qatar",
    NewConfirmed: 13,
    TotalConfirmed: 562,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 43
  },
  {
    Country: "Republic of Ireland",
    Slug: "republic-of-ireland",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Republic of Korea",
    Slug: "korea-south",
    NewConfirmed: 91,
    TotalConfirmed: 9332,
    NewDeaths: 8,
    TotalDeaths: 139,
    NewRecovered: 384,
    TotalRecovered: 4528
  },
  {
    Country: "Republic of Moldova",
    Slug: "republic-of-moldova",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Republic of the Congo",
    Slug: "republic-of-the-congo",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Reunion",
    Slug: "reunion",
    NewConfirmed: 2,
    TotalConfirmed: 47,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Romania",
    Slug: "romania",
    NewConfirmed: 263,
    TotalConfirmed: 1292,
    NewDeaths: 3,
    TotalDeaths: 26,
    NewRecovered: 21,
    TotalRecovered: 115
  },
  {
    Country: "Russia",
    Slug: "russia",
    NewConfirmed: 196,
    TotalConfirmed: 1036,
    NewDeaths: 1,
    TotalDeaths: 4,
    NewRecovered: 7,
    TotalRecovered: 45
  },
  {
    Country: "Russian Federation",
    Slug: "russia",
    NewConfirmed: 196,
    TotalConfirmed: 1036,
    NewDeaths: 1,
    TotalDeaths: 4,
    NewRecovered: 7,
    TotalRecovered: 45
  },
  {
    Country: "Rwanda",
    Slug: "rwanda",
    NewConfirmed: 4,
    TotalConfirmed: 54,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Saint Barthelemy",
    Slug: "saint-barthelemy",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Saint Kitts and Nevis",
    Slug: "saint-kitts-and-nevis",
    NewConfirmed: 0,
    TotalConfirmed: 2,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Saint Lucia",
    Slug: "saint-lucia",
    NewConfirmed: 0,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 1,
    TotalRecovered: 1
  },
  {
    Country: "Saint Martin",
    Slug: "saint-martin",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Saint Vincent and the Grenadines",
    Slug: "saint-vincent-and-the-grenadines",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "San Marino",
    Slug: "san-marino",
    NewConfirmed: 15,
    TotalConfirmed: 223,
    NewDeaths: 0,
    TotalDeaths: 21,
    NewRecovered: 0,
    TotalRecovered: 4
  },
  {
    Country: "Saudi Arabia",
    Slug: "saudi-arabia",
    NewConfirmed: 92,
    TotalConfirmed: 1104,
    NewDeaths: 0,
    TotalDeaths: 3,
    NewRecovered: 2,
    TotalRecovered: 35
  },
  {
    Country: "Senegal",
    Slug: "senegal",
    NewConfirmed: 14,
    TotalConfirmed: 119,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 2,
    TotalRecovered: 11
  },
  {
    Country: "Serbia",
    Slug: "serbia",
    NewConfirmed: 73,
    TotalConfirmed: 457,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Seychelles",
    Slug: "seychelles",
    NewConfirmed: 0,
    TotalConfirmed: 7,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Singapore",
    Slug: "singapore",
    NewConfirmed: 49,
    TotalConfirmed: 732,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 11,
    TotalRecovered: 183
  },
  {
    Country: "Slovakia",
    Slug: "slovakia",
    NewConfirmed: 43,
    TotalConfirmed: 269,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Slovenia",
    Slug: "slovenia",
    NewConfirmed: 70,
    TotalConfirmed: 632,
    NewDeaths: 3,
    TotalDeaths: 9,
    NewRecovered: 0,
    TotalRecovered: 10
  },
  {
    Country: "Somalia",
    Slug: "somalia",
    NewConfirmed: 1,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "South Africa",
    Slug: "south-africa",
    NewConfirmed: 243,
    TotalConfirmed: 1170,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 19,
    TotalRecovered: 31
  },
  {
    Country: "South Korea",
    Slug: "korea-south",
    NewConfirmed: 91,
    TotalConfirmed: 9332,
    NewDeaths: 8,
    TotalDeaths: 139,
    NewRecovered: 384,
    TotalRecovered: 4528
  },
  {
    Country: "Spain",
    Slug: "spain",
    NewConfirmed: 7933,
    TotalConfirmed: 65719,
    NewDeaths: 773,
    TotalDeaths: 5138,
    NewRecovered: 2342,
    TotalRecovered: 9357
  },
  {
    Country: "Sri Lanka",
    Slug: "sri-lanka",
    NewConfirmed: 0,
    TotalConfirmed: 106,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 7
  },
  {
    Country: "St. Martin",
    Slug: "st.-martin",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Sudan",
    Slug: "sudan",
    NewConfirmed: 0,
    TotalConfirmed: 3,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Suriname",
    Slug: "suriname",
    NewConfirmed: 0,
    TotalConfirmed: 8,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Sweden",
    Slug: "sweden",
    NewConfirmed: 229,
    TotalConfirmed: 3069,
    NewDeaths: 28,
    TotalDeaths: 105,
    NewRecovered: 0,
    TotalRecovered: 16
  },
  {
    Country: "Switzerland",
    Slug: "switzerland",
    NewConfirmed: 1117,
    TotalConfirmed: 12928,
    NewDeaths: 40,
    TotalDeaths: 231,
    NewRecovered: 1399,
    TotalRecovered: 1530
  },
  {
    Country: "Syria",
    Slug: "syria",
    NewConfirmed: 0,
    TotalConfirmed: 5,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Taipei and environs",
    Slug: "taipei-and-environs",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Taiwan",
    Slug: "taiwan",
    NewConfirmed: 15,
    TotalConfirmed: 267,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 0,
    TotalRecovered: 29
  },
  {
    Country: "Taiwan*",
    Slug: "taiwan",
    NewConfirmed: 15,
    TotalConfirmed: 267,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 0,
    TotalRecovered: 29
  },
  {
    Country: "Tanzania",
    Slug: "tanzania",
    NewConfirmed: 0,
    TotalConfirmed: 13,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 1,
    TotalRecovered: 1
  },
  {
    Country: "Thailand",
    Slug: "thailand",
    NewConfirmed: 91,
    TotalConfirmed: 1136,
    NewDeaths: 1,
    TotalDeaths: 5,
    NewRecovered: 9,
    TotalRecovered: 97
  },
  {
    Country: "The Bahamas",
    Slug: "the-bahamas",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "The Gambia",
    Slug: "the-gambia",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Timor-Leste",
    Slug: "timor-leste",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Togo",
    Slug: "togo",
    NewConfirmed: 2,
    TotalConfirmed: 25,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 1
  },
  {
    Country: "Trinidad and Tobago",
    Slug: "trinidad-and-tobago",
    NewConfirmed: 1,
    TotalConfirmed: 66,
    NewDeaths: 1,
    TotalDeaths: 2,
    NewRecovered: 1,
    TotalRecovered: 1
  },
  {
    Country: "Tunisia",
    Slug: "tunisia",
    NewConfirmed: 30,
    TotalConfirmed: 227,
    NewDeaths: 0,
    TotalDeaths: 6,
    NewRecovered: 0,
    TotalRecovered: 2
  },
  {
    Country: "Turkey",
    Slug: "turkey",
    NewConfirmed: 2069,
    TotalConfirmed: 5698,
    NewDeaths: 17,
    TotalDeaths: 92,
    NewRecovered: 16,
    TotalRecovered: 42
  },
  {
    Country: "Uganda",
    Slug: "uganda",
    NewConfirmed: 9,
    TotalConfirmed: 23,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Ukraine",
    Slug: "ukraine",
    NewConfirmed: 114,
    TotalConfirmed: 310,
    NewDeaths: 0,
    TotalDeaths: 5,
    NewRecovered: 4,
    TotalRecovered: 5
  },
  {
    Country: "United Arab Emirates",
    Slug: "united-arab-emirates",
    NewConfirmed: 72,
    TotalConfirmed: 405,
    NewDeaths: 0,
    TotalDeaths: 2,
    NewRecovered: 0,
    TotalRecovered: 52
  },
  {
    Country: "United Kingdom",
    Slug: "united-kingdom",
    NewConfirmed: 2933,
    TotalConfirmed: 14745,
    NewDeaths: 181,
    TotalDeaths: 761,
    NewRecovered: 1,
    TotalRecovered: 151
  },
  {
    Country: "Uruguay",
    Slug: "uruguay",
    NewConfirmed: 21,
    TotalConfirmed: 238,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "US",
    Slug: "us",
    NewConfirmed: 17821,
    TotalConfirmed: 101657,
    NewDeaths: 372,
    TotalDeaths: 1581,
    NewRecovered: 188,
    TotalRecovered: 869
  },
  {
    Country: "Uzbekistan",
    Slug: "uzbekistan",
    NewConfirmed: 13,
    TotalConfirmed: 88,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 5,
    TotalRecovered: 5
  },
  {
    Country: "Vatican City",
    Slug: "vatican-city",
    NewConfirmed: 0,
    TotalConfirmed: 1,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Venezuela",
    Slug: "venezuela",
    NewConfirmed: 0,
    TotalConfirmed: 107,
    NewDeaths: 1,
    TotalDeaths: 1,
    NewRecovered: 16,
    TotalRecovered: 31
  },
  {
    Country: "Viet Nam",
    Slug: "vietnam",
    NewConfirmed: 10,
    TotalConfirmed: 163,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 20
  },
  {
    Country: "Vietnam",
    Slug: "vietnam",
    NewConfirmed: 10,
    TotalConfirmed: 163,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 20
  },
  {
    Country: "West Bank and Gaza",
    Slug: "west-bank-and-gaza",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Zambia",
    Slug: "zambia",
    NewConfirmed: 6,
    TotalConfirmed: 22,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0
  },
  {
    Country: "Zimbabwe",
    Slug: "zimbabwe",
    NewConfirmed: 2,
    TotalConfirmed: 5,
    NewDeaths: 0,
    TotalDeaths: 1,
    NewRecovered: 0,
    TotalRecovered: 0
  }
];

export default countries;
