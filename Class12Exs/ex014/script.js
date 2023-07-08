function load(){
    var msg = document.getElementById('msg')
    var image = document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()

    msg.innerHTML = `It's now ${hour}h`

    if(hour < 12){
        image.src = "morning.jpg"
        image.alt = "Morning image"
        document.body.style.background = 'skyblue';
    } else if(hour <= 18){
        image.src = "afternoon.jpg"
        image.alt = "Afternoon image"
        document.body.style.background = '#DA8947';
    } else {
        image.src = "night.jpg"
        image.alt = "Night image"
        document.body.style.background = '#164768';
    }
}