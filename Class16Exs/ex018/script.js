let options = []
let res = document.getElementById('res')

function addNumber(){
    let ntxt = document.getElementById('ntxt')
    let num = Number(ntxt.value)

    if (ntxt.value.length == 0) {
        alert('Enter a number before trying to add!')
    } else if (num > 100 || num < 1){
        alert('Enter a valid number!')
    } else {
        let pos = options.indexOf(num)
        if(pos != -1){
            alert(`Value ${num} already exists`)
        } else {
            let numsel = document.getElementById('numsel')
            let option = document.createElement('option')
            let res = document.getElementById('res')

            option.text = `Value ${num} added`
            option.value = num
            options.push(num)

            numsel.appendChild(option)
            res.innerHTML = ''
            ntxt.value = ''
            ntxt.focus() //select the ntxt field automatically
            console.log(options)
        } 
    }
}

function finish(){
    
    if(options.length == 0){
        alert('Enter some values before trying to finish!')
    } else {
        let p = []

        for(let i = 0; i < 5; i++){
            p[i] = document.createElement('p')
        }

        p[0].innerHTML = `We have ${options.length} numbers registered`
        p[1].innerHTML = `Highest recorded value is ${optionsMax()}`
        p[2].innerHTML = `Lowest recorded value is ${optionsMin()}`
        p[3].innerHTML = `Adding all the values, we have ${optionsSum()}`
        p[4].innerHTML = `Average of the recorded values is ${optionsAvg()}`
        
        for(let i in p){
            res.appendChild(p[i])
        }
    }
}

function optionsMax(){
    let max = options[0]

    for(let i in options){
        if(options[i] > max){
            max = options[i]
        }
    }

    return max
}

function optionsMin(){
    let min = options[0]

    for(let i in options){
        if(options[i] < min){
            min = options[i]
        }
    }

    return min
}

function optionsSum(){
    let sum = 0

    for(let i in options){
        sum += options[i]
    }

    return sum
}

function optionsAvg(){
    let avg = optionsSum() / options.length
    return avg
}