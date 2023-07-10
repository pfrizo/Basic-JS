function count(){
    var starttxt = document.getElementById('start')
    var endtxt = document.getElementById('end')
    var steptxt = document.getElementById('steps')
    var start = Number(starttxt.value)
    var end = Number(endtxt.value)
    var step = Number(steptxt.value)
    var res = document.getElementById('res')
    var p = document.createElement('p')
    
    if(starttxt.value.length == 0 || endtxt.value.length == 0){
        res.innerHTML = 'Impossible to count!'
    } else {
        if (steptxt.value.length == 0 || step == 0){
            alert('Invalid Steps! Considering 1 step')
            step = 1
        }
        res.innerHTML = 'Counting:'

        if (start > end){
            while(start >= end){
                p.innerHTML += `${start} &#128073;`
                start -= step
            }
        } else {
            while(start <= end){
                p.innerHTML += `${start} &#128073;`
                start += step
            }
        }
    
        p.innerHTML += '&#127937;'
        res.appendChild(p)
    }
}