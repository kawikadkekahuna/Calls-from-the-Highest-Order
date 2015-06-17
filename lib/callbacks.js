var DataStore = require('./datastore.js');

function wait(n,callback) {

  setTimeout(callback,n*1000);
}
// // Testing Wait
// console.log('wait 3 started');
// wait(3,function(){
// console.log('wait 3 done');
// })

function repeat (times,callback) {
  for(var i =0; i< times; i++){
    callback(i);
  }
}

//Testing Repeat
// repeat(10,function(iteration){
//   console.log(100 + iteration);
// });

//Testing Repeat and Wait
// wait(4,function(){  
//   repeat(2,function(i){
//     console.log('repeating for i ' + i );  
//     wait(i*3,function(){
//         repeat(3,function(j){
//        console.log('i' + i + 'j' + j );     
//         });
//     });
//   });  
// });



function User () {
  
  

  
}

User.find = function(query,callback){ 
  var error = null;
  //Grabs all the indexes that fits the query
  var index = DataStore.User.filter(function(obj){
    for(var key in obj){
      var valid = true;
      for(var qKey in query){

        if(!valid){
          break;
        }

        if(query[qKey] === obj[qKey]){
          valid = true;
        }else{
          valid = false;
        }
      
    }
  return valid;
  }
});
  //Grabs the error type if any.  Default is null

  //////RangeError Checker//////////////// 
  for(var qKey in query){
    for(var key in DataStore.User){
      if(!DataStore.User[key].hasOwnProperty(qKey)){
        error = new RangeError('Invalid entry');
        break;
        }
      }
    }
  
  callback(error,index);
} 








module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};