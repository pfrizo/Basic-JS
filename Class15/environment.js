let num = [5, 8, 2, 9, 3]
num.push(1) /* Adds 1 to the end of the array (append) */
num.sort() /* Sort the values ​​in ascending order */

console.log(num)
console.log(`The array has ${num.length} positions`)
console.log(`Array's first value is ${num[0]}`)

let pos = num.indexOf(3)

if(pos == -1){
    console.log(`Value not found`)
} else {
    console.log(`Value is in position ${pos}`)
}