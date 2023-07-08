function verify(){
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.getElementById('res')

    if (fyear.value.length == 0 || fyear.value > year){
        alert('[ERROR] CHECK THE DATA AND TRY AGAIN')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if(fsex[0].checked){
            gender = 'Man'
            if(age >= 0 && age < 10){
                img.setAttribute('src', 'kidm.jpg')
            } else if (age < 25){
                img.setAttribute('src', 'youngm.jpg')
            } else if (age < 55){
                img.setAttribute('src', 'adultm.jpg')
            } else {
                img.setAttribute('src', 'oldm.jpg')
            }
        } else {
            gender = 'Woman'
            if(age >= 0 && age < 10){
                img.setAttribute('src', 'kidw.jpg')
            } else if (age < 25){
                img.setAttribute('src', 'youngw.jpg')
            } else if (age < 55){
                img.setAttribute('src', 'adultw.jpg')
            } else {
                img.setAttribute('src', 'oldw.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `A ${age} years old ${gender} detected`
        res.appendChild(img)
    }
}