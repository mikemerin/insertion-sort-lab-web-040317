function findMinAndRemove(array){

  let min = array[0]
  let index = 0

  array.forEach((x, i) => {
    if (x < min) {
      min = x
      index = i
    }
  })

  array.splice(index, 1)
  return min

}

function insertionSort(array){

  let sortedArray = []

  while (array.length > 0) {
    sortedArray.push(findMinAndRemove(array))
  }

  return sortedArray

}

// done
