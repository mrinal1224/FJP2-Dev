const request = require("request");
const cheerio = require("cheerio");

console.log("Before");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    handleHtml(html);
  }
}

function handleHtml(html) {
  //in selector tool we are geeting the whole html of a page
  let selTool = cheerio.load(html);

  let contentArr = selTool(".maincounter-number span");

  //  for(let i=0 ; i<contentArr.length; i++){
  //        let data = selTool(contentArr[i]).text()
  //        console.log('data' , data)
  //  }
  let totalCases = selTool(contentArr[0]).text(); // cases
   // cases
  console.log("Total Cases", totalCases);
  console.log("Totals Deaths", totalDeaths);
  console.log("Total Recoverd", totalRecoveries);
}

console.log("after");
