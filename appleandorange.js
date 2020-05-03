// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let totalApples = 0
  for(let i = 0; i < apples.length; i++){
      if (apples[i] + a >= s) totalApples += 1
  }

  console.log(totalApples) 
  let totalOranges = 0
  for(let i=0; i < oranges.length; i++){
      if (b - oranges[i] <= t) {
          totalOranges+= 1
      }
  }

  console.log(totalOranges)

}