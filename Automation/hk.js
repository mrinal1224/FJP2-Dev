const puppeteer = require("puppeteer");

let email = "vovis11314@procowork.com";
let password = "pepcoding123";

const codeFile = require('./code')

let page;

const hackerRankLink = "https://www.hackerrank.com/auth/login";
let browserWillbeOpenedPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserWillbeOpenedPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
  })
  .then(function (newTab) {
    page = newTab;
    let websiteOpenPromise = page.goto(hackerRankLink);
    return websiteOpenPromise;
  })
  .then(function () {
    let emailWillbeTypedPromise = page.type("input[id='input-1']", email, {
      delay: 100,
    });
    return emailWillbeTypedPromise;
  })
  .then(function () {
    let passwordWillbeTypedPromise = page.type(
      "input[id='input-2']",
      password,
      { delay: 100 }
    );
    return passwordWillbeTypedPromise;
  })
  .then(function () {
    let loginButtonClickPromise = page.click(
      'button[data-analytics="LoginPassword"]',
      { delay: 50 }
    );
    return loginButtonClickPromise;
  })
  .then(function () {
    let algoSectionClickedPromise = waitandClick(
      '.topic-card a[data-attr1="algorithms"]',
      page
    );
    return algoSectionClickedPromise;
  })
  .then(function () {
        let clickWarmupPromise = waitandClick("input[value='warmup']" , page)
        return clickWarmupPromise
  }).then(function(){
    let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' , {delay:50})
    return allChallengesPromise
  }).then(function(questions){
    //console.log('No of question' , questions.length )

    let questionWillBeSolvedPromise = questionSolver(page , questions[0] , codeFile.answers[0])
    return questionWillBeSolvedPromise


  })










function waitandClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModalPromise = cPage.waitForSelector(selector);

    waitForModalPromise
      .then(function () {
        let clickTheModalPromise = cPage.click(selector);
        return clickTheModalPromise;
      })
      .then(function () {
        resolve();
      })
      .catch(function () {
        reject();
      });
  });
}



function questionSolver(page , questionIdx , answerIdx){
        return new Promise(function(resolve , reject){
          let questionWillbeClicked = questionIdx.click()
          questionWillbeClicked.then(function(){
            return waitandClick('.checkbox-input' , page)
          })
        })
}
