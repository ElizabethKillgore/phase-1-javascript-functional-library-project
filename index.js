
function myEach(collection, alertCallback) {
   let changedCollection = Object.values(collection)
   changedCollection.forEach((element) => alertCallback(element)) 
    return collection
}
    

function myMap(collection, mpCallback) {
    const tripledCollection = []
    let newArray = Object.values(collection)
    
    for (const num of newArray) {
        tripledCollection.push(mpCallback(num))
    }
 return tripledCollection
}  

function myReduce(oldCollection, callback, initialValue = 0) {
    let newCollection = Object.values(oldCollection)
    if (initialValue === 0) { 
        const totalValue = newCollection.reduce((acc, currentElement) => {
            return callback(acc, currentElement, newCollection)
        })
       return totalValue  
          
    } else {
       const totalValue = newCollection.reduce((acc, currentElement) => {
        return callback(acc, currentElement, newCollection)
        }, initialValue)
    return totalValue  
    }  
}

function myFind(collection, predicateCallback) {
    let searchArray = Object.values(collection)
    const foundItem = searchArray.find(predicateCallback)
    if (foundItem) return foundItem    
}

function myFilter(collection, predicateCallback) {
    let collectionArray = Object.values(collection)
    const trueElements = collectionArray.filter(predicateCallback)
    if (trueElements) return trueElements
}

function mySize(collection) {
    let sizeCollection = Object.values(collection)
    const totalElements = sizeCollection.length
    return totalElements
}


 function myFirst(array, n) {
    if (n === undefined) {
        let firstElement = array.slice(0, 1)
        return firstElement[0]
    } else {
        let firstElement = array.slice(0, n)
        console.log(array)
        console.log('hello:', firstElement)
        return firstElement
    }
 }

 function myLast(array, n) {
    if (n === undefined) {
        let lastElement = array.slice(3)
        console.log('hello:', lastElement)
        return lastElement[3]
    } else {
        let lastElement = array.slice(-n)
        return lastElement
    }
 }

function myLast(array, n = false) {
    if (n) {
       return array.slice(array.length-n, array.length)
    } else { 
        return array[array.length-1]
    }
}

function myKeys(object) {
   return Object.keys(object) 
}

function myValues(object) {
    return Object.values(object)
}