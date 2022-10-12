import * as csv from "csvtojson";
import { writeFileSync, readFileSync } from 'fs';
const filePath = 'C:\\Users\\DELL\\Downloads\\MuggleSE-master_1\\src\\backend\\test.csv'



/**
 *
 * @param {string} vStr whatever the user is searching for
 * @param {Array} results
 * 
 */

 const results=[{}];
 
// Convert a csv file with csvtojson
function getCsvData(vStr){
 const tt= csv()
  .fromFile(filePath)
  .then(function(jsonArrayObj){ 
    jsonArrayObj.map((searchObject) => {
      if(searchObject.title.indexOf(vStr) !== -1){
      // console.log(searchObject); 
      results.push({title: searchObject.title, path: searchObject.path, description: searchObject.description});
      }
      
      return results;
      })
   })
  }
   export default getCsvData;





//Use async / await


