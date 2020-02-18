(function () {
    var old = console.log;
    var logger = document.getElementById('answerbox');
    console.log = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += "-----------------------------------------------------------------------------" + '\n';
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], 2) : arguments[i]) + '\n';
            } else {
                logger.innerHTML += arguments[i] + '\n';
            }
        }
    }
})();
//The following functions input the sorted array into the console


    


//This function adds inputted numbers to arrays
function addTo() {
    let myarr = []
    let values = document.getElementById("uarray").value.toString() //Change input to a string
    myarr = values.split(' ').map(Number) //Split input based on spaces and map as a number
    console.log(myarr) //to confirm it has been added to the array
    return myarr
}

//Insertion Sort Algorithm Implementation
insertionSort = (array) => {
  
    for (outer = 1; outer < array.length; outer++) {
        for (inner = 0; inner < outer; inner++) {
            console.log(array.join(' '))
            if (array[outer] < array[inner]) {
                const [element] = array.splice(outer, 1)
                array.splice(inner, 0, element)
            }
        }
    }
    console.log(array.join(' '))
    document.getElementById("sort").innerHTML = "You array has been sorted using Insertion Sort"
    return array
}

//Bubble Sort Algorithm Implementation
bubbleSort = (array) => {
    
    let swapped = false
    do {
        swapped = false
        array.forEach((current, i) => {
            console.log(array.join(' '))
            if (current > array[i + 1]) {
                const temp = current
                console.log(array.join(' '))

                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }
        })
    } while (swapped)
    console.log(array.join(' '))
    document.getElementById("sort").innerHTML = "You array has been sorted using Bubble Sort"
    return array
}

//Bubble Sort Algorithm Implementation
quickSort = (array) => {
    
    if (array.length < 2) {
        return array
    }
    const chosenIndex = array.length - 1
    const chosen = array[chosenIndex]
    const a = []
    const b = []
    for (let i = 0; i < chosenIndex; i++) {
        const temp = array[i]
        temp < chosen ? a.push(temp) : b.push(temp)
    }

    const output = [...quickSort(a), chosen, ...quickSort(b)]
    console.log(output.join(' '))
    document.getElementById("sort").innerHTML = "You array has been sorted using Quick Sort"
    return output
}



//Merge Sort Algorithm Implementation
divide = (array) => {
    if (array.length < 2) {
        return array
    }
        const mid = Math.floor(array.length / 2)
        const smallOne = array.slice(0, mid)
        const smallTwo = array.slice(mid)
        return sort(divide(smallOne), divide(smallTwo))
    }

sort = (smallOne, smallTwo) => {
    const sorted = []
    while (smallOne.length && smallTwo.length) {
        if (smallOne[0] <= smallTwo[0]) {
            sorted.push(smallOne.shift())
        } else {
            sorted.push(smallTwo.shift())
            }
        }
    
    const output = [...sorted, ...smallOne, ...smallTwo]
    console.log(output)
    
    return output
    }

let emptyArray = []
mergeSort = (array) => {
document.getElementById("sort").innerHTML = "You array has been sorted using Merge Sort"
return sort(divide(array), emptyArray)
}



  
    