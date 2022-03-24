const inquirer = require('inquirer')


inquirer
  .prompt([
     {
            type : 'list',
            name : 'c1',
            choices : ['choice1' , 'choice2']
     }
  ])
  .then(function(ans) {
      if(ans.c1== 'choice1'){
             console.log('Awesome Choice')
      }
      else{
             console.log('Bekaar choice')
      }
  })
 