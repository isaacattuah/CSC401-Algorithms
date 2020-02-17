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
    return output
}