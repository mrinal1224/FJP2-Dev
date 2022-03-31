const puppeteer = require("puppeteer");

let email = "vovis11314@procowork.com";
let password = "pepcoding123";

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
    console.log("Algo section clicked");
  });

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
