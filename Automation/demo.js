const puppeteer = require('puppeteer')


let browserWillbeOpenedPromise = puppeteer.launch({
       headless:false,
       defaultViewport:null,
       args : ['--start-maximized']
})

browserWillbeOpenedPromise.then(function(browserInstance){
       let newTabPromise = browserInstance.newPage()
       return newTabPromise
}).then(function(newTab){
       let websiteOpenPromise = newTab.goto('https://www.pepcoding.com/')
       return websiteOpenPromise
}).then(function(){
       console.log('Website Opened')
})



