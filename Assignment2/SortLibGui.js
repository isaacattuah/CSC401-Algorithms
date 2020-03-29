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

//This functions prints a set of random numbers
function randomNumbers() {
    let number = parseInt(document.getElementById("arraySize").value);
    let RandomArray = Array.from({
        length: number
    }, () => Math.floor(Math.random() * 1001));
    document.getElementById("uarray").innerHTML = RandomArray.join(' ').toString();
}



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
    let counter = 0;
    if (array.length > 15) {
        for (outer = 1; outer < array.length; outer++) {
            for (inner = 0; inner < outer; inner++) {
                counter++;
                // console.log(array.join(' '))
                if (array[outer] < array[inner]) {
                    const [element] = array.splice(outer, 1)
                    array.splice(inner, 0, element)
                }
            }
        }
        counter++;
        // console.log(array.join(' '))
        document.getElementById("sort").innerHTML = "The number of steps have been indicated for this Insertion Sort"
        console.log("You have " + counter + " steps for this insertion sort");
        // return array
    } else {
        for (outer = 1; outer < array.length; outer++) {
            for (inner = 0; inner < outer; inner++) {
                counter++;
                console.log(array.join(' '))
                if (array[outer] < array[inner]) {
                    const [element] = array.splice(outer, 1)
                    array.splice(inner, 0, element)
                }
            }
        }
        counter++;
        console.log(array.join(' '))
        document.getElementById("sort").innerHTML = "You array has been sorted using Insertion Sort"
        console.log("You have " + counter + " steps for this insertion sort");
        return array
    }
}

//Bubble Sort Algorithm Implementation
bubbleSort = (array) => {
    let counter = 0;
    if (array.length > 15) {
        let swapped = false
        do {
            swapped = false
            array.forEach((current, i) => {
                counter++;
                // console.log(array.join(' '))
                if (current > array[i + 1]) {
                    const temp = current
                    counter++;
                    // console.log(array.join(' '))

                    array[i] = array[i + 1]
                    array[i + 1] = temp
                    swapped = true
                }
            })
        } while (swapped)
        counter++;
        // console.log(array.join(' '))
        document.getElementById("sort").innerHTML = "The number of steps have been indicated for this Bubble Sort"
        console.log("You have " + counter + " steps for this bubble sort");
        // return array
    } else {
        let swapped = false
        do {
            swapped = false
            array.forEach((current, i) => {
                counter++;
                console.log(array.join(' '))
                if (current > array[i + 1]) {
                    const temp = current
                    counter++;
                    console.log(array.join(' '))

                    array[i] = array[i + 1]
                    array[i + 1] = temp
                    swapped = true
                }
            })
        } while (swapped)
        counter++;
        console.log(array.join(' '))
        document.getElementById("sort").innerHTML = "Your array has been sorted using Bubble Sort"
        console.log("You have " + counter + " steps for this bubble sort");
        return array
    }
}


//Quick Sort Algorithm Implementation
let counter = 0;
quickSort = (array) => {

    if (array.length > 15) {
        if (array.length < 2) {
            return array
        }
        let chosenIndex = array.length - 1
        let chosen = array[chosenIndex]
        let a = []
        let b = []
        for (let i = 0; i < chosenIndex; i++) {
            const temp = array[i]
            temp < chosen ? a.push(temp) : b.push(temp)
            counter++;
        }

        let output = [...quickSort(a), chosen, ...quickSort(b)]
        // console.log(output.join(' '))
        document.getElementById("sort").innerHTML = "The total number of steps have been indicated for this Quick Sort"
        if (array.length == 2) {
            console.log("You have 1 steps for this quick sort");
            counter = 0
        } 
        // return output

    }
    else{

    
    if (array.length < 2) {
        return array
    }
    let chosenIndex = array.length - 1
    let chosen = array[chosenIndex]
    let a = []
    let b = []
    for (let i = 0; i < chosenIndex; i++) {
        const temp = array[i]
        temp < chosen ? a.push(temp) : b.push(temp)
        counter++;
    }

    let output = [...quickSort(a), chosen, ...quickSort(b)]
    console.log(output.join(' '))
    document.getElementById("sort").innerHTML = "You array has been sorted using Quick Sort"

    
        console.log("You have " + counter + " steps for this Quick Sort")
        

    return output
    }
}



//Merge Sort Algorithm Implementation
let MergeCounter = 0;

divide = (array) => {

    
    if (array.length < 2) {
        return array
    }
    const mid = Math.floor(array.length / 2)
    const smallOne = array.slice(0, mid)
    const smallTwo = array.slice(mid)
    MergeCounter++;
    return sort(divide(smallOne), divide(smallTwo))
}

sort = (smallOne, smallTwo) => {
      
    const sorted = []
    while (smallOne.length && smallTwo.length) {
        if (smallOne[0] <= smallTwo[0]) {
            MergeCounter++;
            sorted.push(smallOne.shift())
        } else {
            MergeCounter++;
            sorted.push(smallTwo.shift())
        }
    }

    const output = [...sorted, ...smallOne, ...smallTwo]
    console.log(output)
    console.log("You have " + MergeCounter + " steps for this Merge Sort")
    return output
}

let emptyArray = []
mergeSort = (array) => {
    if (array.length > 15){
        document.getElementById("sort").innerHTML = "The total number of steps have been indicated at end of this Merge Sort"
        return sort(divide(array), emptyArray)
        
    }
    else {
    document.getElementById("sort").innerHTML = "You array has been sorted using Merge Sort"
    return sort(divide(array), emptyArray)
    }
}

function clearBox() {
    document.getElementById("uarray").innerHTML = ""
    document.getElementById("sort").innerHTML = ""
    counter = 0;
    MergeCounter = 0
}

function clearOutput() {
    document.getElementById("answerbox").innerHTML = ""
    document.getElementById("sort").innerHTML = ""
    counter = 0;
    MergeCounter = 0;
}