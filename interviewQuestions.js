// Write a function that counts duplicates in an array.  

function countDuplicates(arr){
  let duplicates = []
  for(let i=0; i < arr.length -1; i++){
    debugger
    for(let j=i+1; j < arr.length; j++){
      if (arr[i] == arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i])
      }
    }
  }
  console.log(duplicates)
  return duplicates.length
}

countDuplicates([4,4,4,5,2,29,192,198,29,4])

function countDuplicatesWithHM(arr){
  let map = {}
  let dups = []
  for (let num of arr){
	map[num]? map[num] += 1: map[num] = 1
  }
  for (let num in map){
  	if (map[num]>1){
    	dups.push(parseInt(num))
    }
  }
  return dups
}

countDuplicatesWithHM([4,4,4,5,2,29,192,198,29,4])

