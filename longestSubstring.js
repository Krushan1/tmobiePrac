var numTeams = function(rating){
    if(rating.length !== 3) {
      for(let i=0; i<rating.length; i++) {
          for(let j=1; j<rating.length; j++) {
              if(rating[i] > rating[j]) {
                  console.log(rating[j])
              }
          }
      }
        return rating;
    }
    return 0
}

// var conditionSatisfied = (arr) => {
//     arr.forEach(element => {
//        return  
//     });
// }
console.log(numTeams([2,5,3,4,1]))
//module.exports = lengthOfLongestSubstring;