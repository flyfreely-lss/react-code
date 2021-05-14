const num1 = [1, 2, 3]
const num2 = [2, 5, 6]

function merge() {
    return num1
        .slice(0, num1.length)
        .concat(num2.slice(0, num2.length))
        .sort((a, b) => a - b)
}

console.log(merge())