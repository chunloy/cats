// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => { //(done) is a callback that needs to be called after reading is done
    breedDetailsFromFile('bombay', (bombay) => {

      //(bombay) is the name of the callback mapped to functionToRunWhenThingsAreDone() in asyncBreeds.js
      //here, we don't want to print the contents from the file read, just want to compare

      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(bombay, expectedDesc);
      done(); //call done() inside 'it' at the end of operations
    });
  });

  it('provides, via callback, undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(desc, undefined);
      done(desc);
    });
  });
});