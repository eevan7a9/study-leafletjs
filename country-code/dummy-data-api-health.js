const data = [
  {
    country: "china",
    last_update: 1584296418,
    confirmed: 81003,
    deaths: 3203,
    recovered: 67017,
    country_code: "CN"
  },
  {
    country: "italy",
    last_update: 1584216796,
    confirmed: 21157,
    deaths: 1441,
    recovered: 1966,
    country_code: "IT"
  },
  {
    country: "iran",
    last_update: 1584296418,
    confirmed: 13938,
    deaths: 724,
    recovered: 4590,
    country_code: "IR"
  },
  {
    country: "south korea",
    last_update: 1584296418,
    confirmed: 8162,
    deaths: 75,
    recovered: 510,
    country_code: "KR"
  },
  {
    country: "spain",
    last_update: 1584296418,
    confirmed: 7798,
    deaths: 289,
    recovered: 517,
    country_code: "ES"
  },
  {
    country: "germany",
    last_update: 1584296418,
    confirmed: 5426,
    deaths: 11,
    recovered: 46,
    country_code: "DE"
  },
  {
    country: "france",
    last_update: 1584296419,
    confirmed: 4511,
    deaths: 91,
    recovered: 12,
    country_code: "FR"
  },
  {
    country: "switzerland",
    last_update: 1584296418,
    confirmed: 2200,
    deaths: 14,
    recovered: 4,
    country_code: "CH"
  },
  {
    country: "norway",
    last_update: 1584296418,
    confirmed: 1207,
    deaths: 3,
    recovered: 1,
    country_code: "NO"
  },
  {
    country: "united kingdom",
    last_update: 1584296419,
    confirmed: 1144,
    deaths: 21,
    recovered: 19,
    country_code: "GB"
  },
  {
    country: "netherlands",
    last_update: 1584296418,
    confirmed: 1135,
    deaths: 20,
    recovered: 2,
    country_code: "NL"
  },
  {
    country: "sweden",
    last_update: 1584296418,
    confirmed: 1022,
    deaths: 3,
    recovered: 1,
    country_code: "SE"
  },
  {
    country: "belgium",
    last_update: 1584296418,
    confirmed: 886,
    deaths: 4,
    recovered: 1,
    country_code: "BE"
  },
  {
    country: "denmark",
    last_update: 1584296419,
    confirmed: 875,
    deaths: 1,
    recovered: 1,
    country_code: "DK"
  },
  {
    country: "austria",
    last_update: 1584296418,
    confirmed: 800,
    deaths: 1,
    recovered: 6,
    country_code: "AT"
  },
  {
    country: "japan",
    last_update: 1584225183,
    confirmed: 773,
    deaths: 22,
    recovered: 118,
    country_code: "JP"
  },
  {
    country: "united states",
    last_update: 1584297183,
    confirmed: 3276,
    deaths: 63,
    recovered: 12,
    country_code: "US"
  },
  {
    country: "cruise ship",
    last_update: 1584108805,
    confirmed: 696,
    deaths: 7,
    recovered: 325,
    country_code: null
  },
  {
    country: "malaysia",
    last_update: 1584296418,
    confirmed: 428,
    deaths: 0,
    recovered: 42,
    country_code: "MY"
  },
  {
    country: "qatar",
    last_update: 1584225183,
    confirmed: 337,
    deaths: 0,
    recovered: 4,
    country_code: "QA"
  },
  {
    country: "portugal",
    last_update: 1584296418,
    confirmed: 245,
    deaths: 0,
    recovered: 2,
    country_code: "PT"
  },
  {
    country: "finland",
    last_update: 1584296418,
    confirmed: 243,
    deaths: 0,
    recovered: 1,
    country_code: "FI"
  },
  {
    country: "czechia",
    last_update: 1584296418,
    confirmed: 231,
    deaths: 0,
    recovered: 0,
    country_code: "CZ"
  },
  {
    country: "greece",
    last_update: 1584296418,
    confirmed: 228,
    deaths: 4,
    recovered: 8,
    country_code: "GR"
  },
  {
    country: "singapore",
    last_update: 1584296418,
    confirmed: 226,
    deaths: 0,
    recovered: 105,
    country_code: "SG"
  },
  {
    country: "slovenia",
    last_update: 1584296418,
    confirmed: 219,
    deaths: 1,
    recovered: 0,
    country_code: "SI"
  },
  {
    country: "bahrain",
    last_update: 1584186809,
    confirmed: 210,
    deaths: 0,
    recovered: 44,
    country_code: "BH"
  },
  {
    country: "israel",
    last_update: 1584296418,
    confirmed: 200,
    deaths: 0,
    recovered: 4,
    country_code: "IL"
  },
  {
    country: "brazil",
    last_update: 1584296418,
    confirmed: 162,
    deaths: 0,
    recovered: 0,
    country_code: "BR"
  },
  {
    country: "iceland",
    last_update: 1584296418,
    confirmed: 161,
    deaths: 0,
    recovered: 1,
    country_code: "IS"
  },
  {
    country: "philippines",
    last_update: 1584296418,
    confirmed: 140,
    deaths: 11,
    recovered: 2,
    country_code: "PH"
  },
  {
    country: "estonia",
    last_update: 1584296418,
    confirmed: 135,
    deaths: 0,
    recovered: 0,
    country_code: "EE"
  },
  {
    country: "australia",
    last_update: 1584296419,
    confirmed: 297,
    deaths: 3,
    recovered: 23,
    country_code: "AU"
  },
  {
    country: "romania",
    last_update: 1584296418,
    confirmed: 131,
    deaths: 0,
    recovered: 9,
    country_code: "RO"
  },
  {
    country: "ireland",
    last_update: 1584216796,
    confirmed: 129,
    deaths: 2,
    recovered: 0,
    country_code: "IE"
  },
  {
    country: "poland",
    last_update: 1584296418,
    confirmed: 119,
    deaths: 3,
    recovered: 0,
    country_code: "PL"
  },
  {
    country: "indonesia",
    last_update: 1584296418,
    confirmed: 117,
    deaths: 5,
    recovered: 8,
    country_code: "ID"
  },
  {
    country: "thailand",
    last_update: 1584296418,
    confirmed: 114,
    deaths: 1,
    recovered: 35,
    country_code: "TH"
  },
  {
    country: "india",
    last_update: 1584296418,
    confirmed: 113,
    deaths: 2,
    recovered: 4,
    country_code: "IN"
  },
  {
    country: "kuwait",
    last_update: 1584296418,
    confirmed: 112,
    deaths: 0,
    recovered: 5,
    country_code: "KW"
  },
  {
    country: "egypt",
    last_update: 1584296418,
    confirmed: 110,
    deaths: 2,
    recovered: 21,
    country_code: "EG"
  },
  {
    country: "iraq",
    last_update: 1584225183,
    confirmed: 110,
    deaths: 10,
    recovered: 26,
    country_code: "IQ"
  },
  {
    country: "lebanon",
    last_update: 1584296418,
    confirmed: 110,
    deaths: 3,
    recovered: 1,
    country_code: "LB"
  },
  {
    country: "canada",
    last_update: 1584238401,
    confirmed: 250,
    deaths: 1,
    recovered: 8,
    country_code: "CA"
  },
  {
    country: "saudi arabia",
    last_update: 1584217983,
    confirmed: 103,
    deaths: 0,
    recovered: 1,
    country_code: "SA"
  },
  {
    country: "san marino",
    last_update: 1584296418,
    confirmed: 92,
    deaths: 5,
    recovered: 4,
    country_code: "SM"
  },
  {
    country: "united arab emirates",
    last_update: 1584296418,
    confirmed: 86,
    deaths: 0,
    recovered: 23,
    country_code: "AE"
  },
  {
    country: "russia",
    last_update: 1584296418,
    confirmed: 63,
    deaths: 0,
    recovered: 8,
    country_code: "RU"
  },
  {
    country: "chile",
    last_update: 1584217983,
    confirmed: 61,
    deaths: 0,
    recovered: 0,
    country_code: "CL"
  },
  {
    country: "luxembourg",
    last_update: 1584296418,
    confirmed: 59,
    deaths: 1,
    recovered: 0,
    country_code: "LU"
  },
  {
    country: "taiwan",
    last_update: 1584255183,
    confirmed: 59,
    deaths: 1,
    recovered: 20,
    country_code: "TW"
  },
  {
    country: "vietnam",
    last_update: 1584296418,
    confirmed: 56,
    deaths: 0,
    recovered: 16,
    country_code: "VN"
  },
  {
    country: "slovakia",
    last_update: 1584296418,
    confirmed: 54,
    deaths: 0,
    recovered: 0,
    country_code: "SK"
  },
  {
    country: "pakistan",
    last_update: 1584296418,
    confirmed: 53,
    deaths: 0,
    recovered: 2,
    country_code: "PK"
  },
  {
    country: "south africa",
    last_update: 1584296418,
    confirmed: 51,
    deaths: 0,
    recovered: 0,
    country_code: "ZA"
  },
  {
    country: "brunei",
    last_update: 1584296418,
    confirmed: 50,
    deaths: 0,
    recovered: 0,
    country_code: "BN"
  },
  {
    country: "croatia",
    last_update: 1584296418,
    confirmed: 49,
    deaths: 0,
    recovered: 1,
    country_code: "HR"
  },
  {
    country: "algeria",
    last_update: 1584296418,
    confirmed: 48,
    deaths: 4,
    recovered: 12,
    country_code: "DZ"
  },
  {
    country: "serbia",
    last_update: 1584226382,
    confirmed: 46,
    deaths: 0,
    recovered: 0,
    country_code: "RS"
  },
  {
    country: "argentina",
    last_update: 1584296418,
    confirmed: 45,
    deaths: 2,
    recovered: 1,
    country_code: "AR"
  },
  {
    country: "bulgaria",
    last_update: 1584296418,
    confirmed: 43,
    deaths: 2,
    recovered: 0,
    country_code: "BG"
  },
  {
    country: "panama",
    last_update: 1584296418,
    confirmed: 43,
    deaths: 1,
    recovered: 0,
    country_code: "PA"
  },
  {
    country: "peru",
    last_update: 1584296418,
    confirmed: 43,
    deaths: 0,
    recovered: 0,
    country_code: "PE"
  },
  {
    country: "albania",
    last_update: 1584296418,
    confirmed: 42,
    deaths: 1,
    recovered: 0,
    country_code: "AL"
  },
  {
    country: "mexico",
    last_update: 1584296418,
    confirmed: 41,
    deaths: 0,
    recovered: 4,
    country_code: "MX"
  },
  {
    country: "colombia",
    last_update: 1584296418,
    confirmed: 34,
    deaths: 0,
    recovered: 0,
    country_code: "CO"
  },
  {
    country: "hungary",
    last_update: 1584296418,
    confirmed: 32,
    deaths: 1,
    recovered: 1,
    country_code: "HU"
  },
  {
    country: "georgia",
    last_update: 1584189183,
    confirmed: 30,
    deaths: 0,
    recovered: 0,
    country_code: "GE"
  },
  {
    country: "latvia",
    last_update: 1584296418,
    confirmed: 30,
    deaths: 0,
    recovered: 1,
    country_code: "LV"
  },
  {
    country: "ecuador",
    last_update: 1584226382,
    confirmed: 28,
    deaths: 2,
    recovered: 0,
    country_code: "EC"
  },
  {
    country: "morocco",
    last_update: 1584296418,
    confirmed: 28,
    deaths: 1,
    recovered: 1,
    country_code: "MA"
  },
  {
    country: "belarus",
    last_update: 1584138119,
    confirmed: 27,
    deaths: 0,
    recovered: 3,
    country_code: "BY"
  },
  {
    country: "costa rica",
    last_update: 1584296418,
    confirmed: 27,
    deaths: 0,
    recovered: 0,
    country_code: "CR"
  },
  {
    country: "cyprus",
    last_update: 1584226382,
    confirmed: 26,
    deaths: 0,
    recovered: 0,
    country_code: "CY"
  },
  {
    country: "armenia",
    last_update: 1584296418,
    confirmed: 23,
    deaths: 0,
    recovered: 0,
    country_code: "AM"
  },
  {
    country: "bosnia and herzegovina",
    last_update: 1584296418,
    confirmed: 21,
    deaths: 0,
    recovered: 0,
    country_code: "BA"
  },
  {
    country: "malta",
    last_update: 1584296418,
    confirmed: 21,
    deaths: 0,
    recovered: 1,
    country_code: "MT"
  },
  {
    country: "oman",
    last_update: 1584296418,
    confirmed: 20,
    deaths: 0,
    recovered: 9,
    country_code: "OM"
  },
  {
    country: "tunisia",
    last_update: 1584219182,
    confirmed: 18,
    deaths: 0,
    recovered: 0,
    country_code: "TN"
  },
  {
    country: "afghanistan",
    last_update: 1584296418,
    confirmed: 16,
    deaths: 0,
    recovered: 0,
    country_code: "AF"
  },
  {
    country: "azerbaijan",
    last_update: 1584101616,
    confirmed: 15,
    deaths: 1,
    recovered: 3,
    country_code: "AZ"
  },
  {
    country: "north macedonia",
    last_update: 1584142385,
    confirmed: 14,
    deaths: 0,
    recovered: 1,
    country_code: "MK"
  },
  {
    country: "maldives",
    last_update: 1584296418,
    confirmed: 13,
    deaths: 0,
    recovered: 0,
    country_code: "MV"
  },
  {
    country: "lithuania",
    last_update: 1584296418,
    confirmed: 12,
    deaths: 0,
    recovered: 1,
    country_code: "LT"
  },
  {
    country: "moldova",
    last_update: 1584219182,
    confirmed: 12,
    deaths: 0,
    recovered: 0,
    country_code: "MD"
  },
  {
    country: "dominican republic",
    last_update: 1584219182,
    confirmed: 11,
    deaths: 0,
    recovered: 0,
    country_code: "DO"
  },
  {
    country: "sri lanka",
    last_update: 1584296418,
    confirmed: 11,
    deaths: 0,
    recovered: 1,
    country_code: "LK"
  },
  {
    country: "bolivia",
    last_update: 1584190387,
    confirmed: 10,
    deaths: 0,
    recovered: 0,
    country_code: "BO"
  },
  {
    country: "senegal",
    last_update: 1584142385,
    confirmed: 10,
    deaths: 0,
    recovered: 1,
    country_code: "SN"
  },
  {
    country: "martinique",
    last_update: 1584197584,
    confirmed: 9,
    deaths: 0,
    recovered: 0,
    country_code: "MQ"
  },
  {
    country: "jamaica",
    last_update: 1584138122,
    confirmed: 8,
    deaths: 0,
    recovered: 0,
    country_code: "JM"
  },
  {
    country: "kazakhstan",
    last_update: 1584296418,
    confirmed: 8,
    deaths: 0,
    recovered: 0,
    country_code: "KZ"
  },
  {
    country: "new zealand",
    last_update: 1584296418,
    confirmed: 8,
    deaths: 0,
    recovered: 0,
    country_code: "NZ"
  },
  {
    country: "venezuela",
    last_update: 1584296418,
    confirmed: 8,
    deaths: 0,
    recovered: 0,
    country_code: "VE"
  },
  {
    country: "cambodia",
    last_update: 1584190387,
    confirmed: 7,
    deaths: 0,
    recovered: 1,
    country_code: "KH"
  },
  {
    country: "jordan",
    last_update: 1584296418,
    confirmed: 7,
    deaths: 0,
    recovered: 1,
    country_code: "JO"
  },
  {
    country: "reunion",
    last_update: 1584296419,
    confirmed: 7,
    deaths: 0,
    recovered: 0,
    country_code: "RE"
  },
  {
    country: "ghana",
    last_update: 1584296418,
    confirmed: 6,
    deaths: 0,
    recovered: 0,
    country_code: "GH"
  },
  {
    country: "paraguay",
    last_update: 1584142386,
    confirmed: 6,
    deaths: 0,
    recovered: 0,
    country_code: "PY"
  },
  {
    country: "turkey",
    last_update: 1584296418,
    confirmed: 6,
    deaths: 0,
    recovered: 0,
    country_code: "TR"
  },
  {
    country: "bangladesh",
    last_update: 1584296418,
    confirmed: 5,
    deaths: 0,
    recovered: 0,
    country_code: "BD"
  },
  {
    country: "cuba",
    last_update: 1584143582,
    confirmed: 4,
    deaths: 0,
    recovered: 0,
    country_code: "CU"
  },
  {
    country: "guyana",
    last_update: 1584296419,
    confirmed: 4,
    deaths: 1,
    recovered: 0,
    country_code: "GY"
  },
  {
    country: "liechtenstein",
    last_update: 1584219182,
    confirmed: 4,
    deaths: 0,
    recovered: 0,
    country_code: "LI"
  },
  {
    country: "uruguay",
    last_update: 1584203583,
    confirmed: 4,
    deaths: 0,
    recovered: 0,
    country_code: "UY"
  },
  {
    country: "honduras",
    last_update: 1584296419,
    confirmed: 3,
    deaths: 0,
    recovered: 0,
    country_code: "HN"
  },
  {
    country: "ukraine",
    last_update: 1584138122,
    confirmed: 3,
    deaths: 1,
    recovered: 0,
    country_code: "UA"
  },
  {
    country: "aruba",
    last_update: 1584143583,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "AW"
  },
  {
    country: "burkina faso",
    last_update: 1584138122,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "BF"
  },
  {
    country: "cameroon",
    last_update: 1584138122,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "CM"
  },
  {
    country: "democratic republic of the congo",
    last_update: 1584138122,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "CD"
  },
  {
    country: "jersey",
    last_update: 1584203583,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "JE"
  },
  {
    country: "kosovo",
    last_update: 1584296419,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "XK"
  },
  {
    country: "monaco",
    last_update: 1584227585,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "MC"
  },
  {
    country: "namibia",
    last_update: 1584203583,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "NA"
  },
  {
    country: "nigeria",
    last_update: 1584138122,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "NG"
  },
  {
    country: "seychelles",
    last_update: 1584257583,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "SC"
  },
  {
    country: "trinidad and tobago",
    last_update: 1584202501,
    confirmed: 2,
    deaths: 0,
    recovered: 0,
    country_code: "TT"
  },
  {
    country: "andorra",
    last_update: 1584138122,
    confirmed: 1,
    deaths: 0,
    recovered: 1,
    country_code: "AD"
  },
  {
    country: "antigua and barbuda",
    last_update: 1584296419,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "AG"
  },
  {
    country: "bhutan",
    last_update: 1584138122,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "BT"
  },
  {
    country: "cayman islands",
    last_update: 1584102783,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "KY"
  },
  {
    country: "central african republic",
    last_update: 1584296419,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "CF"
  },
  {
    country: "republic of the congo",
    last_update: 1584296419,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "CG"
  },
  {
    country: "cote d'ivoire",
    last_update: 1584138122,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "CI"
  },
  {
    country: "curacao",
    last_update: 1584202518,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "CW"
  },
  {
    country: "equatorial guinea",
    last_update: 1584254514,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "GQ"
  },
  {
    country: "eswatini",
    last_update: 1584254514,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "SZ"
  },
  {
    country: "ethiopia",
    last_update: 1584142386,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "ET"
  },
  {
    country: "gabon",
    last_update: 1584192784,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "GA"
  },
  {
    country: "guadeloupe",
    last_update: 1584102783,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "GP"
  },
  {
    country: "guatemala",
    last_update: 1584149583,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "GT"
  },
  {
    country: "guernsey",
    last_update: 1584138123,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "GG"
  },
  {
    country: "guinea",
    last_update: 1584254514,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "GN"
  },
  {
    country: "holy see",
    last_update: 1584138122,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "VA"
  },
  {
    country: "kenya",
    last_update: 1584138123,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "KE"
  },
  {
    country: "mauritania",
    last_update: 1584296419,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "MR"
  },
  {
    country: "mongolia",
    last_update: 1584138122,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "MN"
  },
  {
    country: "nepal",
    last_update: 1584138123,
    confirmed: 1,
    deaths: 0,
    recovered: 1,
    country_code: "NP"
  },
  {
    country: "rwanda",
    last_update: 1584254514,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "RW"
  },
  {
    country: "saint lucia",
    last_update: 1584202518,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "LC"
  },
  {
    country: "saint vincent and the grenadines",
    last_update: 1584203583,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "VC"
  },
  {
    country: "sudan",
    last_update: 1584148412,
    confirmed: 1,
    deaths: 1,
    recovered: 0,
    country_code: "SD"
  },
  {
    country: "suriname",
    last_update: 1584203583,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "SR"
  },
  {
    country: "togo",
    last_update: 1584138122,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "TG"
  },
  {
    country: "uzbekistan",
    last_update: 1584296419,
    confirmed: 1,
    deaths: 0,
    recovered: 0,
    country_code: "UZ"
  },
  {
    country: "occupied palestinian territory",
    last_update: 1583959982,
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    country_code: "PS"
  }
];

export default data;
