let myPromise = new Promise(function(resolve , reject){
       const a = 4
       const b = 4

       if(a==b){
              resolve('Yes  a and b are Equal')
       }

       else{
              reject('They are not Equal')
       }
})



myPromise.then(function(data){
       console.log('This is coming from resolve method  ' + data)
})


myPromise.catch(function(err){
   console.log('this is coming from reject method  ' + err)
})