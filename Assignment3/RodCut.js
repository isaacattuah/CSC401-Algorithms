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

function randomNumbers() {
    let number = parseInt(document.getElementById("arraySize").value);
    let RandomArray = Array.from({
        length: number
    }, () => Math.floor(Math.random() * 101));
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
let steps = 0;
function dyn(prices, length) {
    const max = [0]; //len 0 as price 0                                                                                                                
    for (let i = 1; i <= length; i++) {
        const ps = prices.slice(0, i);
        const all = ps.map((p, l) => p + max[i - l - 1]);
        max[i] = Math.max(...all);
        steps++;
    }
    return max[length];
}

// recursive version: O(2^n)                                                                                                                            
function rec(prices, length) {
    if (length === 0) return 0;
    const ps = prices.slice(0, length);
    const all = ps.map((p, l) => p + rec(prices, length - l - 1));
    return Math.max(...all);
}

// recursive version with memorize                                                                                                                      
function memorize(rec) {
    const cache = [];
    return function (prices, length) {
        if (cache[length] === undefined) {
            cache[length] = rec(prices, length);
        }
        return cache[length];
    };
}
const mem = memorize(function (prices, length) {
    if (length === 0) return 0;
    const ps = prices.slice(0, length);
    const all = ps.map((p, l) => p + mem(prices, length - l - 1));
    return Math.max(...all);
});


rodCut = (array) => {  
    if (array.length < 5 || array.length > 25) {
        console.log("Input must be between 5 and 25")
    }
    else{                                                                                                                                         
 const prices = array;
 const rods = Array.from(Array(20), (_, i) => i + 1);
// console.log(rods.map(l => dyn(prices, l))); // fast                                                                                                     
//console.log(rods.map(l => mem(prices, l))); // fast                                                                                                    
// console.log(rods.map(l => rec(prices, l))); // slow 
newArray = rods.map(l => dyn(prices, l));
console.log(newArray);
console.log("Minimum Cost: " + newArray[0]);
console.log("Maximum Cost: " + newArray[newArray.length -1]);
console.log("Steps taken: " + steps);
newArray.length = 0;
rods.length = 0;
prices.length = 0;
    }
}

function clearBox() {
    document.getElementById("uarray").innerHTML = ""
    document.getElementById("sort").innerHTML = ""
  
    
}

function clearOutput() {
    document.getElementById("answerbox").innerHTML = ""
    document.getElementById("sort").innerHTML = ""
    
}