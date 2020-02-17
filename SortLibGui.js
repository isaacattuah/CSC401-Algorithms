///The following functions input the sorted array into the TextAreaBox 


//This function adds inputted numbers to arrays
function addTo() {
    let myarr = []
    let values = document.getElementById("uarray").value.toString() //Change input to a string
    myarr = values.split(' ').map(Number) //Split input based on spaces and map as a number
    return myarr
}

//Insertion Sort Algorithm Implementation
insertionSort = (array) => {
    for (outer = 1; outer < array.length; outer++) {
        for (inner = 0; inner < outer; inner++) {
            document.getElementById("answerbox").innerHTML= array.join(' ')
            if (array[outer] < array[inner]) {
                const [element] = array.splice(outer, 1)
                array.splice(inner, 0, element)
            }
        }
    }
    document.getElementById("answerbox").innerHTML= array.join(' ')
    document.getElementById("answerbox").innerHTML = array
}

//Bubble Sort Algorithm Implementation
bubbleSort = (array) => {
    let swapped = false
    do {
        swapped = false
        array.forEach((current, i) => {
            document.getElementById("answerbox").innerHTML= array.join(' ')
            if (current > array[i + 1]) {
                const temp = current
                document.getElementById("answerbox").innerHTML= array.join(' ')

                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }
        })
    } while (swapped)
    document.getElementById("answerbox").innerHTML= array.join(' ')
    document.getElementById("answerbox").innerHTML = array
}

//Bubble Sort Algorithm Implementation
quickSort = (array) => {
    if (array.length < 2) {
        document.getElementById("answerbox").innerHTML= array
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
    document.getElementById("answerbox").innerHTML= output.join(' ')
    document.getElementById("answerbox").innerHTML = output
}



//Merge Sort Algorithm Implementation
divide = (array) => {
    if (array.length < 2) {
        document.getElementById("answerbox").innerHTML = array
    }
        const mid = Math.floor(array.length / 2)
        const smallOne = array.slice(0, mid)
        const smallTwo = array.slice(mid)
        document.getElementById("answerbox").innerHTML = sort(divide(smallOne), divide(smallTwo))
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
    document.getElementById("answerbox").innerHTML= output
    document.getElementById("answerbox").innerHTML = output
    }

let emptyArray = []
mergeSort = (array) => {
document.getElementById("answerbox").innerHTML= sort(divide(array), emptyArray)
}

  
    