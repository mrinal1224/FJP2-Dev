// Object

//key value pair 

// to declare an object

let obj = {}


let captain = {
       firstName : 'Steve',
       lastName : 'Rogers',
       friends: ['Bucky' , 'Tony Stark' , 'Dr Banner'],
       isAvenger : true,
       age:150,
       address:{
              state : 'New York',
              city : "Manhatten"
       },

       sayHi : function fn(){
              console.log('Cap says Hi')
       },
  
}

//console.log(captain)

//Dot notation

// console.log(captain.friends)

// // Bracket Notation
// console.log(captain['age'])

// captain.sayHi() // cap says hi

// //update object
// captain.isAvenger = 'False'
// console.log(captain)

// //create something inside an object
// captain.movies = ['first Avenger' , "Age of Ultron" , 'Endgame']
// console.log(captain)

//delete a property
// delete captain.age 
// console.log(captain)

//special loop (For in loop)

for(let key in captain){
       console.log("Key->" , key , 'Value->' , captain[key])
} 


