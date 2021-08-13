// console.log('Hi There')
// const promise = $.ajax({ url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json" });
// promise.then(
//     // if successful
//     (data) => {
//         for (let index = 0; index < data.length; index++) {
//             const borough = data[index].borough;
//             console.log(borough)
//         }
//     }
// )
const APP_TOKEN = "3nMPlHyMofEykN2kh1YXuq6vz";
const NYPD_AGENCY = "New York City Police Department";
const BOROUGHS = ["BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND", "BRONX"];
const NUM_OF_BOROUGH_DIVS = BOROUGHS.length
let backgroundColors = ["green", "blue", "red", "orange", "purple"];
const MY_URL = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?";
const DEFAULT_LIMIT = 10;

    