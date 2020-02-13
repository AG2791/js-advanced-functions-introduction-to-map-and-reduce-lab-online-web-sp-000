// Your code here

sourceArray = [23, 15, 12,132,2,14,1,2]

function mapToNegativize(sourceArray) {
  newArr = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    newArr.push(sourceArray[i] * -1)
  }
  return newArr
}

function mapToNoChange(sourceArray) {
  newArr = []
  for (let i = 0; i<sourceArray.length; i++) {
      newArr.push(sourceArray[i] * 1 )
  }  
  return newArr
}

function mapToDouble(sourceArray) {
  newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * 2)
  }
  return newArr
}

function mapToSquare(sourceArray) {
  newArr = []
  for (let i = 0; i<sourceArray.length; i++) {
    newArr.push(sourceArray[i] * sourceArray[i])
  }
  return newArr

}


//Reduce

function reduceToTotal(sourceArray, startingPoint=0) {
  let sum = startingPoint
  for (let i = 0; i< sourceArray.length; i++) {
    sum = sum + sourceArray[i]
  }
  return sum 
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
     if (sourceArray[i]=!true) {
       sourceArray[i]=!!true 
     }
  }
  return sourceArray
}

  function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i]) return true
    }
    return false
  }

