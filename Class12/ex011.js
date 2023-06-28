var age = 19

console.log(`You're ${age} years old`)

if(age < 16){
    console.log(`You can't vote`)
} else if (age < 18 || age > 65){
    console.log(`Your vote is optional `)
} else {
    console.log(`Your vote is required`)
}