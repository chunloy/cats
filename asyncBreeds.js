//---------------ORIGINAL FUNCTION BEFORE EXPORT-----------------

// //import filesystem
// const fs = require('fs');

// const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
//   console.log('breedDetailsFromFile: Calling readFile...');

//   //parameters path, encoding, callback (error, data from file)
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data");

//     //ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return functionToRunWhenThingsAreDone(data); //return to printOutCatBreed for printing
//   });

//   //ISSUE:  Attempting to return data out here will also not work.
//   //        Currently not returning anything from Headers, so breedDetailsFromFile function returns undefined.

// };

// //THE FIX: Implement a callback to pass data back from readFiles callback function to breedDetails function
// const printOutCatBreed = breed => {
//   console.log('Return Value:', breed);
// }

// //we try to get the return value, but it's undefined
// //use callback function in breedDetailsFromFile
// breedDetailsFromFile('bombay', printOutCatBreed);

// //export module
// module.exports = breedDetailsFromFile;

// //https://web.compass.lighthouselabs.ca/days/w02d2/activities/868

//---------------ORIGINAL FUNCTION BEFORE EXPORT-----------------

//import filesystem
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');

  //parameters path, encoding, callback (error, data from file)
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data");

    //return undefined to callback if error
    if (error) return functionToRunWhenThingsAreDone(undefined);
    //ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    return functionToRunWhenThingsAreDone(data); //return data to callback

  });

  //ISSUE:  Attempting to return data out here will also not work.
  //        Currently not returning anything from Headers, so breedDetailsFromFile function returns undefined.

};

//export module
module.exports = breedDetailsFromFile;

//https://web.compass.lighthouselabs.ca/days/w02d2/activities/868