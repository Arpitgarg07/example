
const country_and_states = {
    "country": {
        "AF": "Afghanistan",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua and Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "AX": "Åland Islands",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia (Plurinational State of)",
        "BA": "Bosnia and Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "CV": "Cabo Verde",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "BQ": "Caribbean Netherlands",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CG": "Congo",
        "CD": "Congo, Democratic Republic of the",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "HR": "Croatia",
        "CU": "Cuba",
        "CW": "Curaçao",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "CI": "Côte d'Ivoire",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "SZ": "Eswatini (Swaziland)",
        "ET": "Ethiopia",
        "FK": "Falkland Islands (Malvinas)",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "FR": "France",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island and Mcdonald Islands",
        "HN": "Honduras",
        "HK": "Hong Kong",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Iran",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KP": "Korea, North",
        "KR": "Korea, South",
        "XK": "Kosovo",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao People's Democratic Republic",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MO": "Macao",
        "MK": "Macedonia North",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia",
        "MD": "Moldova",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar (Burma)",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "AN": "Netherlands Antilles",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "Palestine",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn Islands",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "RE": "Reunion",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "BL": "Saint Barthelemy",
        "SH": "Saint Helena",
        "KN": "Saint Kitts and Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint Martin",
        "PM": "Saint Pierre and Miquelon",
        "VC": "Saint Vincent and the Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome and Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "CS": "Serbia and Montenegro",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SX": "Sint Maarten",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia and the South Sandwich Islands",
        "SS": "South Sudan",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname",
        "SJ": "Svalbard and Jan Mayen",
        "SE": "Sweden",
        "CH": "Switzerland",
        "SY": "Syria",
        "TW": "Taiwan",
        "TJ": "Tajikistan",
        "TZ": "Tanzania",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad and Tobago",
        "TN": "Tunisia",
        "TR": "Turkey (Türkiye)",
        "TM": "Turkmenistan",
        "TC": "Turks and Caicos Islands",
        "TV": "Tuvalu",
        "UM": "U.S. Outlying Islands",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom",
        "US": "United States",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VA": "Vatican City Holy See",
        "VE": "Venezuela",
        "VN": "Vietnam",
        "VG": "Virgin Islands, British",
        "VI": "Virgin Islands, U.S",
        "WF": "Wallis and Futuna",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    },
    "states": {
        "AF": [
            {
                "name": "Badakhshan",
                "code": "BDS"
            },
            {
                "name": "Badghīs",
                "code": "BDG"
            },
            {
                "name": "Baghlan",
                "code": "BGL"
            },
            {
                "name": "Balkh",
                "code": "BAL"
            },
            {
                "name": "Bamyān",
                "code": "BAM"
            },
            {
                "name": "Daykundī",
                "code": "DAY"
            },
            {
                "name": "Farah",
                "code": "FRA"
            },
            {
                "name": "Faryāb",
                "code": "FYB"
            },
            {
                "name": "Ghaznī",
                "code": "GHA"
            },
            {
                "name": "Ghōr",
                "code": "GHO"
            },
            {
                "name": "Helmand",
                "code": "HEL"
            },
            {
                "name": "Herat",
                "code": "HER"
            },
            {
                "name": "Jowzjan",
                "code": "JOW"
            },
            {
                "name": "Kabul",
                "code": "KAB"
            },
            {
                "name": "Kandahar",
                "code": "KAN"
            },
            {
                "name": "Kapīsā",
                "code": "KAP"
            },
            {
                "name": "Khōst",
                "code": "KHO"
            },
            {
                "name": "Kunaṟ",
                "code": "KNR"
            },
            {
                "name": "Kunduz",
                "code": "KDZ"
            },
            {
                "name": "Laghman",
                "code": "LAG"
            },
            {
                "name": "Lōgar",
                "code": "LOG"
            },
            {
                "name": "Nangarhar",
                "code": "NAN"
            },
            {
                "name": "Nīmrōz",
                "code": "NIM"
            },
            {
                "name": "Nūristan",
                "code": "NUR"
            },
            {
                "name": "Paktiya",
                "code": "PIA"
            },
            {
                "name": "Paktīka",
                "code": "PKA"
            },
            {
                "name": "Panjshayr",
                "code": "PAN"
            },
            {
                "name": "Parwan",
                "code": "PAR"
            },
            {
                "name": "Samangan",
                "code": "SAM"
            },
            {
                "name": "Sar-e Pul",
                "code": "SAR"
            },
            {
                "name": "Takhar",
                "code": "TAK"
            },
            {
                "name": "Uruzgan",
                "code": "URU"
            },
            {
                "name": "Wardak",
                "code": "WAR"
            },
            {
                "name": "Zabul",
                "code": "ZAB"
            }
        ],
        "AX": [
            {
                "name": "Åland Islands",
                "code": "Åland Islands"
            }
        ],
        "AL": [
            {
                "name": "Berat",
                "code": "01"
            },
            {
                "name": "Dibër",
                "code": "09"
            },
            {
                "name": "Durrës",
                "code": "02"
            },
            {
                "name": "Elbasan",
                "code": "03"
            },
            {
                "name": "Fier",
                "code": "04"
            },
            {
                "name": "Gjirokastër",
                "code": "05"
            },
            {
                "name": "Korçë",
                "code": "06"
            },
            {
                "name": "Kukës",
                "code": "07"
            },
            {
                "name": "Lezhë",
                "code": "08"
            },
            {
                "name": "Shkodër",
                "code": "10"
            },
            {
                "name": "Tiranë",
                "code": "11"
            },
            {
                "name": "Vlorë",
                "code": "12"
            }
        ],
        "DZ": [
            {
                "name": "Adrar",
                "code": "01"
            },
            {
                "name": "Alger",
                "code": "16"
            },
            {
                "name": "Annaba",
                "code": "23"
            },
            {
                "name": "Aïn Defla",
                "code": "44"
            },
            {
                "name": "Aïn Témouchent",
                "code": "46"
            },
            {
                "name": "Batna",
                "code": "05"
            },
            {
                "name": "Biskra",
                "code": "07"
            },
            {
                "name": "Blida",
                "code": "09"
            },
            {
                "name": "Bordj Bou Arréridj",
                "code": "34"
            },
            {
                "name": "Bouira",
                "code": "10"
            },
            {
                "name": "Boumerdès",
                "code": "35"
            },
            {
                "name": "Béchar",
                "code": "08"
            },
            {
                "name": "Béjaïa",
                "code": "06"
            },
            {
                "name": "Chlef",
                "code": "02"
            },
            {
                "name": "Constantine",
                "code": "25"
            },
            {
                "name": "Djelfa",
                "code": "17"
            },
            {
                "name": "El Bayadh",
                "code": "32"
            },
            {
                "name": "El Oued",
                "code": "39"
            },
            {
                "name": "El Tarf",
                "code": "36"
            },
            {
                "name": "Ghardaïa",
                "code": "47"
            },
            {
                "name": "Guelma",
                "code": "24"
            },
            {
                "name": "Illizi",
                "code": "33"
            },
            {
                "name": "Jijel",
                "code": "18"
            },
            {
                "name": "Khenchela",
                "code": "40"
            },
            {
                "name": "Laghouat",
                "code": "03"
            },
            {
                "name": "M'sila",
                "code": "28"
            },
            {
                "name": "Mascara",
                "code": "29"
            },
            {
                "name": "Mila",
                "code": "43"
            },
            {
                "name": "Mostaganem",
                "code": "27"
            },
            {
                "name": "Médéa",
                "code": "26"
            },
            {
                "name": "Naama",
                "code": "45"
            },
            {
                "name": "Oran",
                "code": "31"
            },
            {
                "name": "Ouargla",
                "code": "30"
            },
            {
                "name": "Oum el Bouaghi",
                "code": "04"
            },
            {
                "name": "Relizane",
                "code": "48"
            },
            {
                "name": "Saïda",
                "code": "20"
            },
            {
                "name": "Sidi Bel Abbès",
                "code": "22"
            },
            {
                "name": "Skikda",
                "code": "21"
            },
            {
                "name": "Souk Ahras",
                "code": "41"
            },
            {
                "name": "Sétif",
                "code": "19"
            },
            {
                "name": "Tamanrasset",
                "code": "11"
            },
            {
                "name": "Tiaret",
                "code": "14"
            },
            {
                "name": "Tindouf",
                "code": "37"
            },
            {
                "name": "Tipaza",
                "code": "42"
            },
            {
                "name": "Tissemsilt",
                "code": "38"
            },
            {
                "name": "Tizi Ouzou",
                "code": "15"
            },
            {
                "name": "Tlemcen",
                "code": "13"
            },
            {
                "name": "Tébessa",
                "code": "12"
            }
        ],
        "AS": [
            {
                "name": "American Samoa",
                "code": "American Samoa"
            }
        ],
        "AD": [
            {
                "name": "Andorra la Vella",
                "code": "07"
            },
            {
                "name": "Canillo",
                "code": "02"
            },
            {
                "name": "Encamp",
                "code": "03"
            },
            {
                "name": "Escaldes-Engordany",
                "code": "08"
            },
            {
                "name": "La Massana",
                "code": "04"
            },
            {
                "name": "Ordino",
                "code": "05"
            },
            {
                "name": "Sant Julià de Lòria",
                "code": "06"
            }
        ],
        "AO": [
            {
                "name": "Bengo",
                "code": "BGO"
            },
            {
                "name": "Benguela",
                "code": "BGU"
            },
            {
                "name": "Bié",
                "code": "BIE"
            },
            {
                "name": "Cabinda",
                "code": "CAB"
            },
            {
                "name": "Cuando Cubango",
                "code": "CCU"
            },
            {
                "name": "Cuanza-Norte",
                "code": "CNO"
            },
            {
                "name": "Cuanza-Sul",
                "code": "CUS"
            },
            {
                "name": "Cunene",
                "code": "CNN"
            },
            {
                "name": "Huambo",
                "code": "HUA"
            },
            {
                "name": "Huíla",
                "code": "HUI"
            },
            {
                "name": "Luanda",
                "code": "LUA"
            },
            {
                "name": "Lunda-Norte",
                "code": "LNO"
            },
            {
                "name": "Lunda-Sul",
                "code": "LSU"
            },
            {
                "name": "Malange",
                "code": "MAL"
            },
            {
                "name": "Moxico",
                "code": "MOX"
            },
            {
                "name": "Namibe",
                "code": "NAM"
            },
            {
                "name": "Uíge",
                "code": "UIG"
            },
            {
                "name": "Zaire",
                "code": "ZAI"
            }
        ],
        "AI": [
            {
                "name": "Anguilla",
                "code": "Anguilla"
            }
        ],
        "AQ": [
            {
                "name": "Antarctica",
                "code": "Antarctica"
            }
        ],
        "AG": [
            {
                "name": "Barbuda",
                "code": "10"
            },
            {
                "name": "Redonda",
                "code": "11"
            },
            {
                "name": "Saint George",
                "code": "03"
            },
            {
                "name": "Saint John",
                "code": "04"
            },
            {
                "name": "Saint Mary",
                "code": "05"
            },
            {
                "name": "Saint Paul",
                "code": "06"
            },
            {
                "name": "Saint Peter",
                "code": "07"
            },
            {
                "name": "Saint Philip",
                "code": "08"
            }
        ],
        "AR": [
            {
                "name": "Buenos Aires",
                "code": "B"
            },
            {
                "name": "Catamarca",
                "code": "K"
            },
            {
                "name": "Chaco",
                "code": "H"
            },
            {
                "name": "Chubut",
                "code": "U"
            },
            {
                "name": "Ciudad Autónoma de Buenos Aires",
                "code": "C"
            },
            {
                "name": "Corrientes",
                "code": "W"
            },
            {
                "name": "Córdoba",
                "code": "X"
            },
            {
                "name": "Entre Ríos",
                "code": "E"
            },
            {
                "name": "Formosa",
                "code": "P"
            },
            {
                "name": "Jujuy",
                "code": "Y"
            },
            {
                "name": "La Pampa",
                "code": "L"
            },
            {
                "name": "La Rioja",
                "code": "F"
            },
            {
                "name": "Mendoza",
                "code": "M"
            },
            {
                "name": "Misiones",
                "code": "N"
            },
            {
                "name": "Neuquén",
                "code": "Q"
            },
            {
                "name": "Río Negro",
                "code": "R"
            },
            {
                "name": "Salta",
                "code": "A"
            },
            {
                "name": "San Juan",
                "code": "J"
            },
            {
                "name": "San Luis",
                "code": "D"
            },
            {
                "name": "Santa Cruz",
                "code": "Z"
            },
            {
                "name": "Santa Fe",
                "code": "S"
            },
            {
                "name": "Santiago del Estero",
                "code": "G"
            },
            {
                "name": "Tierra del Fuego",
                "code": "V"
            },
            {
                "name": "Tucumán",
                "code": "T"
            }
        ],
        "AM": [
            {
                "name": "Aragac̣otn",
                "code": "AG"
            },
            {
                "name": "Ararat",
                "code": "AR"
            },
            {
                "name": "Armavir",
                "code": "AV"
            },
            {
                "name": "Erevan",
                "code": "ER"
            },
            {
                "name": "Geġark'unik'",
                "code": "GR"
            },
            {
                "name": "Kotayk'",
                "code": "KT"
            },
            {
                "name": "Loṙi",
                "code": "LO"
            },
            {
                "name": "Syunik'",
                "code": "SU"
            },
            {
                "name": "Tavuš",
                "code": "TV"
            },
            {
                "name": "Vayoć Jor",
                "code": "VD"
            },
            {
                "name": "Širak",
                "code": "SH"
            }
        ],
        "AW": [
            {
                "name": "Aruba",
                "code": "Aruba"
            }
        ],
        "AU": [
            {
                "name": "Australian Capital Territory",
                "code": "ACT"
            },
            {
                "name": "New South Wales",
                "code": "NSW"
            },
            {
                "name": "Northern Territory",
                "code": "NT"
            },
            {
                "name": "Queensland",
                "code": "QLD"
            },
            {
                "name": "South Australia",
                "code": "SA"
            },
            {
                "name": "Tasmania",
                "code": "TAS"
            },
            {
                "name": "Victoria",
                "code": "VIC"
            },
            {
                "name": "Western Australia",
                "code": "WA"
            }
        ],
        "AT": [
            {
                "name": "Burgenland",
                "code": "1"
            },
            {
                "name": "Carinthia",
                "code": "2"
            },
            {
                "name": "Lower Austria",
                "code": "3"
            },
            {
                "name": "Salzburg",
                "code": "5"
            },
            {
                "name": "Styria",
                "code": "6"
            },
            {
                "name": "Tyrol",
                "code": "7"
            },
            {
                "name": "Upper Austria",
                "code": "4"
            },
            {
                "name": "Vienna",
                "code": "9"
            },
            {
                "name": "Vorarlberg",
                "code": "8"
            }
        ],
        "AZ": [
            {
                "name": "Absheron District",
                "code": "ABS"
            },
            {
                "name": "Agdam District",
                "code": "AGM"
            },
            {
                "name": "Agdash District",
                "code": "AGS"
            },
            {
                "name": "Aghjabadi District",
                "code": "AGC"
            },
            {
                "name": "Agstafa District",
                "code": "AGA"
            },
            {
                "name": "Agsu District",
                "code": "AGU"
            },
            {
                "name": "Astara District",
                "code": "AST"
            },
            {
                "name": "Babek District",
                "code": "BAB"
            },
            {
                "name": "Baku",
                "code": "BA"
            },
            {
                "name": "Balakan District",
                "code": "BAL"
            },
            {
                "name": "Barda District",
                "code": "BAR"
            },
            {
                "name": "Beylagan District",
                "code": "BEY"
            },
            {
                "name": "Bilasuvar District",
                "code": "BIL"
            },
            {
                "name": "Dashkasan District",
                "code": "DAS"
            },
            {
                "name": "Fizuli District",
                "code": "FUZ"
            },
            {
                "name": "Ganja",
                "code": "GA"
            },
            {
                "name": "Gədəbəy",
                "code": "GAD"
            },
            {
                "name": "Gobustan District",
                "code": "QOB"
            },
            {
                "name": "Goranboy District",
                "code": "GOR"
            },
            {
                "name": "Goychay",
                "code": "GOY"
            },
            {
                "name": "Goygol District",
                "code": "GYG"
            },
            {
                "name": "Hajigabul District",
                "code": "HAC"
            },
            {
                "name": "Imishli District",
                "code": "IMI"
            },
            {
                "name": "Ismailli District",
                "code": "ISM"
            },
            {
                "name": "Jabrayil District",
                "code": "CAB"
            },
            {
                "name": "Jalilabad District",
                "code": "CAL"
            },
            {
                "name": "Julfa District",
                "code": "CUL"
            },
            {
                "name": "Kalbajar District",
                "code": "KAL"
            },
            {
                "name": "Kangarli District",
                "code": "KAN"
            },
            {
                "name": "Khachmaz District",
                "code": "XAC"
            },
            {
                "name": "Khizi District",
                "code": "XIZ"
            },
            {
                "name": "Khojali District",
                "code": "XCI"
            },
            {
                "name": "Kurdamir District",
                "code": "KUR"
            },
            {
                "name": "Lachin District",
                "code": "LAC"
            },
            {
                "name": "Lankaran",
                "code": "LAN"
            },
            {
                "name": "Lankaran District",
                "code": "LA"
            },
            {
                "name": "Lerik District",
                "code": "LER"
            },
            {
                "name": "Martuni",
                "code": "XVD"
            },
            {
                "name": "Masally District",
                "code": "MAS"
            },
            {
                "name": "Mingachevir",
                "code": "MI"
            },
            {
                "name": "Nakhchivan Autonomous Republic",
                "code": "NX"
            },
            {
                "name": "Neftchala District",
                "code": "NEF"
            },
            {
                "name": "Oghuz District",
                "code": "OGU"
            },
            {
                "name": "Ordubad District",
                "code": "ORD"
            },
            {
                "name": "Qabala District",
                "code": "QAB"
            },
            {
                "name": "Qakh District",
                "code": "QAX"
            },
            {
                "name": "Qazakh District",
                "code": "QAZ"
            },
            {
                "name": "Quba District",
                "code": "QBA"
            },
            {
                "name": "Qubadli District",
                "code": "QBI"
            },
            {
                "name": "Qusar District",
                "code": "QUS"
            },
            {
                "name": "Saatly District",
                "code": "SAT"
            },
            {
                "name": "Sabirabad District",
                "code": "SAB"
            },
            {
                "name": "Sadarak District",
                "code": "SAD"
            },
            {
                "name": "Salyan District",
                "code": "SAL"
            },
            {
                "name": "Samukh District",
                "code": "SMX"
            },
            {
                "name": "Shabran District",
                "code": "SBN"
            },
            {
                "name": "Shahbuz District",
                "code": "SAH"
            },
            {
                "name": "Shaki",
                "code": "SA"
            },
            {
                "name": "Shaki District",
                "code": "SAK"
            },
            {
                "name": "Shamakhi District",
                "code": "SMI"
            },
            {
                "name": "Shamkir District",
                "code": "SKR"
            },
            {
                "name": "Sharur District",
                "code": "SAR"
            },
            {
                "name": "Shirvan",
                "code": "SR"
            },
            {
                "name": "Shusha District",
                "code": "SUS"
            },
            {
                "name": "Siazan District",
                "code": "SIY"
            },
            {
                "name": "Sumqayit",
                "code": "SM"
            },
            {
                "name": "Tartar District",
                "code": "TAR"
            },
            {
                "name": "Tovuz District",
                "code": "TOV"
            },
            {
                "name": "Ujar District",
                "code": "UCA"
            },
            {
                "name": "Yardymli District",
                "code": "YAR"
            },
            {
                "name": "Yevlakh",
                "code": "YE"
            },
            {
                "name": "Yevlakh District",
                "code": "YEV"
            },
            {
                "name": "Zangilan District",
                "code": "ZAN"
            },
            {
                "name": "Zaqatala District",
                "code": "ZAQ"
            },
            {
                "name": "Zardab District",
                "code": "ZAR"
            }
        ],
        "BS": [
            {
                "name": "Acklins",
                "code": "AK"
            },
            {
                "name": "Acklins and Crooked Islands",
                "code": "AC"
            },
            {
                "name": "Berry Islands",
                "code": "BY"
            },
            {
                "name": "Bimini",
                "code": "BI"
            },
            {
                "name": "Black Point",
                "code": "BP"
            },
            {
                "name": "Cat Island",
                "code": "CI"
            },
            {
                "name": "Central Abaco",
                "code": "CO"
            },
            {
                "name": "Central Andros",
                "code": "CS"
            },
            {
                "name": "Central Eleuthera",
                "code": "CE"
            },
            {
                "name": "Crooked Island",
                "code": "CK"
            },
            {
                "name": "East Grand Bahama",
                "code": "EG"
            },
            {
                "name": "Exuma",
                "code": "EX"
            },
            {
                "name": "Freeport",
                "code": "FP"
            },
            {
                "name": "Fresh Creek",
                "code": "FC"
            },
            {
                "name": "Governor's Harbour",
                "code": "GH"
            },
            {
                "name": "Grand Cay",
                "code": "GC"
            },
            {
                "name": "Green Turtle Cay",
                "code": "GT"
            },
            {
                "name": "Harbour Island",
                "code": "HI"
            },
            {
                "name": "High Rock",
                "code": "HR"
            },
            {
                "name": "Hope Town",
                "code": "HT"
            },
            {
                "name": "Inagua",
                "code": "IN"
            },
            {
                "name": "Kemps Bay",
                "code": "KB"
            },
            {
                "name": "Long Island",
                "code": "LI"
            },
            {
                "name": "Mangrove Cay",
                "code": "MC"
            },
            {
                "name": "Marsh Harbour",
                "code": "MH"
            },
            {
                "name": "Mayaguana District",
                "code": "MG"
            },
            {
                "name": "New Providence",
                "code": "NP"
            },
            {
                "name": "Nichollstown and Berry Islands",
                "code": "NB"
            },
            {
                "name": "North Abaco",
                "code": "NO"
            },
            {
                "name": "North Andros",
                "code": "NS"
            },
            {
                "name": "North Eleuthera",
                "code": "NE"
            },
            {
                "name": "Ragged Island",
                "code": "RI"
            },
            {
                "name": "Rock Sound",
                "code": "RS"
            },
            {
                "name": "Rum Cay District",
                "code": "RC"
            },
            {
                "name": "San Salvador and Rum Cay",
                "code": "SR"
            },
            {
                "name": "San Salvador Island",
                "code": "SS"
            },
            {
                "name": "Sandy Point",
                "code": "SP"
            },
            {
                "name": "South Abaco",
                "code": "SO"
            },
            {
                "name": "South Andros",
                "code": "SA"
            },
            {
                "name": "South Eleuthera",
                "code": "SE"
            },
            {
                "name": "Spanish Wells",
                "code": "SW"
            },
            {
                "name": "West Grand Bahama",
                "code": "WG"
            }
        ],
        "BH": [
            {
                "name": "Capital Governorate",
                "code": "13"
            },
            {
                "name": "Central Governorate",
                "code": "16"
            },
            {
                "name": "Muharraq Governorate",
                "code": "15"
            },
            {
                "name": "Northern Governorate",
                "code": "17"
            },
            {
                "name": "Southern Governorate",
                "code": "14"
            }
        ],
        "BD": [
            {
                "name": "Bagerhat District",
                "code": "05"
            },
            {
                "name": "Bahadia",
                "code": "33"
            },
            {
                "name": "Bandarban District",
                "code": "01"
            },
            {
                "name": "Barguna District",
                "code": "02"
            },
            {
                "name": "Barisal District",
                "code": "06"
            },
            {
                "name": "Barisal Division",
                "code": "A"
            },
            {
                "name": "Bhola District",
                "code": "07"
            },
            {
                "name": "Bogra District",
                "code": "03"
            },
            {
                "name": "Brahmanbaria District",
                "code": "04"
            },
            {
                "name": "Chandpur District",
                "code": "09"
            },
            {
                "name": "Chapai Nawabganj District",
                "code": "45"
            },
            {
                "name": "Chittagong District",
                "code": "10"
            },
            {
                "name": "Chittagong Division",
                "code": "B"
            },
            {
                "name": "Chuadanga District",
                "code": "12"
            },
            {
                "name": "Comilla District",
                "code": "08"
            },
            {
                "name": "Cox's Bazar District",
                "code": "11"
            },
            {
                "name": "Dhaka District",
                "code": "13"
            },
            {
                "name": "Dhaka Division",
                "code": "C"
            },
            {
                "name": "Dinajpur District",
                "code": "14"
            },
            {
                "name": "Faridpur District",
                "code": "15"
            },
            {
                "name": "Feni District",
                "code": "16"
            },
            {
                "name": "Gaibandha District",
                "code": "19"
            },
            {
                "name": "Gazipur District",
                "code": "18"
            },
            {
                "name": "Gopalganj District",
                "code": "17"
            },
            {
                "name": "Habiganj District",
                "code": "20"
            },
            {
                "name": "Jamalpur District",
                "code": "21"
            },
            {
                "name": "Jessore District",
                "code": "22"
            },
            {
                "name": "Jhalokati District",
                "code": "25"
            },
            {
                "name": "Jhenaidah District",
                "code": "23"
            },
            {
                "name": "Joypurhat District",
                "code": "24"
            },
            {
                "name": "Khagrachari District",
                "code": "29"
            },
            {
                "name": "Khulna District",
                "code": "27"
            },
            {
                "name": "Khulna Division",
                "code": "D"
            },
            {
                "name": "Kishoreganj District",
                "code": "26"
            },
            {
                "name": "Kurigram District",
                "code": "28"
            },
            {
                "name": "Kushtia District",
                "code": "30"
            },
            {
                "name": "Lakshmipur District",
                "code": "31"
            },
            {
                "name": "Lalmonirhat District",
                "code": "32"
            },
            {
                "name": "Madaripur District",
                "code": "36"
            },
            {
                "name": "Meherpur District",
                "code": "39"
            },
            {
                "name": "Moulvibazar District",
                "code": "38"
            },
            {
                "name": "Munshiganj District",
                "code": "35"
            },
            {
                "name": "Mymensingh District",
                "code": "34"
            },
            {
                "name": "Mymensingh Division",
                "code": "H"
            },
            {
                "name": "Naogaon District",
                "code": "48"
            },
            {
                "name": "Narail District",
                "code": "43"
            },
            {
                "name": "Narayanganj District",
                "code": "40"
            },
            {
                "name": "Natore District",
                "code": "44"
            },
            {
                "name": "Netrokona District",
                "code": "41"
            },
            {
                "name": "Nilphamari District",
                "code": "46"
            },
            {
                "name": "Noakhali District",
                "code": "47"
            },
            {
                "name": "Pabna District",
                "code": "49"
            },
            {
                "name": "Panchagarh District",
                "code": "52"
            },
            {
                "name": "Patuakhali District",
                "code": "51"
            },
            {
                "name": "Pirojpur District",
                "code": "50"
            },
            {
                "name": "Rajbari District",
                "code": "53"
            },
            {
                "name": "Rajshahi District",
                "code": "54"
            },
            {
                "name": "Rajshahi Division",
                "code": "E"
            },
            {
                "name": "Rangamati Hill District",
                "code": "56"
            },
            {
                "name": "Rangpur District",
                "code": "55"
            },
            {
                "name": "Rangpur Division",
                "code": "F"
            },
            {
                "name": "Satkhira District",
                "code": "58"
            },
            {
                "name": "Shariatpur District",
                "code": "62"
            },
            {
                "name": "Sherpur District",
                "code": "57"
            },
            {
                "name": "Sirajganj District",
                "code": "59"
            },
            {
                "name": "Sunamganj District",
                "code": "61"
            },
            {
                "name": "Sylhet District",
                "code": "60"
            },
            {
                "name": "Sylhet Division",
                "code": "G"
            },
            {
                "name": "Tangail District",
                "code": "63"
            },
            {
                "name": "Thakurgaon District",
                "code": "64"
            }
        ],
        "BB": [
            {
                "name": "Christ Church",
                "code": "01"
            },
            {
                "name": "Saint Andrew",
                "code": "02"
            },
            {
                "name": "Saint George",
                "code": "03"
            },
            {
                "name": "Saint James",
                "code": "04"
            },
            {
                "name": "Saint John",
                "code": "05"
            },
            {
                "name": "Saint Joseph",
                "code": "06"
            },
            {
                "name": "Saint Lucy",
                "code": "07"
            },
            {
                "name": "Saint Michael",
                "code": "08"
            },
            {
                "name": "Saint Peter",
                "code": "09"
            },
            {
                "name": "Saint Philip",
                "code": "10"
            },
            {
                "name": "Saint Thomas",
                "code": "11"
            }
        ],
        "BY": [
            {
                "name": "Brest Region",
                "code": "BR"
            },
            {
                "name": "Gomel Region",
                "code": "HO"
            },
            {
                "name": "Grodno Region",
                "code": "HR"
            },
            {
                "name": "Minsk",
                "code": "HM"
            },
            {
                "name": "Minsk Region",
                "code": "MI"
            },
            {
                "name": "Mogilev Region",
                "code": "MA"
            },
            {
                "name": "Vitebsk Region",
                "code": "VI"
            }
        ],
        "BE": [
            {
                "name": "Antwerp",
                "code": "VAN"
            },
            {
                "name": "Brussels-Capital Region",
                "code": "BRU"
            },
            {
                "name": "East Flanders",
                "code": "VOV"
            },
            {
                "name": "Flanders",
                "code": "VLG"
            },
            {
                "name": "Flemish Brabant",
                "code": "VBR"
            },
            {
                "name": "Hainaut",
                "code": "WHT"
            },
            {
                "name": "Liège",
                "code": "WLG"
            },
            {
                "name": "Limburg",
                "code": "VLI"
            },
            {
                "name": "Luxembourg",
                "code": "WLX"
            },
            {
                "name": "Namur",
                "code": "WNA"
            },
            {
                "name": "Wallonia",
                "code": "WAL"
            },
            {
                "name": "Walloon Brabant",
                "code": "WBR"
            },
            {
                "name": "West Flanders",
                "code": "VWV"
            }
        ],
        "BZ": [
            {
                "name": "Belize District",
                "code": "BZ"
            },
            {
                "name": "Cayo District",
                "code": "CY"
            },
            {
                "name": "Corozal District",
                "code": "CZL"
            },
            {
                "name": "Orange Walk District",
                "code": "OW"
            },
            {
                "name": "Stann Creek District",
                "code": "SC"
            },
            {
                "name": "Toledo District",
                "code": "TOL"
            }
        ],
        "BJ": [
            {
                "name": "Alibori Department",
                "code": "AL"
            },
            {
                "name": "Atakora Department",
                "code": "AK"
            },
            {
                "name": "Atlantique Department",
                "code": "AQ"
            },
            {
                "name": "Borgou Department",
                "code": "BO"
            },
            {
                "name": "Collines Department",
                "code": "CO"
            },
            {
                "name": "Donga Department",
                "code": "DO"
            },
            {
                "name": "Kouffo Department",
                "code": "KO"
            },
            {
                "name": "Littoral Department",
                "code": "LI"
            },
            {
                "name": "Mono Department",
                "code": "MO"
            },
            {
                "name": "Ouémé Department",
                "code": "OU"
            },
            {
                "name": "Plateau Department",
                "code": "PL"
            },
            {
                "name": "Zou Department",
                "code": "ZO"
            }
        ],
        "BM": [
            {
                "name": "Devonshire Parish",
                "code": "DEV"
            },
            {
                "name": "Hamilton Municipality",
                "code": "HAM"
            },
            {
                "name": "Hamilton Parish",
                "code": "HA"
            },
            {
                "name": "Paget Parish",
                "code": "PAG"
            },
            {
                "name": "Pembroke Parish",
                "code": "PEM"
            },
            {
                "name": "Saint George's Municipality",
                "code": "SG"
            },
            {
                "name": "Saint George's Parish",
                "code": "SGE"
            },
            {
                "name": "Sandys Parish",
                "code": "SAN"
            },
            {
                "name": "Smith's Parish,",
                "code": "SMI"
            },
            {
                "name": "Southampton Parish",
                "code": "SOU"
            },
            {
                "name": "Warwick Parish",
                "code": "WAR"
            }
        ],
        "BT": [
            {
                "name": "Bumthang District",
                "code": "33"
            },
            {
                "name": "Chukha District",
                "code": "12"
            },
            {
                "name": "Dagana District",
                "code": "22"
            },
            {
                "name": "Gasa District",
                "code": "GA"
            },
            {
                "name": "Haa District",
                "code": "13"
            },
            {
                "name": "Lhuntse District",
                "code": "44"
            },
            {
                "name": "Mongar District",
                "code": "42"
            },
            {
                "name": "Paro District",
                "code": "11"
            },
            {
                "name": "Pemagatshel District",
                "code": "43"
            },
            {
                "name": "Punakha District",
                "code": "23"
            },
            {
                "name": "Samdrup Jongkhar District",
                "code": "45"
            },
            {
                "name": "Samtse District",
                "code": "14"
            },
            {
                "name": "Sarpang District",
                "code": "31"
            },
            {
                "name": "Thimphu District",
                "code": "15"
            },
            {
                "name": "Trashigang District",
                "code": "41"
            },
            {
                "name": "Trongsa District",
                "code": "32"
            },
            {
                "name": "Tsirang District",
                "code": "21"
            },
            {
                "name": "Wangdue Phodrang District",
                "code": "24"
            },
            {
                "name": "Zhemgang District",
                "code": "34"
            }
        ],
        "BO": [
            {
                "name": "Beni Department",
                "code": "B"
            },
            {
                "name": "Chuquisaca Department",
                "code": "H"
            },
            {
                "name": "Cochabamba Department",
                "code": "C"
            },
            {
                "name": "La Paz Department",
                "code": "L"
            },
            {
                "name": "Oruro Department",
                "code": "O"
            },
            {
                "name": "Pando Department",
                "code": "N"
            },
            {
                "name": "Potosí Department",
                "code": "P"
            },
            {
                "name": "Santa Cruz Department",
                "code": "S"
            },
            {
                "name": "Tarija Department",
                "code": "T"
            }
        ],
        "BQ": [
            {
                "name": "Caribbean Netherlands",
                "code": "Caribbean Netherlands"
            }
        ],
        "BA": [
            {
                "name": "Bosnian Podrinje Canton",
                "code": "05"
            },
            {
                "name": "Brčko District",
                "code": "BRC"
            },
            {
                "name": "Canton 10",
                "code": "10"
            },
            {
                "name": "Central Bosnia Canton",
                "code": "06"
            },
            {
                "name": "Federation of Bosnia and Herzegovina",
                "code": "BIH"
            },
            {
                "name": "Herzegovina-Neretva Canton",
                "code": "07"
            },
            {
                "name": "Posavina Canton",
                "code": "02"
            },
            {
                "name": "Republika Srpska",
                "code": "SRP"
            },
            {
                "name": "Sarajevo Canton",
                "code": "09"
            },
            {
                "name": "Tuzla Canton",
                "code": "03"
            },
            {
                "name": "Una-Sana Canton",
                "code": "01"
            },
            {
                "name": "West Herzegovina Canton",
                "code": "08"
            },
            {
                "name": "Zenica-Doboj Canton",
                "code": "04"
            }
        ],
        "BW": [
            {
                "name": "Central District",
                "code": "CE"
            },
            {
                "name": "Ghanzi District",
                "code": "GH"
            },
            {
                "name": "Kgalagadi District",
                "code": "KG"
            },
            {
                "name": "Kgatleng District",
                "code": "KL"
            },
            {
                "name": "Kweneng District",
                "code": "KW"
            },
            {
                "name": "Ngamiland",
                "code": "NG"
            },
            {
                "name": "North-East District",
                "code": "NE"
            },
            {
                "name": "North-West District",
                "code": "NW"
            },
            {
                "name": "South-East District",
                "code": "SE"
            },
            {
                "name": "Southern District",
                "code": "SO"
            }
        ],
        "BV": [
            {
                "name": "Bouvet Island",
                "code": "Bouvet Island"
            }
        ],
        "BR": [
            {
                "name": "Acre",
                "code": "AC"
            },
            {
                "name": "Alagoas",
                "code": "AL"
            },
            {
                "name": "Amapá",
                "code": "AP"
            },
            {
                "name": "Amazonas",
                "code": "AM"
            },
            {
                "name": "Bahia",
                "code": "BA"
            },
            {
                "name": "Ceará",
                "code": "CE"
            },
            {
                "name": "Espírito Santo",
                "code": "ES"
            },
            {
                "name": "Federal District",
                "code": "DF"
            },
            {
                "name": "Goiás",
                "code": "GO"
            },
            {
                "name": "Maranhão",
                "code": "MA"
            },
            {
                "name": "Mato Grosso",
                "code": "MT"
            },
            {
                "name": "Mato Grosso do Sul",
                "code": "MS"
            },
            {
                "name": "Minas Gerais",
                "code": "MG"
            },
            {
                "name": "Pará",
                "code": "PA"
            },
            {
                "name": "Paraíba",
                "code": "PB"
            },
            {
                "name": "Paraná",
                "code": "PR"
            },
            {
                "name": "Pernambuco",
                "code": "PE"
            },
            {
                "name": "Piauí",
                "code": "PI"
            },
            {
                "name": "Rio de Janeiro",
                "code": "RJ"
            },
            {
                "name": "Rio Grande do Norte",
                "code": "RN"
            },
            {
                "name": "Rio Grande do Sul",
                "code": "RS"
            },
            {
                "name": "Rondônia",
                "code": "RO"
            },
            {
                "name": "Roraima",
                "code": "RR"
            },
            {
                "name": "Santa Catarina",
                "code": "SC"
            },
            {
                "name": "São Paulo",
                "code": "SP"
            },
            {
                "name": "Sergipe",
                "code": "SE"
            },
            {
                "name": "Tocantins",
                "code": "TO"
            }
        ],
        "IO": [
            {
                "name": "British Indian Ocean Territory",
                "code": "British Indian Ocean Territory"
            }
        ],
        "BN": [
            {
                "name": "Belait District",
                "code": "BE"
            },
            {
                "name": "Brunei-Muara District",
                "code": "BM"
            },
            {
                "name": "Temburong District",
                "code": "TE"
            },
            {
                "name": "Tutong District",
                "code": "TU"
            }
        ],
        "BG": [
            {
                "name": "Blagoevgrad Province",
                "code": "01"
            },
            {
                "name": "Burgas Province",
                "code": "02"
            },
            {
                "name": "Dobrich Province",
                "code": "08"
            },
            {
                "name": "Gabrovo Province",
                "code": "07"
            },
            {
                "name": "Haskovo Province",
                "code": "26"
            },
            {
                "name": "Kardzhali Province",
                "code": "09"
            },
            {
                "name": "Kyustendil Province",
                "code": "10"
            },
            {
                "name": "Lovech Province",
                "code": "11"
            },
            {
                "name": "Montana Province",
                "code": "12"
            },
            {
                "name": "Pazardzhik Province",
                "code": "13"
            },
            {
                "name": "Pernik Province",
                "code": "14"
            },
            {
                "name": "Pleven Province",
                "code": "15"
            },
            {
                "name": "Plovdiv Province",
                "code": "16"
            },
            {
                "name": "Razgrad Province",
                "code": "17"
            },
            {
                "name": "Ruse Province",
                "code": "18"
            },
            {
                "name": "Shumen",
                "code": "27"
            },
            {
                "name": "Silistra Province",
                "code": "19"
            },
            {
                "name": "Sliven Province",
                "code": "20"
            },
            {
                "name": "Smolyan Province",
                "code": "21"
            },
            {
                "name": "Sofia City Province",
                "code": "22"
            },
            {
                "name": "Sofia Province",
                "code": "23"
            },
            {
                "name": "Stara Zagora Province",
                "code": "24"
            },
            {
                "name": "Targovishte Province",
                "code": "25"
            },
            {
                "name": "Varna Province",
                "code": "03"
            },
            {
                "name": "Veliko Tarnovo Province",
                "code": "04"
            },
            {
                "name": "Vidin Province",
                "code": "05"
            },
            {
                "name": "Vratsa Province",
                "code": "06"
            },
            {
                "name": "Yambol Province",
                "code": "28"
            }
        ],
        "BF": [
            {
                "name": "Balé Province",
                "code": "BAL"
            },
            {
                "name": "Bam Province",
                "code": "BAM"
            },
            {
                "name": "Banwa Province",
                "code": "BAN"
            },
            {
                "name": "Bazèga Province",
                "code": "BAZ"
            },
            {
                "name": "Boucle du Mouhoun Region",
                "code": "01"
            },
            {
                "name": "Bougouriba Province",
                "code": "BGR"
            },
            {
                "name": "Boulgou",
                "code": "BLG"
            },
            {
                "name": "Cascades Region",
                "code": "02"
            },
            {
                "name": "Centre",
                "code": "03"
            },
            {
                "name": "Centre-Est Region",
                "code": "04"
            },
            {
                "name": "Centre-Nord Region",
                "code": "05"
            },
            {
                "name": "Centre-Ouest Region",
                "code": "06"
            },
            {
                "name": "Centre-Sud Region",
                "code": "07"
            },
            {
                "name": "Comoé Province",
                "code": "COM"
            },
            {
                "name": "Est Region",
                "code": "08"
            },
            {
                "name": "Ganzourgou Province",
                "code": "GAN"
            },
            {
                "name": "Gnagna Province",
                "code": "GNA"
            },
            {
                "name": "Gourma Province",
                "code": "GOU"
            },
            {
                "name": "Hauts-Bassins Region",
                "code": "09"
            },
            {
                "name": "Houet Province",
                "code": "HOU"
            },
            {
                "name": "Ioba Province",
                "code": "IOB"
            },
            {
                "name": "Kadiogo Province",
                "code": "KAD"
            },
            {
                "name": "Kénédougou Province",
                "code": "KEN"
            },
            {
                "name": "Komondjari Province",
                "code": "KMD"
            },
            {
                "name": "Kompienga Province",
                "code": "KMP"
            },
            {
                "name": "Kossi Province",
                "code": "KOS"
            },
            {
                "name": "Koulpélogo Province",
                "code": "KOP"
            },
            {
                "name": "Kouritenga Province",
                "code": "KOT"
            },
            {
                "name": "Kourwéogo Province",
                "code": "KOW"
            },
            {
                "name": "Léraba Province",
                "code": "LER"
            },
            {
                "name": "Loroum Province",
                "code": "LOR"
            },
            {
                "name": "Mouhoun",
                "code": "MOU"
            },
            {
                "name": "Nahouri Province",
                "code": "NAO"
            },
            {
                "name": "Namentenga Province",
                "code": "NAM"
            },
            {
                "name": "Nayala Province",
                "code": "NAY"
            },
            {
                "name": "Nord Region, Burkina Faso",
                "code": "10"
            },
            {
                "name": "Noumbiel Province",
                "code": "NOU"
            },
            {
                "name": "Oubritenga Province",
                "code": "OUB"
            },
            {
                "name": "Oudalan Province",
                "code": "OUD"
            },
            {
                "name": "Passoré Province",
                "code": "PAS"
            },
            {
                "name": "Plateau-Central Region",
                "code": "11"
            },
            {
                "name": "Poni Province",
                "code": "PON"
            },
            {
                "name": "Sahel Region",
                "code": "12"
            },
            {
                "name": "Sanguié Province",
                "code": "SNG"
            },
            {
                "name": "Sanmatenga Province",
                "code": "SMT"
            },
            {
                "name": "Séno Province",
                "code": "SEN"
            },
            {
                "name": "Sissili Province",
                "code": "SIS"
            },
            {
                "name": "Soum Province",
                "code": "SOM"
            },
            {
                "name": "Sourou Province",
                "code": "SOR"
            },
            {
                "name": "Sud-Ouest Region",
                "code": "13"
            },
            {
                "name": "Tapoa Province",
                "code": "TAP"
            },
            {
                "name": "Tuy Province",
                "code": "TUI"
            },
            {
                "name": "Yagha Province",
                "code": "YAG"
            },
            {
                "name": "Yatenga Province",
                "code": "YAT"
            },
            {
                "name": "Ziro Province",
                "code": "ZIR"
            },
            {
                "name": "Zondoma Province",
                "code": "ZON"
            },
            {
                "name": "Zoundwéogo Province",
                "code": "ZOU"
            }
        ],
        "BI": [
            {
                "name": "Bubanza Province",
                "code": "BB"
            },
            {
                "name": "Bujumbura Mairie Province",
                "code": "BM"
            },
            {
                "name": "Bujumbura Rural Province",
                "code": "BL"
            },
            {
                "name": "Bururi Province",
                "code": "BR"
            },
            {
                "name": "Cankuzo Province",
                "code": "CA"
            },
            {
                "name": "Cibitoke Province",
                "code": "CI"
            },
            {
                "name": "Gitega Province",
                "code": "GI"
            },
            {
                "name": "Karuzi Province",
                "code": "KR"
            },
            {
                "name": "Kayanza Province",
                "code": "KY"
            },
            {
                "name": "Kirundo Province",
                "code": "KI"
            },
            {
                "name": "Makamba Province",
                "code": "MA"
            },
            {
                "name": "Muramvya Province",
                "code": "MU"
            },
            {
                "name": "Muyinga Province",
                "code": "MY"
            },
            {
                "name": "Mwaro Province",
                "code": "MW"
            },
            {
                "name": "Ngozi Province",
                "code": "NG"
            },
            {
                "name": "Rumonge Province",
                "code": "RM"
            },
            {
                "name": "Rutana Province",
                "code": "RT"
            },
            {
                "name": "Ruyigi Province",
                "code": "RY"
            }
        ],
        "KH": [
            {
                "name": "Banteay Meanchey Province",
                "code": "1"
            },
            {
                "name": "Battambang Province",
                "code": "2"
            },
            {
                "name": "Kampong Cham Province",
                "code": "3"
            },
            {
                "name": "Kampong Chhnang Province",
                "code": "4"
            },
            {
                "name": "Kampong Speu Province",
                "code": "5"
            },
            {
                "name": "Kampot Province",
                "code": "7"
            },
            {
                "name": "Kandal Province",
                "code": "8"
            },
            {
                "name": "Kep Province",
                "code": "23"
            },
            {
                "name": "Koh Kong Province",
                "code": "9"
            },
            {
                "name": "Kratié Province",
                "code": "10"
            },
            {
                "name": "Mondulkiri Province",
                "code": "11"
            },
            {
                "name": "Oddar Meanchey Province",
                "code": "22"
            },
            {
                "name": "Pailin Province",
                "code": "24"
            },
            {
                "name": "Phnom Penh",
                "code": "12"
            },
            {
                "name": "Preah Vihear Province",
                "code": "13"
            },
            {
                "name": "Prey Veng Province",
                "code": "14"
            },
            {
                "name": "Pursat Province",
                "code": "15"
            },
            {
                "name": "Ratanakiri Province",
                "code": "16"
            },
            {
                "name": "Siem Reap Province",
                "code": "17"
            },
            {
                "name": "Sihanoukville Province",
                "code": "18"
            },
            {
                "name": "Stung Treng Province",
                "code": "19"
            },
            {
                "name": "Svay Rieng Province",
                "code": "20"
            },
            {
                "name": "Takéo Province",
                "code": "21"
            },
            {
                "name": "Tai Po District",
                "code": "NTP"
            }
        ],
        "CM": [
            {
                "name": "Adamawa",
                "code": "AD"
            },
            {
                "name": "Centre",
                "code": "CE"
            },
            {
                "name": "East",
                "code": "ES"
            },
            {
                "name": "Far North",
                "code": "EN"
            },
            {
                "name": "Littoral",
                "code": "LT"
            },
            {
                "name": "North",
                "code": "NO"
            },
            {
                "name": "Northwest",
                "code": "NW"
            },
            {
                "name": "South",
                "code": "SU"
            },
            {
                "name": "Southwest",
                "code": "SW"
            },
            {
                "name": "West",
                "code": "OU"
            }
        ],
        "CA": [
            {
                "name": "Alberta",
                "code": "AB"
            },
            {
                "name": "British Columbia",
                "code": "BC"
            },
            {
                "name": "Manitoba",
                "code": "MB"
            },
            {
                "name": "New Brunswick",
                "code": "NB"
            },
            {
                "name": "Newfoundland and Labrador",
                "code": "NL"
            },
            {
                "name": "Northwest Territories",
                "code": "NT"
            },
            {
                "name": "Nova Scotia",
                "code": "NS"
            },
            {
                "name": "Nunavut",
                "code": "NU"
            },
            {
                "name": "Ontario",
                "code": "ON"
            },
            {
                "name": "Prince Edward Island",
                "code": "PE"
            },
            {
                "name": "Quebec",
                "code": "QC"
            },
            {
                "name": "Saskatchewan",
                "code": "SK"
            },
            {
                "name": "Yukon",
                "code": "YT"
            }
        ],
        "CV": [
            {
                "name": "Barlavento Islands",
                "code": "B"
            },
            {
                "name": "Boa Vista",
                "code": "BV"
            },
            {
                "name": "Brava",
                "code": "BR"
            },
            {
                "name": "Maio Municipality",
                "code": "MA"
            },
            {
                "name": "Mosteiros",
                "code": "MO"
            },
            {
                "name": "Paul",
                "code": "PA"
            },
            {
                "name": "Porto Novo",
                "code": "PN"
            },
            {
                "name": "Praia",
                "code": "PR"
            },
            {
                "name": "Ribeira Brava Municipality",
                "code": "RB"
            },
            {
                "name": "Ribeira Grande",
                "code": "RG"
            },
            {
                "name": "Ribeira Grande de Santiago",
                "code": "RS"
            },
            {
                "name": "Sal",
                "code": "SL"
            },
            {
                "name": "Santa Catarina",
                "code": "CA"
            },
            {
                "name": "Santa Catarina do Fogo",
                "code": "CF"
            },
            {
                "name": "Santa Cruz",
                "code": "CR"
            },
            {
                "name": "São Domingos",
                "code": "SD"
            },
            {
                "name": "São Filipe",
                "code": "SF"
            },
            {
                "name": "São Lourenço dos Órgãos",
                "code": "SO"
            },
            {
                "name": "São Miguel",
                "code": "SM"
            },
            {
                "name": "São Vicente",
                "code": "SV"
            },
            {
                "name": "Sotavento Islands",
                "code": "S"
            },
            {
                "name": "Tarrafal",
                "code": "TA"
            },
            {
                "name": "Tarrafal de São Nicolau",
                "code": "TS"
            }
        ],
        "KY": [
            {
                "name": "Cayman Islands",
                "code": "Cayman Islands"
            }
        ],
        "CF": [
            {
                "name": "Bamingui-Bangoran Prefecture",
                "code": "BB"
            },
            {
                "name": "Bangui",
                "code": "BGF"
            },
            {
                "name": "Basse-Kotto Prefecture",
                "code": "BK"
            },
            {
                "name": "Haut-Mbomou Prefecture",
                "code": "HM"
            },
            {
                "name": "Haute-Kotto Prefecture",
                "code": "HK"
            },
            {
                "name": "Kémo Prefecture",
                "code": "KG"
            },
            {
                "name": "Lobaye Prefecture",
                "code": "LB"
            },
            {
                "name": "Mambéré-Kadéï",
                "code": "HS"
            },
            {
                "name": "Mbomou Prefecture",
                "code": "MB"
            },
            {
                "name": "Nana-Grébizi Economic Prefecture",
                "code": "KB"
            },
            {
                "name": "Nana-Mambéré Prefecture",
                "code": "NM"
            },
            {
                "name": "Ombella-M'Poko Prefecture",
                "code": "MP"
            },
            {
                "name": "Ouaka Prefecture",
                "code": "UK"
            },
            {
                "name": "Ouham Prefecture",
                "code": "AC"
            },
            {
                "name": "Ouham-Pendé Prefecture",
                "code": "OP"
            },
            {
                "name": "Sangha-Mbaéré",
                "code": "SE"
            },
            {
                "name": "Vakaga Prefecture",
                "code": "VK"
            }
        ],
        "TD": [
            {
                "name": "Bahr el Gazel",
                "code": "BG"
            },
            {
                "name": "Batha Region",
                "code": "BA"
            },
            {
                "name": "Borkou",
                "code": "BO"
            },
            {
                "name": "Ennedi Region",
                "code": "EN"
            },
            {
                "name": "Ennedi-Est",
                "code": "EE"
            },
            {
                "name": "Ennedi-Ouest",
                "code": "EO"
            },
            {
                "name": "Guéra Region",
                "code": "GR"
            },
            {
                "name": "Hadjer-Lamis",
                "code": "HL"
            },
            {
                "name": "Kanem Region",
                "code": "KA"
            },
            {
                "name": "Lac Region",
                "code": "LC"
            },
            {
                "name": "Logone Occidental Region",
                "code": "LO"
            },
            {
                "name": "Logone Oriental Region",
                "code": "LR"
            },
            {
                "name": "Mandoul Region",
                "code": "MA"
            },
            {
                "name": "Mayo-Kebbi Est Region",
                "code": "ME"
            },
            {
                "name": "Mayo-Kebbi Ouest Region",
                "code": "MO"
            },
            {
                "name": "Moyen-Chari Region",
                "code": "MC"
            },
            {
                "name": "N'Djamena",
                "code": "ND"
            },
            {
                "name": "Ouaddaï Region",
                "code": "OD"
            },
            {
                "name": "Salamat Region",
                "code": "SA"
            },
            {
                "name": "Sila Region",
                "code": "SI"
            },
            {
                "name": "Tandjilé Region",
                "code": "TA"
            },
            {
                "name": "Tibesti Region",
                "code": "TI"
            },
            {
                "name": "Wadi Fira Region",
                "code": "WF"
            }
        ],
        "CL": [
            {
                "name": "Antofagasta Region",
                "code": "AN"
            },
            {
                "name": "Araucanía Region",
                "code": "AR"
            },
            {
                "name": "Arica y Parinacota Region",
                "code": "AP"
            },
            {
                "name": "Atacama Region",
                "code": "AT"
            },
            {
                "name": "Aysén Region",
                "code": "AI"
            },
            {
                "name": "Bío Bío Region",
                "code": "BI"
            },
            {
                "name": "Coquimbo Region",
                "code": "CO"
            },
            {
                "name": "Los Lagos Region",
                "code": "LL"
            },
            {
                "name": "Los Ríos Region",
                "code": "LR"
            },
            {
                "name": "Magellan and the Chilean Antarctic Region",
                "code": "MA"
            },
            {
                "name": "Maule Region",
                "code": "ML"
            },
            {
                "name": "Ñuble Region",
                "code": "NB"
            },
            {
                "name": "O'Higgins",
                "code": "LI"
            },
            {
                "name": "Santiago Metropolitan Region",
                "code": "RM"
            },
            {
                "name": "Tarapacá Region",
                "code": "TA"
            },
            {
                "name": "Valparaíso",
                "code": "VS"
            }
        ],
        "CN": [
            {
                "name": "Anhui",
                "code": "AH"
            },
            {
                "name": "Beijing",
                "code": "BJ"
            },
            {
                "name": "Chongqing",
                "code": "CQ"
            },
            {
                "name": "Fujian",
                "code": "FJ"
            },
            {
                "name": "Gansu",
                "code": "GS"
            },
            {
                "name": "Guangdong",
                "code": "GD"
            },
            {
                "name": "Guangxi Zhuang Autonomous Region",
                "code": "GX"
            },
            {
                "name": "Guizhou",
                "code": "GZ"
            },
            {
                "name": "Hainan",
                "code": "HI"
            },
            {
                "name": "Hebei",
                "code": "HE"
            },
            {
                "name": "Heilongjiang",
                "code": "HL"
            },
            {
                "name": "Henan",
                "code": "HA"
            },
            {
                "name": "Hong Kong",
                "code": "HK"
            },
            {
                "name": "Hubei",
                "code": "HB"
            },
            {
                "name": "Hunan",
                "code": "HN"
            },
            {
                "name": "Inner Mongolia",
                "code": "NM"
            },
            {
                "name": "Jiangsu",
                "code": "JS"
            },
            {
                "name": "Jiangxi",
                "code": "JX"
            },
            {
                "name": "Jilin",
                "code": "JL"
            },
            {
                "name": "Keelung",
                "code": "TW-KEE"
            },
            {
                "name": "Liaoning",
                "code": "LN"
            },
            {
                "name": "Macau",
                "code": "MO"
            },
            {
                "name": "Ningxia Hui Autonomous Region",
                "code": "NX"
            },
            {
                "name": "Qinghai",
                "code": "QH"
            },
            {
                "name": "Shaanxi",
                "code": "SN"
            },
            {
                "name": "Shandong",
                "code": "SD"
            },
            {
                "name": "Shanghai",
                "code": "SH"
            },
            {
                "name": "Shanxi",
                "code": "SX"
            },
            {
                "name": "Sichuan",
                "code": "SC"
            },
            {
                "name": "Taiwan Province, People's Republic of China",
                "code": "TW"
            },
            {
                "name": "Tibet Autonomous Region",
                "code": "XZ"
            },
            {
                "name": "Xinjiang",
                "code": "XJ"
            },
            {
                "name": "Yunnan",
                "code": "YN"
            },
            {
                "name": "Zhejiang",
                "code": "ZJ"
            }
        ],
        "CX": [
            {
                "name": "Christmas Island",
                "code": "Christmas Island"
            }
        ],
        "CC": [
            {
                "name": "Cocos (Keeling) Islands",
                "code": "Cocos (Keeling) Islands"
            }
        ],
        "CO": [
            {
                "name": "Amazonas Department",
                "code": "AMA"
            },
            {
                "name": "Antioquia Department",
                "code": "ANT"
            },
            {
                "name": "Arauca Department",
                "code": "ARA"
            },
            {
                "name": "Archipelago of Saint Andréws, Providence and Saint Catalina",
                "code": "SAP"
            },
            {
                "name": "Atlántico Department",
                "code": "ATL"
            },
            {
                "name": "Bolívar Department",
                "code": "BOL"
            },
            {
                "name": "Boyacá Department",
                "code": "BOY"
            },
            {
                "name": "Caldas Department",
                "code": "CAL"
            },
            {
                "name": "Caquetá Department",
                "code": "CAQ"
            },
            {
                "name": "Casanare Department",
                "code": "CAS"
            },
            {
                "name": "Cauca Department",
                "code": "CAU"
            },
            {
                "name": "Cesar Department",
                "code": "CES"
            },
            {
                "name": "Chocó Department",
                "code": "CHO"
            },
            {
                "name": "Córdoba Department",
                "code": "COR"
            },
            {
                "name": "Cundinamarca Department",
                "code": "CUN"
            },
            {
                "name": "Guainía Department",
                "code": "GUA"
            },
            {
                "name": "Guaviare Department",
                "code": "GUV"
            },
            {
                "name": "Huila Department",
                "code": "HUI"
            },
            {
                "name": "La Guajira Department",
                "code": "LAG"
            },
            {
                "name": "Magdalena Department",
                "code": "MAG"
            },
            {
                "name": "Meta",
                "code": "MET"
            },
            {
                "name": "Nariño Department",
                "code": "NAR"
            },
            {
                "name": "Norte de Santander Department",
                "code": "NSA"
            },
            {
                "name": "Putumayo Department",
                "code": "PUT"
            },
            {
                "name": "Quindío Department",
                "code": "QUI"
            },
            {
                "name": "Risaralda Department",
                "code": "RIS"
            },
            {
                "name": "Santander Department",
                "code": "SAN"
            },
            {
                "name": "Sucre Department",
                "code": "SUC"
            },
            {
                "name": "Tolima Department",
                "code": "TOL"
            },
            {
                "name": "Valle del Cauca Department",
                "code": "VAC"
            },
            {
                "name": "Vaupés Department",
                "code": "VAU"
            },
            {
                "name": "Vichada Department",
                "code": "VID"
            }
        ],
        "KM": [
            {
                "name": "Anjouan",
                "code": "A"
            },
            {
                "name": "Grande Comore",
                "code": "G"
            },
            {
                "name": "Mohéli",
                "code": "M"
            }
        ],
        "CG": [
            {
                "name": "Bouenza Department",
                "code": "11"
            },
            {
                "name": "Brazzaville",
                "code": "BZV"
            },
            {
                "name": "Cuvette Department",
                "code": "8"
            },
            {
                "name": "Cuvette-Ouest Department",
                "code": "15"
            },
            {
                "name": "Kouilou Department",
                "code": "5"
            },
            {
                "name": "Lékoumou Department",
                "code": "2"
            },
            {
                "name": "Likouala Department",
                "code": "7"
            },
            {
                "name": "Niari Department",
                "code": "9"
            },
            {
                "name": "Plateaux Department",
                "code": "14"
            },
            {
                "name": "Pointe-Noire",
                "code": "16"
            },
            {
                "name": "Pool Department",
                "code": "12"
            },
            {
                "name": "Sangha Department",
                "code": "13"
            }
        ],
        "CD": [
            {
                "name": "Bandundu Province",
                "code": "BN"
            },
            {
                "name": "Bas-Congo province",
                "code": "BC"
            },
            {
                "name": "Bas-Uele",
                "code": "BU"
            },
            {
                "name": "Équateur",
                "code": "EQ"
            },
            {
                "name": "Haut-Katanga Province",
                "code": "HK"
            },
            {
                "name": "Haut-Lomami District",
                "code": "HL"
            },
            {
                "name": "Haut-Uele",
                "code": "HU"
            },
            {
                "name": "Ituri Interim Administration",
                "code": "IT"
            },
            {
                "name": "Kasaï District",
                "code": "KS"
            },
            {
                "name": "Kasaï-Occidental",
                "code": "KW"
            },
            {
                "name": "Kasaï-Oriental",
                "code": "KE"
            },
            {
                "name": "Katanga Province",
                "code": "KA"
            },
            {
                "name": "Kinshasa",
                "code": "KN"
            },
            {
                "name": "Kwango District",
                "code": "KG"
            },
            {
                "name": "Kwilu District",
                "code": "KL"
            },
            {
                "name": "Lomami Province",
                "code": "LO"
            },
            {
                "name": "Mai-Ndombe Province",
                "code": "MN"
            },
            {
                "name": "Maniema",
                "code": "MA"
            },
            {
                "name": "Mongala District",
                "code": "MO"
            },
            {
                "name": "Nord-Ubangi District",
                "code": "NU"
            },
            {
                "name": "North Kivu",
                "code": "NK"
            },
            {
                "name": "Orientale Province",
                "code": "OR"
            },
            {
                "name": "Sankuru District",
                "code": "SA"
            },
            {
                "name": "South Kivu",
                "code": "SK"
            },
            {
                "name": "Sud-Ubangi",
                "code": "SU"
            },
            {
                "name": "Tanganyika Province",
                "code": "TA"
            },
            {
                "name": "Tshopo District",
                "code": "TO"
            },
            {
                "name": "Tshuapa District",
                "code": "TU"
            }
        ],
        "CK": [
            {
                "name": "Cook Islands",
                "code": "Cook Islands"
            }
        ],
        "CR": [
            {
                "name": "Alajuela Province",
                "code": "A"
            },
            {
                "name": "Guanacaste Province",
                "code": "G"
            },
            {
                "name": "Heredia Province",
                "code": "H"
            },
            {
                "name": "Limón Province",
                "code": "L"
            },
            {
                "name": "Provincia de Cartago",
                "code": "C"
            },
            {
                "name": "Puntarenas Province",
                "code": "P"
            },
            {
                "name": "San José Province",
                "code": "SJ"
            }
        ],
        "CI": [
            {
                "name": "Abidjan",
                "code": "AB"
            },
            {
                "name": "Agnéby",
                "code": "16"
            },
            {
                "name": "Bafing Region",
                "code": "17"
            },
            {
                "name": "Bas-Sassandra District",
                "code": "BS"
            },
            {
                "name": "Bas-Sassandra Region",
                "code": "09"
            },
            {
                "name": "Comoé District",
                "code": "CM"
            },
            {
                "name": "Denguélé District",
                "code": "DN"
            },
            {
                "name": "Denguélé Region",
                "code": "10"
            },
            {
                "name": "Dix-Huit Montagnes",
                "code": "06"
            },
            {
                "name": "Fromager",
                "code": "18"
            },
            {
                "name": "Gôh-Djiboua District",
                "code": "GD"
            },
            {
                "name": "Haut-Sassandra",
                "code": "02"
            },
            {
                "name": "Lacs District",
                "code": "LC"
            },
            {
                "name": "Lacs Region",
                "code": "07"
            },
            {
                "name": "Lagunes District",
                "code": "LG"
            },
            {
                "name": "Lagunes region",
                "code": "01"
            },
            {
                "name": "Marahoué Region",
                "code": "12"
            },
            {
                "name": "Montagnes District",
                "code": "MG"
            },
            {
                "name": "Moyen-Cavally",
                "code": "19"
            },
            {
                "name": "Moyen-Comoé",
                "code": "05"
            },
            {
                "name": "N'zi-Comoé",
                "code": "11"
            },
            {
                "name": "Sassandra-Marahoué District",
                "code": "SM"
            },
            {
                "name": "Savanes Region",
                "code": "03"
            },
            {
                "name": "Sud-Bandama",
                "code": "15"
            },
            {
                "name": "Sud-Comoé",
                "code": "13"
            },
            {
                "name": "Vallée du Bandama District",
                "code": "VB"
            },
            {
                "name": "Vallée du Bandama Region",
                "code": "04"
            },
            {
                "name": "Woroba District",
                "code": "WR"
            },
            {
                "name": "Worodougou",
                "code": "14"
            },
            {
                "name": "Yamoussoukro",
                "code": "YM"
            },
            {
                "name": "Zanzan Region",
                "code": "ZZ"
            }
        ],
        "HR": [
            {
                "name": "Bjelovar-Bilogora County",
                "code": "07"
            },
            {
                "name": "Brod-Posavina County",
                "code": "12"
            },
            {
                "name": "Dubrovnik-Neretva County",
                "code": "19"
            },
            {
                "name": "Istria County",
                "code": "18"
            },
            {
                "name": "Koprivnica-Križevci County",
                "code": "06"
            },
            {
                "name": "Krapina-Zagorje County",
                "code": "02"
            },
            {
                "name": "Lika-Senj County",
                "code": "09"
            },
            {
                "name": "Međimurje County",
                "code": "20"
            },
            {
                "name": "Osijek-Baranja County",
                "code": "14"
            },
            {
                "name": "Požega-Slavonia County",
                "code": "11"
            },
            {
                "name": "Primorje-Gorski Kotar County",
                "code": "08"
            },
            {
                "name": "Šibenik-Knin County",
                "code": "15"
            },
            {
                "name": "Sisak-Moslavina County",
                "code": "03"
            },
            {
                "name": "Split-Dalmatia County",
                "code": "17"
            },
            {
                "name": "Varaždin County",
                "code": "05"
            },
            {
                "name": "Virovitica-Podravina County",
                "code": "10"
            },
            {
                "name": "Vukovar-Syrmia County",
                "code": "16"
            },
            {
                "name": "Zadar County",
                "code": "13"
            },
            {
                "name": "Zagreb",
                "code": "21"
            },
            {
                "name": "Zagreb County",
                "code": "01"
            }
        ],
        "CU": [
            {
                "name": "Artemisa Province",
                "code": "15"
            },
            {
                "name": "Camagüey Province",
                "code": "09"
            },
            {
                "name": "Ciego de Ávila Province",
                "code": "08"
            },
            {
                "name": "Cienfuegos Province",
                "code": "06"
            },
            {
                "name": "Granma Province",
                "code": "12"
            },
            {
                "name": "Guantánamo Province",
                "code": "14"
            },
            {
                "name": "Havana Province",
                "code": "03"
            },
            {
                "name": "Holguín Province",
                "code": "11"
            },
            {
                "name": "Isla de la Juventud",
                "code": "99"
            },
            {
                "name": "Las Tunas Province",
                "code": "10"
            },
            {
                "name": "Matanzas Province",
                "code": "04"
            },
            {
                "name": "Mayabeque Province",
                "code": "16"
            },
            {
                "name": "Pinar del Río Province",
                "code": "01"
            },
            {
                "name": "Sancti Spíritus Province",
                "code": "07"
            },
            {
                "name": "Santiago de Cuba Province",
                "code": "13"
            },
            {
                "name": "Villa Clara Province",
                "code": "05"
            }
        ],
        "CW": [
            {
                "name": "Curaçao",
                "code": "Curaçao"
            }
        ],
        "CY": [
            {
                "name": "Famagusta District",
                "code": "04"
            },
            {
                "name": "Kyrenia District",
                "code": "06"
            },
            {
                "name": "Larnaca District",
                "code": "03"
            },
            {
                "name": "Limassol District",
                "code": "02"
            },
            {
                "name": "Nicosia District",
                "code": "01"
            },
            {
                "name": "Paphos District",
                "code": "05"
            }
        ],
        "CZ": [
            {
                "name": "Benešov District",
                "code": "201"
            },
            {
                "name": "Beroun District",
                "code": "202"
            },
            {
                "name": "Blansko District",
                "code": "641"
            },
            {
                "name": "Břeclav District",
                "code": "644"
            },
            {
                "name": "Brno-City District",
                "code": "642"
            },
            {
                "name": "Brno-Country District",
                "code": "643"
            },
            {
                "name": "Bruntál District",
                "code": "801"
            },
            {
                "name": "Central Bohemian Region",
                "code": "20"
            },
            {
                "name": "Česká Lípa District",
                "code": "511"
            },
            {
                "name": "České Budějovice District",
                "code": "311"
            },
            {
                "name": "Český Krumlov District",
                "code": "312"
            },
            {
                "name": "Cheb District",
                "code": "411"
            },
            {
                "name": "Chomutov District",
                "code": "422"
            },
            {
                "name": "Chrudim District",
                "code": "531"
            },
            {
                "name": "Děčín District",
                "code": "421"
            },
            {
                "name": "Domažlice District",
                "code": "321"
            },
            {
                "name": "Frýdek-Místek District",
                "code": "802"
            },
            {
                "name": "Havlíčkův Brod District",
                "code": "631"
            },
            {
                "name": "Hodonín District",
                "code": "645"
            },
            {
                "name": "Horní Počernice",
                "code": "120"
            },
            {
                "name": "Hradec Králové District",
                "code": "521"
            },
            {
                "name": "Hradec Králové Region",
                "code": "52"
            },
            {
                "name": "Jablonec nad Nisou District",
                "code": "512"
            },
            {
                "name": "Jeseník District",
                "code": "711"
            },
            {
                "name": "Jičín District",
                "code": "522"
            },
            {
                "name": "Jihlava District",
                "code": "632"
            },
            {
                "name": "Jindřichův Hradec District",
                "code": "313"
            },
            {
                "name": "Karlovy Vary District",
                "code": "412"
            },
            {
                "name": "Karlovy Vary Region",
                "code": "41"
            },
            {
                "name": "Karviná District",
                "code": "803"
            },
            {
                "name": "Kladno District",
                "code": "203"
            },
            {
                "name": "Klatovy District",
                "code": "322"
            },
            {
                "name": "Kolín District",
                "code": "204"
            },
            {
                "name": "Kroměříž District",
                "code": "721"
            },
            {
                "name": "Liberec District",
                "code": "513"
            },
            {
                "name": "Liberec Region",
                "code": "51"
            },
            {
                "name": "Litoměřice District",
                "code": "423"
            },
            {
                "name": "Louny District",
                "code": "424"
            },
            {
                "name": "Mělník District",
                "code": "206"
            },
            {
                "name": "Mladá Boleslav District",
                "code": "207"
            },
            {
                "name": "Moravian-Silesian Region",
                "code": "80"
            },
            {
                "name": "Most District",
                "code": "425"
            },
            {
                "name": "Náchod District",
                "code": "523"
            },
            {
                "name": "Nový Jičín District",
                "code": "804"
            },
            {
                "name": "Nymburk District",
                "code": "208"
            },
            {
                "name": "Olomouc District",
                "code": "712"
            },
            {
                "name": "Olomouc Region",
                "code": "71"
            },
            {
                "name": "Opava District",
                "code": "805"
            },
            {
                "name": "Ostrava-City District",
                "code": "806"
            },
            {
                "name": "Pardubice District",
                "code": "532"
            },
            {
                "name": "Pardubice Region",
                "code": "53"
            },
            {
                "name": "Pelhřimov District",
                "code": "633"
            },
            {
                "name": "Písek District",
                "code": "314"
            },
            {
                "name": "Plzeň Region",
                "code": "32"
            },
            {
                "name": "Plzeň-City District",
                "code": "323"
            },
            {
                "name": "Plzeň-North District",
                "code": "325"
            },
            {
                "name": "Plzeň-South District",
                "code": "324"
            },
            {
                "name": "Prachatice District",
                "code": "315"
            },
            {
                "name": "Prague",
                "code": "10"
            },
            {
                "name": "Prague 1",
                "code": "101"
            },
            {
                "name": "Prague 10",
                "code": "110"
            },
            {
                "name": "Prague 11",
                "code": "111"
            },
            {
                "name": "Prague 12",
                "code": "112"
            },
            {
                "name": "Prague 13",
                "code": "113"
            },
            {
                "name": "Prague 14",
                "code": "114"
            },
            {
                "name": "Prague 15",
                "code": "115"
            },
            {
                "name": "Prague 16",
                "code": "116"
            },
            {
                "name": "Prague 2",
                "code": "102"
            },
            {
                "name": "Prague 21",
                "code": "121"
            },
            {
                "name": "Prague 3",
                "code": "103"
            },
            {
                "name": "Prague 4",
                "code": "104"
            },
            {
                "name": "Prague 5",
                "code": "105"
            },
            {
                "name": "Prague 6",
                "code": "106"
            },
            {
                "name": "Prague 7",
                "code": "107"
            },
            {
                "name": "Prague 8",
                "code": "108"
            },
            {
                "name": "Prague 9",
                "code": "109"
            },
            {
                "name": "Prague-East District",
                "code": "209"
            },
            {
                "name": "Prague-West District",
                "code": "20A"
            },
            {
                "name": "Přerov District",
                "code": "714"
            },
            {
                "name": "Příbram District",
                "code": "20B"
            },
            {
                "name": "Prostějov District",
                "code": "713"
            },
            {
                "name": "Rakovník District",
                "code": "20C"
            },
            {
                "name": "Rokycany District",
                "code": "326"
            },
            {
                "name": "Rychnov nad Kněžnou District",
                "code": "524"
            },
            {
                "name": "Semily District",
                "code": "514"
            },
            {
                "name": "Sokolov District",
                "code": "413"
            },
            {
                "name": "South Bohemian Region",
                "code": "31"
            },
            {
                "name": "South Moravian Region",
                "code": "64"
            },
            {
                "name": "Strakonice District",
                "code": "316"
            },
            {
                "name": "Šumperk District",
                "code": "715"
            },
            {
                "name": "Svitavy District",
                "code": "533"
            },
            {
                "name": "Tábor District",
                "code": "317"
            },
            {
                "name": "Tachov District",
                "code": "327"
            },
            {
                "name": "Teplice District",
                "code": "426"
            },
            {
                "name": "Třebíč District",
                "code": "634"
            },
            {
                "name": "Trutnov District",
                "code": "525"
            },
            {
                "name": "Uherské Hradiště District",
                "code": "722"
            },
            {
                "name": "Ústí nad Labem District",
                "code": "427"
            },
            {
                "name": "Ústí nad Labem Region",
                "code": "42"
            },
            {
                "name": "Ústí nad Orlicí District",
                "code": "534"
            },
            {
                "name": "Vsetín District",
                "code": "723"
            },
            {
                "name": "Vyškov District",
                "code": "646"
            },
            {
                "name": "Vysočina Region",
                "code": "63"
            },
            {
                "name": "Žďár nad Sázavou District",
                "code": "635"
            },
            {
                "name": "Zlín District",
                "code": "724"
            },
            {
                "name": "Zlín Region",
                "code": "72"
            },
            {
                "name": "Znojmo District",
                "code": "647"
            }
        ],
        "DK": [
            {
                "name": "Capital Region of Denmark",
                "code": "84"
            },
            {
                "name": "Central Denmark Region",
                "code": "82"
            },
            {
                "name": "North Denmark Region",
                "code": "81"
            },
            {
                "name": "Region of Southern Denmark",
                "code": "83"
            },
            {
                "name": "Region Zealand",
                "code": "85"
            }
        ],
        "DJ": [
            {
                "name": "Ali Sabieh Region",
                "code": "AS"
            },
            {
                "name": "Arta Region",
                "code": "AR"
            },
            {
                "name": "Dikhil Region",
                "code": "DI"
            },
            {
                "name": "Djibouti",
                "code": "DJ"
            },
            {
                "name": "Obock Region",
                "code": "OB"
            },
            {
                "name": "Tadjourah Region",
                "code": "TA"
            }
        ],
        "DM": [
            {
                "name": "Saint Andrew Parish",
                "code": "02"
            },
            {
                "name": "Saint David Parish",
                "code": "03"
            },
            {
                "name": "Saint George Parish",
                "code": "04"
            },
            {
                "name": "Saint John Parish",
                "code": "05"
            },
            {
                "name": "Saint Joseph Parish",
                "code": "06"
            },
            {
                "name": "Saint Luke Parish",
                "code": "07"
            },
            {
                "name": "Saint Mark Parish",
                "code": "08"
            },
            {
                "name": "Saint Patrick Parish",
                "code": "09"
            },
            {
                "name": "Saint Paul Parish",
                "code": "10"
            },
            {
                "name": "Saint Peter Parish",
                "code": "11"
            }
        ],
        "DO": [
            {
                "name": "Azua Province",
                "code": "02"
            },
            {
                "name": "Baoruco Province",
                "code": "03"
            },
            {
                "name": "Barahona Province",
                "code": "04"
            },
            {
                "name": "Dajabón Province",
                "code": "05"
            },
            {
                "name": "Distrito Nacional",
                "code": "01"
            },
            {
                "name": "Duarte Province",
                "code": "06"
            },
            {
                "name": "El Seibo Province",
                "code": "08"
            },
            {
                "name": "Espaillat Province",
                "code": "09"
            },
            {
                "name": "Hato Mayor Province",
                "code": "30"
            },
            {
                "name": "Hermanas Mirabal Province",
                "code": "19"
            },
            {
                "name": "Independencia",
                "code": "10"
            },
            {
                "name": "La Altagracia Province",
                "code": "11"
            },
            {
                "name": "La Romana Province",
                "code": "12"
            },
            {
                "name": "La Vega Province",
                "code": "13"
            },
            {
                "name": "María Trinidad Sánchez Province",
                "code": "14"
            },
            {
                "name": "Monseñor Nouel Province",
                "code": "28"
            },
            {
                "name": "Monte Cristi Province",
                "code": "15"
            },
            {
                "name": "Monte Plata Province",
                "code": "29"
            },
            {
                "name": "Pedernales Province",
                "code": "16"
            },
            {
                "name": "Peravia Province",
                "code": "17"
            },
            {
                "name": "Puerto Plata Province",
                "code": "18"
            },
            {
                "name": "Samaná Province",
                "code": "20"
            },
            {
                "name": "San Cristóbal Province",
                "code": "21"
            },
            {
                "name": "San José de Ocoa Province",
                "code": "31"
            },
            {
                "name": "San Juan Province",
                "code": "22"
            },
            {
                "name": "San Pedro de Macorís",
                "code": "23"
            },
            {
                "name": "Sánchez Ramírez Province",
                "code": "24"
            },
            {
                "name": "Santiago Province",
                "code": "25"
            },
            {
                "name": "Santiago Rodríguez Province",
                "code": "26"
            },
            {
                "name": "Santo Domingo Province",
                "code": "32"
            },
            {
                "name": "Valverde Province",
                "code": "27"
            }
        ],
        "EC": [
            {
                "name": "Azuay Province",
                "code": "A"
            },
            {
                "name": "Bolívar Province",
                "code": "B"
            },
            {
                "name": "Cañar Province",
                "code": "F"
            },
            {
                "name": "Carchi Province",
                "code": "C"
            },
            {
                "name": "Chimborazo Province",
                "code": "H"
            },
            {
                "name": "Cotopaxi Province",
                "code": "X"
            },
            {
                "name": "El Oro Province",
                "code": "O"
            },
            {
                "name": "Esmeraldas",
                "code": "E"
            },
            {
                "name": "Galápagos Province",
                "code": "W"
            },
            {
                "name": "Guayas Province",
                "code": "G"
            },
            {
                "name": "Imbabura Province",
                "code": "I"
            },
            {
                "name": "Los Ríos Province",
                "code": "R"
            },
            {
                "name": "Manabí Province",
                "code": "M"
            },
            {
                "name": "Morona-Santiago Province",
                "code": "S"
            },
            {
                "name": "Napo Province",
                "code": "N"
            },
            {
                "name": "Orellana Province",
                "code": "D"
            },
            {
                "name": "Pastaza Province",
                "code": "Y"
            },
            {
                "name": "Pichincha Province",
                "code": "P"
            },
            {
                "name": "Santa Elena Province",
                "code": "SE"
            },
            {
                "name": "Santo Domingo de los Tsáchilas Province",
                "code": "SD"
            },
            {
                "name": "Sucumbíos Province",
                "code": "U"
            },
            {
                "name": "Tungurahua Province",
                "code": "T"
            },
            {
                "name": "Zamora-Chinchipe Province",
                "code": "Z"
            }
        ],
        "EG": [
            {
                "name": "Alexandria Governorate",
                "code": "ALX"
            },
            {
                "name": "Aswan Governorate",
                "code": "ASN"
            },
            {
                "name": "Asyut Governorate",
                "code": "AST"
            },
            {
                "name": "Beheira Governorate",
                "code": "BH"
            },
            {
                "name": "Beni Suef Governorate",
                "code": "BNS"
            },
            {
                "name": "Cairo Governorate",
                "code": "C"
            },
            {
                "name": "Dakahlia Governorate",
                "code": "DK"
            },
            {
                "name": "Damietta Governorate",
                "code": "DT"
            },
            {
                "name": "Faiyum Governorate",
                "code": "FYM"
            },
            {
                "name": "Gharbia Governorate",
                "code": "GH"
            },
            {
                "name": "Giza Governorate",
                "code": "GZ"
            },
            {
                "name": "Ismailia Governorate",
                "code": "IS"
            },
            {
                "name": "Kafr el-Sheikh Governorate",
                "code": "KFS"
            },
            {
                "name": "Luxor Governorate",
                "code": "LX"
            },
            {
                "name": "Matrouh Governorate",
                "code": "MT"
            },
            {
                "name": "Minya Governorate",
                "code": "MN"
            },
            {
                "name": "Monufia Governorate",
                "code": "MNF"
            },
            {
                "name": "New Valley Governorate",
                "code": "WAD"
            },
            {
                "name": "North Sinai Governorate",
                "code": "SIN"
            },
            {
                "name": "Port Said Governorate",
                "code": "PTS"
            },
            {
                "name": "Qalyubia Governorate",
                "code": "KB"
            },
            {
                "name": "Qena Governorate",
                "code": "KN"
            },
            {
                "name": "Red Sea Governorate",
                "code": "BA"
            },
            {
                "name": "Sohag Governorate",
                "code": "SHG"
            },
            {
                "name": "South Sinai Governorate",
                "code": "JS"
            },
            {
                "name": "Suez Governorate",
                "code": "SUZ"
            }
        ],
        "SV": [
            {
                "name": "Ahuachapán Department",
                "code": "AH"
            },
            {
                "name": "Cabañas Department",
                "code": "CA"
            },
            {
                "name": "Chalatenango Department",
                "code": "CH"
            },
            {
                "name": "Cuscatlán Department",
                "code": "CU"
            },
            {
                "name": "La Libertad Department",
                "code": "LI"
            },
            {
                "name": "La Paz Department",
                "code": "PA"
            },
            {
                "name": "La Unión Department",
                "code": "UN"
            },
            {
                "name": "Morazán Department",
                "code": "MO"
            },
            {
                "name": "San Miguel Department",
                "code": "SM"
            },
            {
                "name": "San Salvador Department",
                "code": "SS"
            },
            {
                "name": "San Vicente Department",
                "code": "SV"
            },
            {
                "name": "Santa Ana Department",
                "code": "SA"
            },
            {
                "name": "Sonsonate Department",
                "code": "SO"
            },
            {
                "name": "Usulután Department",
                "code": "US"
            }
        ],
        "GQ": [
            {
                "name": "Annobón Province",
                "code": "AN"
            },
            {
                "name": "Bioko Norte Province",
                "code": "BN"
            },
            {
                "name": "Bioko Sur Province",
                "code": "BS"
            },
            {
                "name": "Centro Sur Province",
                "code": "CS"
            },
            {
                "name": "Insular Region",
                "code": "I"
            },
            {
                "name": "Kié-Ntem Province",
                "code": "KN"
            },
            {
                "name": "Litoral Province",
                "code": "LI"
            },
            {
                "name": "Río Muni",
                "code": "C"
            },
            {
                "name": "Wele-Nzas Province",
                "code": "WN"
            }
        ],
        "ER": [
            {
                "name": "Anseba Region",
                "code": "AN"
            },
            {
                "name": "Debub Region",
                "code": "DU"
            },
            {
                "name": "Gash-Barka Region",
                "code": "GB"
            },
            {
                "name": "Maekel Region",
                "code": "MA"
            },
            {
                "name": "Northern Red Sea Region",
                "code": "SK"
            },
            {
                "name": "Southern Red Sea Region",
                "code": "DK"
            }
        ],
        "EE": [
            {
                "name": "Harju County",
                "code": "37"
            },
            {
                "name": "Hiiu County",
                "code": "39"
            },
            {
                "name": "Ida-Viru County",
                "code": "44"
            },
            {
                "name": "Järva County",
                "code": "51"
            },
            {
                "name": "Jõgeva County",
                "code": "49"
            },
            {
                "name": "Lääne County",
                "code": "57"
            },
            {
                "name": "Lääne-Viru County",
                "code": "59"
            },
            {
                "name": "Pärnu County",
                "code": "67"
            },
            {
                "name": "Põlva County",
                "code": "65"
            },
            {
                "name": "Rapla County",
                "code": "70"
            },
            {
                "name": "Saare County",
                "code": "74"
            },
            {
                "name": "Tartu County",
                "code": "78"
            },
            {
                "name": "Valga County",
                "code": "82"
            },
            {
                "name": "Viljandi County",
                "code": "84"
            },
            {
                "name": "Võru County",
                "code": "86"
            }
        ],
        "ET": [
            {
                "name": "Addis Ababa",
                "code": "AA"
            },
            {
                "name": "Afar Region",
                "code": "AF"
            },
            {
                "name": "Amhara Region",
                "code": "AM"
            },
            {
                "name": "Benishangul-Gumuz Region",
                "code": "BE"
            },
            {
                "name": "Dire Dawa",
                "code": "DD"
            },
            {
                "name": "Gambela Region",
                "code": "GA"
            },
            {
                "name": "Harari Region",
                "code": "HA"
            },
            {
                "name": "Oromia Region",
                "code": "OR"
            },
            {
                "name": "Somali Region",
                "code": "SO"
            },
            {
                "name": "Southern Nations, Nationalities, and Peoples' Region",
                "code": "SN"
            },
            {
                "name": "Tigray Region",
                "code": "TI"
            }
        ],
        "FK": [
            {
                "name": "Falkland Islands (Malvinas)",
                "code": "Falkland Islands (Malvinas)"
            }
        ],
        "FO": [
            {
                "name": "Faroe Islands",
                "code": "Faroe Islands"
            }
        ],
        "FJ": [
            {
                "name": "Ba",
                "code": "01"
            },
            {
                "name": "Bua",
                "code": "02"
            },
            {
                "name": "Cakaudrove",
                "code": "03"
            },
            {
                "name": "Central Division",
                "code": "C"
            },
            {
                "name": "Eastern Division",
                "code": "E"
            },
            {
                "name": "Kadavu",
                "code": "04"
            },
            {
                "name": "Lau",
                "code": "05"
            },
            {
                "name": "Lomaiviti",
                "code": "06"
            },
            {
                "name": "Macuata",
                "code": "07"
            },
            {
                "name": "Nadroga-Navosa",
                "code": "08"
            },
            {
                "name": "Naitasiri",
                "code": "09"
            },
            {
                "name": "Namosi",
                "code": "10"
            },
            {
                "name": "Northern Division",
                "code": "N"
            },
            {
                "name": "Ra",
                "code": "11"
            },
            {
                "name": "Rewa",
                "code": "12"
            },
            {
                "name": "Rotuma",
                "code": "R"
            },
            {
                "name": "Serua",
                "code": "13"
            },
            {
                "name": "Tailevu",
                "code": "14"
            },
            {
                "name": "Western Division",
                "code": "W"
            }
        ],
        "FI": [
            {
                "name": "Åland Islands",
                "code": "01"
            },
            {
                "name": "Central Finland",
                "code": "08"
            },
            {
                "name": "Central Ostrobothnia",
                "code": "07"
            },
            {
                "name": "Eastern Finland Province",
                "code": "IS"
            },
            {
                "name": "Finland Proper",
                "code": "19"
            },
            {
                "name": "Kainuu",
                "code": "05"
            },
            {
                "name": "Kymenlaakso",
                "code": "09"
            },
            {
                "name": "Lapland",
                "code": "LL"
            },
            {
                "name": "North Karelia",
                "code": "13"
            },
            {
                "name": "Northern Ostrobothnia",
                "code": "14"
            },
            {
                "name": "Northern Savonia",
                "code": "15"
            },
            {
                "name": "Ostrobothnia",
                "code": "12"
            },
            {
                "name": "Oulu Province",
                "code": "OL"
            },
            {
                "name": "Päijänne Tavastia",
                "code": "16"
            },
            {
                "name": "Pirkanmaa",
                "code": "11"
            },
            {
                "name": "Satakunta",
                "code": "17"
            },
            {
                "name": "South Karelia",
                "code": "02"
            },
            {
                "name": "Southern Ostrobothnia",
                "code": "03"
            },
            {
                "name": "Southern Savonia",
                "code": "04"
            },
            {
                "name": "Tavastia Proper",
                "code": "06"
            },
            {
                "name": "Uusimaa",
                "code": "18"
            }
        ],
        "FR": [
            {
                "name": "Alo",
                "code": "WF-AL"
            },
            {
                "name": "Alsace",
                "code": "A"
            },
            {
                "name": "Aquitaine",
                "code": "B"
            },
            {
                "name": "Auvergne",
                "code": "C"
            },
            {
                "name": "Auvergne-Rhône-Alpes",
                "code": "ARA"
            },
            {
                "name": "Bourgogne-Franche-Comté",
                "code": "BFC"
            },
            {
                "name": "Brittany",
                "code": "BRE"
            },
            {
                "name": "Burgundy",
                "code": "D"
            },
            {
                "name": "Centre-Val de Loire",
                "code": "CVL"
            },
            {
                "name": "Champagne-Ardenne",
                "code": "G"
            },
            {
                "name": "Corsica",
                "code": "COR"
            },
            {
                "name": "Franche-Comté",
                "code": "I"
            },
            {
                "name": "French Guiana",
                "code": "GF"
            },
            {
                "name": "French Polynesia",
                "code": "PF"
            },
            {
                "name": "Grand Est",
                "code": "GES"
            },
            {
                "name": "Guadeloupe",
                "code": "GP"
            },
            {
                "name": "Hauts-de-France",
                "code": "HDF"
            },
            {
                "name": "Île-de-France",
                "code": "IDF"
            },
            {
                "name": "Languedoc-Roussillon",
                "code": "K"
            },
            {
                "name": "Limousin",
                "code": "L"
            },
            {
                "name": "Lorraine",
                "code": "M"
            },
            {
                "name": "Lower Normandy",
                "code": "P"
            },
            {
                "name": "Martinique",
                "code": "MQ"
            },
            {
                "name": "Mayotte",
                "code": "YT"
            },
            {
                "name": "Nord-Pas-de-Calais",
                "code": "O"
            },
            {
                "name": "Normandy",
                "code": "NOR"
            },
            {
                "name": "Nouvelle-Aquitaine",
                "code": "NAQ"
            },
            {
                "name": "Occitania",
                "code": "OCC"
            },
            {
                "name": "Paris",
                "code": "75"
            },
            {
                "name": "Pays de la Loire",
                "code": "PDL"
            },
            {
                "name": "Picardy",
                "code": "S"
            },
            {
                "name": "Poitou-Charentes",
                "code": "T"
            },
            {
                "name": "Provence-Alpes-Côte d'Azur",
                "code": "PAC"
            },
            {
                "name": "Réunion",
                "code": "RE"
            },
            {
                "name": "Rhône-Alpes",
                "code": "V"
            },
            {
                "name": "Saint Barthélemy",
                "code": "BL"
            },
            {
                "name": "Saint Martin",
                "code": "MF"
            },
            {
                "name": "Saint Pierre and Miquelon",
                "code": "PM"
            },
            {
                "name": "Sigave",
                "code": "WF-SG"
            },
            {
                "name": "Upper Normandy",
                "code": "Q"
            },
            {
                "name": "Uvea",
                "code": "WF-UV"
            },
            {
                "name": "Wallis and Futuna",
                "code": "WF"
            }
        ],
        "GF": [
            {
                "name": "French Guiana",
                "code": "French Guiana"
            }
        ],
        "PF": [
            {
                "name": "French Polynesia",
                "code": "French Polynesia"
            }
        ],
        "TF": [
            {
                "name": "French Southern Territories",
                "code": "French Southern Territories"
            }
        ],
        "GA": [
            {
                "name": "Estuaire Province",
                "code": "1"
            },
            {
                "name": "Haut-Ogooué Province",
                "code": "2"
            },
            {
                "name": "Moyen-Ogooué Province",
                "code": "3"
            },
            {
                "name": "Ngounié Province",
                "code": "4"
            },
            {
                "name": "Nyanga Province",
                "code": "5"
            },
            {
                "name": "Ogooué-Ivindo Province",
                "code": "6"
            },
            {
                "name": "Ogooué-Lolo Province",
                "code": "7"
            },
            {
                "name": "Ogooué-Maritime Province",
                "code": "8"
            },
            {
                "name": "Woleu-Ntem Province",
                "code": "9"
            }
        ],
        "GM": [
            {
                "name": "Banjul",
                "code": "B"
            },
            {
                "name": "Central River Division",
                "code": "M"
            },
            {
                "name": "Lower River Division",
                "code": "L"
            },
            {
                "name": "North Bank Division",
                "code": "N"
            },
            {
                "name": "Upper River Division",
                "code": "U"
            },
            {
                "name": "West Coast Division",
                "code": "W"
            }
        ],
        "GE": [
            {
                "name": "Adjara",
                "code": "AJ"
            },
            {
                "name": "Autonomous Republic of Abkhazia",
                "code": "AB"
            },
            {
                "name": "Guria",
                "code": "GU"
            },
            {
                "name": "Imereti",
                "code": "IM"
            },
            {
                "name": "Kakheti",
                "code": "KA"
            },
            {
                "name": "Khelvachauri Municipality",
                "code": "29"
            },
            {
                "name": "Kvemo Kartli",
                "code": "KK"
            },
            {
                "name": "Mtskheta-Mtianeti",
                "code": "MM"
            },
            {
                "name": "Racha-Lechkhumi and Kvemo Svaneti",
                "code": "RL"
            },
            {
                "name": "Samegrelo-Zemo Svaneti",
                "code": "SZ"
            },
            {
                "name": "Samtskhe-Javakheti",
                "code": "SJ"
            },
            {
                "name": "Senaki Municipality",
                "code": "50"
            },
            {
                "name": "Shida Kartli",
                "code": "SK"
            },
            {
                "name": "Tbilisi",
                "code": "TB"
            }
        ],
        "DE": [
            {
                "name": "Baden-Württemberg",
                "code": "BW"
            },
            {
                "name": "Bavaria",
                "code": "BY"
            },
            {
                "name": "Berlin",
                "code": "BE"
            },
            {
                "name": "Brandenburg",
                "code": "BB"
            },
            {
                "name": "Bremen",
                "code": "HB"
            },
            {
                "name": "Hamburg",
                "code": "HH"
            },
            {
                "name": "Hesse",
                "code": "HE"
            },
            {
                "name": "Lower Saxony",
                "code": "NI"
            },
            {
                "name": "Mecklenburg-Vorpommern",
                "code": "MV"
            },
            {
                "name": "North Rhine-Westphalia",
                "code": "NW"
            },
            {
                "name": "Rhineland-Palatinate",
                "code": "RP"
            },
            {
                "name": "Saarland",
                "code": "SL"
            },
            {
                "name": "Saxony",
                "code": "SN"
            },
            {
                "name": "Saxony-Anhalt",
                "code": "ST"
            },
            {
                "name": "Schleswig-Holstein",
                "code": "SH"
            },
            {
                "name": "Thuringia",
                "code": "TH"
            }
        ],
        "GH": [
            {
                "name": "Ashanti Region",
                "code": "AH"
            },
            {
                "name": "Brong-Ahafo Region",
                "code": "BA"
            },
            {
                "name": "Central Region",
                "code": "CP"
            },
            {
                "name": "Eastern Region",
                "code": "EP"
            },
            {
                "name": "Greater Accra Region",
                "code": "AA"
            },
            {
                "name": "Northern Region",
                "code": "NP"
            },
            {
                "name": "Upper East Region",
                "code": "UE"
            },
            {
                "name": "Upper West Region",
                "code": "UW"
            },
            {
                "name": "Volta Region",
                "code": "TV"
            },
            {
                "name": "Western Region",
                "code": "WP"
            }
        ],
        "GI": [
            {
                "name": "Gibraltar",
                "code": "Gibraltar"
            }
        ],
        "GR": [
            {
                "name": "Achaea Regional Unit",
                "code": "13"
            },
            {
                "name": "Aetolia-Acarnania Regional Unit",
                "code": "01"
            },
            {
                "name": "Arcadia Prefecture",
                "code": "12"
            },
            {
                "name": "Argolis Regional Unit",
                "code": "11"
            },
            {
                "name": "Attica Region",
                "code": "I"
            },
            {
                "name": "Boeotia Regional Unit",
                "code": "03"
            },
            {
                "name": "Central Greece Region",
                "code": "H"
            },
            {
                "name": "Central Macedonia",
                "code": "B"
            },
            {
                "name": "Chania Regional Unit",
                "code": "94"
            },
            {
                "name": "Corfu Prefecture",
                "code": "22"
            },
            {
                "name": "Corinthia Regional Unit",
                "code": "15"
            },
            {
                "name": "Crete Region",
                "code": "M"
            },
            {
                "name": "Drama Regional Unit",
                "code": "52"
            },
            {
                "name": "East Attica Regional Unit",
                "code": "A2"
            },
            {
                "name": "East Macedonia and Thrace",
                "code": "A"
            },
            {
                "name": "Epirus Region",
                "code": "D"
            },
            {
                "name": "Euboea",
                "code": "04"
            },
            {
                "name": "Grevena Prefecture",
                "code": "51"
            },
            {
                "name": "Imathia Regional Unit",
                "code": "53"
            },
            {
                "name": "Ioannina Regional Unit",
                "code": "33"
            },
            {
                "name": "Ionian Islands Region",
                "code": "F"
            },
            {
                "name": "Karditsa Regional Unit",
                "code": "41"
            },
            {
                "name": "Kastoria Regional Unit",
                "code": "56"
            },
            {
                "name": "Kefalonia Prefecture",
                "code": "23"
            },
            {
                "name": "Kilkis Regional Unit",
                "code": "57"
            },
            {
                "name": "Kozani Prefecture",
                "code": "58"
            },
            {
                "name": "Laconia",
                "code": "16"
            },
            {
                "name": "Larissa Prefecture",
                "code": "42"
            },
            {
                "name": "Lefkada Regional Unit",
                "code": "24"
            },
            {
                "name": "Pella Regional Unit",
                "code": "59"
            },
            {
                "name": "Peloponnese Region",
                "code": "J"
            },
            {
                "name": "Phthiotis Prefecture",
                "code": "06"
            },
            {
                "name": "Preveza Prefecture",
                "code": "34"
            },
            {
                "name": "Serres Prefecture",
                "code": "62"
            },
            {
                "name": "South Aegean",
                "code": "L"
            },
            {
                "name": "Thessaloniki Regional Unit",
                "code": "54"
            },
            {
                "name": "West Greece Region",
                "code": "G"
            },
            {
                "name": "West Macedonia Region",
                "code": "C"
            }
        ],
        "GL": [
            {
                "name": "Greenland",
                "code": "Greenland"
            }
        ],
        "GD": [
            {
                "name": "Carriacou and Petite Martinique",
                "code": "10"
            },
            {
                "name": "Saint Andrew Parish",
                "code": "01"
            },
            {
                "name": "Saint David Parish",
                "code": "02"
            },
            {
                "name": "Saint George Parish",
                "code": "03"
            },
            {
                "name": "Saint John Parish",
                "code": "04"
            },
            {
                "name": "Saint Mark Parish",
                "code": "05"
            },
            {
                "name": "Saint Patrick Parish",
                "code": "06"
            }
        ],
        "GP": [
            {
                "name": "Guadeloupe",
                "code": "Guadeloupe"
            }
        ],
        "GU": [
            {
                "name": "Guam",
                "code": "Guam"
            }
        ],
        "GT": [
            {
                "name": "Alta Verapaz Department",
                "code": "AV"
            },
            {
                "name": "Baja Verapaz Department",
                "code": "BV"
            },
            {
                "name": "Chimaltenango Department",
                "code": "CM"
            },
            {
                "name": "Chiquimula Department",
                "code": "CQ"
            },
            {
                "name": "El Progreso Department",
                "code": "PR"
            },
            {
                "name": "Escuintla Department",
                "code": "ES"
            },
            {
                "name": "Guatemala Department",
                "code": "GU"
            },
            {
                "name": "Huehuetenango Department",
                "code": "HU"
            },
            {
                "name": "Izabal Department",
                "code": "IZ"
            },
            {
                "name": "Jalapa Department",
                "code": "JA"
            },
            {
                "name": "Jutiapa Department",
                "code": "JU"
            },
            {
                "name": "Petén Department",
                "code": "PE"
            },
            {
                "name": "Quetzaltenango Department",
                "code": "QZ"
            },
            {
                "name": "Quiché Department",
                "code": "QC"
            },
            {
                "name": "Retalhuleu Department",
                "code": "RE"
            },
            {
                "name": "Sacatepéquez Department",
                "code": "SA"
            },
            {
                "name": "San Marcos Department",
                "code": "SM"
            },
            {
                "name": "Santa Rosa Department",
                "code": "SR"
            },
            {
                "name": "Sololá Department",
                "code": "SO"
            },
            {
                "name": "Suchitepéquez Department",
                "code": "SU"
            },
            {
                "name": "Totonicapán Department",
                "code": "TO"
            }
        ],
        "GG": [
            {
                "name": "Guernsey",
                "code": "Guernsey"
            }
        ],
        "GN": [
            {
                "name": "Beyla Prefecture",
                "code": "BE"
            },
            {
                "name": "Boffa Prefecture",
                "code": "BF"
            },
            {
                "name": "Boké Prefecture",
                "code": "BK"
            },
            {
                "name": "Boké Region",
                "code": "B"
            },
            {
                "name": "Conakry",
                "code": "C"
            },
            {
                "name": "Coyah Prefecture",
                "code": "CO"
            },
            {
                "name": "Dabola Prefecture",
                "code": "DB"
            },
            {
                "name": "Dalaba Prefecture",
                "code": "DL"
            },
            {
                "name": "Dinguiraye Prefecture",
                "code": "DI"
            },
            {
                "name": "Dubréka Prefecture",
                "code": "DU"
            },
            {
                "name": "Faranah Prefecture",
                "code": "FA"
            },
            {
                "name": "Forécariah Prefecture",
                "code": "FO"
            },
            {
                "name": "Fria Prefecture",
                "code": "FR"
            },
            {
                "name": "Gaoual Prefecture",
                "code": "GA"
            },
            {
                "name": "Guéckédou Prefecture",
                "code": "GU"
            },
            {
                "name": "Kankan Prefecture",
                "code": "KA"
            },
            {
                "name": "Kankan Region",
                "code": "K"
            },
            {
                "name": "Kérouané Prefecture",
                "code": "KE"
            },
            {
                "name": "Kindia Prefecture",
                "code": "KD"
            },
            {
                "name": "Kindia Region",
                "code": "D"
            },
            {
                "name": "Kissidougou Prefecture",
                "code": "KS"
            },
            {
                "name": "Koubia Prefecture",
                "code": "KB"
            },
            {
                "name": "Koundara Prefecture",
                "code": "KN"
            },
            {
                "name": "Kouroussa Prefecture",
                "code": "KO"
            },
            {
                "name": "Labé Prefecture",
                "code": "LA"
            },
            {
                "name": "Labé Region",
                "code": "L"
            },
            {
                "name": "Lélouma Prefecture",
                "code": "LE"
            },
            {
                "name": "Lola Prefecture",
                "code": "LO"
            },
            {
                "name": "Macenta Prefecture",
                "code": "MC"
            },
            {
                "name": "Mali Prefecture",
                "code": "ML"
            },
            {
                "name": "Mamou Prefecture",
                "code": "MM"
            },
            {
                "name": "Mamou Region",
                "code": "M"
            },
            {
                "name": "Mandiana Prefecture",
                "code": "MD"
            },
            {
                "name": "Nzérékoré Prefecture",
                "code": "NZ"
            },
            {
                "name": "Nzérékoré Region",
                "code": "N"
            },
            {
                "name": "Pita Prefecture",
                "code": "PI"
            },
            {
                "name": "Siguiri Prefecture",
                "code": "SI"
            },
            {
                "name": "Télimélé Prefecture",
                "code": "TE"
            },
            {
                "name": "Tougué Prefecture",
                "code": "TO"
            },
            {
                "name": "Yomou Prefecture",
                "code": "YO"
            }
        ],
        "GW": [
            {
                "name": "Bafatá",
                "code": "BA"
            },
            {
                "name": "Biombo Region",
                "code": "BM"
            },
            {
                "name": "Bolama Region",
                "code": "BL"
            },
            {
                "name": "Cacheu Region",
                "code": "CA"
            },
            {
                "name": "Gabú Region",
                "code": "GA"
            },
            {
                "name": "Leste Province",
                "code": "L"
            },
            {
                "name": "Norte Province",
                "code": "N"
            },
            {
                "name": "Oio Region",
                "code": "OI"
            },
            {
                "name": "Quinara Region",
                "code": "QU"
            },
            {
                "name": "Sul Province",
                "code": "S"
            },
            {
                "name": "Tombali Region",
                "code": "TO"
            }
        ],
        "GY": [
            {
                "name": "Barima-Waini",
                "code": "BA"
            },
            {
                "name": "Cuyuni-Mazaruni",
                "code": "CU"
            },
            {
                "name": "Demerara-Mahaica",
                "code": "DE"
            },
            {
                "name": "East Berbice-Corentyne",
                "code": "EB"
            },
            {
                "name": "Essequibo Islands-West Demerara",
                "code": "ES"
            },
            {
                "name": "Mahaica-Berbice",
                "code": "MA"
            },
            {
                "name": "Pomeroon-Supenaam",
                "code": "PM"
            },
            {
                "name": "Potaro-Siparuni",
                "code": "PT"
            },
            {
                "name": "Upper Demerara-Berbice",
                "code": "UD"
            },
            {
                "name": "Upper Takutu-Upper Essequibo",
                "code": "UT"
            }
        ],
        "HT": [
            {
                "name": "Artibonite",
                "code": "AR"
            },
            {
                "name": "Centre",
                "code": "CE"
            },
            {
                "name": "Grand'Anse",
                "code": "GA"
            },
            {
                "name": "Nippes",
                "code": "NI"
            },
            {
                "name": "Nord",
                "code": "ND"
            },
            {
                "name": "Nord-Est",
                "code": "NE"
            },
            {
                "name": "Nord-Ouest",
                "code": "NO"
            },
            {
                "name": "Ouest",
                "code": "OU"
            },
            {
                "name": "Sud",
                "code": "SD"
            },
            {
                "name": "Sud-Est",
                "code": "SE"
            }
        ],
        "HM": [
            {
                "name": "Heard Island and Mcdonald Islands",
                "code": "Heard Island and Mcdonald Islands"
            }
        ],
        "VA": [
            {
                "name": "Vatican City Holy See",
                "code": "Vatican City Holy See"
            }
        ],
        "HN": [
            {
                "name": "Atlántida Department",
                "code": "AT"
            },
            {
                "name": "Bay Islands Department",
                "code": "IB"
            },
            {
                "name": "Choluteca Department",
                "code": "CH"
            },
            {
                "name": "Colón Department",
                "code": "CL"
            },
            {
                "name": "Comayagua Department",
                "code": "CM"
            },
            {
                "name": "Copán Department",
                "code": "CP"
            },
            {
                "name": "Cortés Department",
                "code": "CR"
            },
            {
                "name": "El Paraíso Department",
                "code": "EP"
            },
            {
                "name": "Francisco Morazán Department",
                "code": "FM"
            },
            {
                "name": "Gracias a Dios Department",
                "code": "GD"
            },
            {
                "name": "Intibucá Department",
                "code": "IN"
            },
            {
                "name": "La Paz Department",
                "code": "LP"
            },
            {
                "name": "Lempira Department",
                "code": "LE"
            },
            {
                "name": "Ocotepeque Department",
                "code": "OC"
            },
            {
                "name": "Olancho Department",
                "code": "OL"
            },
            {
                "name": "Santa Bárbara Department",
                "code": "SB"
            },
            {
                "name": "Valle Department",
                "code": "VA"
            },
            {
                "name": "Yoro Department",
                "code": "YO"
            }
        ],
        "HK": [
            {
                "name": "Central and Western District",
                "code": "HCW"
            },
            {
                "name": "Eastern",
                "code": "HEA"
            },
            {
                "name": "Islands District",
                "code": "NIS"
            },
            {
                "name": "Kowloon City",
                "code": "KKC"
            },
            {
                "name": "Kwai Tsing",
                "code": "NKT"
            },
            {
                "name": "Kwun Tong",
                "code": "KKT"
            },
            {
                "name": "North",
                "code": "NNO"
            },
            {
                "name": "Sai Kung District",
                "code": "NSK"
            },
            {
                "name": "Sha Tin",
                "code": "NST"
            },
            {
                "name": "Sham Shui Po",
                "code": "KSS"
            },
            {
                "name": "Southern",
                "code": "HSO"
            },
            {
                "name": "Tsuen Wan District",
                "code": "NTW"
            },
            {
                "name": "Tuen Mun",
                "code": "NTM"
            },
            {
                "name": "Wan Chai",
                "code": "HWC"
            },
            {
                "name": "Wong Tai Sin",
                "code": "KWT"
            },
            {
                "name": "Yau Tsim Mong",
                "code": "KYT"
            },
            {
                "name": "Yuen Long District",
                "code": "NYL"
            }
        ],
        "HU": [
            {
                "name": "Bács-Kiskun County",
                "code": "BK"
            },
            {
                "name": "Baranya County",
                "code": "BA"
            },
            {
                "name": "Békés County",
                "code": "BE"
            },
            {
                "name": "Békéscsaba",
                "code": "BC"
            },
            {
                "name": "Borsod-Abaúj-Zemplén County",
                "code": "BZ"
            },
            {
                "name": "Budapest",
                "code": "BU"
            },
            {
                "name": "Csongrád County",
                "code": "CS"
            },
            {
                "name": "Debrecen",
                "code": "DE"
            },
            {
                "name": "Dunaújváros",
                "code": "DU"
            },
            {
                "name": "Eger",
                "code": "EG"
            },
            {
                "name": "Érd",
                "code": "ER"
            },
            {
                "name": "Fejér County",
                "code": "FE"
            },
            {
                "name": "Győr",
                "code": "GY"
            },
            {
                "name": "Győr-Moson-Sopron County",
                "code": "GS"
            },
            {
                "name": "Hajdú-Bihar County",
                "code": "HB"
            },
            {
                "name": "Heves County",
                "code": "HE"
            },
            {
                "name": "Hódmezővásárhely",
                "code": "HV"
            },
            {
                "name": "Jász-Nagykun-Szolnok County",
                "code": "JN"
            },
            {
                "name": "Kaposvár",
                "code": "KV"
            },
            {
                "name": "Kecskemét",
                "code": "KM"
            },
            {
                "name": "Miskolc",
                "code": "MI"
            },
            {
                "name": "Nagykanizsa",
                "code": "NK"
            },
            {
                "name": "Nógrád County",
                "code": "NO"
            },
            {
                "name": "Nyíregyháza",
                "code": "NY"
            },
            {
                "name": "Pécs",
                "code": "PS"
            },
            {
                "name": "Pest County",
                "code": "PE"
            },
            {
                "name": "Salgótarján",
                "code": "ST"
            },
            {
                "name": "Somogy County",
                "code": "SO"
            },
            {
                "name": "Sopron",
                "code": "SN"
            },
            {
                "name": "Szabolcs-Szatmár-Bereg County",
                "code": "SZ"
            },
            {
                "name": "Szeged",
                "code": "SD"
            },
            {
                "name": "Székesfehérvár",
                "code": "SF"
            },
            {
                "name": "Szekszárd",
                "code": "SS"
            },
            {
                "name": "Szolnok",
                "code": "SK"
            },
            {
                "name": "Szombathely",
                "code": "SH"
            },
            {
                "name": "Tatabánya",
                "code": "TB"
            },
            {
                "name": "Tolna County",
                "code": "TO"
            },
            {
                "name": "Vas County",
                "code": "VA"
            },
            {
                "name": "Veszprém",
                "code": "VM"
            },
            {
                "name": "Veszprém County",
                "code": "VE"
            },
            {
                "name": "Zala County",
                "code": "ZA"
            },
            {
                "name": "Zalaegerszeg",
                "code": "ZE"
            }
        ],
        "IS": [
            {
                "name": "Capital Region",
                "code": "1"
            },
            {
                "name": "Eastern Region",
                "code": "7"
            },
            {
                "name": "Northeastern Region",
                "code": "6"
            },
            {
                "name": "Northwestern Region",
                "code": "5"
            },
            {
                "name": "Southern Peninsula Region",
                "code": "2"
            },
            {
                "name": "Southern Region",
                "code": "8"
            },
            {
                "name": "Western Region",
                "code": "3"
            },
            {
                "name": "Westfjords",
                "code": "4"
            }
        ],
        "IN": [
            {
                "name": "Andaman and Nicobar Islands",
                "code": "AN"
            },
            {
                "name": "Andhra Pradesh",
                "code": "AP"
            },
            {
                "name": "Arunachal Pradesh",
                "code": "AR"
            },
            {
                "name": "Assam",
                "code": "AS"
            },
            {
                "name": "Bihar",
                "code": "BR"
            },
            {
                "name": "Chandigarh",
                "code": "CH"
            },
            {
                "name": "Chhattisgarh",
                "code": "CT"
            },
            {
                "name": "Dadra and Nagar Haveli",
                "code": "DN"
            },
            {
                "name": "Daman and Diu",
                "code": "DD"
            },
            {
                "name": "Delhi",
                "code": "DL"
            },
            {
                "name": "Goa",
                "code": "GA"
            },
            {
                "name": "Gujarat",
                "code": "GJ"
            },
            {
                "name": "Haryana",
                "code": "HR"
            },
            {
                "name": "Himachal Pradesh",
                "code": "HP"
            },
            {
                "name": "Jammu and Kashmir",
                "code": "JK"
            },
            {
                "name": "Jharkhand",
                "code": "JH"
            },
            {
                "name": "Karnataka",
                "code": "KA"
            },
            {
                "name": "Kerala",
                "code": "KL"
            },
            {
                "name": "Ladakh",
                "code": "LA"
            },
            {
                "name": "Lakshadweep",
                "code": "LD"
            },
            {
                "name": "Madhya Pradesh",
                "code": "MP"
            },
            {
                "name": "Maharashtra",
                "code": "MH"
            },
            {
                "name": "Manipur",
                "code": "MN"
            },
            {
                "name": "Meghalaya",
                "code": "ML"
            },
            {
                "name": "Mizoram",
                "code": "MZ"
            },
            {
                "name": "Nagaland",
                "code": "NL"
            },
            {
                "name": "Odisha",
                "code": "OR"
            },
            {
                "name": "Puducherry",
                "code": "PY"
            },
            {
                "name": "Punjab",
                "code": "PB"
            },
            {
                "name": "Rajasthan",
                "code": "RJ"
            },
            {
                "name": "Sikkim",
                "code": "SK"
            },
            {
                "name": "Tamil Nadu",
                "code": "TN"
            },
            {
                "name": "Telangana",
                "code": "TG"
            },
            {
                "name": "Tripura",
                "code": "TR"
            },
            {
                "name": "Uttar Pradesh",
                "code": "UP"
            },
            {
                "name": "Uttarakhand",
                "code": "UT"
            },
            {
                "name": "West Bengal",
                "code": "WB"
            }
        ],
        "ID": [
            {
                "name": "Aceh",
                "code": "AC"
            },
            {
                "name": "Bali",
                "code": "BA"
            },
            {
                "name": "Bangka Belitung Islands",
                "code": "BB"
            },
            {
                "name": "Banten",
                "code": "BT"
            },
            {
                "name": "Bengkulu",
                "code": "BE"
            },
            {
                "name": "Central Java",
                "code": "JT"
            },
            {
                "name": "Central Kalimantan",
                "code": "KT"
            },
            {
                "name": "Central Sulawesi",
                "code": "ST"
            },
            {
                "name": "East Java",
                "code": "JI"
            },
            {
                "name": "East Kalimantan",
                "code": "KI"
            },
            {
                "name": "East Nusa Tenggara",
                "code": "NT"
            },
            {
                "name": "Gorontalo",
                "code": "GO"
            },
            {
                "name": "Jakarta",
                "code": "JK"
            },
            {
                "name": "Jambi",
                "code": "JA"
            },
            {
                "name": "Kalimantan",
                "code": "KA"
            },
            {
                "name": "Lampung",
                "code": "LA"
            },
            {
                "name": "Lesser Sunda Islands",
                "code": "NU"
            },
            {
                "name": "Maluku",
                "code": "MA"
            },
            {
                "name": "Maluku Islands",
                "code": "ML"
            },
            {
                "name": "North Kalimantan",
                "code": "KU"
            },
            {
                "name": "North Maluku",
                "code": "MU"
            },
            {
                "name": "North Sulawesi",
                "code": "SA"
            },
            {
                "name": "North Sumatra",
                "code": "SU"
            },
            {
                "name": "Papua",
                "code": "PA"
            },
            {
                "name": "Riau",
                "code": "RI"
            },
            {
                "name": "Riau Islands",
                "code": "KR"
            },
            {
                "name": "South Kalimantan",
                "code": "KS"
            },
            {
                "name": "South Sulawesi",
                "code": "SN"
            },
            {
                "name": "South Sumatra",
                "code": "SS"
            },
            {
                "name": "Southeast Sulawesi",
                "code": "SG"
            },
            {
                "name": "Special Region of Yogyakarta",
                "code": "YO"
            },
            {
                "name": "Sulawesi",
                "code": "SL"
            },
            {
                "name": "Sumatra",
                "code": "SM"
            },
            {
                "name": "West Java",
                "code": "JB"
            },
            {
                "name": "West Nusa Tenggara",
                "code": "NB"
            },
            {
                "name": "West Papua",
                "code": "PB"
            },
            {
                "name": "West Sulawesi",
                "code": "SR"
            },
            {
                "name": "West Sumatra",
                "code": "SB"
            }
        ],
        "IR": [
            {
                "name": "Alborz Province",
                "code": "32"
            },
            {
                "name": "Ardabil Province",
                "code": "03"
            },
            {
                "name": "Bushehr Province",
                "code": "06"
            },
            {
                "name": "Chaharmahal and Bakhtiari Province",
                "code": "08"
            },
            {
                "name": "East Azerbaijan Province",
                "code": "01"
            },
            {
                "name": "Fars Province",
                "code": "14"
            },
            {
                "name": "Gilan Province",
                "code": "19"
            },
            {
                "name": "Golestan Province",
                "code": "27"
            },
            {
                "name": "Hormozgan Province",
                "code": "23"
            },
            {
                "name": "Ilam Province",
                "code": "05"
            },
            {
                "name": "Isfahan Province",
                "code": "04"
            },
            {
                "name": "Kerman Province",
                "code": "15"
            },
            {
                "name": "Kermanshah Province",
                "code": "17"
            },
            {
                "name": "Khuzestan Province",
                "code": "10"
            },
            {
                "name": "Kohgiluyeh and Boyer-Ahmad Province",
                "code": "18"
            },
            {
                "name": "Kurdistan Province",
                "code": "16"
            },
            {
                "name": "Lorestan Province",
                "code": "20"
            },
            {
                "name": "Markazi Province",
                "code": "22"
            },
            {
                "name": "Mazandaran Province",
                "code": "21"
            },
            {
                "name": "North Khorasan Province",
                "code": "31"
            },
            {
                "name": "Qazvin Province",
                "code": "28"
            },
            {
                "name": "Qom Province",
                "code": "26"
            },
            {
                "name": "Razavi Khorasan Province",
                "code": "30"
            },
            {
                "name": "Semnan Province",
                "code": "12"
            },
            {
                "name": "Sistan and Baluchestan",
                "code": "13"
            },
            {
                "name": "South Khorasan Province",
                "code": "29"
            },
            {
                "name": "Tehran Province",
                "code": "07"
            },
            {
                "name": "West Azarbaijan Province",
                "code": "02"
            },
            {
                "name": "Yazd Province",
                "code": "25"
            },
            {
                "name": "Zanjan Province",
                "code": "11"
            }
        ],
        "IQ": [
            {
                "name": "Al Anbar Governorate",
                "code": "AN"
            },
            {
                "name": "Al Muthanna Governorate",
                "code": "MU"
            },
            {
                "name": "Al-Qādisiyyah Governorate",
                "code": "QA"
            },
            {
                "name": "Babylon Governorate",
                "code": "BB"
            },
            {
                "name": "Baghdad Governorate",
                "code": "BG"
            },
            {
                "name": "Basra Governorate",
                "code": "BA"
            },
            {
                "name": "Dhi Qar Governorate",
                "code": "DQ"
            },
            {
                "name": "Diyala Governorate",
                "code": "DI"
            },
            {
                "name": "Dohuk Governorate",
                "code": "DA"
            },
            {
                "name": "Erbil Governorate",
                "code": "AR"
            },
            {
                "name": "Karbala Governorate",
                "code": "KA"
            },
            {
                "name": "Kirkuk Governorate",
                "code": "KI"
            },
            {
                "name": "Maysan Governorate",
                "code": "MA"
            },
            {
                "name": "Najaf Governorate",
                "code": "NA"
            },
            {
                "name": "Nineveh Governorate",
                "code": "NI"
            },
            {
                "name": "Saladin Governorate",
                "code": "SD"
            },
            {
                "name": "Sulaymaniyah Governorate",
                "code": "SU"
            },
            {
                "name": "Wasit Governorate",
                "code": "WA"
            }
        ],
        "IE": [
            {
                "name": "Connacht",
                "code": "C"
            },
            {
                "name": "County Carlow",
                "code": "CW"
            },
            {
                "name": "County Cavan",
                "code": "CN"
            },
            {
                "name": "County Clare",
                "code": "CE"
            },
            {
                "name": "County Cork",
                "code": "CO"
            },
            {
                "name": "County Donegal",
                "code": "DL"
            },
            {
                "name": "County Dublin",
                "code": "D"
            },
            {
                "name": "County Galway",
                "code": "G"
            },
            {
                "name": "County Kerry",
                "code": "KY"
            },
            {
                "name": "County Kildare",
                "code": "KE"
            },
            {
                "name": "County Kilkenny",
                "code": "KK"
            },
            {
                "name": "County Laois",
                "code": "LS"
            },
            {
                "name": "County Limerick",
                "code": "LK"
            },
            {
                "name": "County Longford",
                "code": "LD"
            },
            {
                "name": "County Louth",
                "code": "LH"
            },
            {
                "name": "County Mayo",
                "code": "MO"
            },
            {
                "name": "County Meath",
                "code": "MH"
            },
            {
                "name": "County Monaghan",
                "code": "MN"
            },
            {
                "name": "County Offaly",
                "code": "OY"
            },
            {
                "name": "County Roscommon",
                "code": "RN"
            },
            {
                "name": "County Sligo",
                "code": "SO"
            },
            {
                "name": "County Tipperary",
                "code": "TA"
            },
            {
                "name": "County Waterford",
                "code": "WD"
            },
            {
                "name": "County Westmeath",
                "code": "WH"
            },
            {
                "name": "County Wexford",
                "code": "WX"
            },
            {
                "name": "County Wicklow",
                "code": "WW"
            },
            {
                "name": "Leinster",
                "code": "L"
            },
            {
                "name": "Munster",
                "code": "M"
            },
            {
                "name": "Ulster",
                "code": "U"
            }
        ],
        "IM": [
            {
                "name": "Isle of Man",
                "code": "Isle of Man"
            }
        ],
        "IL": [
            {
                "name": "Central District",
                "code": "M"
            },
            {
                "name": "Haifa District",
                "code": "HA"
            },
            {
                "name": "Jerusalem District",
                "code": "JM"
            },
            {
                "name": "Northern District",
                "code": "Z"
            },
            {
                "name": "Southern District",
                "code": "D"
            },
            {
                "name": "Tel Aviv District",
                "code": "TA"
            }
        ],
        "IT": [
            {
                "name": "Abruzzo",
                "code": "65"
            },
            {
                "name": "Aosta Valley",
                "code": "23"
            },
            {
                "name": "Apulia",
                "code": "75"
            },
            {
                "name": "Basilicata",
                "code": "77"
            },
            {
                "name": "Benevento Province",
                "code": "BN"
            },
            {
                "name": "Calabria",
                "code": "78"
            },
            {
                "name": "Campania",
                "code": "72"
            },
            {
                "name": "Emilia-Romagna",
                "code": "45"
            },
            {
                "name": "Friuli–Venezia Giulia",
                "code": "36"
            },
            {
                "name": "Lazio",
                "code": "62"
            },
            {
                "name": "Libero consorzio comunale di Agrigento",
                "code": "AG"
            },
            {
                "name": "Libero consorzio comunale di Caltanissetta",
                "code": "CL"
            },
            {
                "name": "Libero consorzio comunale di Enna",
                "code": "EN"
            },
            {
                "name": "Libero consorzio comunale di Ragusa",
                "code": "RG"
            },
            {
                "name": "Libero consorzio comunale di Siracusa",
                "code": "SR"
            },
            {
                "name": "Libero consorzio comunale di Trapani",
                "code": "TP"
            },
            {
                "name": "Liguria",
                "code": "42"
            },
            {
                "name": "Lombardy",
                "code": "25"
            },
            {
                "name": "Marche",
                "code": "57"
            },
            {
                "name": "Metropolitan City of Bari",
                "code": "BA"
            },
            {
                "name": "Metropolitan City of Bologna",
                "code": "BO"
            },
            {
                "name": "Metropolitan City of Cagliari",
                "code": "CA"
            },
            {
                "name": "Metropolitan City of Catania",
                "code": "CT"
            },
            {
                "name": "Metropolitan City of Florence",
                "code": "FI"
            },
            {
                "name": "Metropolitan City of Genoa",
                "code": "GE"
            },
            {
                "name": "Metropolitan City of Messina",
                "code": "ME"
            },
            {
                "name": "Metropolitan City of Milan",
                "code": "MI"
            },
            {
                "name": "Metropolitan City of Naples",
                "code": "NA"
            },
            {
                "name": "Metropolitan City of Palermo",
                "code": "PA"
            },
            {
                "name": "Metropolitan City of Reggio Calabria",
                "code": "RC"
            },
            {
                "name": "Metropolitan City of Rome",
                "code": "RM"
            },
            {
                "name": "Metropolitan City of Turin",
                "code": "TO"
            },
            {
                "name": "Metropolitan City of Venice",
                "code": "VE"
            },
            {
                "name": "Molise",
                "code": "67"
            },
            {
                "name": "Pesaro and Urbino Province",
                "code": "PU"
            },
            {
                "name": "Piedmont",
                "code": "21"
            },
            {
                "name": "Province of Alessandria",
                "code": "AL"
            },
            {
                "name": "Province of Ancona",
                "code": "AN"
            },
            {
                "name": "Province of Ascoli Piceno",
                "code": "AP"
            },
            {
                "name": "Province of Asti",
                "code": "AT"
            },
            {
                "name": "Province of Avellino",
                "code": "AV"
            },
            {
                "name": "Province of Barletta-Andria-Trani",
                "code": "BT"
            },
            {
                "name": "Province of Belluno",
                "code": "BL"
            },
            {
                "name": "Province of Bergamo",
                "code": "BG"
            },
            {
                "name": "Province of Biella",
                "code": "BI"
            },
            {
                "name": "Province of Brescia",
                "code": "BS"
            },
            {
                "name": "Province of Brindisi",
                "code": "BR"
            },
            {
                "name": "Province of Campobasso",
                "code": "CB"
            },
            {
                "name": "Province of Carbonia-Iglesias",
                "code": "CI"
            },
            {
                "name": "Province of Caserta",
                "code": "CE"
            },
            {
                "name": "Province of Catanzaro",
                "code": "CZ"
            },
            {
                "name": "Province of Chieti",
                "code": "CH"
            },
            {
                "name": "Province of Como",
                "code": "CO"
            },
            {
                "name": "Province of Cosenza",
                "code": "CS"
            },
            {
                "name": "Province of Cremona",
                "code": "CR"
            },
            {
                "name": "Province of Crotone",
                "code": "KR"
            },
            {
                "name": "Province of Cuneo",
                "code": "CN"
            },
            {
                "name": "Province of Fermo",
                "code": "FM"
            },
            {
                "name": "Province of Ferrara",
                "code": "FE"
            },
            {
                "name": "Province of Foggia",
                "code": "FG"
            },
            {
                "name": "Province of Forlì-Cesena",
                "code": "FC"
            },
            {
                "name": "Province of Frosinone",
                "code": "FR"
            },
            {
                "name": "Province of Gorizia",
                "code": "GO"
            },
            {
                "name": "Province of Grosseto",
                "code": "GR"
            },
            {
                "name": "Province of Imperia",
                "code": "IM"
            },
            {
                "name": "Province of Isernia",
                "code": "IS"
            },
            {
                "name": "Province of L'Aquila",
                "code": "AQ"
            },
            {
                "name": "Province of La Spezia",
                "code": "SP"
            },
            {
                "name": "Province of Latina",
                "code": "LT"
            },
            {
                "name": "Province of Lecce",
                "code": "LE"
            },
            {
                "name": "Province of Lecco",
                "code": "LC"
            },
            {
                "name": "Province of Livorno",
                "code": "LI"
            },
            {
                "name": "Province of Lodi",
                "code": "LO"
            },
            {
                "name": "Province of Lucca",
                "code": "LU"
            },
            {
                "name": "Province of Macerata",
                "code": "MC"
            },
            {
                "name": "Province of Mantua",
                "code": "MN"
            },
            {
                "name": "Province of Massa and Carrara",
                "code": "MS"
            },
            {
                "name": "Province of Matera",
                "code": "MT"
            },
            {
                "name": "Province of Medio Campidano",
                "code": "VS"
            },
            {
                "name": "Province of Modena",
                "code": "MO"
            },
            {
                "name": "Province of Monza and Brianza",
                "code": "MB"
            },
            {
                "name": "Province of Novara",
                "code": "NO"
            },
            {
                "name": "Province of Nuoro",
                "code": "NU"
            },
            {
                "name": "Province of Ogliastra",
                "code": "OG"
            },
            {
                "name": "Province of Olbia-Tempio",
                "code": "OT"
            },
            {
                "name": "Province of Oristano",
                "code": "OR"
            },
            {
                "name": "Province of Padua",
                "code": "PD"
            },
            {
                "name": "Province of Parma",
                "code": "PR"
            },
            {
                "name": "Province of Pavia",
                "code": "PV"
            },
            {
                "name": "Province of Perugia",
                "code": "PG"
            },
            {
                "name": "Province of Pescara",
                "code": "PE"
            },
            {
                "name": "Province of Piacenza",
                "code": "PC"
            },
            {
                "name": "Province of Pisa",
                "code": "PI"
            },
            {
                "name": "Province of Pistoia",
                "code": "PT"
            },
            {
                "name": "Province of Pordenone",
                "code": "PN"
            },
            {
                "name": "Province of Potenza",
                "code": "PZ"
            },
            {
                "name": "Province of Prato",
                "code": "PO"
            },
            {
                "name": "Province of Ravenna",
                "code": "RA"
            },
            {
                "name": "Province of Reggio Emilia",
                "code": "RE"
            },
            {
                "name": "Province of Rieti",
                "code": "RI"
            },
            {
                "name": "Province of Rimini",
                "code": "RN"
            },
            {
                "name": "Province of Rovigo",
                "code": "RO"
            },
            {
                "name": "Province of Salerno",
                "code": "SA"
            },
            {
                "name": "Province of Sassari",
                "code": "SS"
            },
            {
                "name": "Province of Savona",
                "code": "SV"
            },
            {
                "name": "Province of Siena",
                "code": "SI"
            },
            {
                "name": "Province of Sondrio",
                "code": "SO"
            },
            {
                "name": "Province of Taranto",
                "code": "TA"
            },
            {
                "name": "Province of Teramo",
                "code": "TE"
            },
            {
                "name": "Province of Terni",
                "code": "TR"
            },
            {
                "name": "Province of Treviso",
                "code": "TV"
            },
            {
                "name": "Province of Trieste",
                "code": "TS"
            },
            {
                "name": "Province of Udine",
                "code": "UD"
            },
            {
                "name": "Province of Varese",
                "code": "VA"
            },
            {
                "name": "Province of Verbano-Cusio-Ossola",
                "code": "VB"
            },
            {
                "name": "Province of Vercelli",
                "code": "VC"
            },
            {
                "name": "Province of Verona",
                "code": "VR"
            },
            {
                "name": "Province of Vibo Valentia",
                "code": "VV"
            },
            {
                "name": "Province of Vicenza",
                "code": "VI"
            },
            {
                "name": "Province of Viterbo",
                "code": "VT"
            },
            {
                "name": "Sardinia",
                "code": "88"
            },
            {
                "name": "Sicily",
                "code": "82"
            },
            {
                "name": "South Tyrol",
                "code": "BZ"
            },
            {
                "name": "Trentino",
                "code": "TN"
            },
            {
                "name": "Trentino-South Tyrol",
                "code": "32"
            },
            {
                "name": "Tuscany",
                "code": "52"
            },
            {
                "name": "Umbria",
                "code": "55"
            },
            {
                "name": "Veneto",
                "code": "34"
            }
        ],
        "JM": [
            {
                "name": "Clarendon Parish",
                "code": "13"
            },
            {
                "name": "Hanover Parish",
                "code": "09"
            },
            {
                "name": "Kingston Parish",
                "code": "01"
            },
            {
                "name": "Manchester Parish",
                "code": "12"
            },
            {
                "name": "Portland Parish",
                "code": "04"
            },
            {
                "name": "Saint Andrew",
                "code": "02"
            },
            {
                "name": "Saint Ann Parish",
                "code": "06"
            },
            {
                "name": "Saint Catherine Parish",
                "code": "14"
            },
            {
                "name": "Saint Elizabeth Parish",
                "code": "11"
            },
            {
                "name": "Saint James Parish",
                "code": "08"
            },
            {
                "name": "Saint Mary Parish",
                "code": "05"
            },
            {
                "name": "Saint Thomas Parish",
                "code": "03"
            },
            {
                "name": "Trelawny Parish",
                "code": "07"
            },
            {
                "name": "Westmoreland Parish",
                "code": "10"
            }
        ],
        "JP": [
            {
                "name": "Aichi Prefecture",
                "code": "23"
            },
            {
                "name": "Akita Prefecture",
                "code": "05"
            },
            {
                "name": "Aomori Prefecture",
                "code": "02"
            },
            {
                "name": "Chiba Prefecture",
                "code": "12"
            },
            {
                "name": "Ehime Prefecture",
                "code": "38"
            },
            {
                "name": "Fukui Prefecture",
                "code": "18"
            },
            {
                "name": "Fukuoka Prefecture",
                "code": "40"
            },
            {
                "name": "Fukushima Prefecture",
                "code": "07"
            },
            {
                "name": "Gifu Prefecture",
                "code": "21"
            },
            {
                "name": "Gunma Prefecture",
                "code": "10"
            },
            {
                "name": "Hiroshima Prefecture",
                "code": "34"
            },
            {
                "name": "Hokkaidō Prefecture",
                "code": "01"
            },
            {
                "name": "Hyōgo Prefecture",
                "code": "28"
            },
            {
                "name": "Ibaraki Prefecture",
                "code": "08"
            },
            {
                "name": "Ishikawa Prefecture",
                "code": "17"
            },
            {
                "name": "Iwate Prefecture",
                "code": "03"
            },
            {
                "name": "Kagawa Prefecture",
                "code": "37"
            },
            {
                "name": "Kagoshima Prefecture",
                "code": "46"
            },
            {
                "name": "Kanagawa Prefecture",
                "code": "14"
            },
            {
                "name": "Kumamoto Prefecture",
                "code": "43"
            },
            {
                "name": "Kyōto Prefecture",
                "code": "26"
            },
            {
                "name": "Mie Prefecture",
                "code": "24"
            },
            {
                "name": "Miyagi Prefecture",
                "code": "04"
            },
            {
                "name": "Miyazaki Prefecture",
                "code": "45"
            },
            {
                "name": "Nagano Prefecture",
                "code": "20"
            },
            {
                "name": "Nagasaki Prefecture",
                "code": "42"
            },
            {
                "name": "Nara Prefecture",
                "code": "29"
            },
            {
                "name": "Niigata Prefecture",
                "code": "15"
            },
            {
                "name": "Ōita Prefecture",
                "code": "44"
            },
            {
                "name": "Okayama Prefecture",
                "code": "33"
            },
            {
                "name": "Okinawa Prefecture",
                "code": "47"
            },
            {
                "name": "Ōsaka Prefecture",
                "code": "27"
            },
            {
                "name": "Saga Prefecture",
                "code": "41"
            },
            {
                "name": "Saitama Prefecture",
                "code": "11"
            },
            {
                "name": "Shiga Prefecture",
                "code": "25"
            },
            {
                "name": "Shimane Prefecture",
                "code": "32"
            },
            {
                "name": "Shizuoka Prefecture",
                "code": "22"
            },
            {
                "name": "Tochigi Prefecture",
                "code": "09"
            },
            {
                "name": "Tokushima Prefecture",
                "code": "36"
            },
            {
                "name": "Tokyo",
                "code": "13"
            },
            {
                "name": "Tottori Prefecture",
                "code": "31"
            },
            {
                "name": "Toyama Prefecture",
                "code": "16"
            },
            {
                "name": "Wakayama Prefecture",
                "code": "30"
            },
            {
                "name": "Yamagata Prefecture",
                "code": "06"
            },
            {
                "name": "Yamaguchi Prefecture",
                "code": "35"
            },
            {
                "name": "Yamanashi Prefecture",
                "code": "19"
            }
        ],
        "JE": [
            {
                "name": "Jersey",
                "code": "Jersey"
            }
        ],
        "JO": [
            {
                "name": "Ajloun Governorate",
                "code": "AJ"
            },
            {
                "name": "Amman Governorate",
                "code": "AM"
            },
            {
                "name": "Aqaba Governorate",
                "code": "AQ"
            },
            {
                "name": "Balqa Governorate",
                "code": "BA"
            },
            {
                "name": "Irbid Governorate",
                "code": "IR"
            },
            {
                "name": "Jerash Governorate",
                "code": "JA"
            },
            {
                "name": "Karak Governorate",
                "code": "KA"
            },
            {
                "name": "Ma'an Governorate",
                "code": "MN"
            },
            {
                "name": "Madaba Governorate",
                "code": "MD"
            },
            {
                "name": "Mafraq Governorate",
                "code": "MA"
            },
            {
                "name": "Tafilah Governorate",
                "code": "AT"
            },
            {
                "name": "Zarqa Governorate",
                "code": "AZ"
            }
        ],
        "KZ": [
            {
                "name": "Akmola Region",
                "code": "AKM"
            },
            {
                "name": "Aktobe Region",
                "code": "AKT"
            },
            {
                "name": "Almaty",
                "code": "ALA"
            },
            {
                "name": "Almaty Region",
                "code": "ALM"
            },
            {
                "name": "Atyrau Region",
                "code": "ATY"
            },
            {
                "name": "Baikonur",
                "code": "BAY"
            },
            {
                "name": "East Kazakhstan Region",
                "code": "VOS"
            },
            {
                "name": "Jambyl Region",
                "code": "ZHA"
            },
            {
                "name": "Karaganda Region",
                "code": "KAR"
            },
            {
                "name": "Kostanay Region",
                "code": "KUS"
            },
            {
                "name": "Kyzylorda Region",
                "code": "KZY"
            },
            {
                "name": "Mangystau Region",
                "code": "MAN"
            },
            {
                "name": "North Kazakhstan Region",
                "code": "SEV"
            },
            {
                "name": "Nur-Sultan",
                "code": "AST"
            },
            {
                "name": "Pavlodar Region",
                "code": "PAV"
            },
            {
                "name": "Turkestan Region",
                "code": "YUZ"
            },
            {
                "name": "West Kazakhstan Province",
                "code": "ZAP"
            }
        ],
        "KE": [
            {
                "name": "Baringo County",
                "code": "01"
            },
            {
                "name": "Bomet County",
                "code": "02"
            },
            {
                "name": "Bungoma County",
                "code": "03"
            },
            {
                "name": "Busia County",
                "code": "04"
            },
            {
                "name": "Central Province",
                "code": "200"
            },
            {
                "name": "Coast Province",
                "code": "300"
            },
            {
                "name": "Eastern Province",
                "code": "400"
            },
            {
                "name": "Elgeyo-Marakwet County",
                "code": "05"
            },
            {
                "name": "Embu County",
                "code": "06"
            },
            {
                "name": "Garissa County",
                "code": "07"
            },
            {
                "name": "Homa Bay County",
                "code": "08"
            },
            {
                "name": "Isiolo County",
                "code": "09"
            },
            {
                "name": "Kajiado County",
                "code": "10"
            },
            {
                "name": "Kakamega County",
                "code": "11"
            },
            {
                "name": "Kericho County",
                "code": "12"
            },
            {
                "name": "Kiambu County",
                "code": "13"
            },
            {
                "name": "Kilifi County",
                "code": "14"
            },
            {
                "name": "Kirinyaga County",
                "code": "15"
            },
            {
                "name": "Kisii County",
                "code": "16"
            },
            {
                "name": "Kisumu County",
                "code": "17"
            },
            {
                "name": "Kitui County",
                "code": "18"
            },
            {
                "name": "Kwale County",
                "code": "19"
            },
            {
                "name": "Laikipia County",
                "code": "20"
            },
            {
                "name": "Lamu County",
                "code": "21"
            },
            {
                "name": "Machakos County",
                "code": "22"
            },
            {
                "name": "Makueni County",
                "code": "23"
            },
            {
                "name": "Mandera County",
                "code": "24"
            },
            {
                "name": "Marsabit County",
                "code": "25"
            },
            {
                "name": "Meru County",
                "code": "26"
            },
            {
                "name": "Migori County",
                "code": "27"
            },
            {
                "name": "Mombasa County",
                "code": "28"
            },
            {
                "name": "Muranga County",
                "code": "29"
            },
            {
                "name": "Nairobi",
                "code": "110"
            },
            {
                "name": "Nakuru District",
                "code": "31"
            },
            {
                "name": "Nandi District",
                "code": "32"
            },
            {
                "name": "Narok County",
                "code": "33"
            },
            {
                "name": "North Eastern Province",
                "code": "500"
            },
            {
                "name": "Nyamira District",
                "code": "34"
            },
            {
                "name": "Nyandarua County",
                "code": "35"
            },
            {
                "name": "Nyanza Province",
                "code": "600"
            },
            {
                "name": "Nyeri County",
                "code": "36"
            },
            {
                "name": "Rift Valley Province",
                "code": "700"
            },
            {
                "name": "Samburu County",
                "code": "37"
            },
            {
                "name": "Siaya County",
                "code": "38"
            },
            {
                "name": "Taita–Taveta County",
                "code": "39"
            },
            {
                "name": "Tana River County",
                "code": "40"
            },
            {
                "name": "Tharaka Nithi County",
                "code": "41"
            },
            {
                "name": "Trans-Nzoia District",
                "code": "42"
            },
            {
                "name": "Turkana County",
                "code": "43"
            },
            {
                "name": "Uasin Gishu District",
                "code": "44"
            },
            {
                "name": "Vihiga District",
                "code": "45"
            },
            {
                "name": "Wajir County",
                "code": "46"
            },
            {
                "name": "West Pokot County",
                "code": "47"
            },
            {
                "name": "Western Province",
                "code": "800"
            }
        ],
        "KI": [
            {
                "name": "Gilbert Islands",
                "code": "G"
            },
            {
                "name": "Line Islands",
                "code": "L"
            },
            {
                "name": "Phoenix Islands",
                "code": "P"
            }
        ],
        "KP": [
            {
                "name": "Chagang Province",
                "code": "04"
            },
            {
                "name": "Kangwon Province",
                "code": "07"
            },
            {
                "name": "North Hamgyong Province",
                "code": "09"
            },
            {
                "name": "North Hwanghae Province",
                "code": "06"
            },
            {
                "name": "North Pyongan Province",
                "code": "03"
            },
            {
                "name": "Pyongyang",
                "code": "01"
            },
            {
                "name": "Rason",
                "code": "13"
            },
            {
                "name": "Ryanggang Province",
                "code": "10"
            },
            {
                "name": "South Hamgyong Province",
                "code": "08"
            },
            {
                "name": "South Hwanghae Province",
                "code": "05"
            },
            {
                "name": "South Pyongan Province",
                "code": "02"
            }
        ],
        "KR": [
            {
                "name": "Busan",
                "code": "26"
            },
            {
                "name": "Daegu",
                "code": "27"
            },
            {
                "name": "Daejeon",
                "code": "30"
            },
            {
                "name": "Gangwon Province",
                "code": "42"
            },
            {
                "name": "Gwangju",
                "code": "29"
            },
            {
                "name": "Gyeonggi Province",
                "code": "41"
            },
            {
                "name": "Incheon",
                "code": "28"
            },
            {
                "name": "Jeju",
                "code": "49"
            },
            {
                "name": "North Chungcheong Province",
                "code": "43"
            },
            {
                "name": "North Gyeongsang Province",
                "code": "47"
            },
            {
                "name": "North Jeolla Province",
                "code": "45"
            },
            {
                "name": "Sejong City",
                "code": "50"
            },
            {
                "name": "Seoul",
                "code": "11"
            },
            {
                "name": "South Chungcheong Province",
                "code": "44"
            },
            {
                "name": "South Gyeongsang Province",
                "code": "48"
            },
            {
                "name": "South Jeolla Province",
                "code": "46"
            },
            {
                "name": "Ulsan",
                "code": "31"
            }
        ],
        "XK": [
            {
                "name": "Đakovica District (Gjakove)",
                "code": "XDG"
            },
            {
                "name": "Gjilan District",
                "code": "XGJ"
            },
            {
                "name": "Kosovska Mitrovica District",
                "code": "XKM"
            },
            {
                "name": "Peć District",
                "code": "XPE"
            },
            {
                "name": "Pristina (Priştine)",
                "code": "XPI"
            },
            {
                "name": "Prizren District",
                "code": "XPR"
            },
            {
                "name": "Uroševac District (Ferizaj)",
                "code": "XUF"
            }
        ],
        "KW": [
            {
                "name": "Al Ahmadi Governorate",
                "code": "AH"
            },
            {
                "name": "Al Farwaniyah Governorate",
                "code": "FA"
            },
            {
                "name": "Al Jahra Governorate",
                "code": "JA"
            },
            {
                "name": "Capital Governorate",
                "code": "KU"
            },
            {
                "name": "Hawalli Governorate",
                "code": "HA"
            },
            {
                "name": "Mubarak Al-Kabeer Governorate",
                "code": "MU"
            }
        ],
        "KG": [
            {
                "name": "Batken Region",
                "code": "B"
            },
            {
                "name": "Bishkek",
                "code": "GB"
            },
            {
                "name": "Chuy Region",
                "code": "C"
            },
            {
                "name": "Issyk-Kul Region",
                "code": "Y"
            },
            {
                "name": "Jalal-Abad Region",
                "code": "J"
            },
            {
                "name": "Naryn Region",
                "code": "N"
            },
            {
                "name": "Osh",
                "code": "GO"
            },
            {
                "name": "Osh Region",
                "code": "O"
            },
            {
                "name": "Talas Region",
                "code": "T"
            }
        ],
        "LA": [
            {
                "name": "Attapeu Province",
                "code": "AT"
            },
            {
                "name": "Bokeo Province",
                "code": "BK"
            },
            {
                "name": "Bolikhamsai Province",
                "code": "BL"
            },
            {
                "name": "Champasak Province",
                "code": "CH"
            },
            {
                "name": "Houaphanh Province",
                "code": "HO"
            },
            {
                "name": "Khammouane Province",
                "code": "KH"
            },
            {
                "name": "Luang Namtha Province",
                "code": "LM"
            },
            {
                "name": "Luang Prabang Province",
                "code": "LP"
            },
            {
                "name": "Oudomxay Province",
                "code": "OU"
            },
            {
                "name": "Phongsaly Province",
                "code": "PH"
            },
            {
                "name": "Sainyabuli Province",
                "code": "XA"
            },
            {
                "name": "Salavan Province",
                "code": "SL"
            },
            {
                "name": "Savannakhet Province",
                "code": "SV"
            },
            {
                "name": "Sekong Province",
                "code": "XE"
            },
            {
                "name": "Vientiane Prefecture",
                "code": "VT"
            },
            {
                "name": "Vientiane Province",
                "code": "VI"
            },
            {
                "name": "Xaisomboun",
                "code": "XN"
            },
            {
                "name": "Xaisomboun Province",
                "code": "XS"
            },
            {
                "name": "Xiangkhouang Province",
                "code": "XI"
            }
        ],
        "LV": [
            {
                "name": "Aglona Municipality",
                "code": "001"
            },
            {
                "name": "Aizkraukle Municipality",
                "code": "002"
            },
            {
                "name": "Aizpute Municipality",
                "code": "003"
            },
            {
                "name": "Aknīste Municipality",
                "code": "004"
            },
            {
                "name": "Aloja Municipality",
                "code": "005"
            },
            {
                "name": "Alsunga Municipality",
                "code": "006"
            },
            {
                "name": "Alūksne Municipality",
                "code": "007"
            },
            {
                "name": "Amata Municipality",
                "code": "008"
            },
            {
                "name": "Ape Municipality",
                "code": "009"
            },
            {
                "name": "Auce Municipality",
                "code": "010"
            },
            {
                "name": "Babīte Municipality",
                "code": "012"
            },
            {
                "name": "Baldone Municipality",
                "code": "013"
            },
            {
                "name": "Baltinava Municipality",
                "code": "014"
            },
            {
                "name": "Balvi Municipality",
                "code": "015"
            },
            {
                "name": "Bauska Municipality",
                "code": "016"
            },
            {
                "name": "Beverīna Municipality",
                "code": "017"
            },
            {
                "name": "Brocēni Municipality",
                "code": "018"
            },
            {
                "name": "Burtnieki Municipality",
                "code": "019"
            },
            {
                "name": "Carnikava Municipality",
                "code": "020"
            },
            {
                "name": "Cēsis Municipality",
                "code": "022"
            },
            {
                "name": "Cesvaine Municipality",
                "code": "021"
            },
            {
                "name": "Cibla Municipality",
                "code": "023"
            },
            {
                "name": "Dagda Municipality",
                "code": "024"
            },
            {
                "name": "Daugavpils",
                "code": "DGV"
            },
            {
                "name": "Daugavpils Municipality",
                "code": "025"
            },
            {
                "name": "Dobele Municipality",
                "code": "026"
            },
            {
                "name": "Dundaga Municipality",
                "code": "027"
            },
            {
                "name": "Durbe Municipality",
                "code": "028"
            },
            {
                "name": "Engure Municipality",
                "code": "029"
            },
            {
                "name": "Ērgļi Municipality",
                "code": "030"
            },
            {
                "name": "Garkalne Municipality",
                "code": "031"
            },
            {
                "name": "Grobiņa Municipality",
                "code": "032"
            },
            {
                "name": "Gulbene Municipality",
                "code": "033"
            },
            {
                "name": "Iecava Municipality",
                "code": "034"
            },
            {
                "name": "Ikšķile Municipality",
                "code": "035"
            },
            {
                "name": "Ilūkste Municipality",
                "code": "036"
            },
            {
                "name": "Inčukalns Municipality",
                "code": "037"
            },
            {
                "name": "Jaunjelgava Municipality",
                "code": "038"
            },
            {
                "name": "Jaunpiebalga Municipality",
                "code": "039"
            },
            {
                "name": "Jaunpils Municipality",
                "code": "040"
            },
            {
                "name": "Jēkabpils",
                "code": "JKB"
            },
            {
                "name": "Jēkabpils Municipality",
                "code": "042"
            },
            {
                "name": "Jelgava",
                "code": "JEL"
            },
            {
                "name": "Jelgava Municipality",
                "code": "041"
            },
            {
                "name": "Jūrmala",
                "code": "JUR"
            },
            {
                "name": "Kandava Municipality",
                "code": "043"
            },
            {
                "name": "Kārsava Municipality",
                "code": "044"
            },
            {
                "name": "Ķegums Municipality",
                "code": "051"
            },
            {
                "name": "Ķekava Municipality",
                "code": "052"
            },
            {
                "name": "Kocēni Municipality",
                "code": "045"
            },
            {
                "name": "Koknese Municipality",
                "code": "046"
            },
            {
                "name": "Krāslava Municipality",
                "code": "047"
            },
            {
                "name": "Krimulda Municipality",
                "code": "048"
            },
            {
                "name": "Krustpils Municipality",
                "code": "049"
            },
            {
                "name": "Kuldīga Municipality",
                "code": "050"
            },
            {
                "name": "Lielvārde Municipality",
                "code": "053"
            },
            {
                "name": "Liepāja",
                "code": "LPX"
            },
            {
                "name": "Līgatne Municipality",
                "code": "055"
            },
            {
                "name": "Limbaži Municipality",
                "code": "054"
            },
            {
                "name": "Līvāni Municipality",
                "code": "056"
            },
            {
                "name": "Lubāna Municipality",
                "code": "057"
            },
            {
                "name": "Ludza Municipality",
                "code": "058"
            },
            {
                "name": "Madona Municipality",
                "code": "059"
            },
            {
                "name": "Mālpils Municipality",
                "code": "061"
            },
            {
                "name": "Mārupe Municipality",
                "code": "062"
            },
            {
                "name": "Mazsalaca Municipality",
                "code": "060"
            },
            {
                "name": "Mērsrags Municipality",
                "code": "063"
            },
            {
                "name": "Naukšēni Municipality",
                "code": "064"
            },
            {
                "name": "Nereta Municipality",
                "code": "065"
            },
            {
                "name": "Nīca Municipality",
                "code": "066"
            },
            {
                "name": "Ogre Municipality",
                "code": "067"
            },
            {
                "name": "Olaine Municipality",
                "code": "068"
            },
            {
                "name": "Ozolnieki Municipality",
                "code": "069"
            },
            {
                "name": "Pārgauja Municipality",
                "code": "070"
            },
            {
                "name": "Pāvilosta Municipality",
                "code": "071"
            },
            {
                "name": "Pļaviņas Municipality",
                "code": "072"
            },
            {
                "name": "Preiļi Municipality",
                "code": "073"
            },
            {
                "name": "Priekule Municipality",
                "code": "074"
            },
            {
                "name": "Priekuļi Municipality",
                "code": "075"
            },
            {
                "name": "Rauna Municipality",
                "code": "076"
            },
            {
                "name": "Rēzekne",
                "code": "REZ"
            },
            {
                "name": "Rēzekne Municipality",
                "code": "077"
            },
            {
                "name": "Riebiņi Municipality",
                "code": "078"
            },
            {
                "name": "Riga",
                "code": "RIX"
            },
            {
                "name": "Roja Municipality",
                "code": "079"
            },
            {
                "name": "Ropaži Municipality",
                "code": "080"
            },
            {
                "name": "Rucava Municipality",
                "code": "081"
            },
            {
                "name": "Rugāji Municipality",
                "code": "082"
            },
            {
                "name": "Rūjiena Municipality",
                "code": "084"
            },
            {
                "name": "Rundāle Municipality",
                "code": "083"
            },
            {
                "name": "Sala Municipality",
                "code": "085"
            },
            {
                "name": "Salacgrīva Municipality",
                "code": "086"
            },
            {
                "name": "Salaspils Municipality",
                "code": "087"
            },
            {
                "name": "Saldus Municipality",
                "code": "088"
            },
            {
                "name": "Saulkrasti Municipality",
                "code": "089"
            },
            {
                "name": "Sēja Municipality",
                "code": "090"
            },
            {
                "name": "Sigulda Municipality",
                "code": "091"
            },
            {
                "name": "Skrīveri Municipality",
                "code": "092"
            },
            {
                "name": "Skrunda Municipality",
                "code": "093"
            },
            {
                "name": "Smiltene Municipality",
                "code": "094"
            },
            {
                "name": "Stopiņi Municipality",
                "code": "095"
            },
            {
                "name": "Strenči Municipality",
                "code": "096"
            },
            {
                "name": "Talsi Municipality",
                "code": "097"
            },
            {
                "name": "Tērvete Municipality",
                "code": "098"
            },
            {
                "name": "Tukums Municipality",
                "code": "099"
            },
            {
                "name": "Vaiņode Municipality",
                "code": "100"
            },
            {
                "name": "Valka Municipality",
                "code": "101"
            },
            {
                "name": "Valmiera",
                "code": "VMR"
            },
            {
                "name": "Varakļāni Municipality",
                "code": "102"
            },
            {
                "name": "Vārkava Municipality",
                "code": "103"
            },
            {
                "name": "Vecpiebalga Municipality",
                "code": "104"
            },
            {
                "name": "Vecumnieki Municipality",
                "code": "105"
            },
            {
                "name": "Ventspils",
                "code": "VEN"
            },
            {
                "name": "Ventspils Municipality",
                "code": "106"
            },
            {
                "name": "Viesīte Municipality",
                "code": "107"
            },
            {
                "name": "Viļaka Municipality",
                "code": "108"
            },
            {
                "name": "Viļāni Municipality",
                "code": "109"
            },
            {
                "name": "Zilupe Municipality",
                "code": "110"
            }
        ],
        "LB": [
            {
                "name": "Akkar Governorate",
                "code": "AK"
            },
            {
                "name": "Baalbek-Hermel Governorate",
                "code": "BH"
            },
            {
                "name": "Beirut Governorate",
                "code": "BA"
            },
            {
                "name": "Beqaa Governorate",
                "code": "BI"
            },
            {
                "name": "Mount Lebanon Governorate",
                "code": "JL"
            },
            {
                "name": "Nabatieh Governorate",
                "code": "NA"
            },
            {
                "name": "North Governorate",
                "code": "AS"
            },
            {
                "name": "South Governorate",
                "code": "JA"
            }
        ],
        "LS": [
            {
                "name": "Berea District",
                "code": "D"
            },
            {
                "name": "Butha-Buthe District",
                "code": "B"
            },
            {
                "name": "Leribe District",
                "code": "C"
            },
            {
                "name": "Mafeteng District",
                "code": "E"
            },
            {
                "name": "Maseru District",
                "code": "A"
            },
            {
                "name": "Mohale's Hoek District",
                "code": "F"
            },
            {
                "name": "Mokhotlong District",
                "code": "J"
            },
            {
                "name": "Qacha's Nek District",
                "code": "H"
            },
            {
                "name": "Quthing District",
                "code": "G"
            },
            {
                "name": "Thaba-Tseka District",
                "code": "K"
            }
        ],
        "LR": [
            {
                "name": "Bomi County",
                "code": "BM"
            },
            {
                "name": "Bong County",
                "code": "BG"
            },
            {
                "name": "Gbarpolu County",
                "code": "GP"
            },
            {
                "name": "Grand Bassa County",
                "code": "GB"
            },
            {
                "name": "Grand Cape Mount County",
                "code": "CM"
            },
            {
                "name": "Grand Gedeh County",
                "code": "GG"
            },
            {
                "name": "Grand Kru County",
                "code": "GK"
            },
            {
                "name": "Lofa County",
                "code": "LO"
            },
            {
                "name": "Margibi County",
                "code": "MG"
            },
            {
                "name": "Maryland County",
                "code": "MY"
            },
            {
                "name": "Montserrado County",
                "code": "MO"
            },
            {
                "name": "Nimba",
                "code": "NI"
            },
            {
                "name": "River Cess County",
                "code": "RI"
            },
            {
                "name": "River Gee County",
                "code": "RG"
            },
            {
                "name": "Sinoe County",
                "code": "SI"
            }
        ],
        "LY": [
            {
                "name": "Al Wahat District",
                "code": "WA"
            },
            {
                "name": "Benghazi",
                "code": "BA"
            },
            {
                "name": "Derna District",
                "code": "DR"
            },
            {
                "name": "Ghat District",
                "code": "GT"
            },
            {
                "name": "Jabal al Akhdar",
                "code": "JA"
            },
            {
                "name": "Jabal al Gharbi District",
                "code": "JG"
            },
            {
                "name": "Jafara",
                "code": "JI"
            },
            {
                "name": "Jufra",
                "code": "JU"
            },
            {
                "name": "Kufra District",
                "code": "KF"
            },
            {
                "name": "Marj District",
                "code": "MJ"
            },
            {
                "name": "Misrata District",
                "code": "MI"
            },
            {
                "name": "Murqub",
                "code": "MB"
            },
            {
                "name": "Murzuq District",
                "code": "MQ"
            },
            {
                "name": "Nalut District",
                "code": "NL"
            },
            {
                "name": "Nuqat al Khams",
                "code": "NQ"
            },
            {
                "name": "Sabha District",
                "code": "SB"
            },
            {
                "name": "Sirte District",
                "code": "SR"
            },
            {
                "name": "Tripoli District",
                "code": "TB"
            },
            {
                "name": "Wadi al Hayaa District",
                "code": "WD"
            },
            {
                "name": "Wadi al Shatii District",
                "code": "WS"
            },
            {
                "name": "Zawiya District",
                "code": "ZA"
            }
        ],
        "LI": [
            {
                "name": "Balzers",
                "code": "01"
            },
            {
                "name": "Eschen",
                "code": "02"
            },
            {
                "name": "Gamprin",
                "code": "03"
            },
            {
                "name": "Mauren",
                "code": "04"
            },
            {
                "name": "Planken",
                "code": "05"
            },
            {
                "name": "Ruggell",
                "code": "06"
            },
            {
                "name": "Schaan",
                "code": "07"
            },
            {
                "name": "Schellenberg",
                "code": "08"
            },
            {
                "name": "Triesen",
                "code": "09"
            },
            {
                "name": "Triesenberg",
                "code": "10"
            },
            {
                "name": "Vaduz",
                "code": "11"
            }
        ],
        "LT": [
            {
                "name": "Akmenė District Municipality",
                "code": "01"
            },
            {
                "name": "Alytus City Municipality",
                "code": "02"
            },
            {
                "name": "Alytus County",
                "code": "AL"
            },
            {
                "name": "Alytus District Municipality",
                "code": "03"
            },
            {
                "name": "Birštonas Municipality",
                "code": "05"
            },
            {
                "name": "Biržai District Municipality",
                "code": "06"
            },
            {
                "name": "Druskininkai municipality",
                "code": "07"
            },
            {
                "name": "Elektrėnai municipality",
                "code": "08"
            },
            {
                "name": "Ignalina District Municipality",
                "code": "09"
            },
            {
                "name": "Jonava District Municipality",
                "code": "10"
            },
            {
                "name": "Joniškis District Municipality",
                "code": "11"
            },
            {
                "name": "Jurbarkas District Municipality",
                "code": "12"
            },
            {
                "name": "Kaišiadorys District Municipality",
                "code": "13"
            },
            {
                "name": "Kalvarija municipality",
                "code": "14"
            },
            {
                "name": "Kaunas City Municipality",
                "code": "15"
            },
            {
                "name": "Kaunas County",
                "code": "KU"
            },
            {
                "name": "Kaunas District Municipality",
                "code": "16"
            },
            {
                "name": "Kazlų Rūda municipality",
                "code": "17"
            },
            {
                "name": "Kėdainiai District Municipality",
                "code": "18"
            },
            {
                "name": "Kelmė District Municipality",
                "code": "19"
            },
            {
                "name": "Klaipeda City Municipality",
                "code": "20"
            },
            {
                "name": "Klaipėda County",
                "code": "KL"
            },
            {
                "name": "Klaipėda District Municipality",
                "code": "21"
            },
            {
                "name": "Kretinga District Municipality",
                "code": "22"
            },
            {
                "name": "Kupiškis District Municipality",
                "code": "23"
            },
            {
                "name": "Lazdijai District Municipality",
                "code": "24"
            },
            {
                "name": "Marijampolė County",
                "code": "MR"
            },
            {
                "name": "Marijampolė Municipality",
                "code": "25"
            },
            {
                "name": "Mažeikiai District Municipality",
                "code": "26"
            },
            {
                "name": "Molėtai District Municipality",
                "code": "27"
            },
            {
                "name": "Neringa Municipality",
                "code": "28"
            },
            {
                "name": "Pagėgiai municipality",
                "code": "29"
            },
            {
                "name": "Pakruojis District Municipality",
                "code": "30"
            },
            {
                "name": "Palanga City Municipality",
                "code": "31"
            },
            {
                "name": "Panevėžys City Municipality",
                "code": "32"
            },
            {
                "name": "Panevėžys County",
                "code": "PN"
            },
            {
                "name": "Panevėžys District Municipality",
                "code": "33"
            },
            {
                "name": "Pasvalys District Municipality",
                "code": "34"
            },
            {
                "name": "Plungė District Municipality",
                "code": "35"
            },
            {
                "name": "Prienai District Municipality",
                "code": "36"
            },
            {
                "name": "Radviliškis District Municipality",
                "code": "37"
            },
            {
                "name": "Raseiniai District Municipality",
                "code": "38"
            },
            {
                "name": "Rietavas municipality",
                "code": "39"
            },
            {
                "name": "Rokiškis District Municipality",
                "code": "40"
            },
            {
                "name": "Šakiai District Municipality",
                "code": "41"
            },
            {
                "name": "Šalčininkai District Municipality",
                "code": "42"
            },
            {
                "name": "Šiauliai City Municipality",
                "code": "43"
            },
            {
                "name": "Šiauliai County",
                "code": "SA"
            },
            {
                "name": "Šiauliai District Municipality",
                "code": "44"
            },
            {
                "name": "Šilalė District Municipality",
                "code": "45"
            },
            {
                "name": "Šilutė District Municipality",
                "code": "46"
            },
            {
                "name": "Širvintos District Municipality",
                "code": "47"
            },
            {
                "name": "Skuodas District Municipality",
                "code": "48"
            },
            {
                "name": "Švenčionys District Municipality",
                "code": "49"
            },
            {
                "name": "Tauragė County",
                "code": "TA"
            },
            {
                "name": "Tauragė District Municipality",
                "code": "50"
            },
            {
                "name": "Telšiai County",
                "code": "TE"
            },
            {
                "name": "Telšiai District Municipality",
                "code": "51"
            },
            {
                "name": "Trakai District Municipality",
                "code": "52"
            },
            {
                "name": "Ukmergė District Municipality",
                "code": "53"
            },
            {
                "name": "Utena County",
                "code": "UT"
            },
            {
                "name": "Utena District Municipality",
                "code": "54"
            },
            {
                "name": "Varėna District Municipality",
                "code": "55"
            },
            {
                "name": "Vilkaviškis District Municipality",
                "code": "56"
            },
            {
                "name": "Vilnius City Municipality",
                "code": "57"
            },
            {
                "name": "Vilnius County",
                "code": "VL"
            },
            {
                "name": "Vilnius District Municipality",
                "code": "58"
            },
            {
                "name": "Visaginas Municipality",
                "code": "59"
            },
            {
                "name": "Zarasai District Municipality",
                "code": "60"
            }
        ],
        "LU": [
            {
                "name": "Canton of Capellen",
                "code": "CA"
            },
            {
                "name": "Canton of Clervaux",
                "code": "CL"
            },
            {
                "name": "Canton of Diekirch",
                "code": "DI"
            },
            {
                "name": "Canton of Echternach",
                "code": "EC"
            },
            {
                "name": "Canton of Esch-sur-Alzette",
                "code": "ES"
            },
            {
                "name": "Canton of Grevenmacher",
                "code": "GR"
            },
            {
                "name": "Canton of Luxembourg",
                "code": "LU"
            },
            {
                "name": "Canton of Mersch",
                "code": "ME"
            },
            {
                "name": "Canton of Redange",
                "code": "RD"
            },
            {
                "name": "Canton of Remich",
                "code": "RM"
            },
            {
                "name": "Canton of Vianden",
                "code": "VD"
            },
            {
                "name": "Canton of Wiltz",
                "code": "WI"
            },
            {
                "name": "Diekirch District",
                "code": "D"
            },
            {
                "name": "Grevenmacher District",
                "code": "G"
            },
            {
                "name": "Luxembourg District",
                "code": "L"
            }
        ],
        "MO": [
            {
                "name": "Macao",
                "code": "Macao"
            }
        ],
        "MK": [
            {
                "name": "Aerodrom Municipality",
                "code": "01"
            },
            {
                "name": "Aračinovo Municipality",
                "code": "02"
            },
            {
                "name": "Berovo Municipality",
                "code": "03"
            },
            {
                "name": "Bitola Municipality",
                "code": "04"
            },
            {
                "name": "Bogdanci Municipality",
                "code": "05"
            },
            {
                "name": "Bogovinje Municipality",
                "code": "06"
            },
            {
                "name": "Bosilovo Municipality",
                "code": "07"
            },
            {
                "name": "Brvenica Municipality",
                "code": "08"
            },
            {
                "name": "Butel Municipality",
                "code": "09"
            },
            {
                "name": "Čair Municipality",
                "code": "79"
            },
            {
                "name": "Čaška Municipality",
                "code": "80"
            },
            {
                "name": "Centar Municipality",
                "code": "77"
            },
            {
                "name": "Centar Župa Municipality",
                "code": "78"
            },
            {
                "name": "Češinovo-Obleševo Municipality",
                "code": "81"
            },
            {
                "name": "Čučer-Sandevo Municipality",
                "code": "82"
            },
            {
                "name": "Debarca Municipality",
                "code": "22"
            },
            {
                "name": "Delčevo Municipality",
                "code": "23"
            },
            {
                "name": "Demir Hisar Municipality",
                "code": "25"
            },
            {
                "name": "Demir Kapija Municipality",
                "code": "24"
            },
            {
                "name": "Dojran Municipality",
                "code": "26"
            },
            {
                "name": "Dolneni Municipality",
                "code": "27"
            },
            {
                "name": "Drugovo Municipality",
                "code": "28"
            },
            {
                "name": "Gazi Baba Municipality",
                "code": "17"
            },
            {
                "name": "Gevgelija Municipality",
                "code": "18"
            },
            {
                "name": "Gjorče Petrov Municipality",
                "code": "29"
            },
            {
                "name": "Gostivar Municipality",
                "code": "19"
            },
            {
                "name": "Gradsko Municipality",
                "code": "20"
            },
            {
                "name": "Greater Skopje",
                "code": "85"
            },
            {
                "name": "Ilinden Municipality",
                "code": "34"
            },
            {
                "name": "Jegunovce Municipality",
                "code": "35"
            },
            {
                "name": "Karbinci",
                "code": "37"
            },
            {
                "name": "Karpoš Municipality",
                "code": "38"
            },
            {
                "name": "Kavadarci Municipality",
                "code": "36"
            },
            {
                "name": "Kičevo Municipality",
                "code": "40"
            },
            {
                "name": "Kisela Voda Municipality",
                "code": "39"
            },
            {
                "name": "Kočani Municipality",
                "code": "42"
            },
            {
                "name": "Konče Municipality",
                "code": "41"
            },
            {
                "name": "Kratovo Municipality",
                "code": "43"
            },
            {
                "name": "Kriva Palanka Municipality",
                "code": "44"
            },
            {
                "name": "Krivogaštani Municipality",
                "code": "45"
            },
            {
                "name": "Kruševo Municipality",
                "code": "46"
            },
            {
                "name": "Kumanovo Municipality",
                "code": "47"
            },
            {
                "name": "Lipkovo Municipality",
                "code": "48"
            },
            {
                "name": "Lozovo Municipality",
                "code": "49"
            },
            {
                "name": "Makedonska Kamenica Municipality",
                "code": "51"
            },
            {
                "name": "Makedonski Brod Municipality",
                "code": "52"
            },
            {
                "name": "Mavrovo and Rostuša Municipality",
                "code": "50"
            },
            {
                "name": "Mogila Municipality",
                "code": "53"
            },
            {
                "name": "Negotino Municipality",
                "code": "54"
            },
            {
                "name": "Novaci Municipality",
                "code": "55"
            },
            {
                "name": "Novo Selo Municipality",
                "code": "56"
            },
            {
                "name": "Ohrid Municipality",
                "code": "58"
            },
            {
                "name": "Oslomej Municipality",
                "code": "57"
            },
            {
                "name": "Pehčevo Municipality",
                "code": "60"
            },
            {
                "name": "Petrovec Municipality",
                "code": "59"
            },
            {
                "name": "Plasnica Municipality",
                "code": "61"
            },
            {
                "name": "Prilep Municipality",
                "code": "62"
            },
            {
                "name": "Probištip Municipality",
                "code": "63"
            },
            {
                "name": "Radoviš Municipality",
                "code": "64"
            },
            {
                "name": "Rankovce Municipality",
                "code": "65"
            },
            {
                "name": "Resen Municipality",
                "code": "66"
            },
            {
                "name": "Rosoman Municipality",
                "code": "67"
            },
            {
                "name": "Saraj Municipality",
                "code": "68"
            },
            {
                "name": "Sopište Municipality",
                "code": "70"
            },
            {
                "name": "Staro Nagoričane Municipality",
                "code": "71"
            },
            {
                "name": "Štip Municipality",
                "code": "83"
            },
            {
                "name": "Struga Municipality",
                "code": "72"
            },
            {
                "name": "Strumica Municipality",
                "code": "73"
            },
            {
                "name": "Studeničani Municipality",
                "code": "74"
            },
            {
                "name": "Šuto Orizari Municipality",
                "code": "84"
            },
            {
                "name": "Sveti Nikole Municipality",
                "code": "69"
            },
            {
                "name": "Tearce Municipality",
                "code": "75"
            },
            {
                "name": "Tetovo Municipality",
                "code": "76"
            },
            {
                "name": "Valandovo Municipality",
                "code": "10"
            },
            {
                "name": "Vasilevo Municipality",
                "code": "11"
            },
            {
                "name": "Veles Municipality",
                "code": "13"
            },
            {
                "name": "Vevčani Municipality",
                "code": "12"
            },
            {
                "name": "Vinica Municipality",
                "code": "14"
            },
            {
                "name": "Vraneštica Municipality",
                "code": "15"
            },
            {
                "name": "Vrapčište Municipality",
                "code": "16"
            },
            {
                "name": "Zajas Municipality",
                "code": "31"
            },
            {
                "name": "Zelenikovo Municipality",
                "code": "32"
            },
            {
                "name": "Želino Municipality",
                "code": "30"
            },
            {
                "name": "Zrnovci Municipality",
                "code": "33"
            }
        ],
        "MG": [
            {
                "name": "Antananarivo Province",
                "code": "T"
            },
            {
                "name": "Antsiranana Province",
                "code": "D"
            },
            {
                "name": "Fianarantsoa Province",
                "code": "F"
            },
            {
                "name": "Mahajanga Province",
                "code": "M"
            },
            {
                "name": "Toamasina Province",
                "code": "A"
            },
            {
                "name": "Toliara Province",
                "code": "U"
            }
        ],
        "MW": [
            {
                "name": "Balaka District",
                "code": "BA"
            },
            {
                "name": "Blantyre District",
                "code": "BL"
            },
            {
                "name": "Central Region",
                "code": "C"
            },
            {
                "name": "Chikwawa District",
                "code": "CK"
            },
            {
                "name": "Chiradzulu District",
                "code": "CR"
            },
            {
                "name": "Chitipa district",
                "code": "CT"
            },
            {
                "name": "Dedza District",
                "code": "DE"
            },
            {
                "name": "Dowa District",
                "code": "DO"
            },
            {
                "name": "Karonga District",
                "code": "KR"
            },
            {
                "name": "Kasungu District",
                "code": "KS"
            },
            {
                "name": "Likoma District",
                "code": "LK"
            },
            {
                "name": "Lilongwe District",
                "code": "LI"
            },
            {
                "name": "Machinga District",
                "code": "MH"
            },
            {
                "name": "Mangochi District",
                "code": "MG"
            },
            {
                "name": "Mchinji District",
                "code": "MC"
            },
            {
                "name": "Mulanje District",
                "code": "MU"
            },
            {
                "name": "Mwanza District",
                "code": "MW"
            },
            {
                "name": "Mzimba District",
                "code": "MZ"
            },
            {
                "name": "Nkhata Bay District",
                "code": "NB"
            },
            {
                "name": "Nkhotakota District",
                "code": "NK"
            },
            {
                "name": "Northern Region",
                "code": "N"
            },
            {
                "name": "Nsanje District",
                "code": "NS"
            },
            {
                "name": "Ntcheu District",
                "code": "NU"
            },
            {
                "name": "Ntchisi District",
                "code": "NI"
            },
            {
                "name": "Phalombe District",
                "code": "PH"
            },
            {
                "name": "Rumphi District",
                "code": "RU"
            },
            {
                "name": "Salima District",
                "code": "SA"
            },
            {
                "name": "Southern Region",
                "code": "S"
            },
            {
                "name": "Thyolo District",
                "code": "TH"
            },
            {
                "name": "Zomba District",
                "code": "ZO"
            }
        ],
        "MY": [
            {
                "name": "Johor",
                "code": "01"
            },
            {
                "name": "Kedah",
                "code": "02"
            },
            {
                "name": "Kelantan",
                "code": "03"
            },
            {
                "name": "Kuala Lumpur",
                "code": "14"
            },
            {
                "name": "Labuan",
                "code": "15"
            },
            {
                "name": "Melaka",
                "code": "04"
            },
            {
                "name": "Negeri Sembilan",
                "code": "05"
            },
            {
                "name": "Pahang",
                "code": "06"
            },
            {
                "name": "Penang",
                "code": "07"
            },
            {
                "name": "Perak",
                "code": "08"
            },
            {
                "name": "Perlis",
                "code": "09"
            },
            {
                "name": "Putrajaya",
                "code": "16"
            },
            {
                "name": "Sabah",
                "code": "12"
            },
            {
                "name": "Sarawak",
                "code": "13"
            },
            {
                "name": "Selangor",
                "code": "10"
            },
            {
                "name": "Terengganu",
                "code": "11"
            }
        ],
        "MV": [
            {
                "name": "Addu Atoll",
                "code": "01"
            },
            {
                "name": "Alif Alif Atoll",
                "code": "02"
            },
            {
                "name": "Alif Dhaal Atoll",
                "code": "00"
            },
            {
                "name": "Central Province",
                "code": "CE"
            },
            {
                "name": "Dhaalu Atoll",
                "code": "17"
            },
            {
                "name": "Faafu Atoll",
                "code": "14"
            },
            {
                "name": "Gaafu Alif Atoll",
                "code": "27"
            },
            {
                "name": "Gaafu Dhaalu Atoll",
                "code": "28"
            },
            {
                "name": "Gnaviyani Atoll",
                "code": "29"
            },
            {
                "name": "Haa Alif Atoll",
                "code": "07"
            },
            {
                "name": "Haa Dhaalu Atoll",
                "code": "23"
            },
            {
                "name": "Kaafu Atoll",
                "code": "26"
            },
            {
                "name": "Laamu Atoll",
                "code": "05"
            },
            {
                "name": "Lhaviyani Atoll",
                "code": "03"
            },
            {
                "name": "Malé",
                "code": "MLE"
            },
            {
                "name": "Meemu Atoll",
                "code": "12"
            },
            {
                "name": "Noonu Atoll",
                "code": "25"
            },
            {
                "name": "North Central Province",
                "code": "NC"
            },
            {
                "name": "North Province",
                "code": "NO"
            },
            {
                "name": "Raa Atoll",
                "code": "13"
            },
            {
                "name": "Shaviyani Atoll",
                "code": "24"
            },
            {
                "name": "South Central Province",
                "code": "SC"
            },
            {
                "name": "South Province",
                "code": "SU"
            },
            {
                "name": "Thaa Atoll",
                "code": "08"
            },
            {
                "name": "Upper South Province",
                "code": "US"
            },
            {
                "name": "Vaavu Atoll",
                "code": "04"
            }
        ],
        "ML": [
            {
                "name": "Bamako",
                "code": "BKO"
            },
            {
                "name": "Gao Region",
                "code": "7"
            },
            {
                "name": "Kayes Region",
                "code": "1"
            },
            {
                "name": "Kidal Region",
                "code": "8"
            },
            {
                "name": "Koulikoro Region",
                "code": "2"
            },
            {
                "name": "Ménaka Region",
                "code": "9"
            },
            {
                "name": "Mopti Region",
                "code": "5"
            },
            {
                "name": "Ségou Region",
                "code": "4"
            },
            {
                "name": "Sikasso Region",
                "code": "3"
            },
            {
                "name": "Taoudénit Region",
                "code": "10"
            },
            {
                "name": "Tombouctou Region",
                "code": "6"
            }
        ],
        "MT": [
            {
                "name": "Attard",
                "code": "01"
            },
            {
                "name": "Balzan",
                "code": "02"
            },
            {
                "name": "Birgu",
                "code": "03"
            },
            {
                "name": "Birkirkara",
                "code": "04"
            },
            {
                "name": "Birżebbuġa",
                "code": "05"
            },
            {
                "name": "Cospicua",
                "code": "06"
            },
            {
                "name": "Dingli",
                "code": "07"
            },
            {
                "name": "Fgura",
                "code": "08"
            },
            {
                "name": "Floriana",
                "code": "09"
            },
            {
                "name": "Fontana",
                "code": "10"
            },
            {
                "name": "Għajnsielem",
                "code": "13"
            },
            {
                "name": "Għarb",
                "code": "14"
            },
            {
                "name": "Għargħur",
                "code": "15"
            },
            {
                "name": "Għasri",
                "code": "16"
            },
            {
                "name": "Għaxaq",
                "code": "17"
            },
            {
                "name": "Gudja",
                "code": "11"
            },
            {
                "name": "Gżira",
                "code": "12"
            },
            {
                "name": "Ħamrun",
                "code": "18"
            },
            {
                "name": "Iklin",
                "code": "19"
            },
            {
                "name": "Kalkara",
                "code": "21"
            },
            {
                "name": "Kerċem",
                "code": "22"
            },
            {
                "name": "Kirkop",
                "code": "23"
            },
            {
                "name": "Lija",
                "code": "24"
            },
            {
                "name": "Luqa",
                "code": "25"
            },
            {
                "name": "Marsa",
                "code": "26"
            },
            {
                "name": "Marsaskala",
                "code": "27"
            },
            {
                "name": "Marsaxlokk",
                "code": "28"
            },
            {
                "name": "Mdina",
                "code": "29"
            },
            {
                "name": "Mellieħa",
                "code": "30"
            },
            {
                "name": "Mġarr",
                "code": "31"
            },
            {
                "name": "Mosta",
                "code": "32"
            },
            {
                "name": "Mqabba",
                "code": "33"
            },
            {
                "name": "Msida",
                "code": "34"
            },
            {
                "name": "Mtarfa",
                "code": "35"
            },
            {
                "name": "Munxar",
                "code": "36"
            },
            {
                "name": "Nadur",
                "code": "37"
            },
            {
                "name": "Naxxar",
                "code": "38"
            },
            {
                "name": "Paola",
                "code": "39"
            },
            {
                "name": "Pembroke",
                "code": "40"
            },
            {
                "name": "Pietà",
                "code": "41"
            },
            {
                "name": "Qala",
                "code": "42"
            },
            {
                "name": "Qormi",
                "code": "43"
            },
            {
                "name": "Qrendi",
                "code": "44"
            },
            {
                "name": "Rabat",
                "code": "46"
            },
            {
                "name": "Saint Lawrence",
                "code": "50"
            },
            {
                "name": "San Ġwann",
                "code": "49"
            },
            {
                "name": "Sannat",
                "code": "52"
            },
            {
                "name": "Santa Luċija",
                "code": "53"
            },
            {
                "name": "Santa Venera",
                "code": "54"
            },
            {
                "name": "Senglea",
                "code": "20"
            },
            {
                "name": "Siġġiewi",
                "code": "55"
            },
            {
                "name": "Sliema",
                "code": "56"
            },
            {
                "name": "St. Julian's",
                "code": "48"
            },
            {
                "name": "St. Paul's Bay",
                "code": "51"
            },
            {
                "name": "Swieqi",
                "code": "57"
            },
            {
                "name": "Ta' Xbiex",
                "code": "58"
            },
            {
                "name": "Tarxien",
                "code": "59"
            },
            {
                "name": "Valletta",
                "code": "60"
            },
            {
                "name": "Victoria",
                "code": "45"
            },
            {
                "name": "Xagħra",
                "code": "61"
            },
            {
                "name": "Xewkija",
                "code": "62"
            },
            {
                "name": "Xgħajra",
                "code": "63"
            },
            {
                "name": "Żabbar",
                "code": "64"
            },
            {
                "name": "Żebbuġ Gozo",
                "code": "65"
            },
            {
                "name": "Żebbuġ Malta",
                "code": "66"
            },
            {
                "name": "Żejtun",
                "code": "67"
            },
            {
                "name": "Żurrieq",
                "code": "68"
            }
        ],
        "MH": [
            {
                "name": "Ralik Chain",
                "code": "L"
            },
            {
                "name": "Ratak Chain",
                "code": "T"
            }
        ],
        "MQ": [
            {
                "name": "Martinique",
                "code": "Martinique"
            }
        ],
        "MR": [
            {
                "name": "Adrar Region",
                "code": "07"
            },
            {
                "name": "Assaba Region",
                "code": "03"
            },
            {
                "name": "Brakna Region",
                "code": "05"
            },
            {
                "name": "Dakhlet Nouadhibou",
                "code": "08"
            },
            {
                "name": "Gorgol Region",
                "code": "04"
            },
            {
                "name": "Guidimaka Region",
                "code": "10"
            },
            {
                "name": "Hodh Ech Chargui Region",
                "code": "01"
            },
            {
                "name": "Hodh El Gharbi Region",
                "code": "02"
            },
            {
                "name": "Inchiri Region",
                "code": "12"
            },
            {
                "name": "Nouakchott-Nord Region",
                "code": "14"
            },
            {
                "name": "Nouakchott-Ouest Region",
                "code": "13"
            },
            {
                "name": "Nouakchott-Sud Region",
                "code": "15"
            },
            {
                "name": "Tagant Region",
                "code": "09"
            },
            {
                "name": "Tiris Zemmour Region",
                "code": "11"
            },
            {
                "name": "Trarza Region",
                "code": "06"
            }
        ],
        "MU": [
            {
                "name": "Agaléga",
                "code": "AG"
            },
            {
                "name": "Beau Bassin-Rose Hill",
                "code": "BR"
            },
            {
                "name": "Cargados Carajos",
                "code": "CC"
            },
            {
                "name": "Curepipe",
                "code": "CU"
            },
            {
                "name": "Flacq District",
                "code": "FL"
            },
            {
                "name": "Grand Port District",
                "code": "GP"
            },
            {
                "name": "Moka District",
                "code": "MO"
            },
            {
                "name": "Pamplemousses District",
                "code": "PA"
            },
            {
                "name": "Plaines Wilhems District",
                "code": "PW"
            },
            {
                "name": "Port Louis",
                "code": "PU"
            },
            {
                "name": "Port Louis District",
                "code": "PL"
            },
            {
                "name": "Quatre Bornes",
                "code": "QB"
            },
            {
                "name": "Rivière du Rempart District",
                "code": "RR"
            },
            {
                "name": "Rivière Noire District",
                "code": "BL"
            },
            {
                "name": "Rodrigues",
                "code": "RO"
            },
            {
                "name": "Savanne District",
                "code": "SA"
            },
            {
                "name": "Vacoas-Phoenix",
                "code": "VP"
            }
        ],
        "YT": [
            {
                "name": "Mayotte",
                "code": "Mayotte"
            }
        ],
        "MX": [
            {
                "name": "Aguascalientes",
                "code": "AGU"
            },
            {
                "name": "Baja California",
                "code": "BCN"
            },
            {
                "name": "Baja California Sur",
                "code": "BCS"
            },
            {
                "name": "Campeche",
                "code": "CAM"
            },
            {
                "name": "Chiapas",
                "code": "CHP"
            },
            {
                "name": "Chihuahua",
                "code": "CHH"
            },
            {
                "name": "Coahuila",
                "code": "COA"
            },
            {
                "name": "Colima",
                "code": "COL"
            },
            {
                "name": "Durango",
                "code": "DUR"
            },
            {
                "name": "Guanajuato",
                "code": "GUA"
            },
            {
                "name": "Guerrero",
                "code": "GRO"
            },
            {
                "name": "Hidalgo",
                "code": "HID"
            },
            {
                "name": "Jalisco",
                "code": "JAL"
            },
            {
                "name": "México",
                "code": "MEX"
            },
            {
                "name": "Mexico City",
                "code": "CMX"
            },
            {
                "name": "Michoacán",
                "code": "MIC"
            },
            {
                "name": "Morelos",
                "code": "MOR"
            },
            {
                "name": "Nayarit",
                "code": "NAY"
            },
            {
                "name": "Nuevo León",
                "code": "NLE"
            },
            {
                "name": "Oaxaca",
                "code": "OAX"
            },
            {
                "name": "Puebla",
                "code": "PUE"
            },
            {
                "name": "Querétaro",
                "code": "QUE"
            },
            {
                "name": "Quintana Roo",
                "code": "ROO"
            },
            {
                "name": "San Luis Potosí",
                "code": "SLP"
            },
            {
                "name": "Sinaloa",
                "code": "SIN"
            },
            {
                "name": "Sonora",
                "code": "SON"
            },
            {
                "name": "Tabasco",
                "code": "TAB"
            },
            {
                "name": "Tamaulipas",
                "code": "TAM"
            },
            {
                "name": "Tlaxcala",
                "code": "TLA"
            },
            {
                "name": "Veracruz",
                "code": "VER"
            },
            {
                "name": "Yucatán",
                "code": "YUC"
            },
            {
                "name": "Zacatecas",
                "code": "ZAC"
            }
        ],
        "FM": [
            {
                "name": "Chuuk State",
                "code": "TRK"
            },
            {
                "name": "Kosrae State",
                "code": "KSA"
            },
            {
                "name": "Pohnpei State",
                "code": "PNI"
            },
            {
                "name": "Yap State",
                "code": "YAP"
            }
        ],
        "MD": [
            {
                "name": "Anenii Noi District",
                "code": "AN"
            },
            {
                "name": "Bălți Municipality",
                "code": "BA"
            },
            {
                "name": "Basarabeasca District",
                "code": "BS"
            },
            {
                "name": "Bender Municipality",
                "code": "BD"
            },
            {
                "name": "Briceni District",
                "code": "BR"
            },
            {
                "name": "Cahul District",
                "code": "CA"
            },
            {
                "name": "Călărași District",
                "code": "CL"
            },
            {
                "name": "Cantemir District",
                "code": "CT"
            },
            {
                "name": "Căușeni District",
                "code": "CS"
            },
            {
                "name": "Chișinău Municipality",
                "code": "CU"
            },
            {
                "name": "Cimișlia District",
                "code": "CM"
            },
            {
                "name": "Criuleni District",
                "code": "CR"
            },
            {
                "name": "Dondușeni District",
                "code": "DO"
            },
            {
                "name": "Drochia District",
                "code": "DR"
            },
            {
                "name": "Dubăsari District",
                "code": "DU"
            },
            {
                "name": "Edineț District",
                "code": "ED"
            },
            {
                "name": "Fălești District",
                "code": "FA"
            },
            {
                "name": "Florești District",
                "code": "FL"
            },
            {
                "name": "Gagauzia",
                "code": "GA"
            },
            {
                "name": "Glodeni District",
                "code": "GL"
            },
            {
                "name": "Hîncești District",
                "code": "HI"
            },
            {
                "name": "Ialoveni District",
                "code": "IA"
            },
            {
                "name": "Nisporeni District",
                "code": "NI"
            },
            {
                "name": "Ocnița District",
                "code": "OC"
            },
            {
                "name": "Orhei District",
                "code": "OR"
            },
            {
                "name": "Rezina District",
                "code": "RE"
            },
            {
                "name": "Rîșcani District",
                "code": "RI"
            },
            {
                "name": "Sîngerei District",
                "code": "SI"
            },
            {
                "name": "Șoldănești District",
                "code": "SD"
            },
            {
                "name": "Soroca District",
                "code": "SO"
            },
            {
                "name": "Ștefan Vodă District",
                "code": "SV"
            },
            {
                "name": "Strășeni District",
                "code": "ST"
            },
            {
                "name": "Taraclia District",
                "code": "TA"
            },
            {
                "name": "Telenești District",
                "code": "TE"
            },
            {
                "name": "Transnistria autonomous territorial unit",
                "code": "SN"
            },
            {
                "name": "Ungheni District",
                "code": "UN"
            }
        ],
        "MC": [
            {
                "name": "Monaco",
                "code": "Monaco"
            }
        ],
        "MN": [
            {
                "name": "Arkhangai Province",
                "code": "073"
            },
            {
                "name": "Bayan-Ölgii Province",
                "code": "071"
            },
            {
                "name": "Bayankhongor Province",
                "code": "069"
            },
            {
                "name": "Bulgan Province",
                "code": "067"
            },
            {
                "name": "Darkhan-Uul Province",
                "code": "037"
            },
            {
                "name": "Dornod Province",
                "code": "061"
            },
            {
                "name": "Dornogovi Province",
                "code": "063"
            },
            {
                "name": "Dundgovi Province",
                "code": "059"
            },
            {
                "name": "Govi-Altai Province",
                "code": "065"
            },
            {
                "name": "Govisümber Province",
                "code": "064"
            },
            {
                "name": "Khentii Province",
                "code": "039"
            },
            {
                "name": "Khovd Province",
                "code": "043"
            },
            {
                "name": "Khövsgöl Province",
                "code": "041"
            },
            {
                "name": "Ömnögovi Province",
                "code": "053"
            },
            {
                "name": "Orkhon Province",
                "code": "035"
            },
            {
                "name": "Övörkhangai Province",
                "code": "055"
            },
            {
                "name": "Selenge Province",
                "code": "049"
            },
            {
                "name": "Sükhbaatar Province",
                "code": "051"
            },
            {
                "name": "Töv Province",
                "code": "047"
            },
            {
                "name": "Uvs Province",
                "code": "046"
            },
            {
                "name": "Zavkhan Province",
                "code": "057"
            }
        ],
        "ME": [
            {
                "name": "Andrijevica Municipality",
                "code": "01"
            },
            {
                "name": "Bar Municipality",
                "code": "02"
            },
            {
                "name": "Berane Municipality",
                "code": "03"
            },
            {
                "name": "Bijelo Polje Municipality",
                "code": "04"
            },
            {
                "name": "Budva Municipality",
                "code": "05"
            },
            {
                "name": "Danilovgrad Municipality",
                "code": "07"
            },
            {
                "name": "Gusinje Municipality",
                "code": "22"
            },
            {
                "name": "Kolašin Municipality",
                "code": "09"
            },
            {
                "name": "Kotor Municipality",
                "code": "10"
            },
            {
                "name": "Mojkovac Municipality",
                "code": "11"
            },
            {
                "name": "Nikšić Municipality",
                "code": "12"
            },
            {
                "name": "Old Royal Capital Cetinje",
                "code": "06"
            },
            {
                "name": "Petnjica Municipality",
                "code": "23"
            },
            {
                "name": "Plav Municipality",
                "code": "13"
            },
            {
                "name": "Pljevlja Municipality",
                "code": "14"
            },
            {
                "name": "Plužine Municipality",
                "code": "15"
            },
            {
                "name": "Podgorica Municipality",
                "code": "16"
            },
            {
                "name": "Rožaje Municipality",
                "code": "17"
            },
            {
                "name": "Šavnik Municipality",
                "code": "18"
            },
            {
                "name": "Tivat Municipality",
                "code": "19"
            },
            {
                "name": "Ulcinj Municipality",
                "code": "20"
            },
            {
                "name": "Žabljak Municipality",
                "code": "21"
            }
        ],
        "MS": [
            {
                "name": "Montserrat",
                "code": "Montserrat"
            }
        ],
        "MA": [
            {
                "name": "Al Haouz Province",
                "code": "HAO"
            },
            {
                "name": "Al Hoceïma Province",
                "code": "HOC"
            },
            {
                "name": "Aousserd Province",
                "code": "AOU"
            },
            {
                "name": "Assa-Zag Province",
                "code": "ASZ"
            },
            {
                "name": "Azilal Province",
                "code": "AZI"
            },
            {
                "name": "Ben Slimane Province",
                "code": "BES"
            },
            {
                "name": "Béni Mellal-Khénifra",
                "code": "05"
            },
            {
                "name": "Béni-Mellal Province",
                "code": "BEM"
            },
            {
                "name": "Berkane Province",
                "code": "BER"
            },
            {
                "name": "Boujdour Province",
                "code": "BOD"
            },
            {
                "name": "Boulemane Province",
                "code": "BOM"
            },
            {
                "name": "Casablanca-Settat",
                "code": "06"
            },
            {
                "name": "Chefchaouen Province",
                "code": "CHE"
            },
            {
                "name": "Chichaoua Province",
                "code": "CHI"
            },
            {
                "name": "Dakhla-Oued Ed-Dahab",
                "code": "12"
            },
            {
                "name": "Drâa-Tafilalet",
                "code": "08"
            },
            {
                "name": "El Hajeb Province",
                "code": "HAJ"
            },
            {
                "name": "El Jadida Province",
                "code": "JDI"
            },
            {
                "name": "Errachidia Province",
                "code": "ERR"
            },
            {
                "name": "Es Semara Province",
                "code": "ESM"
            },
            {
                "name": "Essaouira Province",
                "code": "ESI"
            },
            {
                "name": "Fahs Anjra Province",
                "code": "FAH"
            },
            {
                "name": "Fès-Meknès",
                "code": "03"
            },
            {
                "name": "Figuig Province",
                "code": "FIG"
            },
            {
                "name": "Guelmim Province",
                "code": "GUE"
            },
            {
                "name": "Guelmim-Oued Noun",
                "code": "10"
            },
            {
                "name": "Ifrane Province",
                "code": "IFR"
            },
            {
                "name": "Inezgane-Aït Melloul Prefecture",
                "code": "INE"
            },
            {
                "name": "Jerada Province",
                "code": "JRA"
            },
            {
                "name": "Kelaat Sraghna Province",
                "code": "KES"
            },
            {
                "name": "Kénitra Province",
                "code": "KEN"
            },
            {
                "name": "Khémisset Province",
                "code": "KHE"
            },
            {
                "name": "Khénifra Province",
                "code": "KHN"
            },
            {
                "name": "Khouribga Province",
                "code": "KHO"
            },
            {
                "name": "Laâyoune Province",
                "code": "LAA"
            },
            {
                "name": "Laâyoune-Sakia El Hamra",
                "code": "11"
            },
            {
                "name": "Larache Province",
                "code": "LAR"
            },
            {
                "name": "Marrakesh-Safi",
                "code": "07"
            },
            {
                "name": "Mediouna Province",
                "code": "MED"
            },
            {
                "name": "Moulay Yacoub Province",
                "code": "MOU"
            },
            {
                "name": "Nador Province",
                "code": "NAD"
            },
            {
                "name": "Nouaceur Province",
                "code": "NOU"
            },
            {
                "name": "Oriental",
                "code": "02"
            },
            {
                "name": "Ouarzazate Province",
                "code": "OUA"
            },
            {
                "name": "Oued Ed-Dahab Province",
                "code": "OUD"
            },
            {
                "name": "Safi Province",
                "code": "SAF"
            },
            {
                "name": "Sefrou Province",
                "code": "SEF"
            },
            {
                "name": "Settat Province",
                "code": "SET"
            },
            {
                "name": "Shtouka Ait Baha Province",
                "code": "CHT"
            },
            {
                "name": "Sidi Kacem Province",
                "code": "SIK"
            },
            {
                "name": "Sidi Youssef Ben Ali",
                "code": "SYB"
            },
            {
                "name": "Souss-Massa",
                "code": "09"
            },
            {
                "name": "Tan-Tan Province",
                "code": "TNT"
            },
            {
                "name": "Tanger-Tétouan-Al Hoceïma",
                "code": "01"
            },
            {
                "name": "Taounate Province",
                "code": "TAO"
            },
            {
                "name": "Taourirt Province",
                "code": "TAI"
            },
            {
                "name": "Taroudant Province",
                "code": "TAR"
            },
            {
                "name": "Tata Province",
                "code": "TAT"
            },
            {
                "name": "Taza Province",
                "code": "TAZ"
            },
            {
                "name": "Tétouan Province",
                "code": "TET"
            },
            {
                "name": "Tiznit Province",
                "code": "TIZ"
            },
            {
                "name": "Zagora Province",
                "code": "ZAG"
            }
        ],
        "MZ": [
            {
                "name": "Cabo Delgado Province",
                "code": "P"
            },
            {
                "name": "Gaza Province",
                "code": "G"
            },
            {
                "name": "Inhambane Province",
                "code": "I"
            },
            {
                "name": "Manica Province",
                "code": "B"
            },
            {
                "name": "Maputo",
                "code": "MPM"
            },
            {
                "name": "Maputo Province",
                "code": "L"
            },
            {
                "name": "Nampula Province",
                "code": "N"
            },
            {
                "name": "Niassa Province",
                "code": "A"
            },
            {
                "name": "Sofala Province",
                "code": "S"
            },
            {
                "name": "Tete Province",
                "code": "T"
            },
            {
                "name": "Zambezia Province",
                "code": "Q"
            }
        ],
        "MM": [
            {
                "name": "Ayeyarwady Region",
                "code": "07"
            },
            {
                "name": "Bago",
                "code": "02"
            },
            {
                "name": "Chin State",
                "code": "14"
            },
            {
                "name": "Kachin State",
                "code": "11"
            },
            {
                "name": "Kayah State",
                "code": "12"
            },
            {
                "name": "Kayin State",
                "code": "13"
            },
            {
                "name": "Magway Region",
                "code": "03"
            },
            {
                "name": "Mandalay Region",
                "code": "04"
            },
            {
                "name": "Mon State",
                "code": "15"
            },
            {
                "name": "Naypyidaw Union Territory",
                "code": "18"
            },
            {
                "name": "Rakhine State",
                "code": "16"
            },
            {
                "name": "Sagaing Region",
                "code": "01"
            },
            {
                "name": "Shan State",
                "code": "17"
            },
            {
                "name": "Tanintharyi Region",
                "code": "05"
            },
            {
                "name": "Yangon Region",
                "code": "06"
            }
        ],
        "NA": [
            {
                "name": "Erongo Region",
                "code": "ER"
            },
            {
                "name": "Hardap Region",
                "code": "HA"
            },
            {
                "name": "Karas Region",
                "code": "KA"
            },
            {
                "name": "Kavango East Region",
                "code": "KE"
            },
            {
                "name": "Kavango West Region",
                "code": "KW"
            },
            {
                "name": "Khomas Region",
                "code": "KH"
            },
            {
                "name": "Kunene Region",
                "code": "KU"
            },
            {
                "name": "Ohangwena Region",
                "code": "OW"
            },
            {
                "name": "Omaheke Region",
                "code": "OH"
            },
            {
                "name": "Omusati Region",
                "code": "OS"
            },
            {
                "name": "Oshana Region",
                "code": "ON"
            },
            {
                "name": "Oshikoto Region",
                "code": "OT"
            },
            {
                "name": "Otjozondjupa Region",
                "code": "OD"
            },
            {
                "name": "Zambezi Region",
                "code": "CA"
            }
        ],
        "NR": [
            {
                "name": "Aiwo District",
                "code": "01"
            },
            {
                "name": "Anabar District",
                "code": "02"
            },
            {
                "name": "Anetan District",
                "code": "03"
            },
            {
                "name": "Anibare District",
                "code": "04"
            },
            {
                "name": "Baiti District",
                "code": "05"
            },
            {
                "name": "Boe District",
                "code": "06"
            },
            {
                "name": "Buada District",
                "code": "07"
            },
            {
                "name": "Denigomodu District",
                "code": "08"
            },
            {
                "name": "Ewa District",
                "code": "09"
            },
            {
                "name": "Ijuw District",
                "code": "10"
            },
            {
                "name": "Meneng District",
                "code": "11"
            },
            {
                "name": "Nibok District",
                "code": "12"
            },
            {
                "name": "Uaboe District",
                "code": "13"
            },
            {
                "name": "Yaren District",
                "code": "14"
            }
        ],
        "NP": [
            {
                "name": "Bagmati Zone",
                "code": "BA"
            },
            {
                "name": "Bheri Zone",
                "code": "BH"
            },
            {
                "name": "Central Region",
                "code": "1"
            },
            {
                "name": "Dhaulagiri Zone",
                "code": "DH"
            },
            {
                "name": "Eastern Development Region",
                "code": "4"
            },
            {
                "name": "Far-Western Development Region",
                "code": "5"
            },
            {
                "name": "Gandaki Zone",
                "code": "GA"
            },
            {
                "name": "Janakpur Zone",
                "code": "JA"
            },
            {
                "name": "Karnali Zone",
                "code": "KA"
            },
            {
                "name": "Kosi Zone",
                "code": "KO"
            },
            {
                "name": "Lumbini Zone",
                "code": "LU"
            },
            {
                "name": "Mahakali Zone",
                "code": "MA"
            },
            {
                "name": "Mechi Zone",
                "code": "ME"
            },
            {
                "name": "Mid-Western Region",
                "code": "2"
            },
            {
                "name": "Narayani Zone",
                "code": "NA"
            },
            {
                "name": "Rapti Zone",
                "code": "RA"
            },
            {
                "name": "Sagarmatha Zone",
                "code": "SA"
            },
            {
                "name": "Seti Zone",
                "code": "SE"
            },
            {
                "name": "Western Region",
                "code": "3"
            }
        ],
        "NL": [
            {
                "name": "Bonaire",
                "code": "BQ1"
            },
            {
                "name": "Drenthe",
                "code": "DR"
            },
            {
                "name": "Flevoland",
                "code": "FL"
            },
            {
                "name": "Friesland",
                "code": "FR"
            },
            {
                "name": "Gelderland",
                "code": "GE"
            },
            {
                "name": "Groningen",
                "code": "GR"
            },
            {
                "name": "Limburg",
                "code": "LI"
            },
            {
                "name": "North Brabant",
                "code": "NB"
            },
            {
                "name": "North Holland",
                "code": "NH"
            },
            {
                "name": "Overijssel",
                "code": "OV"
            },
            {
                "name": "Saba",
                "code": "BQ2"
            },
            {
                "name": "Sint Eustatius",
                "code": "BQ3"
            },
            {
                "name": "South Holland",
                "code": "ZH"
            },
            {
                "name": "Utrecht",
                "code": "UT"
            },
            {
                "name": "Zeeland",
                "code": "ZE"
            }
        ],
        "AN": [
            {
                "name": "Netherlands Antilles",
                "code": "Netherlands Antilles"
            }
        ],
        "NC": [
            {
                "name": "New Caledonia",
                "code": "New Caledonia"
            }
        ],
        "NZ": [
            {
                "name": "Auckland Region",
                "code": "AUK"
            },
            {
                "name": "Bay of Plenty Region",
                "code": "BOP"
            },
            {
                "name": "Canterbury Region",
                "code": "CAN"
            },
            {
                "name": "Chatham Islands",
                "code": "CIT"
            },
            {
                "name": "Gisborne District",
                "code": "GIS"
            },
            {
                "name": "Hawke's Bay Region",
                "code": "HKB"
            },
            {
                "name": "Manawatu-Wanganui Region",
                "code": "MWT"
            },
            {
                "name": "Marlborough Region",
                "code": "MBH"
            },
            {
                "name": "Nelson Region",
                "code": "NSN"
            },
            {
                "name": "Northland Region",
                "code": "NTL"
            },
            {
                "name": "Otago Region",
                "code": "OTA"
            },
            {
                "name": "Southland Region",
                "code": "STL"
            },
            {
                "name": "Taranaki Region",
                "code": "TKI"
            },
            {
                "name": "Tasman District",
                "code": "TAS"
            },
            {
                "name": "Waikato Region",
                "code": "WKO"
            },
            {
                "name": "Wellington Region",
                "code": "WGN"
            },
            {
                "name": "West Coast Region",
                "code": "WTC"
            }
        ],
        "NI": [
            {
                "name": "Boaco Department",
                "code": "BO"
            },
            {
                "name": "Carazo Department",
                "code": "CA"
            },
            {
                "name": "Chinandega Department",
                "code": "CI"
            },
            {
                "name": "Chontales Department",
                "code": "CO"
            },
            {
                "name": "Estelí Department",
                "code": "ES"
            },
            {
                "name": "Granada Department",
                "code": "GR"
            },
            {
                "name": "Jinotega Department",
                "code": "JI"
            },
            {
                "name": "León Department",
                "code": "LE"
            },
            {
                "name": "Madriz Department",
                "code": "MD"
            },
            {
                "name": "Managua Department",
                "code": "MN"
            },
            {
                "name": "Masaya Department",
                "code": "MS"
            },
            {
                "name": "Matagalpa Department",
                "code": "MT"
            },
            {
                "name": "North Caribbean Coast Autonomous Region",
                "code": "AN"
            },
            {
                "name": "Río San Juan Department",
                "code": "SJ"
            },
            {
                "name": "Rivas Department",
                "code": "RI"
            },
            {
                "name": "South Caribbean Coast Autonomous Region",
                "code": "AS"
            }
        ],
        "NE": [
            {
                "name": "Agadez Region",
                "code": "1"
            },
            {
                "name": "Diffa Region",
                "code": "2"
            },
            {
                "name": "Dosso Region",
                "code": "3"
            },
            {
                "name": "Maradi Region",
                "code": "4"
            },
            {
                "name": "Tahoua Region",
                "code": "5"
            },
            {
                "name": "Tillabéri Region",
                "code": "6"
            },
            {
                "name": "Zinder Region",
                "code": "7"
            }
        ],
        "NG": [
            {
                "name": "Abia State",
                "code": "AB"
            },
            {
                "name": "Adamawa State",
                "code": "AD"
            },
            {
                "name": "Akwa Ibom State",
                "code": "AK"
            },
            {
                "name": "Anambra State",
                "code": "AN"
            },
            {
                "name": "Bauchi State",
                "code": "BA"
            },
            {
                "name": "Bayelsa State",
                "code": "BY"
            },
            {
                "name": "Benue State",
                "code": "BE"
            },
            {
                "name": "Borno State",
                "code": "BO"
            },
            {
                "name": "Cross River State",
                "code": "CR"
            },
            {
                "name": "Delta State",
                "code": "DE"
            },
            {
                "name": "Ebonyi State",
                "code": "EB"
            },
            {
                "name": "Edo State",
                "code": "ED"
            },
            {
                "name": "Ekiti State",
                "code": "EK"
            },
            {
                "name": "Enugu State",
                "code": "EN"
            },
            {
                "name": "Federal Capital Territory",
                "code": "FC"
            },
            {
                "name": "Gombe State",
                "code": "GO"
            },
            {
                "name": "Imo State",
                "code": "IM"
            },
            {
                "name": "Jigawa State",
                "code": "JI"
            },
            {
                "name": "Kaduna State",
                "code": "KD"
            },
            {
                "name": "Kano State",
                "code": "KN"
            },
            {
                "name": "Katsina State",
                "code": "KT"
            },
            {
                "name": "Kebbi State",
                "code": "KE"
            },
            {
                "name": "Kogi State",
                "code": "KO"
            },
            {
                "name": "Kwara State",
                "code": "KW"
            },
            {
                "name": "Lagos",
                "code": "LA"
            },
            {
                "name": "Nasarawa State",
                "code": "NA"
            },
            {
                "name": "Niger State",
                "code": "NI"
            },
            {
                "name": "Ogun State",
                "code": "OG"
            },
            {
                "name": "Ondo State",
                "code": "ON"
            },
            {
                "name": "Osun State",
                "code": "OS"
            },
            {
                "name": "Oyo State",
                "code": "OY"
            },
            {
                "name": "Plateau State",
                "code": "PL"
            },
            {
                "name": "Sokoto State",
                "code": "SO"
            },
            {
                "name": "Taraba State",
                "code": "TA"
            },
            {
                "name": "Yobe State",
                "code": "YO"
            },
            {
                "name": "Zamfara State",
                "code": "ZA"
            }
        ],
        "NU": [
            {
                "name": "Niue",
                "code": "Niue"
            }
        ],
        "NF": [
            {
                "name": "Norfolk Island",
                "code": "Norfolk Island"
            }
        ],
        "MP": [
            {
                "name": "Northern Mariana Islands",
                "code": "Northern Mariana Islands"
            }
        ],
        "NO": [
            {
                "name": "Akershus",
                "code": "02"
            },
            {
                "name": "Buskerud",
                "code": "06"
            },
            {
                "name": "Finnmark",
                "code": "20"
            },
            {
                "name": "Hedmark",
                "code": "04"
            },
            {
                "name": "Hordaland",
                "code": "12"
            },
            {
                "name": "Jan Mayen",
                "code": "22"
            },
            {
                "name": "Møre og Romsdal",
                "code": "15"
            },
            {
                "name": "Nord-Trøndelag",
                "code": "17"
            },
            {
                "name": "Nordland",
                "code": "18"
            },
            {
                "name": "Oppland",
                "code": "05"
            },
            {
                "name": "Oslo",
                "code": "03"
            },
            {
                "name": "Østfold",
                "code": "01"
            },
            {
                "name": "Rogaland",
                "code": "11"
            },
            {
                "name": "Sogn og Fjordane",
                "code": "14"
            },
            {
                "name": "Sør-Trøndelag",
                "code": "16"
            },
            {
                "name": "Svalbard",
                "code": "21"
            },
            {
                "name": "Telemark",
                "code": "08"
            },
            {
                "name": "Troms",
                "code": "19"
            },
            {
                "name": "Trøndelag",
                "code": "50"
            },
            {
                "name": "Vest-Agder",
                "code": "10"
            },
            {
                "name": "Vestfold",
                "code": "07"
            }
        ],
        "OM": [
            {
                "name": "Ad Dakhiliyah Governorate",
                "code": "DA"
            },
            {
                "name": "Ad Dhahirah Governorate",
                "code": "ZA"
            },
            {
                "name": "Al Batinah North Governorate",
                "code": "BS"
            },
            {
                "name": "Al Batinah Region",
                "code": "BA"
            },
            {
                "name": "Al Batinah South Governorate",
                "code": "BJ"
            },
            {
                "name": "Al Buraimi Governorate",
                "code": "BU"
            },
            {
                "name": "Al Wusta Governorate",
                "code": "WU"
            },
            {
                "name": "Ash Sharqiyah North Governorate",
                "code": "SS"
            },
            {
                "name": "Ash Sharqiyah Region",
                "code": "SH"
            },
            {
                "name": "Ash Sharqiyah South Governorate",
                "code": "SJ"
            },
            {
                "name": "Dhofar Governorate",
                "code": "ZU"
            },
            {
                "name": "Musandam Governorate",
                "code": "MU"
            },
            {
                "name": "Muscat Governorate",
                "code": "MA"
            }
        ],
        "PK": [
            {
                "name": "Azad Kashmir",
                "code": "JK"
            },
            {
                "name": "Balochistan",
                "code": "BA"
            },
            {
                "name": "Federally Administered Tribal Areas",
                "code": "TA"
            },
            {
                "name": "Gilgit-Baltistan",
                "code": "GB"
            },
            {
                "name": "Islamabad Capital Territory",
                "code": "IS"
            },
            {
                "name": "Khyber Pakhtunkhwa",
                "code": "KP"
            },
            {
                "name": "Punjab",
                "code": "PB"
            },
            {
                "name": "Sindh",
                "code": "SD"
            }
        ],
        "PW": [
            {
                "name": "Aimeliik",
                "code": "002"
            },
            {
                "name": "Airai",
                "code": "004"
            },
            {
                "name": "Angaur",
                "code": "010"
            },
            {
                "name": "Hatohobei",
                "code": "050"
            },
            {
                "name": "Kayangel",
                "code": "100"
            },
            {
                "name": "Koror",
                "code": "150"
            },
            {
                "name": "Melekeok",
                "code": "212"
            },
            {
                "name": "Ngaraard",
                "code": "214"
            },
            {
                "name": "Ngarchelong",
                "code": "218"
            },
            {
                "name": "Ngardmau",
                "code": "222"
            },
            {
                "name": "Ngatpang",
                "code": "224"
            },
            {
                "name": "Ngchesar",
                "code": "226"
            },
            {
                "name": "Ngeremlengui",
                "code": "227"
            },
            {
                "name": "Ngiwal",
                "code": "228"
            },
            {
                "name": "Peleliu",
                "code": "350"
            },
            {
                "name": "Sonsorol",
                "code": "370"
            }
        ],
        "PS": [
            {
                "name": "Palestine",
                "code": "Palestine"
            }
        ],
        "PA": [
            {
                "name": "Bocas del Toro Province",
                "code": "1"
            },
            {
                "name": "Chiriquí Province",
                "code": "4"
            },
            {
                "name": "Coclé Province",
                "code": "2"
            },
            {
                "name": "Colón Province",
                "code": "3"
            },
            {
                "name": "Darién Province",
                "code": "5"
            },
            {
                "name": "Emberá-Wounaan Comarca",
                "code": "EM"
            },
            {
                "name": "Guna Yala",
                "code": "KY"
            },
            {
                "name": "Herrera Province",
                "code": "6"
            },
            {
                "name": "Los Santos Province",
                "code": "7"
            },
            {
                "name": "Ngöbe-Buglé Comarca",
                "code": "NB"
            },
            {
                "name": "Panamá Oeste Province",
                "code": "10"
            },
            {
                "name": "Panamá Province",
                "code": "8"
            },
            {
                "name": "Veraguas Province",
                "code": "9"
            }
        ],
        "PG": [
            {
                "name": "Bougainville",
                "code": "NSB"
            },
            {
                "name": "Central Province",
                "code": "CPM"
            },
            {
                "name": "Chimbu Province",
                "code": "CPK"
            },
            {
                "name": "East New Britain",
                "code": "EBR"
            },
            {
                "name": "Eastern Highlands Province",
                "code": "EHG"
            },
            {
                "name": "Enga Province",
                "code": "EPW"
            },
            {
                "name": "Gulf",
                "code": "GPK"
            },
            {
                "name": "Hela",
                "code": "HLA"
            },
            {
                "name": "Jiwaka Province",
                "code": "JWK"
            },
            {
                "name": "Madang Province",
                "code": "MPM"
            },
            {
                "name": "Manus Province",
                "code": "MRL"
            },
            {
                "name": "Milne Bay Province",
                "code": "MBA"
            },
            {
                "name": "Morobe Province",
                "code": "MPL"
            },
            {
                "name": "New Ireland Province",
                "code": "NIK"
            },
            {
                "name": "Oro Province",
                "code": "NPP"
            },
            {
                "name": "Port Moresby",
                "code": "NCD"
            },
            {
                "name": "Sandaun Province",
                "code": "SAN"
            },
            {
                "name": "Southern Highlands Province",
                "code": "SHM"
            },
            {
                "name": "West New Britain Province",
                "code": "WBK"
            },
            {
                "name": "Western Highlands Province",
                "code": "WHM"
            },
            {
                "name": "Western Province",
                "code": "WPD"
            }
        ],
        "PY": [
            {
                "name": "Alto Paraguay Department",
                "code": "16"
            },
            {
                "name": "Alto Paraná Department",
                "code": "10"
            },
            {
                "name": "Amambay Department",
                "code": "13"
            },
            {
                "name": "Boquerón Department",
                "code": "19"
            },
            {
                "name": "Caaguazú",
                "code": "5"
            },
            {
                "name": "Caazapá",
                "code": "6"
            },
            {
                "name": "Canindeyú",
                "code": "14"
            },
            {
                "name": "Central Department",
                "code": "11"
            },
            {
                "name": "Concepción Department",
                "code": "1"
            },
            {
                "name": "Cordillera Department",
                "code": "3"
            },
            {
                "name": "Guairá Department",
                "code": "4"
            },
            {
                "name": "Itapúa",
                "code": "7"
            },
            {
                "name": "Misiones Department",
                "code": "8"
            },
            {
                "name": "Ñeembucú Department",
                "code": "12"
            },
            {
                "name": "Paraguarí Department",
                "code": "9"
            },
            {
                "name": "Presidente Hayes Department",
                "code": "15"
            },
            {
                "name": "San Pedro Department",
                "code": "2"
            }
        ],
        "PE": [
            {
                "name": "Amazonas",
                "code": "AMA"
            },
            {
                "name": "Áncash",
                "code": "ANC"
            },
            {
                "name": "Apurímac",
                "code": "APU"
            },
            {
                "name": "Arequipa",
                "code": "ARE"
            },
            {
                "name": "Ayacucho",
                "code": "AYA"
            },
            {
                "name": "Cajamarca",
                "code": "CAJ"
            },
            {
                "name": "Callao",
                "code": "CAL"
            },
            {
                "name": "Cusco",
                "code": "CUS"
            },
            {
                "name": "Huancavelica",
                "code": "HUV"
            },
            {
                "name": "Huanuco",
                "code": "HUC"
            },
            {
                "name": "Ica",
                "code": "ICA"
            },
            {
                "name": "Junín",
                "code": "JUN"
            },
            {
                "name": "La Libertad",
                "code": "LAL"
            },
            {
                "name": "Lambayeque",
                "code": "LAM"
            },
            {
                "name": "Lima",
                "code": "LIM"
            },
            {
                "name": "Madre de Dios",
                "code": "MDD"
            },
            {
                "name": "Moquegua",
                "code": "MOQ"
            },
            {
                "name": "Pasco",
                "code": "PAS"
            },
            {
                "name": "Piura",
                "code": "PIU"
            },
            {
                "name": "Puno",
                "code": "PUN"
            },
            {
                "name": "San Martín",
                "code": "SAM"
            },
            {
                "name": "Tacna",
                "code": "TAC"
            },
            {
                "name": "Tumbes",
                "code": "TUM"
            },
            {
                "name": "Ucayali",
                "code": "UCA"
            }
        ],
        "PH": [
            {
                "name": "Abra",
                "code": "ABR"
            },
            {
                "name": "Agusan del Norte",
                "code": "AGN"
            },
            {
                "name": "Agusan del Sur",
                "code": "AGS"
            },
            {
                "name": "Aklan",
                "code": "AKL"
            },
            {
                "name": "Albay",
                "code": "ALB"
            },
            {
                "name": "Antique",
                "code": "ANT"
            },
            {
                "name": "Apayao",
                "code": "APA"
            },
            {
                "name": "Aurora",
                "code": "AUR"
            },
            {
                "name": "Autonomous Region in Muslim Mindanao",
                "code": "14"
            },
            {
                "name": "Basilan",
                "code": "BAS"
            },
            {
                "name": "Bataan",
                "code": "BAN"
            },
            {
                "name": "Batanes",
                "code": "BTN"
            },
            {
                "name": "Batangas",
                "code": "BTG"
            },
            {
                "name": "Benguet",
                "code": "BEN"
            },
            {
                "name": "Bicol Region",
                "code": "05"
            },
            {
                "name": "Biliran",
                "code": "BIL"
            },
            {
                "name": "Bohol",
                "code": "BOH"
            },
            {
                "name": "Bukidnon",
                "code": "BUK"
            },
            {
                "name": "Bulacan",
                "code": "BUL"
            },
            {
                "name": "Cagayan",
                "code": "CAG"
            },
            {
                "name": "Cagayan Valley",
                "code": "02"
            },
            {
                "name": "Calabarzon",
                "code": "40"
            },
            {
                "name": "Camarines Norte",
                "code": "CAN"
            },
            {
                "name": "Camarines Sur",
                "code": "CAS"
            },
            {
                "name": "Camiguin",
                "code": "CAM"
            },
            {
                "name": "Capiz",
                "code": "CAP"
            },
            {
                "name": "Caraga",
                "code": "13"
            },
            {
                "name": "Catanduanes",
                "code": "CAT"
            },
            {
                "name": "Cavite",
                "code": "CAV"
            },
            {
                "name": "Cebu",
                "code": "CEB"
            },
            {
                "name": "Central Luzon",
                "code": "03"
            },
            {
                "name": "Central Visayas",
                "code": "07"
            },
            {
                "name": "Compostela Valley",
                "code": "COM"
            },
            {
                "name": "Cordillera Administrative Region",
                "code": "15"
            },
            {
                "name": "Cotabato",
                "code": "NCO"
            },
            {
                "name": "Davao del Norte",
                "code": "DAV"
            },
            {
                "name": "Davao del Sur",
                "code": "DAS"
            },
            {
                "name": "Davao Occidental",
                "code": "DVO"
            },
            {
                "name": "Davao Oriental",
                "code": "DAO"
            },
            {
                "name": "Davao Region",
                "code": "11"
            },
            {
                "name": "Dinagat Islands",
                "code": "DIN"
            },
            {
                "name": "Eastern Samar",
                "code": "EAS"
            },
            {
                "name": "Eastern Visayas",
                "code": "08"
            },
            {
                "name": "Guimaras",
                "code": "GUI"
            },
            {
                "name": "Ifugao",
                "code": "IFU"
            },
            {
                "name": "Ilocos Norte",
                "code": "ILN"
            },
            {
                "name": "Ilocos Region",
                "code": "01"
            },
            {
                "name": "Ilocos Sur",
                "code": "ILS"
            },
            {
                "name": "Iloilo",
                "code": "ILI"
            },
            {
                "name": "Isabela",
                "code": "ISA"
            },
            {
                "name": "Kalinga",
                "code": "KAL"
            },
            {
                "name": "La Union",
                "code": "LUN"
            },
            {
                "name": "Laguna",
                "code": "LAG"
            },
            {
                "name": "Lanao del Norte",
                "code": "LAN"
            },
            {
                "name": "Lanao del Sur",
                "code": "LAS"
            },
            {
                "name": "Leyte",
                "code": "LEY"
            },
            {
                "name": "Maguindanao",
                "code": "MAG"
            },
            {
                "name": "Marinduque",
                "code": "MAD"
            },
            {
                "name": "Masbate",
                "code": "MAS"
            },
            {
                "name": "Metro Manila",
                "code": "NCR"
            },
            {
                "name": "Mimaropa",
                "code": "41"
            },
            {
                "name": "Misamis Occidental",
                "code": "MSC"
            },
            {
                "name": "Misamis Oriental",
                "code": "MSR"
            },
            {
                "name": "Mountain Province",
                "code": "MOU"
            },
            {
                "name": "Negros Occidental",
                "code": "NEC"
            },
            {
                "name": "Negros Oriental",
                "code": "NER"
            },
            {
                "name": "Northern Mindanao",
                "code": "10"
            },
            {
                "name": "Northern Samar",
                "code": "NSA"
            },
            {
                "name": "Nueva Ecija",
                "code": "NUE"
            },
            {
                "name": "Nueva Vizcaya",
                "code": "NUV"
            },
            {
                "name": "Occidental Mindoro",
                "code": "MDC"
            },
            {
                "name": "Oriental Mindoro",
                "code": "MDR"
            },
            {
                "name": "Palawan",
                "code": "PLW"
            },
            {
                "name": "Pampanga",
                "code": "PAM"
            },
            {
                "name": "Pangasinan",
                "code": "PAN"
            },
            {
                "name": "Quezon",
                "code": "QUE"
            },
            {
                "name": "Quirino",
                "code": "QUI"
            },
            {
                "name": "Rizal",
                "code": "RIZ"
            },
            {
                "name": "Romblon",
                "code": "ROM"
            },
            {
                "name": "Sarangani",
                "code": "SAR"
            },
            {
                "name": "Siquijor",
                "code": "SIG"
            },
            {
                "name": "Soccsksargen",
                "code": "12"
            },
            {
                "name": "Sorsogon",
                "code": "SOR"
            },
            {
                "name": "South Cotabato",
                "code": "SCO"
            },
            {
                "name": "Southern Leyte",
                "code": "SLE"
            },
            {
                "name": "Sultan Kudarat",
                "code": "SUK"
            },
            {
                "name": "Sulu",
                "code": "SLU"
            },
            {
                "name": "Surigao del Norte",
                "code": "SUN"
            },
            {
                "name": "Surigao del Sur",
                "code": "SUR"
            },
            {
                "name": "Tarlac",
                "code": "TAR"
            },
            {
                "name": "Tawi-Tawi",
                "code": "TAW"
            },
            {
                "name": "Western Visayas",
                "code": "06"
            },
            {
                "name": "Zambales",
                "code": "ZMB"
            },
            {
                "name": "Zamboanga del Norte",
                "code": "ZAN"
            },
            {
                "name": "Zamboanga del Sur",
                "code": "ZAS"
            },
            {
                "name": "Zamboanga Peninsula",
                "code": "09"
            },
            {
                "name": "Zamboanga Sibugay",
                "code": "ZSI"
            }
        ],
        "PN": [
            {
                "name": "Pitcairn Islands",
                "code": "Pitcairn Islands"
            }
        ],
        "PL": [
            {
                "name": "Greater Poland Voivodeship",
                "code": "WP"
            },
            {
                "name": "Kielce",
                "code": "KI"
            },
            {
                "name": "Kuyavian-Pomeranian Voivodeship",
                "code": "KP"
            },
            {
                "name": "Lesser Poland Voivodeship",
                "code": "MA"
            },
            {
                "name": "Lower Silesian Voivodeship",
                "code": "DS"
            },
            {
                "name": "Lublin Voivodeship",
                "code": "LU"
            },
            {
                "name": "Lubusz Voivodeship",
                "code": "LB"
            },
            {
                "name": "Łódź Voivodeship",
                "code": "LD"
            },
            {
                "name": "Masovian Voivodeship",
                "code": "MZ"
            },
            {
                "name": "Opole Voivodeship",
                "code": "OP"
            },
            {
                "name": "Podkarpackie Voivodeship",
                "code": "PK"
            },
            {
                "name": "Podlaskie Voivodeship",
                "code": "PD"
            },
            {
                "name": "Pomeranian Voivodeship",
                "code": "PM"
            },
            {
                "name": "Silesian Voivodeship",
                "code": "SL"
            },
            {
                "name": "Świętokrzyskie Voivodeship",
                "code": "SK"
            },
            {
                "name": "Warmian-Masurian Voivodeship",
                "code": "WN"
            },
            {
                "name": "West Pomeranian Voivodeship",
                "code": "ZP"
            }
        ],
        "PT": [
            {
                "name": "Aveiro District",
                "code": "01"
            },
            {
                "name": "Azores",
                "code": "20"
            },
            {
                "name": "Beja District",
                "code": "02"
            },
            {
                "name": "Braga District",
                "code": "03"
            },
            {
                "name": "Bragança District",
                "code": "04"
            },
            {
                "name": "Castelo Branco District",
                "code": "05"
            },
            {
                "name": "Coimbra District",
                "code": "06"
            },
            {
                "name": "Évora District",
                "code": "07"
            },
            {
                "name": "Faro District",
                "code": "08"
            },
            {
                "name": "Guarda District",
                "code": "09"
            },
            {
                "name": "Leiria District",
                "code": "10"
            },
            {
                "name": "Lisbon District",
                "code": "11"
            },
            {
                "name": "Madeira",
                "code": "30"
            },
            {
                "name": "Portalegre District",
                "code": "12"
            },
            {
                "name": "Porto District",
                "code": "13"
            },
            {
                "name": "Santarém District",
                "code": "14"
            },
            {
                "name": "Setúbal District",
                "code": "15"
            },
            {
                "name": "Viana do Castelo District",
                "code": "16"
            },
            {
                "name": "Vila Real District",
                "code": "17"
            },
            {
                "name": "Viseu District",
                "code": "18"
            }
        ],
        "PR": [
            {
                "name": "Puerto Rico",
                "code": "Puerto Rico"
            }
        ],
        "QA": [
            {
                "name": "Al Daayen",
                "code": "ZA"
            },
            {
                "name": "Al Khor",
                "code": "KH"
            },
            {
                "name": "Al Rayyan Municipality",
                "code": "RA"
            },
            {
                "name": "Al Wakrah",
                "code": "WA"
            },
            {
                "name": "Al-Shahaniya",
                "code": "SH"
            },
            {
                "name": "Doha",
                "code": "DA"
            },
            {
                "name": "Madinat ash Shamal",
                "code": "MS"
            },
            {
                "name": "Umm Salal Municipality",
                "code": "US"
            }
        ],
        "RE": [
            {
                "name": "Reunion",
                "code": "Reunion"
            }
        ],
        "RO": [
            {
                "name": "Alba",
                "code": "AB"
            },
            {
                "name": "Arad County",
                "code": "AR"
            },
            {
                "name": "Arges",
                "code": "AG"
            },
            {
                "name": "Bacău County",
                "code": "BC"
            },
            {
                "name": "Bihor County",
                "code": "BH"
            },
            {
                "name": "Bistrița-Năsăud County",
                "code": "BN"
            },
            {
                "name": "Botoșani County",
                "code": "BT"
            },
            {
                "name": "Braila",
                "code": "BR"
            },
            {
                "name": "Brașov County",
                "code": "BV"
            },
            {
                "name": "Bucharest",
                "code": "B"
            },
            {
                "name": "Buzău County",
                "code": "BZ"
            },
            {
                "name": "Călărași County",
                "code": "CL"
            },
            {
                "name": "Caraș-Severin County",
                "code": "CS"
            },
            {
                "name": "Cluj County",
                "code": "CJ"
            },
            {
                "name": "Constanța County",
                "code": "CT"
            },
            {
                "name": "Covasna County",
                "code": "CV"
            },
            {
                "name": "Dâmbovița County",
                "code": "DB"
            },
            {
                "name": "Dolj County",
                "code": "DJ"
            },
            {
                "name": "Galați County",
                "code": "GL"
            },
            {
                "name": "Giurgiu County",
                "code": "GR"
            },
            {
                "name": "Gorj County",
                "code": "GJ"
            },
            {
                "name": "Harghita County",
                "code": "HR"
            },
            {
                "name": "Hunedoara County",
                "code": "HD"
            },
            {
                "name": "Ialomița County",
                "code": "IL"
            },
            {
                "name": "Iași County",
                "code": "IS"
            },
            {
                "name": "Ilfov County",
                "code": "IF"
            },
            {
                "name": "Mehedinți County",
                "code": "MH"
            },
            {
                "name": "Mureș County",
                "code": "MM"
            },
            {
                "name": "Neamț County",
                "code": "NT"
            },
            {
                "name": "Olt County",
                "code": "OT"
            },
            {
                "name": "Prahova County",
                "code": "PH"
            },
            {
                "name": "Sălaj County",
                "code": "SJ"
            },
            {
                "name": "Satu Mare County",
                "code": "SM"
            },
            {
                "name": "Sibiu County",
                "code": "SB"
            },
            {
                "name": "Suceava County",
                "code": "SV"
            },
            {
                "name": "Teleorman County",
                "code": "TR"
            },
            {
                "name": "Timiș County",
                "code": "TM"
            },
            {
                "name": "Tulcea County",
                "code": "TL"
            },
            {
                "name": "Vâlcea County",
                "code": "VL"
            },
            {
                "name": "Vaslui County",
                "code": "VS"
            },
            {
                "name": "Vrancea County",
                "code": "VN"
            }
        ],
        "RU": [
            {
                "name": "Altai Krai",
                "code": "ALT"
            },
            {
                "name": "Altai Republic",
                "code": "AL"
            },
            {
                "name": "Amur Oblast",
                "code": "AMU"
            },
            {
                "name": "Arkhangelsk",
                "code": "ARK"
            },
            {
                "name": "Astrakhan Oblast",
                "code": "AST"
            },
            {
                "name": "Belgorod Oblast",
                "code": "BEL"
            },
            {
                "name": "Bryansk Oblast",
                "code": "BRY"
            },
            {
                "name": "Chechen Republic",
                "code": "CE"
            },
            {
                "name": "Chelyabinsk Oblast",
                "code": "CHE"
            },
            {
                "name": "Chukotka Autonomous Okrug",
                "code": "CHU"
            },
            {
                "name": "Chuvash Republic",
                "code": "CU"
            },
            {
                "name": "Irkutsk",
                "code": "IRK"
            },
            {
                "name": "Ivanovo Oblast",
                "code": "IVA"
            },
            {
                "name": "Jewish Autonomous Oblast",
                "code": "YEV"
            },
            {
                "name": "Kabardino-Balkar Republic",
                "code": "KB"
            },
            {
                "name": "Kaliningrad",
                "code": "KGD"
            },
            {
                "name": "Kaluga Oblast",
                "code": "KLU"
            },
            {
                "name": "Kamchatka Krai",
                "code": "KAM"
            },
            {
                "name": "Karachay-Cherkess Republic",
                "code": "KC"
            },
            {
                "name": "Kemerovo Oblast",
                "code": "KEM"
            },
            {
                "name": "Khabarovsk Krai",
                "code": "KHA"
            },
            {
                "name": "Khanty-Mansi Autonomous Okrug",
                "code": "KHM"
            },
            {
                "name": "Kirov Oblast",
                "code": "KIR"
            },
            {
                "name": "Komi Republic",
                "code": "KO"
            },
            {
                "name": "Kostroma Oblast",
                "code": "KOS"
            },
            {
                "name": "Krasnodar Krai",
                "code": "KDA"
            },
            {
                "name": "Krasnoyarsk Krai",
                "code": "KYA"
            },
            {
                "name": "Kurgan Oblast",
                "code": "KGN"
            },
            {
                "name": "Kursk Oblast",
                "code": "KRS"
            },
            {
                "name": "Leningrad Oblast",
                "code": "LEN"
            },
            {
                "name": "Lipetsk Oblast",
                "code": "LIP"
            },
            {
                "name": "Magadan Oblast",
                "code": "MAG"
            },
            {
                "name": "Mari El Republic",
                "code": "ME"
            },
            {
                "name": "Moscow",
                "code": "MOW"
            },
            {
                "name": "Moscow Oblast",
                "code": "MOS"
            },
            {
                "name": "Murmansk Oblast",
                "code": "MUR"
            },
            {
                "name": "Nenets Autonomous Okrug",
                "code": "NEN"
            },
            {
                "name": "Nizhny Novgorod Oblast",
                "code": "NIZ"
            },
            {
                "name": "Novgorod Oblast",
                "code": "NGR"
            },
            {
                "name": "Novosibirsk",
                "code": "NVS"
            },
            {
                "name": "Omsk Oblast",
                "code": "OMS"
            },
            {
                "name": "Orenburg Oblast",
                "code": "ORE"
            },
            {
                "name": "Oryol Oblast",
                "code": "ORL"
            },
            {
                "name": "Penza Oblast",
                "code": "PNZ"
            },
            {
                "name": "Perm Krai",
                "code": "PER"
            },
            {
                "name": "Primorsky Krai",
                "code": "PRI"
            },
            {
                "name": "Pskov Oblast",
                "code": "PSK"
            },
            {
                "name": "Republic of Adygea",
                "code": "AD"
            },
            {
                "name": "Republic of Bashkortostan",
                "code": "BA"
            },
            {
                "name": "Republic of Buryatia",
                "code": "BU"
            },
            {
                "name": "Republic of Dagestan",
                "code": "DA"
            },
            {
                "name": "Republic of Ingushetia",
                "code": "IN"
            },
            {
                "name": "Republic of Kalmykia",
                "code": "KL"
            },
            {
                "name": "Republic of Karelia",
                "code": "KR"
            },
            {
                "name": "Republic of Khakassia",
                "code": "KK"
            },
            {
                "name": "Republic of Mordovia",
                "code": "MO"
            },
            {
                "name": "Republic of North Ossetia-Alania",
                "code": "SE"
            },
            {
                "name": "Republic of Tatarstan",
                "code": "TA"
            },
            {
                "name": "Rostov Oblast",
                "code": "ROS"
            },
            {
                "name": "Ryazan Oblast",
                "code": "RYA"
            },
            {
                "name": "Saint Petersburg",
                "code": "SPE"
            },
            {
                "name": "Sakha Republic",
                "code": "SA"
            },
            {
                "name": "Sakhalin",
                "code": "SAK"
            },
            {
                "name": "Samara Oblast",
                "code": "SAM"
            },
            {
                "name": "Saratov Oblast",
                "code": "SAR"
            },
            {
                "name": "Sevastopol",
                "code": "UA-40"
            },
            {
                "name": "Smolensk Oblast",
                "code": "SMO"
            },
            {
                "name": "Stavropol Krai",
                "code": "STA"
            },
            {
                "name": "Sverdlovsk",
                "code": "SVE"
            },
            {
                "name": "Tambov Oblast",
                "code": "TAM"
            },
            {
                "name": "Tomsk Oblast",
                "code": "TOM"
            },
            {
                "name": "Tula Oblast",
                "code": "TUL"
            },
            {
                "name": "Tuva Republic",
                "code": "TY"
            },
            {
                "name": "Tver Oblast",
                "code": "TVE"
            },
            {
                "name": "Tyumen Oblast",
                "code": "TYU"
            },
            {
                "name": "Udmurt Republic",
                "code": "UD"
            },
            {
                "name": "Ulyanovsk Oblast",
                "code": "ULY"
            },
            {
                "name": "Vladimir Oblast",
                "code": "VLA"
            },
            {
                "name": "Vologda Oblast",
                "code": "VLG"
            },
            {
                "name": "Voronezh Oblast",
                "code": "VOR"
            },
            {
                "name": "Yamalo-Nenets Autonomous Okrug",
                "code": "YAN"
            },
            {
                "name": "Yaroslavl Oblast",
                "code": "YAR"
            },
            {
                "name": "Zabaykalsky Krai",
                "code": "ZAB"
            }
        ],
        "RW": [
            {
                "name": "Eastern Province",
                "code": "02"
            },
            {
                "name": "Kigali district",
                "code": "01"
            },
            {
                "name": "Northern Province",
                "code": "03"
            },
            {
                "name": "Southern Province",
                "code": "05"
            },
            {
                "name": "Western Province",
                "code": "04"
            }
        ],
        "BL": [
            {
                "name": "Saint Barthelemy",
                "code": "Saint Barthelemy"
            }
        ],
        "SH": [
            {
                "name": "Saint Helena",
                "code": "Saint Helena"
            }
        ],
        "KN": [
            {
                "name": "Christ Church Nichola Town Parish",
                "code": "01"
            },
            {
                "name": "Nevis",
                "code": "N"
            },
            {
                "name": "Saint Anne Sandy Point Parish",
                "code": "02"
            },
            {
                "name": "Saint George Gingerland Parish",
                "code": "04"
            },
            {
                "name": "Saint James Windward Parish",
                "code": "05"
            },
            {
                "name": "Saint John Capisterre Parish",
                "code": "06"
            },
            {
                "name": "Saint John Figtree Parish",
                "code": "07"
            },
            {
                "name": "Saint Kitts",
                "code": "K"
            },
            {
                "name": "Saint Mary Cayon Parish",
                "code": "08"
            },
            {
                "name": "Saint Paul Capisterre Parish",
                "code": "09"
            },
            {
                "name": "Saint Paul Charlestown Parish",
                "code": "10"
            },
            {
                "name": "Saint Peter Basseterre Parish",
                "code": "11"
            },
            {
                "name": "Saint Thomas Lowland Parish",
                "code": "12"
            },
            {
                "name": "Saint Thomas Middle Island Parish",
                "code": "13"
            },
            {
                "name": "Trinity Palmetto Point Parish",
                "code": "15"
            }
        ],
        "LC": [
            {
                "name": "Anse la Raye Quarter",
                "code": "01"
            },
            {
                "name": "Canaries",
                "code": "12"
            },
            {
                "name": "Castries Quarter",
                "code": "02"
            },
            {
                "name": "Choiseul Quarter",
                "code": "03"
            },
            {
                "name": "Dauphin Quarter",
                "code": "04"
            },
            {
                "name": "Dennery Quarter",
                "code": "05"
            },
            {
                "name": "Gros Islet Quarter",
                "code": "06"
            },
            {
                "name": "Laborie Quarter",
                "code": "07"
            },
            {
                "name": "Micoud Quarter",
                "code": "08"
            },
            {
                "name": "Praslin Quarter",
                "code": "09"
            },
            {
                "name": "Soufrière Quarter",
                "code": "10"
            },
            {
                "name": "Vieux Fort Quarter",
                "code": "11"
            }
        ],
        "MF": [
            {
                "name": "Saint Martin",
                "code": "Saint Martin"
            }
        ],
        "PM": [
            {
                "name": "Saint Pierre and Miquelon",
                "code": "Saint Pierre and Miquelon"
            }
        ],
        "VC": [
            {
                "name": "Charlotte Parish",
                "code": "01"
            },
            {
                "name": "Grenadines Parish",
                "code": "06"
            },
            {
                "name": "Saint Andrew Parish",
                "code": "02"
            },
            {
                "name": "Saint David Parish",
                "code": "03"
            },
            {
                "name": "Saint George Parish",
                "code": "04"
            },
            {
                "name": "Saint Patrick Parish",
                "code": "05"
            }
        ],
        "WS": [
            {
                "name": "A'ana",
                "code": "AA"
            },
            {
                "name": "Aiga-i-le-Tai",
                "code": "AL"
            },
            {
                "name": "Atua",
                "code": "AT"
            },
            {
                "name": "Fa'asaleleaga",
                "code": "FA"
            },
            {
                "name": "Gaga'emauga",
                "code": "GE"
            },
            {
                "name": "Gaga'ifomauga",
                "code": "GI"
            },
            {
                "name": "Palauli",
                "code": "PA"
            },
            {
                "name": "Satupa'itea",
                "code": "SA"
            },
            {
                "name": "Tuamasaga",
                "code": "TU"
            },
            {
                "name": "Va'a-o-Fonoti",
                "code": "VF"
            },
            {
                "name": "Vaisigano",
                "code": "VS"
            }
        ],
        "SM": [
            {
                "name": "Acquaviva",
                "code": "01"
            },
            {
                "name": "Borgo Maggiore",
                "code": "06"
            },
            {
                "name": "Chiesanuova",
                "code": "02"
            },
            {
                "name": "Domagnano",
                "code": "03"
            },
            {
                "name": "Faetano",
                "code": "04"
            },
            {
                "name": "Fiorentino",
                "code": "05"
            },
            {
                "name": "Montegiardino",
                "code": "08"
            },
            {
                "name": "San Marino",
                "code": "07"
            },
            {
                "name": "Serravalle",
                "code": "09"
            }
        ],
        "ST": [
            {
                "name": "Príncipe Province",
                "code": "P"
            },
            {
                "name": "São Tomé Province",
                "code": "S"
            }
        ],
        "SA": [
            {
                "name": "'Asir Region",
                "code": "14"
            },
            {
                "name": "Al Bahah Region",
                "code": "11"
            },
            {
                "name": "Al Jawf Region",
                "code": "12"
            },
            {
                "name": "Al Madinah Region",
                "code": "03"
            },
            {
                "name": "Al-Qassim Region",
                "code": "05"
            },
            {
                "name": "Eastern Province",
                "code": "04"
            },
            {
                "name": "Ha'il Region",
                "code": "06"
            },
            {
                "name": "Jizan Region",
                "code": "09"
            },
            {
                "name": "Makkah Region",
                "code": "02"
            },
            {
                "name": "Najran Region",
                "code": "10"
            },
            {
                "name": "Northern Borders Region",
                "code": "08"
            },
            {
                "name": "Riyadh Region",
                "code": "01"
            },
            {
                "name": "Tabuk Region",
                "code": "07"
            }
        ],
        "SN": [
            {
                "name": "Dakar",
                "code": "DK"
            },
            {
                "name": "Diourbel Region",
                "code": "DB"
            },
            {
                "name": "Fatick",
                "code": "FK"
            },
            {
                "name": "Kaffrine",
                "code": "KA"
            },
            {
                "name": "Kaolack",
                "code": "KL"
            },
            {
                "name": "Kédougou",
                "code": "KE"
            },
            {
                "name": "Kolda",
                "code": "KD"
            },
            {
                "name": "Louga",
                "code": "LG"
            },
            {
                "name": "Matam",
                "code": "MT"
            },
            {
                "name": "Saint-Louis",
                "code": "SL"
            },
            {
                "name": "Sédhiou",
                "code": "SE"
            },
            {
                "name": "Tambacounda Region",
                "code": "TC"
            },
            {
                "name": "Thiès Region",
                "code": "TH"
            },
            {
                "name": "Ziguinchor",
                "code": "ZG"
            }
        ],
        "RS": [
            {
                "name": "Belgrade",
                "code": "00"
            },
            {
                "name": "Bor District",
                "code": "14"
            },
            {
                "name": "Braničevo District",
                "code": "11"
            },
            {
                "name": "Central Banat District",
                "code": "02"
            },
            {
                "name": "Jablanica District",
                "code": "23"
            },
            {
                "name": "Kolubara District",
                "code": "09"
            },
            {
                "name": "Mačva District",
                "code": "08"
            },
            {
                "name": "Moravica District",
                "code": "17"
            },
            {
                "name": "Nišava District",
                "code": "20"
            },
            {
                "name": "North Bačka District",
                "code": "01"
            },
            {
                "name": "North Banat District",
                "code": "03"
            },
            {
                "name": "Pčinja District",
                "code": "24"
            },
            {
                "name": "Pirot District",
                "code": "22"
            },
            {
                "name": "Podunavlje District",
                "code": "10"
            },
            {
                "name": "Pomoravlje District",
                "code": "13"
            },
            {
                "name": "Rasina District",
                "code": "19"
            },
            {
                "name": "Raška District",
                "code": "18"
            },
            {
                "name": "South Bačka District",
                "code": "06"
            },
            {
                "name": "South Banat District",
                "code": "04"
            },
            {
                "name": "Srem District",
                "code": "07"
            },
            {
                "name": "Šumadija District",
                "code": "12"
            },
            {
                "name": "Toplica District",
                "code": "21"
            },
            {
                "name": "Vojvodina",
                "code": "VO"
            },
            {
                "name": "West Bačka District",
                "code": "05"
            },
            {
                "name": "Zaječar District",
                "code": "15"
            },
            {
                "name": "Zlatibor District",
                "code": "16"
            }
        ],
        "CS": [
            {
                "name": "Serbia and Montenegro",
                "code": "Serbia and Montenegro"
            }
        ],
        "SC": [
            {
                "name": "Anse Boileau",
                "code": "02"
            },
            {
                "name": "Anse Royale",
                "code": "05"
            },
            {
                "name": "Anse-aux-Pins",
                "code": "01"
            },
            {
                "name": "Au Cap",
                "code": "04"
            },
            {
                "name": "Baie Lazare",
                "code": "06"
            },
            {
                "name": "Baie Sainte Anne",
                "code": "07"
            },
            {
                "name": "Beau Vallon",
                "code": "08"
            },
            {
                "name": "Bel Air",
                "code": "09"
            },
            {
                "name": "Bel Ombre",
                "code": "10"
            },
            {
                "name": "Cascade",
                "code": "11"
            },
            {
                "name": "Glacis",
                "code": "12"
            },
            {
                "name": "Grand'Anse Mahé",
                "code": "13"
            },
            {
                "name": "Grand'Anse Praslin",
                "code": "14"
            },
            {
                "name": "La Digue",
                "code": "15"
            },
            {
                "name": "La Rivière Anglaise",
                "code": "16"
            },
            {
                "name": "Les Mamelles",
                "code": "24"
            },
            {
                "name": "Mont Buxton",
                "code": "17"
            },
            {
                "name": "Mont Fleuri",
                "code": "18"
            },
            {
                "name": "Plaisance",
                "code": "19"
            },
            {
                "name": "Pointe La Rue",
                "code": "20"
            },
            {
                "name": "Port Glaud",
                "code": "21"
            },
            {
                "name": "Roche Caiman",
                "code": "25"
            },
            {
                "name": "Saint Louis",
                "code": "22"
            },
            {
                "name": "Takamaka",
                "code": "23"
            }
        ],
        "SL": [
            {
                "name": "Eastern Province",
                "code": "E"
            },
            {
                "name": "Northern Province",
                "code": "N"
            },
            {
                "name": "Southern Province",
                "code": "S"
            },
            {
                "name": "Western Area",
                "code": "W"
            }
        ],
        "SG": [
            {
                "name": "Central Singapore Community Development Council",
                "code": "01"
            },
            {
                "name": "North East Community Development Council",
                "code": "02"
            },
            {
                "name": "North West Community Development Council",
                "code": "03"
            },
            {
                "name": "South East Community Development Council",
                "code": "04"
            },
            {
                "name": "South West Community Development Council",
                "code": "05"
            }
        ],
        "SX": [
            {
                "name": "Sint Maarten",
                "code": "Sint Maarten"
            }
        ],
        "SK": [
            {
                "name": "Banská Bystrica Region",
                "code": "BC"
            },
            {
                "name": "Bratislava Region",
                "code": "BL"
            },
            {
                "name": "Košice Region",
                "code": "KI"
            },
            {
                "name": "Nitra Region",
                "code": "NI"
            },
            {
                "name": "Prešov Region",
                "code": "PV"
            },
            {
                "name": "Trenčín Region",
                "code": "TC"
            },
            {
                "name": "Trnava Region",
                "code": "TA"
            },
            {
                "name": "Žilina Region",
                "code": "ZI"
            }
        ],
        "SI": [
            {
                "name": "Ajdovščina Municipality",
                "code": "001"
            },
            {
                "name": "Ankaran Municipality",
                "code": "213"
            },
            {
                "name": "Beltinci Municipality",
                "code": "002"
            },
            {
                "name": "Benedikt Municipality",
                "code": "148"
            },
            {
                "name": "Bistrica ob Sotli Municipality",
                "code": "149"
            },
            {
                "name": "Bled Municipality",
                "code": "003"
            },
            {
                "name": "Bloke Municipality",
                "code": "150"
            },
            {
                "name": "Bohinj Municipality",
                "code": "004"
            },
            {
                "name": "Borovnica Municipality",
                "code": "005"
            },
            {
                "name": "Bovec Municipality",
                "code": "006"
            },
            {
                "name": "Braslovče Municipality",
                "code": "151"
            },
            {
                "name": "Brda Municipality",
                "code": "007"
            },
            {
                "name": "Brežice Municipality",
                "code": "009"
            },
            {
                "name": "Brezovica Municipality",
                "code": "008"
            },
            {
                "name": "Cankova Municipality",
                "code": "152"
            },
            {
                "name": "Cerklje na Gorenjskem Municipality",
                "code": "012"
            },
            {
                "name": "Cerknica Municipality",
                "code": "013"
            },
            {
                "name": "Cerkno Municipality",
                "code": "014"
            },
            {
                "name": "Cerkvenjak Municipality",
                "code": "153"
            },
            {
                "name": "City Municipality of Celje",
                "code": "011"
            },
            {
                "name": "City Municipality of Novo Mesto",
                "code": "085"
            },
            {
                "name": "Črenšovci Municipality",
                "code": "015"
            },
            {
                "name": "Črna na Koroškem Municipality",
                "code": "016"
            },
            {
                "name": "Črnomelj Municipality",
                "code": "017"
            },
            {
                "name": "Destrnik Municipality",
                "code": "018"
            },
            {
                "name": "Divača Municipality",
                "code": "019"
            },
            {
                "name": "Dobje Municipality",
                "code": "154"
            },
            {
                "name": "Dobrepolje Municipality",
                "code": "020"
            },
            {
                "name": "Dobrna Municipality",
                "code": "155"
            },
            {
                "name": "Dobrova–Polhov Gradec Municipality",
                "code": "021"
            },
            {
                "name": "Dobrovnik Municipality",
                "code": "156"
            },
            {
                "name": "Dol pri Ljubljani Municipality",
                "code": "022"
            },
            {
                "name": "Dolenjske Toplice Municipality",
                "code": "157"
            },
            {
                "name": "Domžale Municipality",
                "code": "023"
            },
            {
                "name": "Dornava Municipality",
                "code": "024"
            },
            {
                "name": "Dravograd Municipality",
                "code": "025"
            },
            {
                "name": "Duplek Municipality",
                "code": "026"
            },
            {
                "name": "Gorenja Vas–Poljane Municipality",
                "code": "027"
            },
            {
                "name": "Gorišnica Municipality",
                "code": "028"
            },
            {
                "name": "Gorje Municipality",
                "code": "207"
            },
            {
                "name": "Gornja Radgona Municipality",
                "code": "029"
            },
            {
                "name": "Gornji Grad Municipality",
                "code": "030"
            },
            {
                "name": "Gornji Petrovci Municipality",
                "code": "031"
            },
            {
                "name": "Grad Municipality",
                "code": "158"
            },
            {
                "name": "Grosuplje Municipality",
                "code": "032"
            },
            {
                "name": "Hajdina Municipality",
                "code": "159"
            },
            {
                "name": "Hoče–Slivnica Municipality",
                "code": "160"
            },
            {
                "name": "Hodoš Municipality",
                "code": "161"
            },
            {
                "name": "Horjul Municipality",
                "code": "162"
            },
            {
                "name": "Hrastnik Municipality",
                "code": "034"
            },
            {
                "name": "Hrpelje–Kozina Municipality",
                "code": "035"
            },
            {
                "name": "Idrija Municipality",
                "code": "036"
            },
            {
                "name": "Ig Municipality",
                "code": "037"
            },
            {
                "name": "Ivančna Gorica Municipality",
                "code": "039"
            },
            {
                "name": "Izola Municipality",
                "code": "040"
            },
            {
                "name": "Jesenice Municipality",
                "code": "041"
            },
            {
                "name": "Jezersko Municipality",
                "code": "163"
            },
            {
                "name": "Juršinci Municipality",
                "code": "042"
            },
            {
                "name": "Kamnik Municipality",
                "code": "043"
            },
            {
                "name": "Kanal ob Soči Municipality",
                "code": "044"
            },
            {
                "name": "Kidričevo Municipality",
                "code": "045"
            },
            {
                "name": "Kobarid Municipality",
                "code": "046"
            },
            {
                "name": "Kobilje Municipality",
                "code": "047"
            },
            {
                "name": "Kočevje Municipality",
                "code": "048"
            },
            {
                "name": "Komen Municipality",
                "code": "049"
            },
            {
                "name": "Komenda Municipality",
                "code": "164"
            },
            {
                "name": "Koper City Municipality",
                "code": "050"
            },
            {
                "name": "Kostanjevica na Krki Municipality",
                "code": "197"
            },
            {
                "name": "Kostel Municipality",
                "code": "165"
            },
            {
                "name": "Kozje Municipality",
                "code": "051"
            },
            {
                "name": "Kranj City Municipality",
                "code": "052"
            },
            {
                "name": "Kranjska Gora Municipality",
                "code": "053"
            },
            {
                "name": "Križevci Municipality",
                "code": "166"
            },
            {
                "name": "Kungota",
                "code": "055"
            },
            {
                "name": "Kuzma Municipality",
                "code": "056"
            },
            {
                "name": "Laško Municipality",
                "code": "057"
            },
            {
                "name": "Lenart Municipality",
                "code": "058"
            },
            {
                "name": "Lendava Municipality",
                "code": "059"
            },
            {
                "name": "Litija Municipality",
                "code": "060"
            },
            {
                "name": "Ljubljana City Municipality",
                "code": "061"
            },
            {
                "name": "Ljubno Municipality",
                "code": "062"
            },
            {
                "name": "Ljutomer Municipality",
                "code": "063"
            },
            {
                "name": "Log–Dragomer Municipality",
                "code": "208"
            },
            {
                "name": "Logatec Municipality",
                "code": "064"
            },
            {
                "name": "Loška Dolina Municipality",
                "code": "065"
            },
            {
                "name": "Loški Potok Municipality",
                "code": "066"
            },
            {
                "name": "Lovrenc na Pohorju Municipality",
                "code": "167"
            },
            {
                "name": "Luče Municipality",
                "code": "067"
            },
            {
                "name": "Lukovica Municipality",
                "code": "068"
            },
            {
                "name": "Majšperk Municipality",
                "code": "069"
            },
            {
                "name": "Makole Municipality",
                "code": "198"
            },
            {
                "name": "Maribor City Municipality",
                "code": "070"
            },
            {
                "name": "Markovci Municipality",
                "code": "168"
            },
            {
                "name": "Medvode Municipality",
                "code": "071"
            },
            {
                "name": "Mengeš Municipality",
                "code": "072"
            },
            {
                "name": "Metlika Municipality",
                "code": "073"
            },
            {
                "name": "Mežica Municipality",
                "code": "074"
            },
            {
                "name": "Miklavž na Dravskem Polju Municipality",
                "code": "169"
            },
            {
                "name": "Miren–Kostanjevica Municipality",
                "code": "075"
            },
            {
                "name": "Mirna Municipality",
                "code": "212"
            },
            {
                "name": "Mirna Peč Municipality",
                "code": "170"
            },
            {
                "name": "Mislinja Municipality",
                "code": "076"
            },
            {
                "name": "Mokronog–Trebelno Municipality",
                "code": "199"
            },
            {
                "name": "Moravče Municipality",
                "code": "077"
            },
            {
                "name": "Moravske Toplice Municipality",
                "code": "078"
            },
            {
                "name": "Mozirje Municipality",
                "code": "079"
            },
            {
                "name": "Municipality of Apače",
                "code": "195"
            },
            {
                "name": "Municipality of Cirkulane",
                "code": "196"
            },
            {
                "name": "Municipality of Ilirska Bistrica",
                "code": "038"
            },
            {
                "name": "Municipality of Krško",
                "code": "054"
            },
            {
                "name": "Municipality of Škofljica",
                "code": "123"
            },
            {
                "name": "Murska Sobota City Municipality",
                "code": "080"
            },
            {
                "name": "Muta Municipality",
                "code": "081"
            },
            {
                "name": "Naklo Municipality",
                "code": "082"
            },
            {
                "name": "Nazarje Municipality",
                "code": "083"
            },
            {
                "name": "Nova Gorica City Municipality",
                "code": "084"
            },
            {
                "name": "Odranci Municipality",
                "code": "086"
            },
            {
                "name": "Oplotnica",
                "code": "171"
            },
            {
                "name": "Ormož Municipality",
                "code": "087"
            },
            {
                "name": "Osilnica Municipality",
                "code": "088"
            },
            {
                "name": "Pesnica Municipality",
                "code": "089"
            },
            {
                "name": "Piran Municipality",
                "code": "090"
            },
            {
                "name": "Pivka Municipality",
                "code": "091"
            },
            {
                "name": "Podčetrtek Municipality",
                "code": "092"
            },
            {
                "name": "Podlehnik Municipality",
                "code": "172"
            },
            {
                "name": "Podvelka Municipality",
                "code": "093"
            },
            {
                "name": "Poljčane Municipality",
                "code": "200"
            },
            {
                "name": "Polzela Municipality",
                "code": "173"
            },
            {
                "name": "Postojna Municipality",
                "code": "094"
            },
            {
                "name": "Prebold Municipality",
                "code": "174"
            },
            {
                "name": "Preddvor Municipality",
                "code": "095"
            },
            {
                "name": "Prevalje Municipality",
                "code": "175"
            },
            {
                "name": "Ptuj City Municipality",
                "code": "096"
            },
            {
                "name": "Puconci Municipality",
                "code": "097"
            },
            {
                "name": "Rače–Fram Municipality",
                "code": "098"
            },
            {
                "name": "Radeče Municipality",
                "code": "099"
            },
            {
                "name": "Radenci Municipality",
                "code": "100"
            },
            {
                "name": "Radlje ob Dravi Municipality",
                "code": "101"
            },
            {
                "name": "Radovljica Municipality",
                "code": "102"
            },
            {
                "name": "Ravne na Koroškem Municipality",
                "code": "103"
            },
            {
                "name": "Razkrižje Municipality",
                "code": "176"
            },
            {
                "name": "Rečica ob Savinji Municipality",
                "code": "209"
            },
            {
                "name": "Renče–Vogrsko Municipality",
                "code": "201"
            },
            {
                "name": "Ribnica Municipality",
                "code": "104"
            },
            {
                "name": "Ribnica na Pohorju Municipality",
                "code": "177"
            },
            {
                "name": "Rogaška Slatina Municipality",
                "code": "106"
            },
            {
                "name": "Rogašovci Municipality",
                "code": "105"
            },
            {
                "name": "Rogatec Municipality",
                "code": "107"
            },
            {
                "name": "Ruše Municipality",
                "code": "108"
            },
            {
                "name": "Šalovci Municipality",
                "code": "033"
            },
            {
                "name": "Selnica ob Dravi Municipality",
                "code": "178"
            },
            {
                "name": "Semič Municipality",
                "code": "109"
            },
            {
                "name": "Šempeter–Vrtojba Municipality",
                "code": "183"
            },
            {
                "name": "Šenčur Municipality",
                "code": "117"
            },
            {
                "name": "Šentilj Municipality",
                "code": "118"
            },
            {
                "name": "Šentjernej Municipality",
                "code": "119"
            },
            {
                "name": "Šentjur Municipality",
                "code": "120"
            },
            {
                "name": "Šentrupert Municipality",
                "code": "211"
            },
            {
                "name": "Sevnica Municipality",
                "code": "110"
            },
            {
                "name": "Sežana Municipality",
                "code": "111"
            },
            {
                "name": "Škocjan Municipality",
                "code": "121"
            },
            {
                "name": "Škofja Loka Municipality",
                "code": "122"
            },
            {
                "name": "Slovenj Gradec City Municipality",
                "code": "112"
            },
            {
                "name": "Slovenska Bistrica Municipality",
                "code": "113"
            },
            {
                "name": "Slovenske Konjice Municipality",
                "code": "114"
            },
            {
                "name": "Šmarje pri Jelšah Municipality",
                "code": "124"
            },
            {
                "name": "Šmarješke Toplice Municipality",
                "code": "206"
            },
            {
                "name": "Šmartno ob Paki Municipality",
                "code": "125"
            },
            {
                "name": "Šmartno pri Litiji Municipality",
                "code": "194"
            },
            {
                "name": "Sodražica Municipality",
                "code": "179"
            },
            {
                "name": "Solčava Municipality",
                "code": "180"
            },
            {
                "name": "Šoštanj Municipality",
                "code": "126"
            },
            {
                "name": "Središče ob Dravi",
                "code": "202"
            },
            {
                "name": "Starše Municipality",
                "code": "115"
            },
            {
                "name": "Štore Municipality",
                "code": "127"
            },
            {
                "name": "Straža Municipality",
                "code": "203"
            },
            {
                "name": "Sveta Ana Municipality",
                "code": "181"
            },
            {
                "name": "Sveta Trojica v Slovenskih Goricah Municipality",
                "code": "204"
            },
            {
                "name": "Sveti Andraž v Slovenskih Goricah Municipality",
                "code": "182"
            },
            {
                "name": "Sveti Jurij ob Ščavnici Municipality",
                "code": "116"
            },
            {
                "name": "Sveti Jurij v Slovenskih Goricah Municipality",
                "code": "210"
            },
            {
                "name": "Sveti Tomaž Municipality",
                "code": "205"
            },
            {
                "name": "Tabor Municipality",
                "code": "184"
            },
            {
                "name": "Tišina Municipality",
                "code": "010"
            },
            {
                "name": "Tolmin Municipality",
                "code": "128"
            },
            {
                "name": "Trbovlje Municipality",
                "code": "129"
            },
            {
                "name": "Trebnje Municipality",
                "code": "130"
            },
            {
                "name": "Trnovska Vas Municipality",
                "code": "185"
            },
            {
                "name": "Tržič Municipality",
                "code": "131"
            },
            {
                "name": "Trzin Municipality",
                "code": "186"
            },
            {
                "name": "Turnišče Municipality",
                "code": "132"
            },
            {
                "name": "Velika Polana Municipality",
                "code": "187"
            },
            {
                "name": "Velike Lašče Municipality",
                "code": "134"
            },
            {
                "name": "Veržej Municipality",
                "code": "188"
            },
            {
                "name": "Videm Municipality",
                "code": "135"
            },
            {
                "name": "Vipava Municipality",
                "code": "136"
            },
            {
                "name": "Vitanje Municipality",
                "code": "137"
            },
            {
                "name": "Vodice Municipality",
                "code": "138"
            },
            {
                "name": "Vojnik Municipality",
                "code": "139"
            },
            {
                "name": "Vransko Municipality",
                "code": "189"
            },
            {
                "name": "Vrhnika Municipality",
                "code": "140"
            },
            {
                "name": "Vuzenica Municipality",
                "code": "141"
            },
            {
                "name": "Zagorje ob Savi Municipality",
                "code": "142"
            },
            {
                "name": "Žalec Municipality",
                "code": "190"
            },
            {
                "name": "Zavrč Municipality",
                "code": "143"
            },
            {
                "name": "Železniki Municipality",
                "code": "146"
            },
            {
                "name": "Žetale Municipality",
                "code": "191"
            },
            {
                "name": "Žiri Municipality",
                "code": "147"
            },
            {
                "name": "Žirovnica Municipality",
                "code": "192"
            },
            {
                "name": "Zreče Municipality",
                "code": "144"
            },
            {
                "name": "Žužemberk Municipality",
                "code": "193"
            }
        ],
        "SB": [
            {
                "name": "Central Province",
                "code": "CE"
            },
            {
                "name": "Choiseul Province",
                "code": "CH"
            },
            {
                "name": "Guadalcanal Province",
                "code": "GU"
            },
            {
                "name": "Honiara",
                "code": "CT"
            },
            {
                "name": "Isabel Province",
                "code": "IS"
            },
            {
                "name": "Makira-Ulawa Province",
                "code": "MK"
            },
            {
                "name": "Malaita Province",
                "code": "ML"
            },
            {
                "name": "Rennell and Bellona Province",
                "code": "RB"
            },
            {
                "name": "Temotu Province",
                "code": "TE"
            },
            {
                "name": "Western Province",
                "code": "WE"
            }
        ],
        "SO": [
            {
                "name": "Awdal Region",
                "code": "AW"
            },
            {
                "name": "Bakool",
                "code": "BK"
            },
            {
                "name": "Banaadir",
                "code": "BN"
            },
            {
                "name": "Bari",
                "code": "BR"
            },
            {
                "name": "Bay",
                "code": "BY"
            },
            {
                "name": "Galguduud",
                "code": "GA"
            },
            {
                "name": "Gedo",
                "code": "GE"
            },
            {
                "name": "Hiran",
                "code": "HI"
            },
            {
                "name": "Lower Juba",
                "code": "JH"
            },
            {
                "name": "Lower Shebelle",
                "code": "SH"
            },
            {
                "name": "Middle Juba",
                "code": "JD"
            },
            {
                "name": "Middle Shebelle",
                "code": "SD"
            },
            {
                "name": "Mudug",
                "code": "MU"
            },
            {
                "name": "Nugal",
                "code": "NU"
            },
            {
                "name": "Sanaag Region",
                "code": "SA"
            },
            {
                "name": "Togdheer Region",
                "code": "TO"
            }
        ],
        "ZA": [
            {
                "name": "Eastern Cape",
                "code": "EC"
            },
            {
                "name": "Free State",
                "code": "FS"
            },
            {
                "name": "Gauteng",
                "code": "GP"
            },
            {
                "name": "KwaZulu-Natal",
                "code": "KZN"
            },
            {
                "name": "Limpopo",
                "code": "LP"
            },
            {
                "name": "Mpumalanga",
                "code": "MP"
            },
            {
                "name": "North West",
                "code": "NW"
            },
            {
                "name": "Northern Cape",
                "code": "NC"
            },
            {
                "name": "Western Cape",
                "code": "WC"
            }
        ],
        "GS": [
            {
                "name": "South Georgia and the South Sandwich Islands",
                "code": "South Georgia and the South Sandwich Islands"
            }
        ],
        "SS": [
            {
                "name": "Central Equatoria",
                "code": "EC"
            },
            {
                "name": "Eastern Equatoria",
                "code": "EE"
            },
            {
                "name": "Jonglei State",
                "code": "JG"
            },
            {
                "name": "Lakes",
                "code": "LK"
            },
            {
                "name": "Northern Bahr el Ghazal",
                "code": "BN"
            },
            {
                "name": "Unity",
                "code": "UY"
            },
            {
                "name": "Upper Nile",
                "code": "NU"
            },
            {
                "name": "Warrap",
                "code": "WR"
            },
            {
                "name": "Western Bahr el Ghazal",
                "code": "BW"
            },
            {
                "name": "Western Equatoria",
                "code": "EW"
            }
        ],
        "ES": [
            {
                "name": "A Coruña Province",
                "code": "C"
            },
            {
                "name": "Albacete Province",
                "code": "AB"
            },
            {
                "name": "Alicante Province",
                "code": "A"
            },
            {
                "name": "Almería Province",
                "code": "AL"
            },
            {
                "name": "Andalusia",
                "code": "AN"
            },
            {
                "name": "Araba / Álava",
                "code": "VI"
            },
            {
                "name": "Aragon",
                "code": "AR"
            },
            {
                "name": "Badajoz Province",
                "code": "BA"
            },
            {
                "name": "Balearic Islands",
                "code": "PM"
            },
            {
                "name": "Barcelona Province",
                "code": "B"
            },
            {
                "name": "Basque Country",
                "code": "PV"
            },
            {
                "name": "Biscay",
                "code": "BI"
            },
            {
                "name": "Burgos Province",
                "code": "BU"
            },
            {
                "name": "Cáceres Province",
                "code": "CC"
            },
            {
                "name": "Cádiz Province",
                "code": "CA"
            },
            {
                "name": "Canary Islands",
                "code": "CN"
            },
            {
                "name": "Cantabria",
                "code": "S"
            },
            {
                "name": "Castellón Province",
                "code": "CS"
            },
            {
                "name": "Castile and León",
                "code": "CL"
            },
            {
                "name": "Castile-La Mancha",
                "code": "CM"
            },
            {
                "name": "Catalonia",
                "code": "CT"
            },
            {
                "name": "Ceuta",
                "code": "CE"
            },
            {
                "name": "Ciudad Real Province",
                "code": "CR"
            },
            {
                "name": "Community of Madrid",
                "code": "MD"
            },
            {
                "name": "Córdoba Province",
                "code": "CO"
            },
            {
                "name": "Cuenca Province",
                "code": "CU"
            },
            {
                "name": "Extremadura",
                "code": "EX"
            },
            {
                "name": "Galicia",
                "code": "GA"
            },
            {
                "name": "Gipuzkoa",
                "code": "SS"
            },
            {
                "name": "Girona Province",
                "code": "GI"
            },
            {
                "name": "Granada Province",
                "code": "GR"
            },
            {
                "name": "Guadalajara Province",
                "code": "GU"
            },
            {
                "name": "Huelva Province",
                "code": "H"
            },
            {
                "name": "Huesca Province",
                "code": "HU"
            },
            {
                "name": "Jaén Province",
                "code": "J"
            },
            {
                "name": "La Rioja",
                "code": "RI"
            },
            {
                "name": "Las Palmas Province",
                "code": "GC"
            },
            {
                "name": "León Province",
                "code": "LE"
            },
            {
                "name": "Lleida Province",
                "code": "L"
            },
            {
                "name": "Lugo Province",
                "code": "LU"
            },
            {
                "name": "Madrid Province",
                "code": "M"
            },
            {
                "name": "Málaga Province",
                "code": "MA"
            },
            {
                "name": "Melilla",
                "code": "ML"
            },
            {
                "name": "Murcia Province",
                "code": "MU"
            },
            {
                "name": "Navarre",
                "code": "NC"
            },
            {
                "name": "Ourense Province",
                "code": "OR"
            },
            {
                "name": "Palencia Province",
                "code": "P"
            },
            {
                "name": "Pontevedra Province",
                "code": "PO"
            },
            {
                "name": "Province of Asturias",
                "code": "O"
            },
            {
                "name": "Province of Ávila",
                "code": "AV"
            },
            {
                "name": "Region of Murcia",
                "code": "MC"
            },
            {
                "name": "Salamanca Province",
                "code": "SA"
            },
            {
                "name": "Santa Cruz de Tenerife Province",
                "code": "TF"
            },
            {
                "name": "Segovia Province",
                "code": "SG"
            },
            {
                "name": "Seville Province",
                "code": "SE"
            },
            {
                "name": "Soria Province",
                "code": "SO"
            },
            {
                "name": "Tarragona Province",
                "code": "T"
            },
            {
                "name": "Teruel Province",
                "code": "TE"
            },
            {
                "name": "Toledo Province",
                "code": "TO"
            },
            {
                "name": "Valencia Province",
                "code": "V"
            },
            {
                "name": "Valencian Community",
                "code": "VC"
            },
            {
                "name": "Valladolid Province",
                "code": "VA"
            },
            {
                "name": "Zamora Province",
                "code": "ZA"
            },
            {
                "name": "Zaragoza Province",
                "code": "Z"
            }
        ],
        "LK": [
            {
                "name": "Ampara District",
                "code": "52"
            },
            {
                "name": "Anuradhapura District",
                "code": "71"
            },
            {
                "name": "Badulla District",
                "code": "81"
            },
            {
                "name": "Batticaloa District",
                "code": "51"
            },
            {
                "name": "Central Province",
                "code": "2"
            },
            {
                "name": "Colombo District",
                "code": "11"
            },
            {
                "name": "Eastern Province",
                "code": "5"
            },
            {
                "name": "Galle District",
                "code": "31"
            },
            {
                "name": "Gampaha District",
                "code": "12"
            },
            {
                "name": "Hambantota District",
                "code": "33"
            },
            {
                "name": "Jaffna District",
                "code": "41"
            },
            {
                "name": "Kalutara District",
                "code": "13"
            },
            {
                "name": "Kandy District",
                "code": "21"
            },
            {
                "name": "Kegalle District",
                "code": "92"
            },
            {
                "name": "Kilinochchi District",
                "code": "42"
            },
            {
                "name": "Mannar District",
                "code": "43"
            },
            {
                "name": "Matale District",
                "code": "22"
            },
            {
                "name": "Matara District",
                "code": "32"
            },
            {
                "name": "Monaragala District",
                "code": "82"
            },
            {
                "name": "Mullaitivu District",
                "code": "45"
            },
            {
                "name": "North Central Province",
                "code": "7"
            },
            {
                "name": "North Western Province",
                "code": "6"
            },
            {
                "name": "Northern Province",
                "code": "4"
            },
            {
                "name": "Nuwara Eliya District",
                "code": "23"
            },
            {
                "name": "Polonnaruwa District",
                "code": "72"
            },
            {
                "name": "Puttalam District",
                "code": "62"
            },
            {
                "name": "Ratnapura district",
                "code": "91"
            },
            {
                "name": "Sabaragamuwa Province",
                "code": "9"
            },
            {
                "name": "Southern Province",
                "code": "3"
            },
            {
                "name": "Trincomalee District",
                "code": "53"
            },
            {
                "name": "Uva Province",
                "code": "8"
            },
            {
                "name": "Vavuniya District",
                "code": "44"
            },
            {
                "name": "Western Province",
                "code": "1"
            }
        ],
        "SD": [
            {
                "name": "Al Jazirah",
                "code": "GZ"
            },
            {
                "name": "Al Qadarif",
                "code": "GD"
            },
            {
                "name": "Blue Nile",
                "code": "NB"
            },
            {
                "name": "Central Darfur",
                "code": "DC"
            },
            {
                "name": "East Darfur",
                "code": "DE"
            },
            {
                "name": "Kassala",
                "code": "KA"
            },
            {
                "name": "Khartoum",
                "code": "KH"
            },
            {
                "name": "North Darfur",
                "code": "DN"
            },
            {
                "name": "North Kordofan",
                "code": "KN"
            },
            {
                "name": "Northern",
                "code": "NO"
            },
            {
                "name": "Red Sea",
                "code": "RS"
            },
            {
                "name": "River Nile",
                "code": "NR"
            },
            {
                "name": "Sennar",
                "code": "SI"
            },
            {
                "name": "South Darfur",
                "code": "DS"
            },
            {
                "name": "South Kordofan",
                "code": "KS"
            },
            {
                "name": "West Darfur",
                "code": "DW"
            },
            {
                "name": "West Kordofan",
                "code": "GK"
            },
            {
                "name": "White Nile",
                "code": "NW"
            }
        ],
        "SR": [
            {
                "name": "Brokopondo District",
                "code": "BR"
            },
            {
                "name": "Commewijne District",
                "code": "CM"
            },
            {
                "name": "Coronie District",
                "code": "CR"
            },
            {
                "name": "Marowijne District",
                "code": "MA"
            },
            {
                "name": "Nickerie District",
                "code": "NI"
            },
            {
                "name": "Para District",
                "code": "PR"
            },
            {
                "name": "Paramaribo District",
                "code": "PM"
            },
            {
                "name": "Saramacca District",
                "code": "SA"
            },
            {
                "name": "Sipaliwini District",
                "code": "SI"
            },
            {
                "name": "Wanica District",
                "code": "WA"
            }
        ],
        "SJ": [
            {
                "name": "Svalbard and Jan Mayen",
                "code": "Svalbard and Jan Mayen"
            }
        ],
        "SZ": [
            {
                "name": "Hhohho District",
                "code": "HH"
            },
            {
                "name": "Lubombo District",
                "code": "LU"
            },
            {
                "name": "Manzini District",
                "code": "MA"
            },
            {
                "name": "Shiselweni District",
                "code": "SH"
            }
        ],
        "SE": [
            {
                "name": "Blekinge",
                "code": "K"
            },
            {
                "name": "Dalarna County",
                "code": "W"
            },
            {
                "name": "Gävleborg County",
                "code": "X"
            },
            {
                "name": "Gotland County",
                "code": "I"
            },
            {
                "name": "Halland County",
                "code": "N"
            },
            {
                "name": "Jönköping County",
                "code": "F"
            },
            {
                "name": "Kalmar County",
                "code": "H"
            },
            {
                "name": "Kronoberg County",
                "code": "G"
            },
            {
                "name": "Norrbotten County",
                "code": "BD"
            },
            {
                "name": "Örebro County",
                "code": "T"
            },
            {
                "name": "Östergötland County",
                "code": "E"
            },
            {
                "name": "Skåne County",
                "code": "M"
            },
            {
                "name": "Södermanland County",
                "code": "D"
            },
            {
                "name": "Stockholm County",
                "code": "AB"
            },
            {
                "name": "Uppsala County",
                "code": "C"
            },
            {
                "name": "Värmland County",
                "code": "S"
            },
            {
                "name": "Västerbotten County",
                "code": "AC"
            },
            {
                "name": "Västernorrland County",
                "code": "Y"
            },
            {
                "name": "Västmanland County",
                "code": "U"
            },
            {
                "name": "Västra Götaland County",
                "code": "O"
            }
        ],
        "CH": [
            {
                "name": "Aargau",
                "code": "AG"
            },
            {
                "name": "Appenzell Ausserrhoden",
                "code": "AR"
            },
            {
                "name": "Appenzell Innerrhoden",
                "code": "AI"
            },
            {
                "name": "Basel-Landschaft",
                "code": "BL"
            },
            {
                "name": "canton of Bern",
                "code": "BE"
            },
            {
                "name": "Canton of Fribourg",
                "code": "FR"
            },
            {
                "name": "Canton of Geneva",
                "code": "GE"
            },
            {
                "name": "Canton of Jura",
                "code": "JU"
            },
            {
                "name": "Canton of Lucerne",
                "code": "LU"
            },
            {
                "name": "Canton of Neuchâtel",
                "code": "NE"
            },
            {
                "name": "Canton of Schaffhausen",
                "code": "SH"
            },
            {
                "name": "Canton of Solothurn",
                "code": "SO"
            },
            {
                "name": "Canton of St. Gallen",
                "code": "SG"
            },
            {
                "name": "Canton of Valais",
                "code": "VS"
            },
            {
                "name": "Canton of Vaud",
                "code": "VD"
            },
            {
                "name": "Canton of Zug",
                "code": "ZG"
            },
            {
                "name": "canton of Zürich",
                "code": "ZH"
            },
            {
                "name": "Glarus",
                "code": "GL"
            },
            {
                "name": "Graubünden",
                "code": "GR"
            },
            {
                "name": "Nidwalden",
                "code": "NW"
            },
            {
                "name": "Obwalden",
                "code": "OW"
            },
            {
                "name": "Schwyz",
                "code": "SZ"
            },
            {
                "name": "Thurgau",
                "code": "TG"
            },
            {
                "name": "Ticino",
                "code": "TI"
            },
            {
                "name": "Uri",
                "code": "UR"
            }
        ],
        "SY": [
            {
                "name": "Al-Hasakah Governorate",
                "code": "HA"
            },
            {
                "name": "Al-Raqqah Governorate",
                "code": "RA"
            },
            {
                "name": "Aleppo Governorate",
                "code": "HL"
            },
            {
                "name": "As-Suwayda Governorate",
                "code": "SU"
            },
            {
                "name": "Damascus Governorate",
                "code": "DI"
            },
            {
                "name": "Daraa Governorate",
                "code": "DR"
            },
            {
                "name": "Deir ez-Zor Governorate",
                "code": "DY"
            },
            {
                "name": "Hama Governorate",
                "code": "HM"
            },
            {
                "name": "Homs Governorate",
                "code": "HI"
            },
            {
                "name": "Idlib Governorate",
                "code": "ID"
            },
            {
                "name": "Latakia Governorate",
                "code": "LA"
            },
            {
                "name": "Quneitra Governorate",
                "code": "QU"
            },
            {
                "name": "Rif Dimashq Governorate",
                "code": "RD"
            },
            {
                "name": "Tartus Governorate",
                "code": "TA"
            }
        ],
        "TW": [
            {
                "name": "Changhua County",
                "code": "CHA"
            },
            {
                "name": "Chiayi City",
                "code": "CYQ"
            },
            {
                "name": "Chiayi County",
                "code": "CYI"
            },
            {
                "name": "Hsinchu",
                "code": "HSZ"
            },
            {
                "name": "Hsinchu County",
                "code": "HSQ"
            },
            {
                "name": "Hualien County",
                "code": "HUA"
            },
            {
                "name": "Kaohsiung",
                "code": "KHH"
            },
            {
                "name": "Kaohsiung County",
                "code": "KHQ"
            },
            {
                "name": "Kinmen",
                "code": "KIN"
            },
            {
                "name": "Lienchiang County",
                "code": "LIE"
            },
            {
                "name": "Miaoli County",
                "code": "MIA"
            },
            {
                "name": "Nantou County",
                "code": "NAN"
            },
            {
                "name": "Penghu County",
                "code": "PEN"
            },
            {
                "name": "Pingtung County",
                "code": "PIF"
            },
            {
                "name": "Taichung",
                "code": "TXG"
            },
            {
                "name": "Taichung County",
                "code": "TXQ"
            },
            {
                "name": "Tainan",
                "code": "TNN"
            },
            {
                "name": "Tainan County",
                "code": "TNQ"
            },
            {
                "name": "Taipei",
                "code": "TPE"
            },
            {
                "name": "Taitung County",
                "code": "TTT"
            },
            {
                "name": "Taoyuan City",
                "code": "TAO"
            },
            {
                "name": "Yilan County",
                "code": "ILA"
            },
            {
                "name": "Yunlin County",
                "code": "YUN"
            }
        ],
        "TJ": [
            {
                "name": "districts of Republican Subordination",
                "code": "RA"
            },
            {
                "name": "Gorno-Badakhshan Autonomous Province",
                "code": "GB"
            },
            {
                "name": "Khatlon Province",
                "code": "KT"
            },
            {
                "name": "Sughd Province",
                "code": "SU"
            }
        ],
        "TZ": [
            {
                "name": "Arusha Region",
                "code": "01"
            },
            {
                "name": "Dar es Salaam Region",
                "code": "02"
            },
            {
                "name": "Dodoma Region",
                "code": "03"
            },
            {
                "name": "Geita Region",
                "code": "27"
            },
            {
                "name": "Iringa Region",
                "code": "04"
            },
            {
                "name": "Kagera Region",
                "code": "05"
            },
            {
                "name": "Katavi Region",
                "code": "28"
            },
            {
                "name": "Kigoma Region",
                "code": "08"
            },
            {
                "name": "Kilimanjaro Region",
                "code": "09"
            },
            {
                "name": "Lindi Region",
                "code": "12"
            },
            {
                "name": "Manyara Region",
                "code": "26"
            },
            {
                "name": "Mara Region",
                "code": "13"
            },
            {
                "name": "Morogoro Region",
                "code": "16"
            },
            {
                "name": "Mtwara Region",
                "code": "17"
            },
            {
                "name": "Mwanza Region",
                "code": "18"
            },
            {
                "name": "Njombe Region",
                "code": "29"
            },
            {
                "name": "North Pemba Region",
                "code": "06"
            },
            {
                "name": "Pwani Region",
                "code": "19"
            },
            {
                "name": "Rukwa Region",
                "code": "20"
            },
            {
                "name": "Ruvuma Region",
                "code": "21"
            },
            {
                "name": "Shinyanga Region",
                "code": "22"
            },
            {
                "name": "Simiyu Region",
                "code": "30"
            },
            {
                "name": "Singida Region",
                "code": "23"
            },
            {
                "name": "South Pemba Region",
                "code": "10"
            },
            {
                "name": "Tabora Region",
                "code": "24"
            },
            {
                "name": "Tanga Region",
                "code": "25"
            },
            {
                "name": "Zanzibar Central/South Region",
                "code": "11"
            },
            {
                "name": "Zanzibar North Region",
                "code": "07"
            },
            {
                "name": "Zanzibar Urban/West Region",
                "code": "15"
            }
        ],
        "TH": [
            {
                "name": "Amnat Charoen",
                "code": "37"
            },
            {
                "name": "Ang Thong",
                "code": "15"
            },
            {
                "name": "Bangkok",
                "code": "10"
            },
            {
                "name": "Bueng Kan",
                "code": "38"
            },
            {
                "name": "Buri Ram",
                "code": "31"
            },
            {
                "name": "Chachoengsao",
                "code": "24"
            },
            {
                "name": "Chai Nat",
                "code": "18"
            },
            {
                "name": "Chanthaburi",
                "code": "22"
            },
            {
                "name": "Chiang Mai",
                "code": "50"
            },
            {
                "name": "Chiang Rai",
                "code": "57"
            },
            {
                "name": "Chon Buri",
                "code": "20"
            },
            {
                "name": "Chumphon",
                "code": "86"
            },
            {
                "name": "Kalasin",
                "code": "46"
            },
            {
                "name": "Kamphaeng Phet",
                "code": "62"
            },
            {
                "name": "Kanchanaburi",
                "code": "71"
            },
            {
                "name": "Khon Kaen",
                "code": "40"
            },
            {
                "name": "Krabi",
                "code": "81"
            },
            {
                "name": "Lampang",
                "code": "52"
            },
            {
                "name": "Lamphun",
                "code": "51"
            },
            {
                "name": "Loei",
                "code": "42"
            },
            {
                "name": "Lopburi",
                "code": "16"
            },
            {
                "name": "Mae Hong Son",
                "code": "58"
            },
            {
                "name": "Maha Sarakham",
                "code": "44"
            },
            {
                "name": "Mukdahan",
                "code": "49"
            },
            {
                "name": "Nakhon Nayok",
                "code": "26"
            },
            {
                "name": "Nakhon Pathom",
                "code": "73"
            },
            {
                "name": "Nakhon Phanom",
                "code": "48"
            },
            {
                "name": "Nakhon Ratchasima",
                "code": "30"
            },
            {
                "name": "Nakhon Sawan",
                "code": "60"
            },
            {
                "name": "Nakhon Si Thammarat",
                "code": "80"
            },
            {
                "name": "Nan",
                "code": "55"
            },
            {
                "name": "Narathiwat",
                "code": "96"
            },
            {
                "name": "Nong Bua Lam Phu",
                "code": "39"
            },
            {
                "name": "Nong Khai",
                "code": "43"
            },
            {
                "name": "Nonthaburi",
                "code": "12"
            },
            {
                "name": "Pathum Thani",
                "code": "13"
            },
            {
                "name": "Pattani",
                "code": "94"
            },
            {
                "name": "Pattaya",
                "code": "S"
            },
            {
                "name": "Phang Nga",
                "code": "82"
            },
            {
                "name": "Phatthalung",
                "code": "93"
            },
            {
                "name": "Phayao",
                "code": "56"
            },
            {
                "name": "Phetchabun",
                "code": "67"
            },
            {
                "name": "Phetchaburi",
                "code": "76"
            },
            {
                "name": "Phichit",
                "code": "66"
            },
            {
                "name": "Phitsanulok",
                "code": "65"
            },
            {
                "name": "Phra Nakhon Si Ayutthaya",
                "code": "14"
            },
            {
                "name": "Phrae",
                "code": "54"
            },
            {
                "name": "Phuket",
                "code": "83"
            },
            {
                "name": "Prachin Buri",
                "code": "25"
            },
            {
                "name": "Prachuap Khiri Khan",
                "code": "77"
            },
            {
                "name": "Ranong",
                "code": "85"
            },
            {
                "name": "Ratchaburi",
                "code": "70"
            },
            {
                "name": "Rayong",
                "code": "21"
            },
            {
                "name": "Roi Et",
                "code": "45"
            },
            {
                "name": "Sa Kaeo",
                "code": "27"
            },
            {
                "name": "Sakon Nakhon",
                "code": "47"
            },
            {
                "name": "Samut Prakan",
                "code": "11"
            },
            {
                "name": "Samut Sakhon",
                "code": "74"
            },
            {
                "name": "Samut Songkhram",
                "code": "75"
            },
            {
                "name": "Saraburi",
                "code": "19"
            },
            {
                "name": "Satun",
                "code": "91"
            },
            {
                "name": "Si Sa Ket",
                "code": "33"
            },
            {
                "name": "Sing Buri",
                "code": "17"
            },
            {
                "name": "Songkhla",
                "code": "90"
            },
            {
                "name": "Sukhothai",
                "code": "64"
            },
            {
                "name": "Suphanburi",
                "code": "72"
            },
            {
                "name": "Surat Thani",
                "code": "84"
            },
            {
                "name": "Surin",
                "code": "32"
            },
            {
                "name": "Tak",
                "code": "63"
            },
            {
                "name": "Trang",
                "code": "92"
            },
            {
                "name": "Trat",
                "code": "23"
            },
            {
                "name": "Ubon Ratchathani",
                "code": "34"
            },
            {
                "name": "Udon Thani",
                "code": "41"
            },
            {
                "name": "Uthai Thani",
                "code": "61"
            },
            {
                "name": "Uttaradit",
                "code": "53"
            },
            {
                "name": "Yala",
                "code": "95"
            },
            {
                "name": "Yasothon",
                "code": "35"
            }
        ],
        "TL": [
            {
                "name": "Aileu municipality",
                "code": "AL"
            },
            {
                "name": "Ainaro Municipality",
                "code": "AN"
            },
            {
                "name": "Baucau Municipality",
                "code": "BA"
            },
            {
                "name": "Bobonaro Municipality",
                "code": "BO"
            },
            {
                "name": "Cova Lima Municipality",
                "code": "CO"
            },
            {
                "name": "Dili municipality",
                "code": "DI"
            },
            {
                "name": "Ermera District",
                "code": "ER"
            },
            {
                "name": "Lautém Municipality",
                "code": "LA"
            },
            {
                "name": "Liquiçá Municipality",
                "code": "LI"
            },
            {
                "name": "Manatuto District",
                "code": "MT"
            },
            {
                "name": "Manufahi Municipality",
                "code": "MF"
            },
            {
                "name": "Viqueque Municipality",
                "code": "VI"
            }
        ],
        "TG": [
            {
                "name": "Centrale Region",
                "code": "C"
            },
            {
                "name": "Kara Region",
                "code": "K"
            },
            {
                "name": "Maritime",
                "code": "M"
            },
            {
                "name": "Plateaux Region",
                "code": "P"
            },
            {
                "name": "Savanes Region",
                "code": "S"
            }
        ],
        "TK": [
            {
                "name": "Tokelau",
                "code": "Tokelau"
            }
        ],
        "TO": [
            {
                "name": "Haʻapai",
                "code": "02"
            },
            {
                "name": "ʻEua",
                "code": "01"
            },
            {
                "name": "Niuas",
                "code": "03"
            },
            {
                "name": "Tongatapu",
                "code": "04"
            },
            {
                "name": "Vavaʻu",
                "code": "05"
            }
        ],
        "TT": [
            {
                "name": "Arima",
                "code": "ARI"
            },
            {
                "name": "Chaguanas",
                "code": "CHA"
            },
            {
                "name": "Couva-Tabaquite-Talparo Regional Corporation",
                "code": "CTT"
            },
            {
                "name": "Diego Martin Regional Corporation",
                "code": "DMN"
            },
            {
                "name": "Eastern Tobago",
                "code": "ETO"
            },
            {
                "name": "Penal-Debe Regional Corporation",
                "code": "PED"
            },
            {
                "name": "Point Fortin",
                "code": "PTF"
            },
            {
                "name": "Port of Spain",
                "code": "POS"
            },
            {
                "name": "Princes Town Regional Corporation",
                "code": "PRT"
            },
            {
                "name": "Rio Claro-Mayaro Regional Corporation",
                "code": "MRC"
            },
            {
                "name": "San Fernando",
                "code": "SFO"
            },
            {
                "name": "San Juan-Laventille Regional Corporation",
                "code": "SJL"
            },
            {
                "name": "Sangre Grande Regional Corporation",
                "code": "SGE"
            },
            {
                "name": "Siparia Regional Corporation",
                "code": "SIP"
            },
            {
                "name": "Tunapuna-Piarco Regional Corporation",
                "code": "TUP"
            },
            {
                "name": "Western Tobago",
                "code": "WTO"
            }
        ],
        "TN": [
            {
                "name": "Ariana Governorate",
                "code": "12"
            },
            {
                "name": "Ben Arous Governorate",
                "code": "13"
            },
            {
                "name": "Bizerte Governorate",
                "code": "23"
            },
            {
                "name": "Gabès Governorate",
                "code": "81"
            },
            {
                "name": "Gafsa Governorate",
                "code": "71"
            },
            {
                "name": "Jendouba Governorate",
                "code": "32"
            },
            {
                "name": "Kairouan Governorate",
                "code": "41"
            },
            {
                "name": "Kasserine Governorate",
                "code": "42"
            },
            {
                "name": "Kassrine",
                "code": "31"
            },
            {
                "name": "Kebili Governorate",
                "code": "73"
            },
            {
                "name": "Kef Governorate",
                "code": "33"
            },
            {
                "name": "Mahdia Governorate",
                "code": "53"
            },
            {
                "name": "Manouba Governorate",
                "code": "14"
            },
            {
                "name": "Medenine Governorate",
                "code": "82"
            },
            {
                "name": "Monastir Governorate",
                "code": "52"
            },
            {
                "name": "Sfax Governorate",
                "code": "61"
            },
            {
                "name": "Sidi Bouzid Governorate",
                "code": "43"
            },
            {
                "name": "Siliana Governorate",
                "code": "34"
            },
            {
                "name": "Sousse Governorate",
                "code": "51"
            },
            {
                "name": "Tataouine Governorate",
                "code": "83"
            },
            {
                "name": "Tozeur Governorate",
                "code": "72"
            },
            {
                "name": "Tunis Governorate",
                "code": "11"
            },
            {
                "name": "Zaghouan Governorate",
                "code": "22"
            }
        ],
        "TR": [
            {
                "name": "Adana Province",
                "code": "01"
            },
            {
                "name": "Adıyaman Province",
                "code": "02"
            },
            {
                "name": "Afyonkarahisar Province",
                "code": "03"
            },
            {
                "name": "Ağrı Province",
                "code": "04"
            },
            {
                "name": "Aksaray Province",
                "code": "68"
            },
            {
                "name": "Amasya Province",
                "code": "05"
            },
            {
                "name": "Ankara Province",
                "code": "06"
            },
            {
                "name": "Antalya Province",
                "code": "07"
            },
            {
                "name": "Ardahan Province",
                "code": "75"
            },
            {
                "name": "Artvin Province",
                "code": "08"
            },
            {
                "name": "Aydın Province",
                "code": "09"
            },
            {
                "name": "Balıkesir Province",
                "code": "10"
            },
            {
                "name": "Bartın Province",
                "code": "74"
            },
            {
                "name": "Batman Province",
                "code": "72"
            },
            {
                "name": "Bayburt Province",
                "code": "69"
            },
            {
                "name": "Bilecik Province",
                "code": "11"
            },
            {
                "name": "Bingöl Province",
                "code": "12"
            },
            {
                "name": "Bitlis Province",
                "code": "13"
            },
            {
                "name": "Bolu Province",
                "code": "14"
            },
            {
                "name": "Burdur Province",
                "code": "15"
            },
            {
                "name": "Bursa Province",
                "code": "16"
            },
            {
                "name": "Çanakkale Province",
                "code": "17"
            },
            {
                "name": "Çankırı Province",
                "code": "18"
            },
            {
                "name": "Çorum Province",
                "code": "19"
            },
            {
                "name": "Denizli Province",
                "code": "20"
            },
            {
                "name": "Diyarbakır Province",
                "code": "21"
            },
            {
                "name": "Düzce Province",
                "code": "81"
            },
            {
                "name": "Edirne Province",
                "code": "22"
            },
            {
                "name": "Elazığ Province",
                "code": "23"
            },
            {
                "name": "Erzincan Province",
                "code": "24"
            },
            {
                "name": "Erzurum Province",
                "code": "25"
            },
            {
                "name": "Eskişehir Province",
                "code": "26"
            },
            {
                "name": "Gaziantep Province",
                "code": "27"
            },
            {
                "name": "Giresun Province",
                "code": "28"
            },
            {
                "name": "Gümüşhane Province",
                "code": "29"
            },
            {
                "name": "Hakkâri Province",
                "code": "30"
            },
            {
                "name": "Hatay Province",
                "code": "31"
            },
            {
                "name": "Iğdır Province",
                "code": "76"
            },
            {
                "name": "Isparta Province",
                "code": "32"
            },
            {
                "name": "Istanbul Province",
                "code": "34"
            },
            {
                "name": "İzmir Province",
                "code": "35"
            },
            {
                "name": "Kahramanmaraş Province",
                "code": "46"
            },
            {
                "name": "Karabük Province",
                "code": "78"
            },
            {
                "name": "Karaman Province",
                "code": "70"
            },
            {
                "name": "Kars Province",
                "code": "36"
            },
            {
                "name": "Kastamonu Province",
                "code": "37"
            },
            {
                "name": "Kayseri Province",
                "code": "38"
            },
            {
                "name": "Kilis Province",
                "code": "79"
            },
            {
                "name": "Kırıkkale Province",
                "code": "71"
            },
            {
                "name": "Kırklareli Province",
                "code": "39"
            },
            {
                "name": "Kırşehir Province",
                "code": "40"
            },
            {
                "name": "Kocaeli Province",
                "code": "41"
            },
            {
                "name": "Konya Province",
                "code": "42"
            },
            {
                "name": "Kütahya Province",
                "code": "43"
            },
            {
                "name": "Malatya Province",
                "code": "44"
            },
            {
                "name": "Manisa Province",
                "code": "45"
            },
            {
                "name": "Mardin Province",
                "code": "47"
            },
            {
                "name": "Mersin Province",
                "code": "33"
            },
            {
                "name": "Muğla Province",
                "code": "48"
            },
            {
                "name": "Muş Province",
                "code": "49"
            },
            {
                "name": "Nevşehir Province",
                "code": "50"
            },
            {
                "name": "Niğde Province",
                "code": "51"
            },
            {
                "name": "Ordu Province",
                "code": "52"
            },
            {
                "name": "Osmaniye Province",
                "code": "80"
            },
            {
                "name": "Rize Province",
                "code": "53"
            },
            {
                "name": "Sakarya Province",
                "code": "54"
            },
            {
                "name": "Samsun Province",
                "code": "55"
            },
            {
                "name": "Şanlıurfa Province",
                "code": "63"
            },
            {
                "name": "Siirt Province",
                "code": "56"
            },
            {
                "name": "Sinop Province",
                "code": "57"
            },
            {
                "name": "Sivas Province",
                "code": "58"
            },
            {
                "name": "Şırnak Province",
                "code": "73"
            },
            {
                "name": "Tekirdağ Province",
                "code": "59"
            },
            {
                "name": "Tokat Province",
                "code": "60"
            },
            {
                "name": "Trabzon Province",
                "code": "61"
            },
            {
                "name": "Tunceli Province",
                "code": "62"
            },
            {
                "name": "Uşak Province",
                "code": "64"
            },
            {
                "name": "Van Province",
                "code": "65"
            },
            {
                "name": "Yalova Province",
                "code": "77"
            },
            {
                "name": "Yozgat Province",
                "code": "66"
            },
            {
                "name": "Zonguldak Province",
                "code": "67"
            }
        ],
        "TM": [
            {
                "name": "Ahal Region",
                "code": "A"
            },
            {
                "name": "Ashgabat",
                "code": "S"
            },
            {
                "name": "Balkan Region",
                "code": "B"
            },
            {
                "name": "Daşoguz Region",
                "code": "D"
            },
            {
                "name": "Lebap Region",
                "code": "L"
            },
            {
                "name": "Mary Region",
                "code": "M"
            }
        ],
        "TC": [
            {
                "name": "Turks and Caicos Islands",
                "code": "Turks and Caicos Islands"
            }
        ],
        "TV": [
            {
                "name": "Funafuti",
                "code": "FUN"
            },
            {
                "name": "Nanumanga",
                "code": "NMG"
            },
            {
                "name": "Nanumea",
                "code": "NMA"
            },
            {
                "name": "Niutao Island Council",
                "code": "NIT"
            },
            {
                "name": "Nui",
                "code": "NUI"
            },
            {
                "name": "Nukufetau",
                "code": "NKF"
            },
            {
                "name": "Nukulaelae",
                "code": "NKL"
            },
            {
                "name": "Vaitupu",
                "code": "VAI"
            }
        ],
        "UG": [
            {
                "name": "Abim District",
                "code": "314"
            },
            {
                "name": "Adjumani District",
                "code": "301"
            },
            {
                "name": "Agago District",
                "code": "322"
            },
            {
                "name": "Alebtong District",
                "code": "323"
            },
            {
                "name": "Amolatar District",
                "code": "315"
            },
            {
                "name": "Amudat District",
                "code": "324"
            },
            {
                "name": "Amuria District",
                "code": "216"
            },
            {
                "name": "Amuru District",
                "code": "316"
            },
            {
                "name": "Apac District",
                "code": "302"
            },
            {
                "name": "Arua District",
                "code": "303"
            },
            {
                "name": "Budaka District",
                "code": "217"
            },
            {
                "name": "Bududa District",
                "code": "218"
            },
            {
                "name": "Bugiri District",
                "code": "201"
            },
            {
                "name": "Buhweju District",
                "code": "420"
            },
            {
                "name": "Buikwe District",
                "code": "117"
            },
            {
                "name": "Bukedea District",
                "code": "219"
            },
            {
                "name": "Bukomansimbi District",
                "code": "118"
            },
            {
                "name": "Bukwo District",
                "code": "220"
            },
            {
                "name": "Bulambuli District",
                "code": "225"
            },
            {
                "name": "Buliisa District",
                "code": "416"
            },
            {
                "name": "Bundibugyo District",
                "code": "401"
            },
            {
                "name": "Bunyangabu District",
                "code": "430"
            },
            {
                "name": "Bushenyi District",
                "code": "402"
            },
            {
                "name": "Busia District",
                "code": "202"
            },
            {
                "name": "Butaleja District",
                "code": "221"
            },
            {
                "name": "Butambala District",
                "code": "119"
            },
            {
                "name": "Butebo District",
                "code": "233"
            },
            {
                "name": "Buvuma District",
                "code": "120"
            },
            {
                "name": "Buyende District",
                "code": "226"
            },
            {
                "name": "Central Region",
                "code": "C"
            },
            {
                "name": "Dokolo District",
                "code": "317"
            },
            {
                "name": "Eastern Region",
                "code": "E"
            },
            {
                "name": "Gomba District",
                "code": "121"
            },
            {
                "name": "Gulu District",
                "code": "304"
            },
            {
                "name": "Ibanda District",
                "code": "417"
            },
            {
                "name": "Iganga District",
                "code": "203"
            },
            {
                "name": "Isingiro District",
                "code": "418"
            },
            {
                "name": "Jinja District",
                "code": "204"
            },
            {
                "name": "Kaabong District",
                "code": "318"
            },
            {
                "name": "Kabale District",
                "code": "404"
            },
            {
                "name": "Kabarole District",
                "code": "405"
            },
            {
                "name": "Kaberamaido District",
                "code": "213"
            },
            {
                "name": "Kagadi District",
                "code": "427"
            },
            {
                "name": "Kakumiro District",
                "code": "428"
            },
            {
                "name": "Kalangala District",
                "code": "101"
            },
            {
                "name": "Kaliro District",
                "code": "222"
            },
            {
                "name": "Kalungu District",
                "code": "122"
            },
            {
                "name": "Kampala District",
                "code": "102"
            },
            {
                "name": "Kamuli District",
                "code": "205"
            },
            {
                "name": "Kamwenge District",
                "code": "413"
            },
            {
                "name": "Kanungu District",
                "code": "414"
            },
            {
                "name": "Kapchorwa District",
                "code": "206"
            },
            {
                "name": "Kasese District",
                "code": "406"
            },
            {
                "name": "Katakwi District",
                "code": "207"
            },
            {
                "name": "Kayunga District",
                "code": "112"
            },
            {
                "name": "Kibaale District",
                "code": "407"
            },
            {
                "name": "Kiboga District",
                "code": "103"
            },
            {
                "name": "Kibuku District",
                "code": "227"
            },
            {
                "name": "Kiruhura District",
                "code": "419"
            },
            {
                "name": "Kiryandongo District",
                "code": "421"
            },
            {
                "name": "Kisoro District",
                "code": "408"
            },
            {
                "name": "Kitgum District",
                "code": "305"
            },
            {
                "name": "Koboko District",
                "code": "319"
            },
            {
                "name": "Kole District",
                "code": "325"
            },
            {
                "name": "Kotido District",
                "code": "306"
            },
            {
                "name": "Kumi District",
                "code": "208"
            },
            {
                "name": "Kween District",
                "code": "228"
            },
            {
                "name": "Kyankwanzi District",
                "code": "123"
            },
            {
                "name": "Kyegegwa District",
                "code": "422"
            },
            {
                "name": "Kyenjojo District",
                "code": "415"
            },
            {
                "name": "Kyotera District",
                "code": "125"
            },
            {
                "name": "Lamwo District",
                "code": "326"
            },
            {
                "name": "Lira District",
                "code": "307"
            },
            {
                "name": "Luuka District",
                "code": "229"
            },
            {
                "name": "Luwero District",
                "code": "104"
            },
            {
                "name": "Lwengo District",
                "code": "124"
            },
            {
                "name": "Lyantonde District",
                "code": "114"
            },
            {
                "name": "Manafwa District",
                "code": "223"
            },
            {
                "name": "Maracha District",
                "code": "320"
            },
            {
                "name": "Masaka District",
                "code": "105"
            },
            {
                "name": "Masindi District",
                "code": "409"
            },
            {
                "name": "Mayuge District",
                "code": "214"
            },
            {
                "name": "Mbale District",
                "code": "209"
            },
            {
                "name": "Mbarara District",
                "code": "410"
            },
            {
                "name": "Mitooma District",
                "code": "423"
            },
            {
                "name": "Mityana District",
                "code": "115"
            },
            {
                "name": "Moroto District",
                "code": "308"
            },
            {
                "name": "Moyo District",
                "code": "309"
            },
            {
                "name": "Mpigi District",
                "code": "106"
            },
            {
                "name": "Mubende District",
                "code": "107"
            },
            {
                "name": "Mukono District",
                "code": "108"
            },
            {
                "name": "Nakapiripirit District",
                "code": "311"
            },
            {
                "name": "Nakaseke District",
                "code": "116"
            },
            {
                "name": "Nakasongola District",
                "code": "109"
            },
            {
                "name": "Namayingo District",
                "code": "230"
            },
            {
                "name": "Namisindwa District",
                "code": "234"
            },
            {
                "name": "Namutumba District",
                "code": "224"
            },
            {
                "name": "Napak District",
                "code": "327"
            },
            {
                "name": "Nebbi District",
                "code": "310"
            },
            {
                "name": "Ngora District",
                "code": "231"
            },
            {
                "name": "Northern Region",
                "code": "N"
            },
            {
                "name": "Ntoroko District",
                "code": "424"
            },
            {
                "name": "Ntungamo District",
                "code": "411"
            },
            {
                "name": "Nwoya District",
                "code": "328"
            },
            {
                "name": "Omoro District",
                "code": "331"
            },
            {
                "name": "Otuke District",
                "code": "329"
            },
            {
                "name": "Oyam District",
                "code": "321"
            },
            {
                "name": "Pader District",
                "code": "312"
            },
            {
                "name": "Pakwach District",
                "code": "332"
            },
            {
                "name": "Pallisa District",
                "code": "210"
            },
            {
                "name": "Rakai District",
                "code": "110"
            },
            {
                "name": "Rubanda District",
                "code": "429"
            },
            {
                "name": "Rubirizi District",
                "code": "425"
            },
            {
                "name": "Rukiga District",
                "code": "431"
            },
            {
                "name": "Rukungiri District",
                "code": "412"
            },
            {
                "name": "Sembabule District",
                "code": "111"
            },
            {
                "name": "Serere District",
                "code": "232"
            },
            {
                "name": "Sheema District",
                "code": "426"
            },
            {
                "name": "Sironko District",
                "code": "215"
            },
            {
                "name": "Soroti District",
                "code": "211"
            },
            {
                "name": "Tororo District",
                "code": "212"
            },
            {
                "name": "Wakiso District",
                "code": "113"
            },
            {
                "name": "Western Region",
                "code": "W"
            },
            {
                "name": "Yumbe District",
                "code": "313"
            },
            {
                "name": "Zombo District",
                "code": "330"
            }
        ],
        "UA": [
            {
                "name": "Autonomous Republic of Crimea",
                "code": "43"
            },
            {
                "name": "Cherkasy Oblast",
                "code": "71"
            },
            {
                "name": "Chernihiv Oblast",
                "code": "74"
            },
            {
                "name": "Chernivtsi Oblast",
                "code": "77"
            },
            {
                "name": "Dnipropetrovsk Oblast",
                "code": "12"
            },
            {
                "name": "Donetsk Oblast",
                "code": "14"
            },
            {
                "name": "Ivano-Frankivsk Oblast",
                "code": "26"
            },
            {
                "name": "Kharkiv Oblast",
                "code": "63"
            },
            {
                "name": "Kherson Oblast",
                "code": "65"
            },
            {
                "name": "Khmelnytsky Oblast",
                "code": "68"
            },
            {
                "name": "Kiev",
                "code": "30"
            },
            {
                "name": "Kirovohrad Oblast",
                "code": "35"
            },
            {
                "name": "Kyiv Oblast",
                "code": "32"
            },
            {
                "name": "Luhansk Oblast",
                "code": "09"
            },
            {
                "name": "Lviv Oblast",
                "code": "46"
            },
            {
                "name": "Mykolaiv Oblast",
                "code": "48"
            },
            {
                "name": "Odessa Oblast",
                "code": "51"
            },
            {
                "name": "Rivne Oblast",
                "code": "56"
            },
            {
                "name": "Sumy Oblast",
                "code": "59"
            },
            {
                "name": "Ternopil Oblast",
                "code": "61"
            },
            {
                "name": "Vinnytsia Oblast",
                "code": "05"
            },
            {
                "name": "Volyn Oblast",
                "code": "07"
            },
            {
                "name": "Zakarpattia Oblast",
                "code": "21"
            },
            {
                "name": "Zaporizhzhya Oblast",
                "code": "23"
            },
            {
                "name": "Zhytomyr Oblast",
                "code": "18"
            }
        ],
        "AE": [
            {
                "name": "Abu Dhabi",
                "code": "AZ"
            },
            {
                "name": "Ajman",
                "code": "AJ"
            },
            {
                "name": "Dubai",
                "code": "DU"
            },
            {
                "name": "Fujairah",
                "code": "FU"
            },
            {
                "name": "Ras al-Khaimah",
                "code": "RK"
            },
            {
                "name": "Sharjah",
                "code": "SH"
            },
            {
                "name": "Umm al-Quwain",
                "code": "UQ"
            }
        ],
        "GB": [
            {
                "name": "London, City of",
                "code": "LND"
            },
            {
                "name": "Aberdeen City",
                "code": "ABE"
            },
            {
                "name": "Aberdeenshire",
                "code": "ABD"
            },
            {
                "name": "Angus",
                "code": "ANS"
            },
            {
                "name": "Argyll and Bute",
                "code": "AGB"
            },
            {
                "name": "Clackmannanshire",
                "code": "CLK"
            },
            {
                "name": "Dumfries and Galloway",
                "code": "DGY"
            },
            {
                "name": "Dundee City",
                "code": "DND"
            },
            {
                "name": "East Ayrshire",
                "code": "EAY"
            },
            {
                "name": "East Dunbartonshire",
                "code": "EDU"
            },
            {
                "name": "East Lothian",
                "code": "ELN"
            },
            {
                "name": "East Renfrewshire",
                "code": "ERW"
            },
            {
                "name": "Edinburgh, City of",
                "code": "EDH"
            },
            {
                "name": "Eilean Siar",
                "code": "ELS"
            },
            {
                "name": "Falkirk",
                "code": "FAL"
            },
            {
                "name": "Fife",
                "code": "FIF"
            },
            {
                "name": "Glasgow City",
                "code": "GLG"
            },
            {
                "name": "Highland",
                "code": "HLD"
            },
            {
                "name": "Inverclyde",
                "code": "IVC"
            },
            {
                "name": "Midlothian",
                "code": "MLN"
            },
            {
                "name": "Moray",
                "code": "MRY"
            },
            {
                "name": "North Ayrshire",
                "code": "NAY"
            },
            {
                "name": "North Lanarkshire",
                "code": "NLK"
            },
            {
                "name": "Orkney Islands",
                "code": "ORK"
            },
            {
                "name": "Perth and Kinross",
                "code": "PKN"
            },
            {
                "name": "Renfrewshire",
                "code": "RFW"
            },
            {
                "name": "Scottish Borders",
                "code": "SCB"
            },
            {
                "name": "Shetland Islands",
                "code": "ZET"
            },
            {
                "name": "South Ayrshire",
                "code": "SAY"
            },
            {
                "name": "South Lanarkshire",
                "code": "SLK"
            },
            {
                "name": "Stirling",
                "code": "STG"
            },
            {
                "name": "West Dunbartonshire",
                "code": "WDU"
            },
            {
                "name": "West Lothian",
                "code": "WLN"
            },
            {
                "name": "Antrim and Newtownabbey",
                "code": "ANN"
            },
            {
                "name": "Ards and North Down",
                "code": "AND"
            },
            {
                "name": "Armagh City, Banbridge and Craigavon",
                "code": "ABC"
            },
            {
                "name": "Belfast City",
                "code": "BFS"
            },
            {
                "name": "Causeway Coast and Glens",
                "code": "CCG"
            },
            {
                "name": "Derry and Strabane",
                "code": "DRS"
            },
            {
                "name": "Fermanagh and Omagh",
                "code": "FMO"
            },
            {
                "name": "Lisburn and Castlereagh",
                "code": "LBC"
            },
            {
                "name": "Mid and East Antrim",
                "code": "MEA"
            },
            {
                "name": "Mid-Ulster",
                "code": "MUL"
            },
            {
                "name": "Newry, Mourne and Down",
                "code": "NMD"
            },
            {
                "name": "Barking and Dagenham",
                "code": "BDG"
            },
            {
                "name": "Barnet",
                "code": "BNE"
            },
            {
                "name": "Bexley",
                "code": "BEX"
            },
            {
                "name": "Brent",
                "code": "BEN"
            },
            {
                "name": "Bromley",
                "code": "BRY"
            },
            {
                "name": "Camden",
                "code": "CMD"
            },
            {
                "name": "Croydon",
                "code": "CRY"
            },
            {
                "name": "Ealing",
                "code": "EAL"
            },
            {
                "name": "Enfield",
                "code": "ENF"
            },
            {
                "name": "Greenwich",
                "code": "GRE"
            },
            {
                "name": "Hackney",
                "code": "HCK"
            },
            {
                "name": "Hammersmith and Fulham",
                "code": "HMF"
            },
            {
                "name": "Haringey",
                "code": "HRY"
            },
            {
                "name": "Harrow",
                "code": "HRW"
            },
            {
                "name": "Havering",
                "code": "HAV"
            },
            {
                "name": "Hillingdon",
                "code": "HIL"
            },
            {
                "name": "Hounslow",
                "code": "HNS"
            },
            {
                "name": "Islington",
                "code": "ISL"
            },
            {
                "name": "Kensington and Chelsea",
                "code": "KEC"
            },
            {
                "name": "Kingston upon Thames",
                "code": "KTT"
            },
            {
                "name": "Lambeth",
                "code": "LBH"
            },
            {
                "name": "Lewisham",
                "code": "LEW"
            },
            {
                "name": "Merton",
                "code": "MRT"
            },
            {
                "name": "Newham",
                "code": "NWM"
            },
            {
                "name": "Redbridge",
                "code": "RDB"
            },
            {
                "name": "Richmond upon Thames",
                "code": "RIC"
            },
            {
                "name": "Southwark",
                "code": "SWK"
            },
            {
                "name": "Sutton",
                "code": "STN"
            },
            {
                "name": "Tower Hamlets",
                "code": "TWH"
            },
            {
                "name": "Waltham Forest",
                "code": "WFT"
            },
            {
                "name": "Wandsworth",
                "code": "WND"
            },
            {
                "name": "Westminster",
                "code": "WSM"
            },
            {
                "name": "Barnsley",
                "code": "BNS"
            },
            {
                "name": "Birmingham",
                "code": "BIR"
            },
            {
                "name": "Bolton",
                "code": "BOL"
            },
            {
                "name": "Bradford",
                "code": "BRD"
            },
            {
                "name": "Bury",
                "code": "BUR"
            },
            {
                "name": "Calderdale",
                "code": "CLD"
            },
            {
                "name": "Coventry",
                "code": "COV"
            },
            {
                "name": "Doncaster",
                "code": "DNC"
            },
            {
                "name": "Dudley",
                "code": "DUD"
            },
            {
                "name": "Gateshead",
                "code": "GAT"
            },
            {
                "name": "Kirklees",
                "code": "KIR"
            },
            {
                "name": "Knowsley",
                "code": "KWL"
            },
            {
                "name": "Leeds",
                "code": "LDS"
            },
            {
                "name": "Liverpool",
                "code": "LIV"
            },
            {
                "name": "Manchester",
                "code": "MAN"
            },
            {
                "name": "Newcastle upon Tyne",
                "code": "NET"
            },
            {
                "name": "North Tyneside",
                "code": "NTY"
            },
            {
                "name": "Oldham",
                "code": "OLD"
            },
            {
                "name": "Rochdale",
                "code": "RCH"
            },
            {
                "name": "Rotherham",
                "code": "ROT"
            },
            {
                "name": "Salford",
                "code": "SLF"
            },
            {
                "name": "Sandwell",
                "code": "SAW"
            },
            {
                "name": "Sefton",
                "code": "SFT"
            },
            {
                "name": "Sheffield",
                "code": "SHF"
            },
            {
                "name": "Solihull",
                "code": "SOL"
            },
            {
                "name": "South Tyneside",
                "code": "STY"
            },
            {
                "name": "St. Helens",
                "code": "SHN"
            },
            {
                "name": "Stockport",
                "code": "SKP"
            },
            {
                "name": "Sunderland",
                "code": "SND"
            },
            {
                "name": "Tameside",
                "code": "TAM"
            },
            {
                "name": "Trafford",
                "code": "TRF"
            },
            {
                "name": "Wakefield",
                "code": "WKF"
            },
            {
                "name": "Walsall",
                "code": "WLL"
            },
            {
                "name": "Wigan",
                "code": "WGN"
            },
            {
                "name": "Wirral",
                "code": "WRL"
            },
            {
                "name": "Wolverhampton",
                "code": "WLV"
            },
            {
                "name": "Buckinghamshire",
                "code": "BKM"
            },
            {
                "name": "Cambridgeshire",
                "code": "CAM"
            },
            {
                "name": "Cumbria",
                "code": "CMA"
            },
            {
                "name": "Derbyshire",
                "code": "DBY"
            },
            {
                "name": "Devon",
                "code": "DEV"
            },
            {
                "name": "Dorset",
                "code": "DOR"
            },
            {
                "name": "East Sussex",
                "code": "ESX"
            },
            {
                "name": "Essex",
                "code": "ESS"
            },
            {
                "name": "Gloucestershire",
                "code": "GLS"
            },
            {
                "name": "Hampshire",
                "code": "HAM"
            },
            {
                "name": "Hertfordshire",
                "code": "HRT"
            },
            {
                "name": "Kent",
                "code": "KEN"
            },
            {
                "name": "Lancashire",
                "code": "LAN"
            },
            {
                "name": "Leicestershire",
                "code": "LEC"
            },
            {
                "name": "Lincolnshire",
                "code": "LIN"
            },
            {
                "name": "Norfolk",
                "code": "NFK"
            },
            {
                "name": "North Yorkshire",
                "code": "NYK"
            },
            {
                "name": "Northamptonshire",
                "code": "NTH"
            },
            {
                "name": "Nottinghamshire",
                "code": "NTT"
            },
            {
                "name": "Oxfordshire",
                "code": "OXF"
            },
            {
                "name": "Somerset",
                "code": "SOM"
            },
            {
                "name": "Staffordshire",
                "code": "STS"
            },
            {
                "name": "Suffolk",
                "code": "SFK"
            },
            {
                "name": "Surrey",
                "code": "SRY"
            },
            {
                "name": "Warwickshire",
                "code": "WAR"
            },
            {
                "name": "West Sussex",
                "code": "WSX"
            },
            {
                "name": "Worcestershire",
                "code": "WOR"
            },
            {
                "name": "Bath and North East Somerset",
                "code": "BAS"
            },
            {
                "name": "Bedford",
                "code": "BDF"
            },
            {
                "name": "Blackburn with Darwen",
                "code": "BBD"
            },
            {
                "name": "Blackpool",
                "code": "BPL"
            },
            {
                "name": "Blaenau Gwent",
                "code": "BGW"
            },
            {
                "name": "Bournemouth, Christchurch and Poole",
                "code": "BCP"
            },
            {
                "name": "Bracknell Forest",
                "code": "BRC"
            },
            {
                "name": "Bridgend [Pen-y-bont ar Ogwr GB-POG]",
                "code": "BGE"
            },
            {
                "name": "Brighton and Hove",
                "code": "BNH"
            },
            {
                "name": "Bristol, City of",
                "code": "BST"
            },
            {
                "name": "Caerphilly [Caerffili GB-CAF]",
                "code": "CAY"
            },
            {
                "name": "Cardiff [Caerdydd GB-CRD]",
                "code": "CRF"
            },
            {
                "name": "Carmarthenshire [Sir Gaerfyrddin GB-GFY]",
                "code": "CMN"
            },
            {
                "name": "Central Bedfordshire",
                "code": "CBF"
            },
            {
                "name": "Ceredigion [Sir Ceredigion]",
                "code": "CGN"
            },
            {
                "name": "Cheshire East",
                "code": "CHE"
            },
            {
                "name": "Cheshire West and Chester",
                "code": "CHW"
            },
            {
                "name": "Conwy",
                "code": "CWY"
            },
            {
                "name": "Cornwall",
                "code": "CON"
            },
            {
                "name": "Darlington",
                "code": "DAL"
            },
            {
                "name": "Denbighshire [Sir Ddinbych GB-DDB]",
                "code": "DEN"
            },
            {
                "name": "Derby",
                "code": "DER"
            },
            {
                "name": "Durham, County",
                "code": "DUR"
            },
            {
                "name": "East Riding of Yorkshire",
                "code": "ERY"
            },
            {
                "name": "Flintshire [Sir y Fflint GB-FFL]",
                "code": "FLN"
            },
            {
                "name": "Gwynedd",
                "code": "GWN"
            },
            {
                "name": "Halton",
                "code": "HAL"
            },
            {
                "name": "Hartlepool",
                "code": "HPL"
            },
            {
                "name": "Herefordshire",
                "code": "HEF"
            },
            {
                "name": "Isle of Anglesey [Sir Ynys Môn GB-YNM]",
                "code": "AGY"
            },
            {
                "name": "Isle of Wight",
                "code": "IOW"
            },
            {
                "name": "Isles of Scilly",
                "code": "IOS"
            },
            {
                "name": "Kingston upon Hull",
                "code": "KHL"
            },
            {
                "name": "Leicester",
                "code": "LCE"
            },
            {
                "name": "Luton",
                "code": "LUT"
            },
            {
                "name": "Medway",
                "code": "MDW"
            },
            {
                "name": "Merthyr Tydfil [Merthyr Tudful GB-MTU]",
                "code": "MTY"
            },
            {
                "name": "Middlesbrough",
                "code": "MDB"
            },
            {
                "name": "Milton Keynes",
                "code": "MIK"
            },
            {
                "name": "Monmouthshire [Sir Fynwy GB-FYN]",
                "code": "MON"
            },
            {
                "name": "Neath Port Talbot [Castell-nedd Port Talbot GB-CTL]",
                "code": "NTL"
            },
            {
                "name": "Newport [Casnewydd GB-CNW]",
                "code": "NWP"
            },
            {
                "name": "North East Lincolnshire",
                "code": "NEL"
            },
            {
                "name": "North Lincolnshire",
                "code": "NLN"
            },
            {
                "name": "North Somerset",
                "code": "NSM"
            },
            {
                "name": "Northumberland",
                "code": "NBL"
            },
            {
                "name": "Nottingham",
                "code": "NGM"
            },
            {
                "name": "Pembrokeshire [Sir Benfro GB-BNF]",
                "code": "PEM"
            },
            {
                "name": "Peterborough",
                "code": "PTE"
            },
            {
                "name": "Plymouth",
                "code": "PLY"
            },
            {
                "name": "Portsmouth",
                "code": "POR"
            },
            {
                "name": "Powys",
                "code": "POW"
            },
            {
                "name": "Reading",
                "code": "RDG"
            },
            {
                "name": "Redcar and Cleveland",
                "code": "RCC"
            },
            {
                "name": "Rhondda Cynon Taff [Rhondda CynonTaf]",
                "code": "RCT"
            },
            {
                "name": "Rutland",
                "code": "RUT"
            },
            {
                "name": "Shropshire",
                "code": "SHR"
            },
            {
                "name": "Slough",
                "code": "SLG"
            },
            {
                "name": "South Gloucestershire",
                "code": "SGC"
            },
            {
                "name": "Southampton",
                "code": "STH"
            },
            {
                "name": "Southend-on-Sea",
                "code": "SOS"
            },
            {
                "name": "Stockton-on-Tees",
                "code": "STT"
            },
            {
                "name": "Stoke-on-Trent",
                "code": "STE"
            },
            {
                "name": "Swansea [Abertawe GB-ATA]",
                "code": "SWA"
            },
            {
                "name": "Swindon",
                "code": "SWD"
            },
            {
                "name": "Telford and Wrekin",
                "code": "TFW"
            },
            {
                "name": "Thurrock",
                "code": "THR"
            },
            {
                "name": "Torbay",
                "code": "TOB"
            },
            {
                "name": "Torfaen [Tor-faen]",
                "code": "TOF"
            },
            {
                "name": "Vale of Glamorgan, The [Bro Morgannwg GB-BMG]",
                "code": "VGL"
            },
            {
                "name": "Warrington",
                "code": "WRT"
            },
            {
                "name": "West Berkshire",
                "code": "WBK"
            },
            {
                "name": "Wiltshire",
                "code": "WIL"
            },
            {
                "name": "Windsor and Maidenhead",
                "code": "WNM"
            },
            {
                "name": "Wokingham",
                "code": "WOK"
            },
            {
                "name": "Wrexham [Wrecsam GB-WRC]",
                "code": "WRX"
            },
            {
                "name": "York",
                "code": "YOR"
            }
        ],
        "US": [
            {
                "name": "Alabama",
                "code": "AL"
            },
            {
                "name": "Alaska",
                "code": "AK"
            },
            {
                "name": "American Samoa",
                "code": "AS"
            },
            {
                "name": "Arizona",
                "code": "AZ"
            },
            {
                "name": "Arkansas",
                "code": "AR"
            },
            {
                "name": "Baker Island",
                "code": "UM-81"
            },
            {
                "name": "California",
                "code": "CA"
            },
            {
                "name": "Colorado",
                "code": "CO"
            },
            {
                "name": "Connecticut",
                "code": "CT"
            },
            {
                "name": "Delaware",
                "code": "DE"
            },
            {
                "name": "District of Columbia",
                "code": "DC"
            },
            {
                "name": "Florida",
                "code": "FL"
            },
            {
                "name": "Georgia",
                "code": "GA"
            },
            {
                "name": "Guam",
                "code": "GU"
            },
            {
                "name": "Hawaii",
                "code": "HI"
            },
            {
                "name": "Howland Island",
                "code": "UM-84"
            },
            {
                "name": "Idaho",
                "code": "ID"
            },
            {
                "name": "Illinois",
                "code": "IL"
            },
            {
                "name": "Indiana",
                "code": "IN"
            },
            {
                "name": "Iowa",
                "code": "IA"
            },
            {
                "name": "Jarvis Island",
                "code": "UM-86"
            },
            {
                "name": "Johnston Atoll",
                "code": "UM-67"
            },
            {
                "name": "Kansas",
                "code": "KS"
            },
            {
                "name": "Kentucky",
                "code": "KY"
            },
            {
                "name": "Kingman Reef",
                "code": "UM-89"
            },
            {
                "name": "Louisiana",
                "code": "LA"
            },
            {
                "name": "Maine",
                "code": "ME"
            },
            {
                "name": "Maryland",
                "code": "MD"
            },
            {
                "name": "Massachusetts",
                "code": "MA"
            },
            {
                "name": "Michigan",
                "code": "MI"
            },
            {
                "name": "Midway Atoll",
                "code": "UM-71"
            },
            {
                "name": "Minnesota",
                "code": "MN"
            },
            {
                "name": "Mississippi",
                "code": "MS"
            },
            {
                "name": "Missouri",
                "code": "MO"
            },
            {
                "name": "Montana",
                "code": "MT"
            },
            {
                "name": "Navassa Island",
                "code": "UM-76"
            },
            {
                "name": "Nebraska",
                "code": "NE"
            },
            {
                "name": "Nevada",
                "code": "NV"
            },
            {
                "name": "New Hampshire",
                "code": "NH"
            },
            {
                "name": "New Jersey",
                "code": "NJ"
            },
            {
                "name": "New Mexico",
                "code": "NM"
            },
            {
                "name": "New York",
                "code": "NY"
            },
            {
                "name": "North Carolina",
                "code": "NC"
            },
            {
                "name": "North Dakota",
                "code": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "code": "MP"
            },
            {
                "name": "Ohio",
                "code": "OH"
            },
            {
                "name": "Oklahoma",
                "code": "OK"
            },
            {
                "name": "Oregon",
                "code": "OR"
            },
            {
                "name": "Palmyra Atoll",
                "code": "UM-95"
            },
            {
                "name": "Pennsylvania",
                "code": "PA"
            },
            {
                "name": "Puerto Rico",
                "code": "PR"
            },
            {
                "name": "Rhode Island",
                "code": "RI"
            },
            {
                "name": "South Carolina",
                "code": "SC"
            },
            {
                "name": "South Dakota",
                "code": "SD"
            },
            {
                "name": "Tennessee",
                "code": "TN"
            },
            {
                "name": "Texas",
                "code": "TX"
            },
            {
                "name": "United States Minor Outlying Islands",
                "code": "UM"
            },
            {
                "name": "United States Virgin Islands",
                "code": "VI"
            },
            {
                "name": "Utah",
                "code": "UT"
            },
            {
                "name": "Vermont",
                "code": "VT"
            },
            {
                "name": "Virginia",
                "code": "VA"
            },
            {
                "name": "Wake Island",
                "code": "UM-79"
            },
            {
                "name": "Washington",
                "code": "WA"
            },
            {
                "name": "West Virginia",
                "code": "WV"
            },
            {
                "name": "Wisconsin",
                "code": "WI"
            },
            {
                "name": "Wyoming",
                "code": "WY"
            }
        ],
        "UM": [
            {
                "name": "U.S. Outlying Islands",
                "code": "U.S. Outlying Islands"
            }
        ],
        "UY": [
            {
                "name": "Artigas Department",
                "code": "AR"
            },
            {
                "name": "Canelones Department",
                "code": "CA"
            },
            {
                "name": "Cerro Largo Department",
                "code": "CL"
            },
            {
                "name": "Colonia Department",
                "code": "CO"
            },
            {
                "name": "Durazno Department",
                "code": "DU"
            },
            {
                "name": "Flores Department",
                "code": "FS"
            },
            {
                "name": "Florida Department",
                "code": "FD"
            },
            {
                "name": "Lavalleja Department",
                "code": "LA"
            },
            {
                "name": "Maldonado Department",
                "code": "MA"
            },
            {
                "name": "Montevideo Department",
                "code": "MO"
            },
            {
                "name": "Paysandú Department",
                "code": "PA"
            },
            {
                "name": "Río Negro Department",
                "code": "RN"
            },
            {
                "name": "Rivera Department",
                "code": "RV"
            },
            {
                "name": "Rocha Department",
                "code": "RO"
            },
            {
                "name": "Salto Department",
                "code": "SA"
            },
            {
                "name": "San José Department",
                "code": "SJ"
            },
            {
                "name": "Soriano Department",
                "code": "SO"
            },
            {
                "name": "Tacuarembó Department",
                "code": "TA"
            },
            {
                "name": "Treinta y Tres Department",
                "code": "TT"
            }
        ],
        "UZ": [
            {
                "name": "Andijan Region",
                "code": "AN"
            },
            {
                "name": "Bukhara Region",
                "code": "BU"
            },
            {
                "name": "Fergana Region",
                "code": "FA"
            },
            {
                "name": "Jizzakh Region",
                "code": "JI"
            },
            {
                "name": "Karakalpakstan",
                "code": "QR"
            },
            {
                "name": "Namangan Region",
                "code": "NG"
            },
            {
                "name": "Navoiy Region",
                "code": "NW"
            },
            {
                "name": "Qashqadaryo Region",
                "code": "QA"
            },
            {
                "name": "Samarqand Region",
                "code": "SA"
            },
            {
                "name": "Sirdaryo Region",
                "code": "SI"
            },
            {
                "name": "Surxondaryo Region",
                "code": "SU"
            },
            {
                "name": "Tashkent",
                "code": "TK"
            },
            {
                "name": "Tashkent Region",
                "code": "TO"
            },
            {
                "name": "Xorazm Region",
                "code": "XO"
            }
        ],
        "VU": [
            {
                "name": "Malampa",
                "code": "MAP"
            },
            {
                "name": "Penama",
                "code": "PAM"
            },
            {
                "name": "Sanma",
                "code": "SAM"
            },
            {
                "name": "Shefa",
                "code": "SEE"
            },
            {
                "name": "Tafea",
                "code": "TAE"
            },
            {
                "name": "Torba",
                "code": "TOB"
            }
        ],
        "VE": [
            {
                "name": "Amazonas",
                "code": "Z"
            },
            {
                "name": "Anzoátegui",
                "code": "B"
            },
            {
                "name": "Apure",
                "code": "C"
            },
            {
                "name": "Aragua",
                "code": "D"
            },
            {
                "name": "Barinas",
                "code": "E"
            },
            {
                "name": "Bolívar",
                "code": "F"
            },
            {
                "name": "Capital District",
                "code": "A"
            },
            {
                "name": "Carabobo",
                "code": "G"
            },
            {
                "name": "Cojedes",
                "code": "H"
            },
            {
                "name": "Delta Amacuro",
                "code": "Y"
            },
            {
                "name": "Falcón",
                "code": "I"
            },
            {
                "name": "Federal Dependencies of Venezuela",
                "code": "W"
            },
            {
                "name": "Guárico",
                "code": "J"
            },
            {
                "name": "Lara",
                "code": "K"
            },
            {
                "name": "Mérida",
                "code": "L"
            },
            {
                "name": "Miranda",
                "code": "M"
            },
            {
                "name": "Monagas",
                "code": "N"
            },
            {
                "name": "Nueva Esparta",
                "code": "O"
            },
            {
                "name": "Portuguesa",
                "code": "P"
            },
            {
                "name": "Sucre",
                "code": "R"
            },
            {
                "name": "Táchira",
                "code": "S"
            },
            {
                "name": "Trujillo",
                "code": "T"
            },
            {
                "name": "Vargas",
                "code": "X"
            },
            {
                "name": "Yaracuy",
                "code": "U"
            },
            {
                "name": "Zulia",
                "code": "V"
            }
        ],
        "VN": [
            {
                "name": "An Giang",
                "code": "44"
            },
            {
                "name": "Bà Rịa-Vũng Tàu",
                "code": "43"
            },
            {
                "name": "Bắc Giang",
                "code": "54"
            },
            {
                "name": "Bắc Kạn",
                "code": "53"
            },
            {
                "name": "Bạc Liêu",
                "code": "55"
            },
            {
                "name": "Bắc Ninh",
                "code": "56"
            },
            {
                "name": "Bến Tre",
                "code": "50"
            },
            {
                "name": "Bình Dương",
                "code": "57"
            },
            {
                "name": "Bình Định",
                "code": "31"
            },
            {
                "name": "Bình Phước",
                "code": "58"
            },
            {
                "name": "Bình Thuận",
                "code": "40"
            },
            {
                "name": "Cà Mau",
                "code": "59"
            },
            {
                "name": "Cao Bằng",
                "code": "04"
            },
            {
                "name": "Da Nang",
                "code": "DN"
            },
            {
                "name": "Đắk Lắk",
                "code": "33"
            },
            {
                "name": "Đắk Nông",
                "code": "72"
            },
            {
                "name": "Điện Biên",
                "code": "71"
            },
            {
                "name": "Đồng Nai",
                "code": "39"
            },
            {
                "name": "Đồng Tháp",
                "code": "45"
            },
            {
                "name": "Gia Lai",
                "code": "30"
            },
            {
                "name": "Hà Giang",
                "code": "03"
            },
            {
                "name": "Hà Nam",
                "code": "63"
            },
            {
                "name": "Hà Tây",
                "code": "15"
            },
            {
                "name": "Hà Tĩnh",
                "code": "23"
            },
            {
                "name": "Hải Dương",
                "code": "61"
            },
            {
                "name": "Haiphong",
                "code": "HP"
            },
            {
                "name": "Hanoi",
                "code": "HN"
            },
            {
                "name": "Hậu Giang",
                "code": "73"
            },
            {
                "name": "Ho Chi Minh City",
                "code": "SG"
            },
            {
                "name": "Hòa Bình",
                "code": "14"
            },
            {
                "name": "Hưng Yên",
                "code": "66"
            },
            {
                "name": "Khánh Hòa",
                "code": "34"
            },
            {
                "name": "Kiên Giang",
                "code": "47"
            },
            {
                "name": "Kon Tum",
                "code": "28"
            },
            {
                "name": "Lai Châu",
                "code": "01"
            },
            {
                "name": "Lâm Đồng",
                "code": "35"
            },
            {
                "name": "Lạng Sơn",
                "code": "09"
            },
            {
                "name": "Lào Cai",
                "code": "02"
            },
            {
                "name": "Long An",
                "code": "41"
            },
            {
                "name": "Nam Định",
                "code": "67"
            },
            {
                "name": "Nghệ An",
                "code": "22"
            },
            {
                "name": "Ninh Bình",
                "code": "18"
            },
            {
                "name": "Ninh Thuận",
                "code": "36"
            },
            {
                "name": "Phú Thọ",
                "code": "68"
            },
            {
                "name": "Phú Yên",
                "code": "32"
            },
            {
                "name": "Quảng Bình",
                "code": "24"
            },
            {
                "name": "Quảng Nam",
                "code": "27"
            },
            {
                "name": "Quảng Ngãi",
                "code": "29"
            },
            {
                "name": "Quảng Ninh",
                "code": "13"
            },
            {
                "name": "Quảng Trị",
                "code": "25"
            },
            {
                "name": "Sóc Trăng",
                "code": "52"
            },
            {
                "name": "Sơn La",
                "code": "05"
            },
            {
                "name": "Tây Ninh",
                "code": "37"
            },
            {
                "name": "Thái Bình",
                "code": "20"
            },
            {
                "name": "Thái Nguyên",
                "code": "69"
            },
            {
                "name": "Thanh Hóa",
                "code": "21"
            },
            {
                "name": "Thừa Thiên-Huế",
                "code": "26"
            },
            {
                "name": "Tiền Giang",
                "code": "46"
            },
            {
                "name": "Trà Vinh",
                "code": "51"
            },
            {
                "name": "Tuyên Quang",
                "code": "07"
            },
            {
                "name": "Vĩnh Long",
                "code": "49"
            },
            {
                "name": "Vĩnh Phúc",
                "code": "70"
            },
            {
                "name": "Yên Bái",
                "code": "06"
            }
        ],
        "VG": [
            {
                "name": "Virgin Islands, British",
                "code": "Virgin Islands, British"
            }
        ],
        "VI": [
            {
                "name": "Virgin Islands, U.S",
                "code": "Virgin Islands, U.S"
            }
        ],
        "WF": [
            {
                "name": "Wallis and Futuna",
                "code": "Wallis and Futuna"
            }
        ],
        "EH": [
            {
                "name": "Western Sahara",
                "code": "Western Sahara"
            }
        ],
        "YE": [
            {
                "name": "'Adan Governorate",
                "code": "AD"
            },
            {
                "name": "'Amran Governorate",
                "code": "AM"
            },
            {
                "name": "Abyan Governorate",
                "code": "AB"
            },
            {
                "name": "Al Bayda' Governorate",
                "code": "BA"
            },
            {
                "name": "Al Hudaydah Governorate",
                "code": "HU"
            },
            {
                "name": "Al Jawf Governorate",
                "code": "JA"
            },
            {
                "name": "Al Mahrah Governorate",
                "code": "MR"
            },
            {
                "name": "Al Mahwit Governorate",
                "code": "MW"
            },
            {
                "name": "Dhamar Governorate",
                "code": "DH"
            },
            {
                "name": "Hadhramaut Governorate",
                "code": "HD"
            },
            {
                "name": "Hajjah Governorate",
                "code": "HJ"
            },
            {
                "name": "Ibb Governorate",
                "code": "IB"
            },
            {
                "name": "Lahij Governorate",
                "code": "LA"
            },
            {
                "name": "Ma'rib Governorate",
                "code": "MA"
            },
            {
                "name": "Raymah Governorate",
                "code": "RA"
            },
            {
                "name": "Saada Governorate",
                "code": "SD"
            },
            {
                "name": "Sana'a",
                "code": "SA"
            },
            {
                "name": "Sana'a Governorate",
                "code": "SN"
            },
            {
                "name": "Shabwah Governorate",
                "code": "SH"
            },
            {
                "name": "Socotra Governorate",
                "code": "SU"
            },
            {
                "name": "Ta'izz Governorate",
                "code": "TA"
            }
        ],
        "ZM": [
            {
                "name": "Central Province",
                "code": "02"
            },
            {
                "name": "Copperbelt Province",
                "code": "08"
            },
            {
                "name": "Eastern Province",
                "code": "03"
            },
            {
                "name": "Luapula Province",
                "code": "04"
            },
            {
                "name": "Lusaka Province",
                "code": "09"
            },
            {
                "name": "Muchinga Province",
                "code": "10"
            },
            {
                "name": "Northern Province",
                "code": "05"
            },
            {
                "name": "Northwestern Province",
                "code": "06"
            },
            {
                "name": "Southern Province",
                "code": "07"
            },
            {
                "name": "Western Province",
                "code": "01"
            }
        ],
        "ZW": [
            {
                "name": "Bulawayo Province",
                "code": "BU"
            },
            {
                "name": "Harare Province",
                "code": "HA"
            },
            {
                "name": "Manicaland",
                "code": "MA"
            },
            {
                "name": "Mashonaland Central Province",
                "code": "MC"
            },
            {
                "name": "Mashonaland East Province",
                "code": "ME"
            },
            {
                "name": "Mashonaland West Province",
                "code": "MW"
            },
            {
                "name": "Masvingo Province",
                "code": "MV"
            },
            {
                "name": "Matabeleland North Province",
                "code": "MN"
            },
            {
                "name": "Matabeleland South Province",
                "code": "MS"
            },
            {
                "name": "Midlands Province",
                "code": "MI"
            }
        ]
    }
};

// Function to populate countries in the dropdown
function populateCountries() {
    const countrySelect = document.getElementById('country');
    const countries = country_and_states.country;

    for (const code in countries) {
        if (countries.hasOwnProperty(code)) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = countries[code];
            countrySelect.appendChild(option);
        }
    }
}

// Function to populate states based on selected country
function populateStates(countryCode) {
    const stateSelect = document.getElementById('state');
    const states = country_and_states.states[countryCode] || [];

    // Clear the existing states
    stateSelect.innerHTML = '<option value="">Select State</option>';

    // Add new state options
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.code;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });
}

// Event listener for country change
document.getElementById('country').addEventListener('change', (e) => {
    const selectedCountry = e.target.value;
    populateStates(selectedCountry);
});

// Initialize the country dropdown on page load
window.onload = function() {
    populateCountries();
};
