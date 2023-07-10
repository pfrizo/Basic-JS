function tableGenerate(){
    var ntxt = document.getElementById('ntxt')
    var n = Number(ntxt.value)
    var table = document.getElementById('table')

    if(ntxt.value.length == 0){
        alert('Type a number on the field!')
    } else {
        table.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            var option = document.createElement('option')
            option.text = `${n} * ${i} = ${n*i}`
            option.value = `${i}`
            table.appendChild(option)
        }
    }
}