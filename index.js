// code your solution here


//creat a function called saturday fun
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
 // write another function that will tell us what we have to do on saturday.
 
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  // write a wrap adjective function
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${ style }${ adjective }${ style } !`
    }
  }