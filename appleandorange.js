// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let totalApples = 0
  for(let i = 0; i < apples.length; i++){
      if (s <= a + apples[i] && a + apples[i] <= t ) totalApples += 1
  }
  console.log(totalApples) 

  let totalOranges = 0
  for(let i=0; i < oranges.length; i++){
      if (t >= b + oranges[i] && b + oranges[i] >= s) totalOranges+= 1   
  }
  console.log(totalOranges)
}